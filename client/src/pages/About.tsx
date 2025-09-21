import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Target, BookOpen, Heart, Globe } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useTranslation } from '@/lib/i18n';
import { schoolInfo } from '@/data/content';

export default function About() {
  const { t } = useTranslation();

  const values = [
    {
      icon: BookOpen,
      title: 'Academic Excellence',
      description: 'Commitment to providing the highest quality education and fostering intellectual growth.',
    },
    {
      icon: Heart,
      title: 'Holistic Development',
      description: 'Nurturing physical, emotional, social, and spiritual development alongside academics.',
    },
    {
      icon: Globe,
      title: 'Cultural Integration',
      description: 'Celebrating diversity and promoting cultural understanding and global citizenship.',
    },
    {
      icon: Target,
      title: 'Character Building',
      description: 'Instilling values of integrity, discipline, and social responsibility.',
    },
  ];

  const milestones = [
    {
      year: '1986',
      event: 'School Establishment',
      description: 'JNV Latur was established as part of the Navodaya Vidyalaya system.',
    },
    {
      year: '1990',
      event: 'First Batch Graduation',
      description: 'The first batch of students successfully completed their education.',
    },
    {
      year: '2000',
      event: 'Infrastructure Expansion',
      description: 'Major expansion of campus facilities including new laboratories and hostels.',
    },
    {
      year: '2010',
      event: 'Digital Learning Initiative',
      description: 'Introduction of smart classrooms and digital learning resources.',
    },
    {
      year: '2020',
      event: 'Excellence Recognition',
      description: 'Awarded "Best Navodaya Vidyalaya" at state level for outstanding performance.',
    },
  ];

  const stats = [
    { value: '38+', label: 'Years of Excellence', icon: Award },
    { value: '5000+', label: 'Alumni', icon: Users },
    { value: '580+', label: 'Current Students', icon: BookOpen },
    { value: '98.5%', label: 'Success Rate', icon: Target },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="about-hero-title">
                About {t('school.name')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Dedicated to nurturing young minds and building future leaders through quality education and holistic development.
              </p>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Established {schoolInfo.established} • {schoolInfo.affiliation} Affiliated
              </Badge>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Students in classroom learning environment"
                  className="rounded-xl shadow-lg w-full h-auto"
                  data-testid="mission-image"
                />
              </div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4" data-testid="mission-title">Our Mission</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t('school.mission')}
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4" data-testid="vision-title">Our Vision</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t('school.vision')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="values-title">Our Core Values</h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide our educational philosophy and daily practices
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3" data-testid={`value-title-${index}`}>
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="stats-title">Our Impact</h2>
              <p className="text-lg text-muted-foreground">
                Numbers that reflect our commitment to educational excellence
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2" data-testid={`stat-value-${index}`}>
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="history-title">Our Journey</h2>
              <p className="text-lg text-muted-foreground">
                Key milestones in our journey of educational excellence
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {milestone.year}
                      </div>
                    </div>
                    <Card className="flex-1">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-2" data-testid={`milestone-title-${index}`}>
                          {milestone.event}
                        </h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recognition Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8" data-testid="recognition-title">
                Recognition & Affiliations
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2">CBSE Affiliation</h3>
                    <p className="text-muted-foreground text-sm">
                      Affiliated with Central Board of Secondary Education
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Excellence Award</h3>
                    <p className="text-muted-foreground text-sm">
                      Best Navodaya Vidyalaya at State Level 2023
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="font-semibold mb-2">ISO Certification</h3>
                    <p className="text-muted-foreground text-sm">
                      Quality Management System Certified
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
