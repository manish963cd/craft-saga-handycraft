import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { mockProducts } from '@/data/mockData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = mockProducts.find(p => p.id === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground">The product you're looking for doesn't exist.</p>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-secondary rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">{product.name}</h1>
              <p className="text-2xl font-semibold text-primary">₹{product.price.toLocaleString()}</p>
              {product.giTag && (
                <span className="inline-block bg-gradient-heritage text-white px-3 py-1 rounded-full text-sm mt-2">
                  GI Tagged
                </span>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Description</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-foreground">District</h4>
                  <p className="text-muted-foreground">{product.district}</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Craft</h4>
                  <p className="text-muted-foreground">{product.craft}</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-foreground">Artisan</h4>
                <p className="text-muted-foreground">{product.artisan}</p>
              </div>
            </div>

            <div className="space-y-4">
              <Button size="lg" className="w-full bg-gradient-heritage">
                Add to Cart
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Buy Now
              </Button>
            </div>

            <div className="bg-secondary p-4 rounded-lg">
              <h4 className="font-medium mb-2">Product Authenticity</h4>
              <p className="text-sm text-muted-foreground">
                This product comes with a certificate of authenticity and QR code for verification.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;