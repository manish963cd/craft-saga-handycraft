import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            About <span className="bg-gradient-heritage bg-clip-text text-transparent">Hunar Gatha</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Crafting Culture, One Tale at a Time
          </p>
        </div>

        <div className="space-y-12">
          {/* Mission */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Hunar Gatha is a digital platform dedicated to preserving and promoting India's rich 
                tradition of handcrafted arts through the power of storytelling and e-commerce. We 
                believe that every craft has a story, every artisan has a journey, and every piece 
                created carries the soul of its maker.
              </p>
              <p>
                Our mission is to bridge the gap between traditional Indian craftsmanship and the 
                modern world, ensuring that these age-old skills not only survive but thrive in 
                the 21st century.
              </p>
            </div>
          </section>

          {/* Vision */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                We envision a world where traditional crafts are celebrated, artisans are empowered, 
                and cultural heritage is preserved for future generations. Through technology and 
                storytelling, we aim to create a global marketplace that values authenticity, 
                craftsmanship, and cultural significance.
              </p>
            </div>
          </section>

          {/* What We Do */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-3">Artisan Stories</h3>
                <p className="text-muted-foreground">
                  We document and share the inspiring journeys of master craftspeople, preserving 
                  their knowledge and experiences for posterity.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-3">Authentic Products</h3>
                <p className="text-muted-foreground">
                  We curate and sell genuine handcrafted products, ensuring fair compensation 
                  for artisans and authenticity for customers.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-3">Cultural Education</h3>
                <p className="text-muted-foreground">
                  We educate people about traditional crafts, their origins, techniques, and 
                  cultural significance in Indian heritage.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-3">Global Reach</h3>
                <p className="text-muted-foreground">
                  We connect local artisans with global markets, ensuring that traditional 
                  Indian crafts reach appreciative audiences worldwide.
                </p>
              </div>
            </div>
          </section>

          {/* Values */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Values</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-gradient-heritage rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-foreground">Authenticity</h3>
                  <p className="text-muted-foreground">Every product and story we feature is genuine and verified.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-gradient-heritage rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-foreground">Fair Trade</h3>
                  <p className="text-muted-foreground">We ensure artisans receive fair compensation for their work.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-gradient-heritage rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-foreground">Cultural Preservation</h3>
                  <p className="text-muted-foreground">We are committed to preserving traditional crafts for future generations.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-gradient-heritage rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-foreground">Quality</h3>
                  <p className="text-muted-foreground">We maintain the highest standards in both products and storytelling.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-gradient-warm p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Journey</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Be part of preserving India's rich craft heritage. Explore our collection, 
              read artisan stories, and support traditional craftsmanship.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;