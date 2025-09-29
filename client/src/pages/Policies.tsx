import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Users, GraduationCap, AlertTriangle, BookOpen, Clock, FileText, Heart } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useTranslation } from '@/lib/i18n';

export default function Policies() {
  const { t } = useTranslation();

  const disciplinePolicies = [
    {
      title: t('policies.disciplinePolicies.codeOfConduct.title'),
      description: t('policies.disciplinePolicies.codeOfConduct.description'),
      details: t('policies.disciplinePolicies.codeOfConduct.details'),
    },
    {
      title: t('policies.disciplinePolicies.attendanceRequirements.title'),
      description: t('policies.disciplinePolicies.attendanceRequirements.description'),
      details: t('policies.disciplinePolicies.attendanceRequirements.details'),
    },
    {
      title: t('policies.disciplinePolicies.uniformAndGrooming.title'),
      description: t('policies.disciplinePolicies.uniformAndGrooming.description'),
      details: t('policies.disciplinePolicies.uniformAndGrooming.details'),
    },
    {
      title: t('policies.disciplinePolicies.academicIntegrity.title'),
      description: t('policies.disciplinePolicies.academicIntegrity.description'),
      details: t('policies.disciplinePolicies.academicIntegrity.details'),
    },
  ];

  const safetyPolicies = [
    {
      title: 'Campus Safety',
      description: 'Comprehensive safety measures to ensure secure environment for all students.',
      measures: [
        '24/7 security personnel deployment',
        'CCTV surveillance in common areas',
        'Controlled access to campus premises',
        'Regular safety drills and emergency preparedness'
      ],
    },
    {
      title: 'Anti-Bullying Policy',
      description: 'Zero tolerance policy against bullying, harassment, or discrimination.',
      measures: [
        'Immediate reporting mechanism for bullying incidents',
        'Counseling support for victims and perpetrators',
        'Strict disciplinary action against bullying behavior',
        'Awareness programs on anti-bullying and respect'
      ],
    },
    {
      title: 'Health and Hygiene',
      description: 'Maintaining health standards and hygiene protocols for student wellbeing.',
      measures: [
        'Regular health checkups and medical screenings',
        'Hygienic food preparation and serving standards',
        'Clean water supply and sanitation facilities',
        'Immediate medical attention for health issues'
      ],
    },
    {
      title: 'Emergency Procedures',
      description: 'Well-defined procedures for handling various emergency situations.',
      measures: [
        'Fire safety and evacuation procedures',
        'Medical emergency response protocols',
        'Natural disaster preparedness plans',
        'Communication systems for emergency alerts'
      ],
    },
  ];

  const academicPolicies = [
    {
      title: 'Assessment Policy',
      description: 'Fair and comprehensive assessment system for student evaluation.',
      components: [
        'Continuous and Comprehensive Evaluation (CCE)',
        'Formative assessment (40%) and Summative assessment (60%)',
        'Project work and practical examinations',
        'Regular feedback and improvement suggestions'
      ],
    },
    {
      title: 'Promotion Policy',
      description: 'Clear criteria for student promotion to next academic level.',
      components: [
        'Minimum 33% marks required in each subject',
        'Overall aggregate of 40% for promotion',
        'Remedial classes for students needing additional support',
        'Re-examination opportunities for borderline cases'
      ],
    },
    {
      title: 'Homework and Assignment Policy',
      description: 'Guidelines for meaningful homework and assignment practices.',
      components: [
        'Age-appropriate homework duration and complexity',
        'Balanced distribution across different subjects',
        'Clear instructions and evaluation criteria',
        'Timely feedback and recognition of good work'
      ],
    },
    {
      title: 'Special Needs Support',
      description: 'Inclusive education policy for students with special learning needs.',
      components: [
        'Individual Education Plans (IEP) for special needs students',
        'Additional time and support for examinations',
        'Specialized teaching methods and resources',
        'Regular counseling and guidance support'
      ],
    },
  ];

  const parentPolicies = [
    {
      title: 'Parent-Teacher Communication',
      description: 'Regular communication between parents and teachers for student development.',
      guidelines: [
        'Monthly parent-teacher meetings',
        'Progress reports sent to parents regularly',
        'Open communication channels for concerns',
        'Parent involvement in school activities and events'
      ],
    },
    {
      title: 'Visiting Hours',
      description: 'Designated times for parents to visit and meet with school staff.',
      guidelines: [
        'Saturday mornings: 9:00 AM - 12:00 PM',
        'Prior appointment required for principal meeting',
        'Emergency situations: Contact school office',
        'Visitor registration and ID verification required'
      ],
    },
    {
      title: 'Fee and Payment Policy',
      description: 'Clear guidelines for fee payment and financial obligations.',
      guidelines: [
        'Quarterly fee payment schedule',
        'Late payment charges after due date',
        'Scholarship and financial assistance programs',
        'Transparent fee structure and additional charges'
      ],
    },
    {
      title: 'Student Leave Policy',
      description: 'Procedures for requesting and approving student leave.',
      guidelines: [
        'Prior written application for planned leave',
        'Medical certificate for sick leave',
        'Emergency leave approval process',
        'Make-up classes for extended absences'
      ],
    },
  ];

  const technologyPolicies = [
    {
      title: 'Digital Device Policy',
      description: 'Guidelines for use of mobile phones and electronic devices.',
      rules: [
        'Mobile phones surrendered during study hours',
        'Permitted use only during designated times',
        'No unauthorized photography or recording',
        'Responsible use of school computers and internet'
      ],
    },
    {
      title: 'Internet and Social Media Policy',
      description: 'Safe and responsible use of internet and social media platforms.',
      rules: [
        'Educational use of internet under supervision',
        'No access to inappropriate or harmful content',
        'Respectful online behavior and digital citizenship',
        'Protection of personal and school information online'
      ],
    },
  ];

  const transportPolicies = [
    {
      title: 'School Transport Rules',
      description: 'Safety and behavioral guidelines for students using school transport.',
      rules: [
        'Students must be present at pickup points on time',
        'Proper behavior and discipline during transport',
        'No standing or moving around in moving vehicles',
        'Reporting any issues to transport in-charge immediately'
      ],
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="w-4/5 mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="policies-hero-title">
              School Policies & Guidelines
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive policies ensuring a safe, supportive, and conducive learning environment for all students
            </p>
          </div>
        </section>

        {/* Policies Navigation */}
        <section className="py-16">
          <div className="w-4/5 mx-auto px-4">
            <Tabs defaultValue="discipline" className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                  <TabsTrigger value="discipline">Discipline</TabsTrigger>
                  <TabsTrigger value="safety">Safety</TabsTrigger>
                  <TabsTrigger value="academic">Academic</TabsTrigger>
                  <TabsTrigger value="general">General</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="discipline">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4" data-testid="discipline-title">
                    Discipline & Code of Conduct
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Standards of behavior and conduct expected from all students
                  </p>
                </div>

                <div className="grid gap-6">
                  {disciplinePolicies.map((policy, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-3">
                          <Users className="w-5 h-5 text-primary" />
                          <span data-testid={`discipline-policy-${index}`}>{policy.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{policy.description}</p>
                        <div className="space-y-2">
                          {policy.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                              <span className="text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="safety">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4" data-testid="safety-title">
                    Safety & Security Policies
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Comprehensive safety measures and anti-bullying policies
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {safetyPolicies.map((policy, index) => (
                    <Card key={index} className="h-full">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-3">
                          <Shield className="w-5 h-5 text-primary" />
                          <span data-testid={`safety-policy-${index}`}>{policy.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{policy.description}</p>
                        <div className="space-y-2">
                          {policy.measures.map((measure, measureIndex) => (
                            <div key={measureIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                              <span className="text-sm">{measure}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="academic">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4" data-testid="academic-policies-title">
                    Academic Policies
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Assessment, promotion, and academic integrity guidelines
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {academicPolicies.map((policy, index) => (
                    <Card key={index} className="h-full">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-3">
                          <GraduationCap className="w-5 h-5 text-primary" />
                          <span data-testid={`academic-policy-${index}`}>{policy.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{policy.description}</p>
                        <div className="space-y-2">
                          {policy.components.map((component, componentIndex) => (
                            <div key={componentIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                              <span className="text-sm">{component}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="general">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4" data-testid="general-policies-title">
                    General Policies
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Parent communication, technology use, and general guidelines
                  </p>
                </div>

                {/* Parent Policies */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-6">Parent & Communication Policies</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {parentPolicies.map((policy, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-3">
                            <Heart className="w-5 h-5 text-primary" />
                            <span data-testid={`parent-policy-${index}`}>{policy.title}</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">{policy.description}</p>
                          <div className="space-y-2">
                            {policy.guidelines.map((guideline, guidelineIndex) => (
                              <div key={guidelineIndex} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                <span className="text-sm">{guideline}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Technology Policies */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-6">Technology & Digital Policies</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {technologyPolicies.map((policy, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-3">
                            <AlertTriangle className="w-5 h-5 text-primary" />
                            <span data-testid={`tech-policy-${index}`}>{policy.title}</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">{policy.description}</p>
                          <div className="space-y-2">
                            {policy.rules.map((rule, ruleIndex) => (
                              <div key={ruleIndex} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                <span className="text-sm">{rule}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Transport Policies */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Transport Policies</h3>
                  <div className="grid gap-6">
                    {transportPolicies.map((policy, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-3">
                            <Clock className="w-5 h-5 text-primary" />
                            <span data-testid={`transport-policy-${index}`}>{policy.title}</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">{policy.description}</p>
                          <div className="space-y-2">
                            {policy.rules.map((rule, ruleIndex) => (
                              <div key={ruleIndex} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                <span className="text-sm">{rule}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Policy Implementation */}
        <section className="py-16 bg-muted">
          <div className="w-4/5 mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="implementation-title">
                Policy Implementation & Enforcement
              </h2>
              <p className="text-lg text-muted-foreground">
                How policies are implemented and monitored for effective governance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-3">Policy Documentation</h3>
                  <p className="text-muted-foreground text-sm">
                    All policies are documented, reviewed annually, and updated based on feedback and changing requirements.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-3">Staff Training</h3>
                  <p className="text-muted-foreground text-sm">
                    Regular training sessions ensure all staff members understand and implement policies consistently.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-3">Student Orientation</h3>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive orientation programs help students understand and follow all school policies effectively.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact for Policies */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="w-4/5 mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="policy-contact-title">
              Questions About Our Policies?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              For clarifications or detailed information about any of our policies, please contact the school administration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" data-testid="contact-admin-button">
                Contact Administration
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors" data-testid="download-handbook-button">
                Download Student Handbook
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
