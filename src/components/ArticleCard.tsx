import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readTime: string;
  category: string;
  image: string;
}

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard = ({ article, featured = false }: ArticleCardProps) => {
  return (
    <Card className={`group cursor-pointer overflow-hidden border-0 card-shadow hover:elegant-shadow transition-all duration-300 hover:-translate-y-1 ${featured ? 'col-span-2 row-span-2' : ''}`}>
      <div className="relative overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${featured ? 'h-64' : 'h-48'}`}
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
            {article.category}
          </Badge>
        </div>
      </div>
      
      <CardContent className={`${featured ? 'p-8' : 'p-6'}`}>
        <div className="space-y-4">
          <h3 className={`font-bold leading-tight group-hover:text-primary transition-colors ${featured ? 'text-2xl' : 'text-xl'}`}>
            {article.title}
          </h3>
          
          <p className={`text-content-secondary leading-relaxed ${featured ? 'text-lg' : ''}`}>
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex items-center gap-4 text-sm text-content-tertiary">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{article.publishedAt}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
            
            <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;