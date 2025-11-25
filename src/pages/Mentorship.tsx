import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Mentorship = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h1 className="text-5xl font-bold mb-4">Mentorship & Support</h1>
              <div className="h-1 w-24 bg-accent rounded mb-6"></div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Connect with experienced mentors and supportive peer groups as you navigate your journey toward a career in medicine and healthcare. Our mentorship program provides guidance, resources, and community every step of the way.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're a high school student exploring your options or a college student preparing for medical school, our mentors and peer groups are here to help you succeed.
              </p>
            </div>

            <div>
              <img
                src="https://cdn.poehali.dev/projects/797fb6d2-03a5-4846-a9cd-bd04bd7c1df4/files/d2e6365f-cd9e-48b6-be0d-d93edc3742d3.jpg"
                alt="Mentorship group"
                className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Icon name="UserCheck" size={32} className="text-primary" />
                  </div>
                </div>
                <CardTitle>One-on-One Mentorship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Connect with experienced professionals in medicine, dermatology, and healthcare for personalized guidance and career advice.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Icon name="Users" size={32} className="text-primary" />
                  </div>
                </div>
                <CardTitle>Peer Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Join supportive communities of fellow students sharing similar goals, challenges, and experiences in pursuing healthcare careers.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Icon name="BookOpen" size={32} className="text-primary" />
                  </div>
                </div>
                <CardTitle>Resources & Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Access exclusive educational materials, attend workshops, and participate in webinars on medical school preparation and career planning.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-xl bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Join Our Mentorship Groups</CardTitle>
              <div className="h-1 w-16 bg-accent rounded mx-auto mt-2 mb-4"></div>
              <CardDescription className="text-base">
                Connect with mentors and peers through our community chat groups
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <Card className="shadow-lg border-2 border-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="GraduationCap" size={28} className="text-primary" />
                      <CardTitle>High School Group</CardTitle>
                    </div>
                    <CardDescription>
                      For high school students exploring medicine and healthcare careers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        <span>College preparation guidance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        <span>Science competition support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        <span>Volunteer opportunity sharing</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Icon name="MessageCircle" size={18} className="mr-2" />
                      Join High School Group
                    </Button>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-2 border-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="BookOpen" size={28} className="text-primary" />
                      <CardTitle>College Group</CardTitle>
                    </div>
                    <CardDescription>
                      For college students preparing for medical school and healthcare careers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        <span>Medical school application tips</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        <span>MCAT study strategies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        <span>Research experience sharing</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Icon name="MessageCircle" size={18} className="mr-2" />
                      Join College Group
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <p className="text-sm text-muted-foreground">
                  Groups are monitored and moderated to ensure a supportive and respectful environment for all members.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mentorship;
