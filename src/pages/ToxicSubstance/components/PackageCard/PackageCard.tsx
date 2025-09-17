import React from "react";
import PackageCardStyled from "./PackageCard.styled";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import CustomAccordium from "@/components/custom/accordium/Accordium";

interface PackageCardProps {
  data: any;
  onBookNow?: (selectedPackage: any) => void;
}

const PackageCard: React.FC<PackageCardProps> = ({ data, onBookNow }) => {
  console.log("data", data);

  const listData = [
    {
      title: "Test Highlights",
      description: "Information about test highlights would appear here.",
      icon: "✅",
      render: () => (
        <ul className="list-disc list-inside p-0">
          {data.highlights?.map((highlight: any, index: number) => (
            <li className="list-font-style" key={index}>
              {highlight}
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "Who Should Take This?",
      description:
        "Information about who should take this test would appear here.",
      icon: "🔍",
      render: () => <></>,
    },
    {
      title: "Turnaround Time",
      description: "Information about turnaround time would appear here.",
      icon: "🕐",
      render: () => <></>,
    },
    {
      title: "Location Options",
      description: "Information about location options would appear here.",
      icon: "📍",
      render: () => <></>,
    },
  ];

  const accordionData = listData.map((item) => ({
    title: (
      <div className="flex items-center gap-1">
        <span className="w-5 h-5 flex items-center justify-center mr-2">
          {item.icon}
        </span>
        <span className="font-semibold font-[Inter] text-[16px]">
          {item.title}
        </span>
      </div>
    ),
    render: item.render,
  }));

  return (
    <PackageCardStyled>
      <div className="w-full rounded-[24px] !text-[#252B61] p-2 main-box-shadow">
        <div className="flex p-6 gap-[18px]">
          {/* Image */}
            <img
              src={data?.image?.[0]}
              alt={data.title}
              className="h-[217px] rounded-lg  w-[199px] object-contain bg-gray-100"
            />
          {/* <div className="h-full flex-basis-[199px] flex-shrink-1">
          </div> */}

          {/* Content */}
          <div className="flex-1 flex flex-col gap-[20px] h-full">
            <h2 className="!text-[20px] !font-semibold !text-[#252B61] font-[Inter] capitalize !mb-0">
              {data?.service_name}
            </h2>

            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <img
                className="w-[29px] h-[29px]"
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1745998798210.png"
                alt="report_icon"
              />
              <div className="flex flex-col">
                <span className="text-[#008080] font-medium text-[14px]">
                  Report Within
                </span>
                <span className="text-[#141414] font-semibold text-[14px]">
                  {data?.reports_within}
                </span>
              </div>
            </div>

            <div>
              <div className="text-[14px] font-semibold">Corporate Pricing</div>
              <div className="flex items-center gap-2 m-0">
                <span className="text-[18px] text-[#616161] font-normal font-[outfit] line-through">
                  ₹{data?.price?.actual_cost}
                </span>
                <span className="text-[22px] font-semibold text-[#252B61] font-[outfit]">
                  ₹{data.price?.discounted_price}
                </span>
              </div>
            </div>
            <div>
              <PrimaryButton
                className="px-[12px] py-[6px] max-w-[218px] w-full h-[33px] "
                onClick={() => onBookNow?.(data)}
              >
                Book Now
              </PrimaryButton>
            </div>
          </div>
        </div>

        {/* Collapsible Sections */}
        <div className="mt-4">
          <CustomAccordium
            className="!rounded-[7px] bg-[#e9f2fd]"
            containerClassName="!px-[16px] !py-[22px]"
            headerClassName="accordium-custom-class"
            contentClassName="!py-[16px] !px-[20px]"
            data={accordionData}
            defaultOpen={0}
          />
        </div>
      </div>
    </PackageCardStyled>
  );
};

export default PackageCard;
