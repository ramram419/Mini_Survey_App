import { create } from "zustand";

type Question = {
  id: number;
  type: string;
  icon: string;
  label?: string;
  required?: boolean;
};

interface SurveyState {
  title: string;
  questions: Question[];
  setTitle: (title: string) => void;
  addQuestion: (question: Question) => void;
  updateQuestion: (id: number, data: Partial<Question>) => void;
  removeQuestion: (id: number) => void;
}

export const useSurveyStore = create<SurveyState>((set) => ({
  title: "",
  questions: [],
  setTitle: (title) => set({ title }),
  addQuestion: (question) =>
    set((state) => ({
      questions: [...state.questions, question],
    })),
  updateQuestion: (id, data) =>
    set((state) => ({
      questions: state.questions.map((q) =>
        q.id === id ? { ...q, ...data } : q
      ),
    })),
  removeQuestion: (id) =>
    set((state) => ({
      questions: state.questions.filter((q) => q.id !== id),
    })),
}));
