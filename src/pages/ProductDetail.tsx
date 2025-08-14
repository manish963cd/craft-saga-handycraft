import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockProducts, mockStories } from '@/data/mockData';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ShoppingCart, 
  Heart, 
  Share2, 
  MapPin, 
  Award, 
  Package, 
  Ruler, 
  Weight,
  BookOpen,
  QrCode,
  Star,
  ChevronLeft,
  ChevronRight,
  Truck,
  Shield,
  RotateCcw
} from 'lucide-react';

const ProductDetail = () => {
  const { slug } = useParams();
  const { user } = useAuth();
  const { toast } = useToast();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const product = mockProducts.find(p => p.id === slug);
  const relatedStory = product?.relatedStoryId 
    ? mockStories.find(s => s.id === product.relatedStoryId)
    : null;

  useEffect(() => {
    if (product) {
      // Generate QR code for product verification
      import('qrcode').then(QRCode => {
        const productUrl = `${window.location.origin}/product/${product.id}`;
        QRCode.toDataURL(productUrl, { width: 200 })
          .then(url => setQrCodeUrl(url))
          .catch(err => console.error(err));
      });
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/10">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-heritage bg-clip-text text-transparent">
              Product Not Found
            </h1>
            <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
            <Button asChild className="bg-gradient-saffron hover:shadow-cultural transition-all duration-300">
              <Link to="/shop">Browse Products</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!user) {
      toast({
        title: "Please sign in",
        description: "You need to be logged in to add items to cart.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    if (!user) {
      toast({
        title: "Please sign in",
        description: "You need to be logged in to make a purchase.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Redirecting to checkout",
      description: "Taking you to secure payment...",
    });
  };

  const handleWishlist = () => {
    if (!user) {
      toast({
        title: "Please sign in",
        description: "You need to be logged in to save items to wishlist.",
        variant: "destructive",
      });
      return;
    }
    
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: isWishlisted 
        ? `${product.name} removed from your wishlist.`
        : `${product.name} saved to your wishlist.`,
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Product link copied to clipboard.",
      });
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/10">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-card rounded-xl overflow-hidden shadow-warm">
              <img 
                src={product.images[currentImageIndex]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={previousImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 transition-all duration-200"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 transition-all duration-200"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
              
              {/* Image indicators */}
              {product.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex 
                          ? 'bg-primary scale-125' 
                          : 'bg-background/50 hover:bg-background/80'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      index === currentImageIndex 
                        ? 'border-primary shadow-cultural' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-4xl font-bold bg-gradient-heritage bg-clip-text text-transparent">
                  {product.name}
                </h1>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleWishlist}
                    className={isWishlisted ? 'text-red-500 border-red-500' : ''}
                  >
                    <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleShare}
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mb-4">
                <p className="text-3xl font-bold text-primary">₹{product.price.toLocaleString()}</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`} 
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">(4.2)</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {product.giTag && (
                  <Badge className="bg-gradient-heritage text-primary-foreground">
                    <Award className="h-3 w-3 mr-1" />
                    GI Tagged
                  </Badge>
                )}
                <Badge variant="outline">
                  <MapPin className="h-3 w-3 mr-1" />
                  {product.district}
                </Badge>
                <Badge variant="outline">{product.craft}</Badge>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Product Actions */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={handleAddToCart}
                  className="hover:shadow-warm transition-all duration-300"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  size="lg" 
                  onClick={handleBuyNow}
                  className="bg-gradient-saffron hover:shadow-cultural transition-all duration-300"
                >
                  Buy Now
                </Button>
              </div>

              {/* Delivery & Returns */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-card rounded-lg border">
                <div className="text-center">
                  <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">Free Delivery</p>
                </div>
                <div className="text-center">
                  <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">Authentic Product</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">Easy Returns</p>
                </div>
              </div>
            </div>

            {/* Product Details Tabs */}
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="artisan">Artisan</TabsTrigger>
                <TabsTrigger value="story">Story</TabsTrigger>
                <TabsTrigger value="verify">Verify</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Product Specifications</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {product.longDescription}
                    </p>
                    
                    <Separator />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Package className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm font-medium">Material:</span>
                        </div>
                        <p className="text-sm text-muted-foreground ml-6">{product.material}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Ruler className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm font-medium">Dimensions:</span>
                        </div>
                        <p className="text-sm text-muted-foreground ml-6">{product.dimensions}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Weight className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm font-medium">Weight:</span>
                        </div>
                        <p className="text-sm text-muted-foreground ml-6">{product.weight}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm font-medium">Origin:</span>
                        </div>
                        <p className="text-sm text-muted-foreground ml-6">{product.district}, Uttar Pradesh</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="artisan">
                <Card>
                  <CardHeader>
                    <CardTitle>Meet the Artisan</CardTitle>
                    <CardDescription>Learn about the skilled craftsperson behind this product</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={product.artisanInfo.image} />
                        <AvatarFallback className="bg-gradient-saffron text-primary-foreground text-lg">
                          {product.artisanInfo.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-2">
                        <h3 className="font-semibold text-lg">{product.artisanInfo.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{product.artisanInfo.experience} experience</span>
                          <span>•</span>
                          <span>{product.artisanInfo.specialty}</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {product.artisanInfo.bio}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="story">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="h-5 w-5 mr-2" />
                      Related Story
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {relatedStory ? (
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                          <img 
                            src={relatedStory.image} 
                            alt={relatedStory.title}
                            className="w-24 h-24 rounded-lg object-cover"
                          />
                          <div className="flex-1 space-y-2">
                            <h3 className="font-semibold text-lg">{relatedStory.title}</h3>
                            <p className="text-muted-foreground text-sm">
                              {relatedStory.excerpt}
                            </p>
                            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                              <span>{relatedStory.readTime}</span>
                              <span>•</span>
                              <span>{new Date(relatedStory.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                        <Button 
                          asChild 
                          variant="outline" 
                          className="w-full hover:shadow-warm transition-all duration-300"
                        >
                          <Link to={`/stories/${relatedStory.id}`}>
                            Read Full Story
                          </Link>
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-muted-foreground">No related story available for this product.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="verify">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <QrCode className="h-5 w-5 mr-2" />
                      Product Verification
                    </CardTitle>
                    <CardDescription>
                      Verify authenticity using QR code
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    {qrCodeUrl && (
                      <div className="flex flex-col items-center space-y-4">
                        <img 
                          src={qrCodeUrl} 
                          alt="Product verification QR code"
                          className="border rounded-lg p-4 bg-white"
                        />
                        <p className="text-sm text-muted-foreground max-w-sm">
                          Scan this QR code to verify product authenticity and access detailed information.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;