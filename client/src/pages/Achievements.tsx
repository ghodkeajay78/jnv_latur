import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, Medal, Star, Award, TrendingUp, Users, BookOpen, Palette } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useTranslation } from '@/lib/i18n';
import { achievements, historicalResults } from '@/data/content';

export default function Achievements() {
  const { t } = useTranslation();

  const academicResults = [
    {
      year: '2023-24',
      class: t('achievements.academicResults.classX'),
      passRate: '98.5%',
      topper: 'Arjun Patil',
      topperMarks: '97.8%',
      stream: t('achievements.academicResults.streams.science'),
      distinction: '85%',
    },
    {
      year: '2023-24',
      class: t('achievements.academicResults.classX'),
      passRate: '100%',
      topper: 'Priya Sharma',
      topperMarks: '98.2%',
      stream: t('achievements.academicResults.streams.allSubjects'),
      distinction: '92%',
    },
    {
      year: '2022-23',
      class: t('achievements.academicResults.classX'),
      passRate: '97.8%',
      topper: 'Rakesh Kumar',
      topperMarks: '96.4%',
      stream: t('achievements.academicResults.streams.commerce'),
      distinction: '82%',
    },
  ];

  const sportsAchievements = [
    {
      sport: t('achievements.sportsAchievements.sports.cricket'),
      level: t('achievements.sportsAchievements.levels.state'),
      achievement: t('achievements.sportsAchievements.achievements.champions'),
      year: '2023',
      participants: t('achievements.sportsAchievements.participants.schoolTeam'),
      medal: t('achievements.sportsAchievements.medals.gold'),
    },
    {
      sport: t('achievements.sportsAchievements.sports.athletics400m'),
      level: t('achievements.sportsAchievements.levels.national'),
      achievement: t('achievements.sportsAchievements.achievements.bronzeMedal'),
      year: '2023',
      participants: 'Rohan Deshmukh',
      medal: t('achievements.sportsAchievements.medals.bronze'),
    },
    {
      sport: t('achievements.sportsAchievements.sports.football'),
      level: t('achievements.sportsAchievements.levels.district'),
      achievement: t('achievements.sportsAchievements.achievements.winners'),
      year: '2023',
      participants: t('achievements.sportsAchievements.participants.schoolTeam'),
      medal: t('achievements.sportsAchievements.medals.gold'),
    },
    {
      sport: t('achievements.sportsAchievements.sports.volleyball'),
      level: t('achievements.sportsAchievements.levels.district'),
      achievement: t('achievements.sportsAchievements.achievements.runnersUp'),
      year: '2023',
      participants: t('achievements.sportsAchievements.participants.schoolTeam'),
      medal: t('achievements.sportsAchievements.medals.silver'),
    },
    {
      sport: t('achievements.sportsAchievements.sports.basketball'),
      level: t('achievements.sportsAchievements.levels.regional'),
      achievement: t('achievements.sportsAchievements.achievements.thirdPlace'),
      year: '2023',
      participants: t('achievements.sportsAchievements.participants.schoolTeam'),
      medal: t('achievements.sportsAchievements.medals.bronze'),
    },
  ];

  const culturalAchievements = [
    {
      activity: t('achievements.culturalAchievements.activities.classicalDance'),
      competition: t('achievements.culturalAchievements.competitions.stateLevelCompetition'),
      position: t('achievements.culturalAchievements.achievements.firstPrize'),
      participant: 'Sneha Jadhav',
      year: '2023',
    },
    {
      activity: t('achievements.culturalAchievements.activities.debateCompetition'),
      competition: t('achievements.culturalAchievements.competitions.interSchoolChampionship'),
      position: t('achievements.culturalAchievements.achievements.champions'),
      participant: 'Debate Team',
      year: '2023',
    },
    {
      activity: t('achievements.culturalAchievements.activities.scienceExhibition'),
      competition: t('achievements.culturalAchievements.competitions.regionalScienceFair'),
      position: t('achievements.culturalAchievements.achievements.bestInnovationAward'),
      participant: 'Science Club',
      year: '2023',
    },
    {
      activity: t('achievements.culturalAchievements.activities.musicCompetition'),
      competition: t('achievements.culturalAchievements.competitions.districtMusicFestival'),
      position: t('achievements.culturalAchievements.achievements.secondPrize'),
      participant: 'School Choir',
      year: '2023',
    },
    {
      activity: t('achievements.culturalAchievements.activities.artCraft'),
      competition: t('achievements.culturalAchievements.competitions.stateArtCompetition'),
      position: t('achievements.culturalAchievements.achievements.excellenceAward'),
      participant: 'Aditi Kale',
      year: '2023',
    },
  ];

  const schoolRecognitions = [
    {
      award: t('achievements.recognitionAchievements.awards.bestSchool'),
      level: t('achievements.recognitionAchievements.levels.state') + ' Level',
      year: '2023',
      authority: 'Navodaya Vidyalaya Samiti',
      description: 'Recognition for overall excellence in academics and co-curricular activities',
    },
    {
      award: t('achievements.recognitionAchievements.awards.excellenceInEducation'),
      level: t('achievements.recognitionAchievements.levels.district') + ' Level',
      year: '2023',
      authority: t('achievements.recognitionAchievements.authorities.districtCollector'),
      description: 'Outstanding performance in board examinations and student development',
    },
    {
      award: t('achievements.recognitionAchievements.awards.greenSchool') + ' Award',
      level: t('achievements.recognitionAchievements.levels.state') + ' Level',
      year: '2022',
      authority: t('achievements.recognitionAchievements.authorities.environmentDepartment'),
      description: 'Recognition for environmental conservation and sustainability initiatives',
    },
    {
      award: t('achievements.recognitionAchievements.awards.digitalEducation') + ' Pioneer',
      level: t('achievements.recognitionAchievements.levels.regional') + ' Level',
      year: '2022',
      authority: t('achievements.recognitionAchievements.authorities.educationTechnologyBoard'),
      description: 'Leading implementation of digital learning technologies',
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="achievements-hero-title">
              {t('achievements.heroTitle')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('achievements.heroSubtitle')}
            </p>
          </div>
        </section>

        {/* Achievement Overview */}
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="academic-pass-rate">98.5%</div>
                  <div className="text-muted-foreground">{t('achievements.stats.classXPassRate')}</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="sports-medals">15+</div>
                  <div className="text-muted-foreground">{t('achievements.stats.sportsMedals')}</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Palette className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="cultural-awards">25+</div>
                  <div className="text-muted-foreground">{t('achievements.stats.culturalAwards')}</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="school-awards">8</div>
                  <div className="text-muted-foreground">{t('achievements.stats.schoolRecognitions')}</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Achievements by Category */}
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="categories-title">
                {t('achievements.categories.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('achievements.categories.subtitle')}
              </p>
            </div>

            <Tabs defaultValue="academic" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
                <TabsTrigger value="academic">{t('achievements.categories.academic')}</TabsTrigger>
                <TabsTrigger value="sports">{t('achievements.categories.sports')}</TabsTrigger>
                <TabsTrigger value="cultural">{t('achievements.categories.cultural')}</TabsTrigger>
                <TabsTrigger value="recognition">{t('achievements.categories.recognition')}</TabsTrigger>
                <TabsTrigger value="historical">{t('achievements.historicalResults.title')}</TabsTrigger>
              </TabsList>

              <TabsContent value="academic" className="space-y-6">
                <div className="grid gap-6">
                  {academicResults.map((result, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span data-testid={`academic-title-${index}`}>
                            {result.class} {t('achievements.academicResults.passRate')} - {result.year}
                          </span>
                          <Badge variant="default">{result.passRate} {t('achievements.academicResults.passRate')}</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-3 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2">{t('achievements.academicResults.schoolTopper')}</h4>
                            <p className="text-lg font-medium text-primary">{result.topper}</p>
                            <p className="text-muted-foreground">{result.topperMarks} - {result.stream}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">{t('achievements.academicResults.passRate')}</h4>
                            <p className="text-2xl font-bold text-green-600">{result.passRate}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">{t('achievements.academicResults.distinctionRate')}</h4>
                            <p className="text-2xl font-bold text-blue-600">{result.distinction}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

              </TabsContent>

              <TabsContent value="sports" className="space-y-6">
                <div className="grid gap-4">
                  {sportsAchievements.map((sport, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              sport.medal === 'Gold' ? 'bg-yellow-100' : 
                              sport.medal === 'Silver' ? 'bg-gray-100' : 'bg-amber-100'
                            }`}>
                              <Trophy className={`w-5 h-5 ${
                                sport.medal === 'Gold' ? 'text-yellow-600' : 
                                sport.medal === 'Silver' ? 'text-gray-600' : 'text-amber-600'
                              }`} />
                            </div>
                            <div>
                              <h3 className="font-semibold" data-testid={`sport-name-${index}`}>{sport.sport}</h3>
                              <p className="text-muted-foreground text-sm">{sport.participants}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="secondary">{sport.level} Level</Badge>
                            <p className="text-sm text-muted-foreground mt-1">{sport.year}</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{sport.achievement}</span>
                          <Badge variant={sport.medal === 'Gold' ? 'default' : 'outline'}>
                            {sport.medal} Medal
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="cultural" className="space-y-6">
                <div className="grid gap-4">
                  {culturalAchievements.map((cultural, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                              <Palette className="w-5 h-5 text-purple-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold" data-testid={`cultural-activity-${index}`}>
                                {cultural.activity}
                              </h3>
                              <p className="text-muted-foreground text-sm">{cultural.participant}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="secondary">{cultural.year}</Badge>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground">{cultural.competition}</p>
                          <Badge variant="default">{cultural.position}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="recognition" className="space-y-6">
                <div className="grid gap-6">
                  {schoolRecognitions.map((recognition, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="flex items-center space-x-2">
                            <Award className="w-5 h-5 text-primary" />
                            <span data-testid={`recognition-award-${index}`}>{recognition.award}</span>
                          </CardTitle>
                          <Badge variant="outline">{recognition.level}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Awarded by:</span>
                            <span className="font-medium">{recognition.authority}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Year:</span>
                            <span className="font-medium">{recognition.year}</span>
                          </div>
                          <p className="text-muted-foreground text-sm mt-3">
                            {recognition.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="historical" className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">{t('achievements.historicalResults.yearWiseTitle')}</h3>
                  <p className="text-muted-foreground">
                    {t('achievements.historicalResults.subtitle')}
                  </p>
                </div>
                
                <div className="grid gap-4 max-h-96 overflow-y-auto">
                  {historicalResults.map((result, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                              <TrendingUp className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-lg">{result.year}</h4>
                              <p className="text-sm text-muted-foreground">{t('achievements.historicalResults.academicYear')}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">{result.percentage}%</div>
                            <div className="text-sm text-muted-foreground">{t('achievements.historicalResults.passRate')}</div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${Math.min(result.percentage, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-4 flex items-center">
                      <Star className="w-5 h-5 text-yellow-500 mr-2" />
                      {t('achievements.historicalResults.keyInsights')}
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <p>{t('achievements.historicalResults.insights.recentYears')}</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <p>{t('achievements.historicalResults.insights.improvementTrend')}</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p>{t('achievements.historicalResults.insights.peakConsistency')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>


        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="w-4/5 mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="cta-title">
              {t('achievements.callToAction.title')}
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              {t('achievements.callToAction.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/admissions">
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" data-testid="apply-button">
                  {t('achievements.callToAction.applyForAdmission')}
                </button>
              </Link>
              <Link href="/gallery">
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors" data-testid="view-gallery-button">
                  {t('achievements.callToAction.viewGallery')}
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
