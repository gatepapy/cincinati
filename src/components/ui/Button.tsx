import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "outline";

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-espresso-500 text-cream-50 hover:bg-espresso-400 focus-visible:outline-espresso-400",
  secondary:
    "bg-cream-50 text-midnight-950 hover:bg-cream-200 focus-visible:outline-cream-200",
  outline:
    "border border-cream-50/40 text-cream-50 hover:border-cream-50 hover:bg-cream-50/10 focus-visible:outline-cream-50",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide uppercase transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", className, children } = props;
  const classes = cn(base, variantClasses[variant], className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} target={props.target} rel={props.rel} className={classes}>
        {children}
      </Link>
    );
  }

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const { href, variant: _variant, className: _className, children: _children, ...buttonProps } =
    props as ButtonAsButton;
  /* eslint-enable @typescript-eslint/no-unused-vars */

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
