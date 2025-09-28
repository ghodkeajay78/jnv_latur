import { Link } from 'wouter';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, GraduationCap } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';
import { schoolInfo, contactInfo } from '@/data/content';

export default function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { href: '/about', label: t('nav.about') },
    { href: '/academics', label: t('nav.academics') },
    { href: '/admissions', label: t('nav.admissions') },
    { href: '/faculty', label: t('nav.faculty') },
    { href: '/achievements', label: t('nav.achievements') },
    { href: '/gallery', label: t('nav.gallery') },
  ];

  const academicLinks = [
    { href: '/academics', label: 'Curriculum' },
    { href: '/achievements', label: 'Results' },
    { href: '/resources', label: 'Academic Calendar' },
    { href: '/resources', label: 'Examination' },
    { href: '/resources', label: 'Resources' },
    { href: '/resources', label: 'Downloads' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="w-4/5 mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="JNV Latur Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold text-sm">JNV Latur</h3>
                <p className="text-xs text-muted-foreground">Excellence in Education</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Nurturing young minds since {schoolInfo.established}, {t('school.name')} is committed to providing quality education and holistic development.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs hover:bg-primary/80 transition-colors"
                  data-testid={`social-${social.label.toLowerCase()}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-2.5 h-2.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">Quick Links</h3>
            <div className="space-y-1.5 text-xs">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Academic Links */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">Academics</h3>
            <div className="space-y-1.5 text-xs">
              {academicLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`footer-academic-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">Contact Info</h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-start space-x-2">
                <MapPin className="text-primary mt-0.5 w-3 h-3" />
                <span className="text-muted-foreground">
                  {contactInfo.address.village}<br />
                  {contactInfo.address.district}, {contactInfo.address.state}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="text-primary w-3 h-3" />
                <span className="text-muted-foreground">{contactInfo.office}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="text-primary w-3 h-3" />
                <span className="text-muted-foreground">{contactInfo.email.principal}</span>
              </div>
            </div>

            {/* QR Code for Location */}
            <div className="mt-4 flex justify-center">
              <div className="text-center">
                <img 
                  src="/images/GoogleMapsQRCode.jpg" 
                  alt="Google Maps QR Code for JNV Latur Location"
                  className="w-16 h-16 rounded border border-border"
                />
                <p className="text-xs text-muted-foreground mt-1">Scan for directions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="w-4/5 mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
            <p>&copy; 2024 {t('school.name')} Latur. All rights reserved.</p>
            <div className="flex space-x-3 mt-1.5 md:mt-0">
              <Link href="/policies" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/policies" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <a href="#" className="hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
