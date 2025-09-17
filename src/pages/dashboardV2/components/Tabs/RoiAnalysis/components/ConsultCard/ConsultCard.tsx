import { ConsultCardStyled } from "./ConsultCard.styled";

const ConsultsCard = (props: any) => {
  const { data } = props;

  return (
    <ConsultCardStyled bgColor={data?.bgColor} borderColor={data?.borderColor}>
      <p className="kpi-card-title">
        {data?.name}
        <img src={data?.icon} alt="" />
      </p>
      <p className="kpi-card-sub-title">{data?.price}</p>

      <div className="d-flex align-items-center gap-3">
        <p className="kpi-card-subs-title">{data?.percent} from last {data?.dateType}</p>
        <p className="percent-text1 percent-text">
          {data?.mark}%
          <img
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1747974215437.png"
            alt=""
          />
        </p>
      </div>
    </ConsultCardStyled>
  );
};

export default ConsultsCard;
