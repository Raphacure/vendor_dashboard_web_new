import React, { useState, useMemo } from "react";
import {
  ShoppingCart,
  MapPin,
  User,
  Phone,
  TestTube,
  Activity,
  Pill,
  X,
  Check,
  Truck,
  Tag,
} from "lucide-react";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import { useDispatch } from "react-redux";
import { createDoctorBookingAPI } from "@/redux/slices/doctor/doctorService";

// Types
export type ConsultType =
  | "virtual"
  | "labpackage"
  | "labtest"
  | "radiology"
  | "pharmacy";

interface ConsultationData {
  consultType: "instant" | "call" | "chat" | "video" | "second_opinion" | "opd";
  selectedDoctor: any; // Consider defining a more specific Doctor type
  selectedTimeSlot: string | null;
  selectedDate: string | null; // Or Date object, depending on usage
  selectedSpecialization: any; // Consider defining a more specific Specialization type
}

interface TestsData {
  selectedTest: any; // Consider defining a more specific Test type
  selectedVendor: any; // Consider defining a more specific Vendor type
  selectedTimeSlot: string | null;
  selectedDate: string | null; // Or Date object, depending on usage
}

interface PharmacyData {
  // Define properties for pharmacy data if any, currently it's an empty object
  [key: string]: any; // Placeholder for now
}

interface FormData {
  consultation: ConsultationData;
  tests: TestsData;
  pharmacy: PharmacyData;
  
}

interface UserDetails {
  user?: any; // Consider defining a more specific User type
  paymentMethod?: {
    payment_method: string;
    payment_type: string;
  };
  address?: {
    fullAddress: string;
    detail?: string | null;
    city: string;
    latitude?: number;
    longitude?: number;
    state: string;
    zip: string;
  };
}

interface CartDataItem {
  consultType: ConsultType;
  formData: FormData;
  userDetails: UserDetails;
}

export interface CartData {
  virtual: CartDataItem[];
  labpackage: CartDataItem[];
  labtest: CartDataItem[];
  radiology: CartDataItem[];
  pharmacy: CartDataItem[];
}

interface CartItemWithId extends CartDataItem {
  id: string;
  categoryType: ConsultType;
}

interface OrderCartProps {
  cartData: CartData;
  setCartData: any;
}

