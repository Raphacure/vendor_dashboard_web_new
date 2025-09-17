import { useEffect, useState } from "react";
import { MedicalRecordStyled } from "./MedicalRecord.styled";
import UploadCard from "./UploadCard";
import ScrollReportsCard from "./ScrollReportsCard";
import { getPatientMedicalRecordAPI } from "@/redux/slices/PatientDoctor/PatientService";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
const MedicalRecord = ({ patientId }: { patientId: string }) => {
  const dispatch = useDispatch() as any;
  const [patientReports, setPatientReports] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPatientReports = async (filters: any = {}) => {
    try {
      setIsLoading(true);
      const response = await dispatch(
        getPatientMedicalRecordAPI({ patientId, filters })
      );
      if (response?.error) {
        toast.error(response.error.message || "Failed to get patient reports");
        return;
      } else {
        setPatientReports(response.payload?.data?.usersReports);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPatientReports();
  }, [patientId, dispatch]);

  return (
    <MedicalRecordStyled>
      {/* <div className="flex gap-4 max-[675px]:flex-col"> */}
        <div
          // className={`grow-1 basis-[${
          //   patientReports?.length > 0 ? "60%" : "40%"
          // }]`}
        >
          <ScrollReportsCard
            loading={isLoading}
            reload={getPatientReports}
            patientReports={patientReports}
          />
        </div>
        {/* <div className="grow-1 shrink-0 basis-[40%] max-w-[500px]">
          <UploadCard reload={getPatientReports} patientId={patientId} />
        </div> */}
      {/* </div> */}
    </MedicalRecordStyled>
  );
};

export default MedicalRecord;
