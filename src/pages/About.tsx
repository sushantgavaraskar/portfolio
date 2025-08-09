import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, Calendar, Phone, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="hero-gradient">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Backend-focused full stack developer building scalable solutions
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          {/* Bio */}
          <div className="lg:col-span-2">
            <Card className="p-8 card-hover h-full">
              <h2 className="text-2xl font-bold mb-6">My Story</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a backend-focused full stack developer with a passion for building scalable systems, 
                  secure APIs, and developer tools. I specialize in JavaScript, Node.js, and cloud infrastructure, 
                  bringing ideas to life through clean, efficient code.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Over the past few years, I've built over 6 real-world applications including privacy tools, 
                  OCR/NLP systems, automation platforms, and vulnerability monitors. Each project has taught me 
                  valuable lessons about system design, security, and user experience.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm currently pursuing my B.Tech in Information Technology at VIIT Pune (2022–2026) and 
                  actively looking for backend-focused internship or freelance opportunities where I can 
                  contribute to meaningful projects and continue growing as a developer.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                  or diving deep into system architecture and performance optimization.
                </p>
              </div>
            </Card>
          </div>

          {/* Details Card */}
          <div className="flex flex-col gap-6 h-full">
            <Card className="p-6 card-hover flex-1">
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="text-accent" size={18} />
                  <span className="text-sm text-muted-foreground">sushantgavaraskar18@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-accent" size={18} />
                  <span className="text-sm text-muted-foreground">+91 9322930740</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-accent" size={18} />
                  <span className="text-sm text-muted-foreground">Pune, Maharashtra, India</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-hover flex-1">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <GraduationCap className="text-accent mt-1" size={18} />
                  <div>
                    <p className="font-medium">B.Tech Information Technology</p>
                    <p className="text-sm text-muted-foreground">VIIT Pune</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="text-accent" size={18} />
                  <span className="text-sm text-muted-foreground">2022 - 2026</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-hover flex-1">
              <h3 className="text-xl font-bold mb-4">Status</h3>
              <div className="space-y-3">
                <Badge variant="outline" className="tech-badge">
                  🎯 Seeking Internships
                </Badge>
                <Badge variant="outline" className="tech-badge">
                  💼 Open for Freelance
                </Badge>
                <Badge variant="outline" className="tech-badge">
                  🚀 Backend Focused
                </Badge>
              </div>
            </Card>
          </div>
        </div>

        {/* What I'm Working On */}
        <Card className="p-8 card-hover">
          <h2 className="text-2xl font-bold mb-6">What I'm Working On</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-3 w-[110%] -ml-4">
              <h3 className="text-lg font-semibold text-accent">Current Focus</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Advanced Node.js backend patterns</li>
                <li>• Cloud infrastructure optimization</li>
                <li>• Microservices architecture</li>
                <li>• Security best practices</li>
              </ul>
            </div>
            <div className="space-y-3 w-[110%] -ml-4">
              <h3 className="text-lg font-semibold text-accent">Current Focus</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Advanced Node.js backend patterns</li>
                <li>• Cloud infrastructure optimization</li>
                <li>• Microservices architecture</li>
                <li>• Security best practices</li>
              </ul>
            </div>
            <div className="space-y-3 w-[110%] -ml-4">
              <h3 className="text-lg font-semibold text-accent">Learning Goals</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• DevOps and CI/CD pipelines</li>
                <li>• Distributed systems design</li>
                <li>• Performance monitoring</li>
                <li>• Open source contributions</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;