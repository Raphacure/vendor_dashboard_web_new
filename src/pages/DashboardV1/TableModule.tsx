import { CommonDashboardStyled } from "./CommonDashboard.styled";
import { Table } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { GoArrowUpRight } from "react-icons/go";

const TableGraph = ({ tableBody }: { tableBody: any[] }) => {
  const data = tableBody?.map((item: any) => ({
    name: item?.name ?? "", // Optional: fallback if name is missing
    uv: item?.change ?? 0, // Optional: default to 0 if change is missing
  }));

  return (
    <ResponsiveContainer width="40%" height={30}>
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis dataKey="name" hide />
        <YAxis hide />
        <Tooltip />
        <Line
          type="linear"
          dataKey="uv"
          stroke="#5a4ff3"
          strokeWidth={4}
          connectNulls
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const TableModule = (props: any) => {
  const { tableHead, tableBody, section_name } = props;
  return (
    <CommonDashboardStyled>
      <Table className="w-100">
        <thead className="table-light w-100">
          <tr>
            {tableHead?.map((item: any, index: number) => {
              return <th key={index}>{item?.name?.toUpperCase()}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {tableBody?.map((item: any, index: number) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1747981499421.png"
                    alt=""
                    className="me-3"
                  />
                  {item?.name}
                </td>
                <td> {item?.price}</td>

                <td>
                  {Number(item?.parcent) === 10 ? (
                    <>
                      {item?.parcent} %
                      {section_name !== "serviceutilization" && (
                        <ProgressBar now={Number(item?.parcent)} />
                      )}
                    </>
                  ) : (
                    <>
                      {item?.parcent} %
                      {section_name !== "serviceutilization" && (
                        <ProgressBar
                          now={Number(item?.parcent)}
                          variant={
                            Number(item?.parcent) < 10
                              ? "danger" // red
                              : Number(item?.parcent) > 40
                              ? "primary" // blue (#2563eb)
                              : Number(item?.parcent) > 20
                              ? "success" // green (#16a34a)
                              : Number(item?.parcent) > 10
                              ? "#fff" // purple-ish (can be customized)
                              : undefined
                          }
                        />
                      )}
                    </>
                  )}
                </td>

                <td
                  className={
                    section_name == "serviceutilization"
                      ? ""
                      : Number(item?.parcent) < 10
                      ? "report-card-emp-change report-card-emp-grp"
                      : "report-card-emp-grp"
                  }
                >
                  {section_name == "serviceutilization"
                    ? ""
                    : Number(item?.parcent) < 10
                    ? "-"
                    : "+"}
                  {item?.change}{" "}
                  {section_name !== "serviceutilization" && <>%</>}
                </td>
                <td>
                  {section_name == "serviceutilization" ? (
                    item?.constImp
                  ) : (
                    <>
                      <TableGraph tableBody={tableBody} />
                    </>
                  )}
                </td>

                {section_name == "serviceutilization" && (
                  <td>
                    <div className="td-body-div">
                      <GoArrowUpRight /> +{item?.trend}%
                    </div>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </CommonDashboardStyled>
  );
};

export default TableModule;
