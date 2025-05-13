import Image from "next/image";
import TextField from "./inputComponent";
import { QuestionBoxProps } from "@/types";

const QuestionBox: React.FC<QuestionBoxProps> = ({ icon }) => {
  return (
    <div className="w-full h-full rounded-2xl p-5">
      <div>
        <Image
          src={`/icons/${icon}_icon.png`}
          alt="icon"
          width={20}
          height={20}
        />
        <TextField
          type={""}
          placeholder={"Please enter a "}
          labelInput={true}
        />
      </div>
    </div>
  );
};

export default QuestionBox;
