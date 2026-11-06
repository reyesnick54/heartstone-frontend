// The ABSEZ public website content, assembled. Sources: the ABSEZ One-Stop Service System
// Implementation Protocol, its Annexes (Appendices A–P) and the Volume 1 plain-English glossary.
// Changes to this content are changes to what ABSEZ tells the public: keep each item's
// `sources` accurate so ABSEZ legal can review it.
import type { WebsiteContent } from "../schema";
import { ABOUT, ORGANISATION } from "./about";
import { BUSINESS } from "./business";
import { CATEGORIES } from "./categories";
import { DEPARTMENTS } from "./departments";
import { GLOSSARY } from "./glossary";
import { HELP } from "./help";
import { DECISIONS, ONE_PATH } from "./how-it-works";
import { LIFE_EVENTS } from "./life-events";
import { SERVICES } from "./services";

export const ABSEZ_CONTENT: WebsiteContent = {
  organisation: ORGANISATION,
  home: {
    heroTitle: "Government services, in one place.",
    heroLead:
      "Apply once for the services of the Antigua and Barbuda Special Economic Zone. You don't need to know which department handles it.",
    searchHint: "For example: register a company, work permit, residency",
    quickSearches: [
      { label: "Register a company", q: "register a company" },
      { label: "Work permit", q: "work permit" },
      { label: "Development approval", q: "development approval" },
      { label: "Residency", q: "residency" },
      { label: "Import and export", q: "import export" },
    ],
    onePath: ONE_PATH,
    popularServiceSlugs: [
      "register-a-company",
      "business-licence",
      "work-permit",
      "investor-enquiry",
      "development-approval",
      "immigration-application",
      "residency-application",
      "land-registration",
    ],
    featuredLifeEventSlugs: [
      "starting-a-business",
      "moving-to-work",
      "building-or-developing",
      "importing-or-exporting",
    ],
    businessTeaser: {
      title: "Investing in the zone?",
      text: "Investor Relations responds to investor enquiries within 24 hours and arranges a project engagement meeting within 5 business days. Important projects can have a dedicated case manager.",
    },
  },
  about: ABOUT,
  departments: DEPARTMENTS,
  categories: CATEGORIES,
  services: SERVICES,
  decisions: DECISIONS,
  lifeEvents: LIFE_EVENTS,
  business: BUSINESS,
  help: HELP,
  glossary: GLOSSARY,
  searchSynonyms: [
    ["absez", "sez", "zone", "special economic zone"],
    ["cip", "citizenship by investment", "ciu"],
    ["one-stop", "one stop", "osss"],
  ],
};
