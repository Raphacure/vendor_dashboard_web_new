import { OrderClients } from "@/redux/slices/Clients/clients.types";
import { getOrderClientsAPI } from "@/redux/slices/Clients/ClientsService";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const useGetAllSubClientsOrderData = () => {
  const dispatch = useDispatch();
  const [subClientsOrderDetails, setSubClientsOrderDetails] = useState<OrderClients["data"]["clients"]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllClientsOrderDetails = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = (await dispatch(getOrderClientsAPI())) as any;
      if (response.error) {
        toast.error(response.error.message ?? "unknown error occured");
        return;
      }
      setSubClientsOrderDetails(response.payload.data.clients);
    } catch (error) {
      toast.error("unknown error occured");
    } finally {
      setIsLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    getAllClientsOrderDetails();
  }, [getAllClientsOrderDetails]);

  return {
    subClientsOrderDetails,
    isLoading,
    reload: getAllClientsOrderDetails
  };
};

export default useGetAllSubClientsOrderData;
