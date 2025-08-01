import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockStories } from '@/data/mockData';

const StoriesPreview = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Artisan <span className="bg-gradient-earth bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the master craftspeople behind each creation and discover the personal journeys 
            that keep ancient traditions alive in the modern world.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mockStories.map((story, index) => (
            <article 
              key={story.id}
              className="group bg-card rounded-lg overflow-hidden shadow-warm hover:shadow-cultural transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Story Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground">
                    {story.craft}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="text-white/90 text-sm">{story.readTime}</span>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {story.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {story.district} • {new Date(story.date).toLocaleDateString()}
                  </p>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {story.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-saffron rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground text-xs font-medium">
                        {story.artisan.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-foreground">{story.artisan}</span>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-scale-in">
          <Button 
            size="lg" 
            className="bg-gradient-earth hover:shadow-warm text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105"
          >
            Read All Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoriesPreview;