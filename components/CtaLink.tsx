import Link from "next/link";
import { Icon } from "./Icon";

type Variant = "amber" | "outline" | "ghost" | "caution";

const variantClasses: Record<Variant, string> = {
  amber: "bg-amber text-asphalt hover:bg-amber-dim",
  caution: "bg-caution text-concrete-soft hover:bg-caution-soft",
  outline: "border-2 border-concrete text-concrete hover:bg-concrete hover:text-asphalt",
  ghost: "border-2 border-asphalt text-asphalt hover:bg-asphalt hover:text-concrete",
};

export function CtaLink({
  href,
  children,
  variant = "amber",
  external = false,
  icon,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  icon?: "phone" | "whatsapp" | "arrow";
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 font-mono text-sm font-semibold uppercase tracking-wide transition-colors ${variantClasses[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {icon && <Icon name={icon} className="w-4 h-4" />}
        {children}
      </a>
    );
  }

  if (href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes}>
        {icon && <Icon name={icon} className="w-4 h-4" />}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {icon && <Icon name={icon} className="w-4 h-4" />}
      {children}
    </Link>
  );
}
