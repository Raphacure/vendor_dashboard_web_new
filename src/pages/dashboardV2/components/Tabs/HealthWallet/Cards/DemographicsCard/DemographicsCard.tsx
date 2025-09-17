import CustomSpinLoader from "@/components/loader/SpinLoader/CustomSpinLoader";
import { DemographicsCardStyled } from "./DemographicsCard.styled";

interface GrowthData {
  percentage: string;
  content: string;
}

interface CardItem {
  borderColor?: string;
  name: string;
  price: string | number;
  subTitle?: string;
  icon?: string;
  growthData?: GrowthData;
  customRender?: React.FC;
}

interface DemographicsCardProps {
  cardData?: CardItem[];
  section_name?: any;
  loading?: boolean;
}

const DemographicsCard: React.FC<DemographicsCardProps> = (props) => {
  const { cardData, loading = false } = props;

  return (
    <CustomSpinLoader spinning={loading}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-4 map-card-heading-div">
        {cardData?.map((item, index: number) => {
          return (
            <DemographicsCardStyled
              borderColor={item?.borderColor}
              key={index}
            >
              <p className="kpi-card-title">{item?.name}</p>

              <div className="flex justify-content-between items-center">
                <p
                  className={`report-card-price mb-0 ${
                    index % 4 === 0
                      ? "text-primary"
                      : index % 4 === 1
                      ? "text-success"
                      : index % 4 === 2
                      ? "text-warning"
                      : "text-purple"
                  }`}
                >
                  {item?.price}
                </p>
                {item?.icon && (
                  <img
                    src={item?.icon}
                    alt=""
                    className="w-10 h-10 rounded-lg"
                  />
                )}
              </div>
              {item?.subTitle && (
                <p
                  className={`kpi-card-subs-title ${
                    item?.growthData ? "" : "m-0"
                  }`}
                >
                  {item?.subTitle}
                </p>
              )}
              {item?.growthData && (
                <div className="flex items-center text-sm gap-1">
                  <span className="text-green-600 font-medium">
                    {item?.growthData?.percentage}
                  </span>
                  <span className="text-gray-500 ml-2">
                    {item?.growthData?.content}
                  </span>
                </div>
              )}
              {item.customRender && <item.customRender />}
            </DemographicsCardStyled>
          );
        })}
      </div>
    </CustomSpinLoader>
  );
};

export default DemographicsCard;
