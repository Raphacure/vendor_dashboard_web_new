import { useEffect, useState } from "react";
import { WalletDetailsStyled } from "./WalletDetails.styled";
import { useDispatch } from "react-redux";
import { getWalletDetailsApi } from "../../../redux/slices/Clients/ClientsService";
import CommonSearchBox from "@/components/custom/search/CommonSearchBox";
import CustomTable from "@/components/custom/Table/CustomTable/CustomTable";

const WalletDetails = ({ id }: any) => {
  const columns = [
    {
      label: "Id #",
      dataIndex: "id",
      key: "id",
    },
    {
      label: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      label: "Scheduled Date",
      dataIndex: "scheduledDate",
      key: "scheduledDate",
    },
    {
      label: "Wallet Type",
      dataIndex: "walletType",
      key: "walletType",
    },
    {
      label: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      label: "Amount Paid",
      dataIndex: "amountPaid",
      key: "amountPaid",
    },
    {
      label: "Wallet Used",
      dataIndex: "walletUsed",
      key: "walletUsed",
    },
  ];
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [packagesPageSize, setPackagesPageSize] = useState(10);
  const [walletDetails, setWalletDetails] = useState([]);
  const [filteredWalletDetails, setFilteredWalletDetails] = useState([]);
  const dispatch = useDispatch();

  const handlePageChange = (data: any) => {
    const { current, pageSize } = data;
    setPackagesPageSize(pageSize);
    setPage(current);
  };

  const handleChangeValue = (value: string) => {
    setSearchText(value);
    const filteredData = walletDetails.filter(
      (wallet: any) =>
        wallet.customerName.toLowerCase().includes(value) ||
        wallet.id.toString().includes(value) ||
        wallet.scheduledDate.toLowerCase().includes(value)
    );
    setFilteredWalletDetails(filteredData);
  };

  useEffect(() => {
    const getWalletDetails = async (clientId: any) => {
      try {
        const res = (await dispatch(getWalletDetailsApi(clientId))) as any;
        console.log("API Response: ", res);
        const formattedData =
          res?.payload?.data?.bookingWallets?.map((wallet: any) => ({
            id: wallet.id,
            customerName: `${wallet.user.first_name} ${wallet.user.last_name}`,
            scheduledDate: wallet.booking
              ? new Date(
                  Number(wallet.booking.collection_1_date)
                ).toLocaleDateString()
              : "N/A",
            walletType: wallet.clientWallet.type,
            status: wallet.booking ? wallet.booking.status : "N/A",
            amountPaid: wallet.booking
              ? `Rs. ${wallet.booking.final_amount}`
              : "Rs. 0",
            walletUsed: `Rs. ${Math.abs(wallet.amount_used)}`,
          })) ?? [];

        setWalletDetails(formattedData);
        setFilteredWalletDetails(formattedData);
      } catch (error) {
        console.error("Error fetching wallet details:", error);
      }
    };

    getWalletDetails(id);
  }, [id, dispatch]);

  return (
    <WalletDetailsStyled>
      <div className="heading-above">
        <div className="heading">
          <p>Wallet Used Details</p>
        </div>
        <div className="search-tag-div">
          <CommonSearchBox
            onSearch={handleChangeValue}
            placeHolder="Search by Customer name or number or booking id"
            searchText={searchText}
          />
        </div>
      </div>

      <div className="wallet-details-form">
        <CustomTable
          columns={columns}
          data={filteredWalletDetails}
          showingName="Wallets"
          isLoading={false}
          onPageChange={handlePageChange}
          page={page}
          pageSize={packagesPageSize}
          total={walletDetails.length}
          pagination={true}
        />
      </div>
    </WalletDetailsStyled>
  );
};

export default WalletDetails;
