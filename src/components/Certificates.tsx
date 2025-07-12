import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'SQL Certification',
      issuer: 'HackerRank',
      date: '2024',
      description: 'Advanced SQL certification covering complex queries, joins, window functions, and database optimization.',
      skills: ['Advanced SQL', 'Query Optimization', 'Database Design', 'Performance Tuning'],
      status: 'Verified',
      credentialUrl: '#',
      icon: '🏆',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10'
    },
    {
      id: 2,
      title: 'Data Analyst Simulator',
      issuer: 'Forge',
      date: '2024',
      description: 'Comprehensive data analysis program simulating real-world business scenarios and analytical challenges.',
      skills: ['Data Analysis', 'Business Intelligence', 'Statistical Analysis', 'Data Visualization'],
      status: 'Completed',
      credentialUrl: '#',
      icon: '📊',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    }
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Certificates</span> & Training
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <Card key={cert.id} className="glass-card border-0 hover:scale-[1.02] transition-transform duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-xl ${cert.bgColor} text-4xl`}>
                      {cert.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold mb-1">{cert.title}</CardTitle>
                      <p className="text-muted-foreground font-medium">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-green-400 font-medium">{cert.status}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">Completed in {cert.date}</span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Skills Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="skill-badge text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <Button 
                  className="gradient-btn text-primary-foreground rounded-xl w-full"
                  onClick={() => window.open(cert.credentialUrl, '_blank')}
                >
                  <Award className="mr-2 h-4 w-4" />
                  View Credential
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Learning */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Committed to staying current with the latest data analysis trends, tools, and methodologies 
              through ongoing professional development and hands-on practice.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="skill-badge">Online Courses</span>
              <span className="skill-badge">Industry Webinars</span>
              <span className="skill-badge">Technical Workshops</span>
              <span className="skill-badge">Data Science Communities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;