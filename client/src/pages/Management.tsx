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
      name: 'Shri Prakash Kishanrao Raychukur',
      position: t('management.positions.president'),
      qualification: t('management.qualifications.educationLeader'),
      experience: '20+ years',
      specialization: t('management.specializations.educationalLeadershipGovernance'),
      responsibilities: [
        t('management.responsibilities.overallGovernancePolicyDirection'),
        t('management.responsibilities.strategicPlanningDecisionMaking'),
        t('management.responsibilities.communityRelationsPartnerships'),
        t('management.responsibilities.financialOversightAccountability')
      ],
      contact: {
        email: 'president@jnvlatur.edu.in',
        phone: '+91-2382-123457'
      },
    },
    {
      name: 'Dr. Rajesh Shivajirao Patil',
      position: t('management.positions.vicePresident'),
      qualification: t('management.qualifications.phdEducation'),
      experience: '18+ years',
      specialization: t('management.specializations.academicExcellencePolicyDevelopment'),
      responsibilities: [
        t('management.responsibilities.academicPolicyFormulation'),
        t('management.responsibilities.educationalQualityAssurance'),
        t('management.responsibilities.strategicAcademicPlanning'),
        t('management.responsibilities.facultyDevelopmentPrograms')
      ],
      contact: {
        email: 'vicepresident@jnvlatur.edu.in',
        phone: '+91-2382-123458'
      },
    },
    {
      name: 'Adv. Balkrishna Harirrao Deshpande',
      position: t('management.positions.secretary'),
      qualification: t('management.qualifications.llbEducationLawSpecialist'),
      experience: '15+ years',
      specialization: 'Legal Affairs & Administrative Compliance',
      responsibilities: [
        'Legal compliance and documentation',
        'Administrative procedures and policies',
        'Regulatory affairs management',
        'Contract and agreement oversight'
      ],
      contact: {
        email: 'secretary@jnvlatur.edu.in',
        phone: '+91-2382-123459'
      },
    },
    {
      name: 'Shri Arvind Renukadasrao Deshpande',
      position: 'Member',
      qualification: 'Education Management',
      experience: '12+ years',
      specialization: 'Operations & Resource Management',
      responsibilities: [
        'Operational efficiency and improvement',
        'Resource allocation and management',
        'Infrastructure development planning',
        'Performance monitoring and evaluation'
      ],
      contact: {
        email: 'member1@jnvlatur.edu.in',
        phone: '+91-2382-123460'
      },
    },
    {
      name: 'Shri Vasant Yewarkar Nayakvadi',
      position: 'Member',
      qualification: 'Community Development',
      experience: '10+ years',
      specialization: 'Community Engagement & Social Development',
      responsibilities: [
        'Community outreach and engagement',
        'Social development initiatives',
        'Local partnership development',
        'Public relations and communication'
      ],
      contact: {
        email: 'member2@jnvlatur.edu.in',
        phone: '+91-2382-123461'
      },
    },
    {
      name: 'Principal Dr. Atmaram Vinayakrao Pachpute',
      position: 'Member',
      qualification: 'Ph.D. in Education Administration',
      experience: '25+ years',
      specialization: 'Educational Leadership & School Management',
      responsibilities: [
        'School administration and management',
        'Academic excellence and quality assurance',
        'Staff development and training',
        'Student welfare and development'
      ],
      contact: {
        email: 'principal@jnvlatur.edu.in',
        phone: '+91-2382-123462'
      },
    },
    {
      name: 'Shri Rajesh Maheshwarappa Sugure',
      position: 'Member',
      qualification: 'Education & Administration',
      experience: '14+ years',
      specialization: 'Administrative Operations & Quality Management',
      responsibilities: [
        'Administrative operations oversight',
        'Quality management systems',
        'Process improvement initiatives',
        'Compliance and audit management'
      ],
      contact: {
        email: 'member3@jnvlatur.edu.in',
        phone: '+91-2382-123463'
      },
    },
    {
      name: 'Shri Vivek Kishanrao Agachit',
      position: 'Nominated Member',
      qualification: 'Education & Development',
      experience: '8+ years',
      specialization: 'Special Projects & Innovation',
      responsibilities: [
        'Special project management',
        'Innovation and development initiatives',
        'Technology integration projects',
        'Research and development activities'
      ],
      contact: {
        email: 'nominated@jnvlatur.edu.in',
        phone: '+91-2382-123464'
      },
    },
    {
      name: 'Shri Dnyaneshwar Rajaram Sonatakke',
      position: 'Co-opted Member (Male)',
      qualification: 'Education & Community Service',
      experience: '16+ years',
      specialization: 'Community Development & Student Welfare',
      responsibilities: [
        'Community development programs',
        'Student welfare initiatives',
        'Local engagement activities',
        'Social responsibility projects'
      ],
      contact: {
        email: 'coopted1@jnvlatur.edu.in',
        phone: '+91-2382-123465'
      },
    },
    {
      name: 'Shri Ravindra Madhukarrao Purnapatre',
      position: 'Co-opted Member (Female)',
      qualification: 'Education & Women Empowerment',
      experience: '12+ years',
      specialization: 'Gender Equality & Inclusive Education',
      responsibilities: [
        'Gender equality initiatives',
        'Inclusive education programs',
        'Women empowerment activities',
        'Diversity and inclusion management'
      ],
      contact: {
        email: 'coopted2@jnvlatur.edu.in',
        phone: '+91-2382-123466'
      },
    },
  ];

  const schoolCommittee = [
    {
      name: 'Principal Dr. Atmaram Vinayakrao Pachpute',
      position: 'President',
      qualification: 'Ph.D. in Education Administration',
      experience: '25+ years',
      specialization: 'Educational Leadership & School Management',
      responsibilities: [
        'Overall academic leadership',
        'Curriculum development and implementation',
        'Academic policy formulation',
        'Quality assurance and improvement'
      ],
      contact: {
        email: 'principal@jnvlatur.edu.in',
        phone: '+91-2382-123457'
      },
    },
    {
      name: 'Shri Dnyaneshwar Rajaram Sonatakke',
      position: 'Secretary (Local)',
      qualification: 'Education & Administration',
      experience: '16+ years',
      specialization: 'Academic Coordination & Local Administration',
      responsibilities: [
        'Academic coordination and planning',
        'Local administrative support',
        'Community liaison activities',
        'Student affairs management'
      ],
      contact: {
        email: 'secretary.local@jnvlatur.edu.in',
        phone: '+91-2382-123458'
      },
    },
    {
      name: 'Shri Prabhakar Manikrao Joshi',
      position: 'Member',
      qualification: 'Education & Development',
      experience: '14+ years',
      specialization: 'Educational Development & Community Engagement',
      responsibilities: [
        'Educational development initiatives',
        'Community engagement programs',
        'Academic support activities',
        'Student development programs'
      ],
      contact: {
        email: 'member1@jnvlatur.edu.in',
        phone: '+91-2382-123459'
      },
    },
    {
      name: 'Shri Dilip Rajaram Halbhange',
      position: 'Member',
      qualification: 'Education Management',
      experience: '12+ years',
      specialization: 'Academic Planning & Resource Management',
      responsibilities: [
        'Academic planning and scheduling',
        'Resource allocation and management',
        'Performance monitoring',
        'Quality improvement initiatives'
      ],
      contact: {
        email: 'member2@jnvlatur.edu.in',
        phone: '+91-2382-123460'
      },
    },
    {
      name: 'Shri Ajay Madhavrao Renpure',
      position: 'Member',
      qualification: 'Education & Technology',
      experience: '10+ years',
      specialization: 'Educational Technology & Innovation',
      responsibilities: [
        'Technology integration in education',
        'Digital learning initiatives',
        'Innovation in teaching methods',
        'Technical support and training'
      ],
      contact: {
        email: 'member3@jnvlatur.edu.in',
        phone: '+91-2382-123461'
      },
    },
    {
      name: 'Shri Mayas Jyotiram Karad',
      position: 'Member',
      qualification: 'Education & Research',
      experience: '11+ years',
      specialization: 'Research & Development in Education',
      responsibilities: [
        'Educational research activities',
        'Development of new methodologies',
        'Data analysis and reporting',
        'Evidence-based decision making'
      ],
      contact: {
        email: 'member4@jnvlatur.edu.in',
        phone: '+91-2382-123462'
      },
    },
    {
      name: 'Dr. (Mrs.) Archanatayi Shailendra Apte',
      position: 'Member',
      qualification: 'Ph.D. in Education',
      experience: '15+ years',
      specialization: 'Academic Excellence & Student Development',
      responsibilities: [
        'Academic excellence programs',
        'Student development initiatives',
        'Curriculum enhancement',
        'Assessment and evaluation'
      ],
      contact: {
        email: 'member5@jnvlatur.edu.in',
        phone: '+91-2382-123463'
      },
    },
    {
      name: 'Shri Balbhim Kishanrao Jadhav',
      position: 'Parents\' Representative',
      qualification: 'Community Leadership',
      experience: '8+ years',
      specialization: 'Parent Engagement & Community Relations',
      responsibilities: [
        'Parent engagement activities',
        'Community relations management',
        'Student welfare advocacy',
        'Feedback and communication'
      ],
      contact: {
        email: 'parents@jnvlatur.edu.in',
        phone: '+91-2382-123464'
      },
    },
    {
      name: 'Shri Manmath Kashinath Khichade',
      position: 'Teachers\' Representative',
      qualification: 'Education & Teaching',
      experience: '18+ years',
      specialization: 'Teaching Excellence & Faculty Development',
      responsibilities: [
        'Teacher welfare and development',
        'Teaching methodology improvement',
        'Faculty coordination and support',
        'Academic quality enhancement'
      ],
      contact: {
        email: 'teachers@jnvlatur.edu.in',
        phone: '+91-2382-123465'
      },
    },
    {
      name: 'Shri Sanjay Kantarao Joshi',
      position: 'Non-teaching Staff Representative',
      qualification: 'Administration & Support Services',
      experience: '12+ years',
      specialization: 'Support Services & Administrative Efficiency',
      responsibilities: [
        'Support services management',
        'Administrative efficiency improvement',
        'Staff coordination and support',
        'Operational excellence'
      ],
      contact: {
        email: 'staff@jnvlatur.edu.in',
        phone: '+91-2382-123466'
      },
    },
    {
      name: 'Shri Ravindra Madhukarrao Purnapatre',
      position: 'Special Invitee Member',
      qualification: 'Education & Development',
      experience: '12+ years',
      specialization: 'Special Projects & External Relations',
      responsibilities: [
        'Special project coordination',
        'External relations management',
        'Partnership development',
        'Strategic initiatives'
      ],
      contact: {
        email: 'special@jnvlatur.edu.in',
        phone: '+91-2382-123467'
      },
    },
  ];

  const hostelCommittee = [
    {
      name: 'Shri Rajesh Maheshwarappa Sugure',
      position: 'President',
      qualification: 'Education & Administration',
      experience: '14+ years',
      specialization: 'Hostel Management & Student Welfare',
      responsibilities: [
        'Overall hostel governance',
        'Student welfare and safety',
        'Policy formulation and implementation',
        'Quality assurance in hostel services'
      ],
      contact: {
        email: 'hostel.president@jnvlatur.edu.in',
        phone: '+91-2382-123457'
      },
    },
    {
      name: 'Shri Ravindra Madhukarrao Purnapatre',
      position: 'Secretary (Hostel)',
      qualification: 'Education & Development',
      experience: '12+ years',
      specialization: 'Hostel Administration & Student Services',
      responsibilities: [
        'Hostel administration and operations',
        'Student services coordination',
        'Daily operations management',
        'Staff coordination and supervision'
      ],
      contact: {
        email: 'hostel.secretary@jnvlatur.edu.in',
        phone: '+91-2382-123458'
      },
    },
    {
      name: 'Adv. Vishwanath Uddhavrao Jadhav',
      position: 'Member',
      qualification: 'LL.B., Legal Affairs',
      experience: '10+ years',
      specialization: 'Legal Compliance & Student Rights',
      responsibilities: [
        'Legal compliance in hostel operations',
        'Student rights protection',
        'Disciplinary procedures oversight',
        'Legal documentation and procedures'
      ],
      contact: {
        email: 'hostel.member1@jnvlatur.edu.in',
        phone: '+91-2382-123459'
      },
    },
    {
      name: 'Shri Valmik Nivruttirao Kale',
      position: 'Member',
      qualification: 'Education & Community Service',
      experience: '13+ years',
      specialization: 'Community Relations & Student Development',
      responsibilities: [
        'Community relations management',
        'Student development programs',
        'Local engagement activities',
        'Cultural and social programs'
      ],
      contact: {
        email: 'hostel.member2@jnvlatur.edu.in',
        phone: '+91-2382-123460'
      },
    },
    {
      name: 'Dr. (Mrs.) Aruna Srinivas Sadake',
      position: 'Member',
      qualification: 'Ph.D. in Education',
      experience: '15+ years',
      specialization: 'Student Counseling & Welfare',
      responsibilities: [
        'Student counseling services',
        'Mental health and wellness programs',
        'Student welfare initiatives',
        'Personal development support'
      ],
      contact: {
        email: 'hostel.member3@jnvlatur.edu.in',
        phone: '+91-2382-123461'
      },
    },
    {
      name: 'Shri Shailesh Shatrughna Kulkarni',
      position: 'Member',
      qualification: 'Education & Administration',
      experience: '11+ years',
      specialization: 'Administrative Operations & Quality Management',
      responsibilities: [
        'Administrative operations oversight',
        'Quality management in hostel services',
        'Process improvement initiatives',
        'Performance monitoring and evaluation'
      ],
      contact: {
        email: 'hostel.member4@jnvlatur.edu.in',
        phone: '+91-2382-123462'
      },
    },
    {
      name: 'Shri Manoj Manikrao Kulkarni (Devangikar)',
      position: 'Member',
      qualification: 'Education & Development',
      experience: '9+ years',
      specialization: 'Student Activities & Cultural Programs',
      responsibilities: [
        'Student activity coordination',
        'Cultural program management',
        'Recreational activities planning',
        'Student engagement initiatives'
      ],
      contact: {
        email: 'hostel.member5@jnvlatur.edu.in',
        phone: '+91-2382-123463'
      },
    },
    {
      name: 'Shri Dattu Keshavrao Mane',
      position: 'Member',
      qualification: 'Community Leadership',
      experience: '12+ years',
      specialization: 'Community Development & Local Relations',
      responsibilities: [
        'Community development initiatives',
        'Local relations management',
        'Public engagement activities',
        'Social responsibility programs'
      ],
      contact: {
        email: 'hostel.member6@jnvlatur.edu.in',
        phone: '+91-2382-123464'
      },
    },
    {
      name: 'Shri Bahubali Nagnath Bhambe',
      position: 'Staff Representative',
      qualification: 'Education & Support Services',
      experience: '16+ years',
      specialization: 'Staff Welfare & Support Services',
      responsibilities: [
        'Staff welfare and development',
        'Support services coordination',
        'Staff training and development',
        'Operational efficiency improvement'
      ],
      contact: {
        email: 'hostel.staff@jnvlatur.edu.in',
        phone: '+91-2382-123465'
      },
    },
    {
      name: 'Shri Dnyaneshwar Rajaram Sonatakke',
      position: 'Co-opted Member',
      qualification: 'Education & Community Service',
      experience: '16+ years',
      specialization: 'Special Projects & Community Engagement',
      responsibilities: [
        'Special project coordination',
        'Community engagement activities',
        'Partnership development',
        'Strategic initiatives'
      ],
      contact: {
        email: 'hostel.coopted@jnvlatur.edu.in',
        phone: '+91-2382-123466'
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
      year: '2023',
      achievement: 'Best Navodaya Vidyalaya Award',
      level: 'State Level',
      description: 'Recognized for overall excellence in academic performance and infrastructure development.',
    },
    {
      year: '2022',
      achievement: 'Excellence in Digital Education',
      level: 'Regional Level',
      description: 'Awarded for innovative use of technology in education and digital literacy programs.',
    },
    {
      year: '2021',
      achievement: 'Green School Certification',
      level: 'National Level',
      description: 'Certified for environmental conservation initiatives and sustainable practices.',
    },
    {
      year: '2020',
      achievement: 'Outstanding Community Service',
      level: 'District Level',
      description: 'Recognized for significant contribution to community development and social service.',
    },
  ];

  const visionMission = {
    vision: 'To be a center of excellence in education, fostering holistic development of students from rural backgrounds and preparing them to be responsible global citizens.',
    mission: 'To provide quality education with modern facilities while preserving cultural values, developing critical thinking, and nurturing leadership qualities in students.',
    values: [
      'Excellence in Education',
      'Integrity and Ethics',
      'Inclusive Growth',
      'Innovation and Creativity',
      'Social Responsibility',
      'Cultural Preservation'
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
              Management & Leadership
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet our experienced leadership team committed to educational excellence and holistic student development
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
                Our Vision, Mission & Values
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center space-x-2">
                    <Target className="w-6 h-6 text-primary" />
                    <span>Vision</span>
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
                    <span>Mission</span>
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
                    <span>Core Values</span>
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
                  Management Team
                </h2>
                <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3">
                  <TabsTrigger value="management">Management Committee</TabsTrigger>
                  <TabsTrigger value="school">School Committee</TabsTrigger>
                  <TabsTrigger value="hostel">Hostel Committee</TabsTrigger>
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
                                <h4 className="font-semibold mb-2">Qualifications & Experience</h4>
                                <div className="space-y-1 text-sm text-muted-foreground">
                                  <div><strong>Education:</strong> {member.qualification}</div>
                                  <div><strong>Experience:</strong> {member.experience}</div>
                                  <div><strong>Specialization:</strong> {member.specialization}</div>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-semibold mb-2">Key Responsibilities</h4>
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
                              <p><span className="font-medium">Experience:</span> {member.experience}</p>
                              <p><span className="font-medium">Qualification:</span> {member.qualification}</p>
                            </div>
                          </div>
                          <div className="lg:col-span-3">
                            <div className="mb-4">
                              <h4 className="font-semibold text-lg mb-2 text-orange-600">Specialization</h4>
                              <p className="text-muted-foreground">{member.specialization}</p>
                            </div>
                            <div className="mb-4">
                              <h4 className="font-semibold text-lg mb-2 text-orange-600">Key Responsibilities</h4>
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
                              <p><span className="font-medium">Experience:</span> {member.experience}</p>
                              <p><span className="font-medium">Qualification:</span> {member.qualification}</p>
                            </div>
                          </div>
                          <div className="lg:col-span-3">
                            <div className="mb-4">
                              <h4 className="font-semibold text-lg mb-2 text-orange-600">Specialization</h4>
                              <p className="text-muted-foreground">{member.specialization}</p>
                            </div>
                            <div className="mb-4">
                              <h4 className="font-semibold text-lg mb-2 text-orange-600">Key Responsibilities</h4>
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
                Management Achievements
              </h2>
              <p className="text-lg text-muted-foreground">
                Recognition and awards received under current leadership
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
              Contact Management
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              For any queries related to school administration, policies, or management, please reach out to our leadership team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" data-testid="contact-principal-button">
                Contact Principal
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors" data-testid="schedule-meeting-button">
                Schedule Meeting
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
