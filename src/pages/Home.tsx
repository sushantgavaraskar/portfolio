import { ArrowRight, Download, Mail, MapPin } from 'lucide-react';
import GitHubIcon from '@/components/icons/GitHubIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="hero-gradient">Sushant</span>
              <br />
              <span className="text-foreground">Gavaraskar</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Backend-Focused Full Stack Developer
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
              <MapPin size={16} />
              <span>Pune, Maharashtra, India</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/projects">
              <Button size="lg" className="glow-effect hover:animate-glow-pulse group">
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="hover:bg-accent/10 hover:border-accent">
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
            <Link to="/contact">
              <Button variant="ghost" size="lg" className="hover:bg-accent/10">
                <Mail className="mr-2" size={20} />
                Contact Me
              </Button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/sushantgavaraskar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/20 hover:bg-accent/20 hover:text-accent transition-colors"
            >
              <GitHubIcon size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sushant18x"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/20 hover:bg-accent/20 hover:text-accent transition-colors"
            >
              <LinkedInIcon size={24} />
            </a>
            <a
              href="mailto:sushantgavaraskar18@gmail.com"
              className="p-3 rounded-full bg-muted/20 hover:bg-accent/20 hover:text-accent transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 text-center card-hover bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <div className="text-3xl font-bold hero-gradient mb-2">6+</div>
            <div className="text-muted-foreground">Real-world Applications</div>
          </Card>
          <Card className="p-8 text-center card-hover bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
            <div className="text-3xl font-bold hero-gradient mb-2">15+</div>
            <div className="text-muted-foreground">Technologies Mastered</div>
          </Card>
          <Card className="p-8 text-center card-hover bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <div className="text-3xl font-bold hero-gradient mb-2">5+</div>
            <div className="text-muted-foreground">Certifications Earned</div>
          </Card>
        </div>
      </section>

      {/* Brief Introduction */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          <span className="hero-gradient">Passionate</span> about building scalable systems
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I specialize in backend development with expertise in Node.js, Python, and cloud infrastructure. 
          From OCR/NLP systems to privacy tools and vulnerability monitors, I build applications that solve real-world problems 
          with clean, scalable code.
        </p>
        <div className="mt-8">
          <Link to="/about">
            <Button variant="outline" className="animated-underline">
              Learn More About Me
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;