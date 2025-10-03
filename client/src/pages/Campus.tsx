import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building, Users, Utensils, Dumbbell, BookOpen, FlaskConical, Computer, Wifi, Shield, MapPin } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import PhotoGallery from '@/components/Common/PhotoGallery';
import { useTranslation } from '@/lib/i18n';
import { galleryItems } from '@/data/content';

export default function Campus() {
  const { t } = useTranslation();

  // Gallery translation functions (same as Home page)
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

  const facilities = [
    {
      icon: Building,
      title: t('campus.facilities.academicBlocks.title'),
      description: t('campus.facilities.academicBlocks.description'),
      features: t('campus.facilities.academicBlocks.features'),
    },
    {
      icon: FlaskConical,
      title: t('campus.facilities.laboratories.title'),
      description: t('campus.facilities.laboratories.description'),
      features: t('campus.facilities.laboratories.features'),
    },
    {
      icon: BookOpen,
      title: t('campus.facilities.centralLibrary.title'),
      description: t('campus.facilities.centralLibrary.description'),
      features: t('campus.facilities.centralLibrary.features'),
    },
    {
      icon: Dumbbell,
      title: t('campus.facilities.sportsComplex.title'),
      description: t('campus.facilities.sportsComplex.description'),
      features: t('campus.facilities.sportsComplex.features'),
    },
  ];

  const hostelFeatures = [
    {
      title: t('campus.hostelFeatures.accommodation.title'),
      description: t('campus.hostelFeatures.accommodation.description'),
      details: t('campus.hostelFeatures.accommodation.details'),
    },
    {
      title: t('campus.hostelFeatures.safetySecurity.title'),
      description: t('campus.hostelFeatures.safetySecurity.description'),
      details: t('campus.hostelFeatures.safetySecurity.details'),
    },
    {
      title: t('campus.hostelFeatures.recreation.title'),
      description: t('campus.hostelFeatures.recreation.description'),
      details: t('campus.hostelFeatures.recreation.details'),
    },
    {
      title: t('campus.hostelFeatures.healthCare.title'),
      description: t('campus.hostelFeatures.healthCare.description'),
      details: t('campus.hostelFeatures.healthCare.details'),
    },
  ];

  const messFeatures = t('campus.hostelMessFacilities.messFeatures');

  const infrastructure = [
    {
      category: t('campus.infrastructureDetails.categories.academic'),
      items: [
        t('campus.infrastructureDetails.items.classrooms'),
        t('campus.infrastructureDetails.items.laboratories'),
        t('campus.infrastructureDetails.items.centralLibrary'),
        t('campus.infrastructureDetails.items.auditorium'),
        t('campus.infrastructureDetails.items.computerCenter')
      ],
    },
    {
      category: t('campus.infrastructureDetails.categories.residential'),
      items: [
        t('campus.infrastructureDetails.items.boysHostel'),
        t('campus.infrastructureDetails.items.girlsHostel'),
        t('campus.infrastructureDetails.items.staffQuarters'),
        t('campus.infrastructureDetails.items.guestHouse')
      ],
    },
    {
      category: t('campus.infrastructureDetails.categories.recreational'),
      items: [
        t('campus.infrastructureDetails.items.sportsGround'),
        t('campus.infrastructureDetails.items.indoorGamesRoom'),
        t('campus.infrastructureDetails.items.musicRoom'),
        t('campus.infrastructureDetails.items.artCraftRoom'),
        t('campus.infrastructureDetails.items.yogaHall')
      ],
    },
    {
      category: t('campus.infrastructureDetails.categories.support'),
      items: [
        t('campus.infrastructureDetails.items.medicalRoom'),
        t('campus.infrastructureDetails.items.messHall'),
        t('campus.infrastructureDetails.items.laundry'),
        t('campus.infrastructureDetails.items.solarPowerPlant'),
        t('campus.infrastructureDetails.items.waterTreatmentPlant')
      ],
    },
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="campus-hero-title">
              {t('campus.heroTitle')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('campus.heroSubtitle')}
            </p>
          </div>
        </section>

        {/* Campus Overview */}
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
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="overview-title">
                  {t('campus.overview.title')}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {t('campus.overview.description')}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="font-semibold">{t('campus.overview.features.campusSize')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Building className="w-5 h-5 text-primary" />
                      <span className="font-semibold">{t('campus.overview.features.infrastructure')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-primary" />
                      <span className="font-semibold">{t('campus.overview.features.security')}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Wifi className="w-5 h-5 text-primary" />
                      <span className="font-semibold">{t('campus.overview.features.wifi')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="font-semibold">{t('campus.overview.features.capacity')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <span className="font-semibold">{t('campus.overview.features.learning')}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="/images/Gate.jpg"
                  alt="Aerial view of JNV Latur campus"
                  className="rounded-xl shadow-lg w-full h-auto"
                  data-testid="campus-overview-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Facilities */}
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="facilities-title">
                {t('campus.facilities.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('campus.facilities.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {facilities.map((facility, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <facility.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl" data-testid={`facility-title-${index}`}>
                        {facility.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{facility.description}</p>
                    <div className="space-y-2">
                      {facility.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Infrastructure */}
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="infrastructure-title">
                {t('campus.infrastructureDetails.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('campus.infrastructureDetails.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {infrastructure.map((category, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-center" data-testid={`infrastructure-category-${index}`}>
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Hostel & Mess Information */}
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
            <Tabs defaultValue="hostel" className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="hostel-mess-title">
                  {t('campus.hostelMessFacilities.title')}
                </h2>
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                  <TabsTrigger value="hostel">{t('campus.hostelMessFacilities.tabs.hostelLife')}</TabsTrigger>
                  <TabsTrigger value="mess">{t('campus.hostelMessFacilities.tabs.messFacilities')}</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="hostel" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src="/images/Hostelmainimage.jpg"
                      alt="Main hostel building and dormitory facilities"
                      className="rounded-xl shadow-lg w-full h-auto mb-6"
                      data-testid="hostel-image"
                    />
                  </div>
                  <div className="grid gap-6">
                    {hostelFeatures.map((feature, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-lg mb-2" data-testid={`hostel-feature-${index}`}>
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3">{feature.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {feature.details.map((detail, detailIndex) => (
                              <Badge key={detailIndex} variant="outline" className="text-xs">
                                {detail}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="mess" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">{t('campus.hostelMessFacilities.diningFacilities.title')}</h3>
                    <p className="text-lg text-muted-foreground mb-8">
                      {t('campus.hostelMessFacilities.diningFacilities.description')}
                    </p>
                    <div className="grid gap-3">
                      {messFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Card className="mt-8 bg-primary/5">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-3">{t('campus.hostelMessFacilities.mealSchedule.title')}</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>{t('campus.hostelMessFacilities.mealSchedule.breakfast')}</span>
                            <span>{t('campus.hostelMessFacilities.mealSchedule.breakfastTime')}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>{t('campus.hostelMessFacilities.mealSchedule.lunch')}</span>
                            <span>{t('campus.hostelMessFacilities.mealSchedule.lunchTime')}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>{t('campus.hostelMessFacilities.mealSchedule.teaSnacks')}</span>
                            <span>{t('campus.hostelMessFacilities.mealSchedule.teaTime')}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>{t('campus.hostelMessFacilities.mealSchedule.dinner')}</span>
                            <span>{t('campus.hostelMessFacilities.mealSchedule.dinnerTime')}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div>
                    <img
                      src="/images/Lunch.jpg"
                      alt="Students enjoying nutritious lunch in the mess hall"
                      className="rounded-xl shadow-lg w-full h-auto"
                      data-testid="mess-image"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Campus Gallery */}
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="gallery-title">
                {t('campus.campusGallery.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('campus.campusGallery.subtitle')}
              </p>
            </div>
            <PhotoGallery 
              items={galleryItems.filter(item => item.category === 'campus')} 
              getTranslatedTitle={getTranslatedTitle}
              getTranslatedDescription={getTranslatedDescription}
            />
          </div>
        </section>

        {/* Campus Statistics */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="w-4/5 mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2" data-testid="stat-area">25</div>
                <div className="text-lg opacity-90">{t('campus.campusStats.acresCampus')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" data-testid="stat-buildings">12</div>
                <div className="text-lg opacity-90">{t('campus.campusStats.buildings')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" data-testid="stat-capacity">580</div>
                <div className="text-lg opacity-90">{t('campus.campusStats.studentsCapacity')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" data-testid="stat-staff">60+</div>
                <div className="text-lg opacity-90">{t('campus.campusStats.staffMembers')}</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
