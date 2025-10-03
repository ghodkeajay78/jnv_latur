import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Award, Target, Building, Mail, Phone, Star, BookOpen } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useTranslation } from '@/lib/i18n';

export default function Management() {
  const { t } = useTranslation();

  const managementCommittee = [
    {
      name: t('management.names.prakashRaychukur'),
      position: t('management.positions.president'),
      qualification: t('management.qualifications.educationLeader'),
      experience: t('management.experience.twentyPlus'),
      specialization: t('management.specializations.educationalLeadershipGovernance'),
      responsibilities: [
        t('management.responsibilities.overallGovernancePolicyDirection'),
        t('management.responsibilities.strategicPlanningDecisionMaking'),
        t('management.responsibilities.communityRelationsPartnerships'),
        t('management.responsibilities.financialOversightAccountability')
      ],
      contact: {
        email: 'president@jnvlatur.edu.in',
        phone: t('management.phoneNumbers.president')
      },
    },
    {
      name: t('management.names.rajeshPatil'),
      position: t('management.positions.vicePresident'),
      qualification: t('management.qualifications.phdEducation'),
      experience: t('management.experience.eighteenPlus'),
      specialization: t('management.specializations.academicExcellencePolicyDevelopment'),
      responsibilities: [
        t('management.responsibilities.academicPolicyFormulation'),
        t('management.responsibilities.educationalQualityAssurance'),
        t('management.responsibilities.strategicAcademicPlanning'),
        t('management.responsibilities.facultyDevelopmentPrograms')
      ],
      contact: {
        email: 'vicepresident@jnvlatur.edu.in',
        phone: t('management.phoneNumbers.vicePresident')
      },
    },
    {
      name: t('management.names.balkrishnaDeshpande'),
      position: t('management.positions.secretary'),
      qualification: t('management.qualifications.llbEducationLawSpecialist'),
      experience: t('management.experience.fifteenPlus'),
      specialization: t('management.specializations.legalAffairsAdministrativeCompliance'),
      responsibilities: [
        t('management.responsibilities.legalComplianceDocumentation'),
        t('management.responsibilities.administrativeProceduresPolicies'),
        t('management.responsibilities.regulatoryAffairsManagement'),
        t('management.responsibilities.contractAgreementOversight')
      ],
      contact: {
        email: 'secretary@jnvlatur.edu.in',
        phone: t('management.phoneNumbers.secretary')
      },
    },
    {
      name: t('management.names.arvindDeshpande'),
      position: t('management.positions.member'),
      qualification: t('management.qualifications.educationManagement'),
      experience: t('management.experience.twelvePlus'),
      specialization: t('management.specializations.operationsResourceManagement'),
      responsibilities: [
        t('management.responsibilities.operationalEfficiencyImprovement'),
        t('management.responsibilities.resourceAllocationManagement'),
        t('management.responsibilities.infrastructureDevelopmentPlanning'),
        t('management.responsibilities.performanceMonitoringEvaluation')
      ],
      contact: {
        email: 'member1@jnvlatur.edu.in',
        phone: t('management.phoneNumbers.member1')
      },
    },
    {
      name: t('management.names.vasantNayakvadi'),
      position: t('management.positions.member'),
      qualification: t('management.qualifications.communityDevelopment'),
      experience: t('management.experience.tenPlus'),
      specialization: t('management.specializations.communityEngagementSocialDevelopment'),
      responsibilities: [
        t('management.responsibilities.communityOutreachEngagement'),
        t('management.responsibilities.socialDevelopmentInitiatives'),
        t('management.responsibilities.localPartnershipDevelopment'),
        t('management.responsibilities.publicRelationsCommunication')
      ],
      contact: {
        email: 'member2@jnvlatur.edu.in',
        phone: t('management.phoneNumbers.member2')
      },
    },
    {
      name: t('management.names.atmaramPachpute'),
      position: t('management.positions.member'),
      qualification: t('management.qualifications.phdEducationAdministration'),
      experience: t('management.experience.twentyFivePlus'),
      specialization: t('management.specializations.educationalLeadershipSchoolManagement'),
      responsibilities: [
        t('management.responsibilities.schoolAdministrationManagement'),
        t('management.responsibilities.academicExcellenceQualityAssurance'),
        t('management.responsibilities.staffDevelopmentTraining'),
        t('management.responsibilities.studentWelfareDevelopment')
      ],
      contact: {
        email: 'principal@jnvlatur.edu.in',
        phone: t('management.phoneNumbers.principal')
      },
    },
    {
      name: t('management.names.rajeshSugure'),
      position: t('management.positions.member'),
      qualification: t('management.qualifications.educationAdministration'),
      experience: t('management.experience.fourteenPlus'),
      specialization: t('management.specializations.administrativeOperationsQualityManagement'),
      responsibilities: [
        t('management.responsibilities.administrativeOperationsOversight'),
        t('management.responsibilities.qualityManagementSystems'),
        t('management.responsibilities.processImprovementInitiatives'),
        t('management.responsibilities.complianceAuditManagement')
      ],
      contact: {
        email: 'member3@jnvlatur.edu.in',
        phone: t('management.phoneNumbers.member3')
      },
    },
    {
      name: t('management.names.vivekAgachit'),
      position: t('management.positions.nominatedMember'),
      qualification: t('management.qualifications.educationDevelopment'),
      experience: t('management.experience.eightPlus'),
      specialization: t('management.specializations.specialProjectsInnovation'),
      responsibilities: [
        t('management.responsibilities.specialProjectManagement'),
        t('management.responsibilities.innovationDevelopmentInitiatives'),
        t('management.responsibilities.technologyIntegrationProjects'),
        t('management.responsibilities.researchDevelopmentActivities')
      ],
      contact: {
        email: 'nominated@jnvlatur.edu.in',
        phone: t('management.phoneNumbers.nominated')
      },
    },
    {
      name: t('management.names.dnyaneshwarSonatakke'),
      position: t('management.positions.cooptedMemberMale'),
      qualification: t('management.qualifications.educationCommunityService'),
      experience: t('management.experience.sixteenPlus'),
      specialization: t('management.specializations.communityDevelopmentStudentWelfare'),
      responsibilities: [
        t('management.responsibilities.communityDevelopmentPrograms'),
        t('management.responsibilities.studentWelfareInitiatives'),
        t('management.responsibilities.localEngagementActivities'),
        t('management.responsibilities.socialResponsibilityProjects')
      ],
      contact: {
        email: 'coopted1@jnvlatur.edu.in',
        phone: t('management.phoneNumbers.coopted1')
      },
    },
    {
      name: t('management.names.ravindraPurnapatre'),
      position: t('management.positions.cooptedMemberFemale'),
      qualification: t('management.qualifications.educationWomenEmpowerment'),
      experience: t('management.experience.twelvePlus'),
      specialization: t('management.specializations.genderEqualityInclusiveEducation'),
      responsibilities: [
        t('management.responsibilities.genderEqualityInitiatives'),
        t('management.responsibilities.inclusiveEducationPrograms'),
        t('management.responsibilities.womenEmpowermentActivities'),
        t('management.responsibilities.diversityInclusionManagement')
      ],
      contact: {
        email: 'coopted2@jnvlatur.edu.in',
        phone: t('management.phoneNumbers.coopted2')
      },
    },
  ];

  const schoolCommittee = [
    {
      name: t('management.names.atmaramPachpute'),
      position: t('management.positions.president'),
      qualification: t('management.qualifications.educationAdministrationPhd'),
      experience: t('management.experience.twentyFivePlus'),
      specialization: t('management.specializations.educationalLeadershipSchoolManagement'),
      responsibilities: [
        t('management.responsibilities.overallAcademicLeadership'),
        t('management.responsibilities.curriculumDevelopmentImplementation'),
        t('management.responsibilities.academicPolicyFormulation'),
        t('management.responsibilities.qualityAssuranceImprovement')
      ],
      contact: {
        email: t('management.phoneNumbers.principalEmail'),
        phone: t('management.phoneNumbers.prabhakarJoshi')
      },
    },
    {
      name: t('management.names.dnyaneshwarSonatakke'),
      position: t('management.positions.localSecretary'),
      qualification: t('management.qualifications.educationAdministrationLocal'),
      experience: t('management.experience.sixteenPlus'),
      specialization: t('management.specializations.academicCoordinationLocalAdministration'),
      responsibilities: [
        t('management.responsibilities.academicCoordinationPlanning'),
        t('management.responsibilities.localAdministrativeSupport'),
        t('management.responsibilities.communityLiaisonActivities'),
        t('management.responsibilities.studentAffairsManagement')
      ],
      contact: {
        email: t('management.phoneNumbers.secretaryLocalEmail'),
        phone: t('management.phoneNumbers.dilipHalbhange')
      },
    },
    {
      name: t('management.names.prabhakarJoshi'),
      position: t('management.positions.member'),
      qualification: t('management.qualifications.educationDevelopmentCommunity'),
      experience: t('management.experience.fourteenPlus'),
      specialization: t('management.specializations.educationalDevelopmentCommunityEngagement'),
      responsibilities: [
        t('management.responsibilities.educationalDevelopmentInitiatives'),
        t('management.responsibilities.communityEngagementPrograms'),
        t('management.responsibilities.academicSupportActivities'),
        t('management.responsibilities.studentDevelopmentPrograms')
      ],
      contact: {
        email: t('management.phoneNumbers.member1Email'),
        phone: t('management.phoneNumbers.prabhakarJoshi')
      },
    },
    {
      name: t('management.names.dilipHalbhange'),
      position: t('management.positions.member'),
      qualification: t('management.qualifications.educationManagement'),
      experience: t('management.experience.twelvePlus'),
      specialization: t('management.specializations.academicPlanningResourceManagement'),
      responsibilities: [
        t('management.responsibilities.academicPlanningScheduling'),
        t('management.responsibilities.resourceAllocationManagement'),
        t('management.responsibilities.performanceMonitoring'),
        t('management.responsibilities.qualityImprovementInitiatives')
      ],
      contact: {
        email: t('management.phoneNumbers.member2Email'),
        phone: t('management.phoneNumbers.dilipHalbhange')
      },
    },
    {
      name: t('management.names.ajayRenpure'),
      position: t('management.positions.member'),
      qualification: t('management.qualifications.educationTechnology'),
      experience: t('management.experience.tenPlus'),
      specialization: t('management.specializations.educationalTechnologyInnovation'),
      responsibilities: [
        t('management.responsibilities.technologyIntegrationEducation'),
        t('management.responsibilities.digitalLearningInitiatives'),
        t('management.responsibilities.innovationTeachingMethods'),
        t('management.responsibilities.technicalSupportTraining')
      ],
      contact: {
        email: t('management.phoneNumbers.member3Email'),
        phone: t('management.phoneNumbers.ajayRenpure')
      },
    },
    {
      name: t('management.names.mayasKarad'),
      position: t('management.positions.member'),
      qualification: t('management.qualifications.educationResearch'),
      experience: t('management.experience.elevenPlus'),
      specialization: t('management.specializations.researchDevelopmentEducation'),
      responsibilities: [
        t('management.responsibilities.educationalResearchActivities'),
        t('management.responsibilities.developmentNewMethodologies'),
        t('management.responsibilities.dataAnalysisReporting'),
        t('management.responsibilities.evidenceBasedDecisionMaking')
      ],
      contact: {
        email: t('management.phoneNumbers.member4Email'),
        phone: t('management.phoneNumbers.mayasKarad')
      },
    },
    {
      name: t('management.names.archanatayiApte'),
      position: t('management.positions.member'),
      qualification: t('management.qualifications.educationPhd'),
      experience: t('management.experience.fifteenPlus'),
      specialization: t('management.specializations.academicExcellenceStudentDevelopment'),
      responsibilities: [
        t('management.responsibilities.academicExcellencePrograms'),
        t('management.responsibilities.studentDevelopmentInitiatives'),
        t('management.responsibilities.curriculumEnhancement'),
        t('management.responsibilities.assessmentEvaluation')
      ],
      contact: {
        email: t('management.phoneNumbers.member5Email'),
        phone: t('management.phoneNumbers.archanatayiApte')
      },
    },
    {
      name: t('management.names.balbhimJadhav'),
      position: t('management.positions.parentsRepresentative'),
      qualification: t('management.qualifications.communityLeadership'),
      experience: t('management.experience.eightPlus'),
      specialization: t('management.specializations.parentEngagementCommunityRelations'),
      responsibilities: [
        t('management.responsibilities.parentEngagementActivities'),
        t('management.responsibilities.communityRelationsManagement'),
        t('management.responsibilities.studentWelfareAdvocacy'),
        t('management.responsibilities.feedbackCommunication')
      ],
      contact: {
        email: t('management.phoneNumbers.parentsEmail'),
        phone: t('management.phoneNumbers.balbhimJadhav')
      },
    },
    {
      name: t('management.names.manmathKhichade'),
      position: t('management.positions.teachersRepresentative'),
      qualification: t('management.qualifications.educationTeaching'),
      experience: t('management.experience.eighteenPlus'),
      specialization: t('management.specializations.teachingExcellenceFacultyDevelopment'),
      responsibilities: [
        t('management.responsibilities.teacherWelfareDevelopment'),
        t('management.responsibilities.teachingMethodologyImprovement'),
        t('management.responsibilities.facultyCoordinationSupport'),
        t('management.responsibilities.academicQualityEnhancement')
      ],
      contact: {
        email: t('management.phoneNumbers.teachersEmail'),
        phone: t('management.phoneNumbers.manmathKhichade')
      },
    },
    {
      name: t('management.names.sanjayJoshi'),
      position: t('management.positions.nonTeachingStaffRepresentative'),
      qualification: t('management.qualifications.administrationSupportServices'),
      experience: t('management.experience.twelvePlus'),
      specialization: t('management.specializations.supportServicesAdministrativeEfficiency'),
      responsibilities: [
        t('management.responsibilities.supportServicesManagement'),
        t('management.responsibilities.administrativeEfficiencyImprovement'),
        t('management.responsibilities.staffCoordinationSupport'),
        t('management.responsibilities.operationalExcellence')
      ],
      contact: {
        email: t('management.phoneNumbers.staffEmail'),
        phone: t('management.phoneNumbers.sanjayJoshi')
      },
    },
    {
      name: t('management.names.ravindraPurnapatre'),
      position: t('management.positions.specialInviteeMember'),
      qualification: t('management.qualifications.educationDevelopmentSpecial'),
      experience: t('management.experience.twelvePlus'),
      specialization: t('management.specializations.specialProjectsExternalRelations'),
      responsibilities: [
        t('management.responsibilities.specialProjectCoordination'),
        t('management.responsibilities.externalRelationsManagement'),
        t('management.responsibilities.partnershipDevelopment'),
        t('management.responsibilities.strategicInitiatives')
      ],
      contact: {
        email: t('management.phoneNumbers.specialEmail'),
        phone: t('management.phoneNumbers.ravindraPurnapatre')
      },
    },
  ];

  const hostelCommittee = [
    {
      name: t('management.names.rajeshSugureHostel'),
      position: t('management.positions.president'),
      qualification: t('management.qualifications.educationAdministration'),
      experience: t('management.experience.fourteenPlus'),
      specialization: t('management.specializations.hostelManagementStudentWelfare'),
      responsibilities: [
        t('management.responsibilities.overallHostelGovernance'),
        t('management.responsibilities.studentWelfareSafety'),
        t('management.responsibilities.policyFormulationImplementation'),
        t('management.responsibilities.qualityAssuranceHostelServices')
      ],
      contact: {
        email: 'hostel.president@jnvlatur.edu.in',
        phone: t('management.phoneNumbers.rajeshSugureHostel')
      },
    },
    {
      name: t('management.names.ravindraPurnapatre'),
      position: t('management.positions.hostelSecretary'),
      qualification: t('management.qualifications.educationDevelopment'),
      experience: t('management.experience.twelvePlus'),
      specialization: t('management.specializations.hostelAdministrationStudentServices'),
      responsibilities: [
        t('management.responsibilities.hostelAdministrationOperations'),
        t('management.responsibilities.studentServicesCoordination'),
        t('management.responsibilities.dailyOperationsManagement'),
        t('management.responsibilities.staffCoordinationSupervision')
      ],
      contact: {
        email: 'hostel.secretary@jnvlatur.edu.in',
        phone: t('management.phoneNumbers.ravindraPurnapatre')
      },
    },
    {
      name: t('management.names.vishwanathJadhav'),
      position: t('management.positions.member'),
      qualification: t('management.qualifications.llbLegalAffairs'),
      experience: t('management.experience.tenPlus'),
      specialization: t('management.specializations.legalComplianceStudentRights'),
      responsibilities: [
        t('management.responsibilities.legalComplianceHostelOperations'),
        t('management.responsibilities.studentRightsProtection'),
        t('management.responsibilities.disciplinaryProceduresOversight'),
        t('management.responsibilities.legalDocumentationProcedures')
      ],
      contact: {
        email: 'hostel.member1@jnvlatur.edu.in',
        phone: t('management.phoneNumbers.vishwanathJadhav')
      },
    },
    {
      name: t('management.names.valmikKale'),
      position: t('management.positions.member'),
      qualification: t('management.qualifications.educationCommunityService'),
      experience: t('management.experience.thirteenPlus'),
      specialization: t('management.specializations.communityRelationsStudentDevelopment'),
      responsibilities: [
        t('management.responsibilities.communityRelationsManagement'),
        t('management.responsibilities.studentDevelopmentPrograms'),
        t('management.responsibilities.localEngagementActivities'),
        t('management.responsibilities.culturalSocialPrograms')
      ],
      contact: {
        email: 'hostel.member2@jnvlatur.edu.in',
        phone: t('management.phoneNumbers.valmikKale')
      },
    },
    {
      name: t('management.names.arunaSadake'),
      position: t('management.positions.member'),
      qualification: t('management.qualifications.phdEducation'),
      experience: t('management.experience.fifteenPlus'),
      specialization: t('management.specializations.studentCounselingWelfare'),
      responsibilities: [
        t('management.responsibilities.studentCounselingServices'),
        t('management.responsibilities.mentalHealthWellnessPrograms'),
        t('management.responsibilities.studentWelfareInitiatives'),
        t('management.responsibilities.personalDevelopmentSupport')
      ],
      contact: {
        email: 'hostel.member3@jnvlatur.edu.in',
        phone: t('management.phoneNumbers.arunaSadake')
      },
    },
    {
      name: t('management.names.shaileshKulkarni'),
      position: t('management.positions.member'),
      qualification: t('management.qualifications.educationAdministration'),
      experience: t('management.experience.elevenPlus'),
      specialization: t('management.specializations.administrativeOperationsQualityManagement'),
      responsibilities: [
        t('management.responsibilities.administrativeOperationsOversight'),
        t('management.responsibilities.qualityManagementHostelServices'),
        t('management.responsibilities.processImprovementInitiatives'),
        t('management.responsibilities.performanceMonitoringEvaluation')
      ],
      contact: {
        email: 'hostel.member4@jnvlatur.edu.in',
        phone: t('management.phoneNumbers.shaileshKulkarni')
      },
    },
    {
      name: t('management.names.manojKulkarni'),
      position: t('management.positions.member'),
      qualification: t('management.qualifications.educationDevelopment'),
      experience: t('management.experience.ninePlus'),
      specialization: t('management.specializations.studentActivitiesCulturalPrograms'),
      responsibilities: [
        t('management.responsibilities.studentActivityCoordination'),
        t('management.responsibilities.culturalProgramManagement'),
        t('management.responsibilities.recreationalActivitiesPlanning'),
        t('management.responsibilities.studentEngagementInitiatives')
      ],
      contact: {
        email: 'hostel.member5@jnvlatur.edu.in',
        phone: t('management.phoneNumbers.manojKulkarni')
      },
    },
    {
      name: t('management.names.dattuMane'),
      position: t('management.positions.member'),
      qualification: t('management.qualifications.communityLeadership'),
      experience: t('management.experience.twelvePlus'),
      specialization: t('management.specializations.communityDevelopmentLocalRelations'),
      responsibilities: [
        t('management.responsibilities.communityDevelopmentInitiatives'),
        t('management.responsibilities.localRelationsManagement'),
        t('management.responsibilities.publicEngagementActivities'),
        t('management.responsibilities.socialResponsibilityPrograms')
      ],
      contact: {
        email: 'hostel.member6@jnvlatur.edu.in',
        phone: t('management.phoneNumbers.dattuMane')
      },
    },
    {
      name: t('management.names.bahubaliBhambe'),
      position: t('management.positions.staffRepresentative'),
      qualification: t('management.qualifications.educationSupportServices'),
      experience: t('management.experience.sixteenPlus'),
      specialization: t('management.specializations.staffWelfareSupportServices'),
      responsibilities: [
        t('management.responsibilities.staffWelfareDevelopment'),
        t('management.responsibilities.supportServicesCoordination'),
        t('management.responsibilities.staffTrainingDevelopment'),
        t('management.responsibilities.operationalEfficiencyImprovement')
      ],
      contact: {
        email: 'hostel.staff@jnvlatur.edu.in',
        phone: t('management.phoneNumbers.bahubaliBhambe')
      },
    },
    {
      name: t('management.names.dnyaneshwarSonatakke'),
      position: t('management.positions.cooptedMember'),
      qualification: t('management.qualifications.educationCommunityService'),
      experience: t('management.experience.sixteenPlus'),
      specialization: t('management.specializations.specialProjectsCommunityEngagement'),
      responsibilities: [
        t('management.responsibilities.specialProjectCoordination'),
        t('management.responsibilities.communityEngagementActivities'),
        t('management.responsibilities.partnershipDevelopment'),
        t('management.responsibilities.strategicInitiatives')
      ],
      contact: {
        email: 'hostel.coopted@jnvlatur.edu.in',
        phone: t('management.phoneNumbers.dnyaneshwarSonatakke')
      },
    },
  ];

  const advisoryBoard = [
    {
      name: 'Dr. Ashok Mehta',
      position: 'Chairman, School Board',
      qualification: 'Ph.D. in Educational Sciences',
      affiliation: 'Former Director, NCERT',
      expertise: 'Educational Policy & Research',
    },
    {
      name: 'Mrs. Kavita Joshi',
      position: 'Education Advisor',
      qualification: 'M.A. Education, M.Phil.',
      affiliation: 'Educational Consultant',
      expertise: 'Curriculum Design & Assessment',
    },
    {
      name: 'Mr. Suresh Patil',
      position: 'Community Representative',
      qualification: 'M.A. Social Work',
      affiliation: 'Local Community Leader',
      expertise: 'Community Relations & Social Development',
    },
    {
      name: 'Dr. Ravi Kumar',
      position: 'Medical Advisor',
      qualification: 'MBBS, MD Pediatrics',
      affiliation: 'Chief Medical Officer, District Hospital',
      expertise: 'Student Health & Wellness Programs',
    },
  ];

  const departmentHeads = [
    {
      department: 'Science Department',
      head: 'Dr. Priya Sharma',
      qualification: 'Ph.D. Physics',
      faculty: 8,
      subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics'],
    },
    {
      department: 'Languages Department',
      head: 'Mrs. Shweta Patil',
      qualification: 'M.A. English Literature',
      faculty: 6,
      subjects: ['English', 'Hindi', 'Marathi', 'Sanskrit'],
    },
    {
      department: 'Social Sciences Department',
      head: 'Mr. Babalsure Sir',
      qualification: 'M.A. History',
      faculty: 5,
      subjects: ['History', 'Geography', 'Political Science', 'Economics'],
    },
    {
      department: 'Arts & Sports Department',
      head: 'Mr. Ganesh Rao',
      qualification: 'M.P.Ed.',
      faculty: 4,
      subjects: ['Physical Education', 'Art', 'Music', 'Dance'],
    },
  ];

  const organizationalStructure = [
    {
      level: 'Governance Level',
      positions: [
        'Navodaya Vidyalaya Samiti (NVS)',
        'Regional Office',
        'School Board & Advisory Committee'
      ],
    },
    {
      level: 'Executive Level',
      positions: [
        'Principal (Chief Executive)',
        'Vice Principal',
        'Administrative Officer'
      ],
    },
    {
      level: 'Academic Level',
      positions: [
        'Academic Coordinator',
        'Department Heads',
        'Senior Teachers & TGTs/PGTs'
      ],
    },
    {
      level: 'Support Level',
      positions: [
        'Administrative Staff',
        'Technical Staff',
        'Support Services Staff'
      ],
    },
  ];

  const achievements = [
    {
      year: t('management.achievements.bestNavodayaVidyalaya.year'),
      achievement: t('management.achievements.bestNavodayaVidyalaya.title'),
      level: t('management.achievements.bestNavodayaVidyalaya.level'),
      description: t('management.achievements.bestNavodayaVidyalaya.description'),
    },
    {
      year: t('management.achievements.digitalEducation.year'),
      achievement: t('management.achievements.digitalEducation.title'),
      level: t('management.achievements.digitalEducation.level'),
      description: t('management.achievements.digitalEducation.description'),
    },
    {
      year: t('management.achievements.greenSchool.year'),
      achievement: t('management.achievements.greenSchool.title'),
      level: t('management.achievements.greenSchool.level'),
      description: t('management.achievements.greenSchool.description'),
    },
    {
      year: t('management.achievements.communityService.year'),
      achievement: t('management.achievements.communityService.title'),
      level: t('management.achievements.communityService.level'),
      description: t('management.achievements.communityService.description'),
    },
  ];

  const visionMission = {
    vision: t('management.visionMission.visionText'),
    mission: t('management.visionMission.missionText'),
    values: [
      t('management.visionMission.values.0'),
      t('management.visionMission.values.1'),
      t('management.visionMission.values.2'),
      t('management.visionMission.values.3'),
      t('management.visionMission.values.4'),
      t('management.visionMission.values.5')
    ],
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-orange-50 py-16 relative overflow-hidden">
          {/* Education Doodles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Book Doodle */}
            <div className="absolute top-20 left-20 text-orange-200/30 text-6xl transform rotate-12">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            {/* Pencil Doodle */}
            <div className="absolute top-40 right-32 text-orange-200/30 text-5xl transform -rotate-12">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
              </svg>
            </div>
            {/* Graduation Cap Doodle */}
            <div className="absolute bottom-32 left-16 text-orange-200/30 text-7xl transform rotate-6">
              <svg width="70" height="70" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18M12,3L1,9L12,15L21,10.09V17H23V9L12,3Z"/>
              </svg>
            </div>
            {/* Lightbulb Doodle */}
            <div className="absolute top-60 right-20 text-orange-200/30 text-4xl transform -rotate-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9,21C9,22.1 9.9,23 11,23H13C14.1,23 15,22.1 15,21V20H9V21M12,2C8.14,2 5,5.14 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9C19,5.14 15.86,2 12,2Z"/>
              </svg>
            </div>
            {/* Star Doodle */}
            <div className="absolute bottom-20 right-24 text-orange-200/30 text-5xl transform rotate-12">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
              </svg>
            </div>
          </div>
          <div className="w-4/5 mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="management-hero-title">
              {t('management.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('management.subtitle')}
            </p>
          </div>
        </section>

        {/* Vision, Mission & Values */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
          {/* Education Doodles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Book Doodle */}
            <div className="absolute top-20 left-20 text-orange-200/30 text-6xl transform rotate-12">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            {/* Pencil Doodle */}
            <div className="absolute top-40 right-32 text-orange-200/30 text-5xl transform -rotate-12">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
              </svg>
            </div>
            {/* Graduation Cap Doodle */}
            <div className="absolute bottom-32 left-16 text-orange-200/30 text-7xl transform rotate-6">
              <svg width="70" height="70" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18M12,3L1,9L12,15L21,10.09V17H23V9L12,3Z"/>
              </svg>
            </div>
            {/* Lightbulb Doodle */}
            <div className="absolute top-60 right-20 text-orange-200/30 text-4xl transform -rotate-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9,21C9,22.1 9.9,23 11,23H13C14.1,23 15,22.1 15,21V20H9V21M12,2C8.14,2 5,5.14 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9C19,5.14 15.86,2 12,2Z"/>
              </svg>
            </div>
            {/* Star Doodle */}
            <div className="absolute bottom-20 right-24 text-orange-200/30 text-5xl transform rotate-12">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
              </svg>
            </div>
          </div>
          <div className="w-4/5 mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="vision-mission-title">
                {t('management.visionMission.title')}
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center space-x-2">
                    <Target className="w-6 h-6 text-primary" />
                    <span>{t('management.visionMission.vision')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{visionMission.vision}</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center space-x-2">
                    <BookOpen className="w-6 h-6 text-primary" />
                    <span>{t('management.visionMission.mission')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{visionMission.mission}</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center space-x-2">
                    <Star className="w-6 h-6 text-primary" />
                    <span>{t('management.visionMission.coreValues')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {visionMission.values.map((value, index) => (
                      <div key={index} className="text-sm text-muted-foreground">
                        • {value}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Management Team */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
          {/* Education Doodles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Book Doodle */}
            <div className="absolute top-20 left-20 text-orange-200/30 text-6xl transform rotate-12">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            {/* Pencil Doodle */}
            <div className="absolute top-40 right-32 text-orange-200/30 text-5xl transform -rotate-12">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
              </svg>
            </div>
            {/* Graduation Cap Doodle */}
            <div className="absolute bottom-32 left-16 text-orange-200/30 text-7xl transform rotate-6">
              <svg width="70" height="70" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18M12,3L1,9L12,15L21,10.09V17H23V9L12,3Z"/>
              </svg>
            </div>
            {/* Lightbulb Doodle */}
            <div className="absolute top-60 right-20 text-orange-200/30 text-4xl transform -rotate-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9,21C9,22.1 9.9,23 11,23H13C14.1,23 15,22.1 15,21V20H9V21M12,2C8.14,2 5,5.14 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9C19,5.14 15.86,2 12,2Z"/>
              </svg>
            </div>
            {/* Star Doodle */}
            <div className="absolute bottom-20 right-24 text-orange-200/30 text-5xl transform rotate-12">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
              </svg>
            </div>
          </div>
          <div className="w-4/5 mx-auto px-4 relative z-10">
            <Tabs defaultValue="management" className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="management-team-title">
                  {t('management.team.title')}
                </h2>
                <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3">
                  <TabsTrigger value="management">{t('management.team.managementCommittee')}</TabsTrigger>
                  <TabsTrigger value="school">{t('management.team.schoolCommittee')}</TabsTrigger>
                  <TabsTrigger value="hostel">{t('management.team.hostelCommittee')}</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="management">
                <div className="grid gap-8">
                  {managementCommittee.map((member, index) => (
                    <Card key={index}>
                      <CardContent className="p-8">
                        <div className="grid lg:grid-cols-4 gap-6">
                          <div className="lg:col-span-1 text-center">
                            <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-orange-100 flex items-center justify-center">
                              <Users className="w-16 h-16 text-orange-600" />
                            </div>
                            <h3 className="font-semibold text-xl mb-1" data-testid={`leader-name-${index}`}>
                              {member.name}
                            </h3>
                            <Badge variant="default" className="mb-2">{member.position}</Badge>
                            <div className="text-sm text-muted-foreground space-y-1">
                              <div><Mail className="w-3 h-3 inline mr-1" />{member.contact.email}</div>
                              <div><Phone className="w-3 h-3 inline mr-1" />{member.contact.phone}</div>
                            </div>
                          </div>
                          <div className="lg:col-span-3">
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold mb-2">{t('management.qualifications.title')}</h4>
                                <div className="space-y-1 text-sm text-muted-foreground">
                                  <div><strong>{t('management.qualifications.education')}:</strong> {member.qualification}</div>
                                  <div><strong>{t('management.qualifications.experience')}:</strong> {member.experience}</div>
                                  <div><strong>{t('management.qualifications.specialization')}:</strong> {member.specialization}</div>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-semibold mb-2">{t('management.responsibilities.title')}</h4>
                                <div className="space-y-1">
                                  {member.responsibilities.map((responsibility, respIndex) => (
                                    <div key={respIndex} className="flex items-start space-x-2 text-sm">
                                      <div className="w-1 h-1 bg-primary rounded-full mt-2"></div>
                                      <span className="text-muted-foreground">{responsibility}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="school">
                <div className="grid gap-8">
                  {schoolCommittee.map((member, index) => (
                    <Card key={index}>
                      <CardContent className="p-8">
                        <div className="grid lg:grid-cols-4 gap-6">
                          <div className="lg:col-span-1 text-center">
                            <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-orange-100 flex items-center justify-center">
                              <BookOpen className="w-16 h-16 text-orange-600" />
                            </div>
                            <h3 className="font-semibold text-xl mb-1" data-testid={`school-member-name-${index}`}>
                              {member.name}
                            </h3>
                            <Badge variant="default" className="mb-2">{member.position}</Badge>
                            <div className="text-sm text-muted-foreground space-y-1">
                              <p><span className="font-medium">{t('management.qualifications.experience')}:</span> {member.experience}</p>
                              <p><span className="font-medium">{t('management.qualifications.education')}:</span> {member.qualification}</p>
                            </div>
                          </div>
                          <div className="lg:col-span-3">
                            <div className="mb-4">
                              <h4 className="font-semibold text-lg mb-2 text-orange-600">{t('management.qualifications.specialization')}</h4>
                              <p className="text-muted-foreground">{member.specialization}</p>
                            </div>
                            <div className="mb-4">
                              <h4 className="font-semibold text-lg mb-2 text-orange-600">{t('management.responsibilities.title')}</h4>
                              <ul className="space-y-1">
                                {member.responsibilities.map((responsibility, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <Star className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                    {responsibility}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex items-center gap-4 pt-4 border-t">
                              <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm">{member.contact.email}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm">{member.contact.phone}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="hostel">
                <div className="grid gap-8">
                  {hostelCommittee.map((member, index) => (
                    <Card key={index}>
                      <CardContent className="p-8">
                        <div className="grid lg:grid-cols-4 gap-6">
                          <div className="lg:col-span-1 text-center">
                            <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-orange-100 flex items-center justify-center">
                              <Building className="w-16 h-16 text-orange-600" />
                            </div>
                            <h3 className="font-semibold text-xl mb-1" data-testid={`hostel-member-name-${index}`}>
                              {member.name}
                            </h3>
                            <Badge variant="default" className="mb-2">{member.position}</Badge>
                            <div className="text-sm text-muted-foreground space-y-1">
                              <p><span className="font-medium">{t('management.qualifications.experience')}:</span> {member.experience}</p>
                              <p><span className="font-medium">{t('management.qualifications.education')}:</span> {member.qualification}</p>
                            </div>
                          </div>
                          <div className="lg:col-span-3">
                            <div className="mb-4">
                              <h4 className="font-semibold text-lg mb-2 text-orange-600">{t('management.qualifications.specialization')}</h4>
                              <p className="text-muted-foreground">{member.specialization}</p>
                            </div>
                            <div className="mb-4">
                              <h4 className="font-semibold text-lg mb-2 text-orange-600">{t('management.responsibilities.title')}</h4>
                              <ul className="space-y-1">
                                {member.responsibilities.map((responsibility, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <Star className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                    {responsibility}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex items-center gap-4 pt-4 border-t">
                              <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm">{member.contact.email}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm">{member.contact.phone}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>


        {/* Management Achievements */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
          {/* Education Doodles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Book Doodle */}
            <div className="absolute top-20 left-20 text-orange-200/30 text-6xl transform rotate-12">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            {/* Pencil Doodle */}
            <div className="absolute top-40 right-32 text-orange-200/30 text-5xl transform -rotate-12">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
              </svg>
            </div>
            {/* Graduation Cap Doodle */}
            <div className="absolute bottom-32 left-16 text-orange-200/30 text-7xl transform rotate-6">
              <svg width="70" height="70" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18M12,3L1,9L12,15L21,10.09V17H23V9L12,3Z"/>
              </svg>
            </div>
            {/* Lightbulb Doodle */}
            <div className="absolute top-60 right-20 text-orange-200/30 text-4xl transform -rotate-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9,21C9,22.1 9.9,23 11,23H13C14.1,23 15,22.1 15,21V20H9V21M12,2C8.14,2 5,5.14 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9C19,5.14 15.86,2 12,2Z"/>
              </svg>
            </div>
            {/* Star Doodle */}
            <div className="absolute bottom-20 right-24 text-orange-200/30 text-5xl transform rotate-12">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
              </svg>
            </div>
          </div>
          <div className="w-4/5 mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="management-achievements-title">
                {t('management.achievements.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('management.achievements.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold" data-testid={`achievement-title-${index}`}>
                            {achievement.achievement}
                          </h3>
                          <Badge variant="outline">{achievement.year}</Badge>
                        </div>
                        <Badge variant="secondary" className="mb-2">{achievement.level}</Badge>
                        <p className="text-muted-foreground text-sm">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Management */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="w-4/5 mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="contact-management-title">
              {t('management.managementContact.title')}
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              {t('management.managementContact.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" data-testid="contact-principal-button">
                {t('management.managementContact.contactPrincipal')}
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors" data-testid="schedule-meeting-button">
                {t('management.managementContact.scheduleMeeting')}
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
