import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">DermElevate Scholarship Initiative</h3>
            <p className="text-sm italic opacity-90 mb-4">Empowering Futures... Elevating Minds</p>
            <div className="h-1 w-16 bg-accent rounded"></div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@dermelevate.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>(404) 555-0123</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Atlanta, GA</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm opacity-90">
              <a href="/scholarships" className="block hover:text-accent transition-colors">Scholarships</a>
              <a href="/application" className="block hover:text-accent transition-colors">Apply Now</a>
              <a href="/mentorship" className="block hover:text-accent transition-colors">Mentorship</a>
              <a href="/donate" className="block hover:text-accent transition-colors">Donate</a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} DermElevate Scholarship Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
