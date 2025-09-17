import { useCallback, useEffect, useState } from "react";
import { ClinicDetailsStyled } from "./ClientDetails.styled";
import ClinicWallets from "./ClinicWallets";
import AssociatedUsers from "./AssociatedUsers";
import WalletDetails from "./WalletDetails";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { getClientsAllRelatedDocumentApi } from "../../../redux/slices/Clients/ClientsService";
import RFQHistory from "./RFQHistory";
import AssociatedDoctors from "./AssociatedDoctors";
import Packages from "@/pages/DoctorPatient/Packages/Packages";
import CommunicationDetails from "@/components/Common/CommunicationDetails/CommunicationDetails";
import CommonBreadCrumbs from "@/components/custom/BreadCrumb/CommonBreadCrumb";
import CustomTab from "@/components/custom/Tab/CustomTab";

const ClientDetails = () => {
  const [selectedDocType, setSelectedDocType] = useState<any>();
  const [relatedDocs, setRelatedDocs] = useState<any>([]);

  const dispatch = useDispatch();
  const params = useParams<any>();
  const id = params?.id || null;

  const clientRelatedDocuments = useCallback(async () => {
    if (!id) return;

    const res: any = await dispatch(
      getClientsAllRelatedDocumentApi({ id, type: selectedDocType?.value })
    );
    setRelatedDocs(res?.payload?.data?.documentFiles);
  }, [dispatch, id, selectedDocType]);

  useEffect(() => {
    clientRelatedDocuments();
  }, [clientRelatedDocuments]);

  return (
    <ClinicDetailsStyled className="p-3">
      <div className="mb-3">
        <CommonBreadCrumbs
          items={[
            { name: "Clients", link: "/MyClients" },
            { name: `Client Details(${id})`, link: `/MyClients/update/${id}` },
          ]}
        />
      </div>

      <CustomTab
        tabs={[
          // {
          //   label: "Client Details",
          //   value: "1",
          //   children: (
          //     <ClientDetailsOne id={id} setConfigValues={setConfigValues} />
          //   ),
          // },
          // {
          //   label: "Config",
          //   value: "1.5",
          //   children: <Config id={id as any} configValues={configValues} />,
          // },
          {
            label: "Client Wallets",
            value: "2",
            children: <ClinicWallets id={id} />,
          },
          {
            label: "Associated Doctors",
            value: "2.511111",
            children: <AssociatedDoctors clientId={id} />,
          },
          {
            label: "Associated Users",
            value: "3",
            children: <AssociatedUsers id={id} />,
          },
          {
            label: "Package Details",
            value: "4",
            children: <Packages section_name={"CLIENT"} parentId={id as any} />,
          },

          {
            label: "Wallet Details",
            value: "5",
            children: <WalletDetails id={id} />,
          },
          // {
          //   label: "Hyperlink",
          //   value: "6",
          //   children: <Hyperlink id={id} />,
          // },
          // {
          //   label: "Related Document",
          //   value: "7",
          //   children: (
          //     <RelatedDocumentsComponent
          //       documents={relatedDocs}
          //       id={id}
          //       selectedDocType={selectedDocType}
          //       setSelectedDocType={setSelectedDocType}
          //       vendorRelatedDocuments={clientRelatedDocuments}
          //       section_name="CLIENT"
          //     />
          //   ),
          // },
          // {
          //   label: "Offline Bookings",
          //   value: "8",
          //   children: <OfflineBooking id={id} />,
          // },
          {
            label: "RFQ History",
            value: "9",
            children: <RFQHistory id={id} />,
          },
          // {
          //   label: "History",
          //   value: "10",
          //   children: <HistoryModule section_name="client" vendorId={id} />,
          // },
          {
            label: "Communication Details",
            value: "11",
            children: <CommunicationDetails clientId={id} />,
          },
          // {
          //   label: "Annual Health Checkup",
          //   value: "11",
          //   children: <CommunicationDetails clientId={id} />,
          // },
          
        ]}
        containerClassName="!pt-4"
      />
    </ClinicDetailsStyled>
  );
};

export default ClientDetails;
