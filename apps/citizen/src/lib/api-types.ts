// Backend shapes used by the citizen pages. Every type comes from the generated contract.
import type { components } from "@heartstone/api-client";

export type Schemas = components["schemas"];
export type ApplicantCategory = Schemas["CreateCitizenApplicationDto"]["applicantCategory"];
export type ServiceSummary = Schemas["PublicServiceSummaryResponseDto"];
export type ServiceDetail = Schemas["PublicServiceDetailResponseDto"];
export type StartExperience = Schemas["CitizenStartExperienceResponseDto"];
export type FormSchema = Schemas["RenderedFormSchemaDto"];
export type FormSection = Schemas["RenderedFormSectionSchemaDto"];
export type FormFieldSchema = Schemas["RenderedFormFieldSchemaDto"];
export type ApplicationDetail = Schemas["CitizenApplicationDetailDto"];
export type ApplicationSummary = Schemas["CitizenApplicationSummaryDto"];
