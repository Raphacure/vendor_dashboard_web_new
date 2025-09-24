import { getAllTicketsBody, TicketsErrorResponse, TicketsResponse } from "@/Scenes/apis/ticket/ticketAPI.types";
import { getAllTicketsAPI } from "@/Scenes/apis/ticket/ticketsAPI";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import toast from "react-hot-toast";

export const useGetTicketsQuery = (
  queryParams: getAllTicketsBody["filters"]
) => {
  const ticketsQuery = useQuery<TicketsResponse,TicketsErrorResponse>({
    queryKey: ["tickets", "getAllTickets" ,queryParams],
    queryFn: ({ signal }) =>{
        const body = Object.fromEntries(
          Object.entries(queryParams).filter(
            ([_, value]) => value && value !== undefined && value !== null
          )
        )
        return getAllTicketsAPI({ filters: body }, { signal });
    },
    enabled: !!queryParams,
    staleTime: 2000,
    retry: false,
    placeholderData: (prev) => prev,
  });

  useEffect(()=>{
    if(ticketsQuery.isError){
        toast.error(ticketsQuery.error?.message || "Failed to fetch tickets")
    }
  },[ticketsQuery.error,ticketsQuery.isError])

  return ticketsQuery;
};
