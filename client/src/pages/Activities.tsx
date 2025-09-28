import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Music, Palette, Trophy, Microscope, Users, Calendar, Clock, MapPin } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useTranslation } from '@/lib/i18n';

export default function Activities() {
  const { t } = useTranslation();

  const clubsAndSocieties = [
    {
      name: 'Science Club',
      icon: Microscope,
      description: 'Exploring scientific concepts through experiments, projects, and innovative research activities.',
      activities: ['Science Fair', 'Laboratory Experiments', 'Research Projects', 'Guest Lectures'],
      meetingTime: 'Wednesdays, 4:00 PM',
      coordinator: 'Dr. Priya Sharma',
    },
    {
      name: 'Arts & Craft Society',
      icon: Palette,
      description: 'Developing creative skills through painting, sculpture, craft work, and artistic expression.',
      activities: ['Art Exhibitions', 'Painting Workshops', 'Craft Competitions', 'Mural Projects'],
      meetingTime: 'Fridays, 3:30 PM',
      coordinator: 'Mrs. Kavita Jadhav',
    },
    {
      name: 'Music & Dance Club',
      icon: Music,
      description: 'Nurturing musical talents and dance skills through regular practice and performances.',
      activities: ['Music Concerts', 'Dance Performances', 'Instrument Training', 'Cultural Programs'],
      meetingTime: 'Tuesdays & Thursdays, 4:30 PM',
      coordinator: 'Mr. Rahul Deshmukh',
    },
    {
      name: 'Debate & Drama Society',
      icon: Users,
      description: 'Enhancing communication skills, critical thinking, and theatrical abilities.',
      activities: ['Debate Competitions', 'Drama Productions', 'Public Speaking', 'Literary Events'],
      meetingTime: 'Mondays, 4:00 PM',
      coordinator: 'Mrs. Shweta Patil',
    },
  ];

  const culturalActivities = [
    {
      title: 'Annual Cultural Festival',
      date: '2024-03-15',
      description: 'Three-day cultural extravaganza featuring music, dance, drama, and art competitions.',
      categories: ['Classical Dance', 'Folk Dance', 'Vocal Music', 'Instrumental Music', 'Drama', 'Poetry'],
    },
    {
      title: 'Inter-House Cultural Competition',
      date: '2024-02-20',
      description: 'Houses compete in various cultural activities to win the overall championship.',
      categories: ['Group Dance', 'Choir Competition', 'Fashion Show', 'Rangoli Making'],
    },
    {
      title: 'Traditional Day Celebration',
      date: '2024-01-26',
      description: 'Celebrating Indian traditions with regional costumes, folk performances, and cultural displays.',
      categories: ['Traditional Attire', 'Folk Songs', 'Regional Dance', 'Cultural Exhibition'],
    },
  ];

  const sportsActivities = [
    {
      sport: 'Cricket',
      level: 'Inter-School',
      season: 'Winter',
      achievements: 'State Champions 2023',
      coach: 'Mr. Suresh Kumar',
    },
    {
      sport: 'Football',
      level: 'District Level',
      season: 'Monsoon',
      achievements: 'District Winners',
      coach: 'Mr. Ganesh Rao',
    },
    {
      sport: 'Basketball',
      level: 'Regional',
      season: 'Summer',
      achievements: 'Regional Semi-finalists',
      coach: 'Mrs. Priya Kale',
    },
    {
      sport: 'Athletics',
      level: 'State Level',
      season: 'All Year',
      achievements: 'Multiple State Records',
      coach: 'Mr. Deepak Singh',
    },
    {
      sport: 'Volleyball',
      level: 'Inter-School',
      season: 'Winter',
      achievements: 'District Runners-up',
      coach: 'Mrs. Rupa Patil',
    },
    {
      sport: 'Badminton',
      level: 'State Level',
      season: 'All Year',
      achievements: 'Individual State Champions',
      coach: 'Mr. Anil Sharma',
    },
  ];

  const nccActivities = [
    {
      title: 'NCC Training Program',
      description: 'Regular training in drill, weapon handling, and leadership development.',
      activities: ['Parade Training', 'Adventure Activities', 'Social Service', 'Leadership Development'],
    },
    {
      title: 'Republic Day Parade',
      description: 'Participation in district and state level Republic Day celebrations.',
      activities: ['Flag March', 'Cultural Performance', 'Guard of Honor', 'Ceremonial Duties'],
    },
    {
      title: 'Adventure Camps',
      description: 'Annual adventure camps for physical fitness and character building.',
      activities: ['Trekking', 'Rock Climbing', 'River Crossing', 'Survival Training'],
    },
  ];

  const socialServiceActivities = [
    {
      title: 'Community Cleanliness Drive',
      frequency: 'Monthly',
      description: 'Students participate in cleaning nearby villages and public spaces.',
      impact: '15+ villages covered annually',
    },
    {
      title: 'Adult Literacy Program',
      frequency: 'Weekly',
      description: 'Teaching basic literacy to adults in surrounding communities.',
      impact: '200+ adults taught annually',
    },
    {
      title: 'Environmental Conservation',
      frequency: 'Quarterly',
      description: 'Tree plantation and environmental awareness campaigns.',
      impact: '1000+ trees planted',
    },
    {
      title: 'Health Awareness Camps',
      frequency: 'Bi-annual',
      description: 'Organizing health checkups and awareness programs in rural areas.',
      impact: '500+ people benefited',
    },
  ];

  const upcomingEvents = [
    {
      title: 'Science Exhibition 2024',
      date: '2024-02-15',
      time: '9:00 AM',
      venue: 'Science Block',
      type: 'Academic',
    },
    {
      title: 'Inter-House Sports Meet',
      date: '2024-03-01',
      time: '7:00 AM',
      venue: 'Sports Ground',
      type: 'Sports',
    },
    {
      title: 'Cultural Night',
      date: '2024-03-15',
      time: '6:00 PM',
      venue: 'School Auditorium',
      type: 'Cultural',
    },
    {
      title: 'Environment Day Celebration',
      date: '2024-06-05',
      time: '8:00 AM',
      venue: 'School Campus',
      type: 'Social Service',
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="activities-hero-title">
              Co-curricular & Extra-curricular Activities
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive programs designed to develop talents, build character, and create well-rounded individuals
            </p>
          </div>
        </section>

        {/* Activity Categories */}
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
            <Tabs defaultValue="clubs" className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                  <TabsTrigger value="clubs">Clubs</TabsTrigger>
                  <TabsTrigger value="cultural">Cultural</TabsTrigger>
                  <TabsTrigger value="sports">Sports</TabsTrigger>
                  <TabsTrigger value="service">Service</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="clubs" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4" data-testid="clubs-title">Clubs & Societies</h2>
                  <p className="text-lg text-muted-foreground">
                    Student-led clubs focusing on various interests and academic subjects
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {clubsAndSocieties.map((club, index) => (
                    <Card key={index} className="h-full">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <club.icon className="w-5 h-5 text-primary" />
                          </div>
                          <span data-testid={`club-name-${index}`}>{club.name}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">{club.description}</p>
                        <div>
                          <h4 className="font-semibold mb-2">Activities:</h4>
                          <div className="flex flex-wrap gap-2">
                            {club.activities.map((activity, activityIndex) => (
                              <Badge key={activityIndex} variant="outline">
                                {activity}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-primary" />
                            <span>{club.meetingTime}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-primary" />
                            <span>Coordinator: {club.coordinator}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="cultural" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4" data-testid="cultural-title">Cultural Activities</h2>
                  <p className="text-lg text-muted-foreground">
                    Celebrating arts, literature, and cultural heritage through various programs
                  </p>
                </div>
                <div className="space-y-6">
                  {culturalActivities.map((activity, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle data-testid={`cultural-activity-${index}`}>{activity.title}</CardTitle>
                          <Badge variant="outline">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(activity.date).toLocaleDateString()}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">{activity.description}</p>
                        <div>
                          <h4 className="font-semibold mb-2">Competition Categories:</h4>
                          <div className="flex flex-wrap gap-2">
                            {activity.categories.map((category, categoryIndex) => (
                              <Badge key={categoryIndex} variant="secondary">
                                {category}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="sports" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4" data-testid="sports-title">Sports Activities</h2>
                  <p className="text-lg text-muted-foreground">
                    Comprehensive sports program promoting physical fitness and competitive spirit
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sportsActivities.map((sport, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Trophy className="w-5 h-5 text-primary" />
                          <span data-testid={`sport-name-${index}`}>{sport.sport}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <span className="font-medium">Level:</span>
                            <p className="text-muted-foreground">{sport.level}</p>
                          </div>
                          <div>
                            <span className="font-medium">Season:</span>
                            <p className="text-muted-foreground">{sport.season}</p>
                          </div>
                        </div>
                        <div>
                          <span className="font-medium">Coach:</span>
                          <p className="text-muted-foreground">{sport.coach}</p>
                        </div>
                        <Badge variant="default" className="w-full justify-center">
                          {sport.achievements}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="service" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4" data-testid="service-title">Social Service Activities</h2>
                  <p className="text-lg text-muted-foreground">
                    Community service programs developing social responsibility and civic awareness
                  </p>
                </div>

                {/* NCC Activities */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-6">NCC (National Cadet Corps)</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {nccActivities.map((ncc, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="text-lg" data-testid={`ncc-title-${index}`}>{ncc.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <p className="text-muted-foreground text-sm">{ncc.description}</p>
                          <div>
                            <h4 className="font-semibold mb-2 text-sm">Activities:</h4>
                            <div className="space-y-1">
                              {ncc.activities.map((activity, activityIndex) => (
                                <div key={activityIndex} className="flex items-center space-x-2 text-sm">
                                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                                  <span>{activity}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Social Service Programs */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Community Service Programs</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {socialServiceActivities.map((service, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg" data-testid={`service-title-${index}`}>
                              {service.title}
                            </CardTitle>
                            <Badge variant="secondary">{service.frequency}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <p className="text-muted-foreground text-sm">{service.description}</p>
                          <div className="p-3 bg-primary/5 rounded-lg">
                            <span className="font-semibold text-primary text-sm">Impact: </span>
                            <span className="text-sm">{service.impact}</span>
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

        {/* Upcoming Events */}
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="upcoming-events-title">
                Upcoming Events
              </h2>
              <p className="text-lg text-muted-foreground">
                Don't miss out on these exciting upcoming activities and competitions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-2" data-testid={`event-title-${index}`}>
                          {event.title}
                        </h3>
                        <Badge variant="outline">{event.type}</Badge>
                      </div>
                      <Badge variant="secondary">
                        {new Date(event.date).toLocaleDateString()}
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.venue}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Activity Statistics */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="w-4/5 mx-auto px-4 relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="activity-stats-title">
                Activity Participation
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2" data-testid="total-clubs">15+</div>
                <div className="text-lg opacity-90">Active Clubs</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" data-testid="student-participation">85%</div>
                <div className="text-lg opacity-90">Student Participation</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" data-testid="annual-events">50+</div>
                <div className="text-lg opacity-90">Annual Events</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" data-testid="awards-won">100+</div>
                <div className="text-lg opacity-90">Awards Won</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
