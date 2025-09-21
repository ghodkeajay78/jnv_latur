import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, Calendar, FileText, DollarSign, Clock, Users, GraduationCap, Phone, Mail } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useTranslation } from '@/lib/i18n';
import { contactInfo } from '@/data/content';

export default function Admissions() {
  const { t } = useTranslation();

  const admissionProcess = [
    {
      step: 1,
      title: 'Online Registration',
      description: 'Complete the online application form at the official JNV portal. Registration opens on January 15, 2024.',
      duration: 'Jan 15 - Mar 15, 2024',
    },
    {
      step: 2,
      title: 'Entrance Test',
      description: 'Jawahar Navodaya Vidyalaya Selection Test (JNVST) for Class VI admission. Test date: April 20, 2024.',
      duration: 'April 20, 2024',
    },
    {
      step: 3,
      title: 'Merit List',
      description: 'Merit list will be published based on test performance. Results announced by May 30, 2024.',
      duration: 'May 30, 2024',
    },
    {
      step: 4,
      title: 'Document Verification',
      description: 'Selected candidates must complete document verification and fee payment by June 15, 2024.',
      duration: 'June 15, 2024',
    },
  ];

  const requiredDocuments = [
    'Birth Certificate',
    'Class V Mark Sheet',
    'Transfer Certificate',
    'Caste Certificate (if applicable)',
    'Income Certificate',
    'Domicile Certificate',
    'Passport Size Photos',
    'Medical Certificate',
  ];

  const eligibilityCriteria = [
    {
      class: 'Class VI',
      age: '9-13 years as on 30th April',
      qualification: 'Passed Class V from recognized school',
      requirements: ['Rural area domicile', 'Family income below specified limit'],
    },
    {
      class: 'Class IX',
      age: '13-16 years as on 30th April',
      qualification: 'Passed Class VIII from Navodaya Vidyalaya',
      requirements: ['Transfer from other JNV', 'Lateral entry test'],
    },
    {
      class: 'Class XI',
      age: '15-18 years as on 30th April',
      qualification: 'Passed Class X with minimum 55% marks',
      requirements: ['Science/Commerce/Arts streams', 'Merit-based selection'],
    },
  ];

  const feeStructure = [
    { category: 'Admission Fee', amount: '₹2,000', frequency: 'One-time' },
    { category: 'Annual Tuition', amount: 'Free*', frequency: 'Yearly' },
    { category: 'Hostel Fee', amount: '₹1,500', frequency: 'Monthly' },
    { category: 'Mess Fee', amount: '₹2,200', frequency: 'Monthly' },
    { category: 'Books & Uniform', amount: '₹5,000', frequency: 'Yearly' },
    { category: 'Miscellaneous', amount: '₹1,000', frequency: 'Yearly' },
  ];

  const importantDates = [
    { event: 'Registration Opens', date: 'January 15, 2024' },
    { event: 'Registration Closes', date: 'March 15, 2024' },
    { event: 'Admit Card Download', date: 'April 5, 2024' },
    { event: 'Entrance Test', date: 'April 20, 2024' },
    { event: 'Results Declaration', date: 'May 30, 2024' },
    { event: 'Document Verification', date: 'June 1-15, 2024' },
    { event: 'Admission Confirmation', date: 'June 20, 2024' },
    { event: 'Academic Session Begins', date: 'July 1, 2024' },
  ];

  const scholarships = [
    {
      name: 'Merit Scholarship',
      criteria: 'Top 10% students in entrance test',
      amount: '100% fee waiver',
    },
    {
      name: 'Need-based Support',
      criteria: 'Family income below poverty line',
      amount: 'Hostel and mess fee waiver',
    },
    {
      name: 'Sports Scholarship',
      criteria: 'District/State level sports achievements',
      amount: '50% hostel fee waiver',
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="admissions-hero-title">
              Admissions 2024-25
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join our prestigious institution and embark on a journey of excellence in education and holistic development
            </p>
            <Badge variant="default" className="text-lg px-4 py-2 mb-4">
              Now Accepting Applications
            </Badge>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Button size="lg" data-testid="apply-online-button">
                Apply Online
              </Button>
              <Button size="lg" variant="outline" data-testid="download-brochure-button">
                Download Brochure
              </Button>
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="process-title">
                Admission Process
              </h2>
              <p className="text-lg text-muted-foreground">
                Step-by-step guide to secure your admission at JNV Latur
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {admissionProcess.map((process, index) => (
                  <Card key={index} className="relative">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {process.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold mb-3" data-testid={`process-title-${index}`}>
                            {process.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 text-lg">
                            {process.description}
                          </p>
                          <Badge variant="outline" className="text-sm">
                            <Clock className="w-3 h-3 mr-1" />
                            {process.duration}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility & Documents */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="eligibility" className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="requirements-title">
                  Eligibility & Requirements
                </h2>
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                  <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="eligibility" className="mt-8">
                <div className="grid gap-6">
                  {eligibilityCriteria.map((criteria, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-xl flex items-center space-x-2">
                          <GraduationCap className="w-5 h-5 text-primary" />
                          <span data-testid={`eligibility-class-${index}`}>{criteria.class} Admission</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-3 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2">Age Limit</h4>
                            <p className="text-muted-foreground">{criteria.age}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Qualification</h4>
                            <p className="text-muted-foreground">{criteria.qualification}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Requirements</h4>
                            <ul className="space-y-1">
                              {criteria.requirements.map((req, reqIndex) => (
                                <li key={reqIndex} className="text-muted-foreground text-sm flex items-center space-x-2">
                                  <CheckCircle className="w-3 h-3 text-primary" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="documents" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center space-x-2">
                      <FileText className="w-5 h-5 text-primary" />
                      <span>Required Documents</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      Please ensure all documents are in original and carry one set of photocopies for verification.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {requiredDocuments.map((doc, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span className="text-sm" data-testid={`document-${index}`}>{doc}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                      <p className="text-amber-800 text-sm">
                        <strong>Note:</strong> All documents must be attested by a gazetted officer. 
                        Incomplete or non-attested documents will lead to rejection of application.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Fee Structure & Dates */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Fee Structure */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center space-x-2">
                      <DollarSign className="w-6 h-6 text-primary" />
                      <span data-testid="fee-structure-title">Fee Structure</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {feeStructure.map((fee, index) => (
                        <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-b-0">
                          <div>
                            <span className="font-medium" data-testid={`fee-category-${index}`}>{fee.category}</span>
                            <span className="text-muted-foreground text-sm ml-2">({fee.frequency})</span>
                          </div>
                          <span className="font-semibold text-lg" data-testid={`fee-amount-${index}`}>{fee.amount}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-blue-800 text-sm">
                        *Tuition fee is completely free for students from families with annual income below ₹2,50,000
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Scholarships */}
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle className="text-2xl">Scholarships & Financial Aid</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {scholarships.map((scholarship, index) => (
                        <div key={index} className="p-4 border border-border rounded-lg">
                          <h4 className="font-semibold mb-2" data-testid={`scholarship-name-${index}`}>
                            {scholarship.name}
                          </h4>
                          <p className="text-muted-foreground text-sm mb-2">{scholarship.criteria}</p>
                          <Badge variant="secondary">{scholarship.amount}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Important Dates & Contact */}
              <div className="space-y-8">
                <Card className="bg-primary text-primary-foreground">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center space-x-2">
                      <Calendar className="w-5 h-5" />
                      <span>Important Dates</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {importantDates.map((dateItem, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="opacity-90" data-testid={`date-event-${index}`}>{dateItem.event}:</span>
                          <span className="font-medium">{dateItem.date}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-accent text-accent-foreground">
                  <CardHeader>
                    <CardTitle className="text-xl">Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4 opacity-90">
                      Contact our admission office for any queries or assistance.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span data-testid="admission-phone">{contactInfo.admissions}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span data-testid="admission-email">{contactInfo.email.admissions}</span>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary">
                          Office Hours: {contactInfo.hours.weekdays}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Join Our Community</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Become part of the JNV Latur family and experience excellence in education.
                    </p>
                    <Button className="w-full" data-testid="join-community-button">
                      Start Your Journey
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="faq-title">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Get answers to commonly asked questions about admissions
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">What is the selection criteria for JNV admission?</h3>
                  <p className="text-muted-foreground text-sm">
                    Selection is based on the Jawahar Navodaya Vidyalaya Selection Test (JNVST) performance, 
                    followed by document verification and medical examination.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Is there any reservation policy?</h3>
                  <p className="text-muted-foreground text-sm">
                    Yes, 75% seats are reserved for rural candidates and 25% for urban candidates. 
                    There are also reservations as per government norms for SC/ST/OBC categories.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">What is the medium of instruction?</h3>
                  <p className="text-muted-foreground text-sm">
                    The school follows a trilingual approach with English as the primary medium, 
                    and Hindi and Marathi as second and third languages respectively.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Are hostel facilities mandatory?</h3>
                  <p className="text-muted-foreground text-sm">
                    Yes, JNV is a residential school and all students are required to stay in the hostel 
                    as part of the holistic educational experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
