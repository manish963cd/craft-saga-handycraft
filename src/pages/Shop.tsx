import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { mockProducts } from '@/data/mockData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Shop = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedCraft, setSelectedCraft] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [giTagOnly, setGiTagOnly] = useState(false);

  const districts = Array.from(new Set(mockProducts.map(p => p.district)));
  const crafts = Array.from(new Set(mockProducts.map(p => p.craft)));

  const filteredProducts = mockProducts.filter(product => {
    if (selectedDistrict && product.district !== selectedDistrict) return false;
    if (selectedCraft && product.craft !== selectedCraft) return false;
    if (giTagOnly && !product.giTag) return false;
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      if (max && (product.price < min || product.price > max)) return false;
      if (!max && product.price < min) return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Explore Our <span className="bg-gradient-heritage bg-clip-text text-transparent">Collection</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover authentic handcrafted treasures from skilled artisans across India
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-lg p-6 mb-8 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Filter Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
              value={priceRange} 
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-3 py-2 border rounded-md bg-background"
            >
              <option value="">All Prices</option>
              <option value="0-1000">Under ₹1,000</option>
              <option value="1000-5000">₹1,000 - ₹5,000</option>
              <option value="5000-15000">₹5,000 - ₹15,000</option>
              <option value="15000">Above ₹15,000</option>
            </select>

            <label className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                checked={giTagOnly} 
                onChange={(e) => setGiTagOnly(e.target.checked)}
                className="rounded"
              />
              <span>GI Tagged Only</span>
            </label>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products match your filters.</p>
            <Button 
              onClick={() => {
                setSelectedDistrict('');
                setSelectedCraft('');
                setPriceRange('');
                setGiTagOnly(false);
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

export default Shop;