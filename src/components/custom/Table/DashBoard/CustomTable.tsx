import CustomSpinLoader from "@/components/loader/SpinLoader/CustomSpinLoader";
import { CommonDashboardStyled } from "@/pages/DashboardV1/CommonDashboard.styled";
import { Table } from "react-bootstrap";

interface TableHeadItem {
  name: string;
}

interface TableBodyDataItem {
  render?: React.ReactNode;
  value?: string;
}

interface TableBodyItem extends Array<TableBodyDataItem> {}

interface TableModuleProps {
  tableHead: TableHeadItem[];
  tableBody: TableBodyItem[];
  alignCenter?: boolean;
  loading?: boolean;
  noDataText?: string;
}

export const CustomTableComponent = ({
  tableHead,
  tableBody,
  alignCenter,
  loading,
  noDataText,
}: TableModuleProps) => {
  return (
    <CommonDashboardStyled>
      <CustomSpinLoader spinning={loading}>
        <div className="overflow-x-auto w-full">
          <Table className="min-w-full">
            <thead className="table-light w-100">
              <tr>
                {tableHead?.map((item: any, index: number) => {
                  if (item?.render) {
                    return <th key={index}>{item.render}</th>;
                  } else if (item?.name) {
                    return (
                      <th
                        className={alignCenter ? "text-center" : ""}
                        key={index}
                      >
                        {item.name.toUpperCase()}
                      </th>
                    );
                  }
                  return <th key={index}></th>;
                })}
              </tr>
            </thead>
            <tbody>
              {tableBody?.length === 0 || !Array.isArray(tableBody) ? (
                <tr>
                  <td colSpan={tableHead.length} className="text-center">
                    {noDataText || "No data available"}
                  </td>
                </tr>
              ) : (
                tableBody.map((item: TableBodyItem, index: number) => {
                  return (
                    <tr key={index}>
                      {item?.map((data, dataIndex: number) => {
                        if (data?.render) {
                          return data.render;
                        } else if (data?.value) {
                          return (
                            <td
                              className={alignCenter ? "text-center" : ""}
                              key={dataIndex}
                            >
                              {data.value}
                            </td>
                          );
                        } else {
                          return <td key={dataIndex}></td>;
                        }
                      })}
                    </tr>
                  );
                })
              )}
            </tbody>
          </Table>
        </div>
      </CustomSpinLoader>
    </CommonDashboardStyled>
  );
};

export default CustomTableComponent;
