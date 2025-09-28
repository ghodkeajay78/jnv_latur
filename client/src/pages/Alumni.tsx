import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GraduationCap, Users, Star, MapPin, Briefcase, Award, Mail, Phone, Calendar } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useTranslation } from '@/lib/i18n';

export default function Alumni() {
  const { t } = useTranslation();

  const notableAlumni = [
    {
      id: '1',
      name: 'Dr. Prashant Sharma',
      batch: '1995',
      profession: 'Medical Doctor & Researcher',
      achievement: 'Leading cardiologist at AIIMS, Delhi',
      currentLocation: 'New Delhi',
      image: '/images/Result.jpg',
    },
    {
      id: '2',
      name: 'Ms. Sneha Patil',
      batch: '2001',
      profession: 'IAS Officer',
      achievement: 'District Collector, Pune',
      currentLocation: 'Pune, Maharashtra',
      image: '/images/photo-1594736797933-d0200ba2715b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    },
    {
      id: '3',
      name: 'Mr. Rahul Deshmukh',
      batch: '1998',
      profession: 'Software Engineer',
      achievement: 'Senior Director at Microsoft, USA',
      currentLocation: 'Seattle, USA',
      image: '/images/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    },
    {
      id: '4',
      name: 'Dr. Kavita Jadhav',
      batch: '2000',
      profession: 'Research Scientist',
      achievement: 'NASA Space Research Program',
      currentLocation: 'Houston, USA',
      image: '/images/photo-1559548331-f9cb98001426?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    },
    {
      id: '5',
      name: 'Mr. Anil Kumar',
      batch: '1997',
      profession: 'Entrepreneur',
      achievement: 'Founder & CEO of Tech Startup',
      currentLocation: 'Bangalore, Karnataka',
      image: '/images/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    },
    {
      id: '6',
      name: 'Ms. Pooja Kale',
      batch: '2002',
      profession: 'Journalist',
      achievement: 'Senior Editor at National News Channel',
      currentLocation: 'Mumbai, Maharashtra',
      image: '/images/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    },
  ];

  const successStories = [
    {
      title: 'From Rural Background to Global Success',
      alumnus: 'Dr. Prashant Sharma (Batch 1995)',
      story: 'Coming from a small village in Latur district, Dr. Sharma overcame financial challenges to become one of India\'s leading cardiologists. His journey from JNV Latur to AIIMS Delhi inspires many current students.',
    },
    {
      title: 'Breaking Barriers in Civil Services',
      alumnus: 'Ms. Sneha Patil (Batch 2001)',
      story: 'As the first woman from her village to clear UPSC, Ms. Patil credits JNV Latur for providing her with the foundation and confidence to pursue her dreams in public service.',
    },
    {
      title: 'Innovation in Technology',
      alumnus: 'Mr. Rahul Deshmukh (Batch 1998)',
      story: 'Leading cutting-edge AI research at Microsoft, Mr. Deshmukh attributes his analytical thinking and problem-solving skills to the quality education received at JNV Latur.',
    },
  ];

  const alumniStats = [
    { label: 'Total Alumni', value: '2500+', icon: Users },
    { label: 'Countries Worldwide', value: '15+', icon: MapPin },
    { label: 'Professional Fields', value: '50+', icon: Briefcase },
    { label: 'Notable Achievers', value: '100+', icon: Award },
  ];

  const alumniAssociation = {
    president: {
      name: 'Mr. Suresh Patil',
      batch: '1992',
      profession: 'Retired IPS Officer',
      contact: 'president@jnvlaturalumni.org',
    },
    secretary: {
      name: 'Ms. Priya Sharma',
      batch: '1999',
      profession: 'Chartered Accountant',
      contact: 'secretary@jnvlaturalumni.org',
    },
    treasurer: {
      name: 'Mr. Ganesh Rao',
      batch: '1996',
      profession: 'Bank Manager',
      contact: 'treasurer@jnvlaturalumni.org',
    },
  };

  const upcomingEvents = [
    {
      title: 'Annual Alumni Meet 2024',
      date: '2024-03-15',
      venue: 'JNV Latur Campus',
      description: 'Annual gathering of alumni with cultural programs and networking',
    },
    {
      title: 'Career Guidance Workshop',
      date: '2024-02-20',
      venue: 'School Auditorium',
      description: 'Alumni sharing career insights with current students',
    },
    {
      title: 'Alumni Sports Tournament',
      date: '2024-04-10',
      venue: 'School Sports Ground',
      description: 'Friendly sports competition among alumni batches',
    },
  ];

  const achievements = [
    'Over 50 alumni serving in various government positions',
    '25+ alumni working in Fortune 500 companies globally',
    '15 alumni pursuing or completed PhD from premier institutes',
    '10+ alumni running successful startups and businesses',
    '5+ alumni in defense services serving the nation',
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="w-4/5 mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="alumni-hero-title">
              Alumni Network
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Celebrating the achievements of our distinguished alumni who continue to make us proud across various fields worldwide
            </p>
          </div>
        </section>

        {/* Alumni Statistics */}
        <section className="py-16">
          <div className="w-4/5 mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {alumniStats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2" data-testid={`alumni-stat-${index}`}>
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Notable Alumni */}
        <section className="py-16 bg-muted">
          <div className="w-4/5 mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="notable-alumni-title">
                Notable Alumni
              </h2>
              <p className="text-lg text-muted-foreground">
                Distinguished graduates who have excelled in their respective fields
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {notableAlumni.map((alumni) => (
                <Card key={alumni.id} className="h-full">
                  <CardContent className="p-6 text-center">
                    <img
                      src={alumni.image}
                      alt={alumni.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                      data-testid={`alumni-image-${alumni.id}`}
                    />
                    <h3 className="font-semibold text-lg mb-1" data-testid={`alumni-name-${alumni.id}`}>
                      {alumni.name}
                    </h3>
                    <Badge variant="outline" className="mb-3">Batch {alumni.batch}</Badge>
                    <p className="text-primary font-medium mb-2">{alumni.profession}</p>
                    <p className="text-muted-foreground text-sm mb-2">{alumni.achievement}</p>
                    <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>{alumni.currentLocation}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16">
          <div className="w-4/5 mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="success-stories-title">
                Success Stories
              </h2>
              <p className="text-lg text-muted-foreground">
                Inspiring journeys of our alumni from humble beginnings to remarkable achievements
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {successStories.map((story, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl" data-testid={`story-title-${index}`}>
                      {story.title}
                    </CardTitle>
                    <Badge variant="secondary">{story.alumnus}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{story.story}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Alumni Association */}
        <section className="py-16 bg-muted">
          <div className="w-4/5 mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="association-title">
                Alumni Association
              </h2>
              <p className="text-lg text-muted-foreground">
                Our active alumni association works to maintain connections and support the school community
              </p>
            </div>

            <Tabs defaultValue="leadership" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="leadership">Leadership</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
              </TabsList>

              <TabsContent value="leadership" className="mt-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-center">President</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-1" data-testid="president-name">
                        {alumniAssociation.president.name}
                      </h3>
                      <Badge variant="outline" className="mb-2">Batch {alumniAssociation.president.batch}</Badge>
                      <p className="text-muted-foreground text-sm mb-3">{alumniAssociation.president.profession}</p>
                      <Button variant="outline" size="sm" data-testid="contact-president">
                        <Mail className="w-3 h-3 mr-1" />
                        Contact
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-center">Secretary</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-1" data-testid="secretary-name">
                        {alumniAssociation.secretary.name}
                      </h3>
                      <Badge variant="outline" className="mb-2">Batch {alumniAssociation.secretary.batch}</Badge>
                      <p className="text-muted-foreground text-sm mb-3">{alumniAssociation.secretary.profession}</p>
                      <Button variant="outline" size="sm" data-testid="contact-secretary">
                        <Mail className="w-3 h-3 mr-1" />
                        Contact
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-center">Treasurer</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-1" data-testid="treasurer-name">
                        {alumniAssociation.treasurer.name}
                      </h3>
                      <Badge variant="outline" className="mb-2">Batch {alumniAssociation.treasurer.batch}</Badge>
                      <p className="text-muted-foreground text-sm mb-3">{alumniAssociation.treasurer.profession}</p>
                      <Button variant="outline" size="sm" data-testid="contact-treasurer">
                        <Mail className="w-3 h-3 mr-1" />
                        Contact
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="events" className="mt-8">
                <div className="grid gap-6">
                  {upcomingEvents.map((event, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-lg mb-2" data-testid={`event-title-${index}`}>
                              {event.title}
                            </h3>
                            <p className="text-muted-foreground text-sm">{event.description}</p>
                          </div>
                          <Badge variant="secondary">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(event.date).toLocaleDateString()}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3" />
                            <span>{event.venue}</span>
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

        {/* Alumni Achievements */}
        <section className="py-16">
          <div className="w-4/5 mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="achievements-title">
                  Alumni Achievements
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our alumni have made significant contributions in various fields, 
                  bringing pride and recognition to JNV Latur.
                </p>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-primary mt-0.5" />
                      <span data-testid={`achievement-${index}`}>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src="/images/ParentsMeet3.jpg"
                  alt="Alumni group photo at annual meet"
                  className="rounded-xl shadow-lg w-full h-auto"
                  data-testid="alumni-group-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Join Alumni Network */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="w-4/5 mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="join-network-title">
              Join Our Alumni Network
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Stay connected with your alma mater and fellow alumni. Share your achievements and contribute to our growing legacy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" data-testid="register-alumni">
                Register as Alumni
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" data-testid="update-profile">
                Update Profile
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
