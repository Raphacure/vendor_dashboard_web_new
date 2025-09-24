import { useCallback, useEffect, useState } from "react";
import { getRfqById } from "../../../../hr_dashboard_web_new/src/redux/slices/rfq/rfqService";
import { useDispatch } from "react-redux";
import RfqDetails from "./RfqDetails";
import NegotiationHistory from "./NegotiationHistory";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import CustomTab from "@/components/custom/Tab/CustomTab";

type prop = {
  onHide: () => void;
  id: any;
  activeTab: any;
  selectedRfq: any;
};
const RFQ_Details = ({ onHide, id, activeTab, selectedRfq }: prop) => {
  const dispatch = useDispatch();
  const [data, setData] = useState<any>([]);
  const [packageDetails, setPackageDetails] = useState<string[]>([]);
  const [testDetails, setTestDetails] = useState([]);
  const [cityDetails, setCityDetails] = useState({});

  const getRfqDetails = useCallback(async () => {
    if (!id) return;

    const res: any = await dispatch(getRfqById(id));
    const rfq = res?.payload?.data?.rfq;
    setData(rfq);

    const tests = new Set<string[]>();
    const packages = new Set<string[]>();
    const city: any = {};

    rfq?.items?.forEach((test: any) => {
      city[test?.city_id] = {
        service_id: test?.service_id,
        no_of_men: test?.no_of_men,
        no_of_women: test?.no_of_women,
        no_of_children: test?.no_of_children,
      };
      packages.add(test?.package?.service_name);
      tests.add(test?.test?.service_name);
    });

    setPackageDetails(Array.from(packages) as any);
    setTestDetails(Array.from(tests) as any);
    setCityDetails(city);
  }, [id, dispatch]);
  useEffect(() => {
    getRfqDetails();
  }, [getRfqDetails]);

  return (
    <CustomModal handleClose={onHide} open={true} title="RFQ Details">
      <CustomModal.Body>
        <CustomTab
          tabs={[
            {
              label: "Details",
              value: "2",
              children: (
                <RfqDetails
                  details={data}
                  cityDetails={cityDetails}
                  tests={testDetails}
                  packages={packageDetails}
                  activeTab={activeTab}
                  data={selectedRfq}
                />
              ),
            },
            {
              label: "Negotiation History",
              value: "4",
              children: (
                <NegotiationHistory
                  onSuccess={getRfqDetails}
                  id={data?.id}
                  data={data?.negotiations}
                  showInput={
                    data?.status == "approved" || data?.status == "rejected"
                      ? false
                      : true
                  }
                />
              ),
            },
          ]}
          containerClassName="mt-2"
        />
      </CustomModal.Body>
    </CustomModal>
  );
};

export default RFQ_Details;
