import { ButtonProps, ButtonVariant } from "@/types";
import Image from "next/image";

const Button: React.FC<ButtonProps> = ({
  label,
  disabled = false,
  variant = "black",
  icon,
  iconPosition = "left",
  onClick,
}) => {
  const baseStyle =
    "flex items-center h-[36px] px-4 py-2 rounded-md gap-2 transition cursor-pointer";

  const enabledStyles: Record<ButtonVariant, string> = {
    black: "bg-[#1A1A1A] text-white hover:bg-[#262626]",
    white:
      "bg-white text-[#1A1A1A] border-1 border-[#D0D0D0] hover:bg-[#E6E6E6]",
    gray: "bg-[#F1F5F9] text-[#1A1A1A] hover:bg-[#D9DDE0]",
  };

  const disabledStyles: Record<ButtonVariant, string> = {
    black: "bg-[#A5A5A5] text-[#CFCFCF] cursor-not-allowed",
    white:
      "bg-[#E6E6E6] text-[#B0B0B0] border-1 border-[#B0B0B0] cursor-not-allowed",
    gray: "bg-[#D9DDE0] text-[#B0B0B0] cursor-not-allowed",
  };

  const variantStyle = disabled
    ? disabledStyles[variant]
    : enabledStyles[variant];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variantStyle}`}
    >
      <div className="flex justify-between items-center">
        {icon && iconPosition === "left" && (
          <div className="w-4 h-4 mr-2">
            <Image src={icon} alt="icon" width={16} height={16} />
          </div>
        )}
        <div>{label}</div>
        {icon && iconPosition === "right" && (
          <div className="w-4 h-4 mr-2">
            <Image src={icon} alt="icon" width={16} height={16} />
          </div>
        )}
      </div>
    </button>
  );
};

export default Button;
