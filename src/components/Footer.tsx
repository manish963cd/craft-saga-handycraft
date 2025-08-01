const Footer = () => {
  const footerSections = [
    {
      title: 'Explore',
      links: [
        { name: 'Products', href: '/products' },
        { name: 'Crafts', href: '/crafts' },
        { name: 'Stories', href: '/stories' },
        { name: 'Districts', href: '/districts' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Shipping Info', href: '/shipping' },
        { name: 'Returns', href: '/returns' },
        { name: 'Size Guide', href: '/size-guide' },
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Artisan Program', href: '/artisan-program' },
        { name: 'Wholesale', href: '/wholesale' },
      ]
    }
  ];

  return (
    <footer className="bg-earth text-earth-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-saffron rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">OP</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-earth-foreground">ODOP UP</h2>
                <p className="text-sm text-earth-foreground/70">One District One Product</p>
              </div>
            </div>
            <p className="text-earth-foreground/80 mb-6 leading-relaxed">
              Celebrating the rich cultural heritage of Uttar Pradesh through authentic handcrafted products and artisan stories.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-8 h-8 bg-earth-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-200"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-earth-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-earth-foreground/70 hover:text-accent transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-earth-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-earth-foreground/70 text-sm">
              © 2024 ODOP Uttar Pradesh. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-earth-foreground/70 hover:text-accent transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-earth-foreground/70 hover:text-accent transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/cookies" className="text-earth-foreground/70 hover:text-accent transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;