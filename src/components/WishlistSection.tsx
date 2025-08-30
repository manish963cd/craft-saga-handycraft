import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Heart, ShoppingCart, Eye, Trash2 } from 'lucide-react'
import { mockWishlist, Product } from '@/data/mockData'
import { useToast } from '@/hooks/use-toast'

export const WishlistSection = () => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>(mockWishlist)
  const { toast } = useToast()

  const removeFromWishlist = (productId: string) => {
    setWishlistItems(items => items.filter(item => item.id !== productId))
    toast({
      title: "Removed from wishlist",
      description: "Item has been removed from your wishlist.",
    })
  }

  const addToCart = (product: Product) => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  if (wishlistItems.length === 0) {
    return (
      <div className="text-center py-12">
        <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium text-muted-foreground">Your wishlist is empty</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Save products you love to view them later
        </p>
        <Button className="bg-gradient-saffron hover:shadow-cultural transition-all duration-300">
          <a href="/shop">Discover Products</a>
        </Button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {wishlistItems.map((product) => (
        <Card key={product.id} className="shadow-warm hover:shadow-lg transition-all duration-300 group">
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg bg-muted"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-white/90 hover:bg-white text-red-500 hover:text-red-600"
              onClick={() => removeFromWishlist(product.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
            {product.giTag && (
              <Badge className="absolute top-2 left-2 bg-gradient-heritage text-white">
                GI Tagged
              </Badge>
            )}
          </div>
          
          <CardContent className="p-4 space-y-3">
            <div>
              <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground">by {product.artisan}</p>
              <p className="text-sm text-muted-foreground">{product.district}, {product.craft}</p>
            </div>
            
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
            
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">₹{product.price.toLocaleString()}</span>
              <Heart className="h-5 w-5 text-red-500 fill-current" />
            </div>
            
            <div className="flex gap-2 pt-2">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => window.location.href = `/product/${product.id}`}
              >
                <Eye className="h-4 w-4 mr-2" />
                View
              </Button>
              <Button 
                className="flex-1 bg-gradient-saffron hover:shadow-cultural transition-all duration-300"
                onClick={() => addToCart(product)}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}