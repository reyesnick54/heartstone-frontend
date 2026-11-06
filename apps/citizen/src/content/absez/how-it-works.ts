// How an application moves through the One-Stop Service (Implementation Protocol Part III,
// Articles 26–41 and 46; Appendix F service standards).
import type { PathStep, WebsiteContent } from "../schema";
import { appx, art } from "./sources";

/** The one-stop path shown on the home page. Targets are the documented service standards. */
export const ONE_PATH: readonly PathStep[] = [
  {
    title: "Apply once",
    detail:
      "Send your application through the One-Stop Service, even if several departments are involved.",
    sources: [art(26), art(6)],
  },
  {
    title: "Acknowledged",
    detail: "You are told your application has arrived and given a case reference number.",
    target: "Within 24 hours",
    sources: [appx("F", "Part II"), art(26)],
  },
  {
    title: "Initial response",
    detail:
      "You get a first response: for example a deficiency notice, a request for more information, routing confirmation or a status update.",
    target: "Within 72 hours",
    sources: [art(46)],
  },
  {
    title: "Routed to the right department",
    detail:
      "Your case is classified and sent to the departments, reviewers or authorities that need to look at it.",
    target: "Referral within 24 hours",
    sources: [art(27), art(29), appx("F", "Part II")],
  },
  {
    title: "Decision",
    detail:
      "After review, the relevant department or the Management Committee decides, and you are told the decision formally.",
    sources: [art(35)],
  },
  {
    title: "Compliance and renewal",
    detail:
      "If you are approved, any conditions are monitored, and you are reminded when renewals are due.",
    sources: [art(37), art(38), art(40)],
  },
];

export const DECISIONS: WebsiteContent["decisions"] = {
  types: [
    { label: "Approval", meaning: "Your application is approved." },
    {
      label: "Conditional approval",
      meaning:
        "Approved, with conditions you must follow, such as reporting, inspections or development milestones.",
    },
    {
      label: "Approval subject to corrective action",
      meaning: "Approved, provided you put specified things right within a set period.",
    },
    {
      label: "Referral",
      meaning: "Part or all of the matter is sent to another authority that must deal with it.",
    },
    { label: "Deferred decision", meaning: "The decision is put off until later." },
    { label: "Rejection", meaning: "Your application is refused." },
    { label: "Administrative closure", meaning: "Your case is closed administratively." },
  ],
  reconsideration: [
    "Where the law allows, you can ask for a decision to be reconsidered, reviewed or appealed.",
    "How you do this, and any deadline, is set by the applicable laws and regulations, your licence conditions and the procedures of the authority that decided. The One-Stop Service can help you with this, but it cannot change the legal rights you have.",
  ],
  generalSteps: [
    {
      title: "Submit your application",
      detail: "Through an intake channel designated by ABSEZ. You receive a case reference number.",
    },
    {
      title: "Classification",
      detail:
        "Your case is put into a category. The category decides the workflow, review requirements and service levels.",
    },
    {
      title: "Completeness review",
      detail:
        "ABSEZ checks the forms, documents, any fees and other requirements. If something is missing, you get a deficiency notice and can put it right.",
    },
    {
      title: "Routing",
      detail:
        "Your case goes to the departments, technical reviewers, inspectors or authorities that need to look at it. Reviews by several authorities are coordinated, at the same time where possible.",
    },
    {
      title: "Review",
      detail:
        "Technical review and inspections take place where needed. If more information is needed, you are told in writing what, why and by when.",
    },
    {
      title: "Decision",
      detail:
        "Made by the relevant ABSEZ department or the Management Committee. You are told formally.",
    },
    {
      title: "After the decision",
      detail: "Conditions are monitored, and renewals are tracked.",
    },
  ],
  documentsNote:
    "Uploading or sending a document does not mean it has been accepted or verified, and having all the documents does not mean an application is approved.",
  sources: [art(26), art(27), art(28), art(29), art(30), art(31), art(32), art(35), art(41)],
};
