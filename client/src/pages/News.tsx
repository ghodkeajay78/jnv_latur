import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, Search, Filter, Bell, ExternalLink } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useTranslation } from '@/lib/i18n';
import { newsItems } from '@/data/content';

export default function News() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const extendedNews = [
    ...newsItems,
    {
      id: '4',
      title: 'Inter-House Sports Competition 2024',
      description: 'Annual inter-house sports competition begins with swimming and athletics events. All four houses competing for the championship trophy.',
      date: '2024-01-12',
      type: 'event' as const,
      category: 'Sports',
    },
    {
      id: '5',
      title: 'Digital Library Inauguration',
      description: 'State-of-the-art digital library with 10,000+ e-books and online resources inaugurated by Education Minister.',
      date: '2024-01-15',
      type: 'news' as const,
      category: 'Infrastructure',
    },
    {
      id: '6',
      title: 'National Science Day Celebration',
      description: 'Special programs and exhibitions planned for National Science Day. Guest lecture by renowned scientist Dr. A.P.J. Abdul Kalam Institute.',
      date: '2024-02-28',
      type: 'event' as const,
      category: 'Academic',
    },
    {
      id: '7',
      title: 'Student Exchange Program',
      description: 'Cultural exchange program with sister school in Japan. Selected students will participate in 2-week educational tour.',
      date: '2024-01-20',
      type: 'announcement' as const,
      category: 'International',
    },
    {
      id: '8',
      title: 'Annual Day Preparation',
      description: 'Students busy with preparations for Annual Day celebration. Cultural programs, drama, and musical performances planned.',
      date: '2024-02-15',
      type: 'event' as const,
      category: 'Cultural',
    },
    {
      id: '9',
      title: 'Career Guidance Workshop',
      description: 'Three-day career guidance workshop for Class XI and XII students. Industry experts and alumni sharing career insights.',
      date: '2024-02-10',
      type: 'event' as const,
      category: 'Career',
    },
    {
      id: '10',
      title: 'Environmental Conservation Project',
      description: 'School receives Green Award for environmental conservation project. 500+ trees planted and rainwater harvesting implemented.',
      date: '2024-01-25',
      type: 'news' as const,
      category: 'Environment',
    },
    {
      id: '11',
      title: 'Parent-Teacher Meeting',
      description: 'Monthly parent-teacher meeting scheduled for all classes. Discussion on student progress and academic planning.',
      date: '2024-02-03',
      type: 'announcement' as const,
      category: 'Academic',
    },
  ];

  const upcomingEvents = [
    {
      title: 'Republic Day Celebration',
      date: '2024-01-26',
      time: '8:00 AM',
      venue: 'School Ground',
      description: 'Flag hoisting ceremony and cultural programs'
    },
    {
      title: 'Science Exhibition',
      date: '2024-02-05',
      time: '9:00 AM',
      venue: 'Science Block',
      description: 'Student projects and innovations display'
    },
    {
      title: 'Annual Sports Meet',
      date: '2024-02-15',
      time: '7:00 AM',
      venue: 'Sports Ground',
      description: 'Three-day athletic championship'
    },
    {
      title: 'Cultural Night',
      date: '2024-03-01',
      time: '6:00 PM',
      venue: 'Auditorium',
      description: 'Music, dance, and drama performances'
    },
  ];

  const categories = ['all', 'Academic', 'Sports', 'Cultural', 'Infrastructure', 'Environment', 'Career', 'International'];

  const filteredNews = extendedNews.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'announcement': return 'default';
      case 'event': return 'secondary';
      case 'result': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="news-hero-title">
              News & Events
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest news, events, and announcements from JNV Latur community
            </p>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search news and events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                    data-testid="news-search"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48" data-testid="category-filter">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" data-testid="subscribe-button">
                <Bell className="w-4 h-4 mr-2" />
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main News Content */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold" data-testid="latest-news-title">
                    Latest News & Updates
                  </h2>
                  <span className="text-muted-foreground">
                    {filteredNews.length} items found
                  </span>
                </div>

                <div className="space-y-6">
                  {filteredNews.map((item) => (
                    <Card key={item.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <Badge variant={getTypeColor(item.type)} data-testid={`news-type-${item.id}`}>
                              {item.type.toUpperCase()}
                            </Badge>
                            <Badge variant="outline">{item.category}</Badge>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{new Date(item.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3" data-testid={`news-title-${item.id}`}>
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        <Button variant="link" className="p-0 h-auto text-primary" data-testid={`read-more-${item.id}`}>
                          Read More <ExternalLink className="w-3 h-3 ml-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {filteredNews.length === 0 && (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">No Results Found</h3>
                      <p className="text-muted-foreground">
                        Try adjusting your search terms or filter criteria
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Upcoming Events */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span>Upcoming Events</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingEvents.map((event, index) => (
                        <div key={index} className="p-3 border border-border rounded-lg">
                          <h4 className="font-semibold mb-1" data-testid={`event-title-${index}`}>
                            {event.title}
                          </h4>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(event.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{event.time}</span>
                            </div>
                            <p className="text-xs">{event.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Links */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Links</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button variant="ghost" className="w-full justify-start" data-testid="academic-calendar-link">
                        Academic Calendar
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" data-testid="exam-schedule-link">
                        Examination Schedule
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" data-testid="holiday-list-link">
                        Holiday List
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" data-testid="circulars-link">
                        Official Circulars
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" data-testid="photo-gallery-link">
                        Photo Gallery
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Subscription */}
                <Card className="bg-primary text-primary-foreground">
                  <CardHeader>
                    <CardTitle>Stay Updated</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm opacity-90 mb-4">
                      Subscribe to our newsletter to receive the latest updates directly in your inbox.
                    </p>
                    <div className="space-y-3">
                      <Input 
                        placeholder="Enter your email" 
                        className="bg-white text-foreground"
                        data-testid="newsletter-email"
                      />
                      <Button variant="secondary" className="w-full" data-testid="newsletter-subscribe">
                        Subscribe Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Media Contact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium">Public Relations Officer</span>
                        <p className="text-muted-foreground">Mrs. Sunita Patil</p>
                      </div>
                      <div>
                        <span className="font-medium">Email</span>
                        <p className="text-muted-foreground">media@jnvlatur.edu.in</p>
                      </div>
                      <div>
                        <span className="font-medium">Phone</span>
                        <p className="text-muted-foreground">+91-2382-123459</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Archives Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="archives-title">
                News Archives
              </h2>
              <p className="text-lg text-muted-foreground">
                Browse through our comprehensive news and events archive
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Academic Year 2023-24</h3>
                  <p className="text-muted-foreground text-sm mb-4">Latest news and events</p>
                  <Button variant="outline" data-testid="archive-2023">
                    View Archive
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Academic Year 2022-23</h3>
                  <p className="text-muted-foreground text-sm mb-4">Previous year highlights</p>
                  <Button variant="outline" data-testid="archive-2022">
                    View Archive
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Academic Year 2021-22</h3>
                  <p className="text-muted-foreground text-sm mb-4">Historical records</p>
                  <Button variant="outline" data-testid="archive-2021">
                    View Archive
                  </Button>
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
