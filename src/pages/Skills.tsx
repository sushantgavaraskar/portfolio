import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Monitor, 
  Palette,
  Terminal,
  GitBranch
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="text-accent" size={24} />,
      title: 'Languages',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'SQL', level: 85 },
      ]
    },
    {
      icon: <Server className="text-accent" size={24} />,
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 90 },
        { name: 'Django', level: 80 },
        { name: 'Prisma', level: 85 },
        { name: 'REST APIs', level: 90 },
      ]
    },
    {
      icon: <Palette className="text-accent" size={24} />,
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Socket.IO', level: 75 },
      ]
    },
    {
      icon: <Database className="text-accent" size={24} />,
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 90 },
        { name: 'MySQL', level: 80 },
        { name: 'SQLite', level: 75 },
        { name: 'Redis', level: 70 },
      ]
    },
    {
      icon: <Terminal className="text-accent" size={24} />,
      title: 'Dev Tools',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'Postman', level: 90 },
        { name: 'Swagger', level: 80 },
        { name: 'BullMQ', level: 75 },
      ]
    },
    {
      icon: <Cloud className="text-accent" size={24} />,
      title: 'Cloud/Infrastructure',
      skills: [
        { name: 'AWS Cloud Foundations', level: 70 },
        { name: 'SMTP Configuration', level: 80 },
        { name: 'Cron Jobs', level: 85 },
        { name: 'JWT Authentication', level: 90 },
        { name: 'WebSockets', level: 75 },
      ]
    },
  ];

  const techStack = [
    'JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'React.js', 'Next.js',
    'MongoDB', 'PostgreSQL', 'Python', 'Django', 'Prisma', 'Redis', 'Docker',
    'Git', 'JWT', 'Socket.IO', 'Tailwind CSS', 'BERT', 'TesseractOCR', 'BullMQ',
    'Swagger', 'AWS', 'WebSockets', 'JSON Logic', 'Nodemailer'
  ];

  const getSkillColor = (level: number) => {
    if (level >= 85) return 'bg-accent';
    if (level >= 75) return 'bg-primary';
    return 'bg-muted-foreground';
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="hero-gradient">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Technologies and tools I use to build amazing applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="p-6 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                      style={{ 
                        background: 'hsl(var(--muted))',
                      }}
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tech Stack Cloud */}
        <Card className="p-8 card-hover">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">
              <span className="hero-gradient">Technology Stack</span>
            </h2>
            <p className="text-muted-foreground">
              Tools and technologies I work with regularly
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <Badge 
                key={tech}
                variant="outline" 
                className="tech-badge text-sm px-4 py-2"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Experience Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <Card className="p-8 card-hover">
            <div className="flex items-center gap-3 mb-6">
              <GitBranch className="text-accent" size={24} />
              <h3 className="text-xl font-bold">Development Experience</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li>• 6+ real-world applications built from scratch</li>
              <li>• Full-stack development with modern frameworks</li>
              <li>• RESTful API design and implementation</li>
              <li>• Database design and optimization</li>
              <li>• Authentication and authorization systems</li>
              <li>• Real-time features with WebSockets</li>
            </ul>
          </Card>

          <Card className="p-8 card-hover">
            <div className="flex items-center gap-3 mb-6">
              <Monitor className="text-accent" size={24} />
              <h3 className="text-xl font-bold">Specialized Areas</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Machine Learning & NLP integration</li>
              <li>• Security and vulnerability scanning</li>
              <li>• Workflow automation engines</li>
              <li>• Privacy-focused application development</li>
              <li>• Queue management and background jobs</li>
              <li>• PDF generation and email automation</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;