import { CardProps } from "@/types";
import Image from "next/image";

interface CardComponentProps {
  data: CardProps;
}

const Card: React.FC<CardComponentProps> = ({ data }) => {
  const { image, title, question_cnt, date, status } = data;
  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-[276px] h-[226px] top-[161px] left-[74px] rounded-xl p-[12px] gap-[12px] shadow-[0_4px_10px_0_rgba(0,0,0,0.15)]">
        <div className="relative w-[252px] h-[116px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="text-base font-normal pt-[12px]">{title}</div>
        <div className="text-xs text-[#8E8E8E]">{question_cnt}개의 질문</div>
        <div className="flex justify-between mt-auto">
          <div className="text-xs">{date}</div>
          <div className="w-[57px] h-[22px] p-[4px_6px] rounded-sm text-xs text-center bg-[#E9E9E9]">
            {status}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
