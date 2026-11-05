/**
 * GENERATED FILE. Do not edit.
 * Source: heartstone-backend openapi/openapi.json @ fc353eccf98660197a869b2c5e06fa66485979db
 * Paths are relative to /api/v1.
 * Regenerate: pnpm --filter @heartstone/api-client generate
 */
export interface paths {
    "/absez/capability-closure/article9/service-path-matrix": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AbsezS18fController_getArticle9Matrix"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/absez/capability-closure/article9/service-path-matrix/sync": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AbsezS18fController_syncArticle9States"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/absez/capability-closure/customs/cases": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AbsezS18fController_configureCustomsCase"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/absez/capability-closure/customs/cases/{caseId}/coordinate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AbsezS18fController_coordinateCustoms"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/absez/capability-closure/customs/cases/{caseId}/external-determinations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AbsezS18fController_recordExternalCustoms"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/absez/capability-closure/immigration/investor-applications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AbsezS18fController_openInvestorResidencyApplication"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/absez/capability-closure/immigration/programs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AbsezS18fController_configureImmigrationProgram"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/absez/capability-closure/investor-relations/inquiries": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AbsezS18fController_createInvestorInquiry"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/absez/capability-closure/land/leases": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AbsezS18fController_registerZoneLease"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/absez/organizations/{organizationId}/institutions/{institutionId}/sez-licences/intake": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AbsezController_createLicenceIntake"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/absez/organizations/{organizationId}/institutions/{institutionId}/zone-enterprise": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AbsezController_getZoneEnterprise"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/absez/sez-licences/{licenceId}/issue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AbsezController_issueLicence"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/absez/sez-licences/{licenceId}/payments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AbsezController_recordPayment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/absez/sez-licences/{licenceId}/revoke": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AbsezController_revokeLicence"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/absez/sez-licences/{licenceId}/suspend": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AbsezController_suspendLicence"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/applications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ApplicationsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/applications/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ApplicationsController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/applications/{id}/corrections": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ApplicationsController_submitCorrection"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/applications/{id}/draft": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["ApplicationsController_updateDraft"];
        trace?: never;
    };
    "/applications/{id}/submit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ApplicationsController_submit"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/appointments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List appointments */
        get: operations["AppointmentsController_findAll"];
        put?: never;
        /** Create an appointment */
        post: operations["AppointmentsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/appointments/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get an appointment by id */
        get: operations["AppointmentsController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update an appointment */
        patch: operations["AppointmentsController_update"];
        trace?: never;
    };
    "/audit-governance/institutions/{institutionId}/configuration/effective": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AuditGovernanceController_resolveEffectiveConfiguration"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/audit-governance/institutions/{institutionId}/ledger/verify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AuditGovernanceController_verifyInstitution"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/audit-governance/ledger/streams/{ledgerStreamKey}/verify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AuditGovernanceController_verifyStream"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/authority-dependencies/external-determinations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Register a verified external dependency determination */
        post: operations["AuthorityDependenciesController_registerExternalDetermination"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/authority-dependencies/institutional-acts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Record a separate institutional authority act */
        post: operations["AuthorityDependenciesController_recordInstitutionalAct"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/authority/evaluate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Evaluate whether a specific institutional action may proceed
         * @description Server computes authority. Client-supplied authorization claims are never accepted.
         */
        post: operations["AuthorityEvaluationController_evaluate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/authority/evaluate/records/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieve an immutable authority evaluation record */
        get: operations["AuthorityEvaluationController_getRecord"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/authority/functions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List function authority records */
        get: operations["FunctionAuthorityRecordsController_findAll"];
        put?: never;
        /** Create a function authority record (draft) */
        post: operations["FunctionAuthorityRecordsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/authority/functions/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a function authority record by id */
        get: operations["FunctionAuthorityRecordsController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/authority/functions/{id}/activate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Activate a function authority record (controlled, audited) */
        patch: operations["FunctionAuthorityRecordsController_activate"];
        trace?: never;
    };
    "/authority/functions/{id}/suspend": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Suspend an active function authority record */
        patch: operations["FunctionAuthorityRecordsController_suspend"];
        trace?: never;
    };
    "/authority/governing-sources": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List governing sources */
        get: operations["GoverningSourcesController_findAll"];
        put?: never;
        /** Create a governing source (draft) */
        post: operations["GoverningSourcesController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/authority/governing-sources/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a governing source by id */
        get: operations["GoverningSourcesController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/authority/governing-sources/{id}/authenticate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Record that an authenticated copy of this governing source was verified
         * @description The authenticating officer is the signed-in identity. The request cannot name someone else.
         */
        patch: operations["GoverningSourcesController_authenticate"];
        trace?: never;
    };
    "/authority/governing-sources/{id}/revoke": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Revoke a governing source */
        patch: operations["GoverningSourcesController_revoke"];
        trace?: never;
    };
    "/cannabis-administration/compliance-references": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CannabisAdministrationController_linkComplianceMatter"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cannabis-administration/configurations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CannabisAdministrationController_upsertConfiguration"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cannabis-administration/configurations/{jurisdictionId}/licence-categories/{code}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["CannabisAdministrationController_resolveLicenceCategory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cannabis-administration/external-dependencies/record": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CannabisAdministrationController_recordExternalDependency"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cannabis-administration/inspection-references": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CannabisAdministrationController_linkInspectionRecord"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cannabis-administration/licence-records/{id}/suspend": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CannabisAdministrationController_suspendLicence"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cannabis-administration/licence-records/issue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CannabisAdministrationController_issueLicence"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cannabis-administration/regulated-entities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CannabisAdministrationController_registerRegulatedEntity"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cannabis-administration/regulated-entities/{regulatedEntityId}/application-references": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CannabisAdministrationController_linkApplicationReference"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cannabis-administration/regulated-entities/{regulatedEntityId}/facility-sites": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CannabisAdministrationController_linkFacilitySite"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/carbon-management/authorizations/issue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CarbonManagementController_issueAuthorization"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/carbon-management/compliance-references": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CarbonManagementController_linkComplianceMatter"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/carbon-management/configurations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CarbonManagementController_upsertConfiguration"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/carbon-management/configurations/{jurisdictionId}/project-categories/{code}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["CarbonManagementController_resolveProjectCategory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/carbon-management/programmes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CarbonManagementController_registerProgramme"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/carbon-management/projects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CarbonManagementController_registerProject"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/carbon-management/projects/{carbonProjectId}/application-references": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CarbonManagementController_linkApplicationReference"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/carbon-management/projects/{carbonProjectId}/external-verifications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CarbonManagementController_recordExternalVerification"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/carbon-management/projects/{carbonProjectId}/registry-references": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CarbonManagementController_recordRegistryReference"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cases/{caseId}/communications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Official case communications */
        get: operations["CaseTimelineController_getOfficialCommunications"];
        put?: never;
        /** Record a case communication */
        post: operations["CaseTimelineController_createCommunication"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cases/{caseId}/communications/applicant": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Applicant-visible communications */
        get: operations["CaseTimelineController_getApplicantCommunications"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cases/{caseId}/dashboard": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Official case dashboard read model */
        get: operations["CaseTimelineController_getDashboard"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cases/{caseId}/milestones": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Case milestones */
        get: operations["CaseTimelineController_getMilestones"];
        put?: never;
        /** Create a case milestone */
        post: operations["CaseTimelineController_createMilestone"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cases/{caseId}/public-status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Applicant public status projection (read-only derived) */
        get: operations["CaseTimelineController_getPublicStatus"];
        put?: never;
        /** Client override rejected */
        post: operations["CaseTimelineController_rejectPublicStatusOverride"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cases/{caseId}/timeline": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Official case event timeline */
        get: operations["CaseTimelineController_getOfficialTimeline"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cases/{caseId}/timeline/applicant": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Applicant-visible case timeline */
        get: operations["CaseTimelineController_getApplicantTimeline"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cases/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["CasesController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cases/{id}/applicant-status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["CasesController_getApplicantStatus"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cases/{id}/case-manager/assign": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CasesController_assignCaseManager"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cases/{id}/case-manager/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["CasesController_getCaseManagerHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cases/{id}/completeness-reviews": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CasesController_runCompletenessReview"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cases/{id}/referrals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CasesController_createReferral"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cases/{id}/workflow/steps/{stepKey}/complete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CasesController_completeStep"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cases/case-manager/workload": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["CasesController_getCaseManagerWorkload"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cases/referrals/{referralId}/responses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CasesController_recordReferralResponse"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/civil-registry/certificates/{id}/issue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Issue an authoritative civil certificate extract (consequential) */
        post: operations["CivilRegistryController_issueCertificate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/civil-registry/certificates/request": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Request a civil certificate against an entitled official record */
        post: operations["CivilRegistryController_requestCertificate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/civil-registry/correction-requests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Submit a civil record correction request (not an approval or amendment) */
        post: operations["CivilRegistryController_submitCorrection"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/civil-registry/entries/{entryId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Read civil registry entry subject to access classification policy */
        get: operations["CivilRegistryController_getEntry"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/civil-registry/records/{id}/corrections/approve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Approve a civil record correction (preserves prior version) */
        post: operations["CivilRegistryController_approveCorrection"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/civil-registry/records/{id}/register": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Register an official vital event (consequential) */
        post: operations["CivilRegistryController_registerOfficial"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/civil-registry/submissions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Record a vital event submission (non-official until registration decision) */
        post: operations["CivilRegistryController_createSubmission"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/civil-registry/vital-events/intake": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Initiate vital event intake (non-official; opens or supports application/case workflow) */
        post: operations["CivilRegistryController_createIntake"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/clinical-research/consent-signatures": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ClinicalResearchController_recordConsent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/clinical-research/enrollments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ClinicalResearchController_enroll"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/clinical-research/ethics-approvals/versions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ClinicalResearchController_recordEthicsVersion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/clinical-research/interests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ClinicalResearchController_expressInterest"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/clinical-research/matching/preliminary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ClinicalResearchController_preliminaryMatch"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/clinical-research/protocol-versions/activate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ClinicalResearchController_activateProtocol"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/clinical-research/protocol-versions/amendments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ClinicalResearchController_amendProtocol"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/clinical-research/withdrawals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ClinicalResearchController_withdraw"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/compliance/matters": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Open compliance monitoring for an issued instrument */
        post: operations["ComplianceController_createMatter"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/compliance/matters/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Fetch a compliance matter with obligations */
        get: operations["ComplianceController_getMatter"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/compliance/matters/{id}/obligations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List continuing obligations for a compliance matter */
        get: operations["ComplianceController_listObligations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/compliance/obligations/{id}/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieve obligation status history */
        get: operations["ComplianceController_getHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/compliance/obligations/{id}/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Record administrative obligation status with audit history */
        post: operations["ComplianceController_recordStatus"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/compliance/obligations/extend-deadline": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Extend an obligation deadline with explicit authority */
        post: operations["ComplianceController_extendDeadline"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/compliance/obligations/from-condition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a controlled continuing obligation from an approved condition */
        post: operations["ComplianceController_createFromCondition"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/compliance/reviews/finalize": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Finalize a compliance review with authorized reviewer */
        post: operations["ComplianceController_finalizeReview"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/compliance/reviews/open": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Open a compliance review for a submission version */
        post: operations["ComplianceController_openReview"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/compliance/status/dashboards/executive/{institutionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ComplianceStatusController_getExecutiveDashboard"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/compliance/status/dashboards/holder/{identityId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ComplianceStatusController_getHolderDashboard"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/compliance/status/dashboards/official/{officeholderId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ComplianceStatusController_getOfficialDashboard"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/compliance/status/monitoring/rules/evaluate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ComplianceStatusController_evaluateRule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/compliance/status/projections/{projectionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ComplianceStatusController_getProjection"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/compliance/status/projections/derive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ComplianceStatusController_deriveProjection"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/compliance/status/revalidation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ComplianceStatusController_recordRevalidation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/compliance/submissions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Receive a compliance submission (receipt only, not verification) */
        post: operations["ComplianceController_receiveSubmission"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/compliance/submissions/corrections": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** File a corrected submission version preserving the original */
        post: operations["ComplianceController_requestCorrection"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/corporate-registry/organizations/{organizationId}/amendments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CorporateRegistryController_submitAmendment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/corporate-registry/organizations/{organizationId}/beneficial-ownership": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CorporateRegistryController_submitBeneficialOwnership"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/corporate-registry/organizations/{organizationId}/officers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CorporateRegistryController_submitOfficer"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/corporate-registry/organizations/{organizationId}/registered-office": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CorporateRegistryController_submitRegisteredOffice"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/corporate-registry/organizations/{organizationId}/registration-intake": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CorporateRegistryController_submitRegistrationIntake"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/corporate-registry/organizations/{organizationId}/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["CorporateRegistryController_getStatus"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/customs-trade/declarations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CustomsTradeController_submitDeclaration"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/customs-trade/declarations/{id}/amendments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CustomsTradeController_amendDeclaration"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/customs-trade/shipments/{shipmentReferenceId}/release": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CustomsTradeController_authorizeRelease"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/decisions-issuance/issue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IssuanceController_issue"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/decisions-issuance/readiness/assess": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IssuanceController_assessReadiness"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/decisions/execute": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Record an authorized government decision (requires explicit decision-maker intent) */
        post: operations["DecisionsController_executeDecision"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/decisions/preparation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a non-final decision preparation record (drafting only, not an official decision) */
        post: operations["DecisionsController_createPreparation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/decisions/readiness/assess": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Assess whether a case is ready for authorized government decision */
        post: operations["DecisionsController_assessReadiness"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/delegations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List delegations */
        get: operations["DelegationsController_findAll"];
        put?: never;
        /** Create a delegation */
        post: operations["DelegationsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/delegations/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a delegation by id */
        get: operations["DelegationsController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update a delegation */
        patch: operations["DelegationsController_update"];
        trace?: never;
    };
    "/departments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List departments */
        get: operations["DepartmentsController_findAll"];
        put?: never;
        /** Create a department */
        post: operations["DepartmentsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/departments/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a department by id */
        get: operations["DepartmentsController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update a department */
        patch: operations["DepartmentsController_update"];
        trace?: never;
    };
    "/digital-assets/authorizations/issue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["DigitalAssetsController_issueAuthorization"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/digital-assets/compliance-references": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["DigitalAssetsController_linkComplianceMatter"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/digital-assets/configurations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["DigitalAssetsController_upsertConfiguration"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/digital-assets/configurations/{jurisdictionId}/activity-categories/{code}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DigitalAssetsController_resolveActivityCategory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/digital-assets/external-dependencies/record": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["DigitalAssetsController_recordExternalDependency"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/digital-assets/regulated-entities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["DigitalAssetsController_registerRegulatedEntity"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/digital-assets/regulated-entities/{regulatedEntityId}/application-references": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["DigitalAssetsController_linkApplicationReference"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/digital-assets/regulated-entities/{regulatedEntityId}/technical-reviews": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["DigitalAssetsController_openTechnicalReview"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/documents": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["DocumentsController_createRecord"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/documents/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DocumentsController_findRecord"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/documents/{id}/versions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DocumentsController_listVersions"];
        put?: never;
        post: operations["DocumentsController_uploadVersion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/documents/associations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DocumentsController_listAssociations"];
        put?: never;
        post: operations["DocumentsController_associate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/documents/integrity-disclaimer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DocumentsController_getIntegrityDisclaimer"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/documents/versions/{path}/download": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DocumentsController_rejectStorageKeyDownload"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/documents/versions/{versionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DocumentsController_getVersion"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/documents/versions/{versionId}/classification": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["DocumentsController_updateClassification"];
        trace?: never;
    };
    "/documents/versions/{versionId}/download": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DocumentsController_downloadVersion"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/education/admission-application-profiles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["EducationController_linkAdmissionApplicationProfile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/education/institutions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["EducationController_registerInstitution"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/education/institutions/registrations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["EducationController_submitInstitutionRegistration"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/education/scholarship-application-profiles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["EducationController_linkScholarshipApplicationProfile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/education/students/profiles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["EducationController_createStudentProfile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/education/students/profiles/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["EducationController_getStudentProfile"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence-records/classifications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["EvidenceRecordsController_createClassification"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence-records/disposition/evaluate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["EvidenceRecordsController_evaluateDisposition"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence-records/disposition/requests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["EvidenceRecordsController_createDispositionRequest"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence-records/legal-holds": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["EvidenceRecordsController_createLegalHold"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence-records/legal-holds/{id}/release": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["EvidenceRecordsController_releaseLegalHold"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence-records/retention-schedules": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["EvidenceRecordsController_createRetentionSchedule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence-records/retention-schedules/{code}/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["EvidenceRecordsController_getScheduleHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence/ai/records/{id}/purpose-acceptances": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["EvidenceAiController_proposePurposeAcceptance"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence/ai/records/{id}/verification-proposals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["EvidenceAiController_proposeVerification"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence/packets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a new evidence packet with initial draft version */
        post: operations["EvidencePacketsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence/packets/{packetId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Fetch evidence packet with version history */
        get: operations["EvidencePacketsController_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence/packets/{packetId}/assemble": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Assemble draft packet after validation */
        post: operations["EvidencePacketsController_assemble"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence/packets/{packetId}/exclusions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Record controlled exclusion with reason and authorization */
        post: operations["EvidencePacketsController_excludeItem"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence/packets/{packetId}/freeze": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Freeze assembled packet version with deterministic manifest hash
         * @description Freezing creates an immutable snapshot. It does not approve or refuse. readyForDecisionReview may be set for future decision engine reference.
         */
        post: operations["EvidencePacketsController_freeze"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence/packets/{packetId}/items": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Add item to draft packet version */
        post: operations["EvidencePacketsController_addItem"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence/packets/{packetId}/items/{itemId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Remove item from draft packet version */
        delete: operations["EvidencePacketsController_removeItem"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence/packets/{packetId}/validate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Validate packet for adverse/disputed evidence visibility */
        post: operations["EvidencePacketsController_validate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence/packets/{packetId}/versions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create new draft version from frozen packet, superseding prior version */
        post: operations["EvidencePacketsController_createVersion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence/packets/versions/{versionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieve a historical evidence packet version */
        get: operations["EvidencePacketsController_getVersion"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence/packets/versions/{versionIdA}/compare/{versionIdB}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Compare two packet versions */
        get: operations["EvidencePacketsController_compare"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence/quality-assessments/{assessmentId}/finalize": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["EvidenceController_finalizeQuality"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence/records": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["EvidenceController_receiveEvidence"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence/records/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["EvidenceController_getEvidence"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence/records/{id}/purpose-acceptances": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["EvidenceController_recordPurposeAcceptance"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence/records/{id}/quality-assessments/ai-proposals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["EvidenceController_proposeAiQuality"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence/records/{id}/quality-assessments/official": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["EvidenceController_recordOfficialQuality"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence/records/{id}/requirement-links": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["EvidenceController_linkRequirement"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evidence/records/{id}/verifications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["EvidenceController_recordVerification"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Normalized action center
         * @description Shared action contracts for citizen, business, and official personas. Presentation only; execution re-evaluates authorization.
         */
        get: operations["ExperienceCommonController_getActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List organizations accessible to the authenticated actor via membership or representative authority */
        get: operations["BusinessExperienceController_listOrganizations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get organization detail for an accessible business organization */
        get: operations["BusinessExperienceController_getOrganization"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List actionable business tasks derived from existing platform state for an organization */
        get: operations["BusinessExperienceController_getActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/applications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List applications accessible for the organization */
        get: operations["BusinessExperienceController_listApplications"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/appointments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List service appointments for an organization within representative scope */
        get: operations["BusinessAppointmentsController_listOrganizationAppointments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/compliance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List compliance matters and outstanding obligations for the organization */
        get: operations["BusinessExperienceController_listCompliance"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/corporate-actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List outstanding corporate registry actions for an organization */
        get: operations["BusinessCorporateRegistryController_listCorporateActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/corporate-certificates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List corporate certificates for an organization */
        get: operations["BusinessCorporateRegistryController_listCertificates"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/corporate-profile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get corporate registry profile for an accessible business organization */
        get: operations["BusinessCorporateRegistryController_getCorporateProfile"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/development-projects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessDevelopmentController_listProjects"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/development-projects/{projectId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessDevelopmentController_getProject"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/development-projects/{projectId}/actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessDevelopmentController_listActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/development-projects/{projectId}/inspections": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessDevelopmentController_listInspections"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/development-projects/{projectId}/permits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessDevelopmentController_listPermits"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/education": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Business education provider home for authorized organization */
        get: operations["BusinessEducationController_getHome"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/education/accreditation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessEducationController_listAccreditation"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/education/actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessEducationController_listActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/education/inspections": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessEducationController_listInspections"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/education/licensing": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessEducationController_listLicensing"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/filings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List corporate filings for an organization */
        get: operations["BusinessCorporateRegistryController_listFilings"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/fleet": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessTransportationController_listFleet"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/home": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get frontend-ready business home dashboard summary for an organization */
        get: operations["BusinessExperienceController_getHome"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/licenses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List active licenses and permits held by the organization */
        get: operations["BusinessExperienceController_listLicenses"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List applicant-visible government messages for the organization */
        get: operations["BusinessExperienceController_listMessages"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/officers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List disclosed corporate officers for an organization */
        get: operations["BusinessCorporateRegistryController_listOfficers"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/payments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List outstanding fees and invoices for the organization */
        get: operations["BusinessExperienceController_listPayments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/projects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List strategic investment projects linked to organization cases */
        get: operations["BusinessExperienceController_listProjects"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/property": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Business property registry home for authorized organization interests */
        get: operations["BusinessPropertyController_getHome"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/property/actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessPropertyController_listActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/property/interests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessPropertyController_listInterests"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/property/transactions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessPropertyController_listTransactions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/public-safety": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessPublicSafetyController_getHome"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/public-safety/records": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessPublicSafetyController_listRecords"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/revenue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessRevenueController_getHome"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/revenue/actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessRevenueController_listActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/revenue/assessments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessRevenueController_listAssessments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/revenue/compliance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessRevenueController_listCompliance"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/revenue/payments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessRevenueController_listPayments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/revenue/returns": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessRevenueController_listReturns"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/trade": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessTradeController_getHome"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/trade/actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessTradeController_listActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/trade/assessments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessTradeController_listAssessments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/trade/declarations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessTradeController_listDeclarations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/trade/holds": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessTradeController_listHolds"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/trade/permits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessTradeController_listPermits"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/trade/shipments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessTradeController_listShipments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/transport-permits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessTransportationController_listPermits"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/transportation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessTransportationController_getHome"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/transportation/actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessTransportationController_listActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/workforce": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessWorkforceController_getHome"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/workforce/actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessWorkforceController_listActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/workforce/compliance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessWorkforceController_listCompliance"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/workforce/declarations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessWorkforceController_listDeclarations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/workforce/employees": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessWorkforceController_listEmployees"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/business/organizations/{organizationId}/workforce/work-permits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BusinessWorkforceController_listWorkPermits"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List actionable citizen tasks derived from existing platform state */
        get: operations["CitizenExperienceController_getActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/applications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List applications accessible to the authenticated citizen */
        get: operations["CitizenExperienceController_listApplications"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/applications/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a single application detail for the authenticated citizen */
        get: operations["CitizenExperienceController_getApplication"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/appointments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List service appointments for the authenticated citizen */
        get: operations["CitizenExperienceController_listAppointments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/appointments/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a single service appointment for the authenticated citizen */
        get: operations["CitizenExperienceController_getAppointment"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/appointments/{id}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Cancel a service appointment */
        post: operations["CitizenExperienceController_cancelAppointment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/appointments/{id}/confirm": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Confirm a scheduled service appointment */
        post: operations["CitizenExperienceController_confirmAppointment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/appointments/{id}/reschedule-request": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Request rescheduling of a service appointment */
        post: operations["CitizenExperienceController_requestReschedule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/benefits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get the citizen benefits home summary for the authenticated applicant */
        get: operations["CitizenBenefitsController_getHome"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/benefits/actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List self-service benefit actions available to the applicant */
        get: operations["CitizenBenefitsController_listActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/benefits/applications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List benefit applications linked to the authenticated applicant */
        get: operations["CitizenBenefitsController_listApplications"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/benefits/awards": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List benefit awards recorded for the authenticated applicant */
        get: operations["CitizenBenefitsController_listAwards"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/benefits/payments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List benefit disbursement references for the authenticated applicant */
        get: operations["CitizenBenefitsController_listPayments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/benefits/programs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List benefit programs available for preliminary (non-authoritative) matching */
        get: operations["CitizenBenefitsController_listPrograms"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/boundary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Citizen experience boundary disclaimer */
        get: operations["CitizenExperienceController_getBoundaryDisclaimer"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/cases/{id}/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get applicant-safe case status for the authenticated citizen */
        get: operations["CitizenExperienceController_getCaseStatus"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/certificates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List civil certificates for entitled records */
        get: operations["CitizenExperienceController_listCivilCertificates"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/civil-registry/actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Discover governed civil registry GovernmentService actions
         * @description Surfaces template service slugs for certificate requests and registrations — no direct record download bypass.
         */
        get: operations["CitizenExperienceController_listCivilRegistryActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/civil-status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Citizen civil status projection (entitlement-scoped) */
        get: operations["CitizenExperienceController_getCivilStatus"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/credentials": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List citizen-held government credentials/instruments (projection) */
        get: operations["CitizenExperienceController_listCredentials"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/credentials/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get citizen credential/instrument detail (projection) */
        get: operations["CitizenExperienceController_getCredential"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/development-actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Citizen development action center across owned projects */
        get: operations["CitizenDevelopmentActionsController_listActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/development-projects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List citizen development projects (individual applicant scope) */
        get: operations["CitizenDevelopmentController_listProjects"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/development-projects/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Unified development portal project view for citizen applicant */
        get: operations["CitizenDevelopmentController_getProject"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/documents": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List citizen-accessible documents (projection) */
        get: operations["CitizenExperienceController_listDocuments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/documents/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get citizen-accessible document detail (projection) */
        get: operations["CitizenExperienceController_getDocument"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/driver-licenses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List driver licenses held by the authenticated citizen */
        get: operations["CitizenTransportationController_listDriverLicenses"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/education": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Citizen/student education home (includes authorized guardian scope) */
        get: operations["CitizenEducationController_getHome"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/education/actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List self-service education actions available to the citizen */
        get: operations["CitizenEducationController_listActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/education/applications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List enrollment and scholarship applications in the citizen's scope */
        get: operations["CitizenEducationController_listApplications"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/education/credentials": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List academic credentials for the student profiles the citizen may access */
        get: operations["CitizenEducationController_listCredentials"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/education/enrollments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List enrollments for the student profiles the citizen may access */
        get: operations["CitizenEducationController_listEnrollments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/education/support": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List scholarship and grant support applications in the citizen's scope */
        get: operations["CitizenEducationController_listSupport"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/employment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get the citizen employment home summary for the authenticated worker */
        get: operations["CitizenEmploymentController_getHome"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/employment/actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List self-service employment actions available to the worker */
        get: operations["CitizenEmploymentController_listActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/employment/applications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List work permit applications for the authenticated worker */
        get: operations["CitizenEmploymentController_listApplications"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/employment/relationships": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List employment relationships recorded for the authenticated worker */
        get: operations["CitizenEmploymentController_listRelationships"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/employment/work-permits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List work permit records for the authenticated worker */
        get: operations["CitizenEmploymentController_listWorkPermits"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/healthcare": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Citizen healthcare home — authorized treatment journey summary */
        get: operations["CitizenHealthcareController_getHome"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/healthcare/actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Required patient actions and consent state */
        get: operations["CitizenHealthcareController_listActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/healthcare/appointments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Upcoming healthcare appointments linked to treatment enrollments */
        get: operations["CitizenHealthcareController_listAppointments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/healthcare/profile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Citizen healthcare profile projection */
        get: operations["CitizenHealthcareController_getProfile"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/healthcare/programs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Discover published treatment programs (not medical recommendations) */
        get: operations["CitizenHealthcareController_listPrograms"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/healthcare/providers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Providers linked to enrolled or active treatment programs */
        get: operations["CitizenHealthcareController_listProviders"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/healthcare/referrals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Treatment referrals for the authenticated patient */
        get: operations["CitizenHealthcareController_listReferrals"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/healthcare/treatments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Screenings and enrolled treatments for the authenticated patient */
        get: operations["CitizenHealthcareController_listTreatments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/home": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get frontend-ready citizen home dashboard summary counts */
        get: operations["CitizenExperienceController_getHome"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/immigration": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Immigration vertical overview for the authenticated citizen */
        get: operations["CitizenImmigrationController_getOverview"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/immigration/actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List safe immigration actions available to the applicant */
        get: operations["CitizenImmigrationController_listActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/immigration/applications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List immigration applications within citizen or representative scope */
        get: operations["CitizenImmigrationController_listApplications"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/immigration/credentials": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List issued immigration credentials linked to governed decisions */
        get: operations["CitizenImmigrationController_listCredentials"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/immigration/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Applicant-safe immigration status and activity summary */
        get: operations["CitizenImmigrationController_getStatus"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get aggregated citizen profile summary derived from authenticated session */
        get: operations["CitizenExperienceController_getMe"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List portal-safe government communications (projection) */
        get: operations["CitizenExperienceController_listMessages"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/messages/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get portal-safe government communication detail (projection) */
        get: operations["CitizenExperienceController_getMessage"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/messages/{id}/acknowledge": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Acknowledge a deliverable portal communication where rules permit
         * @description Records CommunicationReceipt and security audit event.
         */
        post: operations["CitizenExperienceController_acknowledgeMessage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/payments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List citizen payment records (projection) */
        get: operations["CitizenExperienceController_listPayments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/payments/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get citizen payment record detail (projection) */
        get: operations["CitizenExperienceController_getPayment"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/payments/{invoiceId}/intents": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create payment intent for a citizen-accessible invoice
         * @description Orchestrates PaymentIntentService. Payment settlement does not alter case or decision status.
         */
        post: operations["CitizenExperienceController_createPaymentIntent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/property": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Citizen property registry home for authorized interests */
        get: operations["CitizenPropertyController_getHome"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/property/actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List suggested property registry actions for the citizen */
        get: operations["CitizenPropertyController_listActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/property/applications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List property registry applications in the citizen's scope */
        get: operations["CitizenPropertyController_listApplications"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/property/documents": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List property registry certificates for parcels in the citizen's scope */
        get: operations["CitizenPropertyController_listDocuments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/property/interests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List active property interests held by the authenticated citizen */
        get: operations["CitizenPropertyController_listInterests"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/public-safety": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Citizen public safety home (informational projections) */
        get: operations["CitizenPublicSafetyController_getHome"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/public-safety/actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List open public safety service requests the citizen can follow up on */
        get: operations["CitizenPublicSafetyController_listActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/public-safety/assistance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List recovery assistance applications for the authenticated citizen */
        get: operations["CitizenPublicSafetyController_listAssistance"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/public-safety/emergency-events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List open public emergency events (informational) */
        get: operations["CitizenPublicSafetyController_listEmergencyEvents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/public-safety/reports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List incident reports submitted by the authenticated citizen */
        get: operations["CitizenPublicSafetyController_listReports"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/renewals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Derived renewal queue from authoritative instrument lifecycle data */
        get: operations["CitizenExperienceController_listRenewals"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/revenue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Citizen revenue home derived from authoritative taxpayer state */
        get: operations["CitizenRevenueController_getHome"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/revenue/accounts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List taxpayer accounts held by the authenticated citizen */
        get: operations["CitizenRevenueController_listAccounts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/revenue/actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List revenue actions derived from authoritative taxpayer state */
        get: operations["CitizenRevenueController_listActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/revenue/assessments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List tax assessments for the citizen */
        get: operations["CitizenRevenueController_listAssessments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/revenue/obligations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List tax obligations and outstanding balance for the citizen */
        get: operations["CitizenRevenueController_listObligations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/revenue/payments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List tax payment allocations for the citizen */
        get: operations["CitizenRevenueController_listPayments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/revenue/returns": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List tax returns for the citizen (paginated) */
        get: operations["CitizenRevenueController_listReturns"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/services": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Discover active government services without knowing the responsible department */
        get: operations["CitizenServicesController_listServices"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/services/{slug}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get citizen-facing detail for a discoverable government service */
        get: operations["CitizenServicesController_getServiceBySlug"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/services/{slug}/applications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a draft application for a service identified by slug */
        post: operations["CitizenServicesController_createApplication"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/services/{slug}/eligibility": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Evaluate nonbinding preliminary eligibility guidance */
        post: operations["CitizenServicesController_evaluateEligibility"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/services/{slug}/start": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a version-pinned start package for guided service intake */
        get: operations["CitizenServicesController_getStartExperience"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/services/match": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Match citizen needs to published government services */
        post: operations["CitizenServicesController_matchServices"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/transportation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Citizen transportation home */
        get: operations["CitizenTransportationController_getTransportationHome"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/transportation/actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List self-service transportation actions available to the citizen */
        get: operations["CitizenTransportationController_listActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/vehicle-applications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List transportation service cases opened by the citizen */
        get: operations["CitizenTransportationController_listVehicleApplications"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/vehicles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List vehicles the citizen is authorized to view */
        get: operations["CitizenTransportationController_listVehicles"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/vital-records": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List entitled vital records (projection) */
        get: operations["CitizenExperienceController_listVitalRecords"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/citizen/vital-records/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get entitled vital record detail (projection) */
        get: operations["CitizenExperienceController_getVitalRecord"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/deep-links/resolve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Resolve and authorize a deep link
         * @description Confirms whether the authenticated actor may navigate to a deep link target. Does not bypass backend authorization.
         */
        post: operations["ExperienceCommonController_resolveDeepLink"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/department/{departmentId}/alerts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Department operational alerts
         * @description Verified operational warnings only. Alerts are not enforcement findings.
         */
        get: operations["DepartmentController_getAlerts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/department/{departmentId}/appeals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Department active appeals overview */
        get: operations["DepartmentController_getAppeals"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/department/{departmentId}/cases": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Department case portfolio */
        get: operations["DepartmentController_getCases"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/department/{departmentId}/compliance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Department compliance matters overview */
        get: operations["DepartmentController_getCompliance"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/department/{departmentId}/dependencies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Department unresolved dependencies */
        get: operations["DepartmentController_getDependencies"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/department/{departmentId}/home": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Department management home dashboard
         * @description Aggregated operational overview for department leadership. Aggregate views do not create case disposition or authority.
         */
        get: operations["DepartmentController_getHome"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/department/{departmentId}/officers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Department officer workload overview
         * @description Management-level workload information without private HR fields.
         */
        get: operations["DepartmentController_getOfficers"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/department/{departmentId}/planning-construction": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Planning and construction department metrics (non-determinative indicators) */
        get: operations["DepartmentPlanningConstructionController_getPlanningConstructionMetrics"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/department/{departmentId}/property-registry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Department property registry operational dashboard */
        get: operations["DepartmentPropertyController_getPropertyRegistryDashboard"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/department/{departmentId}/public-safety": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Public safety department metrics (non-determinative indicators) */
        get: operations["DepartmentPublicSafetyController_getPublicSafetyMetrics"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/department/{departmentId}/services": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Department government services overview */
        get: operations["DepartmentController_getServices"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/department/{departmentId}/sla": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Department SLA status
         * @description Uses authoritative case SLA clocks. Does not calculate unsupported legal conclusions.
         */
        get: operations["DepartmentController_getSla"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/department/{departmentId}/workload": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Department workload breakdown */
        get: operations["DepartmentController_getWorkload"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/department/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Department management identity and accessible departments
         * @description Returns authenticated actor context, institutional appointments, and which departments have configured management access. Does not assert universal authority.
         */
        get: operations["DepartmentController_getMe"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/executive/alerts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Executive intelligence alerts
         * @description AI and monitoring alerts require verification before treating as confirmed violations.
         */
        get: operations["ExecutiveController_getAlerts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/executive/compliance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Compliance oversight executive view */
        get: operations["ExecutiveController_getCompliance"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/executive/departments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Department workload executive view */
        get: operations["ExecutiveController_getDepartments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/executive/digital-government": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Digital government executive view
         * @description Service health, integration, security, and production readiness signals.
         */
        get: operations["ExecutiveController_getDigitalGovernment"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/executive/government-operations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Government operations executive view
         * @description Case, service, and workload metrics derived from operational projections.
         */
        get: operations["ExecutiveController_getGovernmentOperations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/executive/home": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Executive government home briefing
         * @description Strategic cross-government overview for authorized leadership. Informational visibility only; does not confer command authority.
         */
        get: operations["ExecutiveController_getHome"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/executive/investment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Economy and investment executive view
         * @description Strategic project and capital projections. Reported milestones are separately identified from verified milestones.
         */
        get: operations["ExecutiveController_getInvestment"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/executive/projects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Strategic projects executive view */
        get: operations["ExecutiveController_getProjects"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/executive/public-safety": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Executive public safety briefing aggregates (read-only, non-declaratory) */
        get: operations["ExecutivePublicSafetyController_getBriefing"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/executive/redress": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Appeals and redress backlog executive view */
        get: operations["ExecutiveController_getRedress"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/executive/risk": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Operational and institutional risk executive view
         * @description Risk scores are advisory projections and are not sanctions or enforcement decisions.
         */
        get: operations["ExecutiveController_getRisk"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/executive/services": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Government services executive view */
        get: operations["ExecutiveController_getServices"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/inbox": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Normalized inbox aggregation
         * @description Aggregates secure messages, notices, and updates without duplicating CommunicationMessage records.
         */
        get: operations["ExperienceCommonController_getInbox"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/metadata": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Experience response metadata and localization contract */
        get: operations["ExperienceCommonController_getMetadata"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/navigation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Persona-based frontend navigation metadata
         * @description Returns navigation items appropriate to the authenticated actor. Does not grant access to protected functionality.
         */
        get: operations["ExperienceCommonController_getNavigation"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/official/alerts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Intelligence alerts scoped to the official */
        get: operations["OfficialController_listAlerts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/official/appointments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List service appointments within official institutional scope */
        get: operations["OfficialController_listAppointments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/official/appointments/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get service appointment detail within official scope */
        get: operations["OfficialController_getAppointment"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/official/benefits/awards/{id}/available-actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Benefit award actions with execution-time authority evaluation */
        get: operations["OfficialBenefitsController_getAvailableActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/official/benefits/workspace": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Official benefits workspace queues (authority-aware, NON_PRODUCTION) */
        get: operations["OfficialBenefitsController_getWorkspace"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/official/cases": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List cases visible within official scope */
        get: operations["OfficialController_listCases"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/official/cases/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Case detail within official scope */
        get: operations["OfficialController_getCase"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/official/cases/{id}/available-actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Available UI actions for a case
         * @description Server-evaluated action availability. Does not execute actions; execution endpoints re-evaluate authority.
         */
        get: operations["OfficialController_getAvailableActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/official/corporate-registry/workspace": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Registry officer workspace queues for corporate lifecycle processing */
        get: operations["OfficialCorporateRegistryController_getWorkspace"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/official/customs-trade/workspace": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Official customs & trade workspace queues (NON_PRODUCTION template) */
        get: operations["OfficialTradeController_getWorkspace"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/official/education/workspace": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Official education workspace queues (NON_PRODUCTION template) */
        get: operations["OfficialEducationController_getWorkspace"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/official/financial-services/workspace": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Official financial services workspace (NON_PRODUCTION) */
        get: operations["OfficialFinancialServicesController_getWorkspace"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/official/immigration/cases/{id}/available-actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Immigration case actions with authority and external dependency evaluation */
        get: operations["OfficialImmigrationController_getAvailableActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/official/immigration/workspace": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Immigration-specific official workspace queues and metrics */
        get: operations["OfficialImmigrationController_getWorkspace"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/official/labour/dashboard": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Labour department dashboard indicators with sensitive aggregation guards */
        get: operations["OfficialLabourController_getDashboard"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/official/labour/work-permits/{id}/available-actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Work permit actions with execution-time authority evaluation */
        get: operations["OfficialLabourController_getAvailableActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/official/labour/workspace": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Official labour workspace queues (authority-aware, NON_PRODUCTION) */
        get: operations["OfficialLabourController_getWorkspace"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/official/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Official identity and institutional context
         * @description Returns authenticated identity summary, officeholder relationships, appointments, delegations, and technical capabilities. Does not assert universal authority.
         */
        get: operations["OfficialController_getMe"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/official/planning-construction/workspace": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Planning & construction official workspace queues (NON_PRODUCTION template) */
        get: operations["OfficialPlanningConstructionController_getWorkspace"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/official/property-registry/workspace": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Property registry official workspace queues and actions */
        get: operations["OfficialPropertyController_getWorkspace"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/official/public-safety/workspace": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Public safety official workspace queues (NON_PRODUCTION template) */
        get: operations["OfficialPublicSafetyController_getWorkspace"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/official/revenue/workspace": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Official revenue workspace queues (role-aware, NON_PRODUCTION template) */
        get: operations["OfficialRevenueController_getWorkspace"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/official/transportation/workspace": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Official transportation workspace queues and authority-gated actions */
        get: operations["OfficialTransportationController_getWorkspace"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/official/work-queue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Normalized official work queue
         * @description Prioritized queue entries derived from institutional scope and assignments.
         */
        get: operations["OfficialController_getWorkQueue"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/official/workspace": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Official workspace dashboard summary
         * @description Frontend-ready summary of assigned cases, department pool, reviews, SLA risks, and scoped alerts.
         */
        get: operations["OfficialController_getWorkspace"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/platform-admin/ai-agents": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Administrative projection of AI service identities */
        get: operations["PlatformAdminController_listAiAgents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/platform-admin/available-actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Discover governed administrative configuration actions
         * @description Returns safe metadata describing available configuration actions. Does not execute consequential actions.
         */
        get: operations["PlatformAdminController_getAvailableActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/platform-admin/communications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Administrative projection of communication templates */
        get: operations["PlatformAdminController_listCommunications"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/platform-admin/departments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Administrative projection of configured departments */
        get: operations["PlatformAdminController_listDepartments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/platform-admin/forms": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Administrative projection of form definitions */
        get: operations["PlatformAdminController_listForms"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/platform-admin/home": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Platform administration home summary
         * @description Summarized configuration and operations information for authorized platform administrators.
         */
        get: operations["PlatformAdminController_getHome"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/platform-admin/institutions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Administrative projection of configured institutions */
        get: operations["PlatformAdminController_listInstitutions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/platform-admin/integrations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Administrative projection of integrations */
        get: operations["PlatformAdminController_listIntegrations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/platform-admin/officeholders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Administrative projection of officeholders */
        get: operations["PlatformAdminController_listOfficeholders"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/platform-admin/offices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Administrative projection of configured offices */
        get: operations["PlatformAdminController_listOffices"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/platform-admin/readiness": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Administrative projection of production readiness conditions */
        get: operations["PlatformAdminController_listReadiness"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/platform-admin/security": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Administrative projection of security signals */
        get: operations["PlatformAdminController_listSecurity"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/platform-admin/services": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Administrative projection of government services */
        get: operations["PlatformAdminController_listServices"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/platform-admin/workflows": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Administrative projection of workflow definitions */
        get: operations["PlatformAdminController_listWorkflows"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/provider/healthcare/workspace": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provider healthcare workspace governed by HealthcareDataAccessPolicy */
        get: operations["ProviderHealthcareController_getWorkspace"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/experience/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Unified scoped experience search
         * @description Search within actor-visible resources only. Cross-government enumeration is not permitted.
         */
        get: operations["ExperienceCommonController_search"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/external-authorities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List external authorities */
        get: operations["ExternalAuthoritiesController_findAll"];
        put?: never;
        /** Create an external authority */
        post: operations["ExternalAuthoritiesController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/external-authorities/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get an external authority by id */
        get: operations["ExternalAuthoritiesController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update an external authority */
        patch: operations["ExternalAuthoritiesController_update"];
        trace?: never;
    };
    "/financial-services/external-regulatory-dependencies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["FinancialServicesController_recordExternalDependency"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/financial-services/jurisdictions/{jurisdictionId}/operational-snapshots": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["FinancialServicesController_computeOperationalSnapshot"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/financial-services/licence-application-profiles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["FinancialServicesController_linkLicenceApplicationProfile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/financial-services/licence-records/{id}/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["FinancialServicesController_recordLicenceStatus"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/financial-services/licence-records/{id}/suspend": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["FinancialServicesController_suspendLicence"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/financial-services/licence-records/issue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["FinancialServicesController_issueLicence"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/financial-services/organizations/{organizationId}/regulatory-profile/query": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["FinancialServicesController_getOrganizationRegulatoryProfile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/financial-services/regulated-entities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["FinancialServicesController_registerRegulatedEntity"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/financial-services/regulated-entities/{id}/beneficial-ownership-linkages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["FinancialServicesController_linkBeneficialOwnership"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/financial-services/regulated-entities/{id}/compliance-matters": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["FinancialServicesController_linkComplianceMatter"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/forms/definitions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List form definitions */
        get: operations["FormsController_listDefinitions"];
        put?: never;
        /** Create a form definition linked to a government service version */
        post: operations["FormsController_createDefinition"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/forms/definitions/{formDefinitionId}/versions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List versions for a form definition */
        get: operations["FormsController_listVersions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/forms/definitions/{formDefinitionId}/versions/next": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a new draft version superseding the latest published version */
        post: operations["FormsController_createNextVersion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/forms/definitions/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a form definition by id */
        get: operations["FormsController_getDefinition"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/forms/validate-response": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Statelessly validate answers against a form version */
        post: operations["FormsController_validateResponse"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/forms/versions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a draft form version */
        post: operations["FormsController_createVersion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/forms/versions/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a form version by id */
        get: operations["FormsController_getVersion"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update a draft form version metadata */
        patch: operations["FormsController_updateDraftVersion"];
        trace?: never;
    };
    "/forms/versions/{id}/publish": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Publish a draft form version */
        patch: operations["FormsController_publishVersion"];
        trace?: never;
    };
    "/forms/versions/{id}/reconstruct": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Reconstruct a historical form version with full structure */
        get: operations["FormsController_reconstructVersion"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/forms/versions/{id}/schema": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Render a frontend-neutral form schema for a version */
        get: operations["FormsController_renderSchema"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/government-bodies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List government-bodies */
        get: operations["GovernmentBodiesController_findAll"];
        put?: never;
        /** Create a governmentbody */
        post: operations["GovernmentBodiesController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/government-bodies/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a governmentbody by id */
        get: operations["GovernmentBodiesController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update a governmentbody */
        patch: operations["GovernmentBodiesController_update"];
        trace?: never;
    };
    "/health": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Verify the application process is alive */
        get: operations["SystemController_getHealth"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/healthcare/consents/grants": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create versioned consent and purpose-bound grant */
        post: operations["HealthcareController_createConsentGrant"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/healthcare/consents/grants/{grantId}/withdraw": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Withdraw consent grant while preserving historical records */
        post: operations["HealthcareController_withdrawGrant"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/healthcare/data-registry/records/{recordId}/read": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Read health data registry reference under access policy */
        post: operations["HealthcareController_readRecord"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/healthcare/integrations/exchanges/failed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Record failed healthcare integration exchange */
        post: operations["HealthcareController_recordFailedExchange"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/healthcare/patients/references": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Register a healthcare patient reference (not proof of authorization) */
        post: operations["HealthcareController_ensurePatient"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/healthcare/research/access-grants/{grantId}/records": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List minimum-necessary dataset records for approved researcher */
        get: operations["HealthcareController_listResearchRecords"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/healthcare/safety/adverse-events/reports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** File adverse event report (does not establish causality) */
        post: operations["HealthcareController_fileAdverseEvent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/identity/auth/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Authenticate with password and create a session */
        post: operations["AuthController_login"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/identity/auth/login/oidc": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Authenticate with a verified OIDC access token */
        post: operations["AuthController_loginWithOidc"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/identity/auth/login/service": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Authenticate a service identity with API key credentials */
        post: operations["AuthController_loginWithService"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/identity/auth/logout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Revoke the current session */
        post: operations["AuthController_logout"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/identity/auth/logout-all": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Revoke all sessions for the current user account */
        post: operations["AuthController_logoutAll"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/identity/authentication-methods": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List authentication methods */
        get: operations["AuthenticationMethodsController_findAll"];
        put?: never;
        /** Configure an authentication method for an identity */
        post: operations["AuthenticationMethodsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/identity/authentication-methods/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get an authentication method by id */
        get: operations["AuthenticationMethodsController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update authentication method metadata */
        patch: operations["AuthenticationMethodsController_update"];
        trace?: never;
    };
    "/identity/authentication-methods/{id}/activate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Enable an authentication method */
        patch: operations["AuthenticationMethodsController_activate"];
        trace?: never;
    };
    "/identity/authentication-methods/{id}/suspend": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Disable an authentication method */
        patch: operations["AuthenticationMethodsController_suspend"];
        trace?: never;
    };
    "/identity/credentials": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List credentials */
        get: operations["CredentialsController_findAll"];
        put?: never;
        /** Create a credential for an identity */
        post: operations["CredentialsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/identity/credentials/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get credential metadata by id */
        get: operations["CredentialsController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update credential metadata */
        patch: operations["CredentialsController_update"];
        trace?: never;
    };
    "/identity/credentials/{id}/activate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Activate a credential */
        patch: operations["CredentialsController_activate"];
        trace?: never;
    };
    "/identity/credentials/{id}/revoke": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Revoke a credential */
        patch: operations["CredentialsController_revoke"];
        trace?: never;
    };
    "/identity/credentials/{id}/suspend": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Suspend a credential (deactivate without revoking) */
        patch: operations["CredentialsController_suspend"];
        trace?: never;
    };
    "/identity/identities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List identities */
        get: operations["IdentitiesController_findAll"];
        put?: never;
        /** Create an identity */
        post: operations["IdentitiesController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/identity/identities/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get an identity by id */
        get: operations["IdentitiesController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update identity metadata */
        patch: operations["IdentitiesController_update"];
        trace?: never;
    };
    "/identity/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Access protected identity profile (technical access only) */
        get: operations["ProtectedController_getProfile"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/identity/me/step-up-protected": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Protected route requiring recent MFA/step-up (technical access only) */
        get: operations["ProtectedController_stepUpProtected"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/identity/memberships": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List organization memberships */
        get: operations["MembershipsController_findAll"];
        put?: never;
        /** Create an organization membership */
        post: operations["MembershipsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/identity/memberships/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get an organization membership by id */
        get: operations["MembershipsController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update membership metadata */
        patch: operations["MembershipsController_update"];
        trace?: never;
    };
    "/identity/memberships/{id}/activate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Activate an organization membership */
        patch: operations["MembershipsController_activate"];
        trace?: never;
    };
    "/identity/memberships/{id}/end": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** End an organization membership */
        patch: operations["MembershipsController_end"];
        trace?: never;
    };
    "/identity/memberships/{id}/revoke": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Revoke an organization membership */
        patch: operations["MembershipsController_revoke"];
        trace?: never;
    };
    "/identity/memberships/{id}/suspend": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Suspend an organization membership */
        patch: operations["MembershipsController_suspend"];
        trace?: never;
    };
    "/identity/officeholder-links": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Link an identity to an officeholder (controlled path, no authority conferred) */
        post: operations["OfficeholderLinksController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/identity/organizations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List organizations */
        get: operations["OrganizationsController_findAll"];
        put?: never;
        /** Create an organization */
        post: operations["OrganizationsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/identity/organizations/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get an organization by id */
        get: operations["OrganizationsController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update organization metadata */
        patch: operations["OrganizationsController_update"];
        trace?: never;
    };
    "/identity/organizations/{id}/activate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Activate an organization */
        patch: operations["OrganizationsController_activate"];
        trace?: never;
    };
    "/identity/organizations/{id}/revoke": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Revoke an organization */
        patch: operations["OrganizationsController_revoke"];
        trace?: never;
    };
    "/identity/organizations/{id}/suspend": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Suspend an organization */
        patch: operations["OrganizationsController_suspend"];
        trace?: never;
    };
    "/identity/persons": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List persons */
        get: operations["PersonsController_findAll"];
        put?: never;
        /** Create a person record */
        post: operations["PersonsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/identity/persons/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a person by id */
        get: operations["PersonsController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update person metadata */
        patch: operations["PersonsController_update"];
        trace?: never;
    };
    "/identity/representative-authorities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List representative authorities */
        get: operations["RepresentativeAuthoritiesController_findAll"];
        put?: never;
        /** Create organizational representative authority (not government authority) */
        post: operations["RepresentativeAuthoritiesController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/identity/representative-authorities/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a representative authority by id */
        get: operations["RepresentativeAuthoritiesController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update representative authority metadata */
        patch: operations["RepresentativeAuthoritiesController_update"];
        trace?: never;
    };
    "/identity/representative-authorities/{id}/activate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Activate a representative authority */
        patch: operations["RepresentativeAuthoritiesController_activate"];
        trace?: never;
    };
    "/identity/representative-authorities/{id}/end": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** End a representative authority */
        patch: operations["RepresentativeAuthoritiesController_end"];
        trace?: never;
    };
    "/identity/representative-authorities/{id}/revoke": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Revoke a representative authority */
        patch: operations["RepresentativeAuthoritiesController_revoke"];
        trace?: never;
    };
    "/identity/representative-authorities/{id}/suspend": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Suspend a representative authority */
        patch: operations["RepresentativeAuthoritiesController_suspend"];
        trace?: never;
    };
    "/identity/technical-access/identities/{identityId}/role-assignments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List technical role assignments for an identity */
        get: operations["TechnicalAccessController_listAssignments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/identity/technical-access/role-assignments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Assign a bootstrap technical role to an identity */
        post: operations["TechnicalAccessController_assignRole"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/identity/user-accounts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List user accounts */
        get: operations["UserAccountsController_findAll"];
        put?: never;
        /** Create a user account */
        post: operations["UserAccountsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/identity/user-accounts/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a user account by id */
        get: operations["UserAccountsController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update user account metadata */
        patch: operations["UserAccountsController_update"];
        trace?: never;
    };
    "/identity/user-accounts/{id}/activate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Activate a user account */
        patch: operations["UserAccountsController_activate"];
        trace?: never;
    };
    "/identity/user-accounts/{id}/revoke": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Revoke a user account */
        patch: operations["UserAccountsController_revoke"];
        trace?: never;
    };
    "/identity/user-accounts/{id}/suspend": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Suspend a user account */
        patch: operations["UserAccountsController_suspend"];
        trace?: never;
    };
    "/immigration/profiles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ImmigrationController_createProfile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/immigration/profiles/subject/{subjectIdentityId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ImmigrationController_getProfileForSubject"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/immigration/visa-application-profiles/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ImmigrationController_getVisaApplicationProfile"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/institution-external-authorities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List institution external authority relationships */
        get: operations["InstitutionExternalAuthoritiesController_findAll"];
        put?: never;
        /** Link an institution to an external authority */
        post: operations["InstitutionExternalAuthoritiesController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/institution-external-authorities/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get an institution external authority relationship by id */
        get: operations["InstitutionExternalAuthoritiesController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update an institution external authority relationship */
        patch: operations["InstitutionExternalAuthoritiesController_update"];
        trace?: never;
    };
    "/institutions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List institutions */
        get: operations["InstitutionsController_findAll"];
        put?: never;
        /** Create an institution */
        post: operations["InstitutionsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/institutions/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get an institution by id */
        get: operations["InstitutionsController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update an institution */
        patch: operations["InstitutionsController_update"];
        trace?: never;
    };
    "/institutions/{id}/structure": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get organizational structure for an institution */
        get: operations["InstitutionsController_getStructure"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instruments/{officialInstrumentId}/download": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Download the exact stored issued instrument version */
        get: operations["InstrumentDownloadController_downloadIssuedVersion"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/analysis/requests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_createAnalysisRequest"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/analysis/runs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_startAnalysisRun"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/analysis/runs/{runId}/complete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_completeAnalysisRun"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/analysis/runs/{runId}/replay": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["IntelligenceController_getAnalysisReplay"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/baselines": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_createBaseline"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/boundary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Performance measurement boundary metadata (public) */
        get: operations["IntelligenceController_getBoundary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/calculation-runs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_recordCalculationRun"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/claims": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_createClaim"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/claims/{id}/review": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_reviewClaim"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/command-console/departmental/query": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Query departmental intelligence console
         * @description Departmental dashboard access is verified against authenticated actor entitlements for the requested scope.
         */
        post: operations["CommandConsoleController_queryDepartmental"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/command-console/executive/query": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Query executive command console
         * @description Executive dashboard visibility is informational only and does not confer command authority.
         */
        post: operations["CommandConsoleController_queryExecutive"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/command-console/projections/derive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Derive dashboard indicator projection from authoritative records
         * @description Actor identity is server-derived; clients cannot supply identity or entitlement fields.
         */
        post: operations["CommandConsoleController_deriveProjection"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/command-console/snapshots/capture": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Capture immutable dashboard snapshot
         * @description Snapshot capturer identity is derived from the authenticated session.
         */
        post: operations["CommandConsoleController_captureSnapshot"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/command-console/snapshots/replay/{replayToken}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Replay immutable dashboard snapshot
         * @description Replay requires authenticated actor with verified dashboard access entitlements.
         */
        get: operations["CommandConsoleController_replaySnapshot"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/consequential-use/live-transitions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_proposeLiveTransition"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/consequential-use/reviews": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_recordReview"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/digital-twins/definitions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_createDefinition"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/digital-twins/definitions/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["IntelligenceController_getDefinition"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/digital-twins/modes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_recordMode"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/digital-twins/relationships": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_createRelationship"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/digital-twins/snapshots": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_createSnapshot"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/digital-twins/sources": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_addSource"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/digital-twins/versions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_createVersion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/digital-twins/versions/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["IntelligenceController_getVersion"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/frameworks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_createFramework"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/frameworks/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["IntelligenceController_getFramework"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/governed-ai/calls": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Execute a governed AI call (recommendatory only) */
        post: operations["GovernedAiController_executeCall"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/governed-ai/calls/{callRecordId}/user-output": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Retrieve user-facing AI output after governance chain is satisfied */
        post: operations["GovernedAiController_getUserOutput"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/governed-ai/defense/check-action": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Assert AI cannot perform a consequential government action */
        post: operations["GovernedAiController_checkForbiddenAction"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/governed-ai/output-edits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Record human edit of AI output (preserves original) */
        post: operations["GovernedAiController_recordEdit"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/governed-ai/readiness": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Governed AI operational readiness (provider activation separate) */
        get: operations["GovernedAiController_getReadiness"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/governed-ai/reviews": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Record human review outcome for AI-assisted work */
        post: operations["GovernedAiController_recordReview"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/metric-versions/{id}/activate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_activateMetricVersion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/metrics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_createMetric"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/metrics/{id}/publish": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_publishMetric"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/metrics/{id}/versions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_createMetricVersion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/monitoring/alerts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_generateAlert"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/monitoring/alerts/dispose": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_disposeAlert"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/monitoring/alerts/verify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_verifyAlert"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/monitoring/observations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_recordObservation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/monitoring/rules": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_createMonitoringRule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/monitoring/rules/{ruleId}/activate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_activateMonitoringRule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/risk/assessments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_createRiskAssessment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/risk/definitions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_createRiskDefinition"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/simulations/runs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_startRun"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/simulations/runs/{id}/complete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_completeRun"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/simulations/runs/{id}/outputs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_recordOutput"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/simulations/scenarios": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["IntelligenceController_createScenario"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/simulations/scenarios/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["IntelligenceController_getScenario"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/strategic-projects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["StrategicProjectController_createProfile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/strategic-projects/{profileId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["StrategicProjectController_getProfile"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/strategic-projects/{profileId}/projections/derive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["StrategicProjectController_deriveProjection"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/strategic-projects/{profileId}/stages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["StrategicProjectController_recordStage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/intelligence/twin-simulation/boundary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Digital twin and simulation boundary disclaimer (public) */
        get: operations["IntelligenceController_getTwinSimulationBoundaryDisclaimer"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/jurisdictions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List jurisdictions */
        get: operations["JurisdictionsController_findAll"];
        put?: never;
        /** Create a jurisdiction */
        post: operations["JurisdictionsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/jurisdictions/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a jurisdiction by id */
        get: operations["JurisdictionsController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update a jurisdiction */
        patch: operations["JurisdictionsController_update"];
        trace?: never;
    };
    "/jurisdictions/{id}/structure": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get organizational structure for a jurisdiction */
        get: operations["JurisdictionsController_getStructure"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/labour/employers/registry-records": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["LabourController_registerEmployer"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/labour/employment-complaints": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["LabourController_fileEmploymentComplaint"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/labour/work-permit-application-profiles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["LabourController_linkWorkPermitApplicationProfile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/labour/work-permits/{id}/approve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["LabourController_approveWorkPermit"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/labour/workers/profile-references": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["LabourController_createWorkerProfileReference"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/labour/workers/profile-references/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["LabourController_getWorkerProfile"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/maritime/compliance-references": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["MaritimeController_linkComplianceMatter"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/maritime/configurations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["MaritimeController_upsertConfiguration"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/maritime/configurations/{jurisdictionId}/vessel-type-categories/{code}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["MaritimeController_resolveVesselTypeCategory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/maritime/customs-case-references": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["MaritimeController_linkCustomsCase"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/maritime/external-dependencies/record": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["MaritimeController_recordExternalDependency"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/maritime/instruments/issue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["MaritimeController_issueInstrument"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/maritime/vessels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["MaritimeController_registerVessel"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/maritime/vessels/{vesselRecordId}/application-references": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["MaritimeController_linkApplicationReference"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/maritime/vessels/{vesselRecordId}/inspection-references": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["MaritimeController_linkInspection"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/maritime/vessels/{vesselRecordId}/party-relationships": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["MaritimeController_linkParty"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/officeholders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List officeholders */
        get: operations["OfficeholdersController_findAll"];
        put?: never;
        /** Create a officeholder */
        post: operations["OfficeholdersController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/officeholders/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a officeholder by id */
        get: operations["OfficeholdersController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update a officeholder */
        patch: operations["OfficeholdersController_update"];
        trace?: never;
    };
    "/offices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List offices */
        get: operations["OfficesController_findAll"];
        put?: never;
        /** Create a office */
        post: operations["OfficesController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/offices/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a office by id */
        get: operations["OfficesController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update a office */
        patch: operations["OfficesController_update"];
        trace?: never;
    };
    "/operational-readiness/activation/conditions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OperationalReadinessController_createActivationCondition"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-readiness/activation/conditions/{capabilityDefinitionId}/evaluation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OperationalReadinessController_evaluateActivationConditions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-readiness/activation/restrictions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OperationalReadinessController_createActivationRestriction"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-readiness/activation/safe-halt-conditions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OperationalReadinessController_createSafeHaltCondition"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-readiness/boundary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OperationalReadinessController_getBoundaryDisclaimer"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-readiness/capabilities/definitions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OperationalReadinessController_createDefinition"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-readiness/capabilities/definitions/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OperationalReadinessController_getDefinition"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["OperationalReadinessController_updateDefinition"];
        trace?: never;
    };
    "/operational-readiness/capabilities/definitions/{id}/maturity-history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OperationalReadinessController_getMaturityHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-readiness/capabilities/definitions/{id}/operational-view": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OperationalReadinessController_getOperationalView"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-readiness/capabilities/maturity-assessments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OperationalReadinessController_createMaturityAssessment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-readiness/capabilities/maturity-assessments/{id}/decision": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OperationalReadinessController_recordMaturityDecision"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-readiness/capabilities/versions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OperationalReadinessController_createVersion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-readiness/dependencies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OperationalReadinessController_createDependency"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-readiness/dependencies/{capabilityDefinitionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OperationalReadinessController_listDependencies"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-readiness/owners/assignments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OperationalReadinessController_assignOwners"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-readiness/production-readiness/assessments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OperationalReadinessController_createProductionReadinessAssessment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-readiness/production-readiness/assessments/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OperationalReadinessController_getProductionReadinessAssessment"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-readiness/production-readiness/assessments/{id}/evidence/replay": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OperationalReadinessController_getReplayableEvidence"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-readiness/revalidation/trigger": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OperationalReadinessController_triggerRevalidation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-support/boundary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Operational support boundary disclaimer */
        get: operations["OperationalSupportController_getBoundaryDisclaimer"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-support/communications/messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OperationalSupportController_createMessage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-support/communications/messages/{id}/approve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OperationalSupportController_approveMessage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-support/communications/messages/{id}/deliver": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OperationalSupportController_deliverMessage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-support/communications/templates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OperationalSupportController_createTemplate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-support/communications/templates/versions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OperationalSupportController_createTemplateVersion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-support/financial/approvals/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OperationalSupportController_getFinancialApproval"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-support/financial/fee-assessments/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OperationalSupportController_getFeeAssessment"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-support/financial/invoices/{invoiceNumber}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OperationalSupportController_getInvoice"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-support/financial/payment-intents/{intentReference}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OperationalSupportController_getPaymentIntent"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-support/financial/payment-transactions/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OperationalSupportController_getPaymentTransaction"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-support/financial/payment-webhooks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OperationalSupportController_receivePaymentWebhook"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-support/financial/reconciliation/{batchReference}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OperationalSupportController_getReconciliationBatch"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-support/financial/refund-authorizations/{authorizationReference}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OperationalSupportController_getRefundAuthorization"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-support/integrations/acceptance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OperationalSupportController_recordAcceptance"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-support/integrations/definitions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OperationalSupportController_createIntegrationDefinition"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-support/integrations/definitions/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OperationalSupportController_getIntegrationDefinition"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-support/integrations/definitions/{id}/acceptance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OperationalSupportController_getAcceptanceDossier"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-support/integrations/definitions/{id}/endpoints": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OperationalSupportController_createIntegrationEndpoint"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-support/integrations/definitions/{id}/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OperationalSupportController_updateIntegrationStatus"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-support/integrations/discrepancies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OperationalSupportController_recordDiscrepancy"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-support/integrations/exchanges": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OperationalSupportController_executeExchange"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-support/integrations/outages/{integrationDefinitionId}/fallback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OperationalSupportController_activateFallback"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-support/integrations/redress-refunds": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OperationalSupportController_executeRedressRefund"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-support/integrations/registry-queries": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OperationalSupportController_executeRegistryQuery"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-support/integrations/webhooks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OperationalSupportController_receiveIntegrationWebhook"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/operational-support/maf/{masterAdministrativeFileId}/index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Index Phase 11 records to MAF sections 14 and 15 */
        get: operations["OperationalSupportController_indexMaf"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/production-readiness/boundary-disclaimer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ProductionReadinessController_getBoundaryDisclaimer"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/property-registry/correction-requests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Submit a title/property correction request (not an approval) */
        post: operations["PropertyRegistryController_submitCorrection"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/property-registry/entries/{entryId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Read property registry entry subject to access classification */
        get: operations["PropertyRegistryController_getEntry"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/property-registry/parcels/{parcelId}/titles/{titleId}/distinction": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Confirm parcel and title are distinct linked concepts */
        get: operations["PropertyRegistryController_parcelTitleDistinction"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/property-registry/transfers/{transferId}/register-title": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Record official title registry mutation after authority and decision (not client-direct) */
        post: operations["PropertyRegistryController_registerTitle"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/property-registry/transfers/intake": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Initiate property transfer intake (non-official; supports application/case workflow only) */
        post: operations["PropertyRegistryController_createTransferIntake"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/civil-registry/verify-reference/{verificationReference}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Publicly verify an issued civil certificate by verification reference */
        get: operations["PublicCivilRegistryVerificationController_verifyByReference"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/civil-registry/verify/{verificationCode}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Publicly verify an issued civil certificate by opaque verification code */
        get: operations["PublicCivilRegistryVerificationController_verifyByCode"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/clinical-trials/discover": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Discover recruiting clinical trials without participant-identifying data */
        get: operations["PublicClinicalTrialDiscoveryController_discover"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/corporate-registry/verify/{reference}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Publicly verify a corporate registry record by opaque reference */
        get: operations["PublicCorporateRegistryVerificationController_verify"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/customs-trade/verify/{reference}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Public customs trade profile verification (non-confidential facts only) */
        get: operations["PublicCustomsTradeVerificationController_verify"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/education/credentials/{credentialReference}/verify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Publicly verify an academic credential by reference (minimal facts) */
        get: operations["PublicEducationVerificationController_verifyCredential"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/instruments/verify/{verificationCode}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Publicly verify an issued instrument by opaque verification code */
        get: operations["PublicInstrumentVerificationController_verify"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/property-registry/verify/{reference}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Controlled public property registry lookup when enabled by jurisdiction */
        get: operations["PublicPropertyRegistryVerificationController_verify"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/public-safety/notices/{noticeReference}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Published public safety government notice (approved content only) */
        get: operations["PublicPublicSafetyNoticeController_getPublishedNotice"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/service-families": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List service families with publicly discoverable services */
        get: operations["PublicServiceFamiliesController_listFamilies"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/services": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List publicly discoverable government services */
        get: operations["PublicServiceDiscoveryController_listServices"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/services/{slug}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get public detail for a discoverable service */
        get: operations["PublicServiceDiscoveryController_getServiceBySlug"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/services/{slug}/eligibility": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Evaluate nonbinding eligibility guidance for a service */
        post: operations["PublicServiceDiscoveryController_evaluateEligibility"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/services/{slug}/start-package": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get the pre-application start package for a service */
        get: operations["PublicServiceDiscoveryController_getStartPackage"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/services/match": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Match citizen-facing needs to published services */
        post: operations["PublicServiceDiscoveryController_matchServices"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/transportation/verify/license/{reference}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Public driver license status verification (minimal facts) */
        get: operations["PublicTransportationVerificationController_verifyLicense"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/transportation/verify/operator/{reference}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Public commercial transport operator permit status verification */
        get: operations["PublicTransportationVerificationController_verifyOperator"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/transportation/verify/vehicle/{reference}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Public vehicle registration status verification */
        get: operations["PublicTransportationVerificationController_verifyVehicle"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ready": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Verify required backend dependencies are available */
        get: operations["SystemController_getReady"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/records/master-files/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Master Administrative File metadata */
        get: operations["MasterAdministrativeFileController_getById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/records/master-files/{id}/completeness": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Assess Master Administrative File evidence completeness */
        post: operations["MasterAdministrativeFileController_assessCompleteness"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/records/master-files/{id}/index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Master Administrative File index */
        get: operations["MasterAdministrativeFileController_getIndex"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/records/master-files/by-case/{caseId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Master Administrative File by case */
        get: operations["MasterAdministrativeFileController_getByCaseId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/records/master-files/initialize/by-case/{caseId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Initialize Master Administrative File for a case */
        post: operations["MasterAdministrativeFileController_initializeForCase"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/redress/boundary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RedressController_getBoundaryDisclaimer"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/redress/decisions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["RedressController_recordDecision"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/redress/decisions/{id}/implementation-status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RedressController_getImplementationStatus"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/redress/external-referrals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["RedressController_createExternalReferral"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/redress/external-referrals/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RedressController_getExternalReferral"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/redress/external-referrals/{id}/determinations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["RedressController_recordExternalDetermination"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/redress/external-referrals/{id}/packages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["RedressController_createExternalPackage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/redress/interim-relief/decisions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["RedressController_decideInterimRelief"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/redress/interim-relief/requests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["RedressController_requestInterimRelief"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/redress/matters": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["RedressController_fileMatter"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/redress/matters/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RedressController_getMatter"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/redress/notices/prepare": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["RedressController_prepareNotice"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/revenue/tax-assessments/issue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Issue an authoritative tax assessment (consequential) */
        post: operations["RevenueController_issueTaxAssessment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/revenue/tax-clearance-requests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Request a tax clearance certificate */
        post: operations["RevenueController_requestClearance"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/revenue/tax-refund-claims": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Request a tax refund (does not disburse funds) */
        post: operations["RevenueController_requestRefund"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/revenue/tax-returns/{id}/versions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Submit or amend a tax return version (immutable once filed) */
        post: operations["RevenueController_submitReturnVersion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/revenue/taxpayer-accounts/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Fetch taxpayer account with strict access isolation */
        get: operations["RevenueController_getTaxpayerAccount"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/scheduling/appointments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List service appointments (administrative filter) */
        get: operations["ServiceAppointmentsController_list"];
        put?: never;
        /** Create a government service appointment (administrative scheduling) */
        post: operations["ServiceAppointmentsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/scheduling/appointments/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get service appointment detail */
        get: operations["ServiceAppointmentsController_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/scheduling/appointments/{id}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Cancel a service appointment (administrative) */
        post: operations["ServiceAppointmentsController_cancel"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/scheduling/appointments/{id}/complete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Mark appointment completed
         * @description Completion does not change case approval or issue instruments.
         */
        post: operations["ServiceAppointmentsController_complete"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/scheduling/appointments/{id}/reschedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Record an administrative reschedule */
        post: operations["ServiceAppointmentsController_reschedule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/scheduling/appointments/{id}/reschedule/approve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Approve a pending reschedule request */
        post: operations["ServiceAppointmentsController_approveReschedule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/scheduling/locations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List appointment locations */
        get: operations["AppointmentLocationsController_list"];
        put?: never;
        /** Create an appointment location */
        post: operations["AppointmentLocationsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/scheduling/reasons": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List appointment reasons */
        get: operations["AppointmentReasonsController_list"];
        put?: never;
        /** Create an appointment reason */
        post: operations["AppointmentReasonsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/scheduling/resources": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List appointment resources */
        get: operations["AppointmentResourcesController_list"];
        put?: never;
        /** Create an appointment resource */
        post: operations["AppointmentResourcesController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/scheduling/slots": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List available appointment slots */
        get: operations["AppointmentSlotsController_list"];
        put?: never;
        /** Create an appointment slot */
        post: operations["AppointmentSlotsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/service-catalog/service-versions/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a government service version by id */
        get: operations["GovernmentServiceVersionsController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update a government service version (draft or status transitions) */
        patch: operations["GovernmentServiceVersionsController_update"];
        trace?: never;
    };
    "/service-catalog/service-versions/{id}/functions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List function authority mappings for a service version */
        get: operations["GovernmentServiceVersionsController_findFunctionMappings"];
        put?: never;
        /** Map a Phase 4 function authority record to a service version */
        post: operations["GovernmentServiceVersionsController_createFunctionMapping"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/service-catalog/services": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List government services */
        get: operations["GovernmentServicesController_findAll"];
        put?: never;
        /** Create a government service (stable identity) */
        post: operations["GovernmentServicesController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/service-catalog/services/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a government service by id */
        get: operations["GovernmentServicesController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update a government service stable identity */
        patch: operations["GovernmentServicesController_update"];
        trace?: never;
    };
    "/service-catalog/services/{id}/versions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List all versions for a government service */
        get: operations["GovernmentServicesController_findVersions"];
        put?: never;
        /** Create a new version for a government service */
        post: operations["GovernmentServicesController_createVersion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/service-packs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a service pack identity */
        post: operations["ServicePacksController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/service-packs/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get service pack by id */
        get: operations["ServicePacksController_getById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/service-packs/{id}/accept": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Institutionally accept a service pack version (consequential action) */
        post: operations["ServicePackGovernanceController_accept"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/service-packs/{id}/imports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Import a versioned manifest into a service pack */
        post: operations["ServicePacksController_importManifest"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/service-packs/{id}/reject": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Reject a service pack version under governance */
        post: operations["ServicePackGovernanceController_reject"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/service-packs/{id}/reviews": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List governance reviews for a service pack */
        get: operations["ServicePackGovernanceController_listReviews"];
        put?: never;
        /** Start or list configured governance reviews for a version */
        post: operations["ServicePackGovernanceController_createReview"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/service-packs/{id}/reviews/{reviewId}/findings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Record a structured governance review finding */
        post: operations["ServicePackGovernanceController_addFinding"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/service-packs/{id}/reviews/{reviewId}/request-revision": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Request manifest revision after governance review */
        post: operations["ServicePackGovernanceController_requestRevision"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/service-packs/{id}/reviews/{reviewId}/resolve-finding": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Resolve a governance review finding */
        post: operations["ServicePackGovernanceController_resolveFinding"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/service-packs/{id}/submit-for-acceptance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Submit a validated service pack version for institutional acceptance */
        post: operations["ServicePackGovernanceController_submitForAcceptance"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/service-packs/{id}/template-clones": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Clone a service pack as a cross-jurisdiction template */
        post: operations["ServicePacksController_cloneTemplate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/service-packs/{id}/versions/{versionId}/exports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Export a service pack version as a portable configuration package */
        post: operations["ServicePacksController_exportVersion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/service-packs/{id}/versions/{versionId}/upgrade-plan": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Dry-run upgrade analysis for a service pack version */
        post: operations["ServicePacksController_buildUpgradePlan"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/service-packs/boundary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Service pack governance boundary disclaimer */
        get: operations["ServicePacksController_getBoundaryDisclaimer"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/service-packs/manifest-versions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List supported manifest schema versions */
        get: operations["ServicePacksController_listManifestVersions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/service-packs/portable-imports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Import a sanitized portable service pack export package */
        post: operations["ServicePacksController_importPortable"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/service-packs/registry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Administrative service pack registry inventory */
        get: operations["ServicePacksRegistryController_listRegistry"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/service-packs/registry/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Registry inventory for a single service pack */
        get: operations["ServicePacksRegistryController_getById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/service-packs/registry/institutions/{institutionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Registry inventory for an institution */
        get: operations["ServicePacksRegistryController_listByInstitution"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/service-packs/registry/jurisdictions/{jurisdictionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Registry inventory for a jurisdiction */
        get: operations["ServicePacksRegistryController_listByJurisdiction"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/service-packs/versions/{versionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get service pack version detail */
        get: operations["ServicePacksController_getVersion"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update a draft service pack version */
        patch: operations["ServicePacksController_updateVersion"];
        trace?: never;
    };
    "/service-packs/versions/{versionId}/compile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Compile a validated authoring manifest into DRAFT runtime configuration (no activation) */
        post: operations["ServicePacksController_compileVersion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/service-packs/versions/{versionId}/validate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Validate a service pack version manifest */
        post: operations["ServicePacksController_validateVersion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/social-protection/applicant-profiles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["SocialProtectionController_createApplicantProfile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/social-protection/benefit-application-profiles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["SocialProtectionController_linkBenefitApplicationProfile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/social-protection/benefit-awards": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["SocialProtectionController_createBenefitAward"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/social-protection/eligibility-assessments/preliminary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["SocialProtectionController_recordPreliminaryAssessment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/social-protection/household-records": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["SocialProtectionController_createHouseholdRecord"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/transportation/driver-license-application-profiles/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["TransportationController_getDriverLicenseApplicationProfile"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/transportation/driver-profiles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["TransportationController_createDriverProfile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/transportation/driver-profiles/subject/{subjectIdentityId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["TransportationController_getDriverProfileForSubject"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/transportation/public/vehicles/verify/{publicVerificationToken}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PublicVehicleVerificationController_verifyVehicle"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/version": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return application and build metadata */
        get: operations["SystemController_getVersion"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflow-definitions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["WorkflowController_createDefinition"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflow-definitions/{id}/versions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["WorkflowController_createVersion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflow-definitions/versions/{versionId}/approve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["WorkflowController_approveVersion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        AcceptServicePackDto: {
            acceptanceConditions?: Record<string, never>[];
            acceptedScope?: {
                [key: string]: unknown;
            };
            servicePackVersionId: string;
            unresolvedAcceptedRisks?: Record<string, never>[];
        };
        ActivateFunctionAuthorityRecordDto: {
            /**
             * Format: uuid
             * @deprecated
             * @description Ignored — administrator identity is derived from the authenticated session
             */
            actorIdentityId?: string;
            /** Format: uuid */
            appointmentId?: string;
            /** Format: uuid */
            delegationId?: string;
            /** Format: uuid */
            officeholderId?: string;
            /** Format: uuid */
            officeId?: string;
            reason?: string;
        };
        AddPacketItemDto: {
            acceptanceRecordIds?: string[];
            /** Format: uuid */
            departmentalReviewId?: string;
            /** Format: uuid */
            documentVersionId: string;
            /** Format: uuid */
            evidenceRecordId: string;
            /** Format: uuid */
            governmentCommunicationId?: string;
            inclusionOrder?: number;
            /** Format: uuid */
            inspectionRecordId?: string;
            limitations?: string;
            /** Format: uuid */
            professionalReviewId?: string;
            /** Format: uuid */
            sourceCitationId?: string;
            verificationRecordIds?: string[];
        };
        AddReviewFindingDto: {
            affectedComponent?: string;
            /** @enum {string} */
            category: "AUTHORITY" | "SECURITY" | "PRIVACY" | "INTEGRATION" | "OPERATIONS" | "WORKFLOW" | "EVIDENCE" | "DATA" | "OTHER";
            description: string;
            evidenceReference?: string;
            /** @enum {string} */
            findingCode: "MISSING_AUTHORITY_BASIS" | "UNAUTHENTICATED_GOVERNING_SOURCE" | "WORKFLOW_CONTROL_GAP" | "PRIVACY_RISK" | "SECURITY_RISK" | "MISSING_REDRESS_ROUTE" | "MISSING_RETENTION_RULE" | "INTEGRATION_NOT_ACCEPTED" | "DATA_CLASSIFICATION_ISSUE" | "UNRESOLVED_EXTERNAL_DEPENDENCY" | "ACCESS_CONTROL_GAP" | "INVALID_DECISION_ACTOR" | "EVIDENCE_REQUIREMENT_GAP" | "OPERATIONAL_READINESS_GAP" | "OTHER";
            resolverIdentityId?: string;
            /** @enum {string} */
            severity: "INFO" | "LOW" | "MEDIUM" | "HIGH" | "BLOCKING";
        };
        ApplicationRecordDto: {
            /** @enum {string} */
            applicantCategory: "INDIVIDUAL" | "CITIZEN" | "RESIDENT" | "NON_RESIDENT" | "BUSINESS" | "COMPANY" | "INVESTOR" | "EMPLOYER" | "EMPLOYEE" | "AUTHORIZED_REPRESENTATIVE" | "PROFESSIONAL" | "GOVERNMENT_ENTITY" | "PARTNER_ORGANIZATION" | "OTHER";
            applicantIdentityId: string;
            applicationNumber: string | null;
            configurationFingerprint: string;
            /** Format: date-time */
            createdAt: string;
            draftAnswers: {
                [key: string]: unknown;
            } | unknown[] | string | number | boolean;
            formDefinitionId: string;
            formVersionId: string;
            governmentServiceId: string;
            governmentServiceVersionId: string;
            id: string;
            idempotencyKey: string | null;
            organizationId: string | null;
            representativeAuthorityId: string | null;
            /** @enum {string} */
            status: "DRAFT" | "SUBMITTED" | "RECEIVED" | "WITHDRAWN" | "CLOSED";
            /** Format: date-time */
            updatedAt: string;
        };
        AppointmentResponseDto: {
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            effectiveFrom: string;
            effectiveUntil?: Record<string, never> | null;
            /** Format: uuid */
            id: string;
            isCurrent: boolean;
            /** Format: uuid */
            officeholderId: string;
            /** Format: uuid */
            officeId: string;
            /** @enum {string} */
            status: "PENDING" | "ACTIVE" | "SUSPENDED" | "ENDED" | "REVOKED";
            /** Format: date-time */
            updatedAt: string;
        };
        AssemblePacketDto: {
            /** Format: uuid */
            assembledByOfficeholderId?: string;
            /** Format: uuid */
            authorityEvaluationRecordId?: string;
            /** Format: date-time */
            evidenceCutoffAt?: string;
        };
        AssessDecisionReadinessDto: {
            /** Format: uuid */
            appointmentId?: string;
            at?: string;
            /** Format: uuid */
            caseId: string;
            /** Format: uuid */
            decisionTypeVersionId: string;
            /** Format: uuid */
            delegationId?: string;
            /** Format: uuid */
            evidencePacketVersionId?: string;
            hasSecondApproval?: boolean;
            isConflicted?: boolean;
            isRecused?: boolean;
            /** Format: uuid */
            proposedDecisionMakerIdentityId: string;
            /** Format: uuid */
            proposedDecisionMakerOfficeholderId?: string;
            requestedOutcome: string;
        };
        AssessIssuanceReadinessDto: {
            /** Format: uuid */
            caseId: string;
            effectiveFrom?: string;
            effectiveUntil?: string;
            externalIssuerReference?: string;
            /** Format: uuid */
            governmentDecisionId: string;
            /** Format: uuid */
            holderIdentityId?: string;
            /** Format: uuid */
            holderOrganizationId?: string;
            /** Format: uuid */
            instrumentTypeVersionId: string;
            /** Format: uuid */
            issuerAppointmentId?: string;
            /** Format: uuid */
            issuerDelegationId?: string;
            /** Format: uuid */
            issuerOfficeholderId: string;
            /** Format: uuid */
            issuerOfficeId: string;
            /** @enum {string} */
            issuerSource?: "ABSEZ_ISSUED" | "INSTITUTION_ISSUED" | "RETAINED_NATIONAL_COORDINATED" | "EXTERNAL_AUTHENTICATED";
            scope?: Record<string, never>;
            /** Format: uuid */
            sealDocumentVersionId?: string;
            /** Format: uuid */
            signatureDocumentVersionId?: string;
        };
        AssessMasterFileCompletenessDto: Record<string, never>;
        AssociateDocumentDto: Record<string, never>;
        AuthenticateGoverningSourceDto: {
            /** @description Where the verified, executed copy is held (gazette reference, registry entry, file number) */
            verificationReference?: string;
        };
        AuthenticationMethodResponseDto: {
            /** @enum {string} */
            assuranceLevel: "NONE" | "LOW" | "MEDIUM" | "HIGH";
            /** Format: date-time */
            createdAt: string;
            id: string;
            identityId: string;
            isEnabled: boolean;
            oidcAudience?: Record<string, never>;
            oidcClientId?: Record<string, never>;
            oidcIssuer?: Record<string, never>;
            /** @enum {string} */
            type: "PASSWORD" | "OIDC" | "SERVICE_API_KEY" | "MFA_TOTP";
            /** Format: date-time */
            updatedAt: string;
        };
        AuthorityEvaluationResponseDto: {
            /** @enum {string} */
            action: "RETRIEVE" | "SUMMARIZE" | "PREPARE" | "REVIEW" | "VERIFY" | "CHECK" | "RECOMMEND" | "CONCUR" | "APPROVE" | "DECIDE" | "SIGN" | "ISSUE" | "INSPECT" | "ENFORCE" | "SUSPEND" | "REVOKE" | "HEAR_REVIEW" | "ADMINISTER" | "AUDIT" | "CONSULT" | "SUPERVISE" | "LIAISE";
            /** Format: date-time */
            evaluatedAt: string;
            /** Format: uuid */
            evaluationId: string;
            explanationCodes: string[];
            /** Format: uuid */
            functionAuthorityRecordId: string;
            /** Format: uuid */
            identityId: string;
            /** @enum {string} */
            outcome: "ALLOW" | "DENY" | "BLOCKED" | "REQUIRES_EXTERNAL_DETERMINATION" | "SAFE_HALT";
            requiresRevalidation: boolean;
            safeHalt: boolean;
            /**
             * @description Phase 4F structured status derived from outcome and explanation codes. Not a universal permission.
             * @enum {string}
             */
            status: "ALLOW" | "NOT_AUTHORIZED" | "BLOCKED" | "REQUIRES_EXTERNAL_DETERMINATION" | "REQUIRES_PROFESSIONAL_REVIEW" | "REQUIRES_HUMAN_REVIEW" | "SAFE_HALT";
            summary: string;
        };
        BenefitAwardRecordDto: {
            awardNumber: string;
            benefitApplicationProfileId: string | null;
            benefitProgramId: string;
            benefitProgramVersionId: string;
            /** Format: date-time */
            createdAt: string;
            currentBenefitAwardVersionId: string | null;
            doesNotDetermineContinuingEligibility: boolean;
            governmentDecisionId: string | null;
            id: string;
            /** @enum {string} */
            lifecycleStatus: "NOT_AWARDED" | "PENDING_DECISION" | "AWARDED" | "EFFECTIVE" | "SUSPENDED" | "TERMINATED" | "SUPERSEDED" | "CLOSED";
            /** Format: date-time */
            updatedAt: string;
        };
        BenefitDisbursementReferenceRecordDto: {
            benefitAwardId: string;
            /** Format: date-time */
            createdAt: string;
            disbursementReference: string;
            doesNotDetermineEligibility: boolean;
            id: string;
            paymentTransactionId: string | null;
            /** Format: date-time */
            recordedAt: string;
        };
        BenefitProgramRecordDto: {
            benefitCategoryId: string;
            /** Format: date-time */
            createdAt: string;
            doesNotEncodeEligibilityLaw: boolean;
            id: string;
            institutionId: string | null;
            jurisdictionId: string | null;
            programCode: string;
            programName: string;
            /** @enum {string} */
            status: "DRAFT" | "ACTIVE" | "SUSPENDED" | "RETIRED";
            /** Format: date-time */
            updatedAt: string;
        };
        BusinessActionDto: {
            /** @example PAY_INVOICE */
            actionCode: string;
            attribution: components["schemas"]["InstitutionAttributionDto"];
            createdAt: string;
            deepLink: components["schemas"]["DeepLinkDto"];
            dueAt: Record<string, never>;
            label: components["schemas"]["LocalizedLabelDto"];
            priority: number;
            relatedApplicationId?: string;
            relatedCaseId?: string;
            relatedCommunicationId?: string;
            relatedComplianceMatterId?: string;
            relatedInstrumentId?: string;
            relatedInvoiceId?: string;
            relatedProjectId?: string;
        };
        BusinessActionsResponseDto: {
            items: components["schemas"]["BusinessActionDto"][];
            pagination: components["schemas"]["PaginationMetaDto"];
        };
        BusinessApplicationItemDto: {
            applicantCategory: string;
            applicationId: string;
            applicationNumber?: Record<string, never>;
            attribution: components["schemas"]["InstitutionAttributionDto"];
            caseId?: Record<string, never>;
            status: string;
            updatedAt: string;
        };
        BusinessApplicationsResponseDto: {
            disclaimer: components["schemas"]["LocalizedLabelDto"];
            items: components["schemas"]["BusinessApplicationItemDto"][];
            pagination: components["schemas"]["PaginationMetaDto"];
        };
        BusinessComplianceMatterDto: {
            authoritativeStatusLabel?: Record<string, never>;
            complianceMatterId: string;
            complianceMatterNumber: string;
            openedAt: string;
            outstandingObligations: components["schemas"]["BusinessComplianceObligationDto"][];
            status: string;
        };
        BusinessComplianceObligationDto: {
            complianceMatterId: string;
            description: string;
            dueDate?: Record<string, never>;
            obligationCode: string;
            obligationId: string;
            status: string;
        };
        BusinessComplianceResponseDto: {
            disclaimer: components["schemas"]["LocalizedLabelDto"];
            items: components["schemas"]["BusinessComplianceMatterDto"][];
            pagination: components["schemas"]["PaginationMetaDto"];
        };
        BusinessCorporateActionsResponseDto: {
            items: Record<string, never>[];
        };
        BusinessCorporateCertificatesResponseDto: {
            items: Record<string, never>[];
        };
        BusinessCorporateFilingsResponseDto: {
            items: Record<string, never>[];
            page: number;
            pageSize: number;
            totalItems: number;
        };
        BusinessCorporateOfficersResponseDto: {
            items: Record<string, never>[];
        };
        BusinessCorporateProfileResponseDto: {
            beneficialOwnershipSummary?: Record<string, never>;
            businessLicenses: Record<string, never>[];
            complianceObligations: Record<string, never>[];
            disclaimer: string;
            entityType?: Record<string, never>;
            filingStatus?: Record<string, never>;
            governmentCertificates: Record<string, never>[];
            officers: Record<string, never>[];
            /** Format: uuid */
            organizationId: string;
            outstandingCorporateActions: Record<string, never>[];
            /** Format: uuid */
            profileId: string;
            registeredName?: Record<string, never>;
            registeredOffice?: Record<string, never>;
            registrationDate?: Record<string, never>;
            registrationReference?: Record<string, never>;
            registrationStatus: string;
            representativeAccessLimited: boolean;
            upcomingFilingRequirements: Record<string, never>[];
        };
        BusinessHomeCountSummaryDto: {
            activeApplications: number;
            activeLicenses: number;
            appealsAndRedress: number;
            complianceObligations: number;
            customsAndTradeMatters: number;
            governmentMessages: number;
            inspectionsAndCorrectiveActions: number;
            licensesApproachingExpiry: number;
            outstandingActions: number;
            outstandingPayments: number;
            propertyAndProjectMatters: number;
            strategicInvestmentProjects: number;
            upcomingDeadlines: number;
            workforceMatters: number;
        };
        BusinessHomeRecentItemDto: {
            attribution?: components["schemas"]["InstitutionAttributionDto"];
            itemId: string;
            itemType: string;
            occurredAt: string;
            title: string;
        };
        BusinessHomeResponseDto: {
            counts: components["schemas"]["BusinessHomeCountSummaryDto"];
            disclaimer: components["schemas"]["LocalizedLabelDto"];
            organizationId: string;
            recentItems: components["schemas"]["BusinessHomeRecentItemDto"][];
        };
        BusinessLicenseItemDto: {
            approachingExpiry: boolean;
            attribution?: components["schemas"]["InstitutionAttributionDto"];
            caseId?: Record<string, never>;
            effectiveFrom?: Record<string, never>;
            effectiveUntil?: Record<string, never>;
            instrumentId: string;
            instrumentNumber: string;
            status: string;
        };
        BusinessLicensesResponseDto: {
            disclaimer: components["schemas"]["LocalizedLabelDto"];
            items: components["schemas"]["BusinessLicenseItemDto"][];
            pagination: components["schemas"]["PaginationMetaDto"];
        };
        BusinessMessageItemDto: {
            attribution?: components["schemas"]["InstitutionAttributionDto"];
            caseId: string;
            communicationId: string;
            communicationType: string;
            sentAt: string;
            subject?: Record<string, never>;
        };
        BusinessMessagesResponseDto: {
            disclaimer: components["schemas"]["LocalizedLabelDto"];
            items: components["schemas"]["BusinessMessageItemDto"][];
            pagination: components["schemas"]["PaginationMetaDto"];
        };
        BusinessOrganizationDetailDto: {
            accessPaths: string[];
            description?: Record<string, never>;
            disclaimer: components["schemas"]["LocalizedLabelDto"];
            membershipRoleLabel?: Record<string, never>;
            organizationCode: string;
            organizationId: string;
            organizationName: string;
            organizationStatus: string;
            registrationStatusLabel: string;
            representativeScopeDescription?: Record<string, never>;
        };
        BusinessOrganizationsResponseDto: {
            disclaimer: components["schemas"]["LocalizedLabelDto"];
            items: components["schemas"]["BusinessOrganizationSummaryDto"][];
        };
        BusinessOrganizationSummaryDto: {
            /**
             * @example [
             *       "MEMBERSHIP",
             *       "REPRESENTATIVE_AUTHORITY"
             *     ]
             */
            accessPaths: string[];
            membershipRoleLabel?: Record<string, never>;
            organizationCode: string;
            organizationId: string;
            organizationName: string;
            organizationStatus: string;
            representativeScopeDescription?: Record<string, never>;
        };
        BusinessPaymentItemDto: {
            amountPaidCents: number;
            attribution?: components["schemas"]["InstitutionAttributionDto"];
            caseId?: Record<string, never>;
            currency: string;
            dueAt?: Record<string, never>;
            invoiceId: string;
            invoiceNumber: string;
            paymentDoesNotImplyApproval: boolean;
            status: string;
            totalAmountCents: number;
        };
        BusinessPaymentsResponseDto: {
            disclaimer: components["schemas"]["LocalizedLabelDto"];
            items: components["schemas"]["BusinessPaymentItemDto"][];
            pagination: components["schemas"]["PaginationMetaDto"];
        };
        BusinessProjectDependencyDto: {
            dependencyId: string;
            dependencyType: string;
            description: string;
            isResolved: boolean;
            ownerType: string;
        };
        BusinessProjectItemDto: {
            caseId?: Record<string, never>;
            currentStage: string;
            governmentDependencies: components["schemas"]["BusinessProjectDependencyDto"][];
            milestones: components["schemas"]["BusinessProjectMilestoneDto"][];
            outstandingEvidenceCount: number;
            projectCode: string;
            projectId: string;
            reportedStatusIsNotVerifiedCompletion: boolean;
            statusProjectionDisclaimer?: Record<string, never>;
            title: string;
        };
        BusinessProjectMilestoneDto: {
            isVerifiedCompletion: boolean;
            milestoneId: string;
            plannedDate?: Record<string, never>;
            reportedDate?: Record<string, never>;
            status: string;
            title: string;
            verifiedDate?: Record<string, never>;
        };
        BusinessProjectsResponseDto: {
            disclaimer: components["schemas"]["LocalizedLabelDto"];
            items: components["schemas"]["BusinessProjectItemDto"][];
            pagination: components["schemas"]["PaginationMetaDto"];
        };
        CancelServiceAppointmentDto: {
            reason?: string;
        };
        CaptureSnapshotDto: {
            /** Format: uuid */
            dashboardVersionId: string;
            projectionIds: string[];
        };
        CitizenAccountAssuranceDto: {
            accountStatus: string;
            /** @enum {string} */
            assuranceLevel: "NONE" | "LOW" | "MEDIUM" | "HIGH";
            assuranceNote: string;
            /** @example false */
            hasGovernmentAuthority: boolean;
            sessionId: string;
        };
        CitizenActionDto: {
            /**
             * @description Stable machine-readable action code
             * @example PAY_INVOICE
             */
            actionCode: string;
            attribution: components["schemas"]["InstitutionAttributionDto"];
            createdAt: string;
            deepLink: components["schemas"]["DeepLinkDto"];
            dueAt: string | null;
            label: components["schemas"]["LocalizedLabelDto"];
            priority: number;
            relatedApplicationId?: string;
            relatedCaseId?: string;
            relatedCommunicationId?: string;
            relatedInstrumentId?: string;
            relatedInvoiceId?: string;
        };
        CitizenActionsResponseDto: {
            items: components["schemas"]["CitizenActionDto"][];
            pagination: components["schemas"]["PaginationMetaDto"];
        };
        CitizenApplicationDetailDto: {
            /** @enum {string} */
            applicantCategory: "INDIVIDUAL" | "CITIZEN" | "RESIDENT" | "NON_RESIDENT" | "BUSINESS" | "COMPANY" | "INVESTOR" | "EMPLOYER" | "EMPLOYEE" | "AUTHORIZED_REPRESENTATIVE" | "PROFESSIONAL" | "GOVERNMENT_ENTITY" | "PARTNER_ORGANIZATION" | "OTHER";
            applicationId: string;
            applicationNumber?: string;
            attribution: components["schemas"]["InstitutionAttributionDto"];
            caseId?: string;
            caseNumber?: string;
            createdAt: string;
            deepLink: components["schemas"]["DeepLinkDto"];
            disclaimer: components["schemas"]["LocalizedLabelDto"];
            formDefinitionId: string;
            formVersionId: string;
            governmentServiceVersionId: string;
            organizationId?: string;
            organizationName?: string;
            publicStatusLabel?: string;
            representativeAuthorityId?: string;
            /** @enum {string} */
            status: "DRAFT" | "SUBMITTED" | "RECEIVED" | "WITHDRAWN" | "CLOSED";
            updatedAt: string;
        };
        CitizenApplicationsResponseDto: {
            items: components["schemas"]["CitizenApplicationSummaryDto"][];
            pagination: components["schemas"]["PaginationMetaDto"];
        };
        CitizenApplicationSummaryDto: {
            /** @enum {string} */
            applicantCategory: "INDIVIDUAL" | "CITIZEN" | "RESIDENT" | "NON_RESIDENT" | "BUSINESS" | "COMPANY" | "INVESTOR" | "EMPLOYER" | "EMPLOYEE" | "AUTHORIZED_REPRESENTATIVE" | "PROFESSIONAL" | "GOVERNMENT_ENTITY" | "PARTNER_ORGANIZATION" | "OTHER";
            applicationId: string;
            applicationNumber?: string;
            attribution: components["schemas"]["InstitutionAttributionDto"];
            caseId?: string;
            caseNumber?: string;
            createdAt: string;
            deepLink: components["schemas"]["DeepLinkDto"];
            publicStatusLabel?: string;
            /** @enum {string} */
            status: "DRAFT" | "SUBMITTED" | "RECEIVED" | "WITHDRAWN" | "CLOSED";
            updatedAt: string;
        };
        CitizenAppointmentDetailDto: {
            appointmentReference: string;
            attribution?: components["schemas"]["InstitutionAttributionDto"];
            availableActions: string[];
            disclaimer: components["schemas"]["LocalizedLabelDto"];
            /** Format: uuid */
            id: string;
            isVirtual: boolean;
            locationName: string | null;
            reasonName: string | null;
            scheduledEndsAt: string | null;
            scheduledStartsAt: string | null;
            status: string;
            virtualMeetingUrl: string | null;
        };
        CitizenAppointmentsResponseDto: {
            items: components["schemas"]["CitizenAppointmentSummaryDto"][];
            pagination: components["schemas"]["PaginationMetaDto"];
        };
        CitizenAppointmentSummaryDto: {
            appointmentReference: string;
            attribution?: components["schemas"]["InstitutionAttributionDto"];
            disclaimer: components["schemas"]["LocalizedLabelDto"];
            /** Format: uuid */
            id: string;
            isVirtual: boolean;
            reasonName: string | null;
            scheduledEndsAt: string | null;
            scheduledStartsAt: string | null;
            status: string;
        };
        CitizenBenefitActionDto: {
            actionKey: string;
            label: string;
        };
        CitizenBenefitActiveAwardDto: {
            awardNumber: string;
            /** @enum {string} */
            lifecycleStatus: "NOT_AWARDED" | "PENDING_DECISION" | "AWARDED" | "EFFECTIVE" | "SUSPENDED" | "TERMINATED" | "SUPERSEDED" | "CLOSED";
        };
        CitizenBenefitApplicationItemDto: {
            applicationId: string;
            benefitApplicantProfileId: string;
            benefitProgram: components["schemas"]["BenefitProgramRecordDto"];
            benefitProgramId: string;
            benefitProgramVersionId: string;
            caseId: string;
            /** Format: date-time */
            createdAt: string;
            doesNotCreateBenefitAward: boolean;
            doesNotInferEligibility: boolean;
            householdRecordId: string | null;
            id: string;
            paymentDoesNotDetermineEligibility: boolean;
            profileNumber: string;
            /** @enum {string} */
            status: "LINKED" | "ACTIVE" | "WITHDRAWN" | "CLOSED";
            /** Format: date-time */
            submissionAcknowledgedAt: string | null;
            /** Format: date-time */
            updatedAt: string;
        };
        CitizenBenefitProgramItemDto: {
            /** @enum {string} */
            categoryKind: "INCOME_SUPPORT" | "UNEMPLOYMENT_SUPPORT" | "DISABILITY_RELATED" | "PENSION_SOCIAL_SECURITY" | "HOUSING_ASSISTANCE" | "FOOD_ASSISTANCE" | "FAMILY_SUPPORT" | "CHILD_SUPPORT" | "ELDERLY_SUPPORT" | "EMERGENCY_ASSISTANCE" | "EDUCATION_BENEFITS" | "HEALTHCARE_SUPPORT" | "VETERAN_SUPPORT" | "DISASTER_RELIEF" | "TARGETED_SUBSIDY" | "MEANS_TESTED" | "CATEGORY_BASED" | "OTHER_CONFIGURED";
            isAuthoritativeEligibility: boolean;
            preliminaryMatchingOnly: boolean;
            programCode: string;
            programName: string;
        };
        CitizenBenefitsActionsResponseDto: {
            availableActions: components["schemas"]["CitizenBenefitActionDto"][];
            profileReferenceNumber: string;
        };
        CitizenBenefitsHomeResponseDto: {
            activeAward: components["schemas"]["CitizenBenefitActiveAwardDto"] | null;
            disbursementReferences: number;
            disclaimer: string;
            paymentDisclaimer: string;
            pendingApplications: number;
            preliminaryEligibilityAssessments: number;
            preliminaryMatchDisclaimer: string;
            preliminaryMatchingIsNotAuthoritativeEligibility: boolean;
            profileReferenceNumber: string;
            renewalItemsTracked: number;
            /** @enum {string} */
            ruleEnvironment: "NON_PRODUCTION";
        };
        CitizenBoundaryDisclaimerResponseDto: {
            disclaimer: string;
        };
        CitizenCaseCommunicationSummaryDto: {
            communicationId: string;
            communicationType: string;
            sentAt: string;
            subject?: string;
        };
        CitizenCaseMilestoneDto: {
            milestoneId: string;
            name: string;
            reachedAt?: string;
            status: string;
        };
        CitizenCaseStatusResponseDto: {
            applicantDisclaimer: components["schemas"]["LocalizedLabelDto"];
            attribution: components["schemas"]["InstitutionAttributionDto"];
            caseId: string;
            caseNumber: string;
            deepLink: components["schemas"]["DeepLinkDto"];
            milestones: components["schemas"]["CitizenCaseMilestoneDto"][];
            publicMessage?: string;
            publicStageLabel: string;
            publicStatusLabel: string;
            recentCommunications: components["schemas"]["CitizenCaseCommunicationSummaryDto"][];
        };
        CitizenCivilCertificateSummaryDto: {
            certificateType: string;
            id: string;
            issuedAt?: string;
            registryVersionId: string;
            requestViaServiceSlug?: string;
            /** @enum {string} */
            status: "PENDING_ISSUANCE" | "ISSUED" | "REVOKED" | "SUPERSEDED";
            verificationReference?: string;
            vitalRecordId: string;
        };
        CitizenCivilRegistryActionDto: {
            actionCode: string;
            description: string;
            label: string;
            serviceSlug: string;
        };
        CitizenCivilStatusResponseDto: {
            entitledRecordCount: number;
            identityId: string;
            officialRecordCount: number;
            pendingSubmissionCount: number;
            templateDisclaimer: string;
        };
        CitizenClassificationDto: {
            /** @description Citizen/resident classification is derived from application history only */
            classificationNote: string;
            observedApplicantCategories?: ("INDIVIDUAL" | "CITIZEN" | "RESIDENT" | "NON_RESIDENT" | "BUSINESS" | "COMPANY" | "INVESTOR" | "EMPLOYER" | "EMPLOYEE" | "AUTHORIZED_REPRESENTATIVE" | "PROFESSIONAL" | "GOVERNMENT_ENTITY" | "PARTNER_ORGANIZATION" | "OTHER")[];
        };
        CitizenCommunicationPreferenceDto: {
            channelType: string;
            isEnabled: boolean;
            locale?: string;
        };
        CitizenCredentialDetailDto: {
            /** @description Instrument conditions exactly as recorded on the current instrument version */
            conditions: unknown[];
            currentVersionNumber?: number;
            downloadPath?: string;
            effectiveFrom?: string;
            effectiveUntil?: string;
            holderDisplay?: string;
            id: string;
            instrumentKind?: string;
            instrumentNumber?: string;
            instrumentType?: string;
            issuer: components["schemas"]["CitizenInstitutionDto"];
            renewal?: components["schemas"]["CitizenRenewalProjectionDto"];
            scopeSummary?: string;
            /** @enum {string} */
            status: "DRAFT" | "PENDING_ISSUANCE" | "ISSUED" | "EFFECTIVE" | "SUSPENDED" | "PARTIALLY_SUSPENDED" | "REVOCATION_DECIDED" | "REVOKED" | "REINSTATED" | "EXPIRED" | "SURRENDERED" | "SUPERSEDED" | "AMENDED" | "VARIED" | "RENEWED" | "REPLACED" | "CLOSED";
            superseded: boolean;
            verificationReference?: string;
            verificationUri?: string;
        };
        CitizenCredentialSummaryDto: {
            /** @description Instrument conditions exactly as recorded on the current instrument version */
            conditions: unknown[];
            downloadPath?: string;
            effectiveFrom?: string;
            effectiveUntil?: string;
            id: string;
            instrumentKind?: string;
            instrumentNumber?: string;
            instrumentType?: string;
            issuer: components["schemas"]["CitizenInstitutionDto"];
            renewal?: components["schemas"]["CitizenRenewalProjectionDto"];
            /** @enum {string} */
            status: "DRAFT" | "PENDING_ISSUANCE" | "ISSUED" | "EFFECTIVE" | "SUSPENDED" | "PARTIALLY_SUSPENDED" | "REVOCATION_DECIDED" | "REVOKED" | "REINSTATED" | "EXPIRED" | "SURRENDERED" | "SUPERSEDED" | "AMENDED" | "VARIED" | "RENEWED" | "REPLACED" | "CLOSED";
            superseded: boolean;
            verificationReference?: string;
        };
        CitizenDevelopmentActionItemDto: {
            correctiveActions: components["schemas"]["DevelopmentCorrectiveActionRecordDto"][];
            evidenceOutstandingCount: number;
            openInspections: number;
            /** @description Number of outstanding fees on the project */
            outstandingFees: number;
            projectId: string;
            projectReference: string;
        };
        CitizenDevelopmentActionsResponseDto: {
            items: components["schemas"]["CitizenDevelopmentActionItemDto"][];
        };
        CitizenDevelopmentProjectListItemDto: {
            id: string;
            projectReference: string;
            siteLabel: string | null;
            /** @enum {string} */
            status: "ACTIVE" | "ON_HOLD" | "COMPLETED" | "ARCHIVED";
            title: string;
        };
        CitizenDevelopmentProjectsResponseDto: {
            items: components["schemas"]["CitizenDevelopmentProjectListItemDto"][];
        };
        CitizenDocumentDetailDto: {
            currentVersionNumber: number;
            disclaimer: string;
            documentNumber: string;
            documentType: string;
            download?: components["schemas"]["CitizenDocumentDownloadDto"];
            expiryDate?: string;
            id: string;
            integrity: components["schemas"]["CitizenDocumentIntegrityDto"];
            issueOrSubmissionDate?: string;
            originatingInstitution?: components["schemas"]["CitizenInstitutionDto"];
            relatedService?: components["schemas"]["CitizenRelatedServiceDto"];
            sourceType: string;
            status: string;
            title: string;
        };
        CitizenDocumentDownloadDto: {
            downloadPath: string;
            versionId: string;
        };
        CitizenDocumentIntegrityDto: {
            authenticityStatus: string;
            sealStatus: string;
            sha256: string;
            signatureStatus: string;
        };
        CitizenDocumentSummaryDto: {
            disclaimer: string;
            documentType: string;
            download?: components["schemas"]["CitizenDocumentDownloadDto"];
            expiryDate?: string;
            id: string;
            integrity: components["schemas"]["CitizenDocumentIntegrityDto"];
            issueOrSubmissionDate?: string;
            originatingInstitution?: components["schemas"]["CitizenInstitutionDto"];
            relatedService?: components["schemas"]["CitizenRelatedServiceDto"];
            status: string;
            title: string;
        };
        CitizenDriverLicenseSummaryDto: {
            classes: string[];
            endorsements: string[];
            expiresAt: string | null;
            isSuspended: boolean;
            licenseNumber: string;
            /** @enum {string} */
            lifecycleStatus: "NOT_ISSUED" | "PENDING_ISSUANCE" | "EFFECTIVE" | "EXPIRED" | "SUSPENDED" | "REVOKED" | "SUPERSEDED";
        };
        CitizenEducationActionDto: {
            actionKey: string;
            label: string;
        };
        CitizenEducationActionsResponseDto: {
            actions: components["schemas"]["CitizenEducationActionDto"][];
            disclaimer: string;
            forbiddenSelfServiceActions: string[];
            identityId: string;
        };
        CitizenEducationApplicationsResponseDto: {
            enrollmentApplications: components["schemas"]["CitizenEducationEnrollmentApplicationDto"][];
            scholarshipApplications: components["schemas"]["CitizenEducationScholarshipApplicationDto"][];
        };
        CitizenEducationCredentialItemDto: {
            credentialReference: string;
            /** @enum {string} */
            lifecycleStatus: "DRAFT" | "PENDING_ISSUANCE" | "ISSUED" | "EFFECTIVE" | "REVOKED" | "SUPERSEDED";
        };
        CitizenEducationEnrollmentApplicationDto: {
            doesNotCreateEnrollment: boolean;
            profileNumber: string;
            /** @enum {string} */
            status: "LINKED" | "ACTIVE" | "WITHDRAWN" | "CLOSED";
        };
        CitizenEducationEnrollmentItemDto: {
            enrollmentReference: string;
            institutionCode: string;
            institutionName: string;
            /** @enum {string} */
            status: "PROPOSED" | "ACTIVE" | "ON_LEAVE" | "WITHDRAWN" | "COMPLETED" | "CLOSED";
        };
        CitizenEducationHomeResponseDto: {
            accessibleStudentProfiles: number;
            activeEnrollments: number;
            disclaimer: string;
            ruleEnvironment: string;
            servicePackId: string;
        };
        CitizenEducationScholarshipApplicationDto: {
            aiRecommendationIsNotDecision: boolean;
            doesNotCreateAward: boolean;
            profileNumber: string;
            /** @enum {string} */
            status: "LINKED" | "ACTIVE" | "WITHDRAWN" | "CLOSED";
        };
        CitizenEducationSupportResponseDto: {
            /** @description Grant applications are not yet projected; always an empty list */
            grantApplications: unknown[];
            scholarshipApplications: components["schemas"]["CitizenEducationSupportScholarshipDto"][];
        };
        CitizenEducationSupportScholarshipDto: {
            aiRecommendationIsNotDecision: boolean;
            doesNotCreateAward: boolean;
            profileNumber: string;
        };
        CitizenEmergencyEventItemDto: {
            eventReference: string;
            informationalOnly: boolean;
            isOfficialDeclaration: boolean;
            publicSummary: string | null;
            /** @enum {string} */
            status: "INFORMATIONAL" | "ACTIVE_MONITORING" | "RESPONSE_COORDINATION" | "RECOVERY" | "CLOSED";
            title: string;
        };
        CitizenEmergencyEventsResponseDto: {
            disclaimer: string;
            items: components["schemas"]["CitizenEmergencyEventItemDto"][];
        };
        CitizenEmploymentActionItemDto: {
            actionKey: string;
            available: boolean;
            configuredObligation: boolean;
            label: string;
        };
        CitizenEmploymentActionsResponseDto: {
            disclaimer: string;
            items: components["schemas"]["CitizenEmploymentActionItemDto"][];
        };
        CitizenEmploymentHomeResponseDto: {
            activeEmployers: number;
            disclaimer: string;
            immigrationCoordinationDisclaimer: string;
            pendingApplications: number;
            profileReferenceNumber: string;
            /** @enum {string} */
            ruleEnvironment: "NON_PRODUCTION";
            workPermit: components["schemas"]["CitizenEmploymentWorkPermitSummaryDto"] | null;
        };
        CitizenEmploymentRelationshipItemDto: {
            /** Format: date-time */
            createdAt: string;
            currentWorkPermitRecordId: string | null;
            /** @enum {string} */
            dataClassification: "PUBLIC" | "OFFICIAL" | "EMPLOYER_SCOPED" | "WORKER_SELF" | "PROTECTED_LABOUR" | "PROTECTED_WORKER" | "RESTRICTED";
            employerRegistryRecord: components["schemas"]["EmployerRegistryRecordDto"];
            employerRegistryRecordId: string;
            /** Format: date-time */
            endDate: string | null;
            id: string;
            isGovernmentWorkAuthorization: boolean;
            occupationClassificationId: string | null;
            relationshipNumber: string;
            roleTitle: string;
            /** Format: date-time */
            startDate: string | null;
            /** @enum {string} */
            status: "PROPOSED" | "ACTIVE" | "SUSPENDED" | "TERMINATED" | "CLOSED";
            /** Format: date-time */
            updatedAt: string;
            workerProfileReferenceId: string;
        };
        CitizenEmploymentWorkPermitSummaryDto: {
            doesNotCreateResidency: boolean;
            immigrationProfileLinked: boolean;
            /** @enum {string} */
            lifecycleStatus: "NOT_ISSUED" | "PENDING_ISSUANCE" | "ISSUED" | "EFFECTIVE" | "EXPIRED" | "REVOKED" | "SUSPENDED" | "SUPERSEDED" | "SURRENDERED";
            permitNumber: string;
            residencyCoordinationLinked: boolean;
            /** Format: date-time */
            validUntil: string | null;
        };
        CitizenHealthcareActionsResponseDto: {
            consentState: string;
            /** @description Required patient action codes */
            items: string[];
        };
        CitizenHealthcareAppointmentItemDto: {
            appointmentReference: string;
            enrollmentNumber: string;
            patientSafeLabel: string | null;
            /** @enum {string} */
            privacyClassification: "STANDARD" | "SENSITIVE" | "HIGHLY_CONFIDENTIAL";
            programCode: string;
            /** Format: date-time */
            scheduledStartsAt: string | null;
            /** @enum {string} */
            status: "REQUESTED" | "SCHEDULED" | "CONFIRMED" | "RESCHEDULED" | "CANCELLED" | "COMPLETED" | "NO_SHOW";
        };
        CitizenHealthcareAppointmentsResponseDto: {
            disclaimer: string;
            items: components["schemas"]["CitizenHealthcareAppointmentItemDto"][];
        };
        CitizenHealthcareHomeResponseDto: {
            applications: components["schemas"]["CitizenTreatmentApplicationItemDto"][];
            consentState: string;
            disclaimer: string;
            enrolledPrograms: components["schemas"]["CitizenTreatmentEnrollmentItemDto"][];
            referrals: components["schemas"]["CitizenTreatmentReferralItemDto"][];
            requiredActions: string[];
            screenings: components["schemas"]["CitizenTreatmentScreeningItemDto"][];
            trialOpportunities: components["schemas"]["CitizenTreatmentEnrollmentItemDto"][];
        };
        CitizenHealthcareProfileResponseDto: {
            consentStateCode?: string | null;
            disclaimer: string;
            /** @description Omitted when the citizen has no healthcare profile */
            profileNumber?: string;
            publicMessage?: string | null;
            publicStatusLabel?: string;
        };
        CitizenHealthcareProviderItemDto: {
            programCode: string;
            providerIdentityId: string | null;
            providerOrganizationId: string | null;
            /** @enum {string} */
            providerRole: "PRIMARY" | "SPECIALIST" | "REFERRAL_PARTNER" | "SITE_OPERATOR";
        };
        CitizenHealthcareProvidersResponseDto: {
            disclaimer: string;
            items: components["schemas"]["CitizenHealthcareProviderItemDto"][];
        };
        CitizenHomeCountSummaryDto: {
            actionRequired: number;
            activeApplications: number;
            appealsRedressMatters: number;
            issuedCredentials: number;
            outstandingPayments: number;
            pendingGovernmentRequests: number;
            recentDecisions: number;
            unreadMessages: number;
            upcomingAppointments: number;
            upcomingExpirations: number;
        };
        CitizenHomeRecentItemDto: {
            attribution?: components["schemas"]["InstitutionAttributionDto"];
            itemId: string;
            itemType: string;
            occurredAt: string;
            title: string;
        };
        CitizenHomeResponseDto: {
            counts: components["schemas"]["CitizenHomeCountSummaryDto"];
            disclaimer: components["schemas"]["LocalizedLabelDto"];
            recentItems: components["schemas"]["CitizenHomeRecentItemDto"][];
            serviceRecommendations: components["schemas"]["CitizenServiceRecommendationDto"][];
        };
        CitizenImmigrationActionItemDto: {
            actionKey: string;
            available: boolean;
            label: string;
        };
        CitizenImmigrationActionsResponseDto: {
            items: components["schemas"]["CitizenImmigrationActionItemDto"][];
        };
        CitizenImmigrationApplicationItemDto: {
            applicationId: string;
            caseId?: string;
            serviceCode: string;
            serviceName: string;
            statusLabel: string;
        };
        CitizenImmigrationApplicationsResponseDto: {
            items: components["schemas"]["CitizenImmigrationApplicationItemDto"][];
        };
        CitizenImmigrationCredentialItemDto: {
            credentialId: string;
            effectiveUntil?: string;
            label: string;
            renewalEligible?: boolean;
            status: string;
        };
        CitizenImmigrationCredentialsResponseDto: {
            items: components["schemas"]["CitizenImmigrationCredentialItemDto"][];
        };
        CitizenImmigrationOverviewResponseDto: {
            activeApplicationsCount: number;
            credentialsCount: number;
            disclaimer: string;
            packId: string;
            packLabel: string;
            pendingActionsCount: number;
        };
        CitizenImmigrationStatusResponseDto: {
            openAppealsCount: number;
            outstandingFeesCount: number;
            requestedInformationCount: number;
            statuses: components["schemas"]["CitizenImmigrationStatusSummaryDto"][];
            upcomingBiometricsCount: number;
            upcomingInterviewsCount: number;
        };
        CitizenImmigrationStatusSummaryDto: {
            disclaimer: string;
            publicMessage?: string;
            verifiedStatusLabel: string;
        };
        CitizenIncidentReportItemDto: {
            isVerified: boolean;
            locationDescription: string | null;
            reporterIdentityRedacted: boolean;
            summaryLabel: string;
            /** @description 'verified' or 'unverified' */
            verificationLabel: string;
            verificationStatus: string;
        };
        CitizenIncidentReportsResponseDto: {
            items: components["schemas"]["CitizenIncidentReportItemDto"][];
        };
        CitizenInstitutionDto: {
            id: string;
            name: string;
        };
        CitizenMeResponseDto: {
            accountAssurance: components["schemas"]["CitizenAccountAssuranceDto"];
            classification: components["schemas"]["CitizenClassificationDto"];
            communicationPreferences: components["schemas"]["CitizenCommunicationPreferenceDto"][];
            disclaimer: components["schemas"]["LocalizedLabelDto"];
            organizationRelationships: components["schemas"]["CitizenOrganizationRelationshipDto"][];
            profile: components["schemas"]["CitizenProfileSummaryDto"];
            representationRelationships: components["schemas"]["CitizenRepresentationRelationshipDto"][];
        };
        CitizenMessageAcknowledgmentResponseDto: {
            disclaimer: string;
            messageId: string;
            receiptId: string;
            receivedAt: string;
        };
        CitizenMessageDeliveryDto: {
            /** @enum {string} */
            channelType: "EMAIL" | "SMS" | "PORTAL" | "POSTAL" | "IN_PERSON" | "GOVERNMENT_SECURE_MESSAGING" | "OTHER";
            completedAt?: string;
            id: string;
            status: string;
        };
        CitizenMessageDetailDto: {
            acknowledged: boolean;
            body: string;
            caseId?: string;
            /** @enum {string} */
            channelType: "EMAIL" | "SMS" | "PORTAL" | "POSTAL" | "IN_PERSON" | "GOVERNMENT_SECURE_MESSAGING" | "OTHER";
            decisionNoticeReference?: string;
            deliveredAt?: string;
            deliveries: components["schemas"]["CitizenMessageDeliveryDto"][];
            id: string;
            messageReference: string;
            /** @enum {string} */
            status: "DRAFT" | "APPROVED" | "QUEUED" | "DELIVERING" | "DELIVERED" | "PARTIALLY_DELIVERED" | "FAILED" | "CANCELLED";
            subject: string;
        };
        CitizenMessageSummaryDto: {
            acknowledged: boolean;
            caseId?: string;
            /** @enum {string} */
            channelType: "EMAIL" | "SMS" | "PORTAL" | "POSTAL" | "IN_PERSON" | "GOVERNMENT_SECURE_MESSAGING" | "OTHER";
            deliveredAt?: string;
            id: string;
            messageReference: string;
            /** @enum {string} */
            status: "DRAFT" | "APPROVED" | "QUEUED" | "DELIVERING" | "DELIVERED" | "PARTIALLY_DELIVERED" | "FAILED" | "CANCELLED";
            subject: string;
        };
        CitizenOrganizationRelationshipDto: {
            membershipRole: string;
            membershipStatus: string;
            organizationId: string;
            organizationName: string;
        };
        CitizenPaymentDetailDto: {
            amountPaidCents: number;
            balanceCents: number;
            currency: string;
            disclaimer: string;
            disputes: components["schemas"]["CitizenPaymentDisputeDto"][];
            dueAt?: string;
            feeAssessment: components["schemas"]["CitizenPaymentFeeAssessmentDto"];
            id: string;
            invoiceNumber: string;
            issuedAt?: string;
            lines: components["schemas"]["CitizenPaymentLineDto"][];
            paymentIntents: components["schemas"]["CitizenPaymentIntentSummaryDto"][];
            receipts: components["schemas"]["CitizenPaymentReceiptDto"][];
            refunds: components["schemas"]["CitizenPaymentRefundDto"][];
            relatedCaseId?: string;
            /** @enum {string} */
            status: "DRAFT" | "ISSUED" | "PARTIALLY_PAID" | "PAID" | "OVERDUE" | "CANCELLED" | "WRITTEN_OFF";
            totalAmountCents: number;
        };
        CitizenPaymentDisputeDto: {
            amountCents: number;
            disputeReference: string;
            id: string;
            reason: string;
            status: string;
        };
        CitizenPaymentFeeAssessmentDto: {
            assessmentReference: string;
            currency: string;
            totalAmountCents: number;
        };
        CitizenPaymentIntentResponseDto: {
            amountCents: number;
            currency: string;
            disclaimer: string;
            id: string;
            intentReference: string;
            invoiceId: string;
            status: string;
        };
        CitizenPaymentIntentSummaryDto: {
            amountCents: number;
            id: string;
            intentReference: string;
            status: string;
        };
        CitizenPaymentLineDto: {
            description: string;
            lineAmountCents: number;
            lineCode: string;
        };
        CitizenPaymentReceiptDto: {
            id: string;
            issuedAt: string;
            receiptNumber: string;
        };
        CitizenPaymentRefundDto: {
            id: string;
            reason: string;
            requestedAmountCents: number;
            status: string;
        };
        CitizenPaymentSummaryDto: {
            amountPaidCents: number;
            balanceCents: number;
            currency: string;
            disclaimer: string;
            disputes: components["schemas"]["CitizenPaymentDisputeDto"][];
            dueAt?: string;
            feeAssessment: components["schemas"]["CitizenPaymentFeeAssessmentDto"];
            id: string;
            invoiceNumber: string;
            issuedAt?: string;
            receipts: components["schemas"]["CitizenPaymentReceiptDto"][];
            refunds: components["schemas"]["CitizenPaymentRefundDto"][];
            relatedCaseId?: string;
            /** @enum {string} */
            status: "DRAFT" | "ISSUED" | "PARTIALLY_PAID" | "PAID" | "OVERDUE" | "CANCELLED" | "WRITTEN_OFF";
            totalAmountCents: number;
        };
        CitizenPendingVehicleTransferDto: {
            decisionRequired: boolean;
            transferReference: string;
        };
        CitizenProfileSummaryDto: {
            displayName: string;
            familyName?: string;
            givenName?: string;
            identityId: string;
        };
        CitizenPropertyActionsResponseDto: {
            activeEncumbrances: number;
            pendingApplications: number;
            suggestedActions: string[];
        };
        CitizenPropertyDocumentItemDto: {
            certificateReference: string;
            registryVersionNumber: number;
            /** @enum {string} */
            status: "DRAFT" | "PENDING_ISSUANCE" | "ISSUED" | "REVOKED";
        };
        CitizenPropertyHomeResponseDto: {
            disclaimer: string;
            generatedAt: string;
            parcelCount: number;
            parcels: components["schemas"]["CitizenPropertyParcelSummaryDto"][];
            /** @enum {string} */
            ruleEnvironment: "NON_PRODUCTION";
        };
        CitizenPropertyInterestItemDto: {
            interestId: string;
            /** @enum {string} */
            interestKind: "OWNER" | "LEASEHOLDER" | "MORTGAGEE" | "EASEMENT_HOLDER" | "OTHER";
            parcelReference: string;
            /** @enum {string} */
            registryStatus: "DRAFT" | "REGISTERED" | "PENDING_SUBDIVISION" | "PENDING_CONSOLIDATION" | "SUPERSEDED" | "SEALED";
            titleSummary: string;
        };
        CitizenPropertyParcelSummaryDto: {
            parcelId: string;
            parcelReference: string;
            /** @enum {string} */
            registryStatus: "DRAFT" | "REGISTERED" | "PENDING_SUBDIVISION" | "PENDING_CONSOLIDATION" | "SUPERSEDED" | "SEALED";
            relationshipSummary: string;
        };
        CitizenPublicSafetyActionItemDto: {
            actionCode: string;
            blockedEmergencyAlertIssuance: boolean;
            requestReference: string;
            serviceTemplateCode: string;
        };
        CitizenPublicSafetyActionsResponseDto: {
            availableActions: components["schemas"]["CitizenPublicSafetyActionItemDto"][];
            disclaimer: string;
            forbiddenActions: string[];
        };
        CitizenPublicSafetyHomeResponseDto: {
            assistanceRequestCount: number;
            disclaimer: string;
            incidentReportCount: number;
            openActionCount: number;
            publicEmergencyEventCount: number;
            /** @enum {string} */
            ruleEnvironment: "NON_PRODUCTION";
        };
        CitizenRecoveryAssistanceItemDto: {
            applicationReference: string;
            isIncidentReport: boolean;
            isRecoveryProgram: boolean;
            programCode: string;
            /** @enum {string} */
            status: "DRAFT" | "SUBMITTED" | "UNDER_REVIEW" | "CLOSED";
        };
        CitizenRecoveryAssistanceResponseDto: {
            items: components["schemas"]["CitizenRecoveryAssistanceItemDto"][];
        };
        CitizenRelatedServiceDto: {
            caseId?: string;
            caseReference?: string;
            serviceName?: string;
        };
        CitizenRenewalProjectionDto: {
            eligible: boolean;
            nextStep?: string;
            reason?: string;
        };
        CitizenRenewalQueueItemDto: {
            daysUntilExpiry?: number;
            disclaimer: string;
            effectiveUntil?: string;
            instrumentId: string;
            instrumentNumber?: string;
            instrumentType?: string;
            issuer: components["schemas"]["CitizenInstitutionDto"];
            nextStep?: string;
            renewalEligible: boolean;
            renewalReason?: string;
            /** @enum {string} */
            status: "DRAFT" | "PENDING_ISSUANCE" | "ISSUED" | "EFFECTIVE" | "SUSPENDED" | "PARTIALLY_SUSPENDED" | "REVOCATION_DECIDED" | "REVOKED" | "REINSTATED" | "EXPIRED" | "SURRENDERED" | "SUPERSEDED" | "AMENDED" | "VARIED" | "RENEWED" | "REPLACED" | "CLOSED";
        };
        CitizenRepresentationRelationshipDto: {
            effectiveFrom: string;
            effectiveUntil?: string;
            organizationId: string;
            organizationName: string;
            representativeAuthorityId: string;
            scopeDescription: string;
            status: string;
        };
        CitizenRevenueActionDto: {
            actionCode: string;
            label: string;
            /** @description HIGH, MEDIUM or LOW */
            priority: string;
        };
        CitizenRevenueActionsResponseDto: {
            actions: components["schemas"]["CitizenRevenueActionDto"][];
            generatedAt: string;
        };
        CitizenRevenueHomeResponseDto: {
            accountNumber: string;
            activeTaxAccounts: components["schemas"]["CitizenTaxAccountSummaryDto"][];
            assessments: components["schemas"]["CitizenTaxAssessmentSummaryDto"][];
            complianceClearance: components["schemas"]["CitizenTaxClearanceSummaryDto"][];
            disclaimer: string;
            disputes: components["schemas"]["TaxObjectionRecordDto"][];
            generatedAt: string;
            outstandingBalanceCents: number;
            /** @description Number of draft returns awaiting filing */
            outstandingReturns: number;
            paymentDoesNotAlterAssessment: boolean;
            paymentPlans: components["schemas"]["TaxPaymentPlanRecordDto"][];
            refunds: components["schemas"]["CitizenTaxRefundSummaryDto"][];
            /** @enum {string|null} */
            registrationStatus: "DRAFT" | "SUBMITTED" | "UNDER_REVIEW" | "REGISTERED" | "REJECTED" | "SUSPENDED" | "CLOSED" | null;
            /** @enum {string} */
            ruleEnvironment: "NON_PRODUCTION";
            taxpayerAccountId: string;
            taxpayerIdentifier: string;
            upcomingObligations: components["schemas"]["CitizenTaxObligationSummaryDto"][];
        };
        CitizenScheduledDriverTestDto: {
            appointmentReference: string | null;
            /** @enum {string} */
            outcome: "PASSED" | "FAILED" | "INCOMPLETE" | "CANCELLED" | "WAIVED_CONFIGURED";
            scheduledStartsAt: string | null;
            testReference: string;
        };
        CitizenServiceRecommendationDto: {
            publicName: string;
            recommendationReason: components["schemas"]["LocalizedLabelDto"];
            serviceId: string;
            serviceSlug: string;
        };
        CitizenStartExperienceResponseDto: {
            applicationCapable: boolean;
            conditionalChecklist: components["schemas"]["PublicServiceChecklistItemDto"][];
            configurationFingerprint: string;
            declarations: components["schemas"]["FormDeclarationOptionsDto"][];
            dependencySummary: ({
                [key: string]: unknown;
            } | unknown[] | string | number | boolean) | null;
            eligibilityGuidance: components["schemas"]["PublicServiceEligibilityGuidanceDto"][];
            expectedNextStep: string;
            expectedStagesSummary: components["schemas"]["PublicServiceStageDto"][];
            feeDefinitions: components["schemas"]["PublicServiceFeeDto"][];
            formDefinitionId: string | null;
            formSchema: components["schemas"]["RenderedFormSchemaDto"] | null;
            formVersionId: string | null;
            outputDefinitions: components["schemas"]["PublicServiceOutputDto"][];
            publicDisclaimers: string[];
            redressRoutes: components["schemas"]["PublicServiceRedressRouteDto"][];
            requiredFields: string[];
            /** @enum {string} */
            serviceAvailability: "HIDDEN" | "INFORMATION_ONLY" | "PRE_APPLICATION" | "PILOT_ONLY" | "ACTIVE" | "SUSPENDED" | "UNAVAILABLE" | "UNDER_DEVELOPMENT";
            serviceId: string;
            serviceSlug: string;
            serviceVersionId: string;
            versionLabel: string;
        };
        CitizenTaxAccountItemDto: {
            /** @enum {string} */
            accountKind: "INDIVIDUAL" | "BUSINESS" | "OTHER_REGISTERED";
            accountNumber: string;
            displayName: string;
            taxpayerAccountId: string;
        };
        CitizenTaxAccountsResponseDto: {
            items: components["schemas"]["CitizenTaxAccountItemDto"][];
        };
        CitizenTaxAccountSummaryDto: {
            accountId: string;
            /** @enum {string} */
            accountKind: "INDIVIDUAL" | "BUSINESS" | "OTHER_REGISTERED";
            accountNumber: string;
            displayName: string;
        };
        CitizenTaxAssessmentSummaryDto: {
            assessmentId: string;
            assessmentReference: string;
            /** @enum {string} */
            status: "PROPOSED" | "ISSUED" | "AMENDED" | "SUPERSEDED" | "CANCELLED";
        };
        CitizenTaxClearanceSummaryDto: {
            requestId: string;
            /** @enum {string} */
            status: "REQUESTED" | "UNDER_REVIEW" | "ISSUED" | "DENIED" | "EXPIRED";
        };
        CitizenTaxObligationsResponseDto: {
            authoritativeOnly: boolean;
            note: string;
            obligations: components["schemas"]["TaxObligationRecordDto"][];
            outstandingBalanceCents: number;
        };
        CitizenTaxObligationSummaryDto: {
            description: string;
            dueDate: string | null;
            obligationCode: string;
            obligationId: string;
            /** @enum {string} */
            status: "ACTIVE" | "SUSPENDED" | "FULFILLED" | "CLOSED";
        };
        CitizenTaxPaymentItemDto: {
            allocatedAmountCents: number;
            /** Format: date-time */
            allocatedAt: string;
            /** Format: date-time */
            createdAt: string;
            id: string;
            paymentAllocationId: string | null;
            paymentTransaction: components["schemas"]["PaymentTransactionRecordDto"];
            paymentTransactionId: string;
            taxLiability: components["schemas"]["TaxLiabilityRecordDto"];
            taxLiabilityId: string;
            /** Format: date-time */
            updatedAt: string;
        };
        CitizenTaxRefundSummaryDto: {
            refundClaimId: string;
            requestedAmountCents: number;
            /** @enum {string} */
            status: "REQUESTED" | "UNDER_REVIEW" | "APPROVED_FOR_PROCESSING" | "DENIED" | "WITHDRAWN";
        };
        CitizenTaxReturnsPaginationDto: {
            page: number;
            pageSize: number;
            totalItems: number;
        };
        CitizenTaxReturnsResponseDto: {
            items: components["schemas"]["TaxReturnWithVersionDto"][];
            pagination: components["schemas"]["CitizenTaxReturnsPaginationDto"];
        };
        CitizenTransportationActionDto: {
            actionCode: string;
            label: string;
            /** @description HIGH, MEDIUM or LOW */
            priority: string;
        };
        CitizenTransportationActionsResponseDto: {
            actions: components["schemas"]["CitizenTransportationActionDto"][];
            generatedAt: string;
        };
        CitizenTransportationHomeResponseDto: {
            disclaimer: string;
            driverLicense: components["schemas"]["CitizenDriverLicenseSummaryDto"] | null;
            generatedAt: string;
            /** @description Transportation messages are not yet projected; always an empty list */
            governmentMessages: unknown[];
            /** @description Transportation payments are not yet projected; always an empty list */
            payments: unknown[];
            pendingTransfers: components["schemas"]["CitizenPendingVehicleTransferDto"][];
            renewalActionsAvailable: boolean;
            ruleEnvironment: string;
            scheduledTests: components["schemas"]["CitizenScheduledDriverTestDto"][];
            vehicles: components["schemas"]["CitizenVehicleHomeItemDto"][];
        };
        CitizenTreatmentApplicationItemDto: {
            /** @enum {string} */
            administrativeEligibilityOutcome: "NOT_EVALUATED" | "ADMINISTRATIVELY_ELIGIBLE" | "ADMINISTRATIVELY_INELIGIBLE" | "DEFERRED";
            applicationNumber: string;
            consentReference: string | null;
            notTreatmentAuthorization: boolean;
            programCode: string;
            programName: string;
            /** @enum {string} */
            status: "DRAFT" | "SUBMITTED" | "UNDER_ADMIN_REVIEW" | "PENDING_CLINICAL_REVIEW" | "CLOSED" | "WITHDRAWN";
        };
        CitizenTreatmentEnrollmentItemDto: {
            enrollmentNumber: string;
            notClinicalOutcome: boolean;
            programCode: string;
            programName: string;
            /** @description Omitted when no status projection exists */
            publicStatusLabel?: string;
            /** @enum {string} */
            status: "PROPOSED" | "ACTIVE" | "SUSPENDED" | "COMPLETED" | "WITHDRAWN" | "TERMINATED";
            trialOpportunitySeparate: boolean;
        };
        CitizenTreatmentProgramItemDto: {
            description: string | null;
            discoveryOnly: boolean;
            doesNotRecommendTreatment: boolean;
            isDiscoveryOnly: boolean;
            /** @enum {string} */
            lifecycleStatus: "DRAFT" | "PUBLISHED" | "SUSPENDED" | "RETIRED";
            name: string;
            notMedicalRecommendation: boolean;
            programCode: string;
            /** @enum {string} */
            programKind: "GOVERNMENT" | "SPECIALIST" | "REFERRAL" | "ELECTIVE" | "SUBSIDIZED" | "PUBLIC_HEALTH" | "MEDICAL_ASSISTANCE";
        };
        CitizenTreatmentProgramsResponseDto: {
            disclaimer: string;
            items: components["schemas"]["CitizenTreatmentProgramItemDto"][];
        };
        CitizenTreatmentReferralItemDto: {
            notEnrollment: boolean;
            notGuaranteedEnrollment: boolean;
            programCode: string;
            referralNumber: string;
            /** @enum {string} */
            status: "REQUESTED" | "SENT" | "RECEIVED" | "DECLINED" | "WITHDRAWN";
        };
        CitizenTreatmentReferralsResponseDto: {
            items: components["schemas"]["CitizenTreatmentReferralItemDto"][];
        };
        CitizenTreatmentScreeningItemDto: {
            /** Format: date-time */
            scheduledAt: string | null;
            screeningNumber: string;
            /** @enum {string} */
            status: "SCHEDULED" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED";
            summary: string | null;
        };
        CitizenTreatmentsResponseDto: {
            enrollments: components["schemas"]["CitizenTreatmentEnrollmentItemDto"][];
            screenings: components["schemas"]["CitizenTreatmentScreeningItemDto"][];
            trialOpportunities: components["schemas"]["CitizenTreatmentEnrollmentItemDto"][];
        };
        CitizenVehicleApplicationItemDto: {
            applicationId: string;
            caseId: string;
            /** @enum {string} */
            caseStatus: "RECEIVED" | "INTAKE" | "OPEN" | "IN_PROGRESS" | "COMPLETENESS_REVIEW" | "WAITING_APPLICANT" | "SUBSTANTIVE_REVIEW" | "PENDING_EXTERNAL" | "PENDING_INTERNAL" | "REFERRAL_PENDING" | "PROFESSIONAL_REVIEW" | "INSPECTION" | "DECISION_PENDING" | "DECIDED" | "ISSUED" | "SAFE_HALTED" | "SAFE_HALT" | "SUSPENDED" | "WITHDRAWN" | "CLOSED" | "ARCHIVED";
            serviceCode: string;
        };
        CitizenVehicleHomeItemDto: {
            expiresAt: string | null;
            /** @description Latest inspection result code, or 'UNKNOWN' */
            inspectionStatus: string;
            lastInspectionAt: string | null;
            /** @description Registration lifecycle status, or 'UNKNOWN' */
            registrationStatus: string;
            vehicleRecordId: string;
            vehicleReferenceNumber: string;
        };
        CitizenVehicleItemDto: {
            /** @description Registration lifecycle status, or 'UNKNOWN' */
            registrationStatus: string;
            vehicleRecordId: string;
            vehicleReferenceNumber: string;
        };
        CitizenVitalRecordSummaryDto: {
            eventType: string;
            id: string;
            institutionName: string;
            isRestricted: boolean;
            isSealed: boolean;
            recordNumber: string;
            registryVersionNumber?: number;
            /** @enum {string} */
            status: "SUBMISSION_PENDING" | "OFFICIAL" | "CORRECTED" | "SEALED" | "RESTRICTED";
            summaryLabel?: string | null;
        };
        ClinicalTrialCodeLabelDto: {
            code: string;
            label: string;
        };
        ClinicalTrialConditionDto: {
            categoryCode: string | null;
            code: string;
            label: string;
        };
        ClinicalTrialEligibilityCriterionDto: {
            criterionCode: string;
            isInclusion: boolean;
            sortOrder: number;
            summary: string;
        };
        ClinicalTrialSponsorDto: {
            displayName: string;
            sponsorReference: string;
        };
        CloneServicePackTemplateDto: {
            /** Format: uuid */
            responsibleOwnerIdentityId?: string;
            /** Format: uuid */
            sourceVersionId: string;
            /** Format: uuid */
            targetInstitutionId: string;
            /** Format: uuid */
            targetJurisdictionId: string;
            /** @example immigration-services-pack-bb-template */
            targetPackCode: string;
            /** @example Immigration Services Pack (Barbados Template) */
            targetPackName: string;
        };
        CompleteServiceAppointmentDto: {
            outcomeNotes?: string;
        };
        CreateApplicationDto: Record<string, never>;
        CreateAppointmentDto: {
            effectiveFrom: string;
            effectiveUntil?: string;
            /** Format: uuid */
            officeholderId: string;
            /** Format: uuid */
            officeId: string;
            /**
             * @default PENDING
             * @enum {string}
             */
            status: "PENDING" | "ACTIVE" | "SUSPENDED" | "ENDED" | "REVOKED";
        };
        CreateAppointmentLocationDto: Record<string, never>;
        CreateAppointmentReasonDto: Record<string, never>;
        CreateAppointmentResourceDto: Record<string, never>;
        CreateAppointmentSlotDto: Record<string, never>;
        CreateAuthenticationMethodDto: {
            /**
             * @default NONE
             * @enum {string}
             */
            assuranceLevel: "NONE" | "LOW" | "MEDIUM" | "HIGH";
            /** Format: uuid */
            identityId: string;
            /** @default true */
            isEnabled: boolean;
            oidcAudience?: string;
            oidcClientId?: string;
            oidcIssuer?: string;
            /** @enum {string} */
            type: "PASSWORD" | "OIDC" | "SERVICE_API_KEY" | "MFA_TOTP";
        };
        CreateCapabilityDefinitionDto: {
            code: string;
            description?: string;
            name: string;
            subjectReferenceId?: string;
            /** @enum {string} */
            subjectType: "DEPARTMENT" | "SERVICE" | "FUNCTION" | "WORKFLOW" | "INTEGRATION" | "ENVIRONMENT" | "APPLICATION" | "ISSUANCE_FUNCTION" | "AI_USE_CASE" | "AI_AGENT" | "DIGITAL_TWIN" | "PAYMENT_CAPABILITY" | "COMMUNICATION_CAPABILITY" | "REPORTING_CAPABILITY" | "SECURITY_CAPABILITY" | "OTHER_CONTROLLED_CAPABILITY";
        };
        CreateCapabilityVersionDto: {
            capabilityDefinitionId: string;
            description?: string;
            releaseReference?: string;
            setAsCurrent?: boolean;
            versionNumber: string;
        };
        CreateCaseCommunicationDto: {
            body: string;
            /** @enum {string} */
            channel: "PORTAL" | "EMAIL" | "SMS" | "POSTAL" | "COUNTER" | "SYSTEM";
            /** @enum {string} */
            classification?: "PUBLIC" | "OFFICIAL" | "INTERNAL" | "RESTRICTED" | "PRIVILEGED";
            /** @enum {string} */
            communicationType: "APPLICANT_MESSAGE" | "DEFICIENCY_NOTICE" | "REQUEST_FOR_INFORMATION" | "STATUS_UPDATE" | "REFERRAL_NOTICE" | "INTERNAL_NOTE" | "EXTERNAL_CORRESPONDENCE" | "SYSTEM_NOTICE";
            /** @enum {string} */
            publicVisibility?: "INTERNAL" | "OFFICIAL" | "APPLICANT_VISIBLE";
            recipientReference?: string;
            /** @enum {string} */
            recipientType: "APPLICANT" | "OFFICEHOLDER" | "DEPARTMENT" | "EXTERNAL_AUTHORITY" | "INTERNAL" | "SYSTEM";
            senderIdentityId?: string;
            senderOfficeholderId?: string;
            subject?: string;
            templateReference?: string;
            templateVersion?: string;
        };
        CreateCaseMilestoneDto: {
            dependencyReference?: string;
            name: string;
            responsiblePartyRef?: string;
            sourceSlaReference?: string;
            /** @enum {string} */
            status?: "UPCOMING" | "IN_PROGRESS" | "AT_RISK" | "DELAYED" | "COMPLETED" | "CANCELLED";
            targetDate?: string;
        };
        CreateCitizenApplicationDto: {
            /** @enum {string} */
            applicantCategory: "INDIVIDUAL" | "CITIZEN" | "RESIDENT" | "NON_RESIDENT" | "BUSINESS" | "COMPANY" | "INVESTOR" | "EMPLOYER" | "EMPLOYEE" | "AUTHORIZED_REPRESENTATIVE" | "PROFESSIONAL" | "GOVERNMENT_ENTITY" | "PARTNER_ORGANIZATION" | "OTHER";
            /** @description Configuration fingerprint returned by the service start package */
            configurationFingerprint: string;
            /** @description Draft form answers keyed by form field key */
            draftAnswers?: {
                [key: string]: unknown;
            };
            /**
             * Format: uuid
             * @description Organization applied for; requires a representative authority
             */
            organizationId?: string;
            /**
             * Format: uuid
             * @description Representative authority under which the citizen acts for the organization
             */
            representativeAuthorityId?: string;
            /**
             * Format: uuid
             * @description Pin to the service version returned by the start package
             */
            serviceVersionId?: string;
        };
        CreateComplianceMatterDto: {
            caseId?: string;
            holderIdentityId?: string;
            holderOrganizationId?: string;
            masterAdministrativeFileId: string;
            officialInstrumentId: string;
            responsibleDepartmentId: string;
            responsibleInstitutionId: string;
        };
        CreateCredentialDto: {
            /** Format: uuid */
            identityId: string;
            oidcProvider?: string;
            oidcSubject?: string;
            /** @description Plaintext password — hashed before storage, never persisted */
            password?: string;
            /**
             * @default ACTIVE
             * @enum {string}
             */
            status: "PENDING" | "ACTIVE" | "REVOKED";
            /** @enum {string} */
            type: "PASSWORD" | "OIDC" | "API_KEY" | "MFA_TOTP";
        };
        CreateDecisionPreparationDto: {
            aiAssistanceMetadata?: Record<string, never>;
            /** Format: uuid */
            caseId: string;
            /** Format: uuid */
            decisionTypeVersionId: string;
            proposedFindings?: string;
            proposedOutcome?: string;
            proposedReasons?: string;
            recommendation?: string;
        };
        CreateDelegationDto: {
            /** Format: uuid */
            delegatorOfficeholderId?: string;
            /** Format: uuid */
            delegatorOfficeId?: string;
            effectiveFrom: string;
            effectiveUntil?: string;
            /** Format: uuid */
            institutionId: string;
            /** Format: uuid */
            recipientOfficeholderId?: string;
            /** Format: uuid */
            recipientOfficeId?: string;
            scopeDescription: string;
            /**
             * @default PENDING
             * @enum {string}
             */
            status: "PENDING" | "ACTIVE" | "SUSPENDED" | "REVOKED" | "ENDED";
        };
        CreateDepartmentDto: {
            /** @example CODE-01 */
            code: string;
            description?: string;
            /** Format: uuid */
            institutionId: string;
            /** @example Example name */
            name: string;
            /**
             * @default ACTIVE
             * @enum {string}
             */
            status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
        };
        CreateDocumentRecordDto: Record<string, never>;
        CreateEvidencePacketDto: {
            /** Format: uuid */
            caseId?: string;
            /** @description Stable external project reference when purpose is PROJECT_READINESS */
            externalProjectReference?: string;
            /** Format: uuid */
            masterAdministrativeFileId: string;
            /** @enum {string} */
            purpose: "SUBSTANTIVE_REVIEW" | "PROFESSIONAL_REVIEW" | "INSPECTION_REVIEW" | "EXTERNAL_REFERRAL" | "DECISION_SUPPORT" | "APPEAL_RECORD" | "COMPLIANCE_REVIEW" | "PROJECT_READINESS" | "OTHER_CONTROLLED_PURPOSE";
            questionOrIssue: string;
            /** Format: uuid */
            responsibleDepartmentId: string;
        };
        CreateExternalAuthorityDto: {
            /** @example EPA-US */
            code: string;
            description?: string;
            /** @example United States Environmental Protection Agency */
            name: string;
            /**
             * @default ACTIVE
             * @enum {string}
             */
            status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
            /** @enum {string} */
            type: "GOVERNMENT" | "REGULATORY" | "JUDICIAL" | "PROFESSIONAL" | "INSTITUTIONAL" | "OTHER";
        };
        CreateExternalReviewReferralDto: Record<string, never>;
        CreateFormConditionalRuleDto: {
            /** @enum {string} */
            action: "SHOW" | "HIDE" | "REQUIRE" | "OPTIONAL";
            conditions: components["schemas"]["CreateFormConditionClauseDto"][];
            /** @default 0 */
            displayOrder: number;
            /**
             * @default AND
             * @enum {string}
             */
            logic: "AND" | "OR";
        };
        CreateFormConditionClauseDto: {
            /** @example has_partner */
            fieldKey: string;
            /** @enum {string} */
            operator: "EQUALS" | "NOT_EQUALS" | "IN" | "NOT_IN" | "IS_EMPTY" | "IS_NOT_EMPTY" | "GREATER_THAN" | "LESS_THAN" | "GREATER_THAN_OR_EQUAL" | "LESS_THAN_OR_EQUAL";
            value?: Record<string, never>;
        };
        CreateFormDefinitionDto: {
            /** @example business-license-application */
            code: string;
            /** Format: uuid */
            governmentServiceVersionId: string;
            /** @example Business License Application Form */
            name: string;
            /** @example Collects applicant details for business license intake */
            purpose?: string;
            /** @enum {string} */
            status?: "DRAFT" | "ACTIVE" | "INACTIVE" | "ARCHIVED";
        };
        CreateFormFieldDto: {
            conditionalRules?: components["schemas"]["CreateFormConditionalRuleDto"][];
            /**
             * @default PUBLIC
             * @enum {string}
             */
            dataClassification: "PUBLIC" | "INTERNAL" | "RESTRICTED" | "SENSITIVE";
            defaultValue?: Record<string, never>;
            /**
             * @example {
             *       "default": "Legal name as shown on ID"
             *     }
             */
            description?: Record<string, never>;
            /** @example 1 */
            displayOrder: number;
            /** @example full_name */
            fieldKey: string;
            /** @enum {string} */
            fieldType: "TEXT" | "TEXTAREA" | "NUMBER" | "INTEGER" | "DECIMAL" | "DATE" | "DATETIME" | "BOOLEAN" | "SELECT" | "MULTISELECT" | "RADIO" | "CHECKBOX" | "EMAIL" | "PHONE" | "COUNTRY" | "CURRENCY" | "ADDRESS" | "IDENTIFIER" | "FILE_REFERENCE" | "DECLARATION" | "INFORMATION_DISPLAY";
            /**
             * @example {
             *       "default": "Full Name"
             *     }
             */
            label: Record<string, never>;
            options?: {
                [key: string]: unknown;
            };
            /**
             * @example {
             *       "default": "Enter your full name"
             *     }
             */
            placeholder?: Record<string, never>;
            /** @default false */
            required: boolean;
            sourceMetadata?: {
                [key: string]: unknown;
            };
            validationDefinition?: {
                [key: string]: unknown;
            };
        };
        CreateFormSectionDto: {
            /**
             * @example {
             *       "default": "Provide your personal information"
             *     }
             */
            description?: Record<string, never>;
            /** @example 1 */
            displayOrder: number;
            fields: components["schemas"]["CreateFormFieldDto"][];
            /** @example applicant-details */
            sectionKey: string;
            /**
             * @example {
             *       "default": "Applicant Details"
             *     }
             */
            title: Record<string, never>;
        };
        CreateFormVersionDto: {
            effectiveFrom?: string;
            effectiveUntil?: string;
            /** Format: uuid */
            formDefinitionId: string;
            /**
             * @example {
             *       "default": "Complete all required sections before continuing."
             *     }
             */
            instructions?: Record<string, never>;
            sections: components["schemas"]["CreateFormSectionDto"][];
            /**
             * @example {
             *       "default": "Business License Application",
             *       "translations": {
             *         "en": "Business License Application"
             *       }
             *     }
             */
            title: Record<string, never>;
            /** @example 1 */
            version?: number;
        };
        CreateFunctionAuthorityRecordDto: {
            /** @enum {string} */
            classification: "ABSEZ_OWNED" | "ABSEZ_DELEGATED" | "INSTITUTION_OWNED" | "INSTITUTION_DELEGATED" | "EXPRESSLY_RETAINED_NATIONAL" | "SHARED_OR_COORDINATED" | "RESERVED_PROFESSIONAL" | "ADMINISTRATIVE_SUPPORT" | "TECHNOLOGY_ASSISTED" | "PROHIBITED_OR_UNAUTHORIZED";
            code: string;
            description?: string;
            /** @enum {string} */
            functionClass: "LICENSING" | "APPROVAL" | "INSPECTION" | "REGISTRATION" | "ENFORCEMENT" | "ADVISORY" | "ADMINISTRATIVE" | "INFORMATIONAL" | "OTHER";
            /** Format: uuid */
            institutionId?: string;
            name: string;
            /** Format: uuid */
            officeId?: string;
            requiresAppointment?: boolean;
            requiresDelegation?: boolean;
        };
        CreateGoverningSourceDto: {
            code: string;
            content: string;
            effectiveFrom: string;
            effectiveUntil?: string;
            title: string;
            versionLabel: string;
        };
        CreateGovernmentBodyDto: {
            /** @example CODE-01 */
            code: string;
            description?: string;
            /** Format: uuid */
            institutionId: string;
            /** @example Example name */
            name: string;
            /**
             * @default ACTIVE
             * @enum {string}
             */
            status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
            /** @enum {string} */
            type: "GOVERNING" | "SUPERVISORY" | "ADVISORY" | "ADMINISTRATIVE" | "DECISION_MAKING" | "OTHER";
        };
        CreateGovernmentServiceDto: {
            /** @example CORP-REG-001 */
            code: string;
            /** @example Corporate Registration Service */
            officialName: string;
            /** @example Register Your Business */
            publicName: string;
            /** Format: uuid */
            responsibleDepartmentId: string;
            /** Format: uuid */
            responsibleInstitutionId: string;
            /** Format: uuid */
            serviceFamilyId: string;
            /** @example corporate-registration */
            slug: string;
            summary?: string;
        };
        CreateGovernmentServiceVersionDto: {
            applicantCategories?: ("INDIVIDUAL" | "CITIZEN" | "RESIDENT" | "NON_RESIDENT" | "BUSINESS" | "COMPANY" | "INVESTOR" | "EMPLOYER" | "EMPLOYEE" | "AUTHORIZED_REPRESENTATIVE" | "PROFESSIONAL" | "GOVERNMENT_ENTITY" | "PARTNER_ORGANIZATION" | "OTHER")[];
            coveredActivities?: string;
            /** Format: date-time */
            effectiveFrom?: string;
            /** Format: date-time */
            effectiveUntil?: string;
            excludedActivities?: string;
            geographicScope?: string;
            /** Format: date-time */
            informationLastVerifiedAt?: string;
            /**
             * @default HIDDEN
             * @enum {string}
             */
            publicAvailability: "HIDDEN" | "INFORMATION_ONLY" | "PRE_APPLICATION" | "PILOT_ONLY" | "ACTIVE" | "SUSPENDED" | "UNAVAILABLE" | "UNDER_DEVELOPMENT";
            publicDescription?: string;
            purpose?: string;
            typicalValidityDescription?: string;
            /** @example 1.0.0 */
            version: string;
        };
        CreateIdentityDto: {
            /** @example Jane Citizen */
            displayName: string;
            /** Format: uuid */
            organizationId?: string;
            /** Format: uuid */
            personId?: string;
            /** @enum {string} */
            type: "INDIVIDUAL" | "ORGANIZATION" | "SERVICE";
            /** Format: uuid */
            userAccountId?: string;
        };
        CreateInstitutionDto: {
            /** @example DOT */
            code: string;
            /** @example Federal transportation agency. */
            description?: string;
            /** Format: uuid */
            jurisdictionId: string;
            /** @example Department of Transportation */
            name: string;
            /**
             * @default ACTIVE
             * @enum {string}
             */
            status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
            /**
             * @example AGENCY
             * @enum {string}
             */
            type: "GOVERNMENT" | "MINISTRY" | "AGENCY" | "AUTHORITY" | "REGULATOR" | "STATUTORY_BODY" | "SPECIAL_ECONOMIC_ZONE_AUTHORITY" | "PUBLIC_BODY" | "OTHER";
        };
        CreateInstitutionExternalAuthorityDto: {
            effectiveFrom?: string;
            effectiveUntil?: string;
            /** Format: uuid */
            externalAuthorityId: string;
            /** Format: uuid */
            institutionId: string;
            relationshipLabel?: string;
            /**
             * @default ACTIVE
             * @enum {string}
             */
            status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
        };
        CreateJurisdictionDto: {
            /** @example US-FED */
            code: string;
            /** @example National jurisdiction for federal institutions. */
            description?: string;
            /** @example United States Federal Government */
            name: string;
            /**
             * @default ACTIVE
             * @enum {string}
             */
            status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
            /**
             * @example NATIONAL
             * @enum {string}
             */
            type: "NATIONAL" | "SUBNATIONAL" | "MUNICIPAL" | "SPECIAL_ECONOMIC_ZONE" | "REGULATORY" | "SUBJECT_MATTER" | "OTHER";
        };
        CreateLegalHoldDto: {
            /** @description Court order, statute or instruction requiring the hold */
            authorityReference: string;
            /** Format: date-time */
            effectiveFrom: string;
            holdNumber: string;
            reason: string;
            targets: components["schemas"]["LegalHoldTargetDto"][];
            title: string;
        };
        CreateMaturityAssessmentDto: {
            acceptsInstitutionalRisk?: boolean;
            authorityBasis?: string;
            capabilityDefinitionId: string;
            capabilityVersionId: string;
            environment?: string;
            evidence?: string[];
            institutionalOwnerId?: string;
            isTechnicalAdministrator?: boolean;
            /** @enum {string} */
            requestedMaturity: "CONCEPTUAL" | "DESIGNED" | "PROTOTYPED" | "PILOT_READY" | "PILOT_OPERATIONAL" | "PRODUCTION_READY" | "INSTITUTIONALLY_ACCEPTED" | "OPERATIONALLY_ACTIVATED" | "REVALIDATION_REQUIRED" | "REVALIDATED" | "SUSPENDED" | "RETIRED" | "REPLACED";
            scope?: string;
            technicalOwnerIdentityId?: string;
            usersPopulation?: string;
        };
        CreateMembershipDto: {
            /** Format: uuid */
            identityId: string;
            /** Format: uuid */
            organizationId: string;
            /** @example member */
            roleLabel?: string;
            /**
             * @default ACTIVE
             * @enum {string}
             */
            status: "PENDING" | "ACTIVE" | "SUSPENDED" | "REVOKED";
        };
        CreateMetricBaselineDto: {
            limitations?: string;
            /** @enum {string} */
            method?: "HISTORICAL_PERIOD" | "PEER_COMPARISON" | "POLICY_TARGET" | "AUTHORIZED_ESTIMATE" | "BASELINE_UNAVAILABLE";
            metricVersionId: string;
            /** Format: date-time */
            periodEnd: string;
            /** Format: date-time */
            periodStart: string;
            /** @enum {string} */
            qualityStatus?: "ACCEPTABLE" | "QUALIFIED" | "BASELINE_UNAVAILABLE" | "UNRELIABLE";
            sourceRecords?: Record<string, never>[];
            value?: string;
        };
        CreateMetricDefinitionDto: {
            /** @enum {string} */
            aggregationMethod: "COUNT" | "SUM" | "AVERAGE" | "MEDIAN" | "PERCENTILE" | "RATIO" | "RATE" | "OTHER_APPROVED";
            /** @default true */
            baselineRequired: boolean;
            /** @enum {string} */
            calculationMethod: "DETERMINISTIC_RULE" | "APPROVED_FORMULA_SPECIFICATION" | "MANUAL_AUTHORIZED_CALCULATION";
            /** @example AVG_PROCESSING_DAYS */
            code: string;
            description?: string;
            /** Format: date-time */
            effectiveFrom?: string;
            /** Format: date-time */
            effectiveUntil?: string;
            frameworkId: string;
            /** @enum {string} */
            metricCategory: "SERVICE_TIMELINESS" | "COMPLETENESS" | "DECISION_INTEGRITY" | "APPLICANT_EXPERIENCE" | "SECURITY_PRIVACY" | "OPERATIONAL_RESILIENCE" | "INSTITUTIONAL_COORDINATION" | "AI_GOVERNANCE" | "ECONOMIC_DEVELOPMENT" | "FINANCIAL" | "COMPLIANCE" | "REDRESS" | "INTEGRATION" | "WORKFORCE" | "OTHER_APPROVED";
            name: string;
            ownerDepartmentId?: string;
            ownerInstitutionId: string;
            purpose: string;
            qualityRequirements?: Record<string, never>;
            /** @enum {string} */
            reportingFrequency: "REAL_TIME" | "DAILY" | "WEEKLY" | "MONTHLY" | "QUARTERLY" | "ANNUAL" | "AD_HOC";
            scope: string;
            sourceRequirements: Record<string, never>[];
            /** @example days */
            unit: string;
        };
        CreateMetricDefinitionVersionDto: {
            dataQualityThresholds?: Record<string, never>;
            /** @enum {string} */
            dependencyTimeClassification?: "ABSEZ_CONTROLLED_TIME" | "INSTITUTION_CONTROLLED_TIME" | "APPLICANT_TIME" | "EXTERNAL_DEPENDENCY_TIME" | "PROFESSIONAL_DEPENDENCY_TIME" | "GOVERNMENT_RETAINED_TIME" | "SYSTEM_OUTAGE_TIME" | "EXCLUDED_AUTHORIZED_TIME";
            exclusions?: Record<string, never>[];
            formulaSpecification: Record<string, never>;
            inclusions?: Record<string, never>[];
            materialityThreshold?: string;
            percentileMethod?: string;
            revalidationIntervalDays?: number;
            roundingRule?: string;
            sourceDefinitions?: Record<string, never>[];
        };
        CreateNextFormVersionDto: {
            effectiveFrom?: string;
            effectiveUntil?: string;
            instructions?: Record<string, never>;
            sections: components["schemas"]["CreateFormSectionDto"][];
            /**
             * @example {
             *       "default": "Business License Application v2"
             *     }
             */
            title: Record<string, never>;
        };
        CreateObligationFromConditionDto: {
            complianceMatterId: string;
            dueDate?: string;
            evidenceStandard?: string;
            exceptionProcedureReference?: string;
            functionAuthorityRecordId?: string;
            noncomplianceConsequenceReference?: string;
            obligationCode: string;
            /** @enum {string} */
            obligationType: "REPORTING" | "FINANCIAL" | "INSURANCE" | "PROFESSIONAL_STATUS" | "ACTIVITY_RESTRICTION" | "OPERATING_CONDITION" | "WORKFORCE" | "ENVIRONMENTAL" | "SAFETY" | "CYBERSECURITY" | "MAINTENANCE" | "MILESTONE" | "INCIDENT_NOTIFICATION" | "INSPECTION" | "RECORDKEEPING" | "GOVERNMENT_CONFIRMATION" | "OTHER_AUTHORIZED";
            recurrenceConfiguration?: Record<string, never>;
            responsibleParty: string;
            reviewingOfficeId?: string;
            sourceDecisionConditionId: string;
            sourceInstrumentVersionId: string;
            startDate: string;
        };
        CreateOfficeDto: {
            /** @example CODE-01 */
            code: string;
            /** Format: uuid */
            departmentId: string;
            description?: string;
            /** @example Example name */
            name: string;
            /**
             * @default ACTIVE
             * @enum {string}
             */
            status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
        };
        CreateOfficeholderDto: {
            /** @example CODE-01 */
            code: string;
            description?: string;
            /** @example Example name */
            name: string;
            /**
             * @default ACTIVE
             * @enum {string}
             */
            status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
        };
        CreateOfficeholderLinkDto: {
            /** Format: uuid */
            identityId: string;
            /**
             * Format: uuid
             * @deprecated
             * @description Ignored — linking administrator identity is derived from the authenticated session
             */
            linkedByIdentityId?: string;
            /** Format: uuid */
            officeholderId: string;
            /**
             * @default ACTIVE
             * @enum {string}
             */
            status: "PENDING" | "ACTIVE" | "REVOKED";
        };
        CreateOrganizationDto: {
            /** @example ACME-CORP */
            code: string;
            description?: string;
            /** @example ACME Corporation */
            name: string;
            /**
             * @default ACTIVE
             * @enum {string}
             */
            status: "PENDING" | "ACTIVE" | "SUSPENDED" | "REVOKED";
        };
        CreatePerformanceClaimDto: {
            assumptions?: string;
            /** @enum {string} */
            attributionClassification?: "OBSERVED" | "ASSOCIATED" | "CONTRIBUTORY" | "PLAUSIBLE_CONTRIBUTION" | "CAUSAL_WITH_APPROVED_METHOD" | "NOT_ESTABLISHED";
            baselineId?: string;
            calculationRunId: string;
            claimReference?: string;
            claimStatement: string;
            /** Format: date-time */
            comparisonPeriodEnd?: string;
            /** Format: date-time */
            comparisonPeriodStart?: string;
            confidence?: string;
            /** Format: date-time */
            effectivePeriodEnd?: string;
            /** Format: date-time */
            effectivePeriodStart?: string;
            evidencePacketReference?: string;
            externalFactors?: string;
            limitations?: string;
            metricDefinitionVersionId: string;
            /** Format: date-time */
            revalidationDate?: string;
        };
        CreatePerformanceFrameworkDto: {
            /** @example INST-PERF-2026 */
            code: string;
            description?: string;
            /** Format: date-time */
            effectiveFrom?: string;
            /** Format: date-time */
            effectiveUntil?: string;
            institutionId: string;
            name: string;
        };
        CreatePersonDto: {
            /** @example Jane Citizen */
            displayName?: string;
            /** @example Citizen */
            familyName: string;
            /** @example Jane */
            givenName: string;
        };
        CreatePropertyTransferIntakeDto: {
            applicationId?: string;
            caseId?: string;
            governingServicePackVersionId?: string;
            governmentServiceId?: string;
            institutionId: string;
            jurisdictionId: string;
            landParcelId: string;
            propertyRecordId: string;
            representativeAuthorityId?: string;
            titleRecordId?: string;
        };
        CreateRepresentativeAuthorityDto: {
            /** @example 2026-01-01T00:00:00.000Z */
            effectiveFrom: string;
            effectiveUntil?: string;
            /** Format: uuid */
            identityId: string;
            /** Format: uuid */
            organizationId: string;
            /** @example Authorized to submit applications on behalf of the organization */
            scopeDescription: string;
            /**
             * @default ACTIVE
             * @enum {string}
             */
            status: "PENDING" | "ACTIVE" | "SUSPENDED" | "REVOKED" | "ENDED";
        };
        CreateServiceAppointmentDto: {
            /** Format: uuid */
            applicationId?: string;
            /** Format: uuid */
            appointmentLocationId?: string;
            /** Format: uuid */
            appointmentReasonId?: string;
            /** Format: uuid */
            appointmentSlotId?: string;
            /** Format: uuid */
            assignedOfficialIdentityId?: string;
            /** Format: uuid */
            assignedOfficialOfficeholderId?: string;
            /** Format: uuid */
            assignedResourceId?: string;
            /** Format: uuid */
            caseId?: string;
            /** Format: uuid */
            departmentId?: string;
            /** Format: uuid */
            governmentServiceId?: string;
            /** Format: uuid */
            institutionId: string;
            isVirtual?: boolean;
            operationalNotes?: string;
            /** Format: uuid */
            organizationId?: string;
            /**
             * Format: uuid
             * @description Primary applicant participant identity (server-validated)
             */
            primaryParticipantIdentityId: string;
            /** Format: uuid */
            representativeOrganizationId?: string;
            scheduledEndsAt?: string;
            scheduledStartsAt?: string;
            virtualMeetingUrl?: string;
        };
        CreateServiceFunctionMappingDto: {
            /** Format: date-time */
            effectiveFrom?: string;
            /** Format: date-time */
            effectiveUntil?: string;
            /** Format: uuid */
            functionAuthorityRecordId: string;
            /** @default true */
            isConsequential: boolean;
            publicStageLabel?: string;
            /** @default 0 */
            sequenceOrder: number;
            /** @enum {string} */
            status?: "ACTIVE" | "INACTIVE" | "SUSPENDED";
        };
        CreateServicePackDto: {
            /** @example immigration-services-pack */
            code: string;
            description?: string;
            /** Format: uuid */
            institutionId: string;
            /** Format: uuid */
            jurisdictionId?: string;
            /** @example Immigration Services Pack */
            name: string;
        };
        CreateServicePackReviewDto: {
            /** @enum {string} */
            reviewType?: "TECHNICAL_ARCHITECTURE" | "SERVICE_OWNER" | "DEPARTMENTAL" | "AUTHORITY_LEGAL_BASIS" | "CYBERSECURITY" | "PRIVACY_DATA_GOVERNANCE" | "INTEGRATION" | "OPERATIONAL_READINESS" | "EXECUTIVE_INSTITUTIONAL_ACCEPTANCE";
            /** @description Target service pack version under governance review */
            servicePackVersionId: string;
        };
        CreateStrategicProjectProfileDto: {
            announcementDate?: string;
            attributionMetadata: Record<string, never>;
            caseId?: string;
            description?: string;
            externalFactorNotes?: string;
            projectCode: string;
            responsibleDepartmentId: string;
            sectorCode?: string;
            sponsoringInstitutionId: string;
            title: string;
        };
        CreateTechnicalRoleAssignmentDto: {
            departmentId?: string;
            /** Format: date-time */
            effectiveFrom?: string;
            /** Format: date-time */
            effectiveUntil?: string;
            governmentBodyId?: string;
            identityId: string;
            institutionId?: string;
            jurisdictionId?: string;
            officeId?: string;
            /** @description Bootstrap role code (e.g. identity-platform-administrator) */
            roleCode: string;
            /**
             * @default PLATFORM
             * @enum {string}
             */
            scopeType: "PLATFORM" | "JURISDICTION" | "INSTITUTION" | "GOVERNMENT_BODY" | "DEPARTMENT" | "OFFICE";
        };
        CreateUserAccountDto: {
            /** @example jane.citizen@example.gov */
            loginIdentifier: string;
            /** Format: uuid */
            personId?: string;
            /**
             * @default PENDING
             * @enum {string}
             */
            status: "PENDING" | "ACTIVE" | "SUSPENDED" | "REVOKED";
        };
        CreateVitalEventIntakeDto: {
            applicationId?: string;
            caseId?: string;
            eventDate?: string;
            /** @enum {string} */
            eventType: "BIRTH" | "DEATH" | "MARRIAGE" | "DIVORCE" | "LEGAL_NAME_CHANGE" | "CIVIL_STATUS_CORRECTION" | "ADOPTION_UPDATE" | "CIVIL_IDENTITY_REGISTRATION";
            governingServicePackVersionId?: string;
            governmentServiceId?: string;
            institutionId: string;
            jurisdictionId: string;
            locationReference?: string;
            primarySubjectCivilPersonRecordId?: string;
        };
        CredentialResponseDto: {
            /** Format: date-time */
            createdAt: string;
            id: string;
            identityId: string;
            oidcProvider?: Record<string, never>;
            oidcSubject?: Record<string, never>;
            revokedAt?: Record<string, never>;
            /** @enum {string} */
            status: "PENDING" | "ACTIVE" | "REVOKED";
            /** @enum {string} */
            type: "PASSWORD" | "OIDC" | "API_KEY" | "MFA_TOTP";
            /** Format: date-time */
            updatedAt: string;
        };
        DeepLinkDto: {
            /**
             * @description Route parameters for frontend deep linking
             * @example {
             *       "applicationId": "00000000-0000-4000-8000-000000000001"
             *     }
             */
            params: {
                [key: string]: string;
            };
            /**
             * @description Stable route identifier for frontend navigation
             * @example citizen.application.detail
             */
            route: string;
        };
        DelegationResponseDto: {
            /** Format: date-time */
            createdAt: string;
            /** Format: uuid */
            delegatorOfficeholderId?: Record<string, never> | null;
            /** Format: uuid */
            delegatorOfficeId?: Record<string, never> | null;
            /** Format: date-time */
            effectiveFrom: string;
            effectiveUntil?: Record<string, never> | null;
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            institutionId: string;
            /** Format: uuid */
            recipientOfficeholderId?: Record<string, never> | null;
            /** Format: uuid */
            recipientOfficeId?: Record<string, never> | null;
            scopeDescription: string;
            /** @enum {string} */
            status: "PENDING" | "ACTIVE" | "SUSPENDED" | "REVOKED" | "ENDED";
            /** Format: date-time */
            updatedAt: string;
        };
        DepartmentAlertItemDto: {
            alertType: string;
            isEnforcementFinding: boolean;
            observedAt: string;
            referenceId: string;
            severity: string;
            summary: string;
            title: string;
        };
        DepartmentAlertsResponseDto: {
            alertDisclaimer: string;
            authorityDisclaimer: string;
            /** Format: uuid */
            departmentId: string;
            departmentName: string;
            generatedAt: string;
            items: components["schemas"]["DepartmentAlertItemDto"][];
            metricsFreshness: components["schemas"]["DepartmentMetricsFreshnessDto"];
            totalCount: number;
        };
        DepartmentAppealItemDto: {
            /** Format: uuid */
            caseId: Record<string, never> | null;
            caseNumber?: Record<string, never> | null;
            filedAt: string;
            /** Format: uuid */
            redressMatterId: string;
            redressMatterNumber: string;
            serviceName?: Record<string, never> | null;
            status: string;
        };
        DepartmentAppealsResponseDto: {
            activeAppealsCount: number;
            authorityDisclaimer: string;
            /** Format: uuid */
            departmentId: string;
            departmentName: string;
            generatedAt: string;
            items: components["schemas"]["DepartmentAppealItemDto"][];
            metricsFreshness: components["schemas"]["DepartmentMetricsFreshnessDto"];
            restrictedApplicantDetailsExcluded: boolean;
        };
        DepartmentAtRiskMilestoneDto: {
            /** Format: uuid */
            caseId: string;
            caseNumber: string;
            milestoneName: string;
            sourceSlaReference?: Record<string, never> | null;
            status: string;
            targetDate?: Record<string, never> | null;
        };
        DepartmentCaseAssigneeDto: {
            assignmentRole: string;
            name: string;
            /** Format: uuid */
            officeholderId: string;
        };
        DepartmentCaseItemDto: {
            activeAssignees: components["schemas"]["DepartmentCaseAssigneeDto"][];
            /** Format: uuid */
            caseId: string;
            caseManager?: components["schemas"]["DepartmentCaseManagerDto"] | null;
            caseNumber: string;
            openedAt: string;
            serviceCode: string;
            serviceName: string;
            status: string;
        };
        DepartmentCaseManagerDto: {
            name: string;
            /** Format: uuid */
            officeholderId: string;
        };
        DepartmentCasesResponseDto: {
            aggregateDoesNotCreateCaseDisposition: boolean;
            authorityDisclaimer: string;
            /** Format: uuid */
            departmentId: string;
            departmentName: string;
            generatedAt: string;
            items: components["schemas"]["DepartmentCaseItemDto"][];
            metricsFreshness: components["schemas"]["DepartmentMetricsFreshnessDto"];
            totalCount: number;
        };
        DepartmentComplianceAlertDto: {
            /** Format: uuid */
            alertId: string;
            alertLevel: string;
            isEnforcementFinding: boolean;
            summary: string;
            title: string;
        };
        DepartmentComplianceIndicatorDto: {
            countValue: number;
            displayLabel: string;
            indicatorType: string;
        };
        DepartmentComplianceMatterDto: {
            /** Format: uuid */
            caseId: Record<string, never> | null;
            /** Format: uuid */
            complianceMatterId: string;
            complianceMatterNumber: string;
            openedAt: string;
            status: string;
        };
        DepartmentComplianceResponseDto: {
            authorityDisclaimer: string;
            complianceAlerts: components["schemas"]["DepartmentComplianceAlertDto"][];
            correctiveActions: number;
            /** Format: uuid */
            departmentId: string;
            departmentName: string;
            generatedAt: string;
            indicators: components["schemas"]["DepartmentComplianceIndicatorDto"][];
            metricsFreshness: components["schemas"]["DepartmentMetricsFreshnessDto"];
            openMatters: components["schemas"]["DepartmentComplianceMatterDto"][];
            overdueObligations: number;
            projectionDisclaimer: string;
            restrictedInternalRecordsScoped: boolean;
        };
        DepartmentDependenciesResponseDto: {
            authorityDisclaimer: string;
            /** Format: uuid */
            departmentId: string;
            departmentName: string;
            externalDeterminations: components["schemas"]["DepartmentExternalDeterminationDto"][];
            generatedAt: string;
            metricsFreshness: components["schemas"]["DepartmentMetricsFreshnessDto"];
            pendingExternalCases: components["schemas"]["DepartmentPendingExternalCaseDto"][];
            pendingReferrals: components["schemas"]["DepartmentPendingReferralDto"][];
            unresolvedCount: number;
        };
        DepartmentExternalDeterminationDto: {
            /** Format: uuid */
            authorityDependencyId: string;
            /** Format: uuid */
            determinationId: string;
            determinationStatus: string;
            receivedAt: string;
        };
        DepartmentHomeResponseDto: {
            activeAppeals: number;
            aggregateDisclaimer: string;
            aggregateDoesNotCreateCaseDisposition: boolean;
            applicationsReceived: number;
            authorityDisclaimer: string;
            casesApproachingSla: number;
            casesAwaitingApplicantAction: number;
            casesAwaitingExternalDependency: number;
            casesAwaitingReview: number;
            casesCompleted: number;
            complianceMatters: number;
            correctiveActions: number;
            dashboardVisibilityDoesNotCreateAuthority: boolean;
            decisionReadyCases: number;
            departmentalAlerts: number;
            /** Format: uuid */
            departmentId: string;
            departmentName: string;
            expiringLicensesPermits: number;
            generatedAt: string;
            inspectionBacklog: number;
            /** Format: uuid */
            institutionId: string;
            integrationIssues: number;
            metricsFreshness: components["schemas"]["DepartmentMetricsFreshnessDto"];
            officerWorkloadDistribution: components["schemas"]["DepartmentOfficerWorkloadDistributionDto"][];
            openCases: number;
            overdueCases: number;
            serviceAvailability: components["schemas"]["DepartmentServiceAvailabilityDto"][];
            suspendedServices: number;
            unassignedWorkload: number;
        };
        DepartmentMeAppointmentDto: {
            /** Format: uuid */
            appointmentId: string;
            /** Format: uuid */
            departmentId: string;
            effectiveFrom: string;
            effectiveUntil: Record<string, never> | null;
            /** Format: uuid */
            institutionId: string;
            /** Format: uuid */
            officeId: string;
            status: string;
        };
        DepartmentMeDepartmentDto: {
            departmentCode: string;
            /** Format: uuid */
            departmentId: string;
            departmentName: string;
            hasDepartmentRelationship: boolean;
            hasManagementAccess: boolean;
            /** Format: uuid */
            institutionId: string;
        };
        DepartmentMeResponseDto: {
            activeAppointments: components["schemas"]["DepartmentMeAppointmentDto"][];
            assuranceLevel: string;
            authorityDisclaimer: string;
            dashboardVisibilityDoesNotCreateAuthority: boolean;
            departments: components["schemas"]["DepartmentMeDepartmentDto"][];
            hasUniversalAuthority: boolean;
            /** Format: uuid */
            identityId: string;
        };
        DepartmentMetricsFreshnessDto: {
            calculatedAt: string;
            isStale: boolean;
            staleAfter: string;
            staleDataDisclaimer: string;
        };
        DepartmentOfficerAppointmentDto: {
            /** Format: uuid */
            appointmentId: string;
            effectiveFrom: string;
            effectiveUntil: Record<string, never> | null;
            officeCode: string;
            /** Format: uuid */
            officeId: string;
            officeName: string;
            status: string;
        };
        DepartmentOfficerItemDto: {
            activeAssignmentCount: number;
            currentAppointment: components["schemas"]["DepartmentOfficerAppointmentDto"];
            officeholderCode: string;
            /** Format: uuid */
            officeholderId: string;
            officeholderName: string;
            pendingReviews: number;
            slaRiskAssignments: number;
            unavailableContext?: components["schemas"]["DepartmentOfficerUnavailableContextDto"] | null;
        };
        DepartmentOfficersResponseDto: {
            authorityDisclaimer: string;
            /** Format: uuid */
            departmentId: string;
            departmentName: string;
            generatedAt: string;
            items: components["schemas"]["DepartmentOfficerItemDto"][];
            metricsFreshness: components["schemas"]["DepartmentMetricsFreshnessDto"];
            restrictedHrFieldsExcluded: boolean;
        };
        DepartmentOfficerUnavailableContextDto: {
            /** Format: uuid */
            functionAuthorityRecordId: string;
            reason: string;
        };
        DepartmentOfficerWorkloadDistributionDto: {
            activeAssignmentCount: number;
            /** Format: uuid */
            officeholderId: string;
            officeholderName: string;
        };
        DepartmentPendingExternalCaseDto: {
            caseNumber: string;
            /** Format: uuid */
            id: string;
            status: string;
        };
        DepartmentPendingReferralDto: {
            /** Format: uuid */
            caseId: string;
            caseNumber: string;
            caseStatus: string;
            /** Format: uuid */
            referralId: string;
            referralStatus: string;
        };
        DepartmentResponseDto: {
            code: string;
            /** Format: date-time */
            createdAt: string;
            description?: Record<string, never> | null;
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            institutionId: string;
            name: string;
            /** @enum {string} */
            status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
            /** Format: date-time */
            updatedAt: string;
        };
        DepartmentServiceAvailabilityDto: {
            count: number;
            publicAvailability: string;
        };
        DepartmentServiceItemDto: {
            applicationVolume: number;
            backlog: number;
            publicAvailability: string;
            serviceCode: string;
            /** Format: uuid */
            serviceId: string;
            serviceName: string;
            serviceSuspended: boolean;
            slaStatus: string;
            status: string;
            unresolvedDependencyCount: number;
            version?: Record<string, never> | null;
            /** Format: uuid */
            versionId?: Record<string, never> | null;
        };
        DepartmentServicesResponseDto: {
            authorityDisclaimer: string;
            /** Format: uuid */
            departmentId: string;
            departmentName: string;
            generatedAt: string;
            items: components["schemas"]["DepartmentServiceItemDto"][];
            metricsFreshness: components["schemas"]["DepartmentMetricsFreshnessDto"];
            suspendedServiceCount: number;
        };
        DepartmentSlaClockDto: {
            /** Format: uuid */
            caseId: string;
            caseNumber: string;
            clockKey: string;
            completedAt?: Record<string, never> | null;
            pausedAt?: Record<string, never> | null;
            startedAt: string;
            status: string;
        };
        DepartmentSlaResponseDto: {
            activeClocks: components["schemas"]["DepartmentSlaClockDto"][];
            atRiskMilestones: components["schemas"]["DepartmentAtRiskMilestoneDto"][];
            authorityDisclaimer: string;
            casesApproachingSla: number;
            /** Format: uuid */
            departmentId: string;
            departmentName: string;
            doesNotCalculateLegalConclusions: boolean;
            generatedAt: string;
            metricsFreshness: components["schemas"]["DepartmentMetricsFreshnessDto"];
            overdueCases: number;
        };
        DepartmentStatusBreakdownDto: {
            count: number;
            status: string;
        };
        DepartmentWorkloadResponseDto: {
            aggregateDoesNotCreateCaseDisposition: boolean;
            authorityDisclaimer: string;
            casesAwaitingApplicantAction: number;
            casesAwaitingExternalDependency: number;
            casesAwaitingReview: number;
            decisionReadyCases: number;
            /** Format: uuid */
            departmentId: string;
            departmentName: string;
            generatedAt: string;
            metricsFreshness: components["schemas"]["DepartmentMetricsFreshnessDto"];
            officerWorkloadDistribution: components["schemas"]["DepartmentOfficerWorkloadDistributionDto"][];
            statusBreakdown: components["schemas"]["DepartmentStatusBreakdownDto"][];
            totalCases: number;
            totalOpenCases: number;
            unassignedWorkload: number;
        };
        DeriveComplianceProjectionDto: Record<string, never>;
        DeriveIndicatorProjectionDto: Record<string, never>;
        DeriveProjectStatusProjectionDto: {
            /** @enum {string} */
            audience: "OFFICIAL" | "EXECUTIVE" | "PUBLIC" | "SPONSOR";
            evidenceCutoffAt?: string;
        };
        DevelopmentApplicationRecordDto: {
            applicationReference: string;
            caseId: string | null;
            /** Format: date-time */
            createdAt: string;
            developmentProjectId: string;
            id: string;
            serviceCode: string;
            serviceName: string;
            /** @enum {string} */
            status: "DRAFT" | "SUBMITTED" | "UNDER_REVIEW" | "DECIDED" | "WITHDRAWN";
            /** Format: date-time */
            submittedAt: string | null;
            /** Format: date-time */
            updatedAt: string;
        };
        DevelopmentCorrectiveActionRecordDto: {
            actionReference: string;
            /** Format: date-time */
            createdAt: string;
            description: string;
            developmentInspectionId: string | null;
            developmentProjectId: string;
            id: string;
            /** @enum {string} */
            status: "OPEN" | "SUBMITTED" | "ACCEPTED" | "REJECTED" | "CLOSED";
            /** Format: date-time */
            submittedAt: string | null;
            /** Format: date-time */
            updatedAt: string;
        };
        DevelopmentExternalDependencyRecordDto: {
            blocksPermitDecision: boolean;
            /** Format: date-time */
            createdAt: string;
            dependencyCode: string;
            dependencyLabel: string;
            developmentProjectId: string;
            externalAuthorityReference: string | null;
            id: string;
            /** Format: date-time */
            resolvedAt: string | null;
            /** @enum {string} */
            status: "PENDING" | "REFERRED" | "RESOLVED" | "BLOCKED";
            /** Format: date-time */
            updatedAt: string;
        };
        DevelopmentInspectionRecordDto: {
            /** Format: date-time */
            completedAt: string | null;
            /** Format: date-time */
            createdAt: string;
            developmentProjectId: string;
            failureNotes: string | null;
            id: string;
            inspectionReference: string;
            inspectionType: string;
            /** @enum {string|null} */
            outcome: "PASS" | "FAIL" | "CONDITIONAL" | "CANCELLED" | null;
            /** Format: date-time */
            outcomeLockedAt: string | null;
            /** Format: date-time */
            scheduledAt: string | null;
            /** @enum {string} */
            status: "SCHEDULED" | "COMPLETED" | "CANCELLED";
            /** Format: date-time */
            updatedAt: string;
        };
        DevelopmentOccupancyCertificateRecordDto: {
            certificateReference: string;
            /** Format: date-time */
            createdAt: string;
            developmentProjectId: string;
            governmentDecisionId: string | null;
            id: string;
            /** Format: date-time */
            issuedAt: string | null;
            issuedByOfficeholderId: string | null;
            /** @enum {string} */
            status: "REQUESTED" | "UNDER_REVIEW" | "ISSUED" | "DENIED";
            /** Format: date-time */
            updatedAt: string;
        };
        DevelopmentPermitVersionRecordDto: {
            amendmentSummary: string | null;
            /** Format: date-time */
            createdAt: string;
            developmentPermitId: string;
            id: string;
            isAmendment: boolean;
            payload: {
                [key: string]: unknown;
            } | unknown[] | string | number | boolean;
            /** Format: date-time */
            updatedAt: string;
            versionNumber: number;
        };
        DevelopmentPermitWithVersionDto: {
            /** Format: date-time */
            createdAt: string;
            currentVersion: components["schemas"]["DevelopmentPermitVersionRecordDto"] | null;
            currentVersionId: string | null;
            developmentProjectId: string;
            /** Format: date-time */
            expiresAt: string | null;
            id: string;
            /** Format: date-time */
            issuedAt: string | null;
            issuedByOfficeholderId: string | null;
            permitNumber: string;
            permitType: string;
            /** @enum {string} */
            status: "DRAFT" | "SUBMITTED" | "UNDER_REVIEW" | "ISSUED" | "DENIED" | "SUSPENDED" | "EXPIRED" | "AMENDED";
            /** Format: date-time */
            updatedAt: string;
        };
        DevelopmentPlanningAppealRecordDto: {
            appealReference: string;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            decidedAt: string | null;
            developmentProjectId: string;
            /** Format: date-time */
            filedAt: string;
            groundsSummary: string;
            id: string;
            /** @enum {string} */
            status: "FILED" | "UNDER_REVIEW" | "DECIDED" | "WITHDRAWN";
            /** Format: date-time */
            updatedAt: string;
        };
        DevelopmentPortalAppointmentDto: {
            appointmentId: string;
            scheduledStartAt: string | null;
            /** @enum {string} */
            status: "REQUESTED" | "SCHEDULED" | "CONFIRMED" | "RESCHEDULED" | "CANCELLED" | "COMPLETED" | "NO_SHOW";
        };
        DevelopmentPortalDeadlineDto: {
            applicationReference: string;
            indicativeReviewDeadline: string | null;
            submittedAt: string | null;
        };
        DevelopmentPortalOccupancyStatusDto: {
            certificates: components["schemas"]["DevelopmentOccupancyCertificateRecordDto"][];
            /** @enum {string} */
            latestCertificateStatus: "REQUESTED" | "UNDER_REVIEW" | "ISSUED" | "DENIED";
        };
        DevelopmentPortalPermitStatusDto: {
            currentVersionNumber: number | null;
            permitId: string;
            permitNumber: string;
            /** @enum {string} */
            status: "DRAFT" | "SUBMITTED" | "UNDER_REVIEW" | "ISSUED" | "DENIED" | "SUSPENDED" | "EXPIRED" | "AMENDED";
        };
        DevelopmentPortalProfessionalDto: {
            identityId: string;
            professionalId: string;
            registrationReference: string | null;
            /** @enum {string} */
            role: "ARCHITECT" | "ENGINEER" | "SURVEYOR" | "CONTRACTOR" | "OTHER";
        };
        DevelopmentPortalProjectSummaryDto: {
            id: string;
            projectReference: string;
            /** @enum {string} */
            status: "ACTIVE" | "ON_HOLD" | "COMPLETED" | "ARCHIVED";
            title: string;
        };
        DevelopmentProjectFeeRecordDto: {
            amountCents: number;
            /** Format: date-time */
            createdAt: string;
            currency: string;
            developmentProjectId: string;
            feeCode: string;
            id: string;
            label: string;
            /** Format: date-time */
            paidAt: string | null;
            paymentTransactionId: string | null;
            /** @enum {string} */
            status: "OUTSTANDING" | "PAID" | "WAIVED" | "CANCELLED";
            /** Format: date-time */
            updatedAt: string;
        };
        DevelopmentProjectPortalViewDto: {
            appeals: components["schemas"]["DevelopmentPlanningAppealRecordDto"][];
            completionOccupancyStatus: components["schemas"]["DevelopmentPortalOccupancyStatusDto"];
            correctiveActions: components["schemas"]["DevelopmentCorrectiveActionRecordDto"][];
            deadlines: components["schemas"]["DevelopmentPortalDeadlineDto"][];
            disclaimer: string;
            evidenceOutstandingCount: number;
            externalDependencies: components["schemas"]["DevelopmentExternalDependencyRecordDto"][];
            inspections: components["schemas"]["DevelopmentInspectionRecordDto"][];
            openInspections: number;
            outstandingFees: components["schemas"]["DevelopmentProjectFeeRecordDto"][];
            permits: components["schemas"]["DevelopmentPermitWithVersionDto"][];
            permitStatusSummary: components["schemas"]["DevelopmentPortalPermitStatusDto"][];
            professionals: components["schemas"]["DevelopmentPortalProfessionalDto"][];
            project: components["schemas"]["DevelopmentPortalProjectSummaryDto"];
            propertySite: components["schemas"]["DevelopmentProjectSiteRecordDto"] | null;
            /** @enum {string} */
            ruleEnvironment: "NON_PRODUCTION";
            submittedApplications: components["schemas"]["DevelopmentApplicationRecordDto"][];
            upcomingAppointments: components["schemas"]["DevelopmentPortalAppointmentDto"][];
        };
        DevelopmentProjectSiteRecordDto: {
            addressLine: string | null;
            /** Format: date-time */
            createdAt: string;
            developmentProjectId: string;
            id: string;
            latitude: number | null;
            longitude: number | null;
            parcelReference: string | null;
            siteLabel: string;
            /** Format: date-time */
            updatedAt: string;
        };
        EmployerRegistryRecordDto: {
            /** Format: date-time */
            createdAt: string;
            /** @enum {string} */
            dataClassification: "PUBLIC" | "OFFICIAL" | "EMPLOYER_SCOPED" | "WORKER_SELF" | "PROTECTED_LABOUR" | "PROTECTED_WORKER" | "RESTRICTED";
            doesNotSelfAuthorizeWorkers: boolean;
            id: string;
            institutionId: string | null;
            jurisdictionId: string | null;
            masterAdministrativeFileId: string | null;
            organizationId: string;
            /** Format: date-time */
            registeredAt: string | null;
            /** @enum {string} */
            registrationStatus: "DRAFT" | "REGISTERED" | "SUSPENDED" | "WITHDRAWN" | "CLOSED";
            registryNumber: string;
            /** Format: date-time */
            updatedAt: string;
        };
        EvaluateAuthorityDto: {
            /** @enum {string} */
            action: "RETRIEVE" | "SUMMARIZE" | "PREPARE" | "REVIEW" | "VERIFY" | "CHECK" | "RECOMMEND" | "CONCUR" | "APPROVE" | "DECIDE" | "SIGN" | "ISSUE" | "INSPECT" | "ENFORCE" | "SUSPEND" | "REVOKE" | "HEAR_REVIEW" | "ADMINISTER" | "AUDIT" | "CONSULT" | "SUPERVISE" | "LIAISE";
            /** Format: uuid */
            appointmentId?: string;
            at?: string;
            /** @enum {string} */
            attestationSource?: "QUALIFIED_PROFESSIONAL" | "AI_ASSISTANCE" | "ADMINISTRATOR" | "GOVERNMENT_OFFICIAL" | "OTHER";
            /**
             * Format: uuid
             * @description Case context for server-derived evidence, conflict, and SoD facts.
             */
            caseId?: string;
            /**
             * Format: uuid
             * @description Decision readiness assessment used to resolve approvals and conflict state.
             */
            decisionReadinessAssessmentId?: string;
            /** Format: uuid */
            delegationId?: string;
            /**
             * Format: uuid
             * @description Evidence packet version used to resolve evidence completeness server-side.
             */
            evidencePacketVersionId?: string;
            evidenceProvided?: string[];
            externalDataAccessOnly?: boolean;
            /** Format: uuid */
            functionAuthorityRecordId: string;
            hasConsultation?: boolean;
            hasLiaison?: boolean;
            hasSecondApproval?: boolean;
            hasSupervision?: boolean;
            isConflicted?: boolean;
            isRecused?: boolean;
            isSelfApproval?: boolean;
            /** Format: uuid */
            officeholderId?: string;
            /** Format: uuid */
            officeId?: string;
            priorActions?: ("RETRIEVE" | "SUMMARIZE" | "PREPARE" | "REVIEW" | "VERIFY" | "CHECK" | "RECOMMEND" | "CONCUR" | "APPROVE" | "DECIDE" | "SIGN" | "ISSUE" | "INSPECT" | "ENFORCE" | "SUSPEND" | "REVOKE" | "HEAR_REVIEW" | "ADMINISTER" | "AUDIT" | "CONSULT" | "SUPERVISE" | "LIAISE")[];
            qualificationCodes?: string[];
            scopeValue?: string;
            transactionAmount?: number;
        };
        EvaluateMonitoringRuleDto: Record<string, never>;
        ExcludePacketItemDto: {
            /** Format: uuid */
            authorityEvaluationRecordId?: string;
            /** Format: uuid */
            authorizedByOfficeholderId?: string;
            /** Format: uuid */
            evidenceRecordId: string;
            exclusionReason: string;
        };
        ExecuteGovernedAiCallDto: Record<string, never>;
        ExecuteGovernmentDecisionDto: {
            /** Format: uuid */
            appointmentId: string;
            at?: string;
            /** Format: uuid */
            caseId: string;
            /** Format: uuid */
            decisionMakerIdentityId: string;
            /** Format: uuid */
            decisionMakerOfficeholderId: string;
            /** Format: uuid */
            decisionReadinessAssessmentId: string;
            /** Format: uuid */
            decisionTypeVersionId: string;
            /** Format: uuid */
            delegationId?: string;
            /** Format: uuid */
            evidencePacketVersionId: string;
            /** @description Decision-maker must explicitly confirm intent to decide */
            explicitIntentConfirmed: boolean;
            hasSecondApproval?: boolean;
            isConflicted?: boolean;
            isRecused?: boolean;
            matterDecided: string;
            outcome: string;
        };
        ExecutiveAlertItemDto: {
            aiAlertIsNotConfirmedViolationWithoutVerification: boolean;
            /** Format: uuid */
            alertId: string;
            alertNumber: string;
            hasVerificationRecord: boolean;
            isConfirmedViolation: boolean;
            isVerified: boolean;
            observedCondition: string;
            status: string;
        };
        ExecutiveAlertsResponseDto: {
            alerts: components["schemas"]["ExecutiveAlertItemDto"][];
            disclaimers: Record<string, never>;
            generatedAt: string;
            /** Format: uuid */
            institutionId: string;
        };
        ExecutiveBriefingScopeDto: {
            dashboardCode: string;
            /** Format: uuid */
            dashboardDefinitionId: string;
            dashboardName: string;
            /** Format: uuid */
            institutionId: string;
        };
        ExecutiveDisclaimersDto: {
            executiveDashboardIsNotCommandAuthority: boolean;
            projection: string;
            status: string;
            statusDoesNotCreateAuthority: boolean;
            visibilityDoesNotCreateAuthority: boolean;
        };
        ExecutiveGovernmentOperationsDto: {
            disclaimers: components["schemas"]["ExecutiveDisclaimersDto"];
            generatedAt: string;
            indicators: components["schemas"]["ExecutiveIndicatorDto"][];
            /** Format: uuid */
            institutionId: string;
            summary: components["schemas"]["ExecutiveGovernmentOperationsSummaryDto"];
        };
        ExecutiveGovernmentOperationsSummaryDto: {
            activeGovernmentServices: number;
            applicationsReceived: number;
            averageProcessingTimeMs?: Record<string, never>;
            completedCases: number;
            medianProcessingTimeMs?: Record<string, never>;
            openCases: number;
            overdueCases: number;
        };
        ExecutiveHomeResponseDto: {
            authorityDisclaimer: string;
            briefingScopes: components["schemas"]["ExecutiveBriefingScopeDto"][];
            compliance: Record<string, never>;
            digitalGovernment: Record<string, never>;
            economyInvestment: Record<string, never>;
            executiveDashboardIsNotCommandAuthority: boolean;
            generatedAt: string;
            governmentOperations: components["schemas"]["ExecutiveGovernmentOperationsDto"];
            hasStaleProjections: boolean;
            /** Format: uuid */
            institutionId: string;
            metricIsNotVerifiedLegalFact: boolean;
            projectionIsNotGuarantee: boolean;
            risk: Record<string, never>;
            riskScoreIsNotSanction: boolean;
            staleProjectionCount: number;
            visibilityDoesNotCreateAuthority: boolean;
        };
        ExecutiveIndicatorDto: {
            category: string;
            count: number;
            dataQuality: string;
            /** Format: uuid */
            id: string;
            isStale: boolean;
            label: string;
            metricIsNotVerifiedLegalFact: boolean;
            score?: Record<string, never>;
            staleDataFlagged: boolean;
            visibilityDoesNotCreateAuthority: boolean;
        };
        ExecutiveSectionResponseDto: {
            disclaimers: components["schemas"]["ExecutiveDisclaimersDto"];
            generatedAt: string;
            indicators: components["schemas"]["ExecutiveIndicatorDto"][];
            /** Format: uuid */
            institutionId: string;
        };
        ExperienceActionItemDto: {
            actionCode: string;
            actionType: string;
            deepLink: components["schemas"]["DeepLinkDto"];
            departmentId?: string;
            departmentName?: string;
            description?: components["schemas"]["LocalizedLabelDto"];
            dueDate?: string | null;
            institution?: components["schemas"]["InstitutionAttributionDto"];
            presentationOnly: boolean;
            priority: number;
            resourceId: string;
            resourceType: string;
            sourceDomain: string;
            status: string;
            title: components["schemas"]["LocalizedLabelDto"];
        };
        ExperienceActionsResponseDto: {
            executionRequiresRevalidation: boolean;
            items: components["schemas"]["ExperienceActionItemDto"][];
            pagination: components["schemas"]["PaginationMetaDto"];
        };
        ExperienceDeepLinkResolveRequestDto: {
            /** @description Route parameters keyed by parameter name */
            params: {
                [key: string]: string;
            };
            /**
             * @description Stable route identifier
             * @example citizen.application.detail
             */
            route: string;
        };
        ExperienceDeepLinkResolveResponseDto: {
            authorized: boolean;
            denialReason?: string;
            params: {
                [key: string]: string;
            };
            resolutionDisclaimer: string;
            route: string;
        };
        ExperienceInboxItemDto: {
            attribution?: components["schemas"]["InstitutionAttributionDto"];
            deepLink: components["schemas"]["DeepLinkDto"];
            inboxItemId: string;
            itemType: string;
            preview?: components["schemas"]["LocalizedLabelDto"];
            read: boolean;
            receivedAt: string;
            sourceDomain: string;
            sourceRecordId: string;
            title: components["schemas"]["LocalizedLabelDto"];
        };
        ExperienceInboxResponseDto: {
            items: components["schemas"]["ExperienceInboxItemDto"][];
            pagination: components["schemas"]["PaginationMetaDto"];
        };
        ExperienceLocalizationMetadataDto: {
            defaultLocale: string;
            locale: string;
            /** @description Localization keys are presentation-only and separate from authoritative record content */
            localizationNote: string;
        };
        ExperienceNavigationItemDto: {
            accessible: boolean;
            iconKey?: string;
            key: string;
            label: components["schemas"]["LocalizedLabelDto"];
            route: string;
        };
        ExperienceNavigationResponseDto: {
            items: components["schemas"]["ExperienceNavigationItemDto"][];
            navigationDisclaimer: string;
            persona: string;
        };
        ExperienceResponseMetadataDto: {
            authorityDisclaimer: string;
            generatedAt: string;
            localization: components["schemas"]["ExperienceLocalizationMetadataDto"];
            persona?: string;
            scopeDisclaimer?: string;
        };
        ExperienceSearchHitDto: {
            deepLink: components["schemas"]["DeepLinkDto"];
            displayLabel: components["schemas"]["LocalizedLabelDto"];
            matchedAt: string;
            resourceId: string;
            resourceType: string;
            subtitle?: string;
            title: string;
        };
        ExperienceSearchResponseDto: {
            items: components["schemas"]["ExperienceSearchHitDto"][];
            pagination: components["schemas"]["PaginationMetaDto"];
            scopeDisclaimer: string;
        };
        ExportServicePackVersionDto: {
            /** @enum {string} */
            exportPurpose: "BACKUP" | "AUDIT" | "CONTROLLED_PORTABILITY" | "TEMPLATE_REUSE" | "ENVIRONMENT_PROMOTION";
        };
        ExtendObligationDeadlineDto: {
            effectiveExtendedDueDate: string;
            /** @description Authority reference authorizing the extension */
            extensionAuthorityReference: string;
            obligationId: string;
        };
        ExternalAuthorityResponseDto: {
            code: string;
            /** Format: date-time */
            createdAt: string;
            description?: Record<string, never> | null;
            /** Format: uuid */
            id: string;
            name: string;
            /** @enum {string} */
            status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
            /** @enum {string} */
            type: "GOVERNMENT" | "REGULATORY" | "JUDICIAL" | "PROFESSIONAL" | "INSTITUTIONAL" | "OTHER";
            /** Format: date-time */
            updatedAt: string;
        };
        FinalizeComplianceReviewDto: {
            deficiencySummary?: string;
            findings?: string[];
            reviewerOfficeholderId?: string;
            reviewId: string;
            /** @enum {string} */
            status: "PENDING" | "IN_REVIEW" | "SATISFACTORY_FOR_STATED_PURPOSE" | "DEFICIENCY_IDENTIFIED" | "MORE_INFORMATION_REQUIRED" | "DISPUTED" | "SAFE_HALTED";
            unresolvedIssues?: string[];
        };
        FormConditionalRuleSchemaDto: {
            /** @enum {string} */
            action: "SHOW" | "HIDE" | "REQUIRE" | "OPTIONAL";
            conditions: components["schemas"]["FormConditionClauseSchemaDto"][];
            /** @enum {string} */
            logic: "AND" | "OR";
        };
        FormConditionClauseSchemaDto: {
            fieldKey: string;
            /** @enum {string} */
            operator: "EQUALS" | "NOT_EQUALS" | "IN" | "NOT_IN" | "IS_EMPTY" | "IS_NOT_EMPTY" | "GREATER_THAN" | "LESS_THAN" | "GREATER_THAN_OR_EQUAL" | "LESS_THAN_OR_EQUAL";
            /** @description Comparison value (any JSON value) */
            value?: Record<string, never>;
        };
        FormDeclarationOptionsDto: {
            /** @description Localized text keyed by locale code */
            declarationText: {
                [key: string]: string;
            };
            declarationVersion: string;
        };
        FormFieldOptionSchemaDto: {
            /** @description Localized text keyed by locale code */
            label: {
                [key: string]: string;
            };
            value: string;
        };
        FormValidationSchemaDto: {
            allowedValues?: string[];
            countryCode?: boolean;
            equalsField?: string;
            max?: number;
            maxDate?: string;
            maxLength?: number;
            min?: number;
            minDate?: string;
            minLength?: number;
            notEqualsField?: string;
            pattern?: string;
            /** @enum {string} */
            patternPreset?: "ALPHANUMERIC" | "NUMERIC" | "POSTAL_CODE";
        };
        FreezePacketDto: {
            /** @description Marks packet as ready for decision engine review. Does not create a decision outcome. */
            readyForDecisionReview?: boolean;
        };
        FunctionAuthorityRecordResponseDto: {
            activatedAt?: Record<string, never>;
            /** @enum {string} */
            classification: "ABSEZ_OWNED" | "ABSEZ_DELEGATED" | "INSTITUTION_OWNED" | "INSTITUTION_DELEGATED" | "EXPRESSLY_RETAINED_NATIONAL" | "SHARED_OR_COORDINATED" | "RESERVED_PROFESSIONAL" | "ADMINISTRATIVE_SUPPORT" | "TECHNOLOGY_ASSISTED" | "PROHIBITED_OR_UNAUTHORIZED";
            code: string;
            /** Format: date-time */
            createdAt: string;
            description?: Record<string, never>;
            /** @enum {string} */
            functionClass: "LICENSING" | "APPROVAL" | "INSPECTION" | "REGISTRATION" | "ENFORCEMENT" | "ADVISORY" | "ADMINISTRATIVE" | "INFORMATIONAL" | "OTHER";
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            institutionId?: Record<string, never>;
            /** @enum {string} */
            lifecycleStatus: "DRAFT" | "PENDING_ACTIVATION" | "ACTIVE" | "SUSPENDED" | "INACTIVE" | "ARCHIVED";
            name: string;
            /** Format: uuid */
            officeId?: Record<string, never>;
            requiresAppointment: boolean;
            requiresDelegation: boolean;
            /** Format: date-time */
            updatedAt: string;
        };
        GoverningSourceResponseDto: {
            authenticatedAt?: Record<string, never>;
            code: string;
            contentHash: string;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            effectiveFrom: string;
            effectiveUntil?: Record<string, never>;
            /** Format: uuid */
            id: string;
            /** @enum {string} */
            status: "DRAFT" | "AUTHENTICATED" | "REVOKED" | "SUPERSEDED" | "CONFLICT_DETECTED";
            title: string;
            /** Format: date-time */
            updatedAt: string;
            versionLabel: string;
        };
        GovernmentBodyResponseDto: {
            code: string;
            /** Format: date-time */
            createdAt: string;
            description?: Record<string, never> | null;
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            institutionId: string;
            name: string;
            /** @enum {string} */
            status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
            /** @enum {string} */
            type: "GOVERNING" | "SUPERVISORY" | "ADVISORY" | "ADMINISTRATIVE" | "DECISION_MAKING" | "OTHER";
            /** Format: date-time */
            updatedAt: string;
        };
        GovernmentServiceResponseDto: {
            code: string;
            /** Format: date-time */
            createdAt: string;
            /** Format: uuid */
            id: string;
            officialName: string;
            publicName: string;
            /** Format: uuid */
            responsibleDepartmentId: string;
            /** Format: uuid */
            responsibleInstitutionId: string;
            /** Format: uuid */
            serviceFamilyId: string;
            slug: string;
            summary?: Record<string, never>;
            /** Format: date-time */
            updatedAt: string;
        };
        GovernmentServiceVersionResponseDto: {
            applicantCategories: ("INDIVIDUAL" | "CITIZEN" | "RESIDENT" | "NON_RESIDENT" | "BUSINESS" | "COMPANY" | "INVESTOR" | "EMPLOYER" | "EMPLOYEE" | "AUTHORIZED_REPRESENTATIVE" | "PROFESSIONAL" | "GOVERNMENT_ENTITY" | "PARTNER_ORGANIZATION" | "OTHER")[];
            coveredActivities?: Record<string, never>;
            /** Format: date-time */
            createdAt: string;
            effectiveFrom?: Record<string, never>;
            effectiveUntil?: Record<string, never>;
            excludedActivities?: Record<string, never>;
            geographicScope?: Record<string, never>;
            /** Format: uuid */
            governmentServiceId: string;
            /** Format: uuid */
            id: string;
            informationLastVerifiedAt?: Record<string, never>;
            /** @enum {string} */
            maturityStatus: "DRAFT" | "RECOGNIZED" | "APPROVED" | "CONFIGURED" | "TESTED" | "ACCEPTED" | "ACTIVE" | "SUSPENDED" | "SUPERSEDED" | "RETIRED";
            /** @enum {string} */
            publicAvailability: "HIDDEN" | "INFORMATION_ONLY" | "PRE_APPLICATION" | "PILOT_ONLY" | "ACTIVE" | "SUSPENDED" | "UNAVAILABLE" | "UNDER_DEVELOPMENT";
            publicDescription?: Record<string, never>;
            purpose?: Record<string, never>;
            typicalValidityDescription?: Record<string, never>;
            /** Format: date-time */
            updatedAt: string;
            version: string;
        };
        HealthResponseDto: {
            /** @example ok */
            status: string;
        };
        IdentityResponseDto: {
            /** Format: date-time */
            createdAt: string;
            displayName: string;
            id: string;
            organizationId?: Record<string, never>;
            personId?: Record<string, never>;
            /** @enum {string} */
            type: "INDIVIDUAL" | "ORGANIZATION" | "SERVICE";
            /** Format: date-time */
            updatedAt: string;
            userAccountId?: Record<string, never>;
        };
        ImportPortableServicePackDto: {
            package: Record<string, never>;
            /** Format: uuid */
            targetInstitutionId: string;
            /** Format: uuid */
            targetJurisdictionId: string;
            /** Format: uuid */
            targetServicePackId?: string;
        };
        ImportServicePackManifestDto: {
            /** @description Versioned service pack manifest payload */
            manifest: {
                [key: string]: unknown;
            };
        };
        InstitutionAttributionDto: {
            departmentId?: string;
            departmentName?: string;
            institutionCode: string;
            institutionId: string;
            institutionName: string;
            serviceId?: string;
            serviceName?: string;
            serviceSlug?: string;
        };
        InstitutionExternalAuthorityResponseDto: {
            /** Format: date-time */
            createdAt: string;
            effectiveFrom?: Record<string, never> | null;
            effectiveUntil?: Record<string, never> | null;
            /** Format: uuid */
            externalAuthorityId: string;
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            institutionId: string;
            relationshipLabel?: Record<string, never> | null;
            /** @enum {string} */
            status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
            /** Format: date-time */
            updatedAt: string;
        };
        InstitutionResponseDto: {
            /** @example DOT */
            code: string;
            /** Format: date-time */
            createdAt: string;
            description?: Record<string, never> | null;
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            jurisdictionId: string;
            /** @example Department of Transportation */
            name: string;
            /** @enum {string} */
            status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
            /** @enum {string} */
            type: "GOVERNMENT" | "MINISTRY" | "AGENCY" | "AUTHORITY" | "REGULATOR" | "STATUTORY_BODY" | "SPECIAL_ECONOMIC_ZONE_AUTHORITY" | "PUBLIC_BODY" | "OTHER";
            /** Format: date-time */
            updatedAt: string;
        };
        InstitutionStructureDto: {
            code: string;
            departments: components["schemas"]["StructureDepartmentDto"][];
            externalAuthorities: components["schemas"]["StructureExternalAuthorityDto"][];
            governmentBodies: components["schemas"]["StructureGovernmentBodyDto"][];
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            jurisdictionId: string;
            name: string;
            /** @enum {string} */
            status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
            /** @enum {string} */
            type: "GOVERNMENT" | "MINISTRY" | "AGENCY" | "AUTHORITY" | "REGULATOR" | "STATUTORY_BODY" | "SPECIAL_ECONOMIC_ZONE_AUTHORITY" | "PUBLIC_BODY" | "OTHER";
        };
        IssueOfficialInstrumentDto: {
            /** Format: uuid */
            caseId: string;
            computedFields?: Record<string, never>;
            controlledFields?: Record<string, never>;
            effectiveFrom?: string;
            effectiveUntil?: string;
            externalIssuerReference?: string;
            freeFormFields?: Record<string, never>;
            /** Format: uuid */
            governmentDecisionId: string;
            /** Format: uuid */
            holderIdentityId?: string;
            /** Format: uuid */
            holderOrganizationId?: string;
            idempotencyKey?: string;
            /** Format: uuid */
            instrumentTypeVersionId: string;
            /** Format: uuid */
            issuerAppointmentId?: string;
            /** Format: uuid */
            issuerDelegationId?: string;
            /** Format: uuid */
            issuerOfficeholderId: string;
            /** Format: uuid */
            issuerOfficeId: string;
            /** @enum {string} */
            issuerSource?: "ABSEZ_ISSUED" | "INSTITUTION_ISSUED" | "RETAINED_NATIONAL_COORDINATED" | "EXTERNAL_AUTHENTICATED";
            scope?: Record<string, never>;
            /** Format: uuid */
            sealDocumentVersionId?: string;
            /** Format: uuid */
            signatureDocumentVersionId?: string;
        };
        JurisdictionResponseDto: {
            /** @example US-FED */
            code: string;
            /** Format: date-time */
            createdAt: string;
            description?: Record<string, never> | null;
            /** Format: uuid */
            id: string;
            /** @example United States Federal Government */
            name: string;
            /** @enum {string} */
            status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
            /** @enum {string} */
            type: "NATIONAL" | "SUBNATIONAL" | "MUNICIPAL" | "SPECIAL_ECONOMIC_ZONE" | "REGULATORY" | "SUBJECT_MATTER" | "OTHER";
            /** Format: date-time */
            updatedAt: string;
        };
        JurisdictionStructureDto: {
            institutions: components["schemas"]["InstitutionStructureDto"][];
            jurisdiction: components["schemas"]["StructureJurisdictionSummaryDto"];
        };
        LegalHoldTargetDto: {
            notes?: string;
            /** Format: uuid */
            recordsClassificationId?: string;
            targetReference: string;
            /** @enum {string} */
            targetType: "MASTER_ADMINISTRATIVE_FILE" | "CASE" | "DOCUMENT" | "EVIDENCE" | "EVIDENCE_PACKET" | "RECORD_CLASS" | "PRESERVATION_COLLECTION";
        };
        LinkEvidenceRequirementDto: {
            /** Format: uuid */
            checklistItemId: string;
            effectiveFrom?: string;
            effectiveUntil?: string;
            limitations?: string;
            /** @enum {string} */
            relationship: "SATISFIES" | "PARTIALLY_SATISFIES" | "DOES_NOT_SATISFY" | "UNDER_REVIEW" | "NOT_APPLICABLE";
            /** @enum {string} */
            status?: "LINKED" | "UNDER_REVIEW" | "SATISFIED" | "PARTIALLY_SATISFIED" | "NOT_SATISFIED" | "SUPERSEDED" | "WITHDRAWN";
        };
        LocalizedLabelDto: {
            /** @description Default display label for the current locale context */
            label: string;
            /**
             * @description Localization key for client-side translation
             * @example citizen.action.pay_invoice
             */
            labelKey?: string;
            /**
             * @description Optional structured labels keyed by locale code
             * @example {
             *       "en": "Pay invoice"
             *     }
             */
            labels?: {
                [key: string]: string;
            };
        };
        LoginDto: {
            /** @example jane.citizen@example.gov */
            loginIdentifier: string;
            /** @example SecurePassword123! */
            password: string;
        };
        LoginResponseDto: {
            /** @enum {string} */
            assuranceLevel: "NONE" | "LOW" | "MEDIUM" | "HIGH";
            /** Format: date-time */
            authenticatedAt: string;
            /** @enum {string} */
            authMethod: "PASSWORD" | "OIDC" | "SERVICE_API_KEY" | "MFA_TOTP";
            /** Format: date-time */
            expiresAt: string;
            identityId: string;
            mfaSatisfied: boolean;
            oidcProviderCode?: string | null;
            sessionId: string;
            sessionToken: string;
        };
        LogoutAllResponseDto: {
            /** @description Number of sessions revoked for the current user account */
            revokedCount: number;
        };
        LogoutResponseDto: {
            /**
             * @description Always true once the current session is revoked
             * @enum {boolean}
             */
            revoked: true;
        };
        MatchPublicServicesDto: {
            /** @description Optional activity hints supplied by the citizen */
            activityHints?: string[];
            /** @enum {string} */
            applicantCategory?: "INDIVIDUAL" | "CITIZEN" | "RESIDENT" | "NON_RESIDENT" | "BUSINESS" | "COMPANY" | "INVESTOR" | "EMPLOYER" | "EMPLOYEE" | "AUTHORIZED_REPRESENTATIVE" | "PROFESSIONAL" | "GOVERNMENT_ENTITY" | "PARTNER_ORGANIZATION" | "OTHER";
            /** @description Citizen-facing need description or keywords */
            query: string;
        };
        MembershipResponseDto: {
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            effectiveFrom: string;
            effectiveUntil?: Record<string, never>;
            id: string;
            identityId: string;
            organizationId: string;
            roleLabel?: Record<string, never>;
            /** @enum {string} */
            status: "PENDING" | "ACTIVE" | "SUSPENDED" | "REVOKED";
            /** Format: date-time */
            updatedAt: string;
        };
        OfficeholderLinkResponseDto: {
            /** Format: date-time */
            createdAt: string;
            id: string;
            identityId: string;
            /** Format: date-time */
            linkedAt: string;
            linkedByIdentityId?: Record<string, never>;
            officeholderId: string;
            revokedAt?: Record<string, never>;
            /** @enum {string} */
            status: "PENDING" | "ACTIVE" | "REVOKED";
            /** Format: date-time */
            updatedAt: string;
        };
        OfficeholderResponseDto: {
            code: string;
            /** Format: date-time */
            createdAt: string;
            description?: Record<string, never> | null;
            /** Format: uuid */
            id: string;
            name: string;
            /** @enum {string} */
            status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
            /** Format: date-time */
            updatedAt: string;
        };
        OfficeResponseDto: {
            code: string;
            /** Format: date-time */
            createdAt: string;
            /** Format: uuid */
            departmentId: string;
            description?: Record<string, never> | null;
            /** Format: uuid */
            id: string;
            name: string;
            /** @enum {string} */
            status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
            /** Format: date-time */
            updatedAt: string;
        };
        OfficialAlertItemDto: {
            actionRoute: string;
            /** Format: uuid */
            alertId: string;
            alertNumber: string;
            isEmergency: boolean;
            isEnforcement: boolean;
            observedAt: string;
            observedCondition: string;
            recommendedReview: string;
            status: string;
        };
        OfficialAlertsResponseDto: {
            generatedAt: string;
            items: components["schemas"]["OfficialAlertItemDto"][];
            totalCount: number;
        };
        OfficialAppointmentDetailResponseDto: {
            appointmentReference: string;
            completionDisclaimer: components["schemas"]["LocalizedLabelDto"];
            departmentName: string;
            /** Format: uuid */
            id: string;
            isVirtual: boolean;
            locationName?: Record<string, never>;
            operationalNotes?: Record<string, never>;
            reasonName?: Record<string, never>;
            scheduledEndsAt?: Record<string, never>;
            scheduledStartsAt?: Record<string, never>;
            serviceName?: Record<string, never>;
            status: string;
        };
        OfficialAppointmentDto: {
            /** Format: uuid */
            appointmentId: string;
            /** Format: uuid */
            departmentId: string;
            departmentName: string;
            effectiveFrom: string;
            effectiveUntil?: Record<string, never>;
            /** Format: uuid */
            institutionId: string;
            institutionName: string;
            /** Format: uuid */
            officeholderId: string;
            /** Format: uuid */
            officeId: string;
            officeName: string;
            status: string;
        };
        OfficialAppointmentsListResponseDto: {
            disclaimer: components["schemas"]["LocalizedLabelDto"];
            items: components["schemas"]["OfficialAppointmentSummaryDto"][];
        };
        OfficialAppointmentSummaryDto: {
            appointmentReference: string;
            departmentName: string;
            /** Format: uuid */
            id: string;
            isVirtual: boolean;
            reasonName?: Record<string, never>;
            scheduledEndsAt?: Record<string, never>;
            scheduledStartsAt?: Record<string, never>;
            serviceName?: Record<string, never>;
            status: string;
        };
        OfficialAvailableActionDto: {
            actionKey: string;
            /** @enum {string} */
            authorityAction?: "RETRIEVE" | "SUMMARIZE" | "PREPARE" | "REVIEW" | "VERIFY" | "CHECK" | "RECOMMEND" | "CONCUR" | "APPROVE" | "DECIDE" | "SIGN" | "ISSUE" | "INSPECT" | "ENFORCE" | "SUSPEND" | "REVOKE" | "HEAR_REVIEW" | "ADMINISTER" | "AUDIT" | "CONSULT" | "SUPERVISE" | "LIAISE";
            available: boolean;
            description: string;
            /** @enum {string} */
            evaluationOutcome?: "ALLOW" | "DENY" | "BLOCKED" | "REQUIRES_EXTERNAL_DETERMINATION" | "SAFE_HALT";
            executionRoute: string;
            /** Format: uuid */
            functionAuthorityRecordId?: Record<string, never>;
            isConsequential: boolean;
            label: string;
            requiresExecutionTimeRevalidation: boolean;
            unavailableReason?: Record<string, never>;
        };
        OfficialAvailableActionsResponseDto: {
            actions: components["schemas"]["OfficialAvailableActionDto"][];
            /** Format: uuid */
            caseId: string;
            caseNumber: string;
            evaluatedAt: string;
            /** @description Available actions are descriptive only; execution endpoints re-evaluate authority */
            executionRequiresAuthorityRevalidation: boolean;
        };
        OfficialCaseDetailResponseDto: {
            accessKind: string;
            activeWorkflowSteps: components["schemas"]["OfficialCaseWorkflowStepDto"][];
            assignmentDoesNotImplyAuthority: boolean;
            /** Format: uuid */
            caseId: string;
            caseManagerName?: Record<string, never>;
            /** Format: uuid */
            caseManagerOfficeholderId?: Record<string, never>;
            caseNumber: string;
            departmentName: string;
            institutionName: string;
            openedAt: string;
            priority: string;
            serviceName: string;
            status: string;
        };
        OfficialCaseListItemDto: {
            accessKind: string;
            assignedOfficeholderName?: Record<string, never>;
            /** Format: uuid */
            caseId: string;
            caseNumber: string;
            departmentName: string;
            openedAt: string;
            priority: string;
            serviceName: string;
            status: string;
        };
        OfficialCasesListResponseDto: {
            items: components["schemas"]["OfficialCaseListItemDto"][];
            totalCount: number;
        };
        OfficialCaseWorkflowStepDto: {
            status: string;
            stepKey: string;
            stepLabel?: Record<string, never>;
            stepType: string;
        };
        OfficialCivilRegistryQueueDto: {
            caseIds: string[];
            certificateIds: string[];
            count: number;
            recordIds: string[];
            submissionIds: string[];
        };
        OfficialCivilRegistryWorkspaceDto: {
            certificateIssuanceQueue: components["schemas"]["OfficialCivilRegistryQueueDto"];
            correctionRequests: components["schemas"]["OfficialCivilRegistryQueueDto"];
            decisionReadyRegistrations: components["schemas"]["OfficialCivilRegistryQueueDto"];
            evidenceDeficiencies: components["schemas"]["OfficialCivilRegistryQueueDto"];
            pendingRegistrations: components["schemas"]["OfficialCivilRegistryQueueDto"];
            recordAmendmentRequests: components["schemas"]["OfficialCivilRegistryQueueDto"];
            restrictedOrSealedWarnings: components["schemas"]["OfficialCivilRegistryQueueDto"];
            slaRisks: components["schemas"]["OfficialCivilRegistryQueueDto"];
            templateDisclaimer: string;
        };
        OfficialCorporateRegistryWorkspaceResponseDto: {
            amendmentQueue: Record<string, never>[];
            annualFilingIssues: Record<string, never>[];
            assignmentDoesNotImplyAuthority: boolean;
            beneficialOwnershipReview: Record<string, never>[];
            certificateIssuance: Record<string, never>[];
            dissolutionRestoration: Record<string, never>[];
            generatedAt: string;
            incorporationQueue: Record<string, never>[];
            nameReservationQueue: Record<string, never>[];
            slaRisks: Record<string, never>[];
            suspectedInconsistencies: Record<string, never>[];
        };
        OfficialDelegationDto: {
            /** Format: uuid */
            delegationId: string;
            effectiveFrom: string;
            effectiveUntil?: Record<string, never>;
            /** Format: uuid */
            institutionId: string;
            institutionName: string;
            scopeDescription: string;
            status: string;
        };
        OfficialImmigrationAvailableActionDto: {
            actionKey: string;
            available: boolean;
            label: string;
            unavailableReason: Record<string, never> | null;
        };
        OfficialImmigrationAvailableActionsResponseDto: {
            actions: components["schemas"]["OfficialImmigrationAvailableActionDto"][];
            caseId: string;
        };
        OfficialImmigrationQueueMetricDto: {
            count: number;
            label: string;
            queueKey: string;
        };
        OfficialImmigrationWorkspaceResponseDto: {
            departmentScopeLabel: string;
            disclaimer: string;
            queues: components["schemas"]["OfficialImmigrationQueueMetricDto"][];
            slaRiskCount: number;
            unresolvedExternalDeterminationsCount: number;
        };
        OfficialInstitutionalContextDto: {
            departmentIds: string[];
            institutionIds: string[];
            jurisdictionIds: string[];
            officeIds: string[];
        };
        OfficialMeResponseDto: {
            activeAppointments: components["schemas"]["OfficialAppointmentDto"][];
            activeDelegations: components["schemas"]["OfficialDelegationDto"][];
            assuranceLevel: string;
            /** @description Explicit disclaimer that authentication does not confer universal authority */
            authorityDisclaimer: string;
            displayName: string;
            /** @description Always false — no blanket universal authority statement is issued */
            hasUniversalAuthority: boolean;
            /** Format: uuid */
            identityId: string;
            /** @enum {string} */
            identityType: "INDIVIDUAL" | "ORGANIZATION" | "SERVICE";
            institutionalContext: components["schemas"]["OfficialInstitutionalContextDto"];
            officeholderLinks: components["schemas"]["OfficialOfficeholderLinkDto"][];
            technicalCapabilities: components["schemas"]["OfficialTechnicalCapabilitiesDto"];
            /** Format: uuid */
            userAccountId?: Record<string, never>;
        };
        OfficialOfficeholderLinkDto: {
            /** Format: uuid */
            linkId: string;
            officeholderCode: string;
            /** Format: uuid */
            officeholderId: string;
            officeholderName: string;
            status: string;
        };
        OfficialTechnicalCapabilitiesDto: {
            canAccessOfficialWorkspace: boolean;
            hasActiveAppointment: boolean;
            hasOfficeholderLink: boolean;
            isServiceIdentity: boolean;
            isTechnicalAdminOnly: boolean;
            substantiveAccessAllowed: boolean;
        };
        OfficialWorkQueueEntryDto: {
            actionRoute: string;
            /** Format: uuid */
            assignedOfficeholderId?: Record<string, never>;
            assignedOfficeholderName?: Record<string, never>;
            /** Format: uuid */
            caseId?: Record<string, never>;
            caseNumber?: Record<string, never>;
            deadlineAt?: Record<string, never>;
            /** Format: uuid */
            departmentId: string;
            departmentName: string;
            /** Format: uuid */
            institutionId: string;
            institutionName: string;
            priority: string;
            queueItemType: string;
            reason: string;
            serviceName?: Record<string, never>;
            sortKey: string;
            status: string;
        };
        OfficialWorkQueueResponseDto: {
            generatedAt: string;
            items: components["schemas"]["OfficialWorkQueueEntryDto"][];
            totalCount: number;
        };
        OfficialWorkspaceResponseDto: {
            appealsAssignments: components["schemas"]["WorkspaceCountSummaryDto"];
            assignedCases: components["schemas"]["WorkspaceCountSummaryDto"];
            assignmentDoesNotImplyAuthority: boolean;
            casesAwaitingReview: components["schemas"]["WorkspaceCountSummaryDto"];
            civilRegistry: components["schemas"]["OfficialCivilRegistryWorkspaceDto"];
            completenessIssues: components["schemas"]["WorkspaceCountSummaryDto"];
            decisionReadyCases: components["schemas"]["WorkspaceCountSummaryDto"];
            departmentUnassignedCases: components["schemas"]["WorkspaceCountSummaryDto"];
            expiringInstruments: components["schemas"]["WorkspaceCountSummaryDto"];
            generatedAt: string;
            governmentMessages: components["schemas"]["WorkspaceCountSummaryDto"];
            informationRequests: components["schemas"]["WorkspaceCountSummaryDto"];
            inspectionTasks: components["schemas"]["WorkspaceCountSummaryDto"];
            intelligenceAlerts: components["schemas"]["WorkspaceAlertSummaryDto"][];
            pendingReferrals: components["schemas"]["WorkspaceCountSummaryDto"];
            slaRisks: components["schemas"]["WorkspaceSlaRiskDto"][];
            upcomingAppointments: number;
        };
        OidcLoginDto: {
            /** @description OIDC access token from the identity provider */
            accessToken: string;
            /** @description Configured provider code when multiple IdPs are enabled */
            providerCode?: string;
        };
        OrganizationResponseDto: {
            code: string;
            /** Format: date-time */
            createdAt: string;
            description?: Record<string, never>;
            id: string;
            name: string;
            /** @enum {string} */
            status: "PENDING" | "ACTIVE" | "SUSPENDED" | "REVOKED";
            /** Format: date-time */
            updatedAt: string;
        };
        PaginatedPublicServicesResponseDto: {
            items: components["schemas"]["PublicServiceSummaryResponseDto"][];
            limit: number;
            page: number;
            total: number;
            totalPages: number;
        };
        PaginationMetaDto: {
            hasNextPage: boolean;
            hasPreviousPage: boolean;
            page: number;
            pageSize: number;
            totalItems: number;
            totalPages: number;
        };
        PaymentTransactionRecordDto: {
            amountCents: number;
            /** Format: date-time */
            authorizedAt: string | null;
            /** Format: date-time */
            createdAt: string;
            currency: string;
            failureReason: string | null;
            id: string;
            paymentIntentId: string;
            paymentProviderConfigurationId: string;
            providerTransactionReference: string;
            rawResponse: ({
                [key: string]: unknown;
            } | unknown[] | string | number | boolean) | null;
            /** Format: date-time */
            settledAt: string | null;
            /** @enum {string} */
            status: "PENDING" | "AUTHORIZED" | "SETTLED" | "FAILED" | "REVERSED" | "CHARGEBACK";
            /** Format: date-time */
            updatedAt: string;
        };
        PersonResponseDto: {
            /** Format: date-time */
            createdAt: string;
            displayName?: Record<string, never>;
            familyName: string;
            givenName: string;
            id: string;
            /** Format: date-time */
            updatedAt: string;
        };
        PlatformAdminAvailableActionDto: {
            actionKey: string;
            description: string;
            executionRoute: string;
            isConsequential: boolean;
            label: string;
            /** @description When true, action requires governed workflow rather than direct mutation */
            requiresGovernedWorkflow: boolean;
        };
        PlatformAdminAvailableActionsResponseDto: {
            actions: components["schemas"]["PlatformAdminAvailableActionDto"][];
            authorityDisclaimer: string;
            configurationDisclaimer: string;
            /** @example false */
            hasSubstantiveGovernmentAuthority: boolean;
        };
        PlatformAdminCountSummaryDto: {
            count: number;
            label: string;
            status?: string;
        };
        PlatformAdminHomeResponseDto: {
            authorityDisclaimer: string;
            configurationDisclaimer: string;
            displayName: string;
            /** @example false */
            hasSubstantiveGovernmentAuthority: boolean;
            identityId: string;
            operationalAlerts: components["schemas"]["PlatformAdminCountSummaryDto"][];
            productionReadinessConditions: components["schemas"]["PlatformAdminCountSummaryDto"][];
            summaryCounts: components["schemas"]["PlatformAdminCountSummaryDto"][];
            systemDependencies: components["schemas"]["PlatformAdminCountSummaryDto"][];
        };
        PlatformAdminListItemDto: {
            /** @description Administrative attention signal; not legal status */
            attentionSignal?: string;
            code: string;
            departmentName?: string;
            /** Format: uuid */
            id: string;
            institutionName?: string;
            name: string;
            status?: string;
        };
        PlatformAdminListResponseDto: {
            authorityDisclaimer: string;
            configurationDisclaimer: string;
            /** @example false */
            hasSubstantiveGovernmentAuthority: boolean;
            items: components["schemas"]["PlatformAdminListItemDto"][];
            totalCount: number;
        };
        PropertyRegistryApplicationRecordDto: {
            applicantIdentityId: string;
            applicationReference: string;
            /** @enum {string} */
            applicationType: "SEARCH" | "EXTRACT_REQUEST" | "TRANSFER" | "NEW_PARCEL" | "SUBDIVISION" | "CONSOLIDATION" | "ENCUMBRANCE" | "ENCUMBRANCE_RELEASE" | "EASEMENT" | "SURVEY" | "CORRECTION" | "ADDRESS_CHANGE" | "VALUATION" | "APPEAL";
            /** Format: date-time */
            createdAt: string;
            id: string;
            mayMutateTitle: boolean;
            organizationId: string | null;
            parcelId: string | null;
            /** @enum {string} */
            status: "DRAFT" | "SUBMITTED" | "UNDER_REVIEW" | "PENDING_DECISION" | "APPROVED" | "REJECTED" | "WITHDRAWN";
            /** Format: date-time */
            submittedAt: string | null;
            /** Format: date-time */
            updatedAt: string;
        };
        ProposeEvidenceQualityAssessmentDto: {
            assessedAt: string;
            /** @enum {string} */
            criterion: "RELEVANCE" | "PROVENANCE" | "AUTHENTICITY" | "COMPLETENESS" | "CURRENCY" | "INDEPENDENCE" | "RELIABILITY" | "INTEGRITY" | "SCOPE" | "FITNESS_FOR_PURPOSE";
            limitations?: string;
            notes?: string;
            /** @enum {string} */
            rating: "STRONG" | "ADEQUATE" | "WEAK" | "INSUFFICIENT" | "UNASSESSED";
        };
        ProtectedProfileResponseDto: {
            assuranceLevel: string;
            governmentAuthorityNote: string;
            /** @example false */
            hasGovernmentAuthority: boolean;
            /** @example false */
            hasInstitutionalRelationships: boolean;
            identityId: string;
            sessionId: string;
        };
        PublicCivilCertificateVerificationResponseDto: {
            certificateType: string;
            documentHash: string;
            /** @description Issuing institution name */
            issuer: string;
            minimalDisclosureDisclaimer: string;
            publicStatusLabel: string;
            qrTokenReference?: string | null;
            registryVersionNumber?: number;
            /** @enum {string} */
            validityStatus: "VALID" | "REVOKED" | "SUPERSEDED" | "UNKNOWN";
            verificationReference: string;
            verifiedAt: string;
        };
        PublicClinicalTrialDiscoveryResponseDto: {
            disclaimer: string;
            discoveryIsNotRecommendation: boolean;
            /** @description Participant fields that public discovery never exposes */
            forbiddenParticipantFields: ("participantProfileId" | "subjectIdentityId" | "enrollmentReference" | "screeningDataReference" | "participantReference" | "enrollments" | "screenings" | "interests")[];
            participantDataIncluded: boolean;
            trials: components["schemas"]["PublicClinicalTrialListingDto"][];
        };
        PublicClinicalTrialListingDto: {
            broadEligibilitySummary: string | null;
            condition: components["schemas"]["ClinicalTrialConditionDto"] | null;
            discoveryIsNotRecommendation: boolean;
            eligibilityCriteria: components["schemas"]["ClinicalTrialEligibilityCriterionDto"][];
            intervention: components["schemas"]["ClinicalTrialCodeLabelDto"] | null;
            listingIsNotRegulatoryApproval: boolean;
            /** @enum {string} */
            listingLifecycleStatus: "DRAFT" | "SUBMITTED" | "UNDER_REVIEW" | "APPROVED_FOR_LISTING" | "RECRUITING" | "ACTIVE_NOT_RECRUITING" | "SUSPENDED" | "TERMINATED" | "COMPLETED" | "ARCHIVED";
            locationSummary: string | null;
            maximumAgeYears: number | null;
            minimumAgeYears: number | null;
            phase: components["schemas"]["ClinicalTrialCodeLabelDto"] | null;
            publicSummary: string | null;
            /** @enum {string} */
            recruitmentStatus: "NOT_YET_RECRUITING" | "RECRUITING" | "ENROLLING_BY_INVITATION" | "ACTIVE_NOT_RECRUITING" | "COMPLETED" | "SUSPENDED" | "WITHDRAWN" | "UNKNOWN";
            sponsor: components["schemas"]["ClinicalTrialSponsorDto"];
            title: string | null;
            trialNumber: string;
        };
        PublicCorporateRegistryVerificationResponseDto: {
            disclaimer: string;
            jurisdictionCode: string | null;
            registeredName: string | null;
            registrationReference: string | null;
            status: string;
            verificationTimestamp: string;
        };
        PublicCustomsTradeVerificationResponseDto: {
            /** @description Policy-permitted public facts keyed by fact name (e.g. importerRegistered, exporterRegistered); empty when not found */
            publicFacts: {
                [key: string]: (string | boolean) | null;
            };
            reference: string;
            ruleEnvironment: string;
            /** @enum {string} */
            verificationState: "UNKNOWN" | "VALID_FORMAT" | "NOT_FOUND";
        };
        PublicEducationCredentialVerificationResponseDto: {
            credentialReference: string;
            /** Format: date-time */
            issuedAt: string | null;
            /** @enum {string} */
            lifecycleStatus: "DRAFT" | "PENDING_ISSUANCE" | "ISSUED" | "EFFECTIVE" | "REVOKED" | "SUPERSEDED";
            /** @enum {string} */
            verificationOutcome: "REFERENCE_LOCATED";
        };
        PublicEligibilityResultResponseDto: {
            /** @description Preliminary guidance only; null when guidance cannot be derived */
            eligible: boolean | null;
            guidanceNotes: string[];
            matchedRules: string[];
            nonbindingDisclaimer: string;
            serviceId: string;
            serviceVersionId: string;
            unmatchedRequiredRules: string[];
        };
        PublicInstrumentVerificationResponseDto: {
            cryptographicVerificationDetails?: string[];
            cryptographicVerificationPassed?: boolean;
            /** @enum {string} */
            currentLifecycleStatus?: "DRAFT" | "PENDING_ISSUANCE" | "ISSUED" | "EFFECTIVE" | "SUSPENDED" | "PARTIALLY_SUSPENDED" | "REVOCATION_DECIDED" | "REVOKED" | "REINSTATED" | "EXPIRED" | "SURRENDERED" | "SUPERSEDED" | "AMENDED" | "VARIED" | "RENEWED" | "REPLACED" | "CLOSED";
            currentVersionIndicator?: number;
            effectiveDate?: string;
            expiryDate?: string;
            holderDisplay?: string;
            instrumentNumber?: string;
            instrumentType?: string;
            issuer?: string;
            qrReferenceDisclaimer: string;
            scopeSummary?: string;
            /** @enum {string} */
            verificationStatus: "CURRENT" | "NOT_YET_EFFECTIVE" | "EXPIRED" | "SUSPENDED" | "REVOKED" | "SUPERSEDED" | "REPLACED" | "SURRENDERED" | "UNKNOWN_OR_UNVERIFIABLE" | "VALID_REFERENCE" | "NOT_PUBLICLY_DISCLOSABLE";
            verificationTimestamp: string;
            verificationUri: string;
        };
        PublicLicenseVerificationResponseDto: {
            disclaimer: string;
            expiresAt: string | null;
            lifecycleStatus: string;
            /** @enum {string} */
            verificationKind: "DRIVER_LICENSE";
            verificationTimestamp: string;
        };
        PublicOperatorVerificationResponseDto: {
            disclaimer: string;
            lifecycleStatus: string;
            /** @enum {string} */
            verificationKind: "TRANSPORT_OPERATOR";
            verificationTimestamp: string;
        };
        PublicPropertyRegistryVerificationResponseDto: {
            disclaimer: string;
            locationSummary: string | null;
            parcelReference: string;
            status: string;
            verificationTimestamp: string;
        };
        PublicSafetyNoticeResponseDto: {
            /** @description Published (or approved) notice content */
            content: string;
            disclaimer: string;
            noticeReference: string;
            publishedAt: string | null;
            /** @enum {string} */
            status: "DRAFT" | "APPROVED" | "PUBLISHED" | "WITHDRAWN";
        };
        PublicServiceChecklistItemDto: {
            conditionExpression: ({
                [key: string]: unknown;
            } | unknown[] | string | number | boolean) | null;
            description: string | null;
            isRequired: boolean;
            itemCode: string;
            label: string;
        };
        PublicServiceDetailResponseDto: {
            activitiesCovered: string[];
            activitiesExcluded: string[];
            applicationCapable: boolean;
            authorityClassificationSummary: string | null;
            /** @enum {string} */
            availabilityStatus: "HIDDEN" | "INFORMATION_ONLY" | "PRE_APPLICATION" | "PILOT_ONLY" | "ACTIVE" | "SUSPENDED" | "UNAVAILABLE" | "UNDER_DEVELOPMENT";
            eligibleApplicantCategories: ("INDIVIDUAL" | "CITIZEN" | "RESIDENT" | "NON_RESIDENT" | "BUSINESS" | "COMPANY" | "INVESTOR" | "EMPLOYER" | "EMPLOYEE" | "AUTHORIZED_REPRESENTATIVE" | "PROFESSIONAL" | "GOVERNMENT_ENTITY" | "PARTNER_ORGANIZATION" | "OTHER")[];
            expectedHighLevelStages: components["schemas"]["PublicServiceStageDto"][];
            expectedOutputs: components["schemas"]["PublicServiceOutputDto"][];
            fees: components["schemas"]["PublicServiceFeeDto"][];
            geographicScope: string | null;
            informationLastVerifiedAt: string | null;
            isInformationOnly: boolean;
            isPilotOnly: boolean;
            majorGovernmentDependencies: ({
                [key: string]: unknown;
            } | unknown[] | string | number | boolean) | null;
            nonbindingGuidanceDisclaimer: string;
            plainLanguagePurpose: string;
            publicDisclaimer: string | null;
            publicName: string;
            responsibleDepartmentDisplayName: string;
            reviewComplaintRoutes: components["schemas"]["PublicServiceRedressRouteDto"][];
            serviceFamilyName: string;
            serviceId: string;
            /** @enum {string|null} */
            serviceType: "APPLICATION" | "REGISTRATION" | "LICENCE" | "PERMIT" | "CERTIFICATION" | "INFORMATION" | "OTHER" | null;
            serviceVersionId: string;
            slug: string;
            typicalValidity: string | null;
            versionLabel: string;
        };
        PublicServiceEligibilityDto: {
            /** @enum {string} */
            applicantCategory?: "INDIVIDUAL" | "CITIZEN" | "RESIDENT" | "NON_RESIDENT" | "BUSINESS" | "COMPANY" | "INVESTOR" | "EMPLOYER" | "EMPLOYEE" | "AUTHORIZED_REPRESENTATIVE" | "PROFESSIONAL" | "GOVERNMENT_ENTITY" | "PARTNER_ORGANIZATION" | "OTHER";
            /** @description Non-persistent applicant attributes used for guidance only */
            attributes?: Record<string, never>;
            /** @description Optional service version id when checking against a pinned package */
            serviceVersionId?: string;
        };
        PublicServiceEligibilityGuidanceDto: {
            description: string;
            isRequired: boolean;
            label: string;
            ruleCode: string;
        };
        PublicServiceFamilyResponseDto: {
            code: string;
            description: string | null;
            id: string;
            name: string;
        };
        PublicServiceFeeDto: {
            amountCents: number | null;
            code: string;
            currency: string;
            description: string | null;
            isVariable: boolean;
            label: string;
        };
        PublicServiceOutputDto: {
            description: string | null;
            label: string;
            outputCode: string;
            validityLabel: string | null;
        };
        PublicServiceRedressRouteDto: {
            contactReference: string | null;
            description: string | null;
            label: string;
            routeCode: string;
        };
        PublicServiceStageDto: {
            description: string | null;
            estimatedDurationLabel: string | null;
            label: string;
            stageCode: string;
        };
        PublicServiceSummaryResponseDto: {
            activitiesCovered: string[];
            applicationCapable: boolean;
            /** @enum {string} */
            availabilityStatus: "HIDDEN" | "INFORMATION_ONLY" | "PRE_APPLICATION" | "PILOT_ONLY" | "ACTIVE" | "SUSPENDED" | "UNAVAILABLE" | "UNDER_DEVELOPMENT";
            eligibleApplicantCategories: ("INDIVIDUAL" | "CITIZEN" | "RESIDENT" | "NON_RESIDENT" | "BUSINESS" | "COMPANY" | "INVESTOR" | "EMPLOYER" | "EMPLOYEE" | "AUTHORIZED_REPRESENTATIVE" | "PROFESSIONAL" | "GOVERNMENT_ENTITY" | "PARTNER_ORGANIZATION" | "OTHER")[];
            informationLastVerifiedAt: string | null;
            isInformationOnly: boolean;
            isPilotOnly: boolean;
            nonbindingGuidanceDisclaimer: string;
            plainLanguagePurpose: string;
            publicName: string;
            responsibleDepartmentDisplayName: string;
            serviceFamilyName: string;
            serviceId: string;
            /** @enum {string|null} */
            serviceType: "APPLICATION" | "REGISTRATION" | "LICENCE" | "PERMIT" | "CERTIFICATION" | "INFORMATION" | "OTHER" | null;
            serviceVersionId: string;
            slug: string;
            versionLabel: string;
        };
        PublicVehicleVerificationResponseDto: {
            disclaimer?: string;
            jurisdictionCode?: string;
            registrationStatusLabel?: string;
            vehicleCategoryCode?: string | null;
            /** @description Current registration lifecycle status, or 'UNKNOWN' */
            verificationState?: string;
        };
        QualityAssessmentInput: Record<string, never>;
        QueryDashboardDto: {
            /** Format: uuid */
            caseAssignmentId?: string;
            /** Format: uuid */
            dashboardDefinitionId: string;
            /**
             * Format: uuid
             * @description Requested department filter only; access is verified against authenticated actor entitlements
             */
            departmentId?: string;
            filters?: {
                [key: string]: string;
            };
            /**
             * Format: uuid
             * @description Requested institution filter only; access is verified against authenticated actor entitlements
             */
            institutionId?: string;
            /** @enum {string} */
            purpose: "OPERATIONAL_OVERSIGHT" | "EXECUTIVE_BRIEFING" | "DEPARTMENT_MANAGEMENT" | "CASE_WORK" | "AUDIT_REVIEW" | "TECHNICAL_OPERATIONS";
            securityClearanceLevel?: string;
            /** @enum {string} */
            sensitivityScope: "PUBLIC_SUMMARY" | "OFFICIAL" | "RESTRICTED" | "HIGHLY_RESTRICTED";
        };
        ReadinessChecksDto: {
            /**
             * @example up
             * @enum {string}
             */
            database: "up" | "down";
            /**
             * @example up
             * @enum {string}
             */
            redis: "up" | "down";
        };
        ReadyResponseDto: {
            checks: components["schemas"]["ReadinessChecksDto"];
            /**
             * @example ready
             * @enum {string}
             */
            status: "ready" | "not_ready";
        };
        ReceiveComplianceSubmissionDto: {
            answersData: Record<string, never>;
            complianceMatterId: string;
            continuingObligationId: string;
            declarationReference?: string;
            documentReferences?: string[];
            evidenceReferences?: string[];
            reportingPeriodEnd: string;
            reportingPeriodStart: string;
            representativeAuthorityId?: string;
        };
        ReceiveEvidenceDto: {
            authorOrIssuingBody?: string;
            /** Format: uuid */
            caseId: string;
            confidentialityClassification: string;
            dateCreated?: string;
            dateReceived: string;
            description?: string;
            /** Format: uuid */
            documentVersionId?: string;
            /** @enum {string} */
            evidenceType: "DOCUMENT" | "DATA_EXTRACT" | "REGISTRY_RECORD" | "PROFESSIONAL_CERTIFICATION" | "PHOTOGRAPH" | "STATEMENT" | "OTHER";
            externalRecordReference?: string;
            integrityReference: string;
            limitations?: string;
            periodCovered?: string;
            retentionRuleReference?: string;
            /** @enum {string} */
            source: "APPLICANT" | "THIRD_PARTY" | "GOVERNMENT_REGISTRY" | "PROFESSIONAL_BODY" | "INTERNAL" | "OTHER";
            submittingParty: string;
            title: string;
            validFrom?: string;
            validUntil?: string;
        };
        RecordAiOutputEditDto: Record<string, never>;
        RecordAiReviewDto: Record<string, never>;
        RecordEvidencePurposeAcceptanceDto: {
            decidedAt: string;
            /** @enum {string} */
            decision: "ACCEPTED" | "REJECTED" | "LIMITED";
            limitations?: string;
            /** @enum {string} */
            purpose: "COMPLETENESS" | "SUBSTANTIVE_REVIEW" | "PROFESSIONAL_REVIEW" | "INSPECTION" | "EXTERNAL_REFERRAL" | "FUTURE_DECISION_PACKET" | "COMPLIANCE" | "OTHER_APPROVED_PURPOSE";
            reason?: string;
            /** Format: uuid */
            reviewerOfficeholderId?: string;
            scope?: string;
        };
        RecordEvidenceVerificationDto: {
            /** Format: uuid */
            authorityEvaluationRecordId?: string;
            /** @enum {string} */
            category: "INTEGRITY" | "ISSUER" | "SIGNATURE" | "SEAL" | "IDENTITY" | "DATE" | "REGISTRY_MATCH" | "CONTENT_FACT" | "PROFESSIONAL" | "OTHER_CONTROLLED_METHOD";
            expiresAt?: string;
            externalAuthorityReference?: string;
            /** @default false */
            isAiProposed: boolean;
            limitations?: string;
            performedAt: string;
            professionalReference?: string;
            /** @enum {string} */
            result: "CONFIRMED" | "NOT_CONFIRMED" | "INCONCLUSIVE" | "COULD_NOT_VERIFY";
            /** @enum {string} */
            verificationMethod: "CHECKSUM_MATCH" | "DIGITAL_SIGNATURE_VALIDATION" | "REGISTRY_LOOKUP" | "ISSUER_CONFIRMATION" | "PROFESSIONAL_REGISTER_LOOKUP" | "VISUAL_INSPECTION" | "OTHER_CONTROLLED_METHOD" | "UNKNOWN";
            verificationSource: string;
            /** Format: uuid */
            verifiedByOfficeholderId?: string;
            whatWasVerified: string;
        };
        RecordExternalDeterminationDto: Record<string, never>;
        RecordInstitutionalActDto: {
            actorIdentityId?: string;
            actorOfficeholderId?: string;
            /** @enum {string} */
            actType: "DECISION" | "CONCURRENCE" | "CONSULTATION" | "SUPERVISION" | "LIAISON" | "PROFESSIONAL_DETERMINATION" | "COORDINATED_ACTION" | "DATA_EXCHANGE";
            decisionOrAction: string;
            evidenceReference?: string;
            externalAuthorityId?: string;
            functionAuthorityRecordId: string;
            institutionId?: string;
            legalEffect?: string;
            /** Format: date-time */
            performedAt?: string;
        };
        RecordMaturityDecisionDto: {
            actorRoleMarker?: string;
            /** @enum {string} */
            decision: "APPROVED" | "REJECTED" | "DEFERRED" | "CONDITIONALLY_APPROVED";
        };
        RecordMetricCalculationRunDto: {
            calculationTrace: Record<string, never>;
            excludedRecords?: Record<string, never>[];
            exclusionReasons?: Record<string, never>[];
            inputCount: number;
            inputRecordReferences?: Record<string, never>[];
            metricVersionId: string;
            /** Format: date-time */
            periodEnd: string;
            /** Format: date-time */
            periodStart: string;
            qualityAssessments?: components["schemas"]["QualityAssessmentInput"][];
            qualityFindings?: Record<string, never>[];
            resultValue?: string;
        };
        RecordObligationStatusDto: {
            /** @enum {string} */
            actor?: "COMPLIANCE_ADMIN" | "REVIEWER" | "SYSTEM" | "HOLDER" | "AI_ASSISTANCE" | "PAYMENT_SYSTEM";
            metadata?: Record<string, never>;
            reason?: string;
            /** @enum {string} */
            toStatus: "NOT_YET_DUE" | "DUE" | "SUBMITTED" | "UNDER_REVIEW" | "SATISFIED" | "PARTIALLY_SATISFIED" | "OVERDUE" | "DISPUTED" | "EXEMPTED_BY_AUTHORIZED_ACTION" | "SUPERSEDED" | "CLOSED";
        };
        RecordRevalidationDto: Record<string, never>;
        RecordStrategicProjectStageDto: {
            effectiveFrom: string;
            institutionalStateReference: string;
            sourceRecordId?: string;
            sourceRecordType?: string;
            /** @enum {string} */
            stage: "INQUIRY" | "QUALIFICATION" | "APPLICATION" | "UNDER_REVIEW" | "CONDITIONALLY_ADVANCING" | "APPROVED" | "PRE_IMPLEMENTATION" | "IMPLEMENTATION" | "PARTIALLY_OPERATIONAL" | "OPERATIONAL" | "SUSPENDED" | "CLOSED";
        };
        RegisterExternalDeterminationDto: {
            authorityDependencyId: string;
            /** @example NAT-GOV-2026-00142 */
            determinationReference: string;
            /** @enum {string} */
            determinationStatus: "PENDING" | "GRANTED" | "DENIED" | "PARTIALLY_GRANTED" | "WITHDRAWN" | "EXPIRED";
            /** Format: date-time */
            effectiveDate?: string;
            effectOnInstitutionAction?: string;
            /** Format: date-time */
            expiryDate?: string;
            externalAuthorityId: string;
            /** @default false */
            isAuthenticated: boolean;
            referralBasis?: string;
            requiredDetermination?: string;
            retainedQuestion?: string;
            scope?: string;
        };
        RejectServicePackDto: {
            reason: string;
            servicePackVersionId: string;
        };
        ReleaseLegalHoldDto: {
            /** @description Court order or instruction authorising release */
            releaseAuthorityReference: string;
            releaseReason: string;
        };
        RenderedFormFieldSchemaDto: {
            conditionalRules: components["schemas"]["FormConditionalRuleSchemaDto"][];
            /** @enum {string} */
            dataClassification: "PUBLIC" | "INTERNAL" | "RESTRICTED" | "SENSITIVE";
            declaration?: components["schemas"]["FormDeclarationOptionsDto"];
            /** @description Default value (any JSON value) */
            defaultValue?: Record<string, never>;
            /** @description Localized text keyed by locale code */
            description?: {
                [key: string]: string;
            };
            displayOrder: number;
            fieldKey: string;
            /** @enum {string} */
            fieldType: "TEXT" | "TEXTAREA" | "NUMBER" | "INTEGER" | "DECIMAL" | "DATE" | "DATETIME" | "BOOLEAN" | "SELECT" | "MULTISELECT" | "RADIO" | "CHECKBOX" | "EMAIL" | "PHONE" | "COUNTRY" | "CURRENCY" | "ADDRESS" | "IDENTIFIER" | "FILE_REFERENCE" | "DECLARATION" | "INFORMATION_DISPLAY";
            /** @description Localized text keyed by locale code */
            label: {
                [key: string]: string;
            };
            options?: components["schemas"]["FormFieldOptionSchemaDto"][];
            /** @description Localized text keyed by locale code */
            placeholder?: {
                [key: string]: string;
            };
            required: boolean;
            sourceMetadata?: {
                [key: string]: unknown;
            };
            validation: components["schemas"]["FormValidationSchemaDto"];
        };
        RenderedFormSchemaDto: {
            effectiveFrom?: string;
            effectiveUntil?: string;
            formDefinitionCode: string;
            formDefinitionId: string;
            formVersionId: string;
            /** @description Localized text keyed by locale code */
            instructions?: {
                [key: string]: string;
            };
            sections: components["schemas"]["RenderedFormSectionSchemaDto"][];
            /** @enum {string} */
            status: "DRAFT" | "PUBLISHED" | "SUPERSEDED" | "ARCHIVED";
            /** @description Localized text keyed by locale code */
            title: {
                [key: string]: string;
            };
            version: number;
        };
        RenderedFormSectionSchemaDto: {
            /** @description Localized text keyed by locale code */
            description?: {
                [key: string]: string;
            };
            displayOrder: number;
            fields: components["schemas"]["RenderedFormFieldSchemaDto"][];
            sectionKey: string;
            /** @description Localized text keyed by locale code */
            title: {
                [key: string]: string;
            };
        };
        RepresentativeAuthorityResponseDto: {
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            effectiveFrom: string;
            effectiveUntil?: Record<string, never>;
            id: string;
            identityId: string;
            organizationId: string;
            scopeDescription: string;
            /** @enum {string} */
            status: "PENDING" | "ACTIVE" | "SUSPENDED" | "REVOKED" | "ENDED";
            /** Format: date-time */
            updatedAt: string;
        };
        RequestRevisionDto: {
            summary: string;
        };
        RequestSubmissionCorrectionDto: {
            answersData: Record<string, never>;
            correctionReason: string;
            documentReferences?: string[];
            evidenceReferences?: string[];
            submissionId: string;
        };
        RescheduleServiceAppointmentDto: {
            reason?: string;
            requestedEndsAt?: string;
            requestedStartsAt?: string;
        };
        ResolveFindingDto: {
            findingId: string;
            /** @description Authority review only: never authenticates governing source without authority evaluation */
            governingSourceAuthenticated?: boolean;
            resolutionNotes?: string;
            /** @enum {string} */
            status: "OPEN" | "IN_REMEDIATION" | "RESOLVED" | "ACCEPTED_RISK" | "DISMISSED";
        };
        ServiceAppointmentRecordDto: {
            applicationId: string | null;
            appointmentLocationId: string | null;
            appointmentReasonId: string | null;
            appointmentReference: string;
            appointmentSlotId: string | null;
            assignedOfficialIdentityId: string | null;
            assignedOfficialOfficeholderId: string | null;
            assignedResourceId: string | null;
            /** Format: date-time */
            cancelledAt: string | null;
            caseId: string | null;
            /** Format: date-time */
            completedAt: string | null;
            /** Format: date-time */
            confirmedAt: string | null;
            /** Format: date-time */
            createdAt: string;
            createdByIdentityId: string | null;
            departmentId: string | null;
            governmentServiceId: string | null;
            id: string;
            institutionId: string;
            isVirtual: boolean;
            operationalNotes: string | null;
            organizationId: string | null;
            /** Format: date-time */
            scheduledEndsAt: string | null;
            /** Format: date-time */
            scheduledStartsAt: string | null;
            /** @enum {string} */
            status: "REQUESTED" | "SCHEDULED" | "CONFIRMED" | "RESCHEDULED" | "CANCELLED" | "COMPLETED" | "NO_SHOW";
            /** Format: date-time */
            updatedAt: string;
            virtualMeetingUrl: string | null;
        };
        ServiceFunctionMappingResponseDto: {
            /** Format: date-time */
            createdAt: string;
            effectiveFrom?: Record<string, never>;
            effectiveUntil?: Record<string, never>;
            /** @description Resolved Phase 4 function authority record code */
            functionAuthorityRecordCode?: string;
            /** Format: uuid */
            functionAuthorityRecordId: string;
            /** @description Resolved Phase 4 function authority record name */
            functionAuthorityRecordName?: string;
            /** Format: uuid */
            governmentServiceVersionId: string;
            /** Format: uuid */
            id: string;
            isConsequential: boolean;
            publicStageLabel?: Record<string, never>;
            sequenceOrder: number;
            /** @enum {string} */
            status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
            /** Format: date-time */
            updatedAt: string;
        };
        ServiceLoginDto: {
            /** @description Service client identifier (service identity display name) */
            clientId: string;
            /** @description Service API key secret */
            clientSecret: string;
        };
        ServicePackResponseDto: {
            code: string;
            /** Format: date-time */
            createdAt: string;
            description?: Record<string, never>;
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            institutionId?: Record<string, never>;
            /** Format: uuid */
            jurisdictionId?: Record<string, never>;
            name: string;
            /** Format: date-time */
            updatedAt: string;
        };
        ServiceStartPackageResponseDto: {
            applicationCapable: boolean;
            conditionalChecklist: components["schemas"]["PublicServiceChecklistItemDto"][];
            configurationFingerprint: string;
            dependencySummary: ({
                [key: string]: unknown;
            } | unknown[] | string | number | boolean) | null;
            eligibilityGuidance: components["schemas"]["PublicServiceEligibilityGuidanceDto"][];
            expectedStagesSummary: components["schemas"]["PublicServiceStageDto"][];
            feeDefinitions: components["schemas"]["PublicServiceFeeDto"][];
            formDefinitionId: string | null;
            /** @description Not rendered by the public start package; currently always null */
            formSchema: ({
                [key: string]: unknown;
            } | unknown[] | string | number | boolean) | null;
            formVersionId: string | null;
            outputDefinitions: components["schemas"]["PublicServiceOutputDto"][];
            publicDisclaimers: string[];
            redressRoutes: components["schemas"]["PublicServiceRedressRouteDto"][];
            /** @enum {string} */
            serviceAvailability: "HIDDEN" | "INFORMATION_ONLY" | "PRE_APPLICATION" | "PILOT_ONLY" | "ACTIVE" | "SUSPENDED" | "UNAVAILABLE" | "UNDER_DEVELOPMENT";
            serviceId: string;
            serviceSlug: string;
            serviceVersionId: string;
            versionLabel: string;
        };
        StepUpProtectedResponseDto: {
            /** @enum {boolean} */
            ok: true;
            sessionId: string;
        };
        StructureAppointmentDto: {
            /** Format: date-time */
            effectiveFrom: string;
            effectiveUntil?: Record<string, never> | null;
            /** Format: uuid */
            id: string;
            officeholder?: components["schemas"]["StructureOfficeholderDto"] | null;
            /** @enum {string} */
            status: "PENDING" | "ACTIVE" | "SUSPENDED" | "ENDED" | "REVOKED";
        };
        StructureDepartmentDto: {
            code: string;
            /** Format: uuid */
            id: string;
            name: string;
            offices: components["schemas"]["StructureOfficeDto"][];
            /** @enum {string} */
            status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
        };
        StructureExternalAuthorityDto: {
            code: string;
            effectiveFrom?: Record<string, never> | null;
            effectiveUntil?: Record<string, never> | null;
            /** Format: uuid */
            id: string;
            name: string;
            relationshipLabel?: Record<string, never> | null;
            /** @enum {string} */
            status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
            /** @enum {string} */
            type: "GOVERNMENT" | "REGULATORY" | "JUDICIAL" | "PROFESSIONAL" | "INSTITUTIONAL" | "OTHER";
        };
        StructureGovernmentBodyDto: {
            code: string;
            /** Format: uuid */
            id: string;
            name: string;
            /** @enum {string} */
            status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
            /** @enum {string} */
            type: "GOVERNING" | "SUPERVISORY" | "ADVISORY" | "ADMINISTRATIVE" | "DECISION_MAKING" | "OTHER";
        };
        StructureJurisdictionSummaryDto: {
            code: string;
            /** Format: uuid */
            id: string;
            name: string;
            /** @enum {string} */
            status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
            /** @enum {string} */
            type: "NATIONAL" | "SUBNATIONAL" | "MUNICIPAL" | "SPECIAL_ECONOMIC_ZONE" | "REGULATORY" | "SUBJECT_MATTER" | "OTHER";
        };
        StructureOfficeDto: {
            code: string;
            currentAppointment?: components["schemas"]["StructureAppointmentDto"] | null;
            /** Format: uuid */
            id: string;
            name: string;
            /** @enum {string} */
            status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
        };
        StructureOfficeholderDto: {
            code: string;
            /** Format: uuid */
            id: string;
            name: string;
            /** @enum {string} */
            status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
        };
        SubmitApplicationDto: Record<string, never>;
        SubmitCorrectionRequestDto: {
            caseId?: string;
            civilRegistryEntryId?: string;
            requestedChanges: Record<string, never>;
            subjectCivilPersonRecordId: string;
        };
        SubmitForAcceptanceDto: {
            servicePackVersionId: string;
        };
        SubmitPropertyCorrectionRequestDto: {
            propertyRegistryEntryId: string;
            requestedChanges: {
                [key: string]: unknown;
            };
        };
        TaxAssessmentRecordDto: {
            assessmentReference: string;
            calculationRecordId: string | null;
            /** Format: date-time */
            createdAt: string;
            id: string;
            /** Format: date-time */
            issuedAt: string | null;
            issuedByOfficeholderId: string | null;
            /** @enum {string} */
            status: "PROPOSED" | "ISSUED" | "AMENDED" | "SUPERSEDED" | "CANCELLED";
            supersedesAssessmentId: string | null;
            taxpayerAccountId: string;
            taxPeriodId: string;
            taxReturnId: string | null;
            taxTypeDefinitionId: string;
            /** Format: date-time */
            updatedAt: string;
        };
        TaxLiabilityRecordDto: {
            /** Format: date-time */
            createdAt: string;
            currency: string;
            id: string;
            invoiceId: string | null;
            liabilityReference: string;
            principalCents: number;
            /** @enum {string} */
            status: "OPEN" | "PARTIALLY_SATISFIED" | "SATISFIED" | "WRITTEN_OFF" | "DISPUTED";
            taxAssessmentId: string | null;
            taxpayerAccountId: string;
            /** Format: date-time */
            updatedAt: string;
        };
        TaxObjectionRecordDto: {
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            decidedAt: string | null;
            /** Format: date-time */
            filedAt: string;
            grounds: string | null;
            id: string;
            objectionReference: string;
            relatedAssessmentId: string | null;
            /** @enum {string} */
            status: "FILED" | "UNDER_REVIEW" | "DECIDED" | "WITHDRAWN";
            taxpayerAccountId: string;
            /** Format: date-time */
            updatedAt: string;
        };
        TaxObligationRecordDto: {
            configuration: {
                [key: string]: unknown;
            } | unknown[] | string | number | boolean;
            /** Format: date-time */
            createdAt: string;
            description: string;
            /** Format: date-time */
            dueDate: string | null;
            id: string;
            obligationCode: string;
            /** @enum {string} */
            status: "ACTIVE" | "SUSPENDED" | "FULFILLED" | "CLOSED";
            taxpayerAccountId: string;
            taxPeriodId: string | null;
            taxTypeDefinitionId: string;
            /** Format: date-time */
            updatedAt: string;
        };
        TaxPaymentPlanRecordDto: {
            authorizedByOfficeholderId: string | null;
            /** Format: date-time */
            createdAt: string;
            id: string;
            planReference: string;
            schedule: {
                [key: string]: unknown;
            } | unknown[] | string | number | boolean;
            /** @enum {string} */
            status: "PROPOSED" | "ACTIVE" | "DEFAULTED" | "COMPLETED" | "CANCELLED";
            taxpayerAccountId: string;
            /** Format: date-time */
            updatedAt: string;
        };
        TaxReturnVersionRecordDto: {
            /** Format: date-time */
            createdAt: string;
            declarationData: {
                [key: string]: unknown;
            } | unknown[] | string | number | boolean;
            id: string;
            isAmendment: boolean;
            /** Format: date-time */
            lockedAt: string | null;
            payloadHash: string;
            /** Format: date-time */
            submittedAt: string | null;
            submittedByIdentityId: string | null;
            taxReturnId: string;
            /** Format: date-time */
            updatedAt: string;
            versionNumber: number;
        };
        TaxReturnWithVersionDto: {
            /** Format: date-time */
            createdAt: string;
            currentVersion: components["schemas"]["TaxReturnVersionRecordDto"] | null;
            currentVersionId: string | null;
            id: string;
            returnReference: string;
            /** @enum {string} */
            status: "DRAFT" | "SUBMITTED" | "ACCEPTED" | "REJECTED" | "AMENDED" | "SUPERSEDED";
            /** Format: date-time */
            submittedAt: string | null;
            taxpayerAccountId: string;
            taxPeriodId: string;
            taxTypeDefinitionId: string;
            /** Format: date-time */
            updatedAt: string;
        };
        TechnicalRoleAssignmentResponseDto: {
            /** Format: date-time */
            createdAt: string;
            departmentId?: string;
            /** Format: date-time */
            effectiveFrom?: string;
            /** Format: date-time */
            effectiveUntil?: string;
            governmentBodyId?: string;
            id: string;
            identityId: string;
            institutionId?: string;
            jurisdictionId?: string;
            officeId?: string;
            roleCode: string;
            roleName: string;
            /** @enum {string} */
            scopeType: "PLATFORM" | "JURISDICTION" | "INSTITUTION" | "GOVERNMENT_BODY" | "DEPARTMENT" | "OFFICE";
        };
        UpdateApplicationDraftDto: Record<string, never>;
        UpdateAppointmentDto: {
            effectiveFrom?: string;
            effectiveUntil?: Record<string, never> | null;
            /** @enum {string} */
            status?: "PENDING" | "ACTIVE" | "SUSPENDED" | "ENDED" | "REVOKED";
        };
        UpdateAuthenticationMethodDto: {
            /** @enum {string} */
            assuranceLevel?: "NONE" | "LOW" | "MEDIUM" | "HIGH";
            isEnabled?: boolean;
            oidcAudience?: string;
            oidcClientId?: string;
            oidcIssuer?: string;
        };
        UpdateClassificationDto: Record<string, never>;
        UpdateCredentialDto: {
            /** @example oidc-provider */
            oidcProvider?: string;
            /** @example subject-123 */
            oidcSubject?: string;
        };
        UpdateDelegationDto: {
            effectiveFrom?: string;
            effectiveUntil?: Record<string, never> | null;
            scopeDescription?: string;
            /** @enum {string} */
            status?: "PENDING" | "ACTIVE" | "SUSPENDED" | "REVOKED" | "ENDED";
        };
        UpdateDepartmentDto: {
            description?: string;
            name?: string;
            /** @enum {string} */
            status?: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
        };
        UpdateDraftFormVersionDto: {
            effectiveFrom?: string;
            effectiveUntil?: string;
            instructions?: Record<string, never>;
            title?: Record<string, never>;
        };
        UpdateExternalAuthorityDto: {
            description?: string;
            name?: string;
            /** @enum {string} */
            status?: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
            /** @enum {string} */
            type?: "GOVERNMENT" | "REGULATORY" | "JUDICIAL" | "PROFESSIONAL" | "INSTITUTIONAL" | "OTHER";
        };
        UpdateGovernmentBodyDto: {
            description?: string;
            name?: string;
            /** @enum {string} */
            status?: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
            /** @enum {string} */
            type?: "GOVERNING" | "SUPERVISORY" | "ADVISORY" | "ADMINISTRATIVE" | "DECISION_MAKING" | "OTHER";
        };
        UpdateGovernmentServiceDto: {
            officialName?: string;
            publicName?: string;
            /** Format: uuid */
            responsibleDepartmentId?: string;
            /** Format: uuid */
            responsibleInstitutionId?: string;
            /** Format: uuid */
            serviceFamilyId?: string;
            summary?: string;
        };
        UpdateGovernmentServiceVersionDto: {
            applicantCategories?: ("INDIVIDUAL" | "CITIZEN" | "RESIDENT" | "NON_RESIDENT" | "BUSINESS" | "COMPANY" | "INVESTOR" | "EMPLOYER" | "EMPLOYEE" | "AUTHORIZED_REPRESENTATIVE" | "PROFESSIONAL" | "GOVERNMENT_ENTITY" | "PARTNER_ORGANIZATION" | "OTHER")[];
            coveredActivities?: string;
            /** Format: date-time */
            effectiveFrom?: string;
            /** Format: date-time */
            effectiveUntil?: string;
            excludedActivities?: string;
            geographicScope?: string;
            /** Format: date-time */
            informationLastVerifiedAt?: string;
            publicDescription?: string;
            purpose?: string;
            typicalValidityDescription?: string;
        };
        UpdateIdentityDto: {
            /** @example Jane Citizen */
            displayName?: string;
        };
        UpdateInstitutionDto: {
            /** @example Updated description. */
            description?: string;
            /** @example Department of Transportation */
            name?: string;
            /** @enum {string} */
            status?: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
            /** @enum {string} */
            type?: "GOVERNMENT" | "MINISTRY" | "AGENCY" | "AUTHORITY" | "REGULATOR" | "STATUTORY_BODY" | "SPECIAL_ECONOMIC_ZONE_AUTHORITY" | "PUBLIC_BODY" | "OTHER";
        };
        UpdateInstitutionExternalAuthorityDto: {
            effectiveFrom?: string;
            effectiveUntil?: Record<string, never> | null;
            relationshipLabel?: string;
            /** @enum {string} */
            status?: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
        };
        UpdateJurisdictionDto: {
            /** @example Updated description. */
            description?: string;
            /** @example United States Federal Government */
            name?: string;
            /** @enum {string} */
            status?: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
            /** @enum {string} */
            type?: "NATIONAL" | "SUBNATIONAL" | "MUNICIPAL" | "SPECIAL_ECONOMIC_ZONE" | "REGULATORY" | "SUBJECT_MATTER" | "OTHER";
        };
        UpdateMembershipDto: {
            /** @example admin */
            roleLabel?: string;
        };
        UpdateOfficeDto: {
            description?: string;
            name?: string;
            /** @enum {string} */
            status?: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
        };
        UpdateOfficeholderDto: {
            description?: string;
            name?: string;
            /** @enum {string} */
            status?: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
        };
        UpdateOrganizationDto: {
            description?: string;
            /** @example Test Organization */
            name?: string;
        };
        UpdatePersonDto: {
            /** @example Jane Citizen */
            displayName?: string;
            /** @example Citizen */
            familyName?: string;
            /** @example Jane */
            givenName?: string;
        };
        UpdateRepresentativeAuthorityDto: {
            /** @example Updated scope description */
            scopeDescription?: string;
        };
        UpdateUserAccountDto: {
            /**
             * Format: uuid
             * @description Link or update the associated person
             */
            personId?: string;
        };
        UploadDocumentVersionDto: Record<string, never>;
        UserAccountResponseDto: {
            /** Format: date-time */
            createdAt: string;
            id: string;
            loginIdentifier: string;
            personId?: Record<string, never>;
            /** @enum {string} */
            status: "PENDING" | "ACTIVE" | "SUSPENDED" | "REVOKED";
            /** Format: date-time */
            updatedAt: string;
        };
        ValidateFormResponseDto: {
            answers: {
                [key: string]: unknown;
            };
            /** Format: uuid */
            formVersionId: string;
        };
        VersionResponseDto: {
            /** @example v1 */
            apiVersion: string;
            /** @example 0.1.0 */
            build: Record<string, never> | null;
            /** @example development */
            environment: string;
            /** @example heartstone-backend */
            name: string;
        };
        WorkPermitApplicationProfileRecordDto: {
            applicationId: string;
            caseId: string;
            /** Format: date-time */
            createdAt: string;
            doesNotIssueWorkPermit: boolean;
            id: string;
            immigrationProfileId: string | null;
            paymentDoesNotApprove: boolean;
            profileNumber: string;
            serviceCategoryCode: string | null;
            /** @enum {string} */
            status: "LINKED" | "ACTIVE" | "WITHDRAWN" | "CLOSED";
            /** Format: date-time */
            submissionAcknowledgedAt: string | null;
            /** Format: date-time */
            updatedAt: string;
            workerProfileReferenceId: string;
        };
        WorkPermitRecordDto: {
            /** Format: date-time */
            createdAt: string;
            /** @enum {string} */
            dataClassification: "PUBLIC" | "OFFICIAL" | "EMPLOYER_SCOPED" | "WORKER_SELF" | "PROTECTED_LABOUR" | "PROTECTED_WORKER" | "RESTRICTED";
            doesNotCreateResidency: boolean;
            employerRegistryRecordId: string | null;
            governmentDecisionId: string | null;
            id: string;
            immigrationProfileId: string | null;
            /** @enum {string} */
            lifecycleStatus: "NOT_ISSUED" | "PENDING_ISSUANCE" | "ISSUED" | "EFFECTIVE" | "EXPIRED" | "REVOKED" | "SUSPENDED" | "SUPERSEDED" | "SURRENDERED";
            linkedResidencyPermitRecordId: string | null;
            officialInstrumentId: string | null;
            permitNumber: string;
            renewalOfPermitId: string | null;
            /** Format: date-time */
            updatedAt: string;
            /** Format: date-time */
            validFrom: string | null;
            /** Format: date-time */
            validUntil: string | null;
            workerProfileReferenceId: string;
            workPermitApplicationProfileId: string | null;
        };
        WorkspaceAlertSummaryDto: {
            /** Format: uuid */
            alertId: string;
            alertNumber: string;
            observedCondition: string;
            status: string;
        };
        WorkspaceCaseSummaryDto: {
            accessKind: string;
            assignedOfficeholderName?: Record<string, never>;
            /** Format: uuid */
            caseId: string;
            caseNumber: string;
            serviceName: string;
            status: string;
        };
        WorkspaceCountSummaryDto: {
            count: number;
            items: components["schemas"]["WorkspaceCaseSummaryDto"][];
        };
        WorkspaceSlaRiskDto: {
            /** Format: uuid */
            caseId: string;
            caseNumber: string;
            clockKey: string;
            status: string;
            targetAt?: Record<string, never>;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    AbsezS18fController_getArticle9Matrix: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AbsezS18fController_syncArticle9States: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AbsezS18fController_configureCustomsCase: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AbsezS18fController_coordinateCustoms: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                caseId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AbsezS18fController_recordExternalCustoms: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                caseId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AbsezS18fController_openInvestorResidencyApplication: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AbsezS18fController_configureImmigrationProgram: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AbsezS18fController_createInvestorInquiry: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AbsezS18fController_registerZoneLease: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AbsezController_createLicenceIntake: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                institutionId: string;
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description SEZ licence intake (does not issue licence) */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AbsezController_getZoneEnterprise: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                institutionId: string;
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Zone enterprise linked to registered organization */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AbsezController_issueLicence: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                licenceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Issue SEZ business licence after authorized decision */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AbsezController_recordPayment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                licenceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Record SEZ licence fee payment (does not approve) */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AbsezController_revokeLicence: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                licenceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AbsezController_suspendLicence: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                licenceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ApplicationsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateApplicationDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ApplicationsController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ApplicationsController_submitCorrection: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SubmitApplicationDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ApplicationsController_updateDraft: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateApplicationDraftDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ApplicationsController_submit: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SubmitApplicationDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AppointmentsController_findAll: {
        parameters: {
            query?: {
                officeholderId?: string;
                officeId?: string;
                status?: "PENDING" | "ACTIVE" | "SUSPENDED" | "ENDED" | "REVOKED";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AppointmentResponseDto"][];
                };
            };
        };
    };
    AppointmentsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateAppointmentDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AppointmentResponseDto"];
                };
            };
        };
    };
    AppointmentsController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AppointmentResponseDto"];
                };
            };
        };
    };
    AppointmentsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateAppointmentDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AppointmentResponseDto"];
                };
            };
        };
    };
    AuditGovernanceController_resolveEffectiveConfiguration: {
        parameters: {
            query: {
                at: string;
                domain: string;
                key: string;
            };
            header?: never;
            path: {
                institutionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuditGovernanceController_verifyInstitution: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                institutionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuditGovernanceController_verifyStream: {
        parameters: {
            query: {
                fromSequence: string;
                toSequence: string;
            };
            header?: never;
            path: {
                ledgerStreamKey: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuthorityDependenciesController_registerExternalDetermination: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RegisterExternalDeterminationDto"];
            };
        };
        responses: {
            /** @description External determination registered */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuthorityDependenciesController_recordInstitutionalAct: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RecordInstitutionalActDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuthorityEvaluationController_evaluate: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EvaluateAuthorityDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthorityEvaluationResponseDto"];
                };
            };
        };
    };
    AuthorityEvaluationController_getRecord: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FunctionAuthorityRecordsController_findAll: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FunctionAuthorityRecordResponseDto"][];
                };
            };
        };
    };
    FunctionAuthorityRecordsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateFunctionAuthorityRecordDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FunctionAuthorityRecordResponseDto"];
                };
            };
        };
    };
    FunctionAuthorityRecordsController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FunctionAuthorityRecordResponseDto"];
                };
            };
        };
    };
    FunctionAuthorityRecordsController_activate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ActivateFunctionAuthorityRecordDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FunctionAuthorityRecordResponseDto"];
                };
            };
        };
    };
    FunctionAuthorityRecordsController_suspend: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ActivateFunctionAuthorityRecordDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FunctionAuthorityRecordResponseDto"];
                };
            };
        };
    };
    GoverningSourcesController_findAll: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GoverningSourceResponseDto"][];
                };
            };
        };
    };
    GoverningSourcesController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateGoverningSourceDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GoverningSourceResponseDto"];
                };
            };
        };
    };
    GoverningSourcesController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GoverningSourceResponseDto"];
                };
            };
        };
    };
    GoverningSourcesController_authenticate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AuthenticateGoverningSourceDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GoverningSourceResponseDto"];
                };
            };
        };
    };
    GoverningSourcesController_revoke: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GoverningSourceResponseDto"];
                };
            };
        };
    };
    CannabisAdministrationController_linkComplianceMatter: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CannabisAdministrationController_upsertConfiguration: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Jurisdiction cannabis administration configuration upserted */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CannabisAdministrationController_resolveLicenceCategory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
                jurisdictionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CannabisAdministrationController_recordExternalDependency: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CannabisAdministrationController_linkInspectionRecord: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CannabisAdministrationController_suspendLicence: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CannabisAdministrationController_issueLicence: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CannabisAdministrationController_registerRegulatedEntity: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CannabisAdministrationController_linkApplicationReference: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                regulatedEntityId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CannabisAdministrationController_linkFacilitySite: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                regulatedEntityId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CarbonManagementController_issueAuthorization: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Carbon administrative authorization issued under active authority */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CarbonManagementController_linkComplianceMatter: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CarbonManagementController_upsertConfiguration: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Jurisdiction carbon-management configuration upserted */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CarbonManagementController_resolveProjectCategory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
                jurisdictionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Resolve configurable project category label */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CarbonManagementController_registerProgramme: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CarbonManagementController_registerProject: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CarbonManagementController_linkApplicationReference: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                carbonProjectId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CarbonManagementController_recordExternalVerification: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                carbonProjectId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CarbonManagementController_recordRegistryReference: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                carbonProjectId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CaseTimelineController_getOfficialCommunications: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                caseId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CaseTimelineController_createCommunication: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                caseId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateCaseCommunicationDto"];
            };
        };
        responses: {
            /** @description Communication recorded with optional outbox enqueue */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CaseTimelineController_getApplicantCommunications: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                caseId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CaseTimelineController_getDashboard: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                caseId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CaseTimelineController_getMilestones: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                caseId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CaseTimelineController_createMilestone: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                caseId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateCaseMilestoneDto"];
            };
        };
        responses: {
            /** @description Milestone created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CaseTimelineController_getPublicStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                caseId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CaseTimelineController_rejectPublicStatusOverride: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CaseTimelineController_getOfficialTimeline: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                caseId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Append-only operational event history */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CaseTimelineController_getApplicantTimeline: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                caseId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Public-safe event history excluding internal notes */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CasesController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CasesController_getApplicantStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CasesController_assignCaseManager: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CasesController_getCaseManagerHistory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CasesController_runCompletenessReview: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CasesController_createReferral: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CasesController_completeStep: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                stepKey: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CasesController_getCaseManagerWorkload: {
        parameters: {
            query: {
                departmentId: string;
                institutionId: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CasesController_recordReferralResponse: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                referralId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CivilRegistryController_issueCertificate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CivilRegistryController_requestCertificate: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CivilRegistryController_submitCorrection: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SubmitCorrectionRequestDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CivilRegistryController_getEntry: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                entryId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CivilRegistryController_approveCorrection: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CivilRegistryController_registerOfficial: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CivilRegistryController_createSubmission: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CivilRegistryController_createIntake: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateVitalEventIntakeDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ClinicalResearchController_recordConsent: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ClinicalResearchController_enroll: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ClinicalResearchController_recordEthicsVersion: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ClinicalResearchController_expressInterest: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ClinicalResearchController_preliminaryMatch: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Preliminary non-clinical trial match */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ClinicalResearchController_activateProtocol: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ClinicalResearchController_amendProtocol: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ClinicalResearchController_withdraw: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ComplianceController_createMatter: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateComplianceMatterDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ComplianceController_getMatter: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ComplianceController_listObligations: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ComplianceController_getHistory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ComplianceController_recordStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RecordObligationStatusDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ComplianceController_extendDeadline: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ExtendObligationDeadlineDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ComplianceController_createFromCondition: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateObligationFromConditionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ComplianceController_finalizeReview: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["FinalizeComplianceReviewDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ComplianceController_openReview: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ComplianceStatusController_getExecutiveDashboard: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                institutionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ComplianceStatusController_getHolderDashboard: {
        parameters: {
            query: {
                caseId: string;
            };
            header?: never;
            path: {
                identityId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ComplianceStatusController_getOfficialDashboard: {
        parameters: {
            query: {
                departmentId: string;
            };
            header?: never;
            path: {
                officeholderId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ComplianceStatusController_evaluateRule: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EvaluateMonitoringRuleDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ComplianceStatusController_getProjection: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                projectionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ComplianceStatusController_deriveProjection: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DeriveComplianceProjectionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ComplianceStatusController_recordRevalidation: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RecordRevalidationDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ComplianceController_receiveSubmission: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReceiveComplianceSubmissionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ComplianceController_requestCorrection: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RequestSubmissionCorrectionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CorporateRegistryController_submitAmendment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CorporateRegistryController_submitBeneficialOwnership: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CorporateRegistryController_submitOfficer: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CorporateRegistryController_submitRegisteredOffice: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CorporateRegistryController_submitRegistrationIntake: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Submit corporate registration intake (not activation) */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CorporateRegistryController_getStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Corporate entity status and structured beneficial ownership */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CustomsTradeController_submitDeclaration: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Customs declaration submitted (does not release cargo) */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CustomsTradeController_amendDeclaration: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Amendment creates a new locked version; prior version preserved */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CustomsTradeController_authorizeRelease: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                shipmentReferenceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Authorize customs cargo release after authority evaluation */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IssuanceController_issue: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["IssueOfficialInstrumentDto"];
            };
        };
        responses: {
            /** @description Official instrument issued */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IssuanceController_assessReadiness: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AssessIssuanceReadinessDto"];
            };
        };
        responses: {
            /** @description Issuance readiness assessment recorded */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DecisionsController_executeDecision: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ExecuteGovernmentDecisionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DecisionsController_createPreparation: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateDecisionPreparationDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DecisionsController_assessReadiness: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AssessDecisionReadinessDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DelegationsController_findAll: {
        parameters: {
            query?: {
                institutionId?: string;
                status?: "PENDING" | "ACTIVE" | "SUSPENDED" | "REVOKED" | "ENDED";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DelegationResponseDto"][];
                };
            };
        };
    };
    DelegationsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateDelegationDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DelegationResponseDto"];
                };
            };
        };
    };
    DelegationsController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DelegationResponseDto"];
                };
            };
        };
    };
    DelegationsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateDelegationDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DelegationResponseDto"];
                };
            };
        };
    };
    DepartmentsController_findAll: {
        parameters: {
            query?: {
                institutionId?: string;
                status?: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DepartmentResponseDto"][];
                };
            };
        };
    };
    DepartmentsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateDepartmentDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DepartmentResponseDto"];
                };
            };
        };
    };
    DepartmentsController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DepartmentResponseDto"];
                };
            };
        };
    };
    DepartmentsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateDepartmentDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DepartmentResponseDto"];
                };
            };
        };
    };
    DigitalAssetsController_issueAuthorization: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Digital-assets authorization issued under active authority */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DigitalAssetsController_linkComplianceMatter: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DigitalAssetsController_upsertConfiguration: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Jurisdiction digital-assets configuration upserted */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DigitalAssetsController_resolveActivityCategory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
                jurisdictionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Resolve configurable activity category label */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DigitalAssetsController_recordExternalDependency: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DigitalAssetsController_registerRegulatedEntity: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Regulated entity reference registered */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DigitalAssetsController_linkApplicationReference: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                regulatedEntityId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DigitalAssetsController_openTechnicalReview: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                regulatedEntityId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DocumentsController_createRecord: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateDocumentRecordDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DocumentsController_findRecord: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DocumentsController_listVersions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DocumentsController_uploadVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UploadDocumentVersionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DocumentsController_listAssociations: {
        parameters: {
            query: {
                targetId: string;
                targetType: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DocumentsController_associate: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AssociateDocumentDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DocumentsController_getIntegrityDisclaimer: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DocumentsController_rejectStorageKeyDownload: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DocumentsController_getVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                versionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DocumentsController_updateClassification: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                versionId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateClassificationDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DocumentsController_downloadVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                versionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EducationController_linkAdmissionApplicationProfile: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EducationController_registerInstitution: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Education institution registered */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EducationController_submitInstitutionRegistration: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EducationController_linkScholarshipApplicationProfile: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EducationController_createStudentProfile: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EducationController_getStudentProfile: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidenceRecordsController_createClassification: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidenceRecordsController_evaluateDisposition: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidenceRecordsController_createDispositionRequest: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidenceRecordsController_createLegalHold: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateLegalHoldDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidenceRecordsController_releaseLegalHold: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReleaseLegalHoldDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidenceRecordsController_createRetentionSchedule: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidenceRecordsController_getScheduleHistory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidenceAiController_proposePurposeAcceptance: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidenceAiController_proposeVerification: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RecordEvidenceVerificationDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidencePacketsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateEvidencePacketDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidencePacketsController_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                packetId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidencePacketsController_assemble: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                packetId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AssemblePacketDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidencePacketsController_excludeItem: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                packetId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ExcludePacketItemDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidencePacketsController_freeze: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                packetId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["FreezePacketDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidencePacketsController_addItem: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                packetId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AddPacketItemDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidencePacketsController_removeItem: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                itemId: string;
                packetId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidencePacketsController_validate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                packetId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidencePacketsController_createVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                packetId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidencePacketsController_getVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                versionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidencePacketsController_compare: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                versionIdA: string;
                versionIdB: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidenceController_finalizeQuality: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                assessmentId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidenceController_receiveEvidence: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReceiveEvidenceDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidenceController_getEvidence: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidenceController_recordPurposeAcceptance: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RecordEvidencePurposeAcceptanceDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidenceController_proposeAiQuality: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ProposeEvidenceQualityAssessmentDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidenceController_recordOfficialQuality: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ProposeEvidenceQualityAssessmentDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidenceController_linkRequirement: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LinkEvidenceRequirementDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EvidenceController_recordVerification: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RecordEvidenceVerificationDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ExperienceCommonController_getActions: {
        parameters: {
            query?: {
                caseId?: string;
                locale?: string;
                page?: number;
                pageSize?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExperienceActionsResponseDto"];
                };
            };
        };
    };
    BusinessExperienceController_listOrganizations: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BusinessOrganizationsResponseDto"];
                };
            };
        };
    };
    BusinessExperienceController_getOrganization: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BusinessOrganizationDetailDto"];
                };
            };
        };
    };
    BusinessExperienceController_getActions: {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
            };
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BusinessActionsResponseDto"];
                };
            };
        };
    };
    BusinessExperienceController_listApplications: {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
            };
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BusinessApplicationsResponseDto"];
                };
            };
        };
    };
    BusinessAppointmentsController_listOrganizationAppointments: {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
            };
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenAppointmentsResponseDto"];
                };
            };
        };
    };
    BusinessExperienceController_listCompliance: {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
            };
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BusinessComplianceResponseDto"];
                };
            };
        };
    };
    BusinessCorporateRegistryController_listCorporateActions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BusinessCorporateActionsResponseDto"];
                };
            };
        };
    };
    BusinessCorporateRegistryController_listCertificates: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BusinessCorporateCertificatesResponseDto"];
                };
            };
        };
    };
    BusinessCorporateRegistryController_getCorporateProfile: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BusinessCorporateProfileResponseDto"];
                };
            };
        };
    };
    BusinessDevelopmentController_listProjects: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessDevelopmentController_getProject: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
                projectId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessDevelopmentController_listActions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
                projectId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessDevelopmentController_listInspections: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
                projectId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessDevelopmentController_listPermits: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
                projectId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessEducationController_getHome: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessEducationController_listAccreditation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessEducationController_listActions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessEducationController_listInspections: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessEducationController_listLicensing: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessCorporateRegistryController_listFilings: {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
            };
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BusinessCorporateFilingsResponseDto"];
                };
            };
        };
    };
    BusinessTransportationController_listFleet: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessExperienceController_getHome: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BusinessHomeResponseDto"];
                };
            };
        };
    };
    BusinessExperienceController_listLicenses: {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
            };
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BusinessLicensesResponseDto"];
                };
            };
        };
    };
    BusinessExperienceController_listMessages: {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
            };
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BusinessMessagesResponseDto"];
                };
            };
        };
    };
    BusinessCorporateRegistryController_listOfficers: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BusinessCorporateOfficersResponseDto"];
                };
            };
        };
    };
    BusinessExperienceController_listPayments: {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
            };
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BusinessPaymentsResponseDto"];
                };
            };
        };
    };
    BusinessExperienceController_listProjects: {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
            };
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BusinessProjectsResponseDto"];
                };
            };
        };
    };
    BusinessPropertyController_getHome: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessPropertyController_listActions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessPropertyController_listInterests: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessPropertyController_listTransactions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessPublicSafetyController_getHome: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessPublicSafetyController_listRecords: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessRevenueController_getHome: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessRevenueController_listActions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessRevenueController_listAssessments: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessRevenueController_listCompliance: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessRevenueController_listPayments: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessRevenueController_listReturns: {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
            };
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessTradeController_getHome: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessTradeController_listActions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessTradeController_listAssessments: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessTradeController_listDeclarations: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessTradeController_listHolds: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessTradeController_listPermits: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessTradeController_listShipments: {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
            };
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessTransportationController_listPermits: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessTransportationController_getHome: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessTransportationController_listActions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessWorkforceController_getHome: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessWorkforceController_listActions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessWorkforceController_listCompliance: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessWorkforceController_listDeclarations: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessWorkforceController_listEmployees: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BusinessWorkforceController_listWorkPermits: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CitizenExperienceController_getActions: {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenActionsResponseDto"];
                };
            };
        };
    };
    CitizenExperienceController_listApplications: {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenApplicationsResponseDto"];
                };
            };
        };
    };
    CitizenExperienceController_getApplication: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenApplicationDetailDto"];
                };
            };
        };
    };
    CitizenExperienceController_listAppointments: {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenAppointmentsResponseDto"];
                };
            };
        };
    };
    CitizenExperienceController_getAppointment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenAppointmentDetailDto"];
                };
            };
        };
    };
    CitizenExperienceController_cancelAppointment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CancelServiceAppointmentDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ServiceAppointmentRecordDto"];
                };
            };
        };
    };
    CitizenExperienceController_confirmAppointment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ServiceAppointmentRecordDto"];
                };
            };
        };
    };
    CitizenExperienceController_requestReschedule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RescheduleServiceAppointmentDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ServiceAppointmentRecordDto"];
                };
            };
        };
    };
    CitizenBenefitsController_getHome: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenBenefitsHomeResponseDto"];
                };
            };
        };
    };
    CitizenBenefitsController_listActions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenBenefitsActionsResponseDto"];
                };
            };
        };
    };
    CitizenBenefitsController_listApplications: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenBenefitApplicationItemDto"][];
                };
            };
        };
    };
    CitizenBenefitsController_listAwards: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BenefitAwardRecordDto"][];
                };
            };
        };
    };
    CitizenBenefitsController_listPayments: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BenefitDisbursementReferenceRecordDto"][];
                };
            };
        };
    };
    CitizenBenefitsController_listPrograms: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenBenefitProgramItemDto"][];
                };
            };
        };
    };
    CitizenExperienceController_getBoundaryDisclaimer: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenBoundaryDisclaimerResponseDto"];
                };
            };
        };
    };
    CitizenExperienceController_getCaseStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenCaseStatusResponseDto"];
                };
            };
        };
    };
    CitizenExperienceController_listCivilCertificates: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenCivilCertificateSummaryDto"][];
                };
            };
        };
    };
    CitizenExperienceController_listCivilRegistryActions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenCivilRegistryActionDto"][];
                };
            };
        };
    };
    CitizenExperienceController_getCivilStatus: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenCivilStatusResponseDto"];
                };
            };
        };
    };
    CitizenExperienceController_listCredentials: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenCredentialSummaryDto"][];
                };
            };
        };
    };
    CitizenExperienceController_getCredential: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenCredentialDetailDto"];
                };
            };
        };
    };
    CitizenDevelopmentActionsController_listActions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenDevelopmentActionsResponseDto"];
                };
            };
        };
    };
    CitizenDevelopmentController_listProjects: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenDevelopmentProjectsResponseDto"];
                };
            };
        };
    };
    CitizenDevelopmentController_getProject: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DevelopmentProjectPortalViewDto"];
                };
            };
        };
    };
    CitizenExperienceController_listDocuments: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenDocumentSummaryDto"][];
                };
            };
        };
    };
    CitizenExperienceController_getDocument: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenDocumentDetailDto"];
                };
            };
        };
    };
    CitizenTransportationController_listDriverLicenses: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenDriverLicenseSummaryDto"][];
                };
            };
        };
    };
    CitizenEducationController_getHome: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenEducationHomeResponseDto"];
                };
            };
        };
    };
    CitizenEducationController_listActions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenEducationActionsResponseDto"];
                };
            };
        };
    };
    CitizenEducationController_listApplications: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenEducationApplicationsResponseDto"];
                };
            };
        };
    };
    CitizenEducationController_listCredentials: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenEducationCredentialItemDto"][];
                };
            };
        };
    };
    CitizenEducationController_listEnrollments: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenEducationEnrollmentItemDto"][];
                };
            };
        };
    };
    CitizenEducationController_listSupport: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenEducationSupportResponseDto"];
                };
            };
        };
    };
    CitizenEmploymentController_getHome: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenEmploymentHomeResponseDto"];
                };
            };
        };
    };
    CitizenEmploymentController_listActions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenEmploymentActionsResponseDto"];
                };
            };
        };
    };
    CitizenEmploymentController_listApplications: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkPermitApplicationProfileRecordDto"][];
                };
            };
        };
    };
    CitizenEmploymentController_listRelationships: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenEmploymentRelationshipItemDto"][];
                };
            };
        };
    };
    CitizenEmploymentController_listWorkPermits: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkPermitRecordDto"][];
                };
            };
        };
    };
    CitizenHealthcareController_getHome: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Patient-safe healthcare overview */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenHealthcareHomeResponseDto"];
                };
            };
        };
    };
    CitizenHealthcareController_listActions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenHealthcareActionsResponseDto"];
                };
            };
        };
    };
    CitizenHealthcareController_listAppointments: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenHealthcareAppointmentsResponseDto"];
                };
            };
        };
    };
    CitizenHealthcareController_getProfile: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenHealthcareProfileResponseDto"];
                };
            };
        };
    };
    CitizenHealthcareController_listPrograms: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenTreatmentProgramsResponseDto"];
                };
            };
        };
    };
    CitizenHealthcareController_listProviders: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenHealthcareProvidersResponseDto"];
                };
            };
        };
    };
    CitizenHealthcareController_listReferrals: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenTreatmentReferralsResponseDto"];
                };
            };
        };
    };
    CitizenHealthcareController_listTreatments: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenTreatmentsResponseDto"];
                };
            };
        };
    };
    CitizenExperienceController_getHome: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenHomeResponseDto"];
                };
            };
        };
    };
    CitizenImmigrationController_getOverview: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenImmigrationOverviewResponseDto"];
                };
            };
        };
    };
    CitizenImmigrationController_listActions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenImmigrationActionsResponseDto"];
                };
            };
        };
    };
    CitizenImmigrationController_listApplications: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenImmigrationApplicationsResponseDto"];
                };
            };
        };
    };
    CitizenImmigrationController_listCredentials: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenImmigrationCredentialsResponseDto"];
                };
            };
        };
    };
    CitizenImmigrationController_getStatus: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenImmigrationStatusResponseDto"];
                };
            };
        };
    };
    CitizenExperienceController_getMe: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenMeResponseDto"];
                };
            };
        };
    };
    CitizenExperienceController_listMessages: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenMessageSummaryDto"][];
                };
            };
        };
    };
    CitizenExperienceController_getMessage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenMessageDetailDto"];
                };
            };
        };
    };
    CitizenExperienceController_acknowledgeMessage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenMessageAcknowledgmentResponseDto"];
                };
            };
        };
    };
    CitizenExperienceController_listPayments: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenPaymentSummaryDto"][];
                };
            };
        };
    };
    CitizenExperienceController_getPayment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenPaymentDetailDto"];
                };
            };
        };
    };
    CitizenExperienceController_createPaymentIntent: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoiceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenPaymentIntentResponseDto"];
                };
            };
        };
    };
    CitizenPropertyController_getHome: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenPropertyHomeResponseDto"];
                };
            };
        };
    };
    CitizenPropertyController_listActions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenPropertyActionsResponseDto"];
                };
            };
        };
    };
    CitizenPropertyController_listApplications: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PropertyRegistryApplicationRecordDto"][];
                };
            };
        };
    };
    CitizenPropertyController_listDocuments: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenPropertyDocumentItemDto"][];
                };
            };
        };
    };
    CitizenPropertyController_listInterests: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenPropertyInterestItemDto"][];
                };
            };
        };
    };
    CitizenPublicSafetyController_getHome: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenPublicSafetyHomeResponseDto"];
                };
            };
        };
    };
    CitizenPublicSafetyController_listActions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenPublicSafetyActionsResponseDto"];
                };
            };
        };
    };
    CitizenPublicSafetyController_listAssistance: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenRecoveryAssistanceResponseDto"];
                };
            };
        };
    };
    CitizenPublicSafetyController_listEmergencyEvents: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenEmergencyEventsResponseDto"];
                };
            };
        };
    };
    CitizenPublicSafetyController_listReports: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenIncidentReportsResponseDto"];
                };
            };
        };
    };
    CitizenExperienceController_listRenewals: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenRenewalQueueItemDto"][];
                };
            };
        };
    };
    CitizenRevenueController_getHome: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenRevenueHomeResponseDto"];
                };
            };
        };
    };
    CitizenRevenueController_listAccounts: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenTaxAccountsResponseDto"];
                };
            };
        };
    };
    CitizenRevenueController_listActions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Action center derived from authoritative revenue state */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenRevenueActionsResponseDto"];
                };
            };
        };
    };
    CitizenRevenueController_listAssessments: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TaxAssessmentRecordDto"][];
                };
            };
        };
    };
    CitizenRevenueController_listObligations: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenTaxObligationsResponseDto"];
                };
            };
        };
    };
    CitizenRevenueController_listPayments: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenTaxPaymentItemDto"][];
                };
            };
        };
    };
    CitizenRevenueController_listReturns: {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenTaxReturnsResponseDto"];
                };
            };
        };
    };
    CitizenServicesController_listServices: {
        parameters: {
            query?: {
                applicantCategory?: "INDIVIDUAL" | "CITIZEN" | "RESIDENT" | "NON_RESIDENT" | "BUSINESS" | "COMPANY" | "INVESTOR" | "EMPLOYER" | "EMPLOYEE" | "AUTHORIZED_REPRESENTATIVE" | "PROFESSIONAL" | "GOVERNMENT_ENTITY" | "PARTNER_ORGANIZATION" | "OTHER";
                /** @description Filter by responsible department id */
                departmentId?: string;
                /** @description Filter by service family code */
                family?: string;
                /** @description Keyword search across public name, purpose, and activities */
                keyword?: string;
                limit?: number;
                page?: number;
                serviceType?: "APPLICATION" | "REGISTRATION" | "LICENCE" | "PERMIT" | "CERTIFICATION" | "INFORMATION" | "OTHER";
                /** @description Filter by public availability status */
                status?: "HIDDEN" | "INFORMATION_ONLY" | "PRE_APPLICATION" | "PILOT_ONLY" | "ACTIVE" | "SUSPENDED" | "UNAVAILABLE" | "UNDER_DEVELOPMENT";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedPublicServicesResponseDto"];
                };
            };
        };
    };
    CitizenServicesController_getServiceBySlug: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PublicServiceDetailResponseDto"];
                };
            };
        };
    };
    CitizenServicesController_createApplication: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                slug: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateCitizenApplicationDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationRecordDto"];
                };
            };
        };
    };
    CitizenServicesController_evaluateEligibility: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                slug: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PublicServiceEligibilityDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PublicEligibilityResultResponseDto"];
                };
            };
        };
    };
    CitizenServicesController_getStartExperience: {
        parameters: {
            query?: {
                /** @description Previously issued configuration fingerprint for version pinning */
                configurationFingerprint?: string;
                /** @description Pin to a specific published service version id */
                serviceVersionId?: string;
            };
            header?: never;
            path: {
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenStartExperienceResponseDto"];
                };
            };
        };
    };
    CitizenServicesController_matchServices: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MatchPublicServicesDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PublicServiceSummaryResponseDto"][];
                };
            };
        };
    };
    CitizenTransportationController_getTransportationHome: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenTransportationHomeResponseDto"];
                };
            };
        };
    };
    CitizenTransportationController_listActions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenTransportationActionsResponseDto"];
                };
            };
        };
    };
    CitizenTransportationController_listVehicleApplications: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenVehicleApplicationItemDto"][];
                };
            };
        };
    };
    CitizenTransportationController_listVehicles: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenVehicleItemDto"][];
                };
            };
        };
    };
    CitizenExperienceController_listVitalRecords: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenVitalRecordSummaryDto"][];
                };
            };
        };
    };
    CitizenExperienceController_getVitalRecord: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CitizenVitalRecordSummaryDto"];
                };
            };
        };
    };
    ExperienceCommonController_resolveDeepLink: {
        parameters: {
            query?: {
                locale?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ExperienceDeepLinkResolveRequestDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExperienceDeepLinkResolveResponseDto"];
                };
            };
        };
    };
    DepartmentController_getAlerts: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                departmentId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DepartmentAlertsResponseDto"];
                };
            };
        };
    };
    DepartmentController_getAppeals: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                departmentId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DepartmentAppealsResponseDto"];
                };
            };
        };
    };
    DepartmentController_getCases: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                departmentId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DepartmentCasesResponseDto"];
                };
            };
        };
    };
    DepartmentController_getCompliance: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                departmentId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DepartmentComplianceResponseDto"];
                };
            };
        };
    };
    DepartmentController_getDependencies: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                departmentId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DepartmentDependenciesResponseDto"];
                };
            };
        };
    };
    DepartmentController_getHome: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                departmentId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DepartmentHomeResponseDto"];
                };
            };
        };
    };
    DepartmentController_getOfficers: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                departmentId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DepartmentOfficersResponseDto"];
                };
            };
        };
    };
    DepartmentPlanningConstructionController_getPlanningConstructionMetrics: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                departmentId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DepartmentPropertyController_getPropertyRegistryDashboard: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                departmentId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DepartmentPublicSafetyController_getPublicSafetyMetrics: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                departmentId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DepartmentController_getServices: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                departmentId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DepartmentServicesResponseDto"];
                };
            };
        };
    };
    DepartmentController_getSla: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                departmentId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DepartmentSlaResponseDto"];
                };
            };
        };
    };
    DepartmentController_getWorkload: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                departmentId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DepartmentWorkloadResponseDto"];
                };
            };
        };
    };
    DepartmentController_getMe: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DepartmentMeResponseDto"];
                };
            };
            /** @description Authentication required */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not an institutional actor */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ExecutiveController_getAlerts: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExecutiveAlertsResponseDto"];
                };
            };
        };
    };
    ExecutiveController_getCompliance: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExecutiveSectionResponseDto"];
                };
            };
        };
    };
    ExecutiveController_getDepartments: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExecutiveSectionResponseDto"];
                };
            };
        };
    };
    ExecutiveController_getDigitalGovernment: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExecutiveSectionResponseDto"];
                };
            };
        };
    };
    ExecutiveController_getGovernmentOperations: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExecutiveGovernmentOperationsDto"];
                };
            };
        };
    };
    ExecutiveController_getHome: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExecutiveHomeResponseDto"];
                };
            };
            /** @description Authentication required */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Executive briefing access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ExecutiveController_getInvestment: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExecutiveSectionResponseDto"];
                };
            };
        };
    };
    ExecutiveController_getProjects: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExecutiveSectionResponseDto"];
                };
            };
        };
    };
    ExecutivePublicSafetyController_getBriefing: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ExecutiveController_getRedress: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExecutiveSectionResponseDto"];
                };
            };
        };
    };
    ExecutiveController_getRisk: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExecutiveSectionResponseDto"];
                };
            };
        };
    };
    ExecutiveController_getServices: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExecutiveSectionResponseDto"];
                };
            };
        };
    };
    ExperienceCommonController_getInbox: {
        parameters: {
            query?: {
                locale?: string;
                page?: number;
                pageSize?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExperienceInboxResponseDto"];
                };
            };
        };
    };
    ExperienceCommonController_getMetadata: {
        parameters: {
            query?: {
                locale?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExperienceResponseMetadataDto"];
                };
            };
        };
    };
    ExperienceCommonController_getNavigation: {
        parameters: {
            query?: {
                locale?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExperienceNavigationResponseDto"];
                };
            };
        };
    };
    OfficialController_listAlerts: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OfficialAlertsResponseDto"];
                };
            };
        };
    };
    OfficialController_listAppointments: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OfficialAppointmentsListResponseDto"];
                };
            };
        };
    };
    OfficialController_getAppointment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OfficialAppointmentDetailResponseDto"];
                };
            };
        };
    };
    OfficialBenefitsController_getAvailableActions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OfficialBenefitsController_getWorkspace: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OfficialController_listCases: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OfficialCasesListResponseDto"];
                };
            };
        };
    };
    OfficialController_getCase: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OfficialCaseDetailResponseDto"];
                };
            };
        };
    };
    OfficialController_getAvailableActions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OfficialAvailableActionsResponseDto"];
                };
            };
        };
    };
    OfficialCorporateRegistryController_getWorkspace: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OfficialCorporateRegistryWorkspaceResponseDto"];
                };
            };
        };
    };
    OfficialTradeController_getWorkspace: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OfficialEducationController_getWorkspace: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OfficialFinancialServicesController_getWorkspace: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OfficialImmigrationController_getAvailableActions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OfficialImmigrationAvailableActionsResponseDto"];
                };
            };
        };
    };
    OfficialImmigrationController_getWorkspace: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OfficialImmigrationWorkspaceResponseDto"];
                };
            };
        };
    };
    OfficialLabourController_getDashboard: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OfficialLabourController_getAvailableActions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OfficialLabourController_getWorkspace: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OfficialController_getMe: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OfficialMeResponseDto"];
                };
            };
            /** @description Authentication required */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not an official identity */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OfficialPlanningConstructionController_getWorkspace: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OfficialPropertyController_getWorkspace: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OfficialPublicSafetyController_getWorkspace: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OfficialRevenueController_getWorkspace: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OfficialTransportationController_getWorkspace: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OfficialController_getWorkQueue: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OfficialWorkQueueResponseDto"];
                };
            };
        };
    };
    OfficialController_getWorkspace: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OfficialWorkspaceResponseDto"];
                };
            };
        };
    };
    PlatformAdminController_listAiAgents: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PlatformAdminListResponseDto"];
                };
            };
        };
    };
    PlatformAdminController_getAvailableActions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PlatformAdminAvailableActionsResponseDto"];
                };
            };
        };
    };
    PlatformAdminController_listCommunications: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PlatformAdminListResponseDto"];
                };
            };
        };
    };
    PlatformAdminController_listDepartments: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PlatformAdminListResponseDto"];
                };
            };
        };
    };
    PlatformAdminController_listForms: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PlatformAdminListResponseDto"];
                };
            };
        };
    };
    PlatformAdminController_getHome: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PlatformAdminHomeResponseDto"];
                };
            };
            /** @description Authentication required */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Platform administrative access policy required */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PlatformAdminController_listInstitutions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PlatformAdminListResponseDto"];
                };
            };
        };
    };
    PlatformAdminController_listIntegrations: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PlatformAdminListResponseDto"];
                };
            };
        };
    };
    PlatformAdminController_listOfficeholders: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PlatformAdminListResponseDto"];
                };
            };
        };
    };
    PlatformAdminController_listOffices: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PlatformAdminListResponseDto"];
                };
            };
        };
    };
    PlatformAdminController_listReadiness: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PlatformAdminListResponseDto"];
                };
            };
        };
    };
    PlatformAdminController_listSecurity: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PlatformAdminListResponseDto"];
                };
            };
        };
    };
    PlatformAdminController_listServices: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PlatformAdminListResponseDto"];
                };
            };
        };
    };
    PlatformAdminController_listWorkflows: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PlatformAdminListResponseDto"];
                };
            };
        };
    };
    ProviderHealthcareController_getWorkspace: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Provider-safe patient treatment projections */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ExperienceCommonController_search: {
        parameters: {
            query: {
                locale?: string;
                page?: number;
                pageSize?: number;
                /** @description Search query text */
                q: string;
                /** @description Optional resource type filter */
                resourceType?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExperienceSearchResponseDto"];
                };
            };
        };
    };
    ExternalAuthoritiesController_findAll: {
        parameters: {
            query?: {
                status?: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
                type?: "GOVERNMENT" | "REGULATORY" | "JUDICIAL" | "PROFESSIONAL" | "INSTITUTIONAL" | "OTHER";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExternalAuthorityResponseDto"][];
                };
            };
        };
    };
    ExternalAuthoritiesController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateExternalAuthorityDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExternalAuthorityResponseDto"];
                };
            };
        };
    };
    ExternalAuthoritiesController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExternalAuthorityResponseDto"];
                };
            };
        };
    };
    ExternalAuthoritiesController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateExternalAuthorityDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExternalAuthorityResponseDto"];
                };
            };
        };
    };
    FinancialServicesController_recordExternalDependency: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FinancialServicesController_computeOperationalSnapshot: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                jurisdictionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FinancialServicesController_linkLicenceApplicationProfile: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FinancialServicesController_recordLicenceStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FinancialServicesController_suspendLicence: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FinancialServicesController_issueLicence: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FinancialServicesController_getOrganizationRegulatoryProfile: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FinancialServicesController_registerRegulatedEntity: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Financial regulated entity profile registered (canonical organization) */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FinancialServicesController_linkBeneficialOwnership: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FinancialServicesController_linkComplianceMatter: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FormsController_listDefinitions: {
        parameters: {
            query: {
                governmentServiceVersionId: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FormsController_createDefinition: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateFormDefinitionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FormsController_listVersions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                formDefinitionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FormsController_createNextVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                formDefinitionId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateNextFormVersionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FormsController_getDefinition: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FormsController_validateResponse: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ValidateFormResponseDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FormsController_createVersion: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateFormVersionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FormsController_getVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FormsController_updateDraftVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateDraftFormVersionDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FormsController_publishVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FormsController_reconstructVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FormsController_renderSchema: {
        parameters: {
            query: {
                locale: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GovernmentBodiesController_findAll: {
        parameters: {
            query?: {
                institutionId?: string;
                status?: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GovernmentBodyResponseDto"][];
                };
            };
        };
    };
    GovernmentBodiesController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateGovernmentBodyDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GovernmentBodyResponseDto"];
                };
            };
        };
    };
    GovernmentBodiesController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GovernmentBodyResponseDto"];
                };
            };
        };
    };
    GovernmentBodiesController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateGovernmentBodyDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GovernmentBodyResponseDto"];
                };
            };
        };
    };
    SystemController_getHealth: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HealthResponseDto"];
                };
            };
        };
    };
    HealthcareController_createConsentGrant: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    HealthcareController_withdrawGrant: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                grantId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    HealthcareController_readRecord: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                recordId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    HealthcareController_recordFailedExchange: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    HealthcareController_ensurePatient: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    HealthcareController_listResearchRecords: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                grantId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    HealthcareController_fileAdverseEvent: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuthController_login: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LoginDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LoginResponseDto"];
                };
            };
        };
    };
    AuthController_loginWithOidc: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["OidcLoginDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LoginResponseDto"];
                };
            };
        };
    };
    AuthController_loginWithService: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ServiceLoginDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LoginResponseDto"];
                };
            };
        };
    };
    AuthController_logout: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Session revoked */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LogoutResponseDto"];
                };
            };
        };
    };
    AuthController_logoutAll: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Sessions revoked */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LogoutAllResponseDto"];
                };
            };
        };
    };
    AuthenticationMethodsController_findAll: {
        parameters: {
            query?: {
                identityId?: string;
                isEnabled?: boolean;
                type?: "PASSWORD" | "OIDC" | "SERVICE_API_KEY" | "MFA_TOTP";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthenticationMethodResponseDto"][];
                };
            };
        };
    };
    AuthenticationMethodsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateAuthenticationMethodDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthenticationMethodResponseDto"];
                };
            };
        };
    };
    AuthenticationMethodsController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthenticationMethodResponseDto"];
                };
            };
        };
    };
    AuthenticationMethodsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateAuthenticationMethodDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthenticationMethodResponseDto"];
                };
            };
        };
    };
    AuthenticationMethodsController_activate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthenticationMethodResponseDto"];
                };
            };
        };
    };
    AuthenticationMethodsController_suspend: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthenticationMethodResponseDto"];
                };
            };
        };
    };
    CredentialsController_findAll: {
        parameters: {
            query?: {
                identityId?: string;
                status?: "PENDING" | "ACTIVE" | "REVOKED";
                type?: "PASSWORD" | "OIDC" | "API_KEY" | "MFA_TOTP";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CredentialResponseDto"][];
                };
            };
        };
    };
    CredentialsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateCredentialDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CredentialResponseDto"];
                };
            };
        };
    };
    CredentialsController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CredentialResponseDto"];
                };
            };
        };
    };
    CredentialsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateCredentialDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CredentialResponseDto"];
                };
            };
        };
    };
    CredentialsController_activate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CredentialResponseDto"];
                };
            };
        };
    };
    CredentialsController_revoke: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CredentialResponseDto"];
                };
            };
        };
    };
    CredentialsController_suspend: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CredentialResponseDto"];
                };
            };
        };
    };
    IdentitiesController_findAll: {
        parameters: {
            query?: {
                organizationId?: string;
                personId?: string;
                type?: "INDIVIDUAL" | "ORGANIZATION" | "SERVICE";
                userAccountId?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["IdentityResponseDto"][];
                };
            };
        };
    };
    IdentitiesController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateIdentityDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["IdentityResponseDto"];
                };
            };
        };
    };
    IdentitiesController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["IdentityResponseDto"];
                };
            };
        };
    };
    IdentitiesController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateIdentityDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["IdentityResponseDto"];
                };
            };
        };
    };
    ProtectedController_getProfile: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProtectedProfileResponseDto"];
                };
            };
        };
    };
    ProtectedController_stepUpProtected: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Step-up satisfied */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StepUpProtectedResponseDto"];
                };
            };
        };
    };
    MembershipsController_findAll: {
        parameters: {
            query?: {
                identityId?: string;
                organizationId?: string;
                status?: "PENDING" | "ACTIVE" | "SUSPENDED" | "REVOKED";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MembershipResponseDto"][];
                };
            };
        };
    };
    MembershipsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateMembershipDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MembershipResponseDto"];
                };
            };
        };
    };
    MembershipsController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MembershipResponseDto"];
                };
            };
        };
    };
    MembershipsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateMembershipDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MembershipResponseDto"];
                };
            };
        };
    };
    MembershipsController_activate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MembershipResponseDto"];
                };
            };
        };
    };
    MembershipsController_end: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MembershipResponseDto"];
                };
            };
        };
    };
    MembershipsController_revoke: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MembershipResponseDto"];
                };
            };
        };
    };
    MembershipsController_suspend: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MembershipResponseDto"];
                };
            };
        };
    };
    OfficeholderLinksController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateOfficeholderLinkDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OfficeholderLinkResponseDto"];
                };
            };
        };
    };
    OrganizationsController_findAll: {
        parameters: {
            query?: {
                status?: "PENDING" | "ACTIVE" | "SUSPENDED" | "REVOKED";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationResponseDto"][];
                };
            };
        };
    };
    OrganizationsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateOrganizationDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationResponseDto"];
                };
            };
        };
    };
    OrganizationsController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationResponseDto"];
                };
            };
        };
    };
    OrganizationsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateOrganizationDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationResponseDto"];
                };
            };
        };
    };
    OrganizationsController_activate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationResponseDto"];
                };
            };
        };
    };
    OrganizationsController_revoke: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationResponseDto"];
                };
            };
        };
    };
    OrganizationsController_suspend: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationResponseDto"];
                };
            };
        };
    };
    PersonsController_findAll: {
        parameters: {
            query?: {
                /** @description Filter by family name (exact match) */
                familyName?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PersonResponseDto"][];
                };
            };
        };
    };
    PersonsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreatePersonDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PersonResponseDto"];
                };
            };
        };
    };
    PersonsController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PersonResponseDto"];
                };
            };
        };
    };
    PersonsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdatePersonDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PersonResponseDto"];
                };
            };
        };
    };
    RepresentativeAuthoritiesController_findAll: {
        parameters: {
            query?: {
                identityId?: string;
                organizationId?: string;
                status?: "PENDING" | "ACTIVE" | "SUSPENDED" | "REVOKED" | "ENDED";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RepresentativeAuthorityResponseDto"][];
                };
            };
        };
    };
    RepresentativeAuthoritiesController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateRepresentativeAuthorityDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RepresentativeAuthorityResponseDto"];
                };
            };
        };
    };
    RepresentativeAuthoritiesController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RepresentativeAuthorityResponseDto"];
                };
            };
        };
    };
    RepresentativeAuthoritiesController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateRepresentativeAuthorityDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RepresentativeAuthorityResponseDto"];
                };
            };
        };
    };
    RepresentativeAuthoritiesController_activate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RepresentativeAuthorityResponseDto"];
                };
            };
        };
    };
    RepresentativeAuthoritiesController_end: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RepresentativeAuthorityResponseDto"];
                };
            };
        };
    };
    RepresentativeAuthoritiesController_revoke: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RepresentativeAuthorityResponseDto"];
                };
            };
        };
    };
    RepresentativeAuthoritiesController_suspend: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RepresentativeAuthorityResponseDto"];
                };
            };
        };
    };
    TechnicalAccessController_listAssignments: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                identityId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TechnicalRoleAssignmentResponseDto"][];
                };
            };
        };
    };
    TechnicalAccessController_assignRole: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateTechnicalRoleAssignmentDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TechnicalRoleAssignmentResponseDto"];
                };
            };
        };
    };
    UserAccountsController_findAll: {
        parameters: {
            query?: {
                personId?: string;
                status?: "PENDING" | "ACTIVE" | "SUSPENDED" | "REVOKED";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserAccountResponseDto"][];
                };
            };
        };
    };
    UserAccountsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateUserAccountDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserAccountResponseDto"];
                };
            };
        };
    };
    UserAccountsController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserAccountResponseDto"];
                };
            };
        };
    };
    UserAccountsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateUserAccountDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserAccountResponseDto"];
                };
            };
        };
    };
    UserAccountsController_activate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserAccountResponseDto"];
                };
            };
        };
    };
    UserAccountsController_revoke: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserAccountResponseDto"];
                };
            };
        };
    };
    UserAccountsController_suspend: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserAccountResponseDto"];
                };
            };
        };
    };
    ImmigrationController_createProfile: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Immigration profile created */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ImmigrationController_getProfileForSubject: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                subjectIdentityId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ImmigrationController_getVisaApplicationProfile: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    InstitutionExternalAuthoritiesController_findAll: {
        parameters: {
            query?: {
                externalAuthorityId?: string;
                institutionId?: string;
                status?: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InstitutionExternalAuthorityResponseDto"][];
                };
            };
        };
    };
    InstitutionExternalAuthoritiesController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateInstitutionExternalAuthorityDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InstitutionExternalAuthorityResponseDto"];
                };
            };
        };
    };
    InstitutionExternalAuthoritiesController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InstitutionExternalAuthorityResponseDto"];
                };
            };
        };
    };
    InstitutionExternalAuthoritiesController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateInstitutionExternalAuthorityDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InstitutionExternalAuthorityResponseDto"];
                };
            };
        };
    };
    InstitutionsController_findAll: {
        parameters: {
            query?: {
                jurisdictionId?: string;
                status?: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
                type?: "GOVERNMENT" | "MINISTRY" | "AGENCY" | "AUTHORITY" | "REGULATOR" | "STATUTORY_BODY" | "SPECIAL_ECONOMIC_ZONE_AUTHORITY" | "PUBLIC_BODY" | "OTHER";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InstitutionResponseDto"][];
                };
            };
        };
    };
    InstitutionsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateInstitutionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InstitutionResponseDto"];
                };
            };
        };
    };
    InstitutionsController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InstitutionResponseDto"];
                };
            };
        };
    };
    InstitutionsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateInstitutionDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InstitutionResponseDto"];
                };
            };
        };
    };
    InstitutionsController_getStructure: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InstitutionStructureDto"];
                };
            };
        };
    };
    InstrumentDownloadController_downloadIssuedVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                officialInstrumentId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_createAnalysisRequest: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_startAnalysisRun: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_completeAnalysisRun: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                runId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_getAnalysisReplay: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                runId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_createBaseline: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateMetricBaselineDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_getBoundary: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_recordCalculationRun: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RecordMetricCalculationRunDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_createClaim: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreatePerformanceClaimDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_reviewClaim: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CommandConsoleController_queryDepartmental: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["QueryDashboardDto"];
            };
        };
        responses: {
            /** @description Departmental console query result with disclaimers */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CommandConsoleController_queryExecutive: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["QueryDashboardDto"];
            };
        };
        responses: {
            /** @description Executive console query result with disclaimers */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CommandConsoleController_deriveProjection: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DeriveIndicatorProjectionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CommandConsoleController_captureSnapshot: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CaptureSnapshotDto"];
            };
        };
        responses: {
            /** @description Immutable dashboard snapshot with replay token */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CommandConsoleController_replaySnapshot: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                replayToken: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Immutable snapshot payload for replay */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_proposeLiveTransition: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_recordReview: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_createDefinition: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_getDefinition: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_recordMode: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_createRelationship: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_createSnapshot: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_addSource: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_createVersion: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_getVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_createFramework: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreatePerformanceFrameworkDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_getFramework: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GovernedAiController_executeCall: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ExecuteGovernedAiCallDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GovernedAiController_getUserOutput: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                callRecordId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GovernedAiController_checkForbiddenAction: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GovernedAiController_recordEdit: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RecordAiOutputEditDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GovernedAiController_getReadiness: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GovernedAiController_recordReview: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RecordAiReviewDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_activateMetricVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_createMetric: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateMetricDefinitionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_publishMetric: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_createMetricVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateMetricDefinitionVersionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_generateAlert: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_disposeAlert: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_verifyAlert: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_recordObservation: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_createMonitoringRule: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_activateMonitoringRule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ruleId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_createRiskAssessment: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_createRiskDefinition: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_startRun: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_completeRun: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_recordOutput: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_createScenario: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_getScenario: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    StrategicProjectController_createProfile: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateStrategicProjectProfileDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    StrategicProjectController_getProfile: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                profileId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    StrategicProjectController_deriveProjection: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                profileId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DeriveProjectStatusProjectionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    StrategicProjectController_recordStage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                profileId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RecordStrategicProjectStageDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    IntelligenceController_getTwinSimulationBoundaryDisclaimer: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    JurisdictionsController_findAll: {
        parameters: {
            query?: {
                status?: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
                type?: "NATIONAL" | "SUBNATIONAL" | "MUNICIPAL" | "SPECIAL_ECONOMIC_ZONE" | "REGULATORY" | "SUBJECT_MATTER" | "OTHER";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["JurisdictionResponseDto"][];
                };
            };
        };
    };
    JurisdictionsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateJurisdictionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["JurisdictionResponseDto"];
                };
            };
        };
    };
    JurisdictionsController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["JurisdictionResponseDto"];
                };
            };
        };
    };
    JurisdictionsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateJurisdictionDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["JurisdictionResponseDto"];
                };
            };
        };
    };
    JurisdictionsController_getStructure: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["JurisdictionStructureDto"];
                };
            };
        };
    };
    LabourController_registerEmployer: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Employer registry record created */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    LabourController_fileEmploymentComplaint: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    LabourController_linkWorkPermitApplicationProfile: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    LabourController_approveWorkPermit: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Approve work permit after authority evaluation */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    LabourController_createWorkerProfileReference: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    LabourController_getWorkerProfile: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    MaritimeController_linkComplianceMatter: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    MaritimeController_upsertConfiguration: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    MaritimeController_resolveVesselTypeCategory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
                jurisdictionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Resolve configurable vessel type category label */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    MaritimeController_linkCustomsCase: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    MaritimeController_recordExternalDependency: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    MaritimeController_issueInstrument: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    MaritimeController_registerVessel: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    MaritimeController_linkApplicationReference: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                vesselRecordId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    MaritimeController_linkInspection: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                vesselRecordId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    MaritimeController_linkParty: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                vesselRecordId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OfficeholdersController_findAll: {
        parameters: {
            query?: {
                status?: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OfficeholderResponseDto"][];
                };
            };
        };
    };
    OfficeholdersController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateOfficeholderDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OfficeholderResponseDto"];
                };
            };
        };
    };
    OfficeholdersController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OfficeholderResponseDto"];
                };
            };
        };
    };
    OfficeholdersController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateOfficeholderDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OfficeholderResponseDto"];
                };
            };
        };
    };
    OfficesController_findAll: {
        parameters: {
            query?: {
                departmentId?: string;
                status?: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "ARCHIVED";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OfficeResponseDto"][];
                };
            };
        };
    };
    OfficesController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateOfficeDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OfficeResponseDto"];
                };
            };
        };
    };
    OfficesController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OfficeResponseDto"];
                };
            };
        };
    };
    OfficesController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateOfficeDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OfficeResponseDto"];
                };
            };
        };
    };
    OperationalReadinessController_createActivationCondition: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalReadinessController_evaluateActivationConditions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                capabilityDefinitionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalReadinessController_createActivationRestriction: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalReadinessController_createSafeHaltCondition: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalReadinessController_getBoundaryDisclaimer: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalReadinessController_createDefinition: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateCapabilityDefinitionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalReadinessController_getDefinition: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalReadinessController_updateDefinition: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalReadinessController_getMaturityHistory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalReadinessController_getOperationalView: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalReadinessController_createMaturityAssessment: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateMaturityAssessmentDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalReadinessController_recordMaturityDecision: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RecordMaturityDecisionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalReadinessController_createVersion: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateCapabilityVersionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalReadinessController_createDependency: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalReadinessController_listDependencies: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                capabilityDefinitionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalReadinessController_assignOwners: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalReadinessController_createProductionReadinessAssessment: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalReadinessController_getProductionReadinessAssessment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalReadinessController_getReplayableEvidence: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalReadinessController_triggerRevalidation: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalSupportController_getBoundaryDisclaimer: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalSupportController_createMessage: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalSupportController_approveMessage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalSupportController_deliverMessage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalSupportController_createTemplate: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalSupportController_createTemplateVersion: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalSupportController_getFinancialApproval: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalSupportController_getFeeAssessment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalSupportController_getInvoice: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoiceNumber: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalSupportController_getPaymentIntent: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                intentReference: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalSupportController_getPaymentTransaction: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalSupportController_receivePaymentWebhook: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalSupportController_getReconciliationBatch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                batchReference: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalSupportController_getRefundAuthorization: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                authorizationReference: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalSupportController_recordAcceptance: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalSupportController_createIntegrationDefinition: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalSupportController_getIntegrationDefinition: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalSupportController_getAcceptanceDossier: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalSupportController_createIntegrationEndpoint: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalSupportController_updateIntegrationStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalSupportController_recordDiscrepancy: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalSupportController_executeExchange: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalSupportController_activateFallback: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                integrationDefinitionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalSupportController_executeRedressRefund: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalSupportController_executeRegistryQuery: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalSupportController_receiveIntegrationWebhook: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OperationalSupportController_indexMaf: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                masterAdministrativeFileId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ProductionReadinessController_getBoundaryDisclaimer: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PropertyRegistryController_submitCorrection: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SubmitPropertyCorrectionRequestDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PropertyRegistryController_getEntry: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                entryId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PropertyRegistryController_parcelTitleDistinction: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                parcelId: string;
                titleId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PropertyRegistryController_registerTitle: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                transferId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PropertyRegistryController_createTransferIntake: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreatePropertyTransferIntakeDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PublicCivilRegistryVerificationController_verifyByReference: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                verificationReference: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Minimal non-sensitive verification fields only */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PublicCivilCertificateVerificationResponseDto"];
                };
            };
        };
    };
    PublicCivilRegistryVerificationController_verifyByCode: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                verificationCode: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Minimal non-sensitive verification fields only */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PublicCivilCertificateVerificationResponseDto"];
                };
            };
        };
    };
    PublicClinicalTrialDiscoveryController_discover: {
        parameters: {
            query?: {
                conditionCategoryCode?: string;
                jurisdictionId?: string;
                locationContains?: string;
                maximumAgeYears?: number;
                minimumAgeYears?: number;
                phaseCode?: string;
                /** @description Defaults to RECRUITING */
                recruitmentStatus?: "NOT_YET_RECRUITING" | "RECRUITING" | "ENROLLING_BY_INVITATION" | "ACTIVE_NOT_RECRUITING" | "COMPLETED" | "SUSPENDED" | "WITHDRAWN" | "UNKNOWN";
                sponsorDisplayNameContains?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Public trial discovery listing */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PublicClinicalTrialDiscoveryResponseDto"];
                };
            };
        };
    };
    PublicCorporateRegistryVerificationController_verify: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                reference: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Policy-permitted corporate registry facts only */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PublicCorporateRegistryVerificationResponseDto"];
                };
            };
        };
    };
    PublicCustomsTradeVerificationController_verify: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                reference: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Policy-permitted customs trade facts only */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PublicCustomsTradeVerificationResponseDto"];
                };
            };
        };
    };
    PublicEducationVerificationController_verifyCredential: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                credentialReference: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Minimal public credential verification */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PublicEducationCredentialVerificationResponseDto"];
                };
            };
        };
    };
    PublicInstrumentVerificationController_verify: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                verificationCode: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Approved non-sensitive verification fields only */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PublicInstrumentVerificationResponseDto"];
                };
            };
        };
    };
    PublicPropertyRegistryVerificationController_verify: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                reference: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Minimal public verification facts */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PublicPropertyRegistryVerificationResponseDto"];
                };
            };
        };
    };
    PublicPublicSafetyNoticeController_getPublishedNotice: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                noticeReference: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PublicSafetyNoticeResponseDto"];
                };
            };
        };
    };
    PublicServiceFamiliesController_listFamilies: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PublicServiceFamilyResponseDto"][];
                };
            };
        };
    };
    PublicServiceDiscoveryController_listServices: {
        parameters: {
            query?: {
                applicantCategory?: "INDIVIDUAL" | "CITIZEN" | "RESIDENT" | "NON_RESIDENT" | "BUSINESS" | "COMPANY" | "INVESTOR" | "EMPLOYER" | "EMPLOYEE" | "AUTHORIZED_REPRESENTATIVE" | "PROFESSIONAL" | "GOVERNMENT_ENTITY" | "PARTNER_ORGANIZATION" | "OTHER";
                /** @description Filter by responsible department id */
                departmentId?: string;
                /** @description Filter by service family code */
                family?: string;
                /** @description Keyword search across public name, purpose, and activities */
                keyword?: string;
                limit?: number;
                page?: number;
                serviceType?: "APPLICATION" | "REGISTRATION" | "LICENCE" | "PERMIT" | "CERTIFICATION" | "INFORMATION" | "OTHER";
                /** @description Filter by public availability status */
                status?: "HIDDEN" | "INFORMATION_ONLY" | "PRE_APPLICATION" | "PILOT_ONLY" | "ACTIVE" | "SUSPENDED" | "UNAVAILABLE" | "UNDER_DEVELOPMENT";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedPublicServicesResponseDto"];
                };
            };
        };
    };
    PublicServiceDiscoveryController_getServiceBySlug: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PublicServiceDetailResponseDto"];
                };
            };
        };
    };
    PublicServiceDiscoveryController_evaluateEligibility: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                slug: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PublicServiceEligibilityDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PublicEligibilityResultResponseDto"];
                };
            };
        };
    };
    PublicServiceDiscoveryController_getStartPackage: {
        parameters: {
            query?: {
                /** @description Previously issued configuration fingerprint for version pinning */
                configurationFingerprint?: string;
                /** @description Pin to a specific published service version id */
                serviceVersionId?: string;
            };
            header?: never;
            path: {
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ServiceStartPackageResponseDto"];
                };
            };
        };
    };
    PublicServiceDiscoveryController_matchServices: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MatchPublicServicesDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PublicServiceSummaryResponseDto"][];
                };
            };
        };
    };
    PublicTransportationVerificationController_verifyLicense: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                reference: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Policy-permitted license status only */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PublicLicenseVerificationResponseDto"];
                };
            };
        };
    };
    PublicTransportationVerificationController_verifyOperator: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                reference: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PublicOperatorVerificationResponseDto"];
                };
            };
        };
    };
    PublicTransportationVerificationController_verifyVehicle: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                reference: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PublicVehicleVerificationResponseDto"];
                };
            };
        };
    };
    SystemController_getReady: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ReadyResponseDto"];
                };
            };
        };
    };
    MasterAdministrativeFileController_getById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Institutional file metadata with minimum-necessary fields */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    MasterAdministrativeFileController_assessCompleteness: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AssessMasterFileCompletenessDto"];
            };
        };
        responses: {
            /** @description Completeness outcome for required evidence requirements. Does not constitute approval. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    MasterAdministrativeFileController_getIndex: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Section index referencing existing Phase 3–6 records */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    MasterAdministrativeFileController_getByCaseId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                caseId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    MasterAdministrativeFileController_initializeForCase: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                caseId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Canonical one-to-one Master File created for case */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RedressController_getBoundaryDisclaimer: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RedressController_recordDecision: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RedressController_getImplementationStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RedressController_createExternalReferral: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateExternalReviewReferralDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RedressController_getExternalReferral: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RedressController_recordExternalDetermination: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RecordExternalDeterminationDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RedressController_createExternalPackage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RedressController_decideInterimRelief: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RedressController_requestInterimRelief: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RedressController_fileMatter: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RedressController_getMatter: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RedressController_prepareNotice: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RevenueController_issueTaxAssessment: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RevenueController_requestClearance: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RevenueController_requestRefund: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RevenueController_submitReturnVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RevenueController_getTaxpayerAccount: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServiceAppointmentsController_list: {
        parameters: {
            query: {
                departmentId: string;
                governmentServiceId: string;
                institutionId: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServiceAppointmentsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateServiceAppointmentDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServiceAppointmentsController_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServiceAppointmentsController_cancel: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CancelServiceAppointmentDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServiceAppointmentsController_complete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CompleteServiceAppointmentDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServiceAppointmentsController_reschedule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RescheduleServiceAppointmentDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServiceAppointmentsController_approveReschedule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AppointmentLocationsController_list: {
        parameters: {
            query: {
                departmentId: string;
                institutionId: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AppointmentLocationsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateAppointmentLocationDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AppointmentReasonsController_list: {
        parameters: {
            query: {
                departmentId: string;
                governmentServiceId: string;
                institutionId: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AppointmentReasonsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateAppointmentReasonDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AppointmentResourcesController_list: {
        parameters: {
            query: {
                departmentId: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AppointmentResourcesController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateAppointmentResourceDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AppointmentSlotsController_list: {
        parameters: {
            query: {
                departmentId: string;
                governmentServiceId: string;
                institutionId: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AppointmentSlotsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateAppointmentSlotDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GovernmentServiceVersionsController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GovernmentServiceVersionResponseDto"];
                };
            };
        };
    };
    GovernmentServiceVersionsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateGovernmentServiceVersionDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GovernmentServiceVersionResponseDto"];
                };
            };
        };
    };
    GovernmentServiceVersionsController_findFunctionMappings: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ServiceFunctionMappingResponseDto"][];
                };
            };
        };
    };
    GovernmentServiceVersionsController_createFunctionMapping: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateServiceFunctionMappingDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ServiceFunctionMappingResponseDto"];
                };
            };
        };
    };
    GovernmentServicesController_findAll: {
        parameters: {
            query?: {
                responsibleDepartmentId?: string;
                responsibleInstitutionId?: string;
                serviceFamilyId?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GovernmentServiceResponseDto"][];
                };
            };
        };
    };
    GovernmentServicesController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateGovernmentServiceDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GovernmentServiceResponseDto"];
                };
            };
        };
    };
    GovernmentServicesController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GovernmentServiceResponseDto"];
                };
            };
        };
    };
    GovernmentServicesController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateGovernmentServiceDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GovernmentServiceResponseDto"];
                };
            };
        };
    };
    GovernmentServicesController_findVersions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GovernmentServiceVersionResponseDto"][];
                };
            };
        };
    };
    GovernmentServicesController_createVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateGovernmentServiceVersionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GovernmentServiceVersionResponseDto"];
                };
            };
        };
    };
    ServicePacksController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateServicePackDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ServicePackResponseDto"];
                };
            };
        };
    };
    ServicePacksController_getById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServicePackGovernanceController_accept: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AcceptServicePackDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServicePacksController_importManifest: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ImportServicePackManifestDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServicePackGovernanceController_reject: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RejectServicePackDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServicePackGovernanceController_listReviews: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServicePackGovernanceController_createReview: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateServicePackReviewDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServicePackGovernanceController_addFinding: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                reviewId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AddReviewFindingDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServicePackGovernanceController_requestRevision: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                reviewId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RequestRevisionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServicePackGovernanceController_resolveFinding: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                reviewId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ResolveFindingDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServicePackGovernanceController_submitForAcceptance: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SubmitForAcceptanceDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServicePacksController_cloneTemplate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CloneServicePackTemplateDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServicePacksController_exportVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                versionId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ExportServicePackVersionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServicePacksController_buildUpgradePlan: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                versionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServicePacksController_getBoundaryDisclaimer: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServicePacksController_listManifestVersions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServicePacksController_importPortable: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ImportPortableServicePackDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServicePacksRegistryController_listRegistry: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Installed packs and deployment inventory snapshot */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServicePacksRegistryController_getById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServicePacksRegistryController_listByInstitution: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                institutionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServicePacksRegistryController_listByJurisdiction: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                jurisdictionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServicePacksController_getVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                versionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServicePacksController_updateVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                versionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServicePacksController_compileVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                versionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServicePacksController_validateVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                versionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Validation result; does not deploy or activate services */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SocialProtectionController_createApplicantProfile: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Benefit applicant profile created */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SocialProtectionController_linkBenefitApplicationProfile: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SocialProtectionController_createBenefitAward: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SocialProtectionController_recordPreliminaryAssessment: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SocialProtectionController_createHouseholdRecord: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    TransportationController_getDriverLicenseApplicationProfile: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    TransportationController_createDriverProfile: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Driver profile created */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    TransportationController_getDriverProfileForSubject: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                subjectIdentityId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PublicVehicleVerificationController_verifyVehicle: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                publicVerificationToken: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Data-minimized public vehicle verification */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SystemController_getVersion: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VersionResponseDto"];
                };
            };
        };
    };
    WorkflowController_createDefinition: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    WorkflowController_createVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    WorkflowController_approveVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                versionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
