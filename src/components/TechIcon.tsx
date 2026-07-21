import { getTechIcon } from "../constants/icons";

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

/** Renders a brand icon for a tech/language name, or nothing if no icon is registered. */
export default function TechIcon({ name, size = 13, className = "" }: TechIconProps) {
  const Icon = getTechIcon(name);
  if (!Icon) return null;
  return <Icon size={size} className={`flex-shrink-0 ${className}`} aria-hidden="true" />;
}
