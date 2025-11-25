import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">About DermElevate Scholarship Initiative</h1>
            <div className="h-1 w-24 bg-accent rounded mx-auto"></div>
          </div>

          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    The DermElevate Scholarship Initiative was established in late 2024.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    The DermElevate Scholarship Initiative is dedicated to supporting students interested in medicine, empowering and elevating them to reach their full potential.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Through financial assistance, mentorship programs, and community building, we create pathways for the next generation of healthcare professionals, with a special focus on dermatology and STEM fields.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Icon name="Target" size={32} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                  <div className="h-1 w-12 bg-accent rounded mx-auto mb-4"></div>
                  <p className="text-muted-foreground">
                    To provide financial support and mentorship to students pursuing careers in medicine, healthcare, and STEM, removing barriers to education and professional development.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Icon name="Eye" size={32} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                  <div className="h-1 w-12 bg-accent rounded mx-auto mb-4"></div>
                  <p className="text-muted-foreground">
                    A future where every talented student, regardless of background, has the opportunity to pursue their dreams in medicine and healthcare, creating a more diverse and inclusive medical community.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Icon name="Users" size={32} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Our Commitment</h3>
                  <div className="h-1 w-12 bg-accent rounded mx-auto mb-4"></div>
                  <p className="text-muted-foreground">
                    We are committed to promoting diversity, equity, and inclusion in medicine and dermatology, ensuring representation from all communities in the healthcare profession.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-center">Our Impact</h2>
                <div className="h-1 w-16 bg-accent rounded mx-auto mb-8"></div>
                
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">11</div>
                    <p className="text-muted-foreground">Scholarship Programs</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">$55,000</div>
                    <p className="text-muted-foreground">In Annual Awards</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <p className="text-muted-foreground">Committed to Students</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <img
                src="https://cdn.poehali.dev/projects/797fb6d2-03a5-4846-a9cd-bd04bd7c1df4/files/3e0acdb5-2c7c-4818-9602-8d958184754c.jpg"
                alt="Student success"
                className="rounded-2xl shadow-xl w-full max-w-2xl mx-auto h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
