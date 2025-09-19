import { getAllVendorsByApiQueryInVenders } from "@/graphql/graphqlConfig";
import { SERVER_IP } from "@/lib/config";
import { post } from "@/lib/helpers";
import { getVendorDetailsApiPayload } from "./vendorAPI.types";

export const getVendorDetailsAPI = (
  payload: getVendorDetailsApiPayload,
  { signal }: any = {}
) => {
  return post(
    `${SERVER_IP}/graphql`,
    getAllVendorsByApiQueryInVenders(payload),
    {
      signal: signal,
    }
  );
};
