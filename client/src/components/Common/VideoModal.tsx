import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title: string;
}

export default function VideoModal({ isOpen, onClose, videoSrc, title }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current && videoRef.current.muted) {
      videoRef.current.muted = false;
    }
  };

  useEffect(() => {
    if (isOpen && videoRef.current) {
      // Try to auto-play with sound when modal opens
      videoRef.current.play().catch((error) => {
        console.log('Autoplay with sound prevented:', error);
        // If unmuted autoplay fails, try muted autoplay as fallback
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch((fallbackError) => {
            console.log('Muted autoplay also prevented:', fallbackError);
          });
        }
      });
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm">
      <div className="relative w-[90vw] max-w-4xl h-[60vh] max-h-[600px] bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header with close button */}
        <div className="flex items-center justify-between p-4 bg-gray-50 border-b">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Close video"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Video container */}
        <div className="relative w-full h-[calc(100%-65px)] bg-black">
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            controls
            autoPlay
            loop
            onClick={handleVideoClick}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
