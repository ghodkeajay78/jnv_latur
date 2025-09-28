import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, Users, Shield, Heart, Utensils, Bed, Wifi, Camera } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useTranslation } from '@/lib/i18n';

export default function Hostel() {
  const { t } = useTranslation();

  const dailySchedule = [
    { time: '5:30 AM', activity: 'Wake Up Bell', description: 'Morning wake-up call for all students' },
    { time: '6:00 AM', activity: 'Physical Exercise', description: 'Morning exercises and yoga session' },
    { time: '7:00 AM', activity: 'Breakfast', description: 'Nutritious morning meal in mess hall' },
    { time: '8:00 AM', activity: 'Morning Assembly', description: 'School assembly and prayer' },
    { time: '8:30 AM', activity: 'Academic Classes', description: 'Regular classroom teaching' },
    { time: '12:30 PM', activity: 'Lunch Break', description: 'Midday meal and rest time' },
    { time: '1:30 PM', activity: 'Afternoon Classes', description: 'Continuation of academic sessions' },
    { time: '4:00 PM', activity: 'Tea & Snacks', description: 'Evening refreshments' },
    { time: '4:30 PM', activity: 'Games & Sports', description: 'Outdoor and indoor sports activities' },
    { time: '6:00 PM', activity: 'Study Hour', description: 'Supervised self-study time' },
    { time: '7:30 PM', activity: 'Dinner', description: 'Evening meal with variety of dishes' },
    { time: '8:30 PM', activity: 'Recreation Time', description: 'TV, music, indoor games' },
    { time: '9:30 PM', activity: 'Study Time', description: 'Homework and preparation' },
    { time: '10:30 PM', activity: 'Lights Out', description: 'Sleep time for all students' },
  ];

  const hostelFacilities = [
    {
      icon: Bed,
      title: 'Comfortable Accommodation',
      description: 'Well-ventilated dormitories with 4-6 students per room, equipped with individual study tables, storage lockers, and comfortable beds.',
      features: ['Separate rooms for boys and girls', 'Individual study space', 'Storage facilities', 'Comfortable bedding'],
    },
    {
      icon: Utensils,
      title: 'Nutritious Mess Facilities',
      description: 'Hygienic kitchen and dining hall serving balanced vegetarian meals prepared by experienced cooks with focus on nutrition.',
      features: ['Nutritious vegetarian meals', 'Hygienic food preparation', 'Balanced diet planning', 'Cultural food diversity'],
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      description: '24/7 security arrangements with trained wardens and support staff ensuring complete safety of all resident students.',
      features: ['24/7 Security guards', 'CCTV surveillance', 'Trained wardens', 'Emergency protocols'],
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive healthcare facilities with regular medical checkups and immediate attention to health issues.',
      features: ['Medical room facility', 'Regular health checkups', 'First aid availability', 'Emergency medical care'],
    },
  ];

  const wardenInfo = [
    {
      name: 'Shri Rajesh Maheshwarappa Sugure',
      designation: 'President, Hostel Committee',
      experience: '14+ years',
      qualifications: 'Education & Administration',
      specialization: 'Hostel Management & Student Welfare',
    },
    {
      name: 'Shri Ravindra Madhukarrao Purnapatre',
      designation: 'Secretary (Hostel)',
      experience: '12+ years',
      qualifications: 'Education & Development',
      specialization: 'Hostel Administration & Student Services',
    },
    {
      name: 'Dr. (Mrs.) Aruna Srinivas Sadake',
      designation: 'Member, Hostel Committee',
      experience: '15+ years',
      qualifications: 'Ph.D. in Education',
      specialization: 'Student Counseling & Welfare',
    },
    {
      name: 'Shri Bahubali Nagnath Bhambe',
      designation: 'Staff Representative',
      experience: '16+ years',
      qualifications: 'Education & Support Services',
      specialization: 'Staff Welfare & Support Services',
    },
  ];

  const weeklyActivities = [
    { day: 'Monday', activity: 'House Meeting', description: 'Weekly house discussions and planning' },
    { day: 'Tuesday', activity: 'Cultural Programs', description: 'Music, dance, and drama activities' },
    { day: 'Wednesday', activity: 'Sports Tournament', description: 'Inter-house sports competitions' },
    { day: 'Thursday', activity: 'Study Groups', description: 'Collaborative learning sessions' },
    { day: 'Friday', activity: 'Movie Night', description: 'Educational and entertainment films' },
    { day: 'Saturday', activity: 'Outdoor Activities', description: 'Picnics, excursions, and field trips' },
    { day: 'Sunday', activity: 'Free Time', description: 'Personal time, family calls, and relaxation' },
  ];

  const hostelRules = [
    'Students must follow the daily routine and timings strictly',
    'Maintain cleanliness in dormitories and common areas',
    'Respect fellow students and hostel staff',
    'No use of mobile phones during study hours',
    'Obtain permission before leaving the hostel premises',
    'Participate actively in hostel activities and programs',
    'Report any health issues immediately to wardens',
    'Follow discipline and code of conduct at all times',
  ];

  const celebrations = [
    {
      festival: 'Diwali Celebration',
      description: 'Traditional festival celebration with diyas, rangoli, and cultural programs',
      activities: ['Decoration competition', 'Sweet distribution', 'Cultural performances'],
    },
    {
      festival: 'Holi Festival',
      description: 'Colorful celebration of Holi with organic colors and traditional festivities',
      activities: ['Color play', 'Traditional games', 'Special feast'],
    },
    {
      festival: 'Republic Day',
      description: 'Patriotic celebration with flag hoisting and cultural programs',
      activities: ['Flag hoisting', 'Parade', 'Cultural events'],
    },
    {
      festival: 'Independence Day',
      description: 'National celebration with inspiring speeches and performances',
      activities: ['Flag ceremony', 'Speeches', 'Cultural programs'],
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="hostel-hero-title">
              Hostel Life at JNV Latur
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A home away from home where students develop independence, friendships, and life skills in a supportive residential environment
            </p>
          </div>
        </section>

        {/* Daily Routine */}
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="routine-title">
                Daily Routine
              </h2>
              <p className="text-lg text-muted-foreground">
                Well-structured daily schedule promoting academic excellence and personal development
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-4">
                {dailySchedule.map((schedule, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-6">
                        <div className="flex-shrink-0">
                          <Badge variant="outline" className="text-sm font-mono">
                            {schedule.time}
                          </Badge>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1" data-testid={`routine-activity-${index}`}>
                            {schedule.activity}
                          </h3>
                          <p className="text-muted-foreground text-sm">{schedule.description}</p>
                        </div>
                        <Clock className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hostel Facilities */}
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
                Hostel Facilities
              </h2>
              <p className="text-lg text-muted-foreground">
                Modern amenities and services ensuring comfort and well-being of all students
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {hostelFacilities.map((facility, index) => (
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
                    <p className="text-muted-foreground mb-6">{facility.description}</p>
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

        {/* Warden Information */}
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="wardens-title">
                Hostel Wardens & Staff
              </h2>
              <p className="text-lg text-muted-foreground">
                Experienced and caring wardens ensuring proper guidance and supervision
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {wardenInfo.map((warden, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-1" data-testid={`warden-name-${index}`}>
                      {warden.name}
                    </h3>
                    <Badge variant="outline" className="mb-3">{warden.designation}</Badge>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><strong>Experience:</strong> {warden.experience}</p>
                      <p><strong>Qualifications:</strong> {warden.qualifications}</p>
                      <p><strong>Specialization:</strong> {warden.specialization}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Activities & Celebrations */}
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
            <Tabs defaultValue="weekly" className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="activities-title">
                  Activities & Celebrations
                </h2>
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                  <TabsTrigger value="weekly">Weekly Activities</TabsTrigger>
                  <TabsTrigger value="festivals">Festivals</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="weekly" className="mt-8">
                <div className="grid gap-4">
                  {weeklyActivities.map((activity, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-6">
                          <div className="flex-shrink-0">
                            <Badge variant="secondary" className="font-medium">
                              {activity.day}
                            </Badge>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-1" data-testid={`weekly-activity-${index}`}>
                              {activity.activity}
                            </h3>
                            <p className="text-muted-foreground text-sm">{activity.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="festivals" className="mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {celebrations.map((celebration, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Heart className="w-5 h-5 text-primary" />
                          <span data-testid={`festival-name-${index}`}>{celebration.festival}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{celebration.description}</p>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Activities:</h4>
                          {celebration.activities.map((activity, activityIndex) => (
                            <div key={activityIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-sm">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Rules & Guidelines */}
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
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="rules-title">
                  Hostel Rules & Guidelines
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Simple rules and guidelines to ensure a harmonious living environment 
                  and optimal learning conditions for all students.
                </p>
                <div className="space-y-3">
                  {hostelRules.map((rule, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-sm leading-relaxed" data-testid={`rule-${index}`}>{rule}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src="/images/Prayer.jpg"
                  alt="Students participating in prayer and spiritual activities"
                  className="rounded-xl shadow-lg w-full h-auto"
                  data-testid="rules-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Hostel Statistics */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="w-4/5 mx-auto px-4 relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="stats-title">
                Hostel at a Glance
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2" data-testid="total-capacity">580</div>
                <div className="text-lg opacity-90">Total Capacity</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" data-testid="boys-capacity">300</div>
                <div className="text-lg opacity-90">Boys Hostel</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" data-testid="girls-capacity">280</div>
                <div className="text-lg opacity-90">Girls Hostel</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" data-testid="wardens-count">6</div>
                <div className="text-lg opacity-90">Wardens & Staff</div>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Tour Section */}
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
          <div className="w-4/5 mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="virtual-tour-title">
              Virtual Hostel Tour
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Take a virtual tour of our hostel facilities and get a feel of the living environment
            </p>
            <div className="bg-muted rounded-xl p-12 max-w-4xl mx-auto">
              <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">360° Virtual Tour</h3>
              <p className="text-muted-foreground mb-6">
                Experience the hostel facilities through our interactive virtual tour
              </p>
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors" data-testid="start-tour-button">
                Start Virtual Tour
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