const OrderCart: React.FC<OrderCartProps> = ({ cartData, setCartData }) => {
  const dispatch = useDispatch() as any;
  // Get all cart items grouped by category
  const groupedCartItems = useMemo(() => {
    const grouped: Record<ConsultType, CartItemWithId[]> = {
      virtual: [],
      labtest: [],
      labpackage: [],
      radiology: [],
      pharmacy: [],
    };

    Object.entries(cartData).forEach(([consultType, categoryItems]) => {
      categoryItems.forEach((item: CartDataItem, index: number) => {
        grouped[consultType as ConsultType].push({
          ...item,
          id: `${consultType}-${index}`,
          categoryType: consultType as ConsultType,
        });
      });
    });

    return grouped;
  }, [cartData]);

  // Get all cart items as flat array for calculations
  const allCartItems = useMemo(() => {
    const items: CartItemWithId[] = [];
    Object.values(groupedCartItems).forEach((categoryItems) => {
      items.push(...categoryItems);
    });
    return items;
  }, [groupedCartItems]);

  // Calculate totals
  const { totalItems, totalMRP, totalDiscount, finalTotal } = useMemo(() => {
    let mrp = 0;
    let discount = 0;

    allCartItems.forEach((item) => {
      switch (item.categoryType) {
        case "virtual":
          mrp +=
            item.formData.consultation.selectedDoctor?.consultationFee || 500;
          discount += 50; // Example discount
          break;
        case "labtest":
        case "labpackage":
          mrp += item.formData.tests.selectedTest?.price || 1000;
          discount += 100;
          break;
        case "radiology":
          mrp += item.formData.tests.selectedTest?.price || 1500;
          discount += 150;
          break;
        case "pharmacy":
          mrp += 200; // Example pharmacy cost
          discount += 20;
          break;
        default:
          mrp += 0;
      }
    });

    return {
      totalItems: allCartItems.length,
      totalMRP: mrp,
      totalDiscount: discount,
      finalTotal: mrp - discount,
    };
  }, [allCartItems]);

  const getCategoryTitle = (categoryType: ConsultType): string => {
    const titleMap = {
      virtual: "Doctor Consultations",
      labtest: "Lab Tests",
      labpackage: "Lab Packages",
      radiology: "Radiology Services",
      pharmacy: "Pharmacy Items",
    };
    return titleMap[categoryType];
  };

  const getCategoryIcon = (categoryType: ConsultType) => {
    const iconMap = {
      virtual: User,
      labtest: TestTube,
      labpackage: TestTube,
      radiology: Activity,
      pharmacy: Pill,
    };
    const IconComponent = iconMap[categoryType];
    return <IconComponent className="w-5 h-5" />;
  };

  const getItemTitle = (item: CartItemWithId): string => {
    switch (item.categoryType) {
      case "virtual":
        return `${item.formData.consultation.consultType} Consultation`;
      case "labtest":
        return item.formData.tests.selectedTest?.name || "Lab Test";
      case "labpackage":
        return item.formData.tests.selectedTest?.name || "Lab Package";
      case "radiology":
        return item.formData.tests.selectedTest?.name || "Radiology";
      case "pharmacy":
        return "Pharmacy Items";
      default:
        return "Service";
    }
  };

  const getItemDetails = (item: CartItemWithId) => {
    switch (item.categoryType) {
      case "virtual":
        return {
          provider: item.formData.consultation.selectedDoctor?.name || "Doctor",
          specialty:
            item.formData.consultation.selectedSpecialization?.name ||
            "General",
        };
      case "labtest":
      case "labpackage":
      case "radiology":
        return {
          provider: item.formData.tests.selectedVendor?.name || "Lab Partner",
          specialty: "Diagnostic Service",
        };
      case "pharmacy":
        return {
          provider: "Pharmacy Partner",
          specialty: "Medicine Delivery",
        };
      default:
        return {
          provider: "Service Provider",
          specialty: "Healthcare Service",
        };
    }
  };

  const getItemPrice = (item: CartItemWithId): number => {
    switch (item.categoryType) {
      case "virtual":
        return (
          item.formData.consultation.selectedDoctor?.consultationFee || 500
        );
      case "labtest":
      case "labpackage":
      case "radiology":
        return item.formData.tests.selectedTest?.price || 1000;
      case "pharmacy":
        return 200;
      default:
        return 0;
    }
  };

  const removeItem = (itemId: string) => {
    const [consultType, index] = itemId.split("-");
    const updatedCartData = { ...cartData };
    updatedCartData[consultType as ConsultType].splice(parseInt(index), 1);
    setCartData(updatedCartData);
  };

  const getIconColor = (consultType: ConsultType): string => {
    const colorMap = {
      virtual: "text-blue-600 bg-blue-50",
      labtest: "text-green-600 bg-green-50",
      labpackage: "text-emerald-600 bg-emerald-50",
      radiology: "text-purple-600 bg-purple-50",
      pharmacy: "text-orange-600 bg-orange-50",
    };
    return colorMap[consultType];
  };

  const getCategoryHeaderColor = (categoryType: ConsultType): string => {
    const colorMap = {
      virtual: "bg-blue-50 border-blue-200 text-blue-800",
      labtest: "bg-green-50 border-green-200 text-green-800",
      labpackage: "bg-emerald-50 border-emerald-200 text-emerald-800",
      radiology: "bg-purple-50 border-purple-200 text-purple-800",
      pharmacy: "bg-orange-50 border-orange-200 text-orange-800",
    };
    return colorMap[categoryType];
  };

  //handle Checkout


  const getItemPayload = (data: {
    consultType: ConsultType;
    formData: FormData;
    userDetails: UserDetails;
  }) => {
    const { consultType, formData, userDetails } = data;
    let payload: any;
    switch (consultType) {
      case "virtual": {
        if (
          ["call", "chat", "video"].includes(formData.consultation.consultType)
        ) {
          payload = {
            virtual_type: formData.consultation.consultType,
            useWallet: true,
            doctor_id: parseInt(formData.consultation.selectedDoctor?.id),
            user_id: userDetails.user,
            collection_1_date: formData.consultation.selectedDate,
            collection_1_slot: formData.consultation.selectedTimeSlot,
            collection_2_date: null,
            collection_2_slot: null,
            attachment_ids: null,
            section_key: "doctor",
          };
        } else if (formData.consultation.consultType === "instant") {
          payload = {
            virtual_type: "instant",
            useWallet: true,
            doctor_id: parseInt(formData.consultation.selectedDoctor?.id),
            user_id: userDetails.user,
            collection_1_date: null,
            collection_1_slot: null,
            collection_2_date: null,
            collection_2_slot: null,
            attachment_ids: null,
            section_key: "doctor",
          };
        } else if (formData.consultation.consultType === "second_opinion") {
          payload = {
            // user_id: parseInt(patientId, 10),
            // section_key: "doctor",
            // isSecondOpinion: true,
            // report_urls: [
            //   "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1748347579527.png",
            // ],
            // specialization_id: null,
            // useWallet: true,
            // extra_info: {
            //   alternate_person: employee?.secoundOptionData?.alternate_person,
            //   contact_number: employee?.secoundOptionData?.contact_number,
            //   comments: employee?.secoundOptionData?.comments,
            // },
            // ...(employee?.secoundOptionData?.doctor
            //   ? {
            //       doctor_id: employee?.secoundOptionData?.doctor?.id,
            //     }
            //   : {
            //       vendor_id: employee?.secoundOptionData?.vendor?.id,
            //     }),
          };
        }
        break;
      }
      case "labpackage": {
        payload = {
          virtual_type: null,
          package_code:
            formData.tests.selectedTest.map((item: any) => item.service_code) ||
            [],
          useWallet: true,
          vendor_id: formData.tests.selectedVendor?.id || 1,
          user_id: userDetails.user,
          collection_1_date: formData.tests.selectedDate,
          collection_1_slot: formData.tests.selectedTimeSlot,
          attachment_ids: null,
          section_key: "labtest",
          instant_booking: null,
        };
        break;
      }
      case "labtest": {
        payload = {
          virtual_type: null,
          test_codes:
            formData.tests.selectedTest.map((item: any) => item.service_code) ||
            [],
          useWallet: true,
          vendor_id: formData.tests.selectedVendor?.id || 1,
          user_id: userDetails.user,
          collection_1_date: formData.tests.selectedDate,
          collection_1_slot: formData.tests.selectedTimeSlot,
          attachment_ids: null,
          section_key: "labtest",
          instant_booking: null,
        };
        break;
      }
      case "radiology": {
        payload = {
          virtual_type: null,
          test_codes:
            formData.tests.selectedTest.map((item: any) => item.service_code) ||
            [],
          useWallet: true,
          vendor_id: formData.tests.selectedVendor?.id || 1,
          user_id: userDetails.user,
          collection_1_date: formData.tests.selectedDate,
          collection_1_slot: formData.tests.selectedTimeSlot,
          attachment_ids: null,
          section_key: "ctmri",
        };
        break;
      }
    }

    return payload;
  };

  // const handleCheckout = async()=>{
  //   const itemsPayload = allCartItems.map((item)=>{
  //     return getItemPayload({consultType:item.consultType,formData:item?.formData,userDetails:item.userDetails})
  //   })
  //   try {
  //     const cartResponse = dispatch(createDoctorBookingAPI())
  //   } catch (error) {
      
  //   }
  // }



  //

  return (
    <div className="mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 !px-6 !py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="!p-2 bg-blue-100 rounded-lg">
              <ShoppingCart className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Shopping Cart
              </h2>
              <p className="text-sm text-gray-600">
                {totalItems} item{totalItems !== 1 ? "s" : ""} in your cart
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">
              ₹{finalTotal}
            </div>
            {totalDiscount > 0 && (
              <div className="text-sm text-green-600 font-medium flex items-center">
                <Tag className="w-3 h-3 mr-1" />
                You save ₹{totalDiscount}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Cart Items */}
        <div className="flex-1 !p-6">
          {allCartItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                Your cart is empty
              </h3>
              <p className="text-gray-500">
                Add some healthcare services to get started
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {Object.entries(groupedCartItems).map(([categoryType, items]) => {
                if (items.length === 0) return null;

                return (
                  <div key={categoryType} className="space-y-4">
                    {/* Category Header */}
                    <div
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg border ${getCategoryHeaderColor(
                        categoryType as ConsultType
                      )}`}
                    >
                      <div
                        className={`p-2 rounded-lg ${getIconColor(
                          categoryType as ConsultType
                        )}`}
                      >
                        {getCategoryIcon(categoryType as ConsultType)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          {getCategoryTitle(categoryType as ConsultType)}
                        </h3>
                        <p className="text-sm opacity-75">
                          {items.length} item{items.length !== 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>

                    {/* Category Items */}
                    <div className="space-y-3 ml-4">
                      {items.map((item: CartItemWithId) => {
                        const details = getItemDetails(item);
                        const price = getItemPrice(item);
                        const originalPrice = Math.round(price * 1.1);
                        const discount = originalPrice - price;

                        return (
                          <div
                            key={item.id}
                            className="bg-white border border-gray-200 rounded-xl !p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
                          >
                            <div className="flex items-start space-x-4">
                              {/* Service Icon */}
                              <div
                                className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${getIconColor(
                                  item.categoryType
                                )}`}
                              >
                                {getCategoryIcon(item.categoryType)}
                              </div>

                              {/* Service Details */}
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-gray-900 mb-2">
                                  {getItemTitle(item)}
                                </h4>

                                <div className="space-y-1 mb-3">
                                  <div className="flex items-center text-sm text-gray-600">
                                    <User className="w-4 h-4 mr-2 text-gray-400" />
                                    {details.provider}
                                  </div>
                                  <div className="flex items-center text-sm text-gray-600">
                                    <Activity className="w-4 h-4 mr-2 text-gray-400" />
                                    {details.specialty}
                                  </div>
                                  {item.userDetails.address && (
                                    <div className="flex items-center text-sm text-gray-600">
                                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                                      {item.userDetails.address.city},{" "}
                                      {item.userDetails.address.state}
                                    </div>
                                  )}
                                </div>

                                {/* Price */}
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-2">
                                    <span className="text-lg font-semibold text-gray-900">
                                      ₹{price}
                                    </span>
                                    {discount > 0 && (
                                      <>
                                        <span className="text-sm text-gray-500 line-through">
                                          ₹{originalPrice}
                                        </span>
                                        <span className="text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
                                          Save ₹{discount}
                                        </span>
                                      </>
                                    )}
                                  </div>

                                  {/* Remove Button */}
                                  <button
                                    onClick={() => removeItem(item.id)}
                                    className="flex items-center space-x-1 text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-lg font-medium text-sm transition-colors duration-200"
                                  >
                                    <X className="w-4 h-4" />
                                    <span>Remove</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="w-80 bg-gray-50 border-l border-gray-200 !p-6">
          <div className="sticky top-6">
            {/* Payment Details */}
            <div className="bg-white rounded-xl p-5 shadow-sm mb-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                Payment Summary
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    Subtotal ({totalItems} items)
                  </span>
                  <span className="text-gray-900 font-medium">₹{totalMRP}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Discount</span>
                  <span className="text-green-600 font-medium">
                    - ₹{totalDiscount}
                  </span>
                </div>

                <hr className="my-3 border-gray-200" />

                <div className="flex justify-between text-base font-semibold">
                  <span className="text-gray-900">Total Amount</span>
                  <span className="text-gray-900">₹{finalTotal}</span>
                </div>

                {totalDiscount > 0 && (
                  <div className="text-center bg-green-50 text-green-700 py-2 px-3 rounded-lg text-sm font-medium">
                    🎉 You saved ₹{totalDiscount} on this order!
                  </div>
                )}
              </div>
            </div>

            {/* Action Button */}
            <PrimaryButton
              // onClick={handleCheckout}
              className="w-full mt-2 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed disabled:shadow-none"
              disabled={allCartItems.length === 0}
            >
              Proceed to Checkout
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCart;
