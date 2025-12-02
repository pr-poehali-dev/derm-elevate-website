import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const BoardOfDirectors = () => {
  const boardMembers = [
    {
      id: 1,
      name: "Board Member Name",
      role: "Board Member Title",
      bio: "Short bio text about this board member will go here. It will highlight their professional background and connection to DermElevate."
    },
    {
      id: 2,
      name: "Board Member Name",
      role: "Board Member Title",
      bio: "Short bio text about this board member will go here. It will highlight their professional background and connection to DermElevate."
    },
    {
      id: 3,
      name: "Board Member Name",
      role: "Board Member Title",
      bio: "Short bio text about this board member will go here. It will highlight their professional background and connection to DermElevate."
    },
    {
      id: 4,
      name: "Board Member Name",
      role: "Board Member Title",
      bio: "Short bio text about this board member will go here. It will highlight their professional background and connection to DermElevate."
    },
    {
      id: 5,
      name: "Board Member Name",
      role: "Board Member Title",
      bio: "Short bio text about this board member will go here. It will highlight their professional background and connection to DermElevate."
    },
    {
      id: 6,
      name: "Board Member Name",
      role: "Board Member Title",
      bio: "Short bio text about this board member will go here. It will highlight their professional background and connection to DermElevate."
    }
  ];

  const advisors = [
    {
      id: 1,
      name: "Advisor Name",
      role: "Advisor Title",
      bio: "Short bio text about this advisor will go here."
    },
    {
      id: 2,
      name: "Advisor Name",
      role: "Advisor Title",
      bio: "Short bio text about this advisor will go here."
    },
    {
      id: 3,
      name: "Advisor Name",
      role: "Advisor Title",
      bio: "Short bio text about this advisor will go here."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Board of Directors</h1>
            <div className="h-1 w-24 bg-accent rounded mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              This page will introduce the DermElevate Scholarship Initiative Board of Directors and leadership team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {boardMembers.map((member) => (
              <Card key={member.id} className="shadow-lg overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Icon name="User" size={80} className="text-muted-foreground/30" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold mb-4">Advisors & Leadership</h2>
              <div className="h-1 w-20 bg-accent rounded mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {advisors.map((advisor) => (
                <Card key={advisor.id} className="shadow-lg overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <Icon name="UserCheck" size={64} className="text-muted-foreground/30" />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-1">{advisor.name}</h3>
                    <p className="text-primary font-semibold mb-3">{advisor.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {advisor.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="shadow-xl bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-12 text-center">
              <Icon name="Mail" size={48} className="text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Questions about DermElevate?</h2>
              <div className="h-1 w-16 bg-accent rounded mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                If you have any questions or require assistance, please don't hesitate to contact us. We are always eager to help in any way we can.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/#contact">
                  <Icon name="Send" size={18} className="mr-2" />
                  Contact Us
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

export default BoardOfDirectors;
