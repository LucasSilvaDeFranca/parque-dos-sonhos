import { clsx } from "./clsx";

interface Props {
  size?: "narrow" | "default" | "wide" | "full";
  className?: string;
  children: React.ReactNode;
  as?: "div" | "section" | "article" | "header" | "footer";
}

const SIZES = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
  full: "max-w-[100rem]",
} as const;

export function Container({
  size = "default",
  className = "",
  children,
  as: Tag = "div",
}: Props) {
  return (
    <Tag className={clsx("mx-auto px-5 sm:px-8 lg:px-12", SIZES[size], className)}>
      {children}
    </Tag>
  );
}
