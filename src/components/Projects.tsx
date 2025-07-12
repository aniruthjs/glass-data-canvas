import React from 'react';
import { ExternalLink, Github, Database, BarChart3, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Sales Analytics with SQL',
      description: 'Comprehensive sales data analysis using advanced SQL queries, window functions, and CTEs to identify trends and optimize business performance.',
      technologies: ['SQL', 'PostgreSQL', 'Data Cleaning', 'Business Intelligence'],
      icon: Database,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      features: [
        'Complex JOIN operations across multiple tables',
        'Window functions for trend analysis',
        'Performance optimization with indexing',
        'Automated reporting queries'
      ],
      liveDemo: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Interactive Dashboard - Power BI',
      description: 'Dynamic business intelligence dashboard showcasing KPIs, sales metrics, and customer analytics with real-time data connections.',
      technologies: ['Power BI', 'DAX', 'Data Modeling', 'ETL'],
      icon: BarChart3,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      features: [
        'Real-time data refresh from multiple sources',
        'Advanced DAX calculations',
        'Interactive drill-down capabilities',
        'Mobile-responsive design'
      ],
      liveDemo: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Customer Insights - Tableau',
      description: 'Comprehensive customer behavior analysis with predictive models and segmentation using Tableau\'s advanced visualization capabilities.',
      technologies: ['Tableau', 'Python', 'Statistical Analysis', 'Predictive Modeling'],
      icon: TrendingUp,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      features: [
        'Customer segmentation analysis',
        'Predictive churn modeling',
        'Geographic performance mapping',
        'Cohort analysis dashboards'
      ],
      liveDemo: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my data analysis projects showcasing expertise in SQL, Power BI, and Tableau
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className="glass-card border-0 hover:scale-[1.02] transition-transform duration-300">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                {/* Project Info */}
                <div className="space-y-6">
                  <CardHeader className="p-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${project.bgColor}`}>
                        <project.icon className={`h-8 w-8 ${project.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="skill-badge text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-0">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-foreground">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4">
                      <Button 
                        className="gradient-btn text-primary-foreground rounded-xl"
                        onClick={() => window.open(project.liveDemo, '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </Button>
                      <Button 
                        variant="outline" 
                        className="glass-card border-border/50 rounded-xl"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </div>

                {/* Project Visual */}
                <div className="flex items-center justify-center">
                  <div className="w-full h-64 glass-card rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-primary opacity-10" />
                    <div className="text-center z-10">
                      <project.icon className={`h-20 w-20 ${project.color} mx-auto mb-4`} />
                      <h4 className="text-lg font-semibold">{project.title}</h4>
                      <p className="text-sm text-muted-foreground mt-2">Interactive Demo Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;