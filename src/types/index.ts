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
  label: string;
  disabled?: boolean;
  variant?: ButtonVariant;
  icon?: string;
  iconPosition?: "left" | "right";
  onClick?: () => void;
}

export interface SearchProps {
  disabled?: boolean;
  error?: boolean;
}
