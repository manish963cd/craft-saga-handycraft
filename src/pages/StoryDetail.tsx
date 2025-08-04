import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { mockStories, mockProducts } from '@/data/mockData';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const StoryDetail = () => {
  const { slug } = useParams();
  const story = mockStories.find(s => s.id === slug);
  const relatedProducts = story ? mockProducts.filter(p => p.craft === story.craft) : [];

  if (!story) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Story Not Found</h1>
            <p className="text-muted-foreground">The story you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Story Header */}
        <header className="mb-8">
          <div className="aspect-video bg-secondary rounded-lg overflow-hidden mb-6">
            <img 
              src={story.image} 
              alt={story.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="bg-gradient-heritage text-white px-3 py-1 rounded-full text-sm">
                {story.craft}
              </span>
              <span className="text-sm text-muted-foreground">{story.readTime}</span>
              <span className="text-sm text-muted-foreground">{story.date}</span>
            </div>
            
            <h1 className="text-4xl font-bold text-foreground">{story.title}</h1>
            
            <div className="flex items-center gap-4">
              <div>
                <p className="font-medium text-foreground">By {story.artisan}</p>
                <p className="text-sm text-muted-foreground">{story.district}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Story Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            {story.excerpt}
          </p>
          
          <div className="space-y-6 text-muted-foreground">
            <p>
              In the heart of {story.district}, where tradition meets artistry, {story.artisan} continues 
              a legacy that spans generations. The art of {story.craft} is more than just a craft—it's 
              a way of life, a connection to the past, and a bridge to the future.
            </p>
            
            <p>
              Every piece created tells a story of patience, skill, and dedication. The intricate patterns 
              and techniques have been passed down through families, each generation adding their own 
              touch while preserving the essence of this ancient art form.
            </p>
            
            <p>
              Today, artisans like {story.artisan} face the challenge of preserving traditional crafts 
              in a rapidly modernizing world. Through platforms like Hunar Gatha, these stories reach 
              a global audience, ensuring that the rich heritage of Indian craftsmanship continues to 
              inspire and flourish.
            </p>
          </div>
        </article>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="border-t pt-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Products by <span className="bg-gradient-heritage bg-clip-text text-transparent">{story.artisan}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.slice(0, 3).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default StoryDetail;