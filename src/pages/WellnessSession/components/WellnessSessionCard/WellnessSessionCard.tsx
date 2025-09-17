import React from "react";
import { MoveUpRight, Share2 } from "lucide-react";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import { useNavigate } from "react-router";

interface SpeakerInfo {
  name: string;
  designation: string;
  avatar: string;
}

interface WellnessSessionCardProps {
    card: {
      id: string;
      description: string;
      image: string;
      date: string;
      time: string;
      speaker: SpeakerInfo;
      link:string;
    };
    section: any;
  }

const WellnessSessionCard: React.FC<WellnessSessionCardProps> = ({
  card,
  section,
}) => {
  const navigate = useNavigate();

  return (
    <div
      key={card?.id}
      className="bg-white p-1 pb-2 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative h-[180px]">
        <img
          src={card?.image}
          alt={card?.speaker?.name}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute top-2 right-2 flex items-end gap-1">
          <span className="bg-white font-[Inter] text-[#222E62] font-medium text-[12px] px-2 py-1 rounded-2xl shadow">
            {card?.time}
          </span>
          <span className="bg-white font-[Inter] text-[#222E62] font-medium text-[12px] px-2 py-1 rounded-2xl shadow">
            {card?.date}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-1 px-2 pt-3">
        <span onClick={()=>navigate(card?.link)} className="inline-block bg-blue-50 text-[#222E62] text-[16px] font[Inter] font-bold px-2 py-1 rounded mb-1 w-fit cursor-pointer">
          Stress Management & Work-Life Balance
        </span>
        <p className="text-[16px] font-semibold mb-1 line-clamp-2">
          {card?.description}
        </p>
      </div>
      <div className="flex items-center justify-between px-2 mt-2">
        <div className="flex gap-1">
          <div className="flex items-center">
            <img
              src={card?.speaker?.avatar}
              alt={card?.speaker?.name}
              className="w-[30px] h-[30px] rounded-full object-cover border-[1px] border-[#92BDF6] mr-2"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] font-semibold text-[#222E62]">
              {card?.speaker?.name}
            </span>
            <span className="text-[12px] font-medium text-[#222E62]">
              {card?.speaker?.designation}
            </span>
          </div>
        </div>
        {section?.type === "recommended" ? (
          <SecoundaryButton>Request</SecoundaryButton>
        ) : (
          <button className="bg-gradient-to-b from-[#252B61] to-[#4C58C7] flex justify-center items-center p-1 !rounded-[7px] h-[28px] w-[28px]">
            <Share2 color="#92BDF6" size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default WellnessSessionCard;
