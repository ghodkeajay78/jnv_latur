import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { GraduationCap, Book, Trophy, Calendar, MapPin, Phone, Mail, Users, Award, Target } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import PhotoGallery from '@/components/Common/PhotoGallery';
import { useTranslation } from '@/lib/i18n';
import { schoolInfo, newsItems, galleryItems } from '@/data/content';

export default function Home() {
  const { t } = useTranslation();

  const quickLinks = [
    {
      icon: GraduationCap,
      title: t('nav.admissions'),
      description: 'Apply for admission to join our prestigious institution. Check eligibility and process.',
      href: '/admissions',
      color: 'bg-blue-600',
    },
    {
      icon: Book,
      title: t('nav.academics'),
      description: 'Explore our comprehensive curriculum and academic programs designed for excellence.',
      href: '/academics',
      color: 'bg-emerald-600',
    },
    {
      icon: Trophy,
      title: t('nav.achievements'),
      description: 'Discover our students\' outstanding achievements in academics, sports, and cultural activities.',
      href: '/achievements',
      color: 'bg-purple-600',
    },
  ];

  const stats = [
    { label: 'Years of Excellence', value: '38+', icon: Award },
    { label: 'Students', value: '580+', icon: Users },
    { label: 'Faculty Members', value: '45+', icon: GraduationCap },
    { label: 'Success Rate', value: '95%', icon: Target },
  ];

  const heroImages = [
    {
      src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      alt: 'School campus with modern buildings and students'
    },
    {
      src: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      alt: 'Panoramic view of school campus with main building'
    },
    {
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      alt: 'Modern classroom with smart boards'
    },
    {
      src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      alt: 'Science laboratory with students'
    },
    {
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      alt: 'School library with students studying'
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gray-100 text-orange-600 relative overflow-hidden">
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="slide-in-up">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="hero-title">
                  {t('school.tagline')}
                </h1>
                <p className="text-xl mb-8 opacity-90" data-testid="hero-description">
                  Nurturing young minds to become tomorrow's leaders at {t('school.name')}, {t('school.location')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/admissions">
                    <Button size="lg" className="bg-orange-600 text-white hover:bg-orange-700 shadow-lg" data-testid="hero-apply-button">
                      {t('common.apply')}
                    </Button>
                  </Link>
                  <Link href="/gallery">
                    <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white shadow-lg" data-testid="hero-tour-button">
                      Virtual Tour
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Carousel className="w-full max-w-lg mx-auto">
                  <CarouselContent>
                    {heroImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="rounded-xl shadow-2xl w-full h-auto"
                            data-testid={`hero-image-${index}`}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </div>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-orange-200/30 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-orange-200/30 rounded-full"></div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {quickLinks.map((link, index) => (
                <Card key={index} className="group hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${link.color} rounded-lg flex items-center justify-center mb-4`}>
                      <link.icon className="text-white text-xl" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{link.title}</h3>
                    <p className="text-muted-foreground mb-4">{link.description}</p>
                    <Link href={link.href}>
                      <Button variant="link" className="p-0 h-auto font-semibold" data-testid={`quick-link-${link.title.toLowerCase()}`}>
                        {t('common.learnMore')} →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Campus Life Photo Slider */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="campus-life-title">
                Campus Life at {t('school.name')}
              </h2>
              <p className="text-lg text-muted-foreground">
                Experience the vibrant campus life, state-of-the-art facilities, and rich cultural heritage
              </p>
            </div>
            <PhotoGallery items={galleryItems} />
          </div>
        </section>

        {/* Notice Board & Latest News */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* News Section */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6" data-testid="news-title">Latest News & Updates</h2>
                <div className="space-y-4">
                  {newsItems.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <Badge 
                              variant={item.type === 'announcement' ? 'default' : item.type === 'event' ? 'secondary' : 'outline'} 
                              className="mb-2"
                              data-testid={`news-badge-${item.id}`}
                            >
                              {item.type.toUpperCase()}
                            </Badge>
                            <h3 className="font-semibold mb-2" data-testid={`news-title-${item.id}`}>{item.title}</h3>
                            <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3 mr-1" />
                              <span>{new Date(item.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6">
                  <Link href="/news">
                    <Button variant="link" className="p-0 h-auto font-semibold" data-testid="view-all-news">
                      {t('common.viewAll')} News →
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Quick Info & Events Panel */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Quick Information</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Established:</span>
                        <span>{schoolInfo.established}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Affiliation:</span>
                        <span>{schoolInfo.affiliation}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Classes:</span>
                        <span>{schoolInfo.classes}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Students:</span>
                        <span>{schoolInfo.students}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Faculty:</span>
                        <span>{schoolInfo.faculty}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 text-lg">Upcoming Events</h3>
                    <div className="space-y-4 text-sm">
                      <div className="border-l-2 border-white/30 pl-3">
                        <div className="font-medium">Republic Day Celebration</div>
                        <div className="opacity-90">January 26, 2024</div>
                      </div>
                      <div className="border-l-2 border-white/30 pl-3">
                        <div className="font-medium">Parent-Teacher Meeting</div>
                        <div className="opacity-90">February 3, 2024</div>
                      </div>
                      <div className="border-l-2 border-white/30 pl-3">
                        <div className="font-medium">Annual Sports Meet</div>
                        <div className="opacity-90">February 15-17, 2024</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* About Section Preview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="about-title">About {t('school.name')}</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Established in {schoolInfo.established}, {t('school.name')} stands as a beacon of excellence in education. 
                  Our institution is committed to providing quality education to talented rural children, fostering their 
                  intellectual, physical, and emotional development.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="font-semibold mb-2">Our Mission</h3>
                    <p className="text-sm text-muted-foreground">{t('school.mission')}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Our Vision</h3>
                    <p className="text-sm text-muted-foreground">{t('school.vision')}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-2" data-testid={`stat-value-${index}`}>{stat.value}</div>
                      <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Panoramic view of JNV Latur campus with main administrative building"
                  className="rounded-xl shadow-lg w-full h-auto"
                  data-testid="about-image"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
