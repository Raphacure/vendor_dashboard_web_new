import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAssociateDoctorApi, linkDoctorsToClient } from "../../../redux/slices/Clients/ClientsService";
import LinkDoctorsToClient from "./LinkDoctorsToClients";
import { toast } from "react-hot-toast";
import UserProfileImage from "@/components/chat/UserProfileImage";
import CustomTable from "@/components/custom/Table/CustomTable/CustomTable";
import { RootState } from "@/redux/store";

const AssociatedDoctors = ({
  clientId,
}: {
  clientId: any;
}) => {
  const dispatch = useDispatch();

  const [showLinkDoctors, setShowLinkDoctors] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [showDeletePopUp, setShowDeletePopUp] = useState(false);
  // const [categoryMap, setCategoryMap] = useState<any>({})

  const { linkedDoctors,loading,error } = useSelector((state: RootState) => state.clients)

  const getAllClientsDoctor = useCallback(() => {
    dispatch(getAssociateDoctorApi(clientId))
  }, [clientId])

  useEffect(()=>{
    if(error){
      toast.error(String(error))
    }
  },[error])

  useEffect(() => {
    getAllClientsDoctor()
  }, [getAllClientsDoctor])

  const handleRemoveDoctor = async () => {

    if (!selectedDoctor) {
      toast.error("Failed to unlink!.")
      return
    }

    const res: any = await dispatch(linkDoctorsToClient({
      isActive: false,
      body: {
        client_id: clientId,
        doctorDetails: [{ user_id: selectedDoctor?.user?.id, doctor_id: selectedDoctor?.id }]
      }
    }))
    if (res?.payload?.success) {
      toast.success("Doctor unlinked successfully!.")
      getAllClientsDoctor()
    } else {
      toast.error(res?.error?.message || "Failed to unlink doctor")
    }
  };

  const handleUnlinkDoctor = (data: any) => {
    setShowDeletePopUp(true);
    setSelectedDoctor(data);
  };

  const handleClickLinkDoctors = () => {
    setShowLinkDoctors(true);
  };

  // const getActiveCategory = async () => {
  //   const res: any = await dispatch(getAllUniqueCategorySubCategoryAPI({
  //     section_name: "doctor"
  //   }))

  //   const map: any = {}
  //   res?.payload?.data?.category_ids?.map((ele: any) => {
  //     map[ele?.id] = ele?.name || ""
  //   })

  //   setCategoryMap(map)
  // }

  // useEffect(() => {
  //   getActiveCategory()
  // }, [])

  const getLinkedDoctorsList = () => {
    let data: any = {}
    linkedDoctors?.map((d: any) => {
      data[d?.id] = {
        id: 1,
        user_id: d?.user?.id,
        doctor_id: d?.id,
        name: d?.name,
      }
    })

    return data
  }

  const columns = [
    {
      label: "ID",
      width: 100,
      dataIndex: "id",
      key: "0",
    },
    {
      label: "Name",
      width: 170,
      dataIndex: "name",
      key: "1",
      render: (name: any, record: any) => {
        return <div className="flex justify-center align-items-center w-full">
          <UserProfileImage className="w-10 h-10 rounded-full" name={name} url={record?.image} />{" "}
          <p className="!ml-2 mb-0">{name}</p>
        </div>
      }
    },
    {
      label: "Gender",
      width: 100,
      dataIndex: "gender",
      key: "22",
    },
    // {
    //   label: "Action",
    //   width: 100,
    //   key: "22",
    //   render: (itemV: any) => {
    //     return (
    //       <>
    //         <div className="action-icons-sec-new">
    //           <div className="action-buttons">
    //             <Button type="dashed" onClick={() => handleUnlinkDoctor(itemV)}>
    //               Unlink
    //             </Button>
    //           </div>
    //         </div>
    //       </>
    //     );
    //   },
    // },
  ] as any;
  return (
    // <IndexsStyled>
    <div>
      <div>
        {showLinkDoctors && (
          <LinkDoctorsToClient
            id={clientId}
            onClose={() => {
              setShowLinkDoctors(false);
            }}
            onSuccess={() => {
              getAllClientsDoctor();
            }}
            defaultAssignedDoctors={getLinkedDoctorsList()}
          />
        )}
        <div className="total-count-row"></div>
        {/* <div className="institutes-filters">
          <div className="top-sec-header-sec">
            <div></div>
            <div className="flex justify-end mb-3">
              <PrimaryButton onClick={handleClickLinkDoctors} >
                Link Doctors
              </PrimaryButton>
            </div>
          </div>
        </div> */}
        <div className="all-institutes-data rapha-table-view">
          <CustomTable
            columns={columns}
            data={linkedDoctors}
            pagination={false}
            isLoading={loading}
            showingName="Associated Doctors"
          />
        </div>
      </div>

      {/* <CustomModal
          show={showSuccessMessage}
          titleText={showSuccessMessageText}
          deleteText="Ok"
          cancelText=""
          onDelete={() => {
            setShowSuccessMessage(false);
            setShowDeletePopUp(false);
            setShowSuccessMessageText("");
          }}
        /> */}

      {/* <CustomModal
        show={showDeletePopUp}
        titleText={
          "This is non-reversible action. Are you sure you want to unlink this doctor?."
        }
        deleteText="Delete"
        cancelText=""
        onDelete={async () => {
          setShowDeletePopUp(false);
          handleRemoveDoctor();
        }}
      /> */}
    </div>
    // </IndexsStyled>
  );
};

export default AssociatedDoctors;
