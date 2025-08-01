import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/mockData';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-warm hover:shadow-cultural transition-all duration-300 transform hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.giTag && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            GI Tagged
          </Badge>
        )}
        <div className="absolute top-3 right-3">
          <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200">
            <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {product.district} • {product.craft}
          </p>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="text-xl font-bold text-primary">
            ₹{product.price.toLocaleString()}
          </div>
          <div className="text-sm text-muted-foreground">
            by {product.artisan}
          </div>
        </div>

        <div className="flex gap-2">
          <Button 
            className="flex-1 bg-gradient-saffron hover:shadow-cultural transition-all duration-300"
            size="sm"
          >
            Add to Cart
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="px-3"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;