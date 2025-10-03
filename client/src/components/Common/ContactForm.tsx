import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from '@/lib/i18n';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // For static hosting, we'll simulate form submission
      // In production, you could integrate with services like Formspree, Netlify Forms, or EmailJS
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      toast({
        title: t('contact.form.success.title'),
        description: t('contact.form.success.description'),
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: t('contact.form.error.title'),
        description: t('contact.form.error.description'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{t('contact.form.title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">{t('contact.form.fields.fullName')}</Label>
              <Input
                id="name"
                type="text"
                placeholder={t('contact.form.placeholders.fullName')}
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                data-testid="contact-form-name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t('contact.form.fields.email')}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t('contact.form.placeholders.email')}
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                data-testid="contact-form-email"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">{t('contact.form.fields.phone')}</Label>
              <Input
                id="phone"
                type="tel"
                placeholder={t('contact.form.placeholders.phone')}
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
                data-testid="contact-form-phone"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">{t('contact.form.fields.subject')}</Label>
              <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                <SelectTrigger data-testid="contact-form-subject">
                  <SelectValue placeholder={t('contact.form.placeholders.subject')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admissions">{t('contact.form.subjects.admissions')}</SelectItem>
                  <SelectItem value="academic">{t('contact.form.subjects.academic')}</SelectItem>
                  <SelectItem value="hostel">{t('contact.form.subjects.hostel')}</SelectItem>
                  <SelectItem value="general">{t('contact.form.subjects.general')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{t('contact.form.fields.message')}</Label>
            <Textarea
              id="message"
              rows={6}
              placeholder={t('contact.form.placeholders.message')}
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              required
              data-testid="contact-form-message"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            data-testid="contact-form-submit"
            className="w-full md:w-auto"
          >
            {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
