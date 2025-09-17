interface AllocationService {
  type: "allocation";
  name: string;
  status: "Active" | "Discount" | string;
  allocated: number;
  used: number;
  remaining: number;
  footerInfo: string;
}

interface DiscountService {
  type: "discount";
  name: string;
  status: "Active" | "Discount" | string;
  discount: number;
  savings: number;
  consultations: number;
  footerInfo: string;
}

export type Service = AllocationService | DiscountService;

interface ServiceCardProps {
  service: any;
}

const ServiceCard: React.FC<any> = ({ service }) => {
  console.log("ServiceCard Props:", service);
  const getStatusBadge = (status: string) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";

    switch (status) {
      case "Active":
        return `${baseClasses} bg-green-100 text-green-800`;
      case "Discount":
        return `${baseClasses} bg-blue-100 text-blue-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-orange-500";
      case "Discount":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const calculateProgress = () => {
    if (service.type === "allocation") {
      return (service.used / service.allocated) * 100;
    } else if (service.type === "discount") {
      return (service.consultations / 200) * 100; // Assuming max 200 consultations for progress bar
    }
    return 0;
  };

  const formatCurrency = (amount: any) => {
    return `₹${amount?.toLocaleString()}`;
  };

  return (
    <div className="bg-white rounded-[24px] !p-4 shadow-[5px_4px_30px_0px_rgba(0,0,0,0.1)]">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg title-sec-new font-semibold text-gray-900">{service?.type?.replaceAll("_", " ")}</h3>
        <span className={getStatusBadge(`Active`)}>{`Active`}</span>
      </div>

      {/* Content based on service type */}
      {service.type !== "allocation" ? (
        <>
          <div className="space-y-3 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Allocated:</span>
              <span className="font-medium">
                {formatCurrency(service?.amount)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Used:</span>
              <span className="font-medium text-orange-600">
                {formatCurrency(service.usedAmount)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Remaining:</span>
              <span className="font-medium text-green-600">
                {formatCurrency(service?.amount-service.usedAmount)}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-3">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${getProgressColor(
                  service.status
                )}`}
                style={{ width: `${Math.min(calculateProgress(), 100)}%` }}
              />
            </div>
          </div>

          {/* Footer Info */}
          <p className="text-sm text-gray-500">{service.footerInfo}</p>
        </>
      ) : (
        <>
          <div className="space-y-3 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Discount:</span>
              <span className="font-medium">{service.discount}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Savings:</span>
              <span className="font-medium text-green-600">
                {formatCurrency(service.savings)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Consultations:</span>
              <span className="font-medium">{service.consultations}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-3">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${getProgressColor(
                  service.status
                )}`}
                style={{ width: `${Math.min(calculateProgress(), 100)}%` }}
              />
            </div>
          </div>

          {/* Footer Info */}
          <p className="text-sm text-gray-500">{service.footerInfo}</p>
        </>
      )}
    </div>
  );
};

export default ServiceCard;
