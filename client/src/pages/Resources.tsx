import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, FileText, Calendar, BookOpen, Users, Link, Clock, Globe } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useTranslation } from '@/lib/i18n';

export default function Resources() {
  const { t } = useTranslation();

  const downloads = [
    {
      title: 'School Prospectus 2024-25',
      description: 'Comprehensive guide about JNV Latur including admission procedures, academics, and facilities.',
      fileType: 'PDF',
      fileSize: '2.5 MB',
      category: 'Admissions',
    },
    {
      title: 'Academic Calendar 2024-25',
      description: 'Complete academic year schedule including holidays, examinations, and important events.',
      fileType: 'PDF',
      fileSize: '1.2 MB',
      category: 'Academic',
    },
    {
      title: 'Fee Structure',
      description: 'Detailed breakdown of all fees including hostel, mess, and other charges.',
      fileType: 'PDF',
      fileSize: '800 KB',
      category: 'Admissions',
    },
    {
      title: 'Admission Application Form',
      description: 'Printable application form for Class VI and lateral entry admissions.',
      fileType: 'PDF',
      fileSize: '1.1 MB',
      category: 'Admissions',
    },
    {
      title: 'Syllabus - Class VI to VIII',
      description: 'Comprehensive syllabus for foundation level classes with subject-wise breakdown.',
      fileType: 'PDF',
      fileSize: '3.2 MB',
      category: 'Academic',
    },
    {
      title: 'Syllabus - Class V to X',
      description: 'Detailed curriculum for primary to secondary classes.',
      fileType: 'PDF',
      fileSize: '4.1 MB',
      category: 'Academic',
    },
    {
      title: 'Transport Routes',
      description: 'Bus routes and timings for day scholars with pickup points.',
      fileType: 'PDF',
      fileSize: '1.5 MB',
      category: 'General',
    },
    {
      title: 'Holiday List 2024-25',
      description: 'Complete list of holidays and vacation periods for the academic year.',
      fileType: 'PDF',
      fileSize: '600 KB',
      category: 'General',
    },
  ];

  const academicCalendar = [
    {
      month: 'April 2024',
      events: [
        { date: '1st', event: 'New Academic Session Begins' },
        { date: '15th', event: 'Class VI Admission Test' },
        { date: '22nd', event: 'Earth Day Celebration' },
      ],
    },
    {
      month: 'May 2024',
      events: [
        { date: '15th', event: 'Annual Sports Meet Begins' },
        { date: '20th', event: 'Parent-Teacher Meeting' },
        { date: '25th-31st', event: 'Summer Vacation' },
      ],
    },
    {
      month: 'June 2024',
      events: [
        { date: '1st-15th', event: 'Summer Vacation Continues' },
        { date: '16th', event: 'School Reopens' },
        { date: '21st', event: 'International Yoga Day' },
      ],
    },
    {
      month: 'July 2024',
      events: [
        { date: '15th', event: 'First Term Examination Begins' },
        { date: '26th', event: 'Kargil Vijay Diwas' },
        { date: '30th', event: 'Monsoon Festival' },
      ],
    },
  ];

  const quickLinks = [
    {
      title: 'SSC Board Official Website',
      description: 'Maharashtra State Board of Secondary and Higher Secondary Education official portal',
      url: 'https://mahahsscboard.in',
      category: 'Official',
    },
    {
      title: 'Navodaya Vidyalaya Samiti',
      description: 'Official website of NVS for latest updates and circulars',
      url: 'https://navodaya.gov.in',
      category: 'Official',
    },
    {
      title: 'NCERT Textbooks',
      description: 'Download NCERT textbooks and educational resources',
      url: 'https://ncert.nic.in',
      category: 'Educational',
    },
    {
      title: 'Online Learning Portal',
      description: 'Access digital learning resources and video lectures',
      url: '#',
      category: 'Educational',
    },
    {
      title: 'Student Portal',
      description: 'Login to access marks, attendance, and notices',
      url: '#',
      category: 'Student',
    },
    {
      title: 'Parent Portal',
      description: 'Parent login for fee payment and communication',
      url: '#',
      category: 'Parent',
    },
  ];

  const onlineResources = [
    {
      title: 'Digital Library',
      description: 'Access to thousands of e-books, journals, and research papers',
      features: ['E-books', 'Academic Journals', 'Reference Materials', 'Research Papers'],
      access: 'Student Login Required',
    },
    {
      title: 'Virtual Laboratories',
      description: 'Interactive virtual labs for science experiments and simulations',
      features: ['Physics Simulations', 'Chemistry Experiments', 'Biology Models', 'Math Tools'],
      access: 'Class VIII-X Students',
    },
    {
      title: 'Online Test Platform',
      description: 'Practice tests, mock exams, and assessment tools',
      features: ['Practice Tests', 'Mock Exams', 'Performance Analytics', 'Subject-wise Tests'],
      access: 'All Students',
    },
    {
      title: 'Career Guidance Portal',
      description: 'Resources for career planning and higher education guidance',
      features: ['Career Assessments', 'College Information', 'Scholarship Details', 'Counseling'],
      access: 'Class IX-X Students',
    },
  ];

  const examResources = [
    {
      title: 'Examination Guidelines',
      description: 'Rules and regulations for internal and board examinations',
      type: 'Guidelines',
    },
    {
      title: 'Sample Question Papers',
      description: 'Previous year question papers for all subjects and classes',
      type: 'Question Papers',
    },
    {
      title: 'Marking Scheme',
      description: 'Detailed marking scheme for better exam preparation',
      type: 'Marking Scheme',
    },
    {
      title: 'Result Analysis',
      description: 'Subject-wise performance analysis and improvement suggestions',
      type: 'Analysis',
    },
  ];

  const getFileIcon = (fileType: string) => {
    switch (fileType.toLowerCase()) {
      case 'pdf':
        return FileText;
      default:
        return FileText;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Admissions':
        return 'bg-blue-100 text-blue-800';
      case 'Academic':
        return 'bg-green-100 text-green-800';
      case 'General':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="w-4/5 mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="resources-hero-title">
              Resources & Downloads
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access important documents, academic resources, and useful links for students, parents, and faculty
            </p>
          </div>
        </section>

        {/* Resources Navigation */}
        <section className="py-16">
          <div className="w-4/5 mx-auto px-4">
            <Tabs defaultValue="downloads" className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                  <TabsTrigger value="downloads">Downloads</TabsTrigger>
                  <TabsTrigger value="calendar">Calendar</TabsTrigger>
                  <TabsTrigger value="online">Online Resources</TabsTrigger>
                  <TabsTrigger value="links">Quick Links</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="downloads">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4" data-testid="downloads-title">
                    Downloads
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Important documents and forms for students and parents
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {downloads.map((download, index) => (
                    <Card key={index} className="h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            {(() => {
                              const Icon = getFileIcon(download.fileType);
                              return <Icon className="w-6 h-6 text-primary" />;
                            })()}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="font-semibold text-lg" data-testid={`download-title-${index}`}>
                                {download.title}
                              </h3>
                              <Badge className={`ml-2 ${getCategoryColor(download.category)}`}>
                                {download.category}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground text-sm mb-4">
                              {download.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                                <span>{download.fileType}</span>
                                <span>{download.fileSize}</span>
                              </div>
                              <Button size="sm" data-testid={`download-btn-${index}`}>
                                <Download className="w-4 h-4 mr-1" />
                                Download
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="calendar">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4" data-testid="calendar-title">
                    Academic Calendar
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Important dates and events for the academic year 2024-25
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {academicCalendar.map((month, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Calendar className="w-5 h-5 text-primary" />
                          <span data-testid={`calendar-month-${index}`}>{month.month}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {month.events.map((event, eventIndex) => (
                            <div key={eventIndex} className="flex items-start space-x-3">
                              <Badge variant="outline" className="text-xs">
                                {event.date}
                              </Badge>
                              <span className="text-sm" data-testid={`event-${index}-${eventIndex}`}>
                                {event.event}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <Button size="lg" data-testid="download-full-calendar">
                    <Download className="w-4 h-4 mr-2" />
                    Download Full Calendar
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="online">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4" data-testid="online-resources-title">
                    Online Resources
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Digital learning resources and online platforms
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {onlineResources.map((resource, index) => (
                    <Card key={index} className="h-full">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Globe className="w-5 h-5 text-primary" />
                          <span data-testid={`online-resource-${index}`}>{resource.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">{resource.description}</p>
                        <div>
                          <h4 className="font-semibold mb-2">Features:</h4>
                          <div className="flex flex-wrap gap-2">
                            {resource.features.map((feature, featureIndex) => (
                              <Badge key={featureIndex} variant="secondary">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            Access: {resource.access}
                          </span>
                          <Button variant="outline" size="sm" data-testid={`access-${index}`}>
                            Access Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Examination Resources */}
                <div className="mt-12">
                  <h3 className="text-2xl font-semibold mb-6 text-center">Examination Resources</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {examResources.map((resource, index) => (
                      <Card key={index}>
                        <CardContent className="p-6 text-center">
                          <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
                          <h4 className="font-semibold mb-2" data-testid={`exam-resource-${index}`}>
                            {resource.title}
                          </h4>
                          <p className="text-muted-foreground text-sm mb-3">{resource.description}</p>
                          <Badge variant="outline">{resource.type}</Badge>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="links">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4" data-testid="quick-links-title">
                    Quick Links
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Useful external links and portals for students and parents
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {quickLinks.map((link, index) => (
                    <Card key={index} className="h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Link className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-2" data-testid={`quick-link-${index}`}>
                              {link.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-3">
                              {link.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <Badge variant="outline">{link.category}</Badge>
                              <Button variant="link" className="p-0 h-auto" data-testid={`visit-link-${index}`}>
                                Visit →
                              </Button>
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

        {/* Help Section */}
        <section className="py-16 bg-muted">
          <div className="w-4/5 mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="help-section-title">
                Need Help?
              </h2>
              <p className="text-lg text-muted-foreground">
                Contact us for assistance with downloads or accessing online resources
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">IT Support</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Technical assistance for online resources and portals
                  </p>
                  <Button variant="outline" size="sm" data-testid="contact-it-support">
                    Contact IT Support
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Academic Office</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Help with academic documents and examination resources
                  </p>
                  <Button variant="outline" size="sm" data-testid="contact-academic-office">
                    Contact Academic Office
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Admission Office</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Assistance with admission forms and fee-related documents
                  </p>
                  <Button variant="outline" size="sm" data-testid="contact-admission-office">
                    Contact Admission Office
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Resource Statistics */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="w-4/5 mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2" data-testid="total-downloads">50+</div>
                <div className="text-lg opacity-90">Documents Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" data-testid="online-resources">15+</div>
                <div className="text-lg opacity-90">Online Resources</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" data-testid="quick-links">25+</div>
                <div className="text-lg opacity-90">Quick Links</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" data-testid="monthly-downloads">1000+</div>
                <div className="text-lg opacity-90">Monthly Downloads</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
