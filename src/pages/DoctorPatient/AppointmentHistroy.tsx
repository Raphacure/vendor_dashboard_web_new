import { AppointmentHistroyStyled } from "./AppointmentHistroy.styled";
import AppointmentHistoryCard from "./AppointmentHistoryCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPatientAppointments } from "../../redux/slices/myPatients/myPatientsService";
import { toast } from "react-hot-toast";
import { RootState } from "../../redux/store";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";

const AppointmentHistory = ({ patientId }: any) => {
  const dispatch = useDispatch() as any;
  const [appointments, setAppointments] = useState(null) as any;
  const [appointmentsLoading, setAppointmentsLoading] = useState(true);
  const { user } = useSelector((ReduxState: RootState) => ReduxState.auth);
  const {linkableId} = useClientLinkableId()

  const getAllAppointments = async () => {
    try {
      if(!linkableId){
        return;
      }
      setAppointmentsLoading(true);
      const body = {
        userId: patientId,
        page: 1,
        count: 10,
      };
      console.log("body", body);
      const appointmentsResult = (await dispatch(
        getAllPatientAppointments(body)
      )) as any;
      if (appointmentsResult?.error) {
        toast.error(
          appointmentsResult?.error?.message || "Unknown Error Occured"
        );
        return;
      }
      setAppointments(appointmentsResult?.payload?.data);
    } catch (error) {
      toast.error("unknown error occured");
    } finally {
      setAppointmentsLoading(false);
    }
  };

  useEffect(() => {
    getAllAppointments();
  }, [dispatch, patientId, user]);

  return (
    <AppointmentHistroyStyled>
      <h2 className="sticky-header">
        {appointments?.pagination?.total} Appointments till date
      </h2>
      <AppointmentHistoryCard prescriptions={appointments?.prescriptions} />
    </AppointmentHistroyStyled>
  );
};

export default AppointmentHistory;
