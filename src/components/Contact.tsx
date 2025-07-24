import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Phone, Send, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'anirudh.achu1434@gmail.com',
      link: 'mailto:anirudh.achu1434@gmail.com',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/aniruthjs',
      link: 'https://github.com/aniruthjs',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/anirudhachu',
      link: 'https://linkedin.com/in/anirudhachu',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    }
  ];

  const platforms = [
    {
      name: 'HackerRank',
      url: 'https://hackerrank.com/profile/anirudh_achugat1',
      description: '5-Star SQL Badge',
      icon: '🏆'
    },
    {
      name: 'Tableau Public',
      url: 'https://public.tableau.com/profile/yourprofile',
      description: 'Data Visualizations',
      icon: '📊'
    },
    {
      name: 'Kaggle',
      url: 'https://kaggle.com/yourprofile',
      description: 'Data Science Projects',
      icon: '🔬'
    },
    {
      name: 'Power BI',
      url: '#',
      description: 'BI Dashboards',
      icon: '📈'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how data analytics can drive your business forward
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, data challenges, 
                or potential collaborations. Feel free to reach out through any of the 
                channels below or send me a message directly.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <div key={index} className="glass-card p-6 rounded-xl hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${method.bgColor}`}>
                      <method.icon className={`h-6 w-6 ${method.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{method.label}</h4>
                      <p className="text-muted-foreground">{method.value}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass-card border-border/50"
                      onClick={() => window.open(method.link, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Professional Platforms */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Professional Platforms</h4>
              <div className="grid grid-cols-2 gap-4">
                {platforms.map((platform, index) => (
                  <div 
                    key={index} 
                    className="glass-card p-4 rounded-xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                    onClick={() => window.open(platform.url, '_blank')}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2">{platform.icon}</div>
                      <h5 className="font-medium text-sm">{platform.name}</h5>
                      <p className="text-xs text-muted-foreground">{platform.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass-card border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="glass-card border-border/50"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="glass-card border-border/50"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="glass-card border-border/50"
                    placeholder="Project discussion, collaboration, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="glass-card border-border/50 min-h-[120px]"
                    placeholder="Tell me about your project or how I can help..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="gradient-btn text-primary-foreground w-full rounded-xl py-3"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground">
            © 2024 Data Analyst Portfolio. Built with passion for data and analytics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;