"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "./icons";

type Variant = "primary" | "secondary" | "soft" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary: "bg-blue text-cream hover:bg-blue-dark shadow-soft hover:shadow-lift",
  secondary: "border border-blue/30 text-blue hover:border-blue hover:bg-blue hover:text-cream",
  soft: "bg-orange text-ink hover:bg-orange-deep shadow-soft hover:shadow-lift",
  ghost: "text-ink hover:text-blue px-0 py-0",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  arrow?: boolean;
};

type LinkProps = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: undefined;
  type?: undefined;
};

type ButtonElProps = CommonProps & {
  href?: undefined;
  external?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button(props: LinkProps | ButtonElProps) {
  const { variant = "primary", className = "", children, arrow = false } = props;
  const isGhost = variant === "ghost";

  const base = isGhost
    ? "group inline-flex items-center gap-2 text-sm font-semibold tracking-wide transition-colors duration-300 ease-premium"
    : "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ease-premium hover:-translate-y-0.5";

  const classes = `${base} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {children}
      {arrow && (
        <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
      )}
    </>
  );

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a href={props.href} target="_blank" rel="noopener noreferrer" className={classes}>
          {content}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={props.type ?? "button"} onClick={props.onClick} className={classes}>
      {content}
    </button>
  );
}
