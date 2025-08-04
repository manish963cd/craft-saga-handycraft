import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { mockStories } from '@/data/mockData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Stories = () => {
  const [selectedCraft, setSelectedCraft] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const crafts = Array.from(new Set(mockStories.map(s => s.craft)));
  const districts = Array.from(new Set(mockStories.map(s => s.district)));

  const filteredStories = mockStories.filter(story => {
    if (selectedCraft && story.craft !== selectedCraft) return false;
    if (selectedDistrict && story.district !== selectedDistrict) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Artisan <span className="bg-gradient-heritage bg-clip-text text-transparent">Stories</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover the inspiring journeys of master craftspeople preserving India's heritage
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-lg p-6 mb-8 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Filter Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select 
              value={selectedCraft} 
              onChange={(e) => setSelectedCraft(e.target.value)}
              className="px-3 py-2 border rounded-md bg-background"
            >
              <option value="">All Crafts</option>
              {crafts.map(craft => (
                <option key={craft} value={craft}>{craft}</option>
              ))}
            </select>

            <select 
              value={selectedDistrict} 
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="px-3 py-2 border rounded-md bg-background"
            >
              <option value="">All Districts</option>
              {districts.map(district => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story, index) => (
            <article 
              key={story.id} 
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-cultural transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-secondary overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gradient-heritage text-white px-2 py-1 rounded text-xs">
                    {story.craft}
                  </span>
                  <span className="text-xs text-muted-foreground">{story.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
                  {story.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">{story.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">{story.artisan}</p>
                    <p className="text-sm text-muted-foreground">{story.district}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredStories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No stories match your filters.</p>
            <Button 
              onClick={() => {
                setSelectedCraft('');
                setSelectedDistrict('');
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Stories;