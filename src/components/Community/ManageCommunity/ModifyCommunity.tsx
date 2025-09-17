import React, { useEffect, useState, useCallback } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Upload,
  Avatar,
  Typography,
  Space,
  Divider,
  Card,
  Image,
  Modal,
  Drawer,
  Checkbox,
  Tag,
} from "antd";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import {
  UploadOutlined,
  PlusOutlined,
  SearchOutlined,
  UserOutlined,
  DeleteOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import type { UploadProps } from "antd";
import toast from "react-hot-toast";
import { getDoctorFiltersAPI } from "@/redux/slices/doctor/doctorService";
import { useDispatch } from "react-redux";
import { getAllAdmins } from "@/redux/slices/doctorUsers/doctorUsersService";
import { getAllClientEmpoyess } from "@/redux/slices/employees/EmployeeService";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import useUploadToS3 from "@/hooks/useUploadToS3";
import { useSelector } from "react-redux";
import { getAllSpecializationCategoryAPI } from "@/redux/slices/medicines/medicineService";
import { createCommunityAPI, getAllCategoriesAndRulesAPI, updateCommunityAPI } from "@/redux/slices/community/communityService";
import { useNavigate } from "react-router";
import { setCurrentCommunity, updateFormData } from "@/redux/slices/community/communitySlice";
import { RootState } from "@/redux/store";
import { SquarePen } from "lucide-react";

const { Title, Text } = Typography;
const { TextArea } = Input;
const { Option } = Select;

interface FormData {
  communityName: string;
  description: string;
  category_names: string[];
  postPermission: string;
  adminMembers: string[];
  members: string[];
  coverImage?: File;
  bannerImages: string[];
  rules_names: string[];
}

const ModifyCommunity = ({type, communityDetails}:any) => {
  const [form] = Form.useForm();
  const postPermission = Form.useWatch('postPermission', form);
  const [formData, setFormData] = useState<FormData>({
    communityName: "",
    description: "",
    category_names: [],
    postPermission: "",
    adminMembers: [],
    members: [],
    bannerImages: [],
    rules_names: [],
  });
  const [loading, setLoading] = useState(false);
  const [doctorCategories, setDoctorCategories] = useState<any[]>([]);
  const [allAvailableAdmins, setAllAvailableAdmins] = useState<any[]>([]);
  const [allAvailableMembers, setAllAvailableMembers] = useState<any>({});
  const [memberPage, setMemberPage] = useState(1);
  const [memberCount, setMemberCount] = useState(10);
  const [loadingMoreMembers, setLoadingMoreMembers] = useState(false);
  const [hasMoreMembers, setHasMoreMembers] = useState(true);
  const [bannerImages, setBannerImages] = useState<string[]>([]);
  const [coverImage, setCoverImage] = useState<string>("");
  const [selectedCategoryNames, setSelectedCategoryNames] = useState<string[]>([]);
  const [selectedRulesNames, setSelectedRulesNames] = useState<string[]>([]);
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);
  const [selectedAdmins, setSelectedAdmins] = useState<number[]>([]);
  const [selectedMembersDetails, setSelectedMembersDetails] = useState<any[]>([]);
  const [selectedAdminsDetails, setSelectedAdminsDetails] = useState<any[]>([]);
  const [memberSearchTerm, setMemberSearchTerm] = useState("");
  const [memberDrawerVisible, setMemberDrawerVisible] = useState(false);
  const [drawerType, setDrawerType] = useState<'members' | 'admins'>('members');
  const [categoriesModalVisible, setCategoriesModalVisible] = useState(false);
  const [rulesModalVisible, setRulesModalVisible] = useState(false);
  const [customInput, setCustomInput] = useState("");
  const [customRuleContent, setCustomRuleContent] = useState("");
  const [optionsSearchTerm, setOptionsSearchTerm] = useState("");
  const [allMembersSelected, setAllMembersSelected] = useState(false);
  const dispatch = useDispatch() as any;
  const { linkableId: clientId } = useClientLinkableId();
  const { uploadToS3 } = useUploadToS3();
  const { user } = useSelector(({ auth }: any) => auth);
  const navigate = useNavigate();
  const { allCategories, allRules } = useSelector(({ community }: RootState) => community);


  useEffect(() => {
    console.log("communityDetails mod : ", communityDetails);
  }, [communityDetails])

  useEffect(() => {
    console.log("selected Rules : ", selectedRulesNames);
  }, [selectedRulesNames])
  
  const getAllDoctorsCategory = async (categorySearch = "") => {
    try {
      setLoading(true);
      const result = (await dispatch(
        getAllSpecializationCategoryAPI({
          page: 1,
          count: 10,
          section_name: "doctor",
          searchText: categorySearch,
        })
      )) as any;
      if (result?.error) {
        toast.error(result?.error?.message || "Unknown Error Occured");
        return;
      }
      setDoctorCategories(result.payload?.data?.category_ids || []);
    } catch (error) {
      toast.error("unknown error occured");
    } finally {
      setLoading(false);
    }
  };

  const getCategoryOrRules = async (section_name: "category" | "rule" | "" = "") => {
    const response = await dispatch(getAllCategoriesAndRulesAPI(section_name));
    console.log("getCategoryOrRules : ", response);
  };

  const getAllAvailableAdmins = async () => {
    try {
      const result = (await dispatch(
        getAllAdmins({
          search: "",
          subRole: "",
          count: 10,
          page: 1,
        })
      )) as any;
      console.log("result", result);
      if (result?.error) {
        toast.error(result?.error?.message || "Unknown Error Occured");
        return;
      }
      setAllAvailableAdmins(result?.payload?.data);
    } catch (error) {
      toast.error("unknown error occured");
    }
  };

  const getAllAvailableMembers = async (memberSearch = "", isLoadMore = false) => {
    try {
      if (isLoadMore) {
        setLoadingMoreMembers(true);
      }
      
      const currentPage = isLoadMore ? memberPage : 1;
      const currentCount = isLoadMore ? memberCount + 10 : 10;
      
      const filters = {
        searchText: memberSearch,
        page: currentPage,
        count: currentCount,
        department: "",
        clientId: clientId,
      };
      
      const result = (await dispatch(getAllClientEmpoyess(filters))) as any;
      if (result?.error) {
        toast.error(result?.error?.message || "unknown error occured");
        return;
      }
      
      const newData = result?.payload?.data;
      const newMembers = newData?.associatedUsers || [];
      
      if (isLoadMore) {
        // Append new members to existing list
        setAllAvailableMembers((prev: any) => ({
           ...prev,
           associatedUsers: [...(prev?.associatedUsers || []), ...newMembers]
         }));
        setMemberCount(currentCount);
        
        // Check if there are more members to load
        if (newMembers.length < 10) {
          setHasMoreMembers(false);
        }
      } else {
        // Reset for new search or initial load
        setAllAvailableMembers(newData);
        setMemberPage(1);
        setMemberCount(10);
        setHasMoreMembers(newMembers.length >= 10);
      }
    } catch (error) {
      toast.error("unknown error occured");
    } finally {
      if (isLoadMore) {
        setLoadingMoreMembers(false);
      }
    }
  };

  useEffect(() => {
    getAllDoctorsCategory();
    getAllAvailableAdmins();
    getAllAvailableMembers();
    getCategoryOrRules('');
  }, []);

  // Search categories when search term changes
  useEffect(() => {
    if (categoriesModalVisible) {
      const timeoutId = setTimeout(() => {
        getAllDoctorsCategory(optionsSearchTerm);
      }, 300); // Debounce search

      return () => clearTimeout(timeoutId);
    }
  }, [optionsSearchTerm, categoriesModalVisible]);

  // Search members when member search term changes
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Reset pagination state for new search
      setMemberPage(1);
      setMemberCount(10);
      setHasMoreMembers(true);
      setLoadingMoreMembers(false);
      getAllAvailableMembers(memberSearchTerm);
    }, 300); // Debounce search

    return () => clearTimeout(timeoutId);
  }, [memberSearchTerm]);

  // Handle infinite scroll for members
  const handleMemberScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const isNearBottom = scrollTop + clientHeight >= scrollHeight - 50; // 50px threshold
    
    if (isNearBottom && !loadingMoreMembers && hasMoreMembers && !allMembersSelected) {
      getAllAvailableMembers(memberSearchTerm, true);
    }
  }, [loadingMoreMembers, hasMoreMembers, memberSearchTerm, allMembersSelected]);

  useEffect(() => {
    console.log("doctorCategories : ", doctorCategories);
    console.log("allAvailableAdmins : ", allAvailableAdmins);
    console.log("allAvailableMembers : ", allAvailableMembers);
  }, [doctorCategories, allAvailableAdmins, allAvailableMembers]);

  // Prefill form when editing existing community
  useEffect(() => {
    if (type === 'existing' && communityDetails) {
      console.log('Prefilling form with community details:', communityDetails);
      
      // Set form values
      form.setFieldsValue({
        communityName: communityDetails.name || '',
        description: communityDetails.description || '',
        postPermission: communityDetails.all_can_post ? 'everyone' : 'admins'
      });
      
      // Set banner images
      setBannerImages(communityDetails.banner_images || []);
      
      // Set cover image
      setCoverImage(communityDetails.cover_image || '');
      
      // Set selected admins
      if (communityDetails.admin_users && communityDetails.admin_users.length > 0) {
        const adminIds = communityDetails.admin_users.map((admin: any) => admin.id);
        setSelectedAdmins(adminIds);
        setSelectedAdminsDetails(communityDetails.admin_users);
      }
      
      // Set selected members
      // Check if all members are selected
      if (communityDetails.all_associated_users) {
        setAllMembersSelected(true);
        setSelectedMembers([]);
        setSelectedMembersDetails([]);
      } else if (communityDetails.associated_users && communityDetails.associated_users.length > 0) {
        const memberIds = communityDetails.associated_users.map((member: any) => member.id);
        setSelectedMembers(memberIds);
        setSelectedMembersDetails(communityDetails.associated_users);
        setAllMembersSelected(false);
      } else {
        setAllMembersSelected(false);
      }
      
      // Set selected categories
      if (communityDetails.category_names && communityDetails.category_names.length > 0) {
        setSelectedCategoryNames(communityDetails.category_names);
      }
      
      // Set selected rules
      if (communityDetails.rules_names && communityDetails.rules_names.length > 0) {
        setSelectedRulesNames(communityDetails.rules_names);
      }
      
      // Update Redux state
      dispatch(setCurrentCommunity(communityDetails));
      dispatch(updateFormData({
        communityName: communityDetails.name || '',
        description: communityDetails.description || '',
        postPermission: communityDetails.all_can_post ? 'everyone' : 'admins',
        bannerImages: communityDetails.banner_images || [],
        coverImage: communityDetails.cover_image || '',
        adminUsers: communityDetails.admin_users || [],
        associatedUsers: communityDetails.associated_users || [],
        allMembersSelected: communityDetails.all_associated_users || false
      }));
    }
  }, [type, communityDetails, form, dispatch]);

  const uploadProps: UploadProps = {
    name: "file",
    multiple: false,
    accept: ".jpg,.jpeg,.png,.pdf",
    beforeUpload: (file) => {
      const isValidSize = file.size / 1024 / 1024 < 10; // 10MB
      if (!isValidSize) {
        console.error("File must be smaller than 10MB!");
      }
      return false; // Prevent auto upload
    },
    showUploadList: false,
  };

  // Upload multiple banner images using a native file input
  const handleBannerImagesChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files?.length > 0) {
        try {
          setLoading(true);
          const filesArray = Array.from(files);
          toast.success(`Uploading ${filesArray.length} images...`);
          const uploadPromises = filesArray.map(async (file) => {
            const url = await uploadToS3(file, user?.id);
            return url;
          });
          const uploadedUrls = await Promise.all(uploadPromises);
          // Append new image URLs
          const newBannerImages = [...bannerImages, ...uploadedUrls.filter(Boolean)];
          setBannerImages(newBannerImages);
          
          // Dispatch real-time update to Redux
          const currentFormValues = form.getFieldsValue();
          dispatch(updateFormData({
            ...currentFormValues,
            bannerImages: newBannerImages,
            coverImage: coverImage,
            adminUsers: selectedAdminsDetails,
            associatedUsers: selectedMembersDetails
          }));
          
          toast.success("Images uploaded successfully!");
        } catch (error) {
          toast.error("Error uploading one or more images. Please try again.");
        } finally {
          setLoading(false);
        }
      }
    },
    [uploadToS3, user?.id]
  );

  // Delete an image from bannerImages list
  const handleDeleteBannerImage = useCallback((index: number) => {
    const newBannerImages = bannerImages.filter((_, i) => i !== index);
    setBannerImages(newBannerImages);
    
    // Dispatch real-time update to Redux
    const currentFormValues = form.getFieldsValue();
    dispatch(updateFormData({
      ...currentFormValues,
      bannerImages: newBannerImages,
      coverImage: coverImage,
      adminUsers: selectedAdminsDetails,
      associatedUsers: selectedMembersDetails
    }));
  }, [bannerImages, coverImage, selectedAdminsDetails, selectedMembersDetails, form, dispatch]);

  // Upload single cover image
  const handleCoverImageChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        try {
          setLoading(true);
          toast.success("Uploading cover image...");
          const uploadedUrl = await uploadToS3(file, user?.id);
          if (uploadedUrl) {
            setCoverImage(uploadedUrl);
            
            // Dispatch real-time update to Redux
            const currentFormValues = form.getFieldsValue();
            dispatch(updateFormData({
              ...currentFormValues,
              bannerImages: bannerImages,
              coverImage: uploadedUrl,
              adminUsers: selectedAdminsDetails,
              associatedUsers: selectedMembersDetails
            }));
            
            toast.success("Cover image uploaded successfully!");
          }
        } catch (error) {
          toast.error("Error uploading cover image. Please try again.");
        } finally {
          setLoading(false);
        }
      }
    },
    [uploadToS3, user?.id]
  );

  // Delete cover image
  const handleDeleteCoverImage = useCallback(() => {
    setCoverImage("");
    
    // Dispatch real-time update to Redux
    const currentFormValues = form.getFieldsValue();
    dispatch(updateFormData({
      ...currentFormValues,
      bannerImages: bannerImages,
      coverImage: "",
      adminUsers: selectedAdminsDetails,
      associatedUsers: selectedMembersDetails
    }));
  }, [bannerImages, selectedAdminsDetails, selectedMembersDetails, form, dispatch]);
  // Category management functions
  const handleCategoryToggle = (categoryName: string) => {
    setSelectedCategoryNames((prev: string[]) => {
      if (prev.includes(categoryName)) {
        // Remove category
        return prev.filter((c: string) => c !== categoryName);
      } else {
        // Add category
        return [...prev, categoryName];
      }
    });
  };

  const handleRemoveCategory = (categoryName: string) => {
    setSelectedCategoryNames((prev: string[]) => prev.filter((c: string) => c !== categoryName));
  };

  // Categories will be filtered by search term in the new filteredCategories variable below

  // Get category name for display (already a name)
  const getCategoryName = (categoryName: string) => {
    return categoryName;
  };

  // Get rule name for display - strip HTML tags for Tag component
  const getRuleName = (ruleName: string) => {
    // Create a temporary div to strip HTML tags
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = ruleName;
    return tempDiv.textContent || tempDiv.innerText || ruleName;
  };

  // Handle Select All Members functionality
  const handleSelectAllMembers = (checked: boolean) => {
    setAllMembersSelected(checked);
    
    if (checked) {
      // Clear individual selections when "Select All" is enabled
      setSelectedMembers([]);
      setSelectedMembersDetails([]);
    }
    
    // Dispatch real-time update to Redux
    const currentFormValues = form.getFieldsValue();
    dispatch(updateFormData({
      ...currentFormValues,
      bannerImages: bannerImages,
      coverImage: coverImage,
      adminUsers: selectedAdminsDetails,
      associatedUsers: checked ? [] : selectedMembersDetails,
      allMembersSelected: checked
    }));
  };

  // Member management functions
  const handleMemberToggle = (memberId: number) => {
    const member = allAvailableMembers?.associatedUsers?.find((user: any) => user.id === memberId);
    if (!member) return;

    if (drawerType === 'members') {
      // If "Select All" is active, disable individual selection
      if (allMembersSelected) {
        return;
      }
      setSelectedMembers(prev => {
        let newMembers, newMembersDetails;
        if (prev.includes(memberId)) {
          // Remove member
          newMembers = prev.filter(m => m !== memberId);
          newMembersDetails = selectedMembersDetails.filter(mem => mem.id !== memberId);
          setSelectedMembersDetails(newMembersDetails);
        } else {
          // Add member
          newMembers = [...prev, memberId];
          const exists = selectedMembersDetails.find(mem => mem.id === memberId);
          newMembersDetails = exists ? selectedMembersDetails : [...selectedMembersDetails, member];
          setSelectedMembersDetails(newMembersDetails);
        }
        
        // Dispatch real-time update to Redux
        const currentFormValues = form.getFieldsValue();
        dispatch(updateFormData({
          ...currentFormValues,
          bannerImages: bannerImages,
          coverImage: coverImage,
          adminUsers: selectedAdminsDetails,
          associatedUsers: newMembersDetails
        }));
        
        return newMembers;
      });
    } else {
      setSelectedAdmins(prev => {
        let newAdmins, newAdminsDetails;
        if (prev.includes(memberId)) {
          // Remove admin
          newAdmins = prev.filter(m => m !== memberId);
          newAdminsDetails = selectedAdminsDetails.filter(admin => admin.id !== memberId);
          setSelectedAdminsDetails(newAdminsDetails);
        } else {
          // Add admin
          newAdmins = [...prev, memberId];
          const exists = selectedAdminsDetails.find(admin => admin.id === memberId);
          newAdminsDetails = exists ? selectedAdminsDetails : [...selectedAdminsDetails, member];
          setSelectedAdminsDetails(newAdminsDetails);
        }
        
        // Dispatch real-time update to Redux
        const currentFormValues = form.getFieldsValue();
        dispatch(updateFormData({
          ...currentFormValues,
          bannerImages: bannerImages,
          coverImage: coverImage,
          adminUsers: newAdminsDetails,
          associatedUsers: selectedMembersDetails
        }));
        
        return newAdmins;
      });
    }
  };

  const handleRemoveMember = (memberId: number) => {
    const newMembers = selectedMembers.filter(m => m !== memberId);
    const newMembersDetails = selectedMembersDetails.filter(mem => mem.id !== memberId);
    
    setSelectedMembers(newMembers);
    setSelectedMembersDetails(newMembersDetails);
    
    // Dispatch real-time update to Redux
    const currentFormValues = form.getFieldsValue();
    dispatch(updateFormData({
      ...currentFormValues,
      bannerImages: bannerImages,
      coverImage: coverImage,
      adminUsers: selectedAdminsDetails,
      associatedUsers: newMembersDetails
    }));
  };

  const handleRemoveAdmin = (adminId: number) => {
    const newAdmins = selectedAdmins.filter(a => a !== adminId);
    const newAdminsDetails = selectedAdminsDetails.filter(admin => admin.id !== adminId);
    
    setSelectedAdmins(newAdmins);
    setSelectedAdminsDetails(newAdminsDetails);
    
    // Dispatch real-time update to Redux
    const currentFormValues = form.getFieldsValue();
    dispatch(updateFormData({
      ...currentFormValues,
      bannerImages: bannerImages,
      coverImage: coverImage,
      adminUsers: newAdminsDetails,
      associatedUsers: selectedMembersDetails
    }));
  };

  // Get member name by ID for display
  const getMemberNameById = (memberId: number) => {
    const member = selectedMembersDetails.find((user: any) => user.id === memberId);
    return member ? `${member.first_name} ${member.last_name}` : '';
  };

  // Get admin name by ID for display
  const getAdminNameById = (adminId: number) => {
    const admin = selectedAdminsDetails.find((user: any) => user.id === adminId);
    return admin ? `${admin.first_name} ${admin.last_name}` : '';
  };

  // Get filtered members from the API response
  const filteredMembers = allAvailableMembers?.associatedUsers || [];

  // Rules management functions
  const handleRuleToggle = (ruleName: string) => {
    setSelectedRulesNames((prev: string[]) => {
      if (prev.includes(ruleName)) {
        return prev.filter((r: string) => r !== ruleName);
      } else {
        return [...prev, ruleName];
      }
    });
  };

  const handleRemoveRule = (ruleName: string) => {
    setSelectedRulesNames((prev: string[]) => prev.filter((r: string) => r !== ruleName));
  };

  // Get filtered options for categories and rules separately
  const getFilteredCategories = () => {
    // Combine API categories with custom categories
    const apiCategories = allCategories.filter((category: any) => 
      category.name.toLowerCase().includes(optionsSearchTerm.toLowerCase())
    );
    
    // Add custom categories that are not in API categories
    const customCategories = selectedCategoryNames
      .filter((customName: string) => 
        !allCategories.some((apiCategory: any) => apiCategory.name === customName) &&
        customName.toLowerCase().includes(optionsSearchTerm.toLowerCase())
      )
      .map((customName: string, index: number) => ({
        id: `custom-category-${index}`,
        name: customName
      }));
    
    return [...apiCategories, ...customCategories];
  };

  const getFilteredRules = () => {
    // Combine API rules with custom rules
    const apiRules = allRules.filter((rule: any) => 
      rule.name.toLowerCase().includes(optionsSearchTerm.toLowerCase())
    );
    
    // Add custom rules that are not in API rules
    const customRules = selectedRulesNames
      .filter((customRule: string) => 
        !allRules.some((apiRule: any) => apiRule.name === customRule) &&
        customRule.toLowerCase().includes(optionsSearchTerm.toLowerCase())
      )
      .map((customRule: string, index: number) => ({
        id: `custom-rule-${index}`,
        name: customRule
      }));
    
    return [...apiRules, ...customRules];
  };

  const filteredCategories = getFilteredCategories();
  const filteredRules = getFilteredRules();

  // Handle real-time form changes to update Redux state and ViewCommunity
  const handleFormValuesChange = useCallback((changedValues: any, allValues: any) => {
    // Create updated form data with current state
    const updatedFormData = {
      ...allValues,
      bannerImages: bannerImages,
      coverImage: coverImage,
      adminUsers: selectedAdminsDetails,
      associatedUsers: selectedMembersDetails
    };
    
    // Dispatch to Redux for real-time updates in ViewCommunity
    dispatch(updateFormData(updatedFormData));
  }, [bannerImages, coverImage, selectedAdminsDetails, selectedMembersDetails, dispatch]);

  const handleFormSubmit = async (values: any) => {
    // Check if at least one admin is selected
    if (selectedAdmins.length === 0) {
      toast.error("Please select at least one admin for the community");
      return;
    }

    // Original form data for debugging
    const formDataWithImages = {
      ...values,
      bannerImages: bannerImages,
      coverImage: coverImage,
      
      members: selectedMembers,
      adminUsers: selectedAdminsDetails,
      associatedUsers: selectedMembersDetails
    };
    console.log("Form submitted:", formDataWithImages);
    
    // Update Redux state with current form data
    dispatch(updateFormData(formDataWithImages));
    
    // Construct dynamic payload in required format
    const dynamicPayload = {
      community: {
        name: values?.communityName || '',
        description: values?.description || '',
        client_id: clientId || '',
        banner_images: bannerImages || '',
        cover_image: coverImage || [],
        all_can_post: values?.postPermission === 'everyone',
        admin_users: [...(selectedAdmins || []), user?.id],
        "category_names": selectedCategoryNames || [],
        "rules_names": selectedRulesNames || [],
        // Handle member selection based on "Select All" or individual selection
        // ...(values?.postPermission !== 'everyone' && {
        all_associated_users: allMembersSelected,
        associated_users: allMembersSelected ? [] : selectedMembers || []
        // })
      }
    };

    if(type === "existing"){
      // delete client_id from dynamicPayload
      delete dynamicPayload?.community?.client_id;
    }
    
    console.log("Dynamic payload:", dynamicPayload);
    // Handle form submission logic here with dynamicPayload
    const res:any = type === 'existing' 
      ? await dispatch(updateCommunityAPI({
          id: communityDetails?.id,
          payload: dynamicPayload
        }))
      : await dispatch(createCommunityAPI(dynamicPayload));
    console.log("API res : ", res);
    
    if(res?.error){
      toast.error(res?.error?.message || "Unknown Error Occured");
      return;
    }
    toast.success(type === 'new' ? "Community Created Successfully" : "Community Updated Successfully");
    navigate("/communities")
  };

  return (
    <div className="max-h-[calc(100vh-90px)] overflow-y-auto shadow p-4">
      <Title
        level={2}
        className="!mb-8 !text-2xl font-semibold text-gray-900 dark:text-gray-100"
      >
        {type === 'new' ? 'Create Community' : 'Edit Community'}
      </Title>

      {/* Admin Profile Section */}
      <div className="!mb-8">
        <Space align="center" className="mb-6">
          <Avatar
            size={48}
            src={user?.image ?? ""}
            icon={<UserOutlined />}
            className="border-2 border-gray-200 dark:border-gray-600"
          />
          <div>
            <Text strong className="!text-lg text-gray-900 dark:text-gray-100">
              {user?.first_name || ""}
            </Text>
            <br />
            <Text type="secondary" className="text-gray-600 dark:text-gray-400">
              {user?.last_name || ""}
            </Text>
          </div>
        </Space>
      </div>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleFormSubmit}
        onValuesChange={handleFormValuesChange}
        initialValues={formData}
        className="flex flex-col gap-6"
      >
        {/* Community Name */}
        <Form.Item
          label={
            <Text className="!text-[16px] font-medium text-gray-700 dark:text-gray-300">
              Community Name
            </Text>
          }
          name="communityName"
          className="mb-0"
          rules={[{ required: true, message: "Please enter community name" }]}
        >
          <Input
            placeholder="Enter community name"
            className="h-12 rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
          />
        </Form.Item>

        {/* Upload Cover Image */}
        <div className="flex flex-col gap-4">
          <Text className="!text-[16px] font-medium text-gray-700 dark:text-gray-300">
            Upload Cover Image
          </Text>
          
          {!coverImage ? (
            <div className="relative">
              <input
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={handleCoverImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                disabled={loading}
              />
              <div className="border-2 border-dashed border-blue-300 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20 rounded-lg !py-8 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center">
                    <UploadOutlined className="text-2xl text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="text-center">
                  <Text className="text-lg font-medium text-blue-600 dark:text-blue-400 underline">
                    Choose File
                  </Text>
                  <Text className="text-lg font-medium text-gray-700 dark:text-gray-300 !ml-2">
                    Or Drag And Drop
                  </Text>
                  <br />
                  <Text className="!text-[16px] text-gray-500 dark:text-gray-400">
                    All Image formats up to 10 MB
                  </Text>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative group">
              <img
                src={coverImage}
                alt="Cover"
                className="w-full h-48 object-cover rounded-lg border-2 border-gray-200 dark:border-gray-600"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-200 rounded-lg flex items-center justify-center gap-3">
                <div className="relative">
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleCoverImageChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    disabled={loading}
                  />
                  <Button
                    type="primary"
                    icon={<UploadOutlined />}
                    className="!bg-blue-500 border-0"
                  >
                    Reupload
                  </Button>
                </div>
                <Button
                  type="primary"
                  danger
                  icon={<DeleteOutlined />}
                  onClick={handleDeleteCoverImage}
                  className="!bg-red-500 border-0"
                >
                  Remove
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Description */}
        <Form.Item
          label={
            <Text className="!text-[16px] font-medium text-gray-700 dark:text-gray-300">
              Description
            </Text>
          }
          name="description"
          className="mb-0"
        >
          <TextArea
            rows={4}
            placeholder="Enter community description"
            className="rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
          />
        </Form.Item>

        {/* Select Categories */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <Text className="!text-[16px] font-medium text-gray-700 dark:text-gray-300">
              Select Categories
            </Text>
            <Button
              type="primary"
              onClick={() => {
                setCategoriesModalVisible(true);
              }}
              className="!bg-[#252B61] border-0 !rounded-lg"
            >
              Choose Categories
            </Button>
          </div>
          
          {selectedCategoryNames.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {selectedCategoryNames.map((categoryName) => (
                <Tag
                  key={categoryName}
                  closable
                  onClose={() => handleRemoveCategory(categoryName)}
                  className="!bg-blue-50 !border-blue-200 !text-blue-700 dark:!bg-blue-900/20 dark:!border-blue-600 dark:!text-blue-300 !px-3 !py-1 !rounded-full"
                  closeIcon={<CloseOutlined className="!text-xs" />}
                >
                  {getCategoryName(categoryName)}
                </Tag>
              ))}
            </div>
          )}
        </div>

        {/* Who Can Post */}
        <Form.Item
          label={
            <Text className="!text-[16px] font-medium text-gray-700 dark:text-gray-300">
              Who Can Post In Community
            </Text>
          }
          name="postPermission"
          rules={[
            { required: true, message: "Please select posting permission" },
          ]}
          className="mb-0"
        >
          <Select
            placeholder="Who Can Post In Community"
            className="h-12"
            dropdownClassName="dark:bg-gray-800"
          >
            <Option value="everyone">All Members</Option>
            <Option value="admins">Admins Only</Option>
          </Select>
        </Form.Item>

        {/* Select Admins */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <Text className="!text-[16px] font-medium text-gray-700 dark:text-gray-300">
              Select Admins
            </Text>
            <Button
              type="primary"
              onClick={() => {
                setDrawerType('admins');
                setMemberDrawerVisible(true);
              }}
              className="!bg-[#252B61] border-0 !rounded-lg"
            >
              Choose Admins
            </Button>
          </div>
          
          {/* Selected Admins Tags */}
          {selectedAdmins.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {selectedAdmins.map((adminId) => (
                <Tag
                  key={adminId}
                  closable
                  onClose={() => handleRemoveAdmin(adminId)}
                  className="!bg-purple-50 !border-purple-200 !text-purple-700 dark:!bg-purple-900/20 dark:!border-purple-600 dark:!text-purple-300 !px-3 !py-1 !rounded-full"
                  closeIcon={<CloseOutlined className="!text-xs" />}
                >
                  {getAdminNameById(adminId)}
                </Tag>
              ))}
            </div>
          )}
        </div>

        {/* Select Members - Only show when postPermission is not 'everyone' */}
        {/* {postPermission !== 'everyone' && ( */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <Text className="!text-[16px] font-medium text-gray-700 dark:text-gray-300">
                Select Members
              </Text>
              <Button
                type="primary"
                onClick={() => {
                  setDrawerType('members');
                  setMemberDrawerVisible(true);
                }}
                className="!bg-[#252B61] border-0 !rounded-lg"
              >
                Choose Members
              </Button>
            </div>
            
            {/* Selected Members Tags */}
            {(selectedMembers.length > 0 || allMembersSelected) && (
              <div className="flex flex-wrap gap-2">
                {allMembersSelected ? (
                  <Tag
                    closable
                    onClose={() => handleSelectAllMembers(false)}
                    className="!bg-blue-50 !border-blue-200 !text-blue-700 dark:!bg-blue-900/20 dark:!border-blue-600 dark:!text-blue-300 !px-3 !py-1 !rounded-full"
                    closeIcon={<CloseOutlined className="!text-xs" />}
                  >
                    All Members Selected
                  </Tag>
                ) : (
                  selectedMembers.map((memberId) => (
                    <Tag
                      key={memberId}
                      closable
                      onClose={() => handleRemoveMember(memberId)}
                      className="!bg-green-50 !border-green-200 !text-green-700 dark:!bg-green-900/20 dark:!border-green-600 dark:!text-green-300 !px-3 !py-1 !rounded-full"
                      closeIcon={<CloseOutlined className="!text-xs" />}
                    >
                      {getMemberNameById(memberId)}
                    </Tag>
                  ))
                )}
              </div>
            )}
          </div>
        {/* )} */}

        {/* Upload Media Images */}
        <div className="flex flex-col gap-2">
          <Text className="!text-[16px] font-medium text-gray-700 dark:text-gray-300">
            Upload Media Images
          </Text>
          <div className="flex items-center space-x-4">
            <label className="cursor-pointer bg-white hover:outline hover:outline-blue-400 px-4 py-2 rounded-sm transition-colors duration-200 flex items-center gap-2 !text-sm border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100">
              <UploadOutlined className="!mr-2" />
              <span>Upload</span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleBannerImagesChange}
                className="!hidden"
              />
            </label>
          </div>
          {bannerImages?.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {bannerImages.map((image, index) => (
                <div key={index} className="relative group">
                  <Image
                    src={image}
                    alt={`Banner ${index + 1}`}
                    className="rounded-lg"
                  />
                  <button
                    onClick={() => handleDeleteBannerImage(index)}
                    type="button"
                    className="absolute top-2 right-2 p-1 bg-red-500 text-white !rounded-full transition-opacity w-[30px] h-[30px]"
                  >
                    <DeleteOutlined className="text-xs" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Select Rules */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <Text className="!text-[16px] font-medium text-gray-700 dark:text-gray-300">
              Community Rules
            </Text>
            <Button
              type="primary"
              onClick={() => {
                setRulesModalVisible(true);
              }}
              className="!bg-[#252B61] border-0 !rounded-lg"
            >
              Choose Rules
            </Button>
          </div>
          
          {selectedRulesNames.length > 0 && (
            <div className="flex items-center gap-2">
              <Tag
                className="!bg-orange-50 !border-orange-200 !text-orange-700 dark:!bg-orange-900/20 dark:!border-orange-600 dark:!text-orange-300 !px-3 !py-1 !rounded-full"
              >
                {selectedRulesNames.length} rule{selectedRulesNames.length === 1 ? '' : 's'} added
              </Tag>
            </div>
          )}
        </div>

        {/* Create/Update Button */}
        <div className="pt-6">
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="w-full !h-[3.5rem] !bg-[#252B61] border-0 !rounded-[30px] text-lg font-medium"
          >
            {type === "new" ? "Create" : "Update"}
          </Button>
        </div>
      </Form>

      {/* Categories Selection Modal */}
      <Modal
        title={
          <Text className="!text-lg font-semibold text-gray-900 dark:text-gray-100">
            Select Categories
          </Text>
        }
        open={categoriesModalVisible}
        onCancel={() => {
          setCategoriesModalVisible(false);
          setCustomInput('');
        }}
        footer={null}
        width={600}
        className="dark:bg-gray-800"
      >
        <div className="flex flex-col gap-4 mt-4">
          {/* Custom Input Section */}
          <div className="border-b border-gray-200 dark:border-gray-600 pb-4">
            <Text className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
              Add Custom Category
            </Text>
            <div className="flex gap-2">
              <Input
                placeholder="Enter custom category name"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                className="flex-1 h-10 rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                onPressEnter={() => {
                  if (customInput.trim()) {
                    if (!selectedCategoryNames.includes(customInput.trim())) {
                      setSelectedCategoryNames([...selectedCategoryNames, customInput.trim()]);
                    }
                    setCustomInput('');
                  }
                }}
              />
              <Button
                type="primary"
                onClick={() => {
                  if (customInput.trim()) {
                    if (!selectedCategoryNames.includes(customInput.trim())) {
                      setSelectedCategoryNames([...selectedCategoryNames, customInput.trim()]);
                    }
                    setCustomInput('');
                  }
                }}
                className="h-10 !bg-[#252B61] border-0"
                disabled={!customInput.trim()}
              >
                Add
              </Button>
            </div>
          </div>

          {/* Search Input */}
          <div>
            <Text className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
              Select from Predefined Categories
            </Text>
            <Input
              prefix={<SearchOutlined className="text-gray-400" />}
              placeholder="Search Categories"
              value={optionsSearchTerm}
              onChange={(e) => setOptionsSearchTerm(e.target.value)}
              className="h-10 rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
            />
          </div>

          {/* Categories List */}
          <div className="flex flex-col gap-2 max-h-[40vh] overflow-y-auto border border-gray-200 dark:border-gray-600 rounded-lg p-2">
            {filteredCategories.map((category: any) => (
              <div
                key={category.id}
                className="flex items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors"
                onClick={() => handleCategoryToggle(category.name)}
              >
                <Checkbox
                  checked={selectedCategoryNames.includes(category.name)}
                  onChange={() => handleCategoryToggle(category.name)}
                  className="mr-3"
                />
                <div className="flex-1">
                  <Text className="text-gray-700 dark:text-gray-300">
                    {category.name}
                  </Text>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Count */}
          {selectedCategoryNames.length > 0 && (
            <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <Text className="font-medium text-blue-700 dark:text-blue-300">
                {selectedCategoryNames.length} categor{selectedCategoryNames.length === 1 ? 'y' : 'ies'} selected
              </Text>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 mt-4">
            <Button
              onClick={() => {
                setCategoriesModalVisible(false);
                setCustomInput('');
              }}
              className="flex-1 h-10 border-gray-300 dark:border-gray-600 dark:text-gray-300"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={() => {
                setCategoriesModalVisible(false);
                setCustomInput('');
              }}
              className="flex-1 h-10 !bg-[#252B61] border-0"
            >
              Done
            </Button>
          </div>
        </div>
      </Modal>

      {/* Rules Selection Modal */}
      <Modal
        title={
          <Text className="!text-lg font-semibold text-gray-900 dark:text-gray-100">
            Select Rules
          </Text>
        }
        open={rulesModalVisible}
        onCancel={() => {
          setRulesModalVisible(false);
          setCustomRuleContent('');
        }}
        footer={null}
        width={800}
        className="dark:bg-gray-800"
      >
        <div className="flex flex-col gap-4 mt-4">
          {/* Custom Rule Creation Section */}
          <div className="border-b border-gray-200 dark:border-gray-600 pb-4">
            <Text className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
              Add Custom Rule
            </Text>
            <div className="mb-3">
              <ReactQuill
                value={customRuleContent}
                onChange={setCustomRuleContent}
                placeholder="Enter your custom rule content..."
                theme="snow"
                style={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  minHeight: '120px'
                }}
                modules={{
                  toolbar: [
                    [{ 'header': [1, 2, 3, false] }],
                    ['bold', 'italic', 'underline'],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    ['link'],
                    ['clean']
                  ]
                }}
              />
            </div>
            <Button
              type="primary"
              onClick={() => {
                if (customRuleContent.trim()) {
                  if (!selectedRulesNames.includes(customRuleContent)) {
                    setSelectedRulesNames([...selectedRulesNames, customRuleContent]);
                  }
                  setCustomRuleContent('');
                }
              }}
              className="h-10 !bg-[#252B61] border-0"
              disabled={!customRuleContent.trim()}
            >
              Add Rule
            </Button>
          </div>

          {/* Search Input */}
          <div>
            <Text className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
              Select from Predefined Rules
            </Text>
            <Input
              prefix={<SearchOutlined className="text-gray-400" />}
              placeholder="Search Rules"
              value={optionsSearchTerm}
              onChange={(e) => setOptionsSearchTerm(e.target.value)}
              className="h-10 rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
            />
          </div>

          {/* Rules List */}
          <div className="flex flex-col gap-2 max-h-[40vh] overflow-y-auto border border-gray-200 dark:border-gray-600 rounded-lg p-2">
            {filteredRules.map((rule: any) => (
              <div
                key={rule.id}
                className="flex items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors"
                onClick={() => handleRuleToggle(rule.name)}
              >
                <Checkbox
                  checked={selectedRulesNames.includes(rule.name)}
                  onChange={() => handleRuleToggle(rule.name)}
                  className="mr-3"
                />
                <div className="flex-1">
                  <div 
                    className="text-gray-700 dark:text-gray-300 prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: rule.name }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Selected Count */}
          {selectedRulesNames.length > 0 && (
            <div className="p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20">
              <Text className="font-medium text-orange-700 dark:text-orange-300">
                {selectedRulesNames.length} rule{selectedRulesNames.length === 1 ? '' : 's'} selected
              </Text>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 mt-4">
            <Button
              onClick={() => {
                setRulesModalVisible(false);
                setCustomRuleContent('');
              }}
              className="flex-1 h-10 border-gray-300 dark:border-gray-600 dark:text-gray-300"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={() => {
                setRulesModalVisible(false);
                setCustomRuleContent('');
              }}
              className="flex-1 h-10 !bg-[#252B61] border-0"
            >
              Done
            </Button>
          </div>
        </div>
      </Modal>

      {/* Member Selection Drawer */}
      <Drawer
        title={
          <Text className="!text-lg font-semibold text-gray-900 dark:text-gray-100">
            {drawerType === 'admins' ? 'Select Admins' : 'Select Members'}
          </Text>
        }
        placement="right"
        onClose={() => {
          setMemberDrawerVisible(false);
          // Reset search term and pagination when closing drawer
          setMemberSearchTerm("");
          setMemberPage(1);
          setMemberCount(10);
          setHasMoreMembers(true);
          setLoadingMoreMembers(false);
        }}
        open={memberDrawerVisible}
        width={400}
        className="dark:bg-gray-800"
        headerStyle={{
          borderBottom: '1px solid #e5e7eb',
          backgroundColor: 'transparent'
        }}
        bodyStyle={{
          padding: '24px',
          backgroundColor: 'transparent'
        }}
      >
        <div className="flex flex-col gap-4">
          {/* Search Input */}
          <Input
            prefix={<SearchOutlined className="text-gray-400" />}
            placeholder="Search Members"
            value={memberSearchTerm}
            onChange={(e) => setMemberSearchTerm(e.target.value)}
            className="h-12 rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
          />

          {/* Select All Checkbox - Only for Members */}
          {drawerType === 'members' && (
            <div className="flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-600">
              <Checkbox
                checked={allMembersSelected}
                onChange={(e) => handleSelectAllMembers(e.target.checked)}
                className="mr-3"
              />
              <div className="flex-1">
                <Text className="text-blue-700 dark:text-blue-300 font-medium">
                  Select All Members
                </Text>
                <br />
                <Text className="text-blue-600 dark:text-blue-400 text-sm">
                  This will include all members in the community (thousands of members)
                </Text>
              </div>
            </div>
          )}

          {/* Member List */}
          <div 
            className="flex flex-col gap-2 max-h-[70vh] overflow-y-auto"
            onScroll={handleMemberScroll}
          >
            {filteredMembers.map((member: any) => (
              <div
                key={member.id}
                className={`flex items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors gap-2 ${
                  drawerType === 'members' && allMembersSelected ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                }`}
                onClick={() => handleMemberToggle(member.id)}
              >
                <Checkbox
                  checked={drawerType === 'admins' ? selectedAdmins.includes(member.id) : selectedMembers.includes(member.id)}
                  onChange={() => handleMemberToggle(member.id)}
                  disabled={drawerType === 'members' && allMembersSelected}
                  className="mr-3"
                />
                <div className="flex-1">
                  <Text className="text-gray-700 dark:text-gray-300 font-medium">
                    {member.first_name} {member.last_name}
                  </Text>
                  <br />
                  <Text className="text-gray-500 dark:text-gray-400 text-sm">
                    {member.email}
                  </Text>
                </div>
              </div>
            ))}
            
            {/* Loading indicator for infinite scroll */}
            {loadingMoreMembers && (
              <div className="flex justify-center items-center p-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#252B61]"></div>
                <Text className="ml-2 text-gray-500 dark:text-gray-400">Loading more members...</Text>
              </div>
            )}
            
            {/* End of list indicator */}
            {!hasMoreMembers && filteredMembers.length > 0 && !allMembersSelected && (
              <div className="flex justify-center items-center p-4">
                <Text className="text-gray-500 dark:text-gray-400 text-sm">No more members to load</Text>
              </div>
            )}
          </div>

          {/* Selected Count */}
          {((drawerType === 'admins' && selectedAdmins.length > 0) || (drawerType === 'members' && (selectedMembers.length > 0 || allMembersSelected))) && (
            <div className={`mt-4 p-3 rounded-lg ${
              drawerType === 'admins' 
                ? 'bg-purple-50 dark:bg-purple-900/20' 
                : 'bg-green-50 dark:bg-green-900/20'
            }`}>
              <Text className={`font-medium ${
                drawerType === 'admins'
                  ? 'text-purple-700 dark:text-purple-300'
                  : 'text-green-700 dark:text-green-300'
              }`}>
                {drawerType === 'admins' 
                  ? `${selectedAdmins.length} admin${selectedAdmins.length === 1 ? '' : 's'} selected`
                  : allMembersSelected 
                    ? 'All members will be added to the community'
                    : `${selectedMembers.length} member${selectedMembers.length === 1 ? '' : 's'} selected`
                }
              </Text>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <Button
              onClick={() => setMemberDrawerVisible(false)}
              className="flex-1 h-12 border-gray-300 dark:border-gray-600 dark:text-gray-300"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={() => setMemberDrawerVisible(false)}
              className="flex-1 h-12 !bg-[#252B61] border-0"
            >
              Done
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default ModifyCommunity;
