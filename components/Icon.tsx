export type IconName =
  | "route"
  | "clock"
  | "tag"
  | "users"
  | "shield"
  | "signpost"
  | "phone"
  | "whatsapp"
  | "mail"
  | "pin"
  | "menu"
  | "close"
  | "arrow";

const paths: Record<IconName, React.ReactNode> = {
  route: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8.2 7.5c1 2 2.6 3.2 4.8 3.5s4.2 1.2 5 3.5" fill="none" strokeWidth="1.8" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" fill="none" strokeWidth="1.8" />
      <path d="M12 7.5V12l3.2 2" fill="none" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  tag: (
    <path
      d="M4 4h7.5L20 12.5 12.5 20 4 11.5V4z M8.3 8.3h.01"
      fill="none"
      strokeWidth="1.8"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  ),
  users: (
    <>
      <circle cx="8.5" cy="8" r="2.8" fill="none" strokeWidth="1.8" />
      <path d="M3.5 19c.6-3.2 2.6-4.8 5-4.8s4.4 1.6 5 4.8" fill="none" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="16.5" cy="8.5" r="2.3" fill="none" strokeWidth="1.8" />
      <path d="M15 14.6c1.9.2 3.7 1.6 4.2 4.4" fill="none" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  shield: (
    <path
      d="M12 3.5l7 2.6v5.4c0 4.4-2.9 7.6-7 9-4.1-1.4-7-4.6-7-9V6.1l7-2.6z M9 12l2 2 4-4.2"
      fill="none"
      strokeWidth="1.8"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  ),
  signpost: (
    <>
      <path d="M12 3v18" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 7h7l-1.6 2.4L19 11.8h-7" fill="none" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 12.5H6l1.6 2.2L6 16.9h6" fill="none" strokeWidth="1.8" strokeLinejoin="round" />
    </>
  ),
  phone: (
    <path
      d="M6.6 3.5h3l1.2 4-2 1.5a13 13 0 0 0 6.2 6.2l1.5-2 4 1.2v3a2 2 0 0 1-2.2 2C10.9 19 4.9 13 4.6 5.7A2 2 0 0 1 6.6 3.5z"
      fill="none"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  ),
  whatsapp: (
    <path
      d="M12 3.5A8.5 8.5 0 0 0 4.6 16.3L3.5 20.5l4.3-1.1A8.5 8.5 0 1 0 12 3.5z M8.7 8.2c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5s.7 1.7.8 1.8s.1.3 0 .5c-.1.2-.2.3-.4.5s-.3.4-.1.7c.2.3 1 1.6 2.1 2.4c1.4 1 1.9 1 2.2.9c.3-.1.9-.6 1.1-.9s.4-.3.6-.2s1.5.7 1.8.8c.3.1.5.2.5.4c0 .2 0 1-.4 1.5s-1.5 1-2.6.6c-1.4-.5-3.8-1.6-5.4-3.8c-1.2-1.6-1.5-2.5-1.6-2.9c-.1-.4-.5-1.3.1-2.3z"
      fill="none"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" fill="none" strokeWidth="1.8" />
      <path d="M4.5 6.5l7.5 6 7.5-6" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  pin: (
    <path
      d="M12 21s-6.5-6.1-6.5-11a6.5 6.5 0 0 1 13 0c0 4.9-6.5 11-6.5 11z M12 12.3a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6z"
      fill="none"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  ),
  menu: (
    <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" strokeWidth="1.8" strokeLinecap="round" />
  ),
  close: <path d="M5 5l14 14M19 5L5 19" strokeWidth="1.8" strokeLinecap="round" />,
  arrow: <path d="M4.5 12h14.5M13 6.5L19 12l-6 5.5" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
};

export function Icon({ name, className = "w-6 h-6" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
