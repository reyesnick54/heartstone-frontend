// Dashboard navigation (design: the sidebar in Main.html and Menu.html).
import { paths } from "./paths";

export interface NavEntry {
  id: string;
  label: string;
  href: string;
}

export const MAIN_NAV: NavEntry[] = [
  { id: "home", label: "Home", href: paths.home },
  { id: "services", label: "Find a service", href: paths.services },
  { id: "applications", label: "Applications", href: paths.applications },
  { id: "appointments", label: "Appointments", href: paths.appointments },
  { id: "documents", label: "Documents", href: paths.documents },
  { id: "credentials", label: "Credentials & certificates", href: paths.credentials },
  { id: "payments", label: "Payments", href: paths.payments },
  { id: "messages", label: "Messages", href: paths.messages },
  { id: "renewals", label: "Renewals", href: paths.renewals },
  { id: "appeals", label: "Appeals & reviews", href: paths.appeals },
];

export const MY_GOVERNMENT: NavEntry[] = [
  { id: "work", label: "Work & employment", href: paths.work },
  { id: "immigration", label: "Immigration & residency", href: paths.immigration },
  { id: "tax", label: "Tax & revenue", href: paths.tax },
  { id: "property", label: "Property & land", href: paths.property },
  { id: "vehicles", label: "Vehicles & driving", href: paths.vehicles },
  { id: "health", label: "Health", href: paths.health },
  { id: "benefits", label: "Benefits & support", href: paths.benefits },
  { id: "education", label: "Education", href: paths.education },
  { id: "civil-records", label: "Civil records", href: paths.civilRecords },
  { id: "public-safety", label: "Public safety", href: paths.publicSafety },
];

export const FOOTER_NAV: NavEntry[] = [
  { id: "settings", label: "Settings & notifications", href: paths.settings },
  { id: "help", label: "Help", href: paths.help },
];
