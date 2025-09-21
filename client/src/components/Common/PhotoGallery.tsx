import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { GalleryItem } from '@/types';

interface PhotoGalleryProps {
  items: GalleryItem[];
  className?: string;
}

export default function PhotoGallery({ items, className = '' }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {items.map((item) => (
        <Dialog key={item.id}>
          <DialogTrigger asChild>
            <Card className="group cursor-pointer overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    data-testid={`gallery-image-${item.id}`}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2" data-testid={`gallery-title-${item.id}`}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <div className="space-y-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                data-testid={`lightbox-image-${item.id}`}
              />
              <div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {item.date && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Date: {new Date(item.date).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
