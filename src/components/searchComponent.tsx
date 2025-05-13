import { SearchProps } from "@/types";
import Image from "next/image";

const SearchInput: React.FC<SearchProps> = ({
  disabled = false,
  error = false,
}) => {
  const baseStyle =
    "flex items-center w-[279px] h-[40px] border-1 border-[#E5E5E5] rounded-lg px-[12px] py-[8px] ";
  const enabledStyle =
    "bg-white text-[#0A0A0A] focus-within:border-[#BFDBFE] focus-within:border-2";
  const disabledStyle = "bg-[#EFEFEF] text-[#A3A3A3]";
  const errorStyle = "border-[#DC2626]";

  return (
    <div
      className={`${baseStyle} ${
        disabled ? disabledStyle : error ? errorStyle : enabledStyle
      }`}
    >
      <div className="mr-2">
        <Image
          src="/icons/search_icon.svg"
          alt="searchIcon"
          width={12}
          height={12}
        />
      </div>
      <input
        type="search"
        placeholder="Search..."
        className="w-full text-sm focus:outline-none"
      />
    </div>
  );
};

export default SearchInput;
