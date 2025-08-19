import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/95" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Discover Stories That
              <span className="gradient-text block">Inspire Innovation</span>
            </h1>
            <p className="text-xl text-content-secondary max-w-2xl mx-auto leading-relaxed">
              Dive into the latest insights on technology, design, and development. 
              Stay ahead of the curve with expert perspectives and cutting-edge ideas.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg hero-shadow hover:scale-105 transition-all duration-300"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Start Reading
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg backdrop-blur-sm"
            >
              Browse Categories
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 pt-8 text-content-tertiary">
            <div className="text-center">
              <div className="text-2xl font-bold text-content-primary">150+</div>
              <div className="text-sm">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-content-primary">50K+</div>
              <div className="text-sm">Readers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-content-primary">12</div>
              <div className="text-sm">Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;