import React from 'react';
import { Download, Linkedin, Mail, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleDownloadResume = () => {
    // In a real application, this would download the actual resume
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual resume URL
    link.download = 'Data_Analyst_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm a{' '}
                <span className="gradient-text">Data Analyst</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Passionate about transforming raw data into actionable insights. 
                I specialize in SQL, Python, Power BI, and Tableau to help 
                businesses make data-driven decisions.
              </p>
            </div>

            {/* About Me */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 gradient-text">About Me</h3>
              <p className="text-muted-foreground leading-relaxed">
                With a strong foundation in data analysis and visualization, I excel at 
                uncovering patterns and trends that drive business growth. My expertise 
                spans across database management, statistical analysis, and creating 
                compelling visual narratives that make complex data accessible to stakeholders.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={handleDownloadResume}
                className="gradient-btn text-primary-foreground px-6 py-3 rounded-xl font-medium"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="glass-card h-12 w-12 rounded-xl hover:text-primary"
                  onClick={() => window.open('https://linkedin.com/in/yourprofile', '_blank')}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="glass-card h-12 w-12 rounded-xl hover:text-primary"
                  onClick={() => window.open('mailto:your.email@example.com')}
                >
                  <Mail className="h-5 w-5" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="glass-card h-12 w-12 rounded-xl hover:text-primary"
                  onClick={() => window.open('https://github.com/yourprofile', '_blank')}
                >
                  <Github className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Image/Animation */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 glass-card rounded-full flex items-center justify-center float-animation">
                <div className="w-64 h-64 rounded-full bg-gradient-primary flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary-foreground">DA</div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 glass-card rounded-xl flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 glass-card rounded-xl flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 glass-card rounded-lg flex items-center justify-center">
                <span className="text-xl">💡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;