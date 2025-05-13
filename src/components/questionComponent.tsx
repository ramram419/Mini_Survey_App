import { QuestionProps } from "@/types";
import Image from "next/image";

const QuestionItem: React.FC<QuestionProps> = ({ icon, label }) => {
  return (
    <div className="flex justify-between w-full h-[48px] min-w-[74px] rounded-lg border-1 border-[#CBD5E1] p-3 mt-3">
      <div className="flex items-center">
        <Image src="/icons/drag_icon.svg" alt="icon" width={24} height={24} />
        <Image
          src={`/icons/${icon}_icon.png`}
          alt="icon"
          width={24}
          height={24}
        />
        <div className="ml-2 text-sm text-[#171717]">{label || "Question"}</div>
      </div>
      <div className="flex items-center">
        <Image
          src="/icons/plus_icon2.svg"
          alt="icon"
          width={16}
          height={16}
          className="mr-1"
        />
        <Image
          src="/icons/copy_icon.png"
          alt="icon"
          width={16}
          height={16}
          className="mr-1"
        />
        <Image src="/icons/trash_icon.png" alt="icon" width={16} height={16} />
      </div>
    </div>
  );
};

export default QuestionItem;
