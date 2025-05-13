export interface CardProps {
  date: string;
  image: string;
  isActive: boolean;
  question_cnt: number;
  answer_cnt?: number;
  title: string;
}

export type ButtonVariant = "black" | "white" | "gray";

export interface ButtonProps {
  label?: string;
  disabled?: boolean;
  variant?: ButtonVariant;
  icon?: string;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  styleClass?: string;
  type?: "button" | "submit";
}

export interface SearchProps {
  disabled?: boolean;
  error?: boolean;
}

export interface TextFieldProps {
  label?: string;
  labelInput?: boolean;
  disabled?: boolean;
  error?: boolean;
  type: string;
  placeholder: string;
  helpText?: string;
  icon?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onCloseFn: () => void;
}

export interface QuestionProps {
  icon: string;
  label?: string;
}

export interface QuestionBoxProps {
  icon: string;
  label: string;
  required: boolean;
}
