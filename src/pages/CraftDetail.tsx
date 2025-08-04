import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { mockCrafts, mockProducts } from '@/data/mockData';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CraftDetail = () => {
  const { craft } = useParams();
  const craftData = mockCrafts.find(c => c.name.toLowerCase().replace(/\s+/g, '-') === craft);
  const relatedProducts = mockProducts.filter(p => p.craft === craftData?.name);

  if (!craftData) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Craft Not Found</h1>
            <p className="text-muted-foreground">The craft you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Craft Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="aspect-video bg-secondary rounded-lg overflow-hidden">
            <img 
              src={craftData.image} 
              alt={craftData.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">{craftData.name}</h1>
              <p className="text-lg text-primary">{craftData.origin}</p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              {craftData.description}
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Process</h3>
                <p className="text-muted-foreground">{craftData.process}</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Materials</h3>
                <div className="flex flex-wrap gap-2">
                  {craftData.materials.map(material => (
                    <span 
                      key={material} 
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Practiced In</h3>
                <div className="flex flex-wrap gap-2">
                  {craftData.districts.map(district => (
                    <span 
                      key={district} 
                      className="bg-gradient-heritage text-white px-3 py-1 rounded-full text-sm"
                    >
                      {district}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Products featuring <span className="bg-gradient-heritage bg-clip-text text-transparent">{craftData.name}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CraftDetail;