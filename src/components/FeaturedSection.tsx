import ArticleCard from "./ArticleCard";
import { mockArticles } from "@/data/mockArticles";

const FeaturedSection = () => {
  const featuredArticle = mockArticles[0];
  const recentArticles = mockArticles.slice(1, 5);

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Stories</h2>
          <p className="text-xl text-content-secondary max-w-2xl mx-auto">
            Handpicked articles from our community of expert developers and designers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          <div className="lg:col-span-2">
            <ArticleCard article={featuredArticle} featured />
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {recentArticles.slice(0, 2).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentArticles.slice(2).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;