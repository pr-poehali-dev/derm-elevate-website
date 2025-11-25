import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Scholarships', path: '/scholarships' },
    { label: 'College Scholarship Application', path: '/application' },
    { label: 'Mentorship', path: '/mentorship' },
    { label: 'About', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex flex-col">
            <h1 className="text-2xl font-bold text-primary">DermElevate</h1>
            <p className="text-xs text-muted-foreground italic">Scholarship Initiative</p>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/donate">Donate</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
