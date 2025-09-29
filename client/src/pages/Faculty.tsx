import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GraduationCap, Award, Users, BookOpen, Clock, Star } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useTranslation } from '@/lib/i18n';
import { facultyMembers } from '@/data/content';

export default function Faculty() {
  const { t } = useTranslation();

  const extendedFaculty = [
    ...facultyMembers,
    {
      id: '6',
      name: 'Dr. Priya Sharma',
      designation: t('faculty.designations.headOfScienceDepartment'),
      subject: t('faculty.subjects.physics'),
      qualification: t('faculty.qualifications.phdPhysics'),
      experience: 15,
    },
    {
      id: '7',
      name: 'Mr. Rahul Deshmukh',
      designation: t('faculty.designations.seniorTeacher'),
      subject: t('faculty.subjects.chemistry'),
      qualification: t('faculty.qualifications.mscChemistry'),
      experience: 12,
    },
    {
      id: '8',
      name: 'Mrs. Kavita Jadhav',
      designation: t('faculty.designations.seniorTeacher'),
      subject: t('faculty.subjects.biology'),
      qualification: t('faculty.qualifications.mscBiologyBed'),
      experience: 14,
    },
    {
      id: '9',
      name: 'Mrs. Shweta Patil',
      designation: t('faculty.designations.englishTeacher'),
      subject: t('faculty.subjects.englishLiterature'),
      qualification: t('faculty.qualifications.maEnglishBed'),
      experience: 10,
    },
    {
      id: '10',
      name: 'Mr. Ganesh Rao',
      designation: t('faculty.designations.hindiTeacher'),
      subject: t('faculty.subjects.hindiLiterature'),
      qualification: t('faculty.qualifications.maHindi'),
      experience: 13,
    },
    {
      id: '11',
      name: 'Mrs. Manjusha Bhosale',
      designation: t('faculty.designations.marathiTeacher'),
      subject: t('faculty.subjects.marathiLiterature'),
      qualification: t('faculty.qualifications.maMarathi'),
      experience: 11,
    },
    {
      id: '12',
      name: 'Mrs. Rupa Kale',
      designation: t('faculty.designations.computerScienceTeacher'),
      subject: t('faculty.subjects.computerScience'),
      qualification: t('faculty.qualifications.mcaBtech'),
      experience: 8,
    },
  ];

  const departments = [
    {
      name: 'Science Department',
      faculty: extendedFaculty.filter(f => ['Physics', 'Chemistry', 'Biology'].includes(f.subject)),
      description: 'Dedicated to fostering scientific inquiry and practical learning',
    },
    {
      name: 'Mathematics Department',
      faculty: extendedFaculty.filter(f => f.subject === 'Mathematics'),
      description: 'Building strong analytical and problem-solving skills',
    },
    {
      name: 'Languages Department',
      faculty: extendedFaculty.filter(f => ['English Literature', 'Hindi Literature', 'Marathi Literature'].includes(f.subject)),
      description: 'Promoting multilingual communication and literary appreciation',
    },
    {
      name: 'Social Sciences Department',
      faculty: extendedFaculty.filter(f => f.subject === 'History' || f.subject === 'History & Geography'),
      description: 'Understanding society, culture, and the world around us',
    },
    {
      name: 'Computer Science Department',
      faculty: extendedFaculty.filter(f => f.subject === 'Computer Science'),
      description: 'Preparing students for the digital age',
    },
    {
      name: 'Administration',
      faculty: extendedFaculty.filter(f => ['Education Administration', 'Educational Psychology', 'Education Management'].includes(f.subject)),
      description: 'Leading the institution towards excellence',
    },
  ];

  const trainingPrograms = [
    {
      program: 'SSC Board Teacher Training',
      description: 'Regular training programs by SSC Board for curriculum updates and teaching methodologies',
      frequency: 'Bi-annual',
    },
    {
      program: 'ICT Integration Workshop',
      description: 'Training on integrating Information and Communication Technology in classroom teaching',
      frequency: 'Annual',
    },
    {
      program: 'Student Counseling Certification',
      description: 'Professional development in student guidance and counseling techniques',
      frequency: 'Annual',
    },
    {
      program: 'Subject Matter Expertise',
      description: 'Advanced subject-specific workshops and seminars by domain experts',
      frequency: 'Quarterly',
    },
  ];

  const achievements = [
    'Best Teacher Award - State Level (Dr. Priya Sharma, 2023)',
    'Excellence in Science Teaching - District Level (Mr. Rahul Deshmukh, 2023)',
    'Innovative Teaching Methods Recognition (Mrs. Shweta Patil, 2022)',
    'Mathematics Olympiad Mentor Award (Mr. Suresh Kumar, 2022)',
    'Research Publication in Education Journal (Dr. Rajesh Sharma, 2023)',
  ];

  const facultyStats = [
    { label: 'Total Faculty', value: '45+', icon: Users },
    { label: 'Ph.D. Holders', value: '8', icon: GraduationCap },
    { label: 'Average Experience', value: '12 Years', icon: Clock },
    { label: 'Master Trainers', value: '15', icon: Award },
  ];

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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="faculty-hero-title">
              Our Distinguished Faculty
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced educators dedicated to nurturing young minds and fostering academic excellence through innovative teaching methods
            </p>
          </div>
        </section>

        {/* Faculty Statistics */}
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {facultyStats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2" data-testid={`faculty-stat-${index}`}>
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Departments */}
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="departments-title">
                Faculty by Departments
              </h2>
              <p className="text-lg text-muted-foreground">
                Meet our expert educators organized by their areas of specialization
              </p>
            </div>

            <Tabs defaultValue="science" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
                <TabsTrigger value="science">Science</TabsTrigger>
                <TabsTrigger value="mathematics">Math</TabsTrigger>
                <TabsTrigger value="languages">Languages</TabsTrigger>
                <TabsTrigger value="social">Social Sci.</TabsTrigger>
                <TabsTrigger value="computer">Computer</TabsTrigger>
                <TabsTrigger value="admin">Admin</TabsTrigger>
              </TabsList>

              {departments.map((dept, deptIndex) => (
                <TabsContent key={deptIndex} value={dept.name.toLowerCase().split(' ')[0]} className="mt-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-2" data-testid={`dept-name-${deptIndex}`}>
                      {dept.name}
                    </h3>
                    <p className="text-muted-foreground">{dept.description}</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {dept.faculty.map((faculty, index) => (
                      <Card key={faculty.id} className="h-full">
                        <CardContent className="p-6 text-center">
                          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <GraduationCap className="w-10 h-10 text-primary" />
                          </div>
                          <h4 className="font-semibold text-lg mb-1" data-testid={`faculty-name-${faculty.id}`}>
                            {faculty.name}
                          </h4>
                          <Badge variant="outline" className="mb-2">{faculty.designation}</Badge>
                          <p className="text-primary font-medium mb-2">{faculty.subject}</p>
                          <p className="text-muted-foreground text-sm mb-2">{faculty.qualification}</p>
                          <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            <span>{faculty.experience} years experience</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Training & Development */}
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="training-title">
                  Professional Development
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our faculty members regularly participate in training programs and workshops to stay updated 
                  with the latest educational methodologies and subject matter expertise.
                </p>
                <div className="space-y-6">
                  {trainingPrograms.map((program, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-semibold" data-testid={`training-program-${index}`}>
                            {program.program}
                          </h4>
                          <Badge variant="secondary">{program.frequency}</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">{program.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src="/images/Teachers.jpg"
                  alt="Faculty training and professional development session"
                  className="rounded-xl shadow-lg w-full h-auto"
                  data-testid="training-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Faculty Achievements */}
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="achievements-title">
                Faculty Achievements
              </h2>
              <p className="text-lg text-muted-foreground">
                Recognition and awards received by our dedicated faculty members
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <Star className="w-5 h-5 text-primary" />
                    <span>Recent Recognitions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 border border-border rounded-lg">
                        <Award className="w-5 h-5 text-primary mt-0.5" />
                        <span data-testid={`achievement-${index}`}>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Student Guidance & Counseling */}
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/images/EveningPrayer.jpg"
                  alt="Evening prayer session with students and teachers"
                  className="rounded-xl shadow-lg w-full h-auto"
                  data-testid="counseling-image"
                />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="guidance-title">
                  Student Guidance & Counseling
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our faculty members are trained in student counseling and provide comprehensive 
                  guidance for academic, personal, and career development.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                      <BookOpen className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Academic Counseling</h4>
                      <p className="text-muted-foreground text-sm">
                        Personalized guidance for subject selection, study methods, and academic improvement
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                      <Users className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Personal Development</h4>
                      <p className="text-muted-foreground text-sm">
                        Support for emotional well-being, social skills, and character building
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                      <GraduationCap className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Career Guidance</h4>
                      <p className="text-muted-foreground text-sm">
                        Direction for higher education choices and career path planning
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching Philosophy */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="w-4/5 mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8" data-testid="philosophy-title">
              Our Teaching Philosophy
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold">Student-Centered Learning</h3>
                <p className="opacity-90">
                  Adapting teaching methods to individual learning styles and needs
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold">Collaborative Approach</h3>
                <p className="opacity-90">
                  Encouraging teamwork, peer learning, and interactive classroom environments
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold">Excellence in Education</h3>
                <p className="opacity-90">
                  Maintaining high academic standards while fostering creativity and innovation
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
