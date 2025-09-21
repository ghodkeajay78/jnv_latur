import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import ContactForm from '@/components/Common/ContactForm';
import { useTranslation } from '@/lib/i18n';
import { contactInfo } from '@/data/content';

export default function Contact() {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      items: [
        { label: 'Principal Office', value: contactInfo.principal },
        { label: 'General Office', value: contactInfo.office },
        { label: 'Admissions', value: contactInfo.admissions },
      ],
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      items: [
        { label: 'General Inquiries', value: contactInfo.email.general },
        { label: 'Principal', value: contactInfo.email.principal },
        { label: 'Admissions', value: contactInfo.email.admissions },
      ],
    },
    {
      icon: MapPin,
      title: 'Address',
      items: [
        { label: 'School Address', value: `${contactInfo.address.street}, ${contactInfo.address.village}` },
        { label: 'Location', value: `${contactInfo.address.taluka}, ${contactInfo.address.district}` },
        { label: 'State & PIN', value: `${contactInfo.address.state} - ${contactInfo.address.pincode}` },
      ],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      items: [
        { label: 'Monday - Friday', value: contactInfo.hours.weekdays },
        { label: 'Saturday', value: contactInfo.hours.saturday },
        { label: 'Sunday', value: contactInfo.hours.sunday },
      ],
    },
  ];

  const departmentContacts = [
    {
      department: 'Principal\'s Office',
      contact: 'Dr. Rajesh Sharma',
      phone: contactInfo.principal,
      email: contactInfo.email.principal,
      timing: 'Mon-Fri: 9:00 AM - 5:00 PM',
    },
    {
      department: 'Vice Principal\'s Office',
      contact: 'Mrs. Sunita Patil',
      phone: '+91-2382-123460',
      email: 'vp@jnvlatur.edu.in',
      timing: 'Mon-Fri: 9:00 AM - 4:00 PM',
    },
    {
      department: 'Admission Office',
      contact: 'Mr. Anil Kumar',
      phone: contactInfo.admissions,
      email: contactInfo.email.admissions,
      timing: 'Mon-Sat: 9:00 AM - 3:00 PM',
    },
    {
      department: 'Academic Office',
      contact: 'Mrs. Priya Sharma',
      phone: '+91-2382-123461',
      email: 'academic@jnvlatur.edu.in',
      timing: 'Mon-Fri: 8:30 AM - 4:30 PM',
    },
    {
      department: 'Hostel Warden (Boys)',
      contact: 'Mr. Ramesh Patil',
      phone: '+91-2382-123462',
      email: 'boyshostel@jnvlatur.edu.in',
      timing: 'Available 24/7',
    },
    {
      department: 'Hostel Warden (Girls)',
      contact: 'Mrs. Kavita Sharma',
      phone: '+91-2382-123463',
      email: 'girlshostel@jnvlatur.edu.in',
      timing: 'Available 24/7',
    },
  ];

  const emergencyContacts = [
    {
      service: 'Medical Emergency',
      number: '+91-2382-123464',
      availability: '24/7',
    },
    {
      service: 'Security Office',
      number: '+91-2382-123465',
      availability: '24/7',
    },
    {
      service: 'Transport Helpline',
      number: '+91-2382-123466',
      availability: 'Mon-Sat: 6:00 AM - 8:00 PM',
    },
  ];

  const socialMedia = [
    { platform: 'Facebook', handle: '@jnvlatur', url: '#' },
    { platform: 'Twitter', handle: '@jnvlatur_official', url: '#' },
    { platform: 'Instagram', handle: '@jnvlatur', url: '#' },
    { platform: 'YouTube', handle: 'JNV Latur Official', url: '#' },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="contact-hero-title">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with us for any queries, information, or assistance. We're here to help you.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <method.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span data-testid={`contact-method-${index}`}>{method.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {method.items.map((item, itemIndex) => (
                        <div key={itemIndex}>
                          <div className="font-medium text-sm">{item.label}</div>
                          <div className="text-muted-foreground text-sm" data-testid={`contact-item-${index}-${itemIndex}`}>
                            {item.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>

              {/* Map and Location Info */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>Location</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Complete Address</h4>
                        <p className="text-muted-foreground">
                          {contactInfo.address.street}<br />
                          {contactInfo.address.village}<br />
                          {contactInfo.address.taluka}<br />
                          {contactInfo.address.district}, {contactInfo.address.state}<br />
                          PIN: {contactInfo.address.pincode}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Directions</h4>
                        <p className="text-muted-foreground text-sm">
                          Located 15 km from Latur city center on the Latur-Pune highway. 
                          Regular bus service available from Latur bus stand.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Interactive Map Placeholder */}
                <Card>
                  <CardContent className="p-0">
                    <div className="h-64 bg-muted rounded-lg flex items-center justify-center" data-testid="map-placeholder">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">Interactive Map</p>
                        <p className="text-sm text-muted-foreground">Google Maps integration</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="department-contacts-title">
                Department Contacts
              </h2>
              <p className="text-lg text-muted-foreground">
                Direct contact information for specific departments and offices
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departmentContacts.map((dept, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3" data-testid={`dept-name-${index}`}>
                      {dept.department}
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium">Contact Person:</span>
                        <p className="text-muted-foreground">{dept.contact}</p>
                      </div>
                      <div>
                        <span className="font-medium">Phone:</span>
                        <p className="text-muted-foreground">{dept.phone}</p>
                      </div>
                      <div>
                        <span className="font-medium">Email:</span>
                        <p className="text-muted-foreground">{dept.email}</p>
                      </div>
                      <div>
                        <span className="font-medium">Timing:</span>
                        <p className="text-muted-foreground">{dept.timing}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="emergency-contacts-title">
                Emergency Contacts
              </h2>
              <p className="text-lg text-muted-foreground">
                Important contact numbers for emergency situations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {emergencyContacts.map((contact, index) => (
                <Card key={index} className="border-red-200 bg-red-50">
                  <CardContent className="p-6 text-center">
                    <Phone className="w-8 h-8 text-red-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2" data-testid={`emergency-service-${index}`}>
                      {contact.service}
                    </h3>
                    <p className="text-lg font-bold text-red-600 mb-1">{contact.number}</p>
                    <p className="text-sm text-muted-foreground">{contact.availability}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media & Follow Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="social-media-title">
                Follow Us
              </h2>
              <p className="text-lg text-muted-foreground">
                Stay connected with us on social media for latest updates and news
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {socialMedia.map((social, index) => (
                <Card key={index} className="w-48">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Send className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1" data-testid={`social-platform-${index}`}>
                      {social.platform}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{social.handle}</p>
                    <a href={social.url} className="text-primary text-sm hover:underline">
                      Follow →
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Newsletter Signup */}
            <Card className="max-w-2xl mx-auto bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <Send className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
                <p className="mb-6 opacity-90">
                  Subscribe to our newsletter to receive the latest news, events, and announcements directly in your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg text-foreground"
                    data-testid="newsletter-email-input"
                  />
                  <button className="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors" data-testid="newsletter-subscribe-btn">
                    Subscribe
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
