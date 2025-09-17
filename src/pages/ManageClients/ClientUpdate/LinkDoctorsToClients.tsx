import { useCallback, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { BiLoader } from "react-icons/bi";
import { linkDoctorsToClient } from "../../../redux/slices/Clients/ClientsService";
import { toast } from "react-hot-toast";
import { getAllDoctors } from "@/redux/slices/doctorUsers/doctorUsersService";
import UserProfileImage from "@/components/chat/UserProfileImage";
import { IndexsStyled } from "./Index.styled";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import PrimaryButton from "@/components/custom/button/PrimaryButton";

export type doctorDataDto = {
  [key: number]: {
    user_id: number;
    doctor_id: number;
    client_id: string;
    id?: any;
    defaultAssignedDoctors: any;
  };
}[];
const LinkDoctorsToClient = ({
  id,
  onSuccess,
  onClose,
  defaultAssignedDoctors,
}: {
  id: any;
  onSuccess: () => void;
  onClose: () => void;
  defaultAssignedDoctors: doctorDataDto;
}) => {
  const dispatch = useDispatch();
  const [assignedDoctors, setAssignedDoctors] = useState<doctorDataDto>(
    defaultAssignedDoctors
  );

  const [isLoading, setIsLoading] = useState({
    doctorsList: false,
  });
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(150);
  const [doctors, setDoctors] = useState<any>([]);
  const [totalDoctors, setTotalDoctors] = useState<any>([]);
  // const [assignedDoctors, setAssignedDoctors] = useState<any>({});
  const [searchDoctorName, setSearchDoctorName] = useState("");
  const [searchDoctorName2, setSearchDoctorName2] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessMessageText, setShowSuccessMessageText] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [doctorsToDelete, setDoctorsToDelete] = useState<any[]>([]);

  const handleSearchDoctorName = (value: any) => {
    setSearchDoctorName(value);
  };

  const getAllDoctorsApiCall = useCallback(async () => {
    try {
      setIsLoading((pre) => {
        return {
          ...pre,
          doctorsList: true,
        };
      });
      const result: any = await dispatch(
        getAllDoctors({
          // type: "labtest",
          pageSize: pageSize,
          searchText: searchDoctorName,
          pageNo: page,
          status: "approved",
          activeStatus: "approved",
        })
      );

      if (result?.error) {
        throw new Error(result?.payload?.message || "Failed to fetch doctors");
      }

      setDoctors(result?.payload?.data?.doctors || []);
      setTotalDoctors(result?.payload?.data?.doctorCount || 0);
    } catch (error: any) {
      console.error("Error fetching doctors:", error);
      toast.error(error?.message || "Failed to fetch doctors");
      setDoctors([]);
      setTotalDoctors(0);
    } finally {
      setIsLoading((pre) => {
        return {
          ...pre,
          doctorsList: false,
        };
      });
    }
  }, [dispatch, page, pageSize, searchDoctorName]);

  useEffect(() => {
    getAllDoctorsApiCall();
  }, [dispatch, page, pageSize, searchDoctorName, getAllDoctorsApiCall]);

  // const getAllLinkedDoctorDetails = useCallback(async () =>{
  //   try {
  //     const res : any = await dispatch(getAssociateDoctorApi(id))

  //     if(res?.payload?.success){
  //       let data : any = {}
  //       res?.payload?.data?.map((d : any ) => {
  //         data[d?.doctor_id] = {
  //           id: d?.id,
  //           doctor_id: d?.doctor_id,
  //           user_id: d?.user_id
  //         }
  //       })
  //       setAssignedDoctors(data)
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },[dispatch, id])

  // useEffect(() =>{
  //   getAllLinkedDoctorDetails()
  // },[getAllLinkedDoctorDetails])

  console.log(assignedDoctors);

  const onChange = (doctorId: number, details: any) => {
    let prev = { ...assignedDoctors };
    const data: any = {
      user_id: details?.user?.id,
      doctor_id: details?.id,
      name: details?.name,
      clientId: id,
    };
    if (assignedDoctors?.[doctorId]) {
      data["id"] = (assignedDoctors?.[doctorId] as any)?.id ?? null;
      handleRemoveDoctor(data);
      // delete prev?.[doctorId];
      // setAssignedDoctors(prev);
    } else if (details?.user?.id) {
      setAssignedDoctors({
        ...prev,
        [doctorId]: data,
      } as doctorDataDto);
    }
  };

  // const handleSubmitDetails = async () => {
  //   const payload = Object.values(assignedDoctors)?.map((doctor: any) => ({
  //     id: Number(doctor?.id),
  //     buying_price: Number(doctor?.buyingPrice),
  //     selling_price: Number(doctor?.sellingPrice),
  //   }));

  //   if (payload?.length === 0) return;
  //   setIsLoading(false);
  //   const res: any = onSubmit({
  //     id: id,
  //     payload: { doctors: payload },
  //   });

  //   console.log(res);

  //   if (res?.payload?.success) {
  //     setShowSuccessMessage(true);
  //     setShowSuccessMessageText("Doctor Assigned Successfully!.");
  //   } else {
  //     setErrorMessage(res?.payload?.message);
  //   }
  //   setIsLoading(true);
  // };

  console.log({ doctorsToDelete });

  const handleRemoveDoctor = async (data: any) => {
    const doctor = { ...assignedDoctors } as doctorDataDto;
    const { user_id, doctor_id, id: isApiCall }: any = data ?? {};
    console.log({ data, isApiCall, doctorsToDelete });
    console.log(
      doctorsToDelete?.find(
        (doc) =>
          doc?.doctor_id == data?.doctor_id && doc?.user_id == data?.user_id
      ) == null,
      "doctorsToDelete"
    );

    if (
      isApiCall &&
      doctorsToDelete?.find(
        (doc) =>
          doc?.doctor_id == data?.doctor_id && doc?.user_id == data?.user_id
      ) == null
    ) {
      const d = [...(doctorsToDelete ?? []), data];
      setDoctorsToDelete(d);
    }
    delete doctor[doctor_id];
    setAssignedDoctors(doctor);
  };

  const handleSubmit = async () => {
    // Create an array of Promises by mapping doctors to API calls
    const result: any = await Promise.allSettled(
      doctorsToDelete.map(({ user_id, doctor_id }) =>
        dispatch(
          linkDoctorsToClient({
            isActive: false,
            body: {
              client_id: id,
              doctorDetails: [{ user_id, doctor_id }],
            },
          })
        )
      )
    );

    // Count success and failure
    const successCount = result.filter(
      (res: any) => res.status === "fulfilled" && res.value?.payload?.success
    ).length;
    const failedCount = result.length - successCount;

    // Toast the summary
    if (successCount > 0) {
      toast.success(`${successCount} doctor(s) unlinked successfully.`);
    }
    if (failedCount > 0) {
      toast.error(`${failedCount} doctor(s) failed to unlink.`);
    }

    const res: any = await dispatch(
      linkDoctorsToClient({
        isActive: true,
        body: {
          client_id: id,
          doctorDetails: Object.values(assignedDoctors ?? {})?.map(
            ({ user_id, doctor_id }: any) => ({ user_id, doctor_id })
          ),
        },
      })
    );

    if (res?.payload?.success) {
      onSuccess();
      onClose();
    } else {
      toast.error(res?.error?.message || "Failed to link doctor");
    }
  };


  return (
    <IndexsStyled>
      {isLoading.doctorsList && <BiLoader />}
      {!showSuccessMessage && (
        <CustomModal
          headerClassName="p-1"
          open={true}
          title="Link Doctors"
          handleClose={onClose}
        >
          <CustomModal.Body>
            <IndexsStyled>
              <div className="!mb-6">
                <Form.Group controlId="vendorName">
                  <Form.Control
                    type="text"
                    name="vendorName"
                    autoFocus={true}
                    placeholder="Search doctor by name"
                    value={searchDoctorName ?? ""}
                    onChange={(e) => handleSearchDoctorName(e?.target?.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                  />
                </Form.Group>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Available Doctors Section */}
                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                    Available Doctors: ({doctors?.length} / {totalDoctors})
                  </h2>
                  <div className="space-y-3 max-h-96 overflow-y-auto p-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    {doctors?.map((doctor: any) => (
                      <div
                        key={`${doctor?.id}-available`}
                        className="flex items-center p-3 bg-gray-50 hover:bg-blue-50 border border-gray-200 rounded-lg cursor-pointer transition-all duration-150 ease-in-out transform hover:scale-[1.02] shadow-sm"
                        onClick={() => onChange(doctor?.id, doctor)}
                      >
                        <input
                          type="checkbox"
                          checked={!!assignedDoctors?.[doctor?.id]}
                          readOnly
                          className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-4 cursor-pointer"
                        />
                        <UserProfileImage
                          name={doctor?.name}
                          url={doctor?.image}
                          className="w-10 h-10 rounded-full mr-3 object-cover border-2 border-gray-300"
                        />
                        <div className="flex-grow">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {doctor?.name}
                          </p>
                          <p className="text-xs text-gray-600">
                            {doctor?.gender} | {doctor?.specialization}
                          </p>
                        </div>
                      </div>
                    ))}
                    {doctors?.length === 0 && (
                      <p className="text-sm text-gray-500 text-center py-4">
                        No doctors found matching your search.
                      </p>
                    )}
                  </div>
                </div>

                {/* Selected Doctors Section */}
                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                    Selected Doctors: ({Object.keys(assignedDoctors)?.length})
                  </h2>
                  <div className="space-y-3 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    {assignedDoctors &&
                    Object.values(assignedDoctors)?.length > 0 ? (
                      Object.values(assignedDoctors)?.map((doctor: any) => (
                        <div
                          key={`${doctor?.id}-selected`}
                          className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg shadow-sm"
                        >
                          <div className="flex items-center">
                            <UserProfileImage
                              name={doctor?.name}
                              url={doctor?.image}
                              className="w-10 h-10 rounded-full mr-3 object-cover border-2 border-blue-300"
                            />
                            <div>
                              <p className="text-sm font-medium text-blue-800 truncate !ml-1 !mb-0">
                                {doctor?.name}
                              </p>
                            </div>
                          </div>
                          <MdDelete
                            className="text-red-500 hover:text-red-700 cursor-pointer h-6 w-6 transition-colors duration-150 ease-in-out"
                            onClick={() => handleRemoveDoctor(doctor)}
                          />
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500 text-center py-4">
                        No doctors selected yet.
                      </p>
                    )}
                    {errorMessage && (
                      <div className="mt-3 text-sm text-red-600 bg-red-50 p-3 rounded-md border border-red-200">
                        {errorMessage}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </IndexsStyled>
          </CustomModal.Body>

          <CustomModal.Footer>
            <div className="flex gap-1 justify-end">
              <SecoundaryButton onClick={onClose}>Cancel</SecoundaryButton>
              <PrimaryButton onClick={handleSubmit}>Save Changes</PrimaryButton>
            </div>
          </CustomModal.Footer>
        </CustomModal>
      )}

      {/* {showSuccessMessage && (
        <CustomToast
          show={showSuccessMessage}
          titleText={showSuccessMessageText}
          deleteText="Ok"
          cancelText=""
          onDelete={onSuccess}
        />
      )} */}
    </IndexsStyled>
  );
};

export default LinkDoctorsToClient;
