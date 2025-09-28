import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu, Phone, Mail, GraduationCap, ChevronDown } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';
import LanguageToggle from '@/components/Common/LanguageToggle';
import { schoolInfo } from '@/data/content';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useTranslation();

  const navigationItems = [
    { href: '/', label: t('nav.home') },
    {
      label: t('nav.about'),
      items: [
        { href: '/about', label: 'History & Mission' },
        { href: '/management', label: t('nav.management') },
      ],
    },
    {
      label: t('nav.academics'),
      items: [
        { href: '/academics', label: 'Curriculum' },
        { href: '/faculty', label: t('nav.faculty') },
      ],
    },
    {
      label: t('nav.campus'),
      items: [
        { href: '/campus', label: 'Infrastructure' },
        { href: '/hostel', label: t('nav.hostel') },
      ],
    },
    { href: '/admissions', label: t('nav.admissions') },
    { href: '/achievements', label: t('nav.achievements') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      {/* Main Navigation */}
      <nav className="w-4/5 mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo and School Name */}
          <Link href="/" className="flex items-center space-x-3" data-testid="school-logo">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="JNV Latur Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">{t('school.name')}</h1>
              <p className="text-sm text-muted-foreground">{t('school.location')}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.items ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary font-medium transition-colors text-base">
                      {item.label}
                      <ChevronDown className="ml-1 h-3 w-3" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48">
                      {item.items.map((subItem, subIndex) => (
                        <DropdownMenuItem key={subIndex} asChild>
                          <Link href={subItem.href} className="w-full cursor-pointer">
                            {subItem.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href!}
                    className={`text-foreground hover:text-primary font-medium transition-colors text-base ${
                      location === item.href ? 'text-primary' : ''
                    }`}
                    data-testid={`nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="ml-3">
              <LanguageToggle />
            </div>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" data-testid="mobile-menu-button">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col space-y-3 mt-4">
                {navigationItems.map((item, index) => (
                  <div key={index}>
                    {item.items ? (
                      <>
                        <div className="font-medium text-foreground py-1.5 text-base">{item.label}</div>
                        <div className="ml-3 space-y-1.5">
                          {item.items.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="block py-1.5 text-muted-foreground hover:text-primary text-sm"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href!}
                        className="block py-1.5 text-foreground hover:text-primary font-medium text-base"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t">
                  <LanguageToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
