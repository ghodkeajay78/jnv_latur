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
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <GraduationCap className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold">JNV Latur</h3>
                <p className="text-xs text-muted-foreground">Excellence in Education</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Nurturing young minds since {schoolInfo.established}, {t('school.name')} is committed to providing quality education and holistic development.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm hover:bg-primary/80 transition-colors"
                  data-testid={`social-${social.label.toLowerCase()}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
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
            <h3 className="font-semibold mb-4">Academics</h3>
            <div className="space-y-2 text-sm">
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
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="text-primary mt-1 w-4 h-4" />
                <span className="text-muted-foreground">
                  {contactInfo.address.village}<br />
                  {contactInfo.address.district}, {contactInfo.address.state}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="text-primary w-4 h-4" />
                <span className="text-muted-foreground">{contactInfo.office}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="text-primary w-4 h-4" />
                <span className="text-muted-foreground">{contactInfo.email.principal}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 {t('school.name')} Latur. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
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
