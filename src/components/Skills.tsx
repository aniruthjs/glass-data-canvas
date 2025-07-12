import React from 'react';
import { Database, FileSpreadsheet, BarChart3, TrendingUp, Code, Search, Zap, PieChart } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const Skills = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver();
  
  const skillCategories = [
    {
      title: 'Database & Analytics',
      icon: Database,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      skills: [
        { name: 'SQL', level: 95, description: 'Advanced querying, optimization, stored procedures' },
        { name: 'PostgreSQL', level: 90, description: 'Database design, indexing, performance tuning' },
        { name: 'MySQL', level: 85, description: 'Data modeling, complex joins, triggers' }
      ]
    },
    {
      title: 'Data Visualization',
      icon: BarChart3,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      skills: [
        { name: 'Power BI', level: 92, description: 'DAX, data modeling, interactive dashboards' },
        { name: 'Tableau', level: 88, description: 'Advanced charts, calculated fields, storytelling' },
        { name: 'Excel', level: 90, description: 'Pivot tables, VBA, advanced formulas' }
      ]
    },
    {
      title: 'Programming & Analysis',
      icon: Code,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      skills: [
        { name: 'Python', level: 85, description: 'Pandas, NumPy, data analysis, automation' },
        { name: 'R', level: 75, description: 'Statistical analysis, ggplot2, data mining' },
        { name: 'Statistical Analysis', level: 88, description: 'Hypothesis testing, regression, correlation' }
      ]
    },
    {
      title: 'Data Processing',
      icon: Zap,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      skills: [
        { name: 'Data Cleaning', level: 95, description: 'ETL processes, data quality, validation' },
        { name: 'Data Manipulation', level: 92, description: 'Transformation, aggregation, joining' },
        { name: 'EDA', level: 90, description: 'Exploratory data analysis, pattern recognition' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20" ref={elementRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skill set spanning data analysis, visualization, and business intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="glass-card p-8 rounded-2xl hover-lift group"
              style={{ animationDelay: `${categoryIndex * 300}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl ${category.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className={`h-8 w-8 ${category.color}`} />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-foreground">{skill.name}</h4>
                      <span className="text-sm font-medium text-primary">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-2 rounded-full bg-gradient-primary transition-all duration-1000 ease-out"
                        style={{ 
                          width: hasIntersected ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 200}ms`
                        }}
                      />
                    </div>
                    
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Data Mining', 'Statistical Modeling', 'Business Intelligence',
              'ETL Processes', 'Data Warehousing', 'Predictive Analytics',
              'A/B Testing', 'Data Storytelling', 'KPI Development',
              'Dashboard Design', 'Report Automation', 'Data Governance'
            ].map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;