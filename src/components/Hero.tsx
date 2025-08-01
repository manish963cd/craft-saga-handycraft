import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-odop.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Traditional UP Crafts" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-heritage opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="block">Discover the</span>
            <span className="block bg-gradient-to-r from-accent to-primary-soft bg-clip-text text-transparent">
              Heritage of UP
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the rich traditions of Uttar Pradesh through authentic handcrafted products, 
            artisan stories, and cultural treasures from all 75 districts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              size="lg" 
              className="bg-gradient-saffron hover:shadow-cultural text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105"
            >
              Explore Products
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-6 transition-all duration-300"
            >
              Read Stories
            </Button>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 animate-scale-in">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">75</div>
            <div className="text-white/80 text-sm md:text-base">Districts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">500+</div>
            <div className="text-white/80 text-sm md:text-base">Artisans</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">50+</div>
            <div className="text-white/80 text-sm md:text-base">Crafts</div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;