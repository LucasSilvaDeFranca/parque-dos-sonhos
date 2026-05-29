import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  withIcon?: boolean;
  className?: string;
  children: React.ReactNode;
}

interface LinkProps extends BaseProps {
  href: string;
  external?: boolean;
  type?: never;
  onClick?: never;
  disabled?: never;
}

interface ButtonElProps extends BaseProps {
  href?: never;
  external?: never;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

type Props = LinkProps | ButtonElProps;

const SIZES: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[0.95rem]",
  lg: "h-14 px-8 text-base",
};

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-pds-fire text-white hover:bg-pds-fire-light shadow-[0_8px_24px_-12px_rgba(217,75,31,0.6)]",
  secondary:
    "bg-pds-green text-white hover:bg-pds-green-mid shadow-[0_8px_24px_-12px_rgba(31,92,46,0.6)]",
  ghost:
    "text-pds-ink hover:bg-pds-cream/60",
  "outline-light":
    "border border-white/40 text-white hover:bg-white/10 backdrop-blur-sm",
};

export function Button(props: Props) {
  const {
    variant = "primary",
    size = "md",
    withIcon = false,
    className = "",
    children,
  } = props;

  const base =
    "inline-flex items-center justify-center gap-2 font-medium tracking-tight rounded-full transition-all duration-300 ease-out group whitespace-nowrap";
  const cx = `${base} ${SIZES[size]} ${VARIANTS[variant]} ${className}`;

  const inner = (
    <>
      {children}
      {withIcon && (
        <ArrowUpRight
          size={size === "sm" ? 16 : 18}
          strokeWidth={2}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cx}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={props.href as never} className={cx}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`${cx} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {inner}
    </button>
  );
}
