import CustomSpinLoader from "@/components/loader/SpinLoader/CustomSpinLoader";
import { GrowthInfoCardStyled } from "./GrowthInfoCard.styled";

interface GrowthItem {
  name: string;
  count: string;
}

interface GrowthSection {
  name: string;
  service: GrowthItem[];
  loading?: boolean;
}

interface GrowthCardData {
  growthList: GrowthSection[];
}

export const GrowthInfoCard = ({ cardData }: { cardData: GrowthSection }) => {
  return (
    <GrowthInfoCardStyled>
      <div className=" report-card-title const-card-title mb-4">
        <p className="kpi-card-title">{cardData?.name}</p>
      </div>

      <div className=" ">
        {cardData?.service?.map((item, itemIndex) => {
          return (
            <div
              key={itemIndex}
              className="d-flex justify-content-between align-items-center"
            >
              <p className="kpi-card-subs-title cost-kpi-card-subs-title">
                {item?.name}
              </p>
              <p className="kpi-card-subs-title cost-kpi-card-subs-title serviec-color">
                {item?.count}
              </p>
            </div>
          );
        })}
      </div>
    </GrowthInfoCardStyled>
  );
};

const sampleCardData: GrowthCardData = {
  growthList: [
    {
      name: "Top Spending Categories",
      service: [
        { name: "Pharmacy Benefits", count: "₹2,34,567" },
        { name: "In-Clinic Consults", count: "₹1,75,500" },
        { name: "Diagnostic Tests", count: "₹1,23,400" },
      ],
      loading: false,
    },
    {
      name: "Monthly Trends",
      service: [
        { name: "Average Monthly Spend", count: "₹95,167" },
        { name: "Peak Month", count: "November" },
        { name: "Growth Rate", count: "+12.5%" },
      ],
      loading: false,
    },
    {
      name: "Savings Summary",
      service: [
        { name: "Total Savings", count: "₹1,24,500" },
        { name: "Pharmacy Discounts", count: "₹78,900" },
        { name: "Health Checkup Savings", count: "₹45,600" },
      ],
      loading: false,
    },
  ],
};

export const GrowthInfoList = ({
  cardData = sampleCardData,
}: {
  cardData?: GrowthCardData;
}) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cardData?.growthList?.map((item, index) => {
          return (
            <CustomSpinLoader key={index} spinning={item?.loading ?? false}>
              <GrowthInfoCard key={index} cardData={item} />
            </CustomSpinLoader>
          );
        })}
      </div>
    </>
  );
};
