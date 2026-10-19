const baseProps = {
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function ArrowUpRight({ size = 18, className = "" }) {
  return (
    <svg {...baseProps} width={size} height={size} className={className}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ArrowRight({ size = 18, className = "" }) {
  return (
    <svg {...baseProps} width={size} height={size} className={className}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowDown({ size = 18, className = "" }) {
  return (
    <svg {...baseProps} width={size} height={size} className={className}>
      <path d="M12 4v16M6 14l6 6 6-6" />
    </svg>
  );
}

export function Spark({ size = 18, className = "" }) {
  return (
    <svg {...baseProps} width={size} height={size} className={className}>
      <path d="M12 2.8c.7 5.2 3.1 7.7 8.2 8.4-5.1.7-7.5 3.2-8.2 8.4-.7-5.2-3.1-7.7-8.2-8.4 5.1-.7 7.5-3.2 8.2-8.4Z" />
    </svg>
  );
}

export function MapPin({ size = 18, className = "" }) {
  return (
    <svg {...baseProps} width={size} height={size} className={className}>
      <path d="M20 10.4c0 5-8 11.1-8 11.1S4 15.4 4 10.4a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10.4" r="2.5" />
    </svg>
  );
}

export function Clock({ size = 18, className = "" }) {
  return (
    <svg {...baseProps} width={size} height={size} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.2 2" />
    </svg>
  );
}

export function Mail({ size = 18, className = "" }) {
  return (
    <svg {...baseProps} width={size} height={size} className={className}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

export function Menu({ open = false }) {
  return (
    <span className={"menu-icon" + (open ? " is-open" : "")} aria-hidden="true">
      <span />
      <span />
    </span>
  );
}
