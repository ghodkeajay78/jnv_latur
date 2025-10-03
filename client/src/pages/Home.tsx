import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { GraduationCap, Book, Trophy, Calendar, MapPin, Phone, Mail, Users, Award, Target } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import PhotoGallery from '@/components/Common/PhotoGallery';
import VideoModal from '@/components/Common/VideoModal';
import { useTranslation } from '@/lib/i18n';
import { schoolInfo, newsItems, galleryItems } from '@/data/content';
import { useEffect, useState } from 'react';

export default function Home() {
  const { t, language } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);


  // Gallery item translation mapping
  const getGalleryItemTranslationKey = (item: any) => {
    const keyMap: { [key: string]: string } = {
      'Modern Classrooms': 'modernClassrooms',
      'Science Laboratory': 'scienceLaboratory',
      'Computer Laboratory': 'computerLaboratory',
      'Central Library': 'centralLibrary',
      'Academic Buildings': 'academicBuildings',
      'Sports Ground': 'sportsGround',
      'Assembly Hall': 'assemblyHall',
      'Cultural Events': 'culturalEvents',
      'Morning Exercise': 'morningExercise',
      'Study Sessions': 'studySessions',
      'Teachers Meeting': 'teachersMeeting',
      'Parent-Teacher Meeting': 'parentTeacherMeeting'
    };
    return keyMap[item.title] || item.id;
  };

  const getTranslatedTitle = (item: any) => {
    const key = getGalleryItemTranslationKey(item);
    return t(`gallery.items.${key}.title`);
  };

  const getTranslatedDescription = (item: any) => {
    const key = getGalleryItemTranslationKey(item);
    return t(`gallery.items.${key}.description`);
  };
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const quickLinks = [
    {
      icon: GraduationCap,
      title: t('quickLinks.admissions.title'),
      description: t('quickLinks.admissions.description'),
      href: '/admissions',
      color: 'bg-blue-600',
    },
    {
      icon: Trophy,
      title: t('quickLinks.achievements.title'),
      description: t('quickLinks.achievements.description'),
      href: '/achievements',
      color: 'bg-purple-600',
    },
    {
      icon: Users,
      title: t('quickLinks.gallery.title'),
      description: t('quickLinks.gallery.description'),
      href: '/gallery',
      color: 'bg-emerald-600',
    },
  ];

  const stats = [
    { label: t('stats.years'), value: '38+', icon: Award },
    { label: t('stats.students'), value: '580+', icon: Users },
    { label: t('stats.faculty'), value: '45+', icon: GraduationCap },
    { label: t('stats.achievements'), value: '95%', icon: Target },
  ];

  const heroImages = [
    {
      src: '/images/Gate.jpg',
      alt: t('imageAlt.gate')
    },
    {
      src: '/images/Culture.jpg',
      alt: t('imageAlt.culture')
    },
    {
      src: '/images/Acadmics_building2.jpg',
      alt: t('imageAlt.academicBuilding')
    },
    {
      src: '/images/Assembly4.jpg',
      alt: t('imageAlt.assembly')
    },
    {
      src: '/images/Classroom2.jpg',
      alt: t('imageAlt.classroom')
    },
    {
      src: '/images/ComputerLab.jpg',
      alt: t('imageAlt.computerLab')
    },
    {
      src: '/images/Study.jpg',
      alt: t('imageAlt.study')
    },
    {
      src: '/images/Exercise2.jpg',
      alt: t('imageAlt.exercise')
    },
    {
      src: '/images/Donation.jpg',
      alt: t('imageAlt.donation')
    },
    {
      src: '/images/Library.jpg',
      alt: t('imageAlt.library')
    },
    {
      src: '/images/ScienceLaboratory.jpg',
      alt: t('imageAlt.scienceLab')
    },
    {
      src: '/images/Culture2.jpg',
      alt: t('imageAlt.culturalPerformances')
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-orange-50 text-orange-600 relative overflow-hidden min-h-[60vh] flex items-center">
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
          
          <div className="w-4/5 mx-auto px-4 py-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="slide-in-up space-y-6">
                <div className="space-y-4">
                <h1 
                  className={`text-3xl lg:text-5xl font-bold leading-relaxed py-1 bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent ${language === 'mr' ? 'marathi-text' : ''}`}
                  lang={language}
                  data-testid="hero-title"
                >
                  {t('hero.title')}
                </h1>
                <p 
                  className={`text-base lg:text-lg text-gray-700 leading-relaxed ${language === 'mr' ? 'marathi-text' : ''}`}
                  lang={language}
                  data-testid="hero-description"
                >
                  {t('hero.description', { schoolName: t('school.name'), location: t('school.location') })}
                </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="/about">
                    <Button size="lg" className="bg-orange-600 text-white hover:bg-orange-700 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 px-6 py-3 text-base font-semibold" data-testid="hero-read-more-button">
                      {t('common.readMore')}
                    </Button>
                  </Link>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={() => setIsVideoModalOpen(true)}
                    className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 px-6 py-3 text-base font-semibold" 
                    data-testid="hero-tour-button"
                  >
                    {t('hero.tourButton')}
                  </Button>
                </div>
              </div>
              <div className="relative w-full">
                <Carousel className="w-full" setApi={(api) => {
                  if (api) {
                    api.scrollTo(currentSlide);
                  }
                }}>
                  <CarouselContent>
                    {heroImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="p-2">
                          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-[300px] object-cover transform hover:scale-105 transition-transform duration-500"
                              data-testid={`hero-image-${index}`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-6 bg-white/90 hover:bg-white shadow-lg" />
                  <CarouselNext className="right-6 bg-white/90 hover:bg-white shadow-lg" />
                </Carousel>
              </div>
            </div>
          </div>
          {/* Enhanced Decorative Elements */}
          <div className="absolute top-20 right-20 w-40 h-40 bg-orange-200/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-orange-300/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-10 w-24 h-24 bg-orange-100/30 rounded-full blur-lg"></div>
        </section>

        {/* Quick Links */}
        <section className="py-8 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
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
            <div className="grid md:grid-cols-3 gap-6">
              {quickLinks.map((link, index) => (
                <Card key={index} className="group hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className={`w-10 h-10 ${link.color} rounded-lg flex items-center justify-center mb-3`}>
                      <link.icon className="text-white text-lg" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{link.title}</h3>
                    <p className="text-muted-foreground mb-3 text-sm">{link.description}</p>
                    <Link href={link.href}>
                      <Button variant="link" className="p-0 h-auto font-semibold text-sm" data-testid={`quick-link-${link.title.toLowerCase()}`}>
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
        <section className="py-12 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
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
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold mb-3" data-testid="campus-life-title">
                {t('campusLife.title', { schoolName: t('school.name') })}
              </h2>
              <p className="text-base text-muted-foreground">
                {t('campusLife.description')}
              </p>
            </div>
            <PhotoGallery 
              items={galleryItems} 
              getTranslatedTitle={getTranslatedTitle}
              getTranslatedDescription={getTranslatedDescription}
            />
          </div>
        </section>

        {/* Notice Board & Latest News */}
        <section className="py-12 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
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
            <div className="grid lg:grid-cols-3 gap-6">
              {/* News Section */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-4" data-testid="news-title">{t('news.title')}</h2>
                <div className="space-y-3">
                  {/* Static news items with translations */}
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge 
                            variant="default" 
                            className="mb-2 text-xs"
                            data-testid="news-badge-1"
                          >
                            {t('common.announcement')}
                          </Badge>
                          <h3 className="font-semibold mb-2 text-sm" data-testid="news-title-1">{t('news.staticItems.admissionProcess.title')}</h3>
                          <p className="text-muted-foreground text-xs mb-2">{t('news.staticItems.admissionProcess.description')}</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span>{t('news.staticItems.admissionProcess.date')}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge 
                            variant="secondary" 
                            className="mb-2 text-xs"
                            data-testid="news-badge-2"
                          >
                            {t('common.event')}
                          </Badge>
                          <h3 className="font-semibold mb-2 text-sm" data-testid="news-title-2">{t('news.staticItems.scienceExhibition.title')}</h3>
                          <p className="text-muted-foreground text-xs mb-2">{t('news.staticItems.scienceExhibition.description')}</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span>{t('news.staticItems.scienceExhibition.date')}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge 
                            variant="outline" 
                            className="mb-2 text-xs"
                            data-testid="news-badge-3"
                          >
                            {t('common.result')}
                          </Badge>
                          <h3 className="font-semibold mb-2 text-sm" data-testid="news-title-3">{t('news.staticItems.boardResults.title')}</h3>
                          <p className="text-muted-foreground text-xs mb-2">{t('news.staticItems.boardResults.description')}</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span>{t('news.staticItems.boardResults.date')}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-4">
                  <Link href="/news">
                    <Button variant="link" className="p-0 h-auto font-semibold text-sm" data-testid="view-all-news">
                      {t('common.viewAll')} News →
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Quick Info & Events Panel */}
              <div className="space-y-4">

                <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-3 text-base">{t('upcomingEvents.title')}</h3>
                    <div className="space-y-3 text-xs">
                      <div className="border-l-2 border-white/30 pl-2">
                        <div className="font-medium">{t('upcomingEvents.republicDay')}</div>
                        <div className="opacity-90">January 26, 2024</div>
                      </div>
                      <div className="border-l-2 border-white/30 pl-2">
                        <div className="font-medium">{t('upcomingEvents.parentTeacherMeeting')}</div>
                        <div className="opacity-90">February 3, 2024</div>
                      </div>
                      <div className="border-l-2 border-white/30 pl-2">
                        <div className="font-medium">{t('upcomingEvents.annualSportsMeet')}</div>
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
        <section className="py-12 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
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
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4" data-testid="about-title">{t('about.title', { schoolName: t('school.name') })}</h2>
                <p className="text-base text-muted-foreground mb-4">
                  {t('about.description', { established: schoolInfo.established.toString(), schoolName: t('school.name') })}
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="font-semibold mb-1.5 text-sm">{t('about.mission')}</h3>
                    <p className="text-xs text-muted-foreground">{t('school.mission')}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1.5 text-sm">{t('about.vision')}</h3>
                    <p className="text-xs text-muted-foreground">{t('school.vision')}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                      <div className="text-xl font-bold text-blue-600 mb-1" data-testid={`stat-value-${index}`}>{stat.value}</div>
                      <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src="/images/Gate.jpg"
                  alt="JNV Latur main entrance gate and campus view"
                  className="rounded-xl shadow-lg w-full h-auto"
                  data-testid="about-image"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc="/videos/About_Video.mp4"
        title="About JNV Latur"
      />
    </>
  );
}
