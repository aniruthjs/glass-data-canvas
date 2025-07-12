import React from 'react';
import { Star, Trophy, Target, TrendingUp, Award, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: '5-Star SQL Badge',
      platform: 'HackerRank',
      description: 'Achieved the highest proficiency level in SQL problem solving, demonstrating mastery of complex queries and database optimization.',
      icon: Star,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      stats: '5/5 Stars',
      details: [
        'Solved 50+ advanced SQL challenges',
        'Top 5% globally in SQL assessments',
        'Perfect score in complex query optimization',
        'Expert in window functions and CTEs'
      ]
    },
    {
      id: 2,
      title: 'Data Analysis Excellence',
      platform: 'Professional Projects',
      description: 'Consistently delivered high-impact data analysis projects that drove business decisions and improved operational efficiency.',
      icon: TrendingUp,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      stats: '95% Success Rate',
      details: [
        'Improved business KPIs by 25% on average',
        'Reduced data processing time by 40%',
        'Created 15+ automated reporting solutions',
        'Mentored 3 junior analysts'
      ]
    },
    {
      id: 3,
      title: 'Technical Leadership',
      platform: 'Team Achievements',
      description: 'Led cross-functional teams in implementing data-driven solutions and establishing best practices for data analysis.',
      icon: Trophy,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      stats: '3 Teams Led',
      details: [
        'Established data quality standards',
        'Implemented automated testing protocols',
        'Reduced report generation time by 60%',
        'Trained team on advanced analytics tools'
      ]
    },
    {
      id: 4,
      title: 'Innovation & Impact',
      platform: 'Business Results',
      description: 'Developed innovative analytical approaches that generated significant business value and competitive advantages.',
      icon: Zap,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      stats: '$500K+ Value',
      details: [
        'Identified cost-saving opportunities worth $500K+',
        'Developed predictive models with 90% accuracy',
        'Created real-time dashboards for C-suite',
        'Optimized customer acquisition strategies'
      ]
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '25+', icon: Target },
    { label: 'SQL Problems Solved', value: '100+', icon: Star },
    { label: 'Dashboards Created', value: '40+', icon: TrendingUp },
    { label: 'Years Experience', value: '3+', icon: Award }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognized accomplishments and measurable impact in data analysis and business intelligence
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Detailed Achievements */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className="glass-card border-0 hover:scale-[1.02] transition-transform duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-xl ${achievement.bgColor} flex-shrink-0`}>
                    <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{achievement.title}</h3>
                      <span className="skill-badge text-xs">{achievement.stats}</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">
                      {achievement.platform}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {achievement.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {achievement.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recognition Section */}
        <div className="mt-16">
          <div className="glass-card p-8 rounded-2xl text-center">
            <Trophy className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Professional Recognition</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Consistently recognized for analytical excellence, technical expertise, and ability to 
              translate complex data insights into actionable business strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="skill-badge">Top Performer</span>
              <span className="skill-badge">Technical Excellence Award</span>
              <span className="skill-badge">Innovation Leader</span>
              <span className="skill-badge">Team Player</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;