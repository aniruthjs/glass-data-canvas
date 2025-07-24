import React from 'react';
import { Download, Linkedin, Mail, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { FloatingElement, ParticleField } from '@/components/ui/floating-elements';

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Data_Analyst_Resume.pdf'; // Path relative to public folder
    link.download = 'Data_Analyst_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm {'anirudh achugatla'}, a{' '}
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
                  onClick={() => window.open('https://linkedin.com/in/anirudhachu', '_blank')}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                
                <a
                  href="mailto:anirudh.achu1434@gmail.com"
                  className="glass-card h-12 w-12 rounded-xl hover:text-primary flex items-center justify-center border border-input bg-background shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  aria-label="Send email"
                  tabIndex={0}
                >
                  <Mail className="h-5 w-5" />
                </a>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="glass-card h-12 w-12 rounded-xl hover:text-primary"
                  onClick={() => window.open('https://github.com/aniruthjs', '_blank')}
                >
                  <Github className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Image/Animation */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <ParticleField />
              
              <FloatingElement duration={4}>
                  <div className="w-64 h-64 rounded-full bg-gradient-primary flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
                    <img
                      src="/profile.jpg"
                      alt="Profile picture"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  </div>
                  
                  {/* Animated Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse"></div>
                </div>
              </FloatingElement>
              
              {/* Floating elements with enhanced animations */}
              <FloatingElement delay={0.5} className="absolute -top-4 -right-4">
                <div className="w-16 h-16 glass-card rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-2xl">📊</span>
                </div>
              </FloatingElement>
              
              <FloatingElement delay={1} className="absolute -bottom-4 -left-4">
                <div className="w-16 h-16 glass-card rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-2xl">📈</span>
                </div>
              </FloatingElement>
              
              <FloatingElement delay={1.5} className="absolute top-1/2 -left-8">
                <div className="w-12 h-12 glass-card rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-xl">💡</span>
                </div>
              </FloatingElement>

              {/* Stats Cards */}
              <FloatingElement delay={2} className="absolute top-8 -left-16">
                <div className="glass-card px-4 py-2 rounded-lg text-center hover:scale-105 transition-transform">
                  <div className="text-lg font-bold gradient-text">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
              </FloatingElement>
              
              <FloatingElement delay={2.5} className="absolute bottom-8 -right-16">
                <div className="glass-card px-4 py-2 rounded-lg text-center hover:scale-105 transition-transform">
                  <div className="text-lg font-bold gradient-text">
                    <AnimatedCounter end={3} suffix="+" />
                  </div>
                  <div className="text-xs text-muted-foreground">Years Exp</div>
                </div>
              </FloatingElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;