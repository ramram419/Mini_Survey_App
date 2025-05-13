import Card from "@/components/cardComponent";
import { CardProps } from "@/types";
import { mockCardData } from "@/data/mockCardData";
import Button from "@/components/buttonComponent";
import SearchInput from "@/components/searchComponent";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function SurveyHome() {
  const [type, setType] = useState("gallery");
  const router = useRouter();

  const changeType = (type: string) => {
    setType(type);
  };

  return (
    <div>
      <div
        className={
          "flex justify-between w-full h-[60px] border-b-1 border-[#CACACA] py-[12px] px-[20px] md:px-[90px] lg:px-[74px] xl:px-[132px]"
        }
      >
        <div>My Space</div>
        <Button
          label="Create Survey"
          icon={"/icons/plus_icon.svg"}
          onClick={() => router.push("/surveys/new")}
        />
      </div>
      <div className="flex flex-col px-[20px] md:px-[90px] lg:px-[74px] xl:px-[132px]">
        <div className="flex justify-between items-start my-[25px]">
          <SearchInput />
          <div className="flex">
            <div
              className="cursor-pointer"
              onClick={() => changeType("gallery")}
            >
              <Image
                src={`/icons/gallery_${type === "gallery" ? "on" : "off"}.png`}
                alt="gallery type"
                width={30}
                height={30}
              />
            </div>
            <div className="cursor-pointer" onClick={() => changeType("list")}>
              <Image
                src={`/icons/list_${type === "list" ? "on" : "off"}.png`}
                alt="list type"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
        {type === "gallery" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mockCardData.map((card: CardProps, idx) => (
              <Card key={idx} data={card} />
            ))}
          </div>
        ) : (
          <div>
            <table className="w-full text-sm text-left">
              <thead className="border-y-1 border-[#E2E8f0] text-[#404040] text-sm h-[40px]">
                <tr>
                  <th className="pl-[16px]">제목</th>
                  <th className="hidden sm:table-cell">상태</th>
                  <th className="hidden sm:table-cell">등록 날짜</th>
                  <th>답변자 수</th>
                </tr>
              </thead>
              <tbody>
                {mockCardData.map((card: CardProps, idx) => (
                  <tr key={idx} className="h-[56px]">
                    <td className="pl-[16px]">{card.title}</td>
                    <td className="hidden sm:table-cell">
                      <span
                        className={`px-2 py-1 rounded text-white text-xs ${
                          card.isActive
                            ? "bg-red-500"
                            : "bg-gray-300 text-black"
                        }`}
                      >
                        {card.isActive ? "설문 진행 중" : "임시 저장"}
                      </span>
                    </td>
                    <td className="hidden sm:table-cell">{card.date}</td>
                    <td>
                      <div className="flex justify-between items-center">
                        <div>
                          {card.answer_cnt === 0 ? "-" : card.answer_cnt}
                        </div>
                        <button className="flex justify-center items-center h-[32px] w-[32px] border-1 border-[#E5E5E5] hover:bg-gray-100 rounded-sm cursor-pointer">
                          <Image
                            src="/icons/eye.svg"
                            alt="icon"
                            height={16}
                            width={16}
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-end items-center gap-3 text-sm mt-6">
              <div className="flex items-center gap-2">
                <span className="text-[#8E8E8E] text-xs">페이지당 갯수</span>
                <div className="w-[53px] h-[24px] border-1 border-[#E5E5E5] rounded px-[8px]">
                  <select className="text-[#1A1A1A] text-xs">
                    <option>10</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="text-[#8E8E8E]">&lt;</button>

                <button className="w-[16px] h-[16px] rounded-full bg-[#CBD5E1] text-[#FAFAFA] text-xs text-center">
                  1
                </button>

                <button className="text-[#0A0A0A33] hover:text-black">
                  &gt;
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
