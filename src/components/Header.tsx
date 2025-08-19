import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-bold gradient-text">ModernBlog</h1>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-content-secondary hover:text-content-primary transition-colors">Home</a>
            <a href="/articles" className="text-content-secondary hover:text-content-primary transition-colors">Articles</a>
            <a href="/categories" className="text-content-secondary hover:text-content-primary transition-colors">Categories</a>
            <a href="/about" className="text-content-secondary hover:text-content-primary transition-colors">About</a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {isSearchOpen ? (
            <div className="flex items-center gap-2 animate-scale-in">
              <Input 
                placeholder="Search articles..." 
                className="w-64"
                onBlur={() => setIsSearchOpen(false)}
                autoFocus
              />
            </div>
          ) : (
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              className="hover:bg-accent"
            >
              <Search className="h-5 w-5" />
            </Button>
          )}
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;