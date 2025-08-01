import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';
import { mockProducts } from '@/data/mockData';

const FeaturedSection = () => {
  const featuredProducts = mockProducts.slice(0, 3);

  return (
    <section className="py-16 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="bg-gradient-heritage bg-clip-text text-transparent">Treasures</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover handpicked masterpieces from skilled artisans across Uttar Pradesh, 
            each telling a unique story of tradition and craftsmanship.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-scale-in">
          <Button 
            size="lg" 
            className="bg-gradient-heritage hover:shadow-cultural text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105"
          >
            Explore All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;