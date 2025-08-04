import { Button } from '@/components/ui/button';
import { mockCrafts } from '@/data/mockData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Crafts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Traditional <span className="bg-gradient-heritage bg-clip-text text-transparent">Crafts</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore the rich heritage of Indian craftsmanship passed down through generations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCrafts.map((craft, index) => (
            <div 
              key={craft.id} 
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-cultural transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-secondary overflow-hidden">
                <img 
                  src={craft.image} 
                  alt={craft.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{craft.name}</h3>
                <p className="text-sm text-primary mb-3">{craft.origin}</p>
                <p className="text-muted-foreground mb-4 line-clamp-3">{craft.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-foreground mb-2">Districts</h4>
                  <div className="flex flex-wrap gap-2">
                    {craft.districts.map(district => (
                      <span 
                        key={district} 
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm"
                      >
                        {district}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Crafts;