// Backend-shaped fixtures for tests. Shapes follow the generated contract.
export const service = {
  serviceId: "svc-1",
  slug: "register-employer",
  serviceVersionId: "33333333-3333-4333-8333-333333333333",
  versionLabel: "2026.2",
  publicName: "Register as an employer",
  plainLanguagePurpose: "Register your business so you can employ staff.",
  responsibleDepartmentDisplayName: "Labour Department",
  serviceFamilyName: "Employment",
  serviceType: "REGISTRATION",
  eligibleApplicantCategories: ["INDIVIDUAL", "AUTHORIZED_REPRESENTATIVE"],
  activitiesCovered: ["Companies that will employ at least one person"],
  availabilityStatus: "ACTIVE",
  isPilotOnly: false,
  isInformationOnly: false,
  applicationCapable: true,
  informationLastVerifiedAt: "2026-09-12T00:00:00.000Z",
  nonbindingGuidanceDisclaimer: "This information is guidance, not a decision.",
};

export const serviceDetail = {
  ...service,
  activitiesExcluded: ["Household domestic workers"],
  geographicScope: null,
  authorityClassificationSummary: "Decided by an authorised officer.",
  majorGovernmentDependencies: null,
  expectedHighLevelStages: [
    {
      stageCode: "CHECK",
      label: "Documents checked",
      description: "We check everything is there.",
      estimatedDurationLabel: "About 2 working days",
    },
    { stageCode: "DECIDE", label: "Decision", description: null, estimatedDurationLabel: null },
  ],
  fees: [
    {
      code: "REG",
      label: "Registration fee",
      description: null,
      amountCents: 15000,
      currency: "XCD",
      isVariable: false,
    },
  ],
  expectedOutputs: [
    {
      outputCode: "CERT",
      label: "Employer registration certificate",
      description: null,
      validityLabel: "Valid until cancelled",
    },
  ],
  typicalValidity: null,
  reviewComplaintRoutes: [
    {
      routeCode: "RECON",
      label: "Reconsideration",
      description: "Within 30 days",
      contactReference: null,
    },
  ],
  publicDisclaimer: null,
};

const field = (overrides: Record<string, unknown>) => ({
  required: false,
  displayOrder: 0,
  dataClassification: "PUBLIC",
  validation: {},
  conditionalRules: [],
  ...overrides,
});

export const formSchema = {
  formVersionId: "44444444-4444-4444-8444-444444444444",
  formDefinitionId: "55555555-5555-4555-8555-555555555555",
  formDefinitionCode: "EMPLOYER_REG",
  version: 2,
  title: { en: "Register as an employer" },
  status: "PUBLISHED",
  sections: [
    {
      sectionKey: "business",
      title: { en: "About the business" },
      displayOrder: 1,
      fields: [
        field({
          fieldKey: "businessName",
          label: { en: "Business name" },
          fieldType: "TEXT",
          required: true,
          displayOrder: 1,
        }),
        field({
          fieldKey: "registrationNumber",
          label: { en: "Business registration number" },
          description: { en: "On your certificate of incorporation" },
          fieldType: "IDENTIFIER",
          required: true,
          displayOrder: 2,
        }),
        field({
          fieldKey: "email",
          label: { en: "Business email" },
          fieldType: "EMAIL",
          displayOrder: 3,
        }),
        field({
          fieldKey: "rents",
          label: { en: "Does the business rent its premises?" },
          fieldType: "RADIO",
          required: true,
          displayOrder: 4,
          options: [
            { value: "yes", label: { en: "Yes" } },
            { value: "no", label: { en: "No, we own them" } },
          ],
        }),
        field({
          fieldKey: "landlord",
          label: { en: "Landlord name" },
          fieldType: "TEXT",
          required: true,
          displayOrder: 5,
          conditionalRules: [
            {
              action: "SHOW",
              logic: "AND",
              conditions: [{ fieldKey: "rents", operator: "EQUALS", value: "yes" }],
            },
          ],
        }),
      ],
    },
    {
      sectionKey: "employees",
      title: { en: "Employees" },
      displayOrder: 2,
      fields: [
        field({
          fieldKey: "headcount",
          label: { en: "People you plan to employ" },
          fieldType: "INTEGER",
          required: true,
          displayOrder: 1,
          validation: { min: 1 },
        }),
      ],
    },
    {
      sectionKey: "declaration",
      title: { en: "Declaration" },
      displayOrder: 3,
      fields: [
        field({
          fieldKey: "truthful",
          label: { en: "Declaration" },
          fieldType: "DECLARATION",
          required: true,
          displayOrder: 1,
          declaration: {
            declarationVersion: "1",
            declarationText: { en: "The information I have given is true and complete." },
          },
        }),
      ],
    },
  ],
};

export const startExperience = {
  serviceId: "svc-1",
  serviceSlug: "register-employer",
  serviceVersionId: service.serviceVersionId,
  versionLabel: "2026.2",
  formDefinitionId: formSchema.formDefinitionId,
  formVersionId: formSchema.formVersionId,
  eligibilityGuidance: [
    {
      ruleCode: "REGISTERED",
      label: "Is the business registered?",
      description: "With the company registry",
      isRequired: true,
    },
  ],
  conditionalChecklist: [],
  feeDefinitions: serviceDetail.fees,
  dependencySummary: null,
  expectedStagesSummary: serviceDetail.expectedHighLevelStages,
  outputDefinitions: serviceDetail.expectedOutputs,
  redressRoutes: [],
  serviceAvailability: "ACTIVE",
  applicationCapable: true,
  publicDisclaimers: [],
  configurationFingerprint: "fp-1",
  formSchema,
  requiredFields: [
    "businessName",
    "registrationNumber",
    "rents",
    "landlord",
    "headcount",
    "truthful",
  ],
  declarations: [
    {
      declarationVersion: "1",
      declarationText: { en: "The information I have given is true and complete." },
    },
  ],
  expectedNextStep: "Complete the form.",
};

export const draftId = "66666666-6666-4666-8666-666666666666";

export const draftRecord = (overrides: Record<string, unknown> = {}) => ({
  id: draftId,
  applicationNumber: null,
  applicantIdentityId: "identity-1",
  organizationId: null,
  representativeAuthorityId: null,
  governmentServiceId: "svc-1",
  governmentServiceVersionId: service.serviceVersionId,
  formDefinitionId: formSchema.formDefinitionId,
  formVersionId: formSchema.formVersionId,
  configurationFingerprint: "fp-1",
  applicantCategory: "INDIVIDUAL",
  status: "DRAFT",
  draftAnswers: {},
  idempotencyKey: null,
  createdAt: "2026-10-01T09:00:00.000Z",
  updatedAt: "2026-10-01T09:41:00.000Z",
  ...overrides,
});

export const attribution = {
  institutionId: "inst-1",
  institutionCode: "LAB",
  institutionName: "Labour Department",
  departmentName: "Employment",
  serviceSlug: "register-employer",
  serviceName: "Register as an employer",
};

export const applicationDetail = (overrides: Record<string, unknown> = {}) => ({
  applicationId: draftId,
  applicationNumber: "EMP-2026-000215",
  status: "SUBMITTED",
  applicantCategory: "INDIVIDUAL",
  createdAt: "2026-10-01T09:00:00.000Z",
  updatedAt: "2026-10-01T09:53:00.000Z",
  attribution,
  caseId: "case-1",
  caseNumber: "CS-2026-008841",
  publicStatusLabel: "Received",
  deepLink: { route: "citizen.application.detail", params: { applicationId: draftId } },
  formDefinitionId: formSchema.formDefinitionId,
  formVersionId: formSchema.formVersionId,
  governmentServiceVersionId: service.serviceVersionId,
  disclaimer: { label: "This page shows the status of your application." },
  ...overrides,
});
