import HealthCategoryAnalysisCardStyled from "./HealthCategoryAnalysisCard.styled";

interface HealthCategoryAnalysisCardProps {
  cardData: {
    title: string;
    status: string;
    metrics: {
      label: string;
      value: string;
      color: string;
    }[];
  };
  percentage: number;
}

const HealthCategoryAnalysisCard = ({ cardData, percentage }: HealthCategoryAnalysisCardProps) => {
  return (
    <HealthCategoryAnalysisCardStyled>
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-medium text-gray-900">{cardData.title}</h4>
        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
          {cardData.status}
        </span>
      </div>
      <div className="space-y-2">
        {cardData.metrics.map((metric) => (
          <div key={metric.label} className="flex justify-between text-sm my-1">
            <span className="text-gray-600">{metric.label}:</span>
            <span className={`font-medium text-${metric.color}-600`}>{metric.value}</span>
          </div>
        ))}
        <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
          <div className="bg-green-500 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
    </HealthCategoryAnalysisCardStyled>
  );
};

export default HealthCategoryAnalysisCard;
