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

  const facilities = [
    {
      icon: Building,
      title: 'Academic Blocks',
      description: 'Modern classrooms with smart boards, audio-visual equipment, and comfortable seating arrangements.',
      features: ['24 Smart Classrooms', 'Audio-Visual Aids', 'Air Conditioning', 'Ergonomic Furniture'],
    },
    {
      icon: FlaskConical,
      title: 'Laboratories',
      description: 'Well-equipped science and computer laboratories for practical learning and research.',
      features: ['Physics Lab', 'Chemistry Lab', 'Biology Lab', 'Computer Lab', 'Language Lab'],
    },
    {
      icon: BookOpen,
      title: 'Central Library',
      description: 'Extensive collection of books, journals, and digital resources for comprehensive learning.',
      features: ['15,000+ Books', 'Digital Library', 'Reading Rooms', 'Reference Section'],
    },
    {
      icon: Dumbbell,
      title: 'Sports Complex',
      description: 'Comprehensive sports facilities for physical fitness and competitive sports training.',
      features: ['Football Ground', 'Cricket Pitch', 'Basketball Court', 'Volleyball Court', 'Athletics Track'],
    },
  ];

  const hostelFeatures = [
    {
      title: 'Accommodation',
      description: 'Comfortable dormitory-style rooms with modern amenities.',
      details: ['4-6 students per room', 'Study tables and chairs', 'Storage lockers', 'Ceiling fans'],
    },
    {
      title: 'Safety & Security',
      description: '24/7 security and supervision for student safety.',
      details: ['24/7 Security Guards', 'CCTV Surveillance', 'Trained Wardens', 'Emergency Protocols'],
    },
    {
      title: 'Recreation',
      description: 'Indoor and outdoor recreational facilities for leisure time.',
      details: ['Indoor Games', 'TV Room', 'Music Room', 'Garden Area'],
    },
    {
      title: 'Health Care',
      description: 'Medical facilities and health monitoring for student wellbeing.',
      details: ['Medical Room', 'First Aid', 'Regular Health Checkups', 'Emergency Care'],
    },
  ];

  const messFeatures = [
    'Nutritious vegetarian meals',
    'Hygienic food preparation',
    'Balanced diet planning',
    'Cultural food diversity',
    'Special dietary requirements',
    'Quality water supply',
  ];

  const infrastructure = [
    {
      category: 'Academic',
      items: ['24 Classrooms', '8 Laboratories', 'Central Library', 'Auditorium', 'Computer Center'],
    },
    {
      category: 'Residential',
      items: ['Boys Hostel (300 capacity)', 'Girls Hostel (280 capacity)', 'Staff Quarters', 'Guest House'],
    },
    {
      category: 'Recreational',
      items: ['Sports Ground', 'Indoor Games Room', 'Music Room', 'Art & Craft Room', 'Yoga Hall'],
    },
    {
      category: 'Support',
      items: ['Medical Room', 'Mess Hall', 'Laundry', 'Solar Power Plant', 'Water Treatment Plant'],
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
              Campus & Infrastructure
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              State-of-the-art facilities designed to provide a conducive environment for learning, growth, and development
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
                  Campus Overview
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Spread across 25 acres of lush green campus, JNV Latur provides a serene and conducive 
                  environment for holistic education. Our modern infrastructure combines traditional 
                  values with contemporary facilities.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="font-semibold">25 Acres Campus</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Building className="w-5 h-5 text-primary" />
                      <span className="font-semibold">Modern Infrastructure</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-primary" />
                      <span className="font-semibold">24/7 Security</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Wifi className="w-5 h-5 text-primary" />
                      <span className="font-semibold">Wi-Fi Enabled</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="font-semibold">580 Students Capacity</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <span className="font-semibold">Learning Focused</span>
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
                Campus Facilities
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive facilities to support academic excellence and personal development
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
                Infrastructure Details
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive infrastructure supporting all aspects of student life
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
                  Hostel & Mess Facilities
                </h2>
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                  <TabsTrigger value="hostel">Hostel Life</TabsTrigger>
                  <TabsTrigger value="mess">Mess Facilities</TabsTrigger>
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
                    <h3 className="text-2xl font-semibold mb-6">Dining Facilities</h3>
                    <p className="text-lg text-muted-foreground mb-8">
                      Our mess provides nutritious, hygienic, and delicious vegetarian meals 
                      prepared by experienced cooks. We maintain the highest standards of 
                      food safety and nutrition.
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
                        <h4 className="font-semibold mb-3">Daily Meal Schedule</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Breakfast:</span>
                            <span>7:00 AM - 8:00 AM</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Lunch:</span>
                            <span>12:30 PM - 1:30 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Tea/Snacks:</span>
                            <span>4:00 PM - 4:30 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Dinner:</span>
                            <span>7:30 PM - 8:30 PM</span>
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
                Campus Gallery
              </h2>
              <p className="text-lg text-muted-foreground">
                Visual tour of our beautiful campus and modern facilities
              </p>
            </div>
            <PhotoGallery items={galleryItems.filter(item => item.category === 'campus')} />
          </div>
        </section>

        {/* Campus Statistics */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="w-4/5 mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2" data-testid="stat-area">25</div>
                <div className="text-lg opacity-90">Acres Campus</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" data-testid="stat-buildings">12</div>
                <div className="text-lg opacity-90">Buildings</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" data-testid="stat-capacity">580</div>
                <div className="text-lg opacity-90">Students Capacity</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" data-testid="stat-staff">60+</div>
                <div className="text-lg opacity-90">Staff Members</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
