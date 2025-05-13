import { TextFieldProps } from "@/types";
import Image from "next/image";

const TextField: React.FC<TextFieldProps> = ({
  label,
  labelInput = false,
  disabled = false,
  error = false,
  type,
  placeholder,
  helpText = "",
  icon = "",
}) => {
  const baseStyle =
    "flex items-center w-[279px] h-[40px] border-1 border-[#E5E5E5] rounded-lg px-[12px] py-[8px] ";
  const enabledStyle =
    "bg-white text-[#0A0A0A] focus-within:border-[#BFDBFE] focus-within:border-2";
  const disabledStyle = "bg-[#EFEFEF] text-[#A3A3A3]";
  const errorStyle = "border-[#DC2626]";

  return (
    <div className="flex flex-col">
      {labelInput ? (
        <div>
          <input
            type="text"
            className="text-sm text-[#1A1A1A] focus:outline-none"
          />
        </div>
      ) : (
        <div className="text-[#1A1A1A] text-sm">{label}</div>
      )}
      <div
        className={`${baseStyle} ${
          disabled ? disabledStyle : error ? errorStyle : enabledStyle
        }`}
      >
        {icon && (
          <div className="mr-2">
            <Image src={icon} alt="icon" width={12} height={12} />
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className="w-full text-sm focus:outline-none"
        />
      </div>
      <div className="text-xs text-[#8E8E8E]">{helpText}</div>
    </div>
  );
};

export default TextField;
