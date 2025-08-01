import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockCrafts } from '@/data/mockData';

const CraftsPreview = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Traditional <span className="bg-gradient-saffron bg-clip-text text-transparent">Crafts</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the diverse artistic traditions that have been passed down through generations 
            in the cultural heartland of India.
          </p>
        </div>

        {/* Crafts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {mockCrafts.map((craft, index) => (
            <div 
              key={craft.id}
              className="group bg-card rounded-lg overflow-hidden shadow-warm hover:shadow-cultural transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Craft Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={craft.image} 
                  alt={craft.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {craft.origin}
                  </Badge>
                </div>
              </div>

              {/* Craft Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                  {craft.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {craft.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Key Materials:</h4>
                  <div className="flex flex-wrap gap-1">
                    {craft.materials.slice(0, 3).map((material) => (
                      <Badge key={material} variant="outline" className="text-xs">
                        {material}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-scale-in">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 transition-all duration-300"
          >
            Discover All Crafts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CraftsPreview;