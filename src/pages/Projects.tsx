import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Filter } from 'lucide-react';
import GitHubIcon from '@/components/icons/GitHubIcon';

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: string;
  github: string;
  live: string | null;
  featured?: boolean;
};

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'TransactIQ',
      description: 'OCR + NLP pipeline to classify financial transactions with 90%+ accuracy using advanced machine learning techniques.',
      tech: ['Django', 'PostgreSQL', 'React', 'BERT', 'TesseractOCR'],
      category: 'ml',
      github: 'https://github.com/sushantgavaraskar',
      live: null,
      // featured: true,
    },
    {
      id: 2,
      title: 'Digital Footprint Cleaner API',
      description: 'Privacy-focused API that scans breached data, generates sanitized PDF reports, and sends them via email with queue management.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'BullMQ', 'Nodemailer', 'Swagger'],
      category: 'backend',
      github: 'https://github.com/sushantgavaraskar',
      live: null,
      // featured: true,
    },
    {
      id: 3,
      title: 'SmartShort – AI URL Shortener',
      description: 'Real-time URL shortener with Google OAuth, analytics dashboard, and role-based access control.',
      tech: ['Next.js', 'Express.js', 'MongoDB', 'Socket.IO', 'NextAuth.js'],
      category: 'fullstack',
      github: 'https://github.com/sushantgavaraskar',
      live: null,
      // featured: true,
    },
    {
      id: 4,
      title: 'Rent & Society Management System',
      description: 'Role-based system for managing rent, dues, reminders, and user notifications with JWT authentication.',
      tech: ['Node.js', 'MongoDB', 'React', 'JWT'],
      category: 'fullstack',
      github: 'https://github.com/sushantgavaraskar',
      live: null,
    },
    {
      id: 5,
      title: 'VulnWatchdog – Dependency Scanner',
      description: 'Full-stack platform that scans CVEs in 10+ dependency file types with SSE, webhooks, and role-based authentication.',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Next.js'],
      category: 'security',
      github: 'https://github.com/sushantgavaraskar',
      live: null,
      // featured: true,
    },
    {
      id: 6,
      title: 'Workflow Guard – Automation Engine',
      description: 'Rule-based engine to automate workflows via cron jobs, WebSockets, and real-time logging.',
      tech: ['Node.js', 'Express', 'SQLite', 'React', 'JSON Logic', 'WebSockets'],
      category: 'automation',
      github: 'https://github.com/sushantgavaraskar',
      live: null,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ml', label: 'ML/AI' },
    { id: 'security', label: 'Security' },
    { id: 'automation', label: 'Automation' },
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      'Node.js': 'bg-green-500/20 text-green-400 border-green-500/30',
      'React': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Python': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'MongoDB': 'bg-green-600/20 text-green-400 border-green-600/30',
      'PostgreSQL': 'bg-blue-600/20 text-blue-400 border-blue-600/30',
      'Express.js': 'bg-gray-500/20 text-gray-300 border-gray-500/30',
    };
    return colors[tech] || 'tech-badge';
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="hero-gradient">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Building scalable solutions that solve real-world problems
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Filter className="text-muted-foreground mr-2" size={20} />
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedFilter === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter(category.id)}
                className={selectedFilter === category.id ? 'glow-effect' : ''}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`relative p-6 card-hover h-full flex flex-col ${project.featured ? 'gradient-border' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
                {project.featured && (
                  <Badge className="bg-accent/20 text-accent border-accent/30">
                    Featured
                  </Badge>
                )}
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className={getTechColor(tech)}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Links */}
              <div className="mt-auto flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 hover:bg-accent/10 hover:border-accent"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
                {project.live && (
                  <Button 
                    size="sm" 
                    className="flex-1 glow-effect"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Want to see more?
            </h2>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub for additional projects and contributions.
            </p>
            <Button 
              className="glow-effect"
              asChild
            >
              <a href="https://github.com/sushantgavaraskar" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="mr-2" size={20} />
                View All Repositories
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;