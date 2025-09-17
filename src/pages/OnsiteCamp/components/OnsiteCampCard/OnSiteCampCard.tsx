import { formatStatus } from "@/lib/common";
import { MoveUpRight } from "lucide-react";
import { useNavigate } from "react-router";

const OnSiteCampCard = ({ card }: { card: any }) => {
  const navigate = useNavigate();

  return (
    <div
      key={card?.id}
      className="bg-white p-1 pb-2 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative h-[233px]">
        <div className="absolute left-[36px] bottom-0 translate-y-[50%] bg-[#92bdf6] text-[#252b61] !text-[16px] font-medium !py-[6px] rounded-[5px] !px-[9px]">
          {formatStatus(card?.type)}
        </div>
        <img
          src={'/src/assets/images/lab_test_banner_img.png'}
          alt={card?.client?.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex justify-between items-center px-2 !mt-[34px]">
        <div>
          <p className="font-semibold leading-normal text-[16px] m-0 text-slate-800">
            {card?.client?.name}
          </p>
          <p className="text-sm text-slate-500">{card?.branch_location?.location_name}</p>
          <p className="text-sm text-slate-500">{card?.collection_1_date} at {card?.collection_1_slot}</p>
        </div>
        <MoveUpRight
          onClick={() => navigate(`/onsite-camp/details/${card?.id}`)}
          className="w-[34px] cursor-pointer self-start"
        />
      </div>
    </div>
  );
};

export default OnSiteCampCard;
