import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">ModernBlog</h3>
            <p className="text-content-secondary leading-relaxed">
              Discover stories that inspire innovation. Stay ahead with expert insights on technology, design, and development.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-content-tertiary hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-content-tertiary hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-content-tertiary hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-content-tertiary hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-content-primary">Categories</h4>
            <ul className="space-y-2 text-content-secondary">
              <li><a href="#" className="hover:text-primary transition-colors">React</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">TypeScript</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Backend</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">CSS</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-content-primary">Resources</h4>
            <ul className="space-y-2 text-content-secondary">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Write for Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Newsletter</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-content-primary">Legal</h4>
            <ul className="space-y-2 text-content-secondary">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-content-tertiary">
            © 2024 ModernBlog. All rights reserved. Built with ❤️ by developers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;