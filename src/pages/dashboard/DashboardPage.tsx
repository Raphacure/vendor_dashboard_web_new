import { MoveUpRight } from "lucide-react";
import DashboardPageStyled from "./DashboardPage.styled";
import { useNavigate } from "react-router";
import Community from "../Community/Community";
import useClientDetails from "@/hooks/auth/useClientDetails";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useMemo, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { getAllClientEmpoyess } from "@/redux/slices/employees/EmployeeService";
import toast from "react-hot-toast";
import { RootState } from "@/redux/store";
import { clientServiceReportsAPI } from "@/redux/slices/reports/reportsService";
import { formatStatus } from "@/lib/common";

interface PieChartData {
  name: string;
  count: number;
}

interface RenderActiveShapeProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload: PieChartData;
  percent: number;
  value: number;
}

const renderActiveShape = (props: RenderActiveShapeProps) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value,
  } = props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      {/* Centered text inside the pie */}
      <text
        x={cx}
        y={cy - 10}
        textAnchor="middle"
        dominantBaseline="central"
        fill="#333"
        fontSize={18}
        fontWeight={600}
        style={{ zIndex: 1000 }}
      >
        {payload.name}
      </text>
      <text
        x={cx}
        y={cy + 15}
        textAnchor="middle"
        dominantBaseline="central"
        fill="#333"
        fontSize={14}
        style={{ zIndex: 1000 }}
      >
        {`Total Count: ${value}`}
      </text>
    </g>
  );
};

const DashboardPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { clientDetails, linkableId } = useClientDetails();
  const [totalEmployee, setTotalEmployee] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = useCallback((_data: PieChartData, index: number) => {
    setActiveIndex(index);
  }, []);

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#AF19FF",
    "#FF1919",
  ];
  const {
    loading: detailedServiceReportLoading,
    error: detailedServiceReportError,
    data: detailedServiceReport,
  } = useSelector((store: RootState) => store?.reports?.detailedServiceReport);

  useEffect(() => {
    if (detailedServiceReportError) {
      toast.error(detailedServiceReportError ?? "unknown error occured");
    }
  }, [detailedServiceReportError]);

  useEffect(() => {
    dispatch(clientServiceReportsAPI({ clientId: linkableId }));
  }, [dispatch, linkableId]);

  useEffect(() => {
    const getAllEmployeesDetails = async () => {
      try {
        const filters = {
          page: 1,
          count: 1,
          department: "",
          clientId: linkableId,
        };
        const result = (await dispatch(getAllClientEmpoyess(filters))) as any;
        if (result?.error) {
          toast.error(result?.error?.message || "unknown error occured");
          return;
        } else {
          setTotalEmployee(result?.payload?.data?.total);
        }
      } catch (error) {
        toast.error("unknown error occured");
      }
    };
    getAllEmployeesDetails();
  });

  const topSpendingCategories = useMemo(() => {
    if (
      !Array.isArray(detailedServiceReport?.data) ||
      detailedServiceReport?.data?.length === 0
    ) {
      return [
        {
          name: "No Data Available",
        },
      ];
    }

    return detailedServiceReport?.data
      .toSorted((a: { total_amount: string }, b: { total_amount: string }) => {
        const amountA = parseInt(a.total_amount) || 0;
        const amountB = parseInt(b.total_amount) || 0;
        return amountB - amountA;
      })
      .map((item: { type: string; total_bookings: number }) => ({
        name: formatStatus(item?.type || ""),
        count: Number(item?.total_bookings ?? 0),
      }));
  }, [detailedServiceReport]);

  return (
    <DashboardPageStyled>
      <div className="grid grid-cols-5 gap-y-[30px] gap-x-[36px]">
        {/* This div takes the full width (10 columns) of the first row */}

        <div className="col-span-5 common-box-shadow rounded-[24px] !p-[34px] bg-[#F0F9FF] border-[#252B61] flex flex-col-reverse md:flex-row">
          <div>
            <p className="text-[#252B61] text-[32px] font-bold capitalize max-w-[640px]">
              Empowering {clientDetails?.name ?? ""} with Smarter Healthcare
              Solutions
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-1">
              <div className="flex items-center gap-2">
                <img
                  className="w-[47px] h-[47px]"
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1750937912933.png"
                />
                <p className="m-0 text-[18px] font-medium">
                  Manage Employee Health
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  className="w-[47px] h-[47px]"
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1750938246045.png"
                />
                <p className="m-0 text-[18px] font-medium">
                  Health Management - All in One Place
                </p>
              </div>
            </div>
            <div className="flex !flex-col sm:!flex-row gap-4 !mt-[35px] w-full">
              <p className="m-0 font-semibold text-[18px]">
                Client Id : {linkableId}
              </p>
              <p className="m-0 font-semibold text-[18px]">
                Total Employes : {totalEmployee}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center grow-1">
            <img
              src={clientDetails?.logo_url}
              alt="logo"
              className="w-[350px]"
            />
          </div>
        </div>

        {/* This div takes 40% width (4 out of 10 columns) in the second row */}
        <div className="col-span-5 xl:col-span-2 common-box-shadow rounded-[24px] !px-[33.5px] !py-[39.6px] flex flex-col gap-[24px]">
          {[
            // { name: "Wellness Session", link: "/wellness-session" },
            {
              name: "Toxic Substance",
              link: "/toxic-substance",
              type: "Drugs Of Abuse",
            },
            {
              name: "Pre-Employment",
              link: "/package/pre-employment",
              type: "Pre-Employment Check",
            },
            {
              name: "Annual Health Checkup",
              link: "/package/annualhealthcheckupcamp",
              type: "Annual Medical Checkup",
            },
            { name: "Onsite Camp", link: "/onsite-camp", type: "On-Site Camp" },
          ]
            .filter((item) => clientDetails?.service_types?.includes(item.type))
            .map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(item?.link)}
                className="relative w-full !pl-[16px] !pr-[34px] !py-[22px] justify-between rounded-lg  hover:cursor-pointer sub-boxes"
              >
                <div className="flex items-center gap-2">
                  <img
                    className="w-[20px] link-icon-img"
                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1745993773875.png"
                    alt={item.name}
                  />
                  <p
                    className="link-box-text !leading-[1.25] text-[#865b88] m-0 cursor-pointer "
                    onClick={() => navigate(item.link)}
                  >
                    {item.name}
                  </p>
                </div>
                <div className="w-[60px] h-[60px] absolute top-[50%] right-[0px] transform translate-y-[-50%] flex items-center justify-center move-up-container rounded-full cursor-pointer">
                  <MoveUpRight className="w-[34px]" />
                </div>
                {index !== 4 && <div className="line-div"></div>}
              </div>
            ))}
          {[
            {
              name: "Toxic Substance",
              link: "/toxic-substance",
              type: "Drugs Of Abuse",
            },
            {
              name: "Pre-Employment",
              link: "/package/pre-employment",
              type: "Pre-Employment Check",
            },
            {
              name: "Annual Health Checkup",
              link: "/package/annualhealthcheckupcamp",
              type: "Annual Medical Checkup",
            },
            { name: "Onsite Camp", link: "/onsite-camp", type: "On-Site Camp" },
          ].filter((item) => clientDetails?.service_types?.includes(item.type))
            .length === 0 && (
            <div className="text-center text-2xl font-medium">
              No Services Available
            </div>
          )}
        </div>

        {/* This div takes 60% width (6 out of 10 columns) in the second row */}
        <div className="col-span-5 xl:col-span-3 common-box-shadow rounded-[24px] p-3 flex flex-col justify-center items-center">
          <div className="w-full text-[22px] font-semibold">
            <p>Utilization Graph</p>
          </div>
          <ResponsiveContainer width="100%" minHeight="300px" height="100%">
            <PieChart>
              <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape as any}
                data={topSpendingCategories}
                cx="50%"
                cy="50%"
                innerRadius={100}
                outerRadius={130}
                fill="#8884d8"
                dataKey="count"
                onMouseEnter={onPieEnter}
              >
                {topSpendingCategories.map((_: any, index: number) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="col-span-5">
          <Community />
        </div>
      </div>
    </DashboardPageStyled>
  );
};

export default DashboardPage;
