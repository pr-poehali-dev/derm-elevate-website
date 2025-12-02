import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const ScholarshipDetail = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="flex justify-center gap-2 mb-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">High School</Badge>
              <Badge className="bg-accent/10 text-accent border-accent/20">Skin Innovation</Badge>
            </div>
            
            <h1 className="text-5xl font-bold mb-4">
              The Alex Gross High School Skin Innovation Award
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Established by DermElevate in Honor of Dr. Alexander S. Gross, MD, FAAD
            </p>
            
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg"
            >
              <a 
                href="https://form.jotform.com/251177027933054" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Icon name="FileText" size={20} className="mr-2" />
                Apply for this Scholarship
              </a>
            </Button>
          </div>

          <Card className="shadow-xl mb-8">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Icon name="BookOpen" size={28} className="text-primary" />
                Scholarship Description
              </h2>
              <div className="h-1 w-16 bg-accent rounded mb-8"></div>
              
              <div className="prose prose-lg max-w-none space-y-6 text-foreground">
                <h3 className="text-2xl font-bold text-primary">
                  The Alex Gross High School Skin Innovation Award
                </h3>
                <p className="text-lg italic text-muted-foreground">
                  Established by DermElevate in Honor of Dr. Alexander S. Gross, MD, FAAD
                </p>

                <p className="leading-relaxed">
                  The Alex Gross High School Skin Innovation Award honors the lifelong service, leadership, and mentorship of Dr. Alexander S. Gross, a dual board-certified dermatologist and internist, clinical educator, and dedicated public health advocate. This award is designed to support high school students with a passion for medicine and dermatology by easing the financial barriers to early educational opportunities, mentorship programs, and enrichment experiences that foster future careers in skin health.
                </p>

                <p className="leading-relaxed">
                  Dr. Gross received his Bachelor of Science in Biology from Emory University and his medical degree from the University of South Florida College of Medicine. He completed his internship and internal medicine residency at Emory University, followed by a dermatology residency and fellowship at Vanderbilt University. A renowned physician in Georgia, Dr. Gross currently practices in Cumming, GA, and serves as an Assistant Clinical Professor of Dermatology at Emory University.
                </p>

                <p className="leading-relaxed">
                  His distinguished career includes service on the Board of Directors for both the American Academy of Dermatology and the Georgia Society of Dermatology and Dermatologic Surgery. He is a past Chair of the Georgia Composite Medical Board and a Fellow of both the National Federation of State Medical Boards and the American Academy of Cosmetic Surgery. Dr. Gross has received numerous accolades, including the AADA Advocate of the Year Award, Presidential Awards from the ASDS and AAD, and the Federation of State Medical Boards' National Leadership Award in 2024.
                </p>

                <p className="leading-relaxed">
                  Beyond medicine, Dr. Gross is known for his commitment to community service—volunteering at the Mercy Care Clinic, which he helped co-found, supporting the American Cancer Society, and advising the Gateway Center in Atlanta. His love for music, professional sports, and biking reflect his well-rounded spirit and dedication to balance and compassion in life and work.
                </p>

                <p className="leading-relaxed">
                  The DermElevate Scholarship Initiative is proud to recognize Dr. Gross's legacy through this award. In his honor, we aim to elevate the next generation of leaders in dermatology and medicine—starting with their very first steps.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl mb-8 bg-primary/5">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Icon name="ClipboardList" size={24} className="text-primary" />
                High School–Specific Questions and Application Edits
              </h2>
              <div className="h-1 w-16 bg-accent rounded mb-6"></div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">
                    Add Parent/Caregiver signature/approval for application
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">
                    Edit to current high school contact information/address, enrollment status, current GPA, anticipated HS graduation date; remove college inquiries
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">
                    Remove college transcript, edit HS to "Current Academic Transcript"; ACT/SAT score if taken, professional headshot (or one clearly upper chest and above, front facing to camera with full face in shot)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">
                    Edit question to also include "what do you hope to do after high school?"
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">
                    Edit financial need to "ACT, SAT, summer programs, etc."
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">
                    Add authorization/signature to use story and headshot for future website materials to promote our student alumni and showcase how grant funders contribute to their education
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-xl mb-8 bg-accent/5">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Icon name="HelpCircle" size={24} className="text-accent" />
                Scholarship-Specific Question
              </h2>
              <div className="h-1 w-16 bg-primary rounded mb-6"></div>
              
              <div className="bg-background p-6 rounded-lg border-2 border-accent/20">
                <p className="text-lg font-medium text-foreground">
                  What healthcare/dermatology focused project, community initiative, or experience would you like to use this grant funding towards?
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Icon name="MessageCircle" size={24} className="text-primary" />
                Post-Scholarship Use Questions
              </h2>
              <div className="h-1 w-16 bg-accent rounded mb-6"></div>
              
              <ol className="space-y-4 list-decimal list-inside">
                <li className="text-foreground leading-relaxed">
                  What healthcare/dermatology focused project, community initiative, or experience did you use this grant towards?
                </li>
                <li className="text-foreground leading-relaxed">
                  How did this grant allow you to pursue your interest in medicine/dermatology? What did you learn or what skills did you gain?
                </li>
                <li className="text-foreground leading-relaxed">
                  Please write a brief thank-you note describing what you did with the grant, what you learned/skills gained, and anything else you want our donators to know!
                </li>
              </ol>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
            >
              <a 
                href="https://form.jotform.com/251177027933054" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Icon name="FileText" size={20} className="mr-2" />
                Apply for this Scholarship
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/5 w-full sm:w-auto"
            >
              <Link to="/scholarships">
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                Back to All Scholarships
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ScholarshipDetail;
