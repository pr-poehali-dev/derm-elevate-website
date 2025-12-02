import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Scholarships = () => {
  const [filter, setFilter] = useState('All');

  const scholarships = [
    {
      name: 'Loree Davis Camp Discovery Program',
      amount: '$5,000',
      deadline: 'September 15, 2025',
      eligibility: 'GA HS freshman/sophomores, GPA > 3.5',
      website: 'www.dermelevate.org',
      notes: 'Google Doc Application',
      category: 'High School',
    },
    {
      name: 'Hiram Sturm Academic Excellence Grant*',
      amount: '$5,000',
      deadline: 'October 1, 2025',
      eligibility: 'GA HS Seniors (PreMed), any major- Essay Required',
      website: 'www.dermelevate.org',
      notes: 'Google Doc Application',
      category: 'High School',
    },
    {
      name: 'Alex Gross Skin Innovation Award',
      amount: '$5,000',
      deadline: 'August 30, 2025',
      eligibility: 'GA HS Innovation Project-Essay Required',
      website: 'www.dermelevate.org',
      notes: 'Google Doc Application',
      category: 'High School',
      detailsLink: '/scholarships/alex-gross',
    },
    {
      name: 'Toni McCullough HS Equity Scholarship',
      amount: '$5,000',
      deadline: 'November 5, 2025',
      eligibility: 'GA HS Minority/ International students, any level',
      website: 'www.dermelevate.org',
      notes: 'Google Doc Application',
      category: 'High School',
    },
    {
      name: 'John Weiss Science Achievers Program*',
      amount: '$5,000',
      deadline: 'October 15, 2025',
      eligibility: 'GA STEM majors, GPA > 3.2, Funding Dermatology Project',
      website: 'www.dermelevate.org',
      notes: 'Google Doc Application',
      category: 'College',
    },
    {
      name: 'Mary Spraker International Fellowship*',
      amount: '$5,000',
      deadline: 'December 1, 2025',
      eligibility: 'GA College Travel Abroad Medical- Video required',
      website: 'www.dermelevate.org',
      notes: 'Google Doc Application',
      category: 'College',
    },
    {
      name: 'Sanders Callaway Equity Trailblazers Fund',
      amount: '$5,000',
      deadline: 'September 25, 2025',
      eligibility: 'GA College Underrepresented STEM students, Essay Required',
      website: 'www.dermelevate.org',
      notes: 'Google Doc Application',
      category: 'College',
    },
    {
      name: 'Carl Washington Healthcare Heroes Award',
      amount: '$5,000',
      deadline: 'October 20, 2025',
      eligibility: 'GA College Pre Med or Health Science majors, Volunteer Project',
      website: 'www.dermelevate.org',
      notes: 'Google Doc Application',
      category: 'College',
    },
    {
      name: 'Harold Brody Diversity Leader Award',
      amount: '$5,000',
      deadline: 'September 10, 2025',
      eligibility: 'GA College Funds Diversity Project College Students GPA > 3.7',
      website: 'www.dermelevate.org',
      notes: 'Google Doc Application',
      category: 'College',
    },
    {
      name: 'Katarina Nalovic High Acheivement Award*',
      amount: '$5,000',
      deadline: 'November 30, 2025',
      eligibility: 'GA College Pre Med Application Support GPA 3.8 MCAT 515 or higher',
      website: 'www.dermelevate.org',
      notes: 'Google Doc Application',
      category: 'College',
    },
    {
      name: 'Robert Fine Citizenship Award',
      amount: '$5,000',
      deadline: 'December 1, 2025',
      eligibility: 'GA College Citizen Award GPA 3.5,essay required',
      website: 'www.dermelevate.org',
      notes: 'Google Doc Application',
      category: 'College',
    },
  ];

  const filteredScholarships = filter === 'All' 
    ? scholarships 
    : scholarships.filter(s => s.category === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Available Scholarships</h1>
            <div className="h-1 w-24 bg-accent rounded mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our comprehensive list of scholarships for high school and college students interested in medicine, STEM, and healthcare careers.
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            {['All', 'High School', 'College'].map((category) => (
              <Button
                key={category}
                variant={filter === category ? 'default' : 'outline'}
                onClick={() => setFilter(category)}
                className={filter === category ? 'bg-primary hover:bg-primary/90' : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScholarships.map((scholarship, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <Badge className="bg-accent text-accent-foreground">{scholarship.category}</Badge>
                    <span className="text-xl font-bold text-primary">{scholarship.amount}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight">{scholarship.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-3 flex-1">
                    <div>
                      <div className="flex items-start gap-2">
                        <Icon name="Calendar" size={16} className="text-muted-foreground mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase">Deadline</p>
                          <p className="text-sm">{scholarship.deadline}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start gap-2">
                        <Icon name="CheckCircle" size={16} className="text-muted-foreground mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase">Eligibility</p>
                          <p className="text-sm">{scholarship.eligibility}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start gap-2">
                        <Icon name="FileText" size={16} className="text-muted-foreground mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase">Application</p>
                          <p className="text-sm">{scholarship.notes}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {scholarship.detailsLink ? (
                    <div className="flex flex-col gap-2 mt-6">
                      <Button asChild className="w-full bg-primary hover:bg-primary/90">
                        <Link to={scholarship.detailsLink}>
                          <Icon name="Info" size={16} className="mr-2" />
                          View Details
                        </Link>
                      </Button>
                    </div>
                  ) : (
                    <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                      Apply
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground italic">
              * subject to approval by named dermatologists
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Scholarships;