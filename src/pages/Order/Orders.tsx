import { OrderStyled } from "./Orders.styled";
import { useNavigate } from "react-router";
import { checkIsMobile } from "../../lib/common";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import { useDispatch, useSelector } from "react-redux";
import CommonSearchBox from "@/components/custom/search/CommonSearchBox";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import { useCallback, useEffect, useState } from "react";
import { RootState } from "@/redux/store";
import CustomTable, {
  CustomTableColumnType,
} from "@/components/custom/Table/CustomTable/CustomTable";
import toast from "react-hot-toast";
import { getClientOrdersAPI } from "@/redux/slices/orders/orderService";
import moment from "moment";
import useCustomModalRenderer from "@/components/custom/ModalRenderer/useCustomModalRenderer";
import CustomModalRenderer from "@/components/custom/ModalRenderer/CustomModalRenderer";
import CreateOrder from "./CreateOrderForm/CreateOrder";
import DownloadForm from "@/components/custom/DownloadForm/DownloadForm";
import { RiDownloadLine } from "react-icons/ri";
import { Link } from "react-router";

const Orders = () => {
  const navigate = useNavigate() as any;
  const { linkableId } = useClientLinkableId();
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const {
    data: ClientOrdersData,
    error: clientOrdersError,
    loading: clientOrdersLoading,
  } = useSelector((store: RootState) => store.order.clientOrders);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
  });
  const { activeTypes, push, pop, data } = useCustomModalRenderer([
    "createOrder",
    "downloadOrderExcel",
  ]);

  const getClientOrders = useCallback(() => {
    dispatch(
      getClientOrdersAPI({
        page: pagination.page - 1,
        count: pagination.pageSize,
        searchText: searchText,
      })
    );
  }, [pagination, searchText, dispatch]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      getClientOrders();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [getClientOrders]);

  useEffect(() => {
    if (clientOrdersError) {
      toast.error(clientOrdersError);
    }
  }, [clientOrdersError]);

  const onPaginationChange = (page: number, pageSize: number) => {
    setPagination({
      page,
      pageSize,
    });
  };

  const columns: CustomTableColumnType<
    (typeof ClientOrdersData.clientOrders)[0]
  > = [
    {
      label: "Sl No",
      key: "slno",
      render: (_, __, rowIndex) => {
        return rowIndex + 1;
      },
    },
    {
      label: "Order ID",
      dataIndex: "id",
      key: "orderId",
      render: (value:any) => {
        return <span className="cursor-pointer text-blue-500" onClick={()=>navigate(`/bookings/all?clientOrderId=${value}`)}>{value}</span>
      }
    },
    {
      label: "Clients",
      dataIndex: ["client", "name"],
      key: "clients",
    },
    {
      label: "Order Date",
      dataIndex: "created_at",
      key: "orderdate",
      render: (value) => {
        return moment(Number(value)).format("MMM DD, YYYY, hh:mm A");
      },
    },
    {
      label: "Completed Date",
      dataIndex: "invoice_date",
      key: "completeddate",
      render: (value) => {
        return value
          ? moment(Number(value)).format("MMM DD, YYYY, hh:mm A")
          : "N/A";
      },
    },
  ];

  const modals = [
    {
      type: "createOrder",
      component: (
        <CreateOrder reload={getClientOrders} onCancel={() => pop("createOrder")} visible={true} />
      ),
    },
    {
      type: "downloadOrderExcel",
      component: (
        <DownloadForm
          sectionType="orders"
          closeForm={() => pop("downloadOrderExcel")}
        />
      ),
    },
  ];

  return (
    <OrderStyled>
      <h2>My Orders</h2>
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <CommonSearchBox
          onSearch={(value) => setSearchText(value)}
          searchText={searchText}
        />
        <div className="flex gap-2">
          <PrimaryButton onClick={() => push("createOrder")}>
            Create New Order
          </PrimaryButton>
          <button
            className="download-btn"
            onClick={() => push("downloadOrderExcel")}
          >
            <RiDownloadLine size={20} />
          </button>
        </div>
      </div>
      <div>
        <CustomTable
          columns={columns}
          data={ClientOrdersData.clientOrders}
          showingName="Orders"
          isLoading={clientOrdersLoading}
          page={pagination.page}
          pageSize={pagination.pageSize}
          pagination={true}
          total={ClientOrdersData.clientOrdersCount}
          onPageChange={onPaginationChange}
        />
      </div>
      {/* //modals */}

      <CustomModalRenderer
        activeTypes={activeTypes}
        modals={modals}
        data={data}
      />
      {/* //modals */}
    </OrderStyled>
  );
};

export default Orders;
