import AddQuestionModal from "@/components/addQuestionModal";
import Button from "@/components/buttonComponent";
import IconButton from "@/components/iconButtonComponent";
import TextField from "@/components/inputComponent";
import QuestionItem from "@/components/questionComponent";
import { useSurveyStore } from "@/store/useServeyStore";
import { useRouter } from "next/router";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function NewSurvey() {
  const router = useRouter();
  const methods = useForm();
  const [isOpen, setIsOpen] = useState(false);

  const questions = useSurveyStore((state) => state.questions);

  const onSubmit = () => {
    console.log(questions);
  };

  return (
    <div className="flex flex-col bg-[#F5F8F9] min-h-screen">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="w-full h-full"
        >
          <div
            className={
              "flex justify-between w-full h-[60px] bg-white border-b-1 border-[#CACACA] py-[12px] px-[20px] md:px-[90px] lg:px-[74px] xl:px-[132px]"
            }
          >
            <div className="flex flex-row items-center">
              <IconButton
                icon="/icons/arrow_backward.svg"
                variant="white"
                onClick={() => router.push("/surveys")}
              />
              <div className="text-[#B5B5B5] text-base mx-2">내 설문</div>
              <div className="text-base mr-2">/</div>
              <div>
                <TextField placeholder="Title" type="text" />
              </div>
            </div>
            <div className="flex">
              <div className="mr-2">
                <Button label="Save" type="submit" />
              </div>
              <Button label="Preview" variant="white" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row h-full px-[20px] md:px-[90px] lg:px-[74px] xl:px-[132px] mt-[25px]">
            {/* builder */}
            <div className="flex-1 h-full rounded-xl bg-white p-[20px]">
              <div className="text-base text-black border-b-2 border-black pb-[12px] text-center">
                Builder
              </div>
              <div className="mt-2">
                <Button
                  label="Add Question"
                  icon="/icons/plus_icon2.svg"
                  iconPosition="left"
                  variant="gray"
                  onClick={() => setIsOpen(true)}
                  styleClass="w-full justify-center"
                  disabled={questions.length >= 10}
                />
              </div>

              <div>
                {questions.map((data) => (
                  <QuestionItem
                    key={data.id}
                    icon={data.icon}
                    label={data.label}
                  />
                ))}
              </div>
            </div>

            {/* question */}
            <div className="flex-2"></div>
          </div>
        </form>
      </FormProvider>

      <AddQuestionModal isOpen={isOpen} onCloseFn={() => setIsOpen(false)} />
    </div>
  );
}
