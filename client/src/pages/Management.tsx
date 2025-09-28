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
      name: 'Mr. Sonttake Sir',
      position: 'Principal & Chief Executive',
      qualification: 'Ph.D. in Education Administration',
      experience: '25 years',
      specialization: 'Educational Leadership & Policy Development',
      responsibilities: [
        'Overall school administration and management',
        'Academic policy formulation and implementation',
        'Staff recruitment and professional development',
        'External relations and community engagement'
      ],
      contact: {
        email: 'principal@jnvlatur.edu.in',
        phone: '+91-2382-123457'
      },
      image: '/images/HeadMaster.jpg',
    },
    {
      name: 'Mrs. Rekha Ma\'am',
      position: 'Vice Principal',
      qualification: 'M.Ed. in Educational Psychology',
      experience: '20 years',
      specialization: 'Curriculum Development & Student Counseling',
      responsibilities: [
        'Academic coordination and curriculum oversight',
        'Student discipline and welfare management',
        'Examination coordination and evaluation',
        'Parent-teacher communication coordination'
      ],
      contact: {
        email: 'vp@jnvlatur.edu.in',
        phone: '+91-2382-123460'
      },
      image: '/images/RekhaMaam.jpg',
    },
    {
      name: 'Mr. Patil Sir',
      position: 'Academic Coordinator',
      qualification: 'M.Sc. Mathematics, B.Ed.',
      experience: '18 years',
      specialization: 'Academic Planning & Assessment',
      responsibilities: [
        'Timetable planning and class scheduling',
        'Academic performance monitoring',
        'Teacher training and development programs',
        'Educational resource management'
      ],
      contact: {
        email: 'academic@jnvlatur.edu.in',
        phone: '+91-2382-123461'
      },
      image: '/images/PatilSir.jpg',
    },
    {
      name: 'Mr. Kale Sir',
      position: 'Administrative Officer',
      qualification: 'MBA in Education Management',
      experience: '15 years',
      specialization: 'Operations & Financial Management',
      responsibilities: [
        'Financial planning and budget management',
        'Infrastructure development and maintenance',
        'Legal compliance and documentation',
        'Vendor management and procurement'
      ],
      contact: {
        email: 'admin@jnvlatur.edu.in',
        phone: '+91-2382-123462'
      },
      image: '/images/KaleSir.jpg',
    },
    {
      name: 'Mr. Babalsure Sir',
      position: 'Hostel Warden',
      qualification: 'M.A. History, B.Ed.',
      experience: '12 years',
      specialization: 'Student Welfare & Hostel Management',
      responsibilities: [
        'Hostel administration and student accommodation',
        'Student discipline and safety in residential areas',
        'Health and hygiene maintenance in hostels',
        'Coordination with parents and guardians'
      ],
      contact: {
        email: 'hostel@jnvlatur.edu.in',
        phone: '+91-2382-123463'
      },
      image: '/images/HostelWardon.jpg',
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
            <Tabs defaultValue="leadership" className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="management-team-title">
                  Management Team
                </h2>
                <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3">
                  <TabsTrigger value="leadership">Leadership</TabsTrigger>
                  <TabsTrigger value="advisory">Advisory</TabsTrigger>
                  <TabsTrigger value="departments">Departments</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="leadership">
                <div className="grid gap-8">
                  {managementCommittee.map((member, index) => (
                    <Card key={index}>
                      <CardContent className="p-8">
                        <div className="grid lg:grid-cols-4 gap-6">
                          <div className="lg:col-span-1 text-center">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                              data-testid={`leader-image-${index}`}
                            />
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

              <TabsContent value="advisory">
                <div className="grid md:grid-cols-2 gap-6">
                  {advisoryBoard.map((advisor, index) => (
                    <Card key={index} className="h-full">
                      <CardHeader>
                        <CardTitle className="text-lg" data-testid={`advisor-name-${index}`}>
                          {advisor.name}
                        </CardTitle>
                        <Badge variant="outline">{advisor.position}</Badge>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 text-sm">
                          <div>
                            <span className="font-medium">Qualification:</span>
                            <p className="text-muted-foreground">{advisor.qualification}</p>
                          </div>
                          <div>
                            <span className="font-medium">Affiliation:</span>
                            <p className="text-muted-foreground">{advisor.affiliation}</p>
                          </div>
                          <div>
                            <span className="font-medium">Expertise:</span>
                            <p className="text-muted-foreground">{advisor.expertise}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="departments">
                <div className="grid md:grid-cols-2 gap-6">
                  {departmentHeads.map((dept, index) => (
                    <Card key={index} className="h-full">
                      <CardHeader>
                        <CardTitle className="text-lg" data-testid={`dept-name-${index}`}>
                          {dept.department}
                        </CardTitle>
                        <div className="text-sm text-muted-foreground">
                          Head: {dept.head} ({dept.qualification})
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span>Faculty Members:</span>
                            <Badge variant="secondary">{dept.faculty}</Badge>
                          </div>
                          <div>
                            <span className="font-medium text-sm">Subjects:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {dept.subjects.map((subject, subIndex) => (
                                <Badge key={subIndex} variant="outline" className="text-xs">
                                  {subject}
                                </Badge>
                              ))}
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

        {/* Organizational Structure */}
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="org-structure-title">
                Organizational Structure
              </h2>
              <p className="text-lg text-muted-foreground">
                Hierarchical structure ensuring effective governance and management
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {organizationalStructure.map((level, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Building className="w-5 h-5 text-primary" />
                        <span data-testid={`org-level-${index}`}>{level.level}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        {level.positions.map((position, posIndex) => (
                          <div key={posIndex} className="p-3 bg-muted rounded-lg text-center">
                            <span className="text-sm font-medium">{position}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
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
