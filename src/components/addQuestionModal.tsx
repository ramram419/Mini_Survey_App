import { useSurveyStore } from "@/store/useServeyStore";
import { ModalProps } from "@/types";
import Image from "next/image";

const AddQuestionModal: React.FC<ModalProps> = ({
  isOpen,
  onCloseFn = () => {},
}) => {
  const questions = useSurveyStore((state) => state.questions);
  const addQuestion = useSurveyStore((state) => state.addQuestion);

  const handleSelect = (type: string, icon: string) => {
    addQuestion({
      id: questions?.length + 1,
      type,
      icon,
    });
    onCloseFn();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-40" onClick={onCloseFn}>
      <div
        className="fixed inset-0  flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full max-w-[426px] h-auto z-50 bg-white rounded-xl border-1 border-[#E5E5E5] p-5">
          <div className="flex justify-between items-center">
            <div className="flex flex-row">
              <Image
                src="/icons/plus_icon2.svg"
                alt=""
                width={20}
                height={20}
                className="mr-2"
              />
              <div className="text-xl text-[#1A1A1A]">Add Question</div>
            </div>
            <div className="cursor-pointer" onClick={onCloseFn}>
              <Image
                src="/icons/cancle_icon.png"
                alt="close"
                width={12}
                height={12}
              />
            </div>
          </div>

          <div className="px-5 pt-4">
            <div
              className="flex items-center mb-2 cursor-pointer"
              onClick={() => handleSelect("phone", "phone")}
            >
              <Image
                src="/icons/phone_icon.png"
                alt="icon"
                width={20}
                height={20}
                className="mr-2"
              />
              <div>Phone Number</div>
            </div>
            <div
              className="flex items-center mb-2 cursor-pointer"
              onClick={() => handleSelect("email", "mail")}
            >
              <Image
                src="/icons/mail_icon.png"
                alt="icon"
                width={20}
                height={20}
                className="mr-2"
              />
              <div>Email</div>
            </div>
            <div
              className="flex items-center mb-2 cursor-pointer"
              onClick={() => handleSelect("text", "text")}
            >
              <Image
                src="/icons/text_icon.png"
                alt="icon"
                width={20}
                height={20}
                className="mr-2"
              />
              <div>Short Text</div>
            </div>
            <div
              className="flex items-center mb-2 cursor-pointer"
              onClick={() => handleSelect("website", "link")}
            >
              <Image
                src="/icons/link_icon.png"
                alt="icon"
                width={20}
                height={20}
                className="mr-2"
              />
              <div>WebSite</div>
            </div>
            <div
              className="flex items-center mb-2 cursor-pointer"
              onClick={() => handleSelect("multi", "multiple")}
            >
              <Image
                src="/icons/multiple_icon.png"
                alt="icon"
                width={20}
                height={20}
                className="mr-2"
              />
              <div>Choose Multiple</div>
            </div>
            <div
              className="flex items-center mb-2 cursor-pointer"
              onClick={() => handleSelect("radio", "radio")}
            >
              <Image
                src="/icons/radio_icon.png"
                alt="icon"
                width={20}
                height={20}
                className="mr-2"
              />
              <div>Choose Single</div>
            </div>
            <div
              className="flex items-center mb-2 cursor-pointer"
              onClick={() => handleSelect("file", "upload")}
            >
              <Image
                src="/icons/upload_icon.png"
                alt="icon"
                width={20}
                height={20}
                className="mr-2"
              />
              <div>File Upload</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestionModal;
