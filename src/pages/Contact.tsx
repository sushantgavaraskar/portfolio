import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Clock,
  MessageSquare
} from 'lucide-react';
import GitHubIcon from '@/components/icons/GitHubIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="hero-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Let's discuss your next project or collaboration opportunity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <Card className="p-8 card-hover">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <Mail className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:sushantgavaraskar18@gmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors animated-underline"
                    >
                      sushantgavaraskar18@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <Phone className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a 
                      href="tel:+919322930740"
                      className="text-muted-foreground hover:text-accent transition-colors animated-underline"
                    >
                      +91 9322930740
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Pune, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <Clock className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Response Time</h3>
                    <p className="text-muted-foreground">
                      Usually within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-semibold mb-4">Connect with me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/sushantgavaraskar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-muted/20 hover:bg-accent/20 hover:text-accent rounded-lg transition-colors"
                  >
                    <GitHubIcon size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sushant18x"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-muted/20 hover:bg-accent/20 hover:text-accent rounded-lg transition-colors"
                  >
                    <LinkedInIcon size={20} />
                  </a>
                  <a
                    href="mailto:sushantgavaraskar18@gmail.com"
                    className="p-3 bg-muted/20 hover:bg-accent/20 hover:text-accent rounded-lg transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </Card>

            {/* Availability Card */}
            <Card className="p-6 mt-8 card-hover bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="font-semibold">Available for Work</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                I'm currently open to backend-focused internships and freelance opportunities.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="p-8 card-hover">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="text-accent" size={24} />
                <h2 className="text-2xl font-bold">Send me a message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-2 min-h-[120px]"
                    placeholder="Tell me about your project, collaboration ideas, or any questions you have..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full glow-effect"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-muted/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> This form is for demonstration purposes. 
                  In a real implementation, you would integrate with a service like 
                  EmailJS, Formspree, or your own backend to handle form submissions.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="p-8 mt-16 card-hover">
          <h2 className="text-2xl font-bold text-center mb-8">
            <span className="hero-gradient">Frequently Asked Questions</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2 text-accent">What type of projects do you work on?</h3>
              <p className="text-muted-foreground text-sm">
                I specialize in backend development, API design, database optimization, 
                and full-stack applications. I'm particularly interested in security tools, 
                automation systems, and scalable web applications.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2 text-accent">Are you available for remote work?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! I'm open to remote internships and freelance projects. 
                I'm comfortable working across different time zones and have 
                experience with remote collaboration tools.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2 text-accent">What's your typical response time?</h3>
              <p className="text-muted-foreground text-sm">
                I usually respond to emails and messages within 24 hours. 
                For urgent matters, feel free to mention it in your message 
                and I'll prioritize accordingly.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2 text-accent">Do you offer consultation services?</h3>
              <p className="text-muted-foreground text-sm">
                Absolutely! I can help with technical architecture decisions, 
                code reviews, technology stack selection, and problem-solving 
                for existing projects.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;