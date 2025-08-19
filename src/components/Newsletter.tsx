import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <Mail className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Get the latest articles and insights delivered straight to your inbox. 
              Join thousands of developers who trust our weekly newsletter.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm"
            />
            <Button 
              variant="secondary" 
              className="bg-white text-primary hover:bg-white/90 px-8"
            >
              <Send className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </div>

          <p className="text-sm text-white/70">
            No spam, unsubscribe at any time. Read our{" "}
            <a href="#" className="underline hover:text-white transition-colors">
              privacy policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;