import React, { useCallback, useEffect, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import {
  FaAngleDown,
  FaAngleUp,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa6";
import { UploadOutlined } from "@ant-design/icons";
import { Select, Upload, Button as AntdButton, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router";
import { debounce } from "@/lib/utils";

// Redux Slices & Services
import {
  addBkCommentAPI,
  cancelBookingAPI,
  deleteBkAttachmentAPI,
  getAllBkStatusAPI,
  getAttachmentSignedUrl,
  reassignVendorAPI,
  updateBulkBkStatusAPI,
  uploadReceipt,
  getAllWalletInfoByUserIdClintAPI,
  getPackageDetailsQueryAPI,
} from "@/redux/slices/bookingScreen/bookingScreenService";
import {
  getAllDoctors,
  getDoctorDetailsByIdAPI,
  reassignDoctor,
} from "@/redux/slices/doctorUsers/doctorUsersService";

// Components
import DoctorCardModule from "../DoctorCardModule/DoctorCardModule";
import CustomerInfo from "./CustomerInfo";

// Hooks
import useHasPermission from "@/hooks/useHasPermission";
import useUploadToS3 from "@/hooks/useUploadToS3";
import {
  getBkReportPresignedAPI,
  getBkReportUploadVerifyAPI,
} from "@/redux/slices/prescription/prescriptionService";
import SecoundaryButton from "../custom/button/SecoundaryButton";

// Memoized Components for Performance Optimization
const MemoizedDoctorCard = memo(DoctorCardModule);
const MemoizedCustomerInfo = memo(CustomerInfo);
const MemoizedTestAccordion = memo(TestAccordion);

const BookingDetails = ({
  bkDetails = {},
  additionalInfo = {},
  fetchBookingDetails,
  selectedBooking,
  fetchBookingAdditionalDetails = () => {},
  getAllBookingsList = () => {},
}: any) => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  // State Management
  const [showCancelComment, setShowCancelComment] = useState(false);
  const [cancelComment, setCancelComment] = useState("");
  const [bkComment, setBkComment] = useState("");
  const [userWalletDetails, setUserWalletDetails] = useState({});
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [doctorOptions, setDoctorOptions] = useState([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedUpdateStatus, setSelectedUpdateStatus] = useState("");
  const [openPtmProof, setOpenPtmProof] = useState(false);
  const [updateComment, setUpdateComment] = useState("");
  const [updateOtherStatus, setUpdateOtherStatus] = useState(false);
  const [selectedLinkedId, setSelectedLinkedId] = useState("");
  const [linkedBookingStatuses, setLinkedBookingStatuses] = useState<{
    [key: string]: string;
  }>({});
  const [paymentProofUrl, setPaymentProofUrl] = useState<string | null>(null);
  const [currDoctorDetails, setCurrDoctorDetails] = useState<any>({});

  // Redux Selectors
  const { statuses } = useSelector((state: any) => state?.booking || {});

  // Custom Hooks
  const { isSuperAdmin } = useHasPermission();
  const { uploadToS3 } = useUploadToS3();

  const {
    id,
    status,
    final_amount,
    attachments,
    doctor: doc,
    medicines,
    test,
    test_type,
    tests,
    wallet,
    type,
    package: packageDetails,
    products,
    user,
  } = bkDetails || {};
  // const { bookingComments, bookingLogs } = additionalInfo || {};

  // Debounced fetch for doctors
  const debouncedFetchAllDoctors = useCallback(
    debounce(async (searchText = "") => {
      const result = await dispatch(
        getAllDoctors({ searchText, pageSize: 20, pageNo: 0 })
      );
      if (result?.payload?.doctors) {
        const newOptions = result.payload.doctors.map((doc: any) => ({
          value: doc.id,
          label: `${doc?.name} (${doc?.specialization})`,
        }));
        setDoctorOptions(newOptions);
      }
    }, 500),
    [dispatch]
  );

  // Effects
  useEffect(() => {
    if (user?.id && user?.client?.id) {
      const getWalletDetailsInfo = async (uuId: any, ccId: any) => {
        const walletResp = (await dispatch(
          getAllWalletInfoByUserIdClintAPI({ user_id: uuId, client_id: ccId })
        )) as any;
        setUserWalletDetails(walletResp?.payload?.data);
      };
      getWalletDetailsInfo(user.id, user.client.id);
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (
      !doc?.id ||
      !["virtual_consultation", "opd_consultation"].includes(type)
    ) {
      setCurrDoctorDetails({});
      return;
    }
    const fetchCurrDocDetails = async () => {
      const resp: any = await dispatch(
        getDoctorDetailsByIdAPI({ id: doc.id, payload: { filters: {} } })
      );
      if (resp?.error) {
        toast.error(resp?.error?.message || "Unknown Error Occurred");
      } else {
        setCurrDoctorDetails(resp?.payload?.data?.doctorDetails || {});
      }
    };
    fetchCurrDocDetails();
  }, [doc, type, dispatch]);

  useEffect(() => {
    dispatch(
      getAllBkStatusAPI({
        type: type || "",
        test_type: ["ctmri", "diagnostic"].includes(test_type || "")
          ? test_type || ""
          : undefined,
      })
    );
  }, [bkDetails, type, test_type, dispatch]);

  useEffect(() => {
    setSelectedUpdateStatus("");
  }, [id]);

  // Handlers
  const handleReassignDoctor = async (docId: any) => {
    if (!docId) return;
    const res = (await dispatch(
      reassignDoctor({ bkId: id, payload: { doctor_id: docId } })
    )) as any;
    if (res?.error) {
      toast.error(res?.error?.message || "Unknown Error Occurred");
    } else {
      toast.success("Doctor Reassigned Successfully");
      fetchBookingDetails();
    }
    setSelectedDoc(null);
  };

  const handleReportClick = async (attachmentId: any) => {
    if (!attachmentId) return;
    const res = (await dispatch(getAttachmentSignedUrl(attachmentId))) as any;
    const url = res?.payload?.url;
    if (url && (url.startsWith("http://") || url.startsWith("https://"))) {
      window.open(url, "_blank");
    } else {
      toast.error("Could not retrieve file URL.");
    }
  };

  const handleDeleteReport = async (attachmentId: any) => {
    if (!attachmentId) return;
    const res = (await dispatch(deleteBkAttachmentAPI(attachmentId))) as any;
    if (res?.error) {
      toast.error(res?.error?.message || "Failed to delete report.");
    } else {
      toast.success("Report Deleted Successfully");
      fetchBookingDetails();
    }
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      toast.error("No file selected.");
      return;
    }
    const toastId = toast.loading("Uploading file...");
    try {
      const presignBody = {
        id,
        payload: { ext: `.${selectedFile.name.split(".").pop()}` },
      };
      const presignedRes = (await dispatch(
        getBkReportPresignedAPI(presignBody)
      )) as any;
      const { signedUrl, attachment } = presignedRes.payload;

      await axios.put(signedUrl, selectedFile, {
        headers: { "Content-Type": selectedFile.type },
      });

      const verifyRes = (await dispatch(
        getBkReportUploadVerifyAPI(attachment.id)
      )) as any;
      if (verifyRes?.error) {
        toast.error(
          verifyRes?.error?.message || "Upload verification failed.",
          { id: toastId }
        );
      } else {
        toast.success("Upload successful.", { id: toastId });
        fetchBookingDetails();
        fetchBookingAdditionalDetails();
        setSelectedFile(null);
      }
    } catch (error) {
      toast.error("Upload failed.", { id: toastId });
    }
  };

  const handleStatusUpdate = async (
    statusOverride?: string,
    commentOverride?: string
  ) => {
    const finalStatus = statusOverride || selectedUpdateStatus;
    if (!finalStatus) {
      toast.error("Please select a status");
      return;
    }

    const payload = {
      status: finalStatus,
      comment: commentOverride || updateComment,
      bookingIds: updateOtherStatus
        ? [selectedLinkedId]
        : [selectedBooking?.id],
    };

    const res = (await dispatch(updateBulkBkStatusAPI(payload))) as any;
    if (res?.error) {
      toast.error(res?.error?.message || "Status update failed");
    } else {
      toast.success("Status Updated Successfully");
      fetchBookingAdditionalDetails();
      getAllBookingsList();
      fetchBookingDetails();
    }

    setUpdateComment("");
    setSelectedUpdateStatus("");
    setUpdateOtherStatus(false);
    setSelectedLinkedId("");
  };

  const handleUploadReceipt = async (url: string) => {
    if (!url) return;
    const res: any = await dispatch(
      uploadReceipt({ id: selectedBooking?.id, body: { payment_proof: url } })
    );

    if (res?.payload?.success) {
      toast.success("Payment Proof uploaded successfully!");
      setPaymentProofUrl(null);
      handleStatusUpdate("open", "Payment proof updated");
    } else {
      toast.error(res?.payload?.error || "Something went wrong");
    }
  };

  const cancelBk = async () => {
    if (!cancelComment.trim()) {
      toast.error("Please provide a cancellation reason.");
      return;
    }
    const res = (await dispatch(
      cancelBookingAPI({ id, payload: { comment: cancelComment } })
    )) as any;
    if (res?.error) {
      toast.error(res?.error?.message || "Unknown Error Occurred");
    } else {
      setShowCancelComment(false);
      setCancelComment("");
      toast.success("Booking Cancelled Successfully");
      fetchBookingDetails();
    }
  };

  const addBkComment = async () => {
    if (!bkComment.trim()) {
      toast.error("Please provide a comment.");
      return;
    }
    const res = (await dispatch(
      addBkCommentAPI({ id, payload: { comment: bkComment } })
    )) as any;
    if (res?.error) {
      toast.error(res?.error?.message || "Failed to add comment.");
    } else {
      setBkComment("");
      toast.success("Comment added successfully.");
      fetchBookingAdditionalDetails();
    }
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm !p-3 flex flex-col gap-3">
        {/* Order Status Section */}
        {/* <Section
          title="Order Status"
          isOpen={showOrderStatus}
          toggleOpen={() => setShowOrderStatus(!showOrderStatus)}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-lg font-semibold text-gray-700">
              Current Status :
            </span>
            <span
              className={`!px-4 !py-1.5 text-sm font-semibold text-white rounded-full ${
                status === "completed" ? "bg-green-500" : "bg-blue-500"
              }`}
            >
              {formatStatus(status)}
            </span>
          </div> */}

        {/* <p>Booking Logs</p>

          {showOrderStatus && bookingLogs?.length > 0 && (
            <div className="relative !pl-6 border-l-2 border-gray-200">
              {bookingComments.map((comment: any, index: number) => (
                <div key={index} className="flex items-start mb-6">
                  <div className="absolute left-[-11px] !mt-1.5">
                    {index === bookingLogs.length - 1 ? (
                      <FaCircle className="text-gray-400" size={20} />
                    ) : (
                      <FaCircleCheck className="text-green-500" size={20} />
                    )}
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-600">{comment.comment}</p>
                    <div className="mt-1 text-sm text-gray-500">
                      <span>
                        {comment.user?.first_name} {comment.user?.last_name}
                      </span>
                      {comment.user?.roles?.length > 0 && (
                        <span> ({comment.user.roles[0].role})</span>
                      )}
                      <span className="ml-2">
                        {new Date(comment.created_at).toLocaleString()}
                      </span>
                    </div>
                    {comment.additional_info?.status && (
                      <span className="text-sm text-blue-600">
                        Status: {formatStatus(comment.additional_info.status)}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )} */}

        {/* <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Update Status
              </label>
              <Select
                showSearch
                style={{ width: "100%" }}
                placeholder="Select new Status"
                value={selectedUpdateStatus || undefined}
                onChange={setSelectedUpdateStatus}
                options={statuses?.bookingStatuses
                  ?.filter(
                    (s: any) =>
                      isSuperAdmin() ||
                      !["completed", "prescription_sent_successfully"].includes(
                        s?.id
                      )
                  )
                  ?.map((s: any) => ({ value: s.id, label: s.name }))}
                filterOption={(input: any, option: any) =>
                  (option?.label ?? "")
                    ?.toLowerCase?.()
                    ?.includes(input.toLowerCase())
                }
              />
            </div>

            {selectedUpdateStatus && (
              <div className="p-4 bg-gray-50 rounded-lg space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Comments (Optional)
                  </label>
                  <Input.TextArea
                    value={updateComment}
                    onChange={(e) => setUpdateComment(e.target.value)}
                    placeholder="Add a comment for the status change..."
                    rows={3}
                  />
                </div>
                <div className="flex items-center justify-end space-x-3">
                  <button
                    onClick={() => setSelectedUpdateStatus("")}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleStatusUpdate()}
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                  >
                    Update Status
                  </button>
                </div>
              </div>
            )}
          </div>
        </Section> */}

        {/* Payment Proof Sections */}
        {(status === "payment_pending" ||
          selectedUpdateStatus === "payment_pending") && (
          <Section title="Upload Payment Proof">
            {paymentProofUrl ? (
              <div className="space-y-4">
                <img
                  src={paymentProofUrl}
                  className="rounded-lg w-full object-contain max-h-80"
                  alt="Payment proof preview"
                />
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setPaymentProofUrl(null)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleUploadReceipt(paymentProofUrl)}
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                  >
                    Submit and Set to Open
                  </button>
                </div>
              </div>
            ) : (
              <Upload.Dragger
                accept="image/*"
                showUploadList={false}
                customRequest={async ({ file, onSuccess }) => {
                  const url = await uploadToS3(file as File, user?.id);
                  setPaymentProofUrl(url);
                  if (onSuccess) onSuccess("ok");
                }}
                className="bg-gray-50"
              >
                <p className="ant-upload-drag-icon">
                  <UploadOutlined className="text-4xl text-gray-400" />
                </p>
                <p className="ant-upload-text">
                  Click or drag image to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Upload a receipt or screenshot of the payment.
                </p>
              </Upload.Dragger>
            )}
          </Section>
        )}

        {bkDetails?.payment_proof && (
          <Section
            title="View Payment Proof"
            isOpen={openPtmProof}
            toggleOpen={() => setOpenPtmProof(!openPtmProof)}
          >
            {openPtmProof && (
              <img
                src={bkDetails.payment_proof}
                className="rounded-lg w-full object-contain max-h-96"
                alt="Uploaded payment proof"
              />
            )}
          </Section>
        )}

        {/* Related Bookings Section */}
        {selectedBooking?.relatedBookings?.length > 0 && (
          <Section title="Related Bookings">
            <div className="space-y-4">
              {selectedBooking.relatedBookings.map((bk: any, index: number) => (
                <div
                  key={bk.id}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-gray-50 rounded-md"
                >
                  <p
                    onClick={() => navigate(`/bookings?bkId=${bk?.id}`)}
                    className="font-medium text-indigo-600 hover:text-indigo-800 cursor-pointer mb-2 sm:mb-0"
                  >
                    Booking {index + 1}: {bk?.id}
                  </p>
                  <Select
                    showSearch
                    style={{ width: "100%", minWidth: "200px" }}
                    className="sm:w-auto"
                    placeholder="Update Status"
                    value={linkedBookingStatuses[bk?.id] || bk?.status}
                    onChange={(e) => {
                      setLinkedBookingStatuses((prev) => ({
                        ...prev,
                        [bk?.id]: e,
                      }));
                      setSelectedUpdateStatus(e);
                      setUpdateOtherStatus(true);
                      setSelectedLinkedId(bk?.id);
                    }}
                    options={statuses?.bookingStatuses?.map((s: any) => ({
                      value: s.id,
                      label: s.name,
                    }))}
                    filterOption={(input: any, option: any) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                  />
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Doctor Card & Re-assignment */}
        {currDoctorDetails?.id &&
          (bkDetails?.type === "virtual_consultation" ||
            bkDetails?.type === "opd_consultation") && (
            <Section title="Assigned Doctor">
              <MemoizedDoctorCard
                item={currDoctorDetails}
                origin="self"
                selectedBooking={selectedBooking}
                DoctorBookingReviewProp={() => {}}
                DoctorChatProp={() => {}}
                DoctorBookConsultProp={() => {}}
              />
              {/* <div className="mt-4 pt-4 border-t">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Re-assign Doctor
                </label>
                <Select
                  showSearch
                  style={{ width: "100%" }}
                  placeholder="Search and select a new Doctor"
                  value={selectedDoc}
                  onChange={handleReassignDoctor}
                  onSearch={debouncedFetchAllDoctors}
                  options={doctorOptions}
                  filterOption={false}
                  notFoundContent={null}
                />
              </div> */}
            </Section>
          )}

        {/* Booking Details Section */}
        <Section title="Booking & Patient Details">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <InfoItem
              label="Scheduled Date"
              value={
                bkDetails.collection_1_date
                  ? new Intl.DateTimeFormat("en-US", {
                      dateStyle: "full",
                    }).format(
                      new Date(
                        bkDetails.collection_1_date
                          ?.split?.("/")
                          .reverse()
                          .join("-")
                      )
                    )
                  : "N/A"
              }
            />
            <InfoItem
              label="Scheduled Slot"
              value={bkDetails.collection_1_slot || "N/A"}
            />
            <InfoItem
              label="Booking Amount"
              value={
                selectedBooking?.amount ? `₹${selectedBooking.amount}` : "N/A"
              }
            />
            <InfoItem
              label="Payment Method"
              value={selectedBooking?.paymentMode || "Online Payment"}
            />
          </div>

          {type !== "package_booking" && (
            <div className="mt-4 pt-4 border-t">
              <h6 className="font-semibold text-gray-800 mb-2">
                Employee Issues
              </h6>
              <p className="text-sm text-gray-600 whitespace-pre-wrap">
                {bkDetails?.patient_comment
                  ? bkDetails.patient_comment
                      .replace(/Past Issues\s*:-/g, "Past Issues :-")
                      .replace(/Present Issues\s*:-/g, "\nPresent Issues :-")
                  : "N/A"}
              </p>
            </div>
          )}
        </Section>

        {/* Customer Info Component */}
        <MemoizedCustomerInfo
          bkDetails={bkDetails}
          userWalletDetails={userWalletDetails}
          fetchBookingDetails={fetchBookingDetails}
        />

        {/* Details Sections */}
        {medicines?.length > 0 && (
          <ListSection
            title="Medicines"
            items={medicines.map(
              (med: any) => `${med?.service_name} x ${med?.count}`
            )}
          />
        )}
        {products?.length > 0 && (
          <ListSection
            title="Products"
            items={products.map(
              (prod: any) =>
                `${prod?.name} (Cost: ${prod?.price?.actual_cost || "N/A"})`
            )}
          />
        )}
        {tests?.length > 0 && test_type === "diagnostic" && (
          <ListSection
            title="Tests"
            items={tests.map(
              (t: any) => `${t?.service_name} (Cost: ${t?.price?.actual_cost})`
            )}
          />
        )}
        {test?.service_name && (
          <ListSection
            title="Test"
            items={[`${test.service_name} (Cost: ${test?.price?.actual_cost})`]}
          />
        )}

        {packageDetails?.service_name && (
          <Section title="Package Details">
            <InfoItem label="Name" value={packageDetails.service_name} />
            <InfoItem
              label="Visit Type"
              value={packageDetails.visit_type ?? "N/A"}
            />
            <InfoItem label="Cost" value={packageDetails.price?.actual_cost} />
            {packageDetails?.service_code && (
              <MemoizedTestAccordion
                packageCode={packageDetails.service_code}
              />
            )}
          </Section>
        )}

        {/* Attachments & Reports */}
        <Section title="Attachments & Reports">
          <div className="space-y-4">
            {/* Prescription/Report Upload */}
            {/* <div className="p-4 border border-dashed rounded-lg">
              <Upload
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(info) =>
                  setSelectedFile(info.file.originFileObj || null)
                }
                showUploadList={false}
                customRequest={({ onSuccess }) => {
                  if (onSuccess) onSuccess("ok");
                }}
              >
                <AntdButton icon={<UploadOutlined />}>
                  Select File to Upload
                </AntdButton>
              </Upload>
              {selectedFile && (
                <div className="mt-3 flex items-center justify-between bg-gray-100 p-2 rounded-md">
                  <p className="text-sm font-medium text-gray-700">
                    Selected: {selectedFile.name}
                  </p>
                  <AntdButton
                    type="primary"
                    onClick={handleFileUpload}
                    size="small"
                  >
                    Upload Now
                  </AntdButton>
                </div>
              )}
            </div> */}
            {attachments?.length === 0 && (
              <span className="text-sm text-gray-500">
                No attachments available.
              </span>
            )}

            {/* List of attachments */}
            <div className="space-y-2">
              {attachments?.map((file: any) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between p-2.5 bg-white border rounded-md hover:bg-gray-50"
                >
                  <span
                    className="font-medium text-indigo-600 cursor-pointer hover:underline"
                    onClick={() => handleReportClick(file?.id)}
                  >
                    {file.url?.split("/").pop() || "View Report"}
                  </span>
                  {/* <FaTrash
                    className="text-red-500 cursor-pointer hover:text-red-700"
                    onClick={() => handleDeleteReport(file?.id)}
                  /> */}
                </div>
              ))}
              {attachments?.map(
                (file: any) =>
                  file.doctor_prescription_url && (
                    <div
                      key={`presc-${file.id}`}
                      className="flex items-center justify-between p-2.5 bg-white border rounded-md hover:bg-gray-50"
                    >
                      <span
                        className="font-medium text-indigo-600 cursor-pointer hover:underline"
                        onClick={() =>
                          window.open(file.doctor_prescription_url, "_blank")
                        }
                      >
                        Doctor's Prescription
                      </span>
                    </div>
                  )
              )}
            </div>
          </div>
        </Section>

        {/* Order Summary */}
        <Section title="Order Summary">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Item Total</span>
              <span className="font-semibold text-gray-800">
                ₹{final_amount ?? 0}
              </span>
            </div>
            {wallet?.amount_used && (
              <div className="flex justify-between items-center text-green-600">
                <span>Wallet Credit Used</span>
                <span>- ₹{wallet.amount_used}</span>
              </div>
            )}
          </div>
        </Section>

        {/* Actions: Cancel & Comments */}
        {/* <div className="mt-6"> */}
        {/* Cancel Booking Form */}
        {/* {!showCancelComment ? (
            <button
              onClick={() => setShowCancelComment(true)}
              className="px-4 py-2 !mb-4 text-sm font-medium text-white bg-red-600 !border border-transparent !rounded-md shadow-sm hover:bg-red-700"
            >
              Cancel Booking
            </button>
          ) : (
            <div className="p-4 border !mb-4 border-red-200 bg-red-50 rounded-lg">
              <Input.TextArea
                rows={3}
                placeholder="Enter reason for cancellation..."
                value={cancelComment}
                onChange={(e) => setCancelComment(e.target.value)}
              />
              <div className="flex justify-end space-x-3 mt-3">
                <SecoundaryButton
                  onClick={() => setShowCancelComment(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                >
                  Back
                </SecoundaryButton>
                <SecoundaryButton
                  onClick={cancelBk}
                  className="px-4 py-2 text-sm font-medium text-white !bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700"
                >
                  Confirm Cancellation
                </SecoundaryButton>
              </div>
            </div>
          )} */}

        {/* Comments Section */}
        {/* <Section
            title="Comments"
            isOpen={showComments}
            toggleOpen={() => setShowComments(!showComments)}
          >
            {showComments && (
              <div className="flex flex-col gap-2">
                {bookingComments?.length > 0 ? (
                  bookingComments.map((comment: any, index: number) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-gray-700 text-sm">{comment.comment}</p>
                      <div className="text-xs text-gray-500 mt-2 flex justify-between items-center">
                        <span>
                          {comment.user?.first_name} {comment.user?.last_name} (
                          {comment.user?.roles[0]?.role ?? "N/A"})
                        </span>
                        <span>
                          {new Date(comment.created_at).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">
                    No comments available.
                  </p>
                )}
              </div>
            )}
            <div className="mt-4 flex gap-1 items-center">
              <div className="relative w-full">
                <textarea
                  placeholder="Add a new comment..."
                  value={bkComment}
                  onChange={(e) => setBkComment(e.target.value)}
                  className="!pr-[62px] !pl-2 !pt-2 !pb-2 !min-h-[80px] w-full border-1 rounded-md"
                />
                <GeminiButton
                  className="absolute right-1 top-1"
                  text={bkComment}
                  onClick={(generatedText: string) =>
                    setBkComment(generatedText)
                  }
                />
              </div>
              <div className="flex flex-col space-y-2">
                <SecoundaryButton
                  onClick={addBkComment}
                  disabled={!bkComment.trim()}
                  className="px-4 py-2 text-sm font-medium text-black bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 disabled:bg-indigo-300"
                >
                  Add
                </SecoundaryButton>
              </div>
            </div>
          </Section> */}
        {/* </div> */}
      </div>
    </div>
  );
};

// Reusable Section Component
const Section = ({
  title,
  children,
  isOpen,
  toggleOpen,
}: {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  toggleOpen?: () => void;
}) => (
  <div className="p-2 sm:p-4 border rounded-lg bg-white">
    <div
      className={`flex justify-between items-center ${
        toggleOpen ? "cursor-pointer" : ""
      }`}
      onClick={toggleOpen}
    >
      <h5 className="text-lg font-semibold text-gray-800">{title}</h5>
      {toggleOpen &&
        (isOpen ? (
          <FaAngleUp className="text-gray-600" />
        ) : (
          <FaAngleDown className="text-gray-600" />
        ))}
    </div>
    {(!toggleOpen || isOpen) && <div className="mt-4">{children}</div>}
  </div>
);

// Reusable List Section Component for simple lists
const ListSection = ({ title, items }: { title: string; items: string[] }) => (
  <Section title={title}>
    <ul className="space-y-2 list-disc list-inside">
      {items.map((item, index) => (
        <li key={index} className="text-sm text-gray-600">
          {item}
        </li>
      ))}
    </ul>
  </Section>
);

// Reusable Info Item
const InfoItem = ({
  label,
  value,
  isLink = false,
}: {
  label: string;
  value: string;
  isLink?: boolean;
}) => (
  <div>
    <p className="font-semibold text-gray-600">{label}</p>
    {isLink ? (
      <p className="text-indigo-600 cursor-pointer">{value}</p>
    ) : (
      <p className="text-gray-800">{value}</p>
    )}
  </div>
);

function TestAccordion({ packageCode }: any) {
  const [tests, setTests] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch<any>();

  const getPackageInfo = useCallback(async () => {
    try {
      const res = (await dispatch(
        getPackageDetailsQueryAPI({ service_code: packageCode })
      )) as any;
      setTests(res?.payload?.data?.package?.tests || []);
    } catch (error) {
      console.error("Error fetching package details:", error);
    }
  }, [dispatch, packageCode]);

  useEffect(() => {
    getPackageInfo();
  }, [getPackageInfo]);

  return (
    <div className="border-t mt-4 pt-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left font-semibold text-gray-700 hover:bg-gray-50 p-2 rounded-md"
      >
        <span>View Available Tests</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <div className="mt-2 overflow-x-auto">
          {tests.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Service Code
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Service Name
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tests.map((test: any, index: any) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {test?.service_code}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {test?.service_name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-sm text-gray-500 p-4">
              No tests available for this package.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default memo(BookingDetails);
