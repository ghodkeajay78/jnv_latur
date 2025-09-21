import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Camera, Play, Download, Filter, Search } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import PhotoGallery from '@/components/Common/PhotoGallery';
import { useTranslation } from '@/lib/i18n';
import { galleryItems } from '@/data/content';

export default function Gallery() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const extendedGalleryItems = [
    ...galleryItems,
    {
      id: '4',
      title: 'Sports Complex',
      description: 'Modern sports facilities including football ground, basketball court, and athletics track.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      category: 'campus' as const,
    },
    {
      id: '5',
      title: 'Cultural Performance',
      description: 'Students performing traditional dance during annual cultural festival.',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      category: 'cultural' as const,
    },
    {
      id: '6',
      title: 'Hostel Facilities',
      description: 'Clean and comfortable dormitory rooms with study areas.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      category: 'campus' as const,
    },
    {
      id: '7',
      title: 'Science Exhibition',
      description: 'Students showcasing innovative science projects and experiments.',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      category: 'activities' as const,
    },
    {
      id: '8',
      title: 'Annual Sports Meet',
      description: 'Inter-house athletics competition with students participating in various events.',
      image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      category: 'sports' as const,
    },
    {
      id: '9',
      title: 'Independence Day Celebration',
      description: 'Flag hoisting ceremony and patriotic cultural programs.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      category: 'events' as const,
    },
    {
      id: '10',
      title: 'Computer Laboratory',
      description: 'Modern computer lab with latest hardware and software for student learning.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      category: 'campus' as const,
    },
    {
      id: '11',
      title: 'Music Concert',
      description: 'Students performing in the annual music concert showcasing various instruments.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      category: 'cultural' as const,
    },
    {
      id: '12',
      title: 'Graduation Ceremony',
      description: 'Class XII students celebrating their graduation with teachers and parents.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      category: 'events' as const,
    },
  ];

  const videoGallery = [
    {
      id: '1',
      title: 'School Virtual Tour',
      description: 'Complete virtual tour of JNV Latur campus and facilities',
      thumbnail: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      duration: '8:45',
    },
    {
      id: '2',
      title: 'Annual Day Highlights',
      description: 'Best moments from the annual day celebration 2023',
      thumbnail: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      duration: '12:30',
    },
    {
      id: '3',
      title: 'Science Fair 2023',
      description: 'Student innovations and experiments at the science exhibition',
      thumbnail: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      duration: '6:15',
    },
    {
      id: '4',
      title: 'Sports Day Championship',
      description: 'Exciting moments from the inter-house sports competition',
      thumbnail: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      duration: '15:20',
    },
  ];

  const categories = [
    { value: 'all', label: 'All Photos' },
    { value: 'campus', label: 'Campus' },
    { value: 'events', label: 'Events' },
    { value: 'activities', label: 'Activities' },
    { value: 'sports', label: 'Sports' },
    { value: 'cultural', label: 'Cultural' },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? extendedGalleryItems 
    : extendedGalleryItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="gallery-hero-title">
              Photo & Video Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the vibrant life at JNV Latur through our comprehensive collection of photos and videos
            </p>
          </div>
        </section>

        {/* Gallery Navigation */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="photos" className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                  <TabsTrigger value="photos">Photo Gallery</TabsTrigger>
                  <TabsTrigger value="videos">Video Gallery</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="photos">
                {/* Photo Filters */}
                <div className="mb-8">
                  <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((category) => (
                      <Button
                        key={category.value}
                        variant={selectedCategory === category.value ? 'default' : 'outline'}
                        onClick={() => setSelectedCategory(category.value)}
                        data-testid={`filter-${category.value}`}
                        className="text-sm"
                      >
                        {category.label}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Photo Grid */}
                <PhotoGallery items={filteredItems} />

                {/* Load More */}
                <div className="text-center mt-12">
                  <Button size="lg" variant="outline" data-testid="load-more-photos">
                    Load More Photos
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="videos">
                <div className="grid md:grid-cols-2 gap-6">
                  {videoGallery.map((video) => (
                    <Card key={video.id} className="group overflow-hidden">
                      <div className="relative">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          data-testid={`video-thumbnail-${video.id}`}
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="lg" className="rounded-full" data-testid={`play-video-${video.id}`}>
                            <Play className="w-6 h-6" />
                          </Button>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                          {video.duration}
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg mb-2" data-testid={`video-title-${video.id}`}>
                          {video.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{video.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <Button size="lg" variant="outline" data-testid="view-all-videos">
                    View All Videos
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Virtual Tour Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="virtual-tour-title">
                360° Virtual Campus Tour
              </h2>
              <p className="text-lg text-muted-foreground">
                Experience our campus from anywhere with our immersive virtual tour
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-12 text-center">
                  <Camera className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Interactive Virtual Tour</h3>
                  <p className="text-muted-foreground mb-8">
                    Take a comprehensive 360-degree virtual tour of our campus, including classrooms, 
                    laboratories, hostel facilities, sports grounds, and more.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" data-testid="start-virtual-tour">
                      Start Virtual Tour
                    </Button>
                    <Button size="lg" variant="outline" data-testid="download-brochure">
                      <Download className="w-4 h-4 mr-2" />
                      Download Brochure
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="featured-collections-title">
                Featured Collections
              </h2>
              <p className="text-lg text-muted-foreground">
                Specially curated photo collections highlighting important moments and achievements
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
                    alt="Graduation moments collection"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    data-testid="collection-graduation"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Graduation Moments</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Celebrating achievements and milestones of our graduating students
                  </p>
                  <Button variant="link" className="p-0 h-auto">
                    View Collection →
                  </Button>
                </CardContent>
              </Card>

              <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
                    alt="Sports championships collection"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    data-testid="collection-sports"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Sports Championships</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Capturing the spirit of competition and victory in various sports events
                  </p>
                  <Button variant="link" className="p-0 h-auto">
                    View Collection →
                  </Button>
                </CardContent>
              </Card>

              <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
                    alt="Cultural festivals collection"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    data-testid="collection-cultural"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Cultural Festivals</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Vibrant celebrations showcasing the rich cultural diversity of our school
                  </p>
                  <Button variant="link" className="p-0 h-auto">
                    View Collection →
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Gallery Statistics */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2" data-testid="total-photos">500+</div>
                <div className="text-lg opacity-90">Photos</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" data-testid="total-videos">50+</div>
                <div className="text-lg opacity-90">Videos</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" data-testid="total-events">100+</div>
                <div className="text-lg opacity-90">Events Covered</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" data-testid="total-albums">25+</div>
                <div className="text-lg opacity-90">Photo Albums</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
