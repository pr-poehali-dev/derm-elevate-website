import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Home = () => {
  const scholarships = [
    {
      name: 'Loree Davis Camp Discovery Program',
      description: 'Supporting high school freshmen and sophomores with strong academic achievement',
      amount: '$5,000',
      category: 'High School',
    },
    {
      name: 'Sanders Callaway Equity Trailblazers Fund',
      description: 'For underrepresented STEM students committed to diversity in healthcare',
      amount: '$5,000',
      category: 'College',
    },
    {
      name: 'Mary Spraker International Fellowship',
      description: 'Travel abroad medical experience for college students',
      amount: '$5,000',
      category: 'College',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-5xl font-bold text-primary mb-3">
                  DermElevate Scholarship Initiative
                </h2>
                <div className="h-1 w-24 bg-accent rounded mb-6"></div>
                <p className="text-xl text-muted-foreground italic mb-4">
                  Empowering Futures... Elevating Minds
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Supporting high school and college students interested in medicine, STEM, healthcare, and dermatology through scholarships, mentorship, and community.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                  <Link to="/scholarships">View Scholarships</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link to="/application">Apply Now</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/797fb6d2-03a5-4846-a9cd-bd04bd7c1df4/files/76d4aa05-bed6-439b-8691-a929dc2ba548.jpg"
                alt="Diverse students studying together"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">What We Offer</CardTitle>
              <div className="h-1 w-16 bg-accent rounded mx-auto mt-2"></div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-accent/20 rounded-full">
                      <Icon name="GraduationCap" size={32} className="text-accent" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">High School Scholarships</h3>
                  <p className="text-sm text-muted-foreground">Financial support for aspiring students from freshman to senior year</p>
                </div>

                <div className="text-center p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-accent/20 rounded-full">
                      <Icon name="BookOpen" size={32} className="text-accent" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">College Scholarships</h3>
                  <p className="text-sm text-muted-foreground">Awards for pre-med, STEM, and health science majors pursuing higher education</p>
                </div>

                <div className="text-center p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-accent/20 rounded-full">
                      <Icon name="Users" size={32} className="text-accent" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">Mentorship & Support</h3>
                  <p className="text-sm text-muted-foreground">Connect with mentors and peers in group discussions and guidance sessions</p>
                </div>

                <div className="text-center p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-accent/20 rounded-full">
                      <Icon name="Heart" size={32} className="text-accent" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">Equity & Diversity</h3>
                  <p className="text-sm text-muted-foreground">Promoting representation in medicine and dermatology for all communities</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">Featured Scholarships</h2>
            <div className="h-1 w-16 bg-accent rounded mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {scholarships.map((scholarship, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-accent text-accent-foreground">{scholarship.category}</Badge>
                    <span className="text-lg font-bold text-primary">{scholarship.amount}</span>
                  </div>
                  <CardTitle className="text-xl">{scholarship.name}</CardTitle>
                  <CardDescription className="text-base">{scholarship.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="default" size="sm" className="w-full bg-primary hover:bg-primary/90" asChild>
                    <Link to="/scholarships">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="link" asChild className="text-primary text-lg">
              <Link to="/scholarships">
                View All Scholarships <Icon name="ArrowRight" size={20} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/797fb6d2-03a5-4846-a9cd-bd04bd7c1df4/files/d2e6365f-cd9e-48b6-be0d-d93edc3742d3.jpg"
                alt="Mentorship group discussion"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Mentorship & Support</h2>
              <div className="h-1 w-16 bg-accent rounded"></div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Connect with experienced mentors and join supportive peer groups. Our mentorship program provides guidance, resources, and community for students navigating their path to medicine and healthcare careers.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/mentorship">Learn More About Mentorship</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto">
          <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Support Our Mission</h2>
              <div className="h-1 w-16 bg-accent rounded mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Your donation helps fund scholarships and support programs for deserving students pursuing careers in medicine and healthcare. Every contribution makes a difference in a student's journey.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link to="/donate">
                  <Icon name="Heart" size={20} className="mr-2" />
                  Donate Now
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
