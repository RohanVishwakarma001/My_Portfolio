import { Github, Linkedin, Mail, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

/** Compact social icon set — shared by the Hero and Footer. */
export const socialLinks: SocialLink[] = [
  {
    icon: Github,
    href: "https://github.com/RohanVishwakarma001",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/rohan-vishwakarma-18507a293/?skipRedirect=true",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:rohanvishwakarma8261@gmail.com", label: "Email" },
];

export interface ContactLink extends SocialLink {
  value: string;
  color: string;
}

/** Detailed contact cards rendered on the Contact section. */
export const contactLinks: ContactLink[] = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/RohanVishwakarma001",
    href: "https://github.com/RohanVishwakarma001",
    color: "cyan",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/rohan-vishwakarma",
    href: "https://linkedin.com/in/rohan-vishwakarma",
    color: "blue",
  },
  {
    icon: Mail,
    label: "Email",
    value: "rohanvishwakarma8261@gmail.com",
    href: "mailto:rohanvishwakarma8261@gmail.com",
    color: "purple",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8317055505",
    href: "tel:+918317055505",
    color: "green",
  },
];
