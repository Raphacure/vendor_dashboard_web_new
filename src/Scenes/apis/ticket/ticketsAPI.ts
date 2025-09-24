import { post, put } from "@/lib/helpers";
import { CreateTicketBody, getAllTicketsBody } from "./ticketAPI.types";
import { SERVER_IP } from "@/lib/config";



export const getAllTicketsAPI = (body:getAllTicketsBody,{signal}:{signal?:AbortSignal}) => {
    return post(`${SERVER_IP}/api/v1/tickets/get-all`, body,{signal:signal})
}

export const createTicketAPI = (body:CreateTicketBody,{signal}:{signal?:AbortSignal})=>{ 
    return post(`${SERVER_IP}/api/v1/tickets/create`,  {...body,status:"open"},{signal:signal})
}