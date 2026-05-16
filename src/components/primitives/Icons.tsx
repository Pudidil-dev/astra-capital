import { type SVGProps } from "react";

const baseProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 5v14" />
      <path d="m6 13 6 6 6-6" />
    </svg>
  );
}

export function ArrowUp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 19V5" />
      <path d="m6 11 6-6 6 6" />
    </svg>
  );
}

export function ArrowLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M19 12H5" />
      <path d="m11 18-6-6 6-6" />
    </svg>
  );
}

export function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}

export function Plus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function Minus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 7h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export function Spark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 4v3" />
      <path d="M12 17v3" />
      <path d="M4 12h3" />
      <path d="M17 12h3" />
    </svg>
  );
}
