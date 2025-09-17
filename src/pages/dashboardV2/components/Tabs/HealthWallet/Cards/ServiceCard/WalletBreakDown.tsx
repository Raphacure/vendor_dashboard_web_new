import styled from "styled-components";
import ServiceCard from "./ServiceCard";

const WalletBreakdown = (props: any) => {
  const {data} = props;


  return (
    <WalletBreakdownStyled>
      <div className="mx-auto">
        <div className="flex justify-between items-center !mb-2">
          <h1 className="!text-[1.125rem] font-bold text-gray-900">
            Service-wise Wallet Breakdown
          </h1>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white border-2 border-blue-500 text-blue-600 !rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Export Details
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map((service: any, index: any) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </WalletBreakdownStyled>
  );
};

const WalletBreakdownStyled = styled.div`
  border-radius: 24px;
  background: white;
  box-shadow: 5px 4px 30px 0px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

export default WalletBreakdown;
