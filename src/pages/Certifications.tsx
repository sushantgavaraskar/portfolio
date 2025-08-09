import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Award, 
  ExternalLink, 
  Calendar,
  Building,
  CheckCircle
} from 'lucide-react';

const Certifications = () => {
  type Certification = {
    id: number;
    title: string;
    issuer: string;
    date: string;
    status: string;
    description: string;
    skills: string[];
    credentialUrl: string;
    logo: string;
    featured?: boolean;
  };

  const certifications: Certification[] = [
    {
      id: 1,
      title: 'Meta Back-End Developer',
      issuer: 'Meta (Facebook)',
      date: '2023',
      status: 'Completed',
      description: 'Comprehensive backend development program covering Python, Django, APIs, databases, and version control.',
      skills: ['Python', 'Django', 'REST APIs', 'MySQL', 'Git', 'Version Control'],
      credentialUrl: '#',
      logo: '🚀',
      // featured: true,
    },
    {
      id: 2,
      title: 'IBM Full Stack Developer',
      issuer: 'IBM',
      date: '2023',
      status: 'Completed',
      description: 'Full-stack web development specialization covering front-end and back-end technologies.',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
      credentialUrl: '#',
      logo: '💻',
      // featured: true,
    },
    {
      id: 3,
      title: 'AWS Academy Cloud Foundations',
      issuer: 'Amazon Web Services',
      date: '2023',
      status: 'Completed',
      description: 'Foundational knowledge of cloud computing concepts, AWS core services, security, and pricing.',
      skills: ['AWS', 'Cloud Computing', 'EC2', 'S3', 'Security', 'Cost Management'],
      credentialUrl: '#',
      logo: '☁️',
      // featured: true,
    },
    {
      id: 4,
      title: 'Data Science Math Skills',
      issuer: 'Duke University',
      date: '2022',
      status: 'Completed',
      description: 'Mathematical foundations for data science including calculus, linear algebra, and statistics.',
      skills: ['Statistics', 'Linear Algebra', 'Calculus', 'Probability', 'Data Analysis'],
      credentialUrl: '#',
      logo: '📊',
    },
    {
      id: 5,
      title: 'Complete Web Development Bootcamp',
      issuer: 'The App Brewery',
      date: '2022',
      status: 'Completed',
      description: 'Comprehensive web development course covering full-stack development from basics to advanced.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'React'],
      credentialUrl: '#',
      logo: '🌐',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Progress':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'tech-badge';
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-gradient">Certifications</span> & Learning
          </h1>
          <p className="text-xl text-muted-foreground">
            Continuous learning and professional development achievements
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 text-center card-hover">
            <div className="text-3xl font-bold hero-gradient mb-2">5+</div>
            <div className="text-muted-foreground">Certifications Earned</div>
          </Card>
          <Card className="p-6 text-center card-hover">
            <div className="text-3xl font-bold hero-gradient mb-2">3</div>
            <div className="text-muted-foreground">Major Platforms</div>
          </Card>
          <Card className="p-6 text-center card-hover">
            <div className="text-3xl font-bold hero-gradient mb-2">100%</div>
            <div className="text-muted-foreground">Completion Rate</div>
          </Card>
        </div>

        {/* Certifications Grid */}
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.id} 
              className={`p-8 card-hover ${cert.featured ? 'gradient-border' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Left: Icon and Basic Info */}
                <div className="lg:col-span-1">
                  <div className="text-center lg:text-left">
                    <div className="text-6xl mb-4">{cert.logo}</div>
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                      <Calendar size={16} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{cert.date}</span>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={getStatusColor(cert.status)}
                    >
                      <CheckCircle size={12} className="mr-1" />
                      {cert.status}
                    </Badge>
                  </div>
                </div>

                {/* Center: Details */}
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-3 mb-4">
                    <Award className="text-accent mt-1" size={20} />
                    <div>
                      <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-3">
                        <Building size={14} />
                        <span className="text-sm">{cert.issuer}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline" 
                        className="tech-badge text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Right: Action */}
                <div className="lg:col-span-1 flex lg:justify-end">
                  <Button 
                    variant="outline" 
                    className="w-full lg:w-auto hover:bg-accent/10 hover:border-accent"
                    asChild
                  >
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      View Certificate
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Learning Philosophy */}
        <Card className="p-8 mt-16 card-hover">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">
              <span className="hero-gradient">Continuous Learning</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6">
              I believe in the power of continuous learning to stay ahead in the rapidly evolving tech landscape. 
              Each certification represents not just knowledge gained, but a commitment to excellence and 
              professional growth. I actively seek out new learning opportunities to expand my skill set 
              and deliver better solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="tech-badge">
                🎯 Goal-Oriented Learning
              </Badge>
              <Badge variant="outline" className="tech-badge">
                🔄 Regular Skill Updates
              </Badge>
              <Badge variant="outline" className="tech-badge">
                🌟 Industry Best Practices
              </Badge>
              <Badge variant="outline" className="tech-badge">
                🚀 Emerging Technologies
              </Badge>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-bold mb-4">Want to verify my certifications?</h3>
          <p className="text-muted-foreground mb-6">
            All certificates are verifiable through their respective issuing platforms.
          </p>
          <Button variant="outline" className="animated-underline">
            Contact me for credential verification
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Certifications;