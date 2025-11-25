import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Application = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">DSI College Scholarship Application</h1>
            <div className="h-1 w-24 bg-accent rounded mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Complete this application to be considered for DermElevate Scholarship Initiative college scholarships
            </p>
          </div>

          <Card className="shadow-xl mb-8">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="Info" size={24} className="text-primary" />
                Application Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Eligibility Criteria</h3>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-accent mt-1 flex-shrink-0" />
                      <span>Must be a resident of Georgia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-accent mt-1 flex-shrink-0" />
                      <span>Currently enrolled in or accepted to an accredited college/university</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-accent mt-1 flex-shrink-0" />
                      <span>Pursuing a degree in pre-med, STEM, health sciences, or related field</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-accent mt-1 flex-shrink-0" />
                      <span>Demonstrate academic achievement and commitment to healthcare</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Application Timeline</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Application Period:</strong> August 1 - December 1, 2025</p>
                    <p><strong>Review Period:</strong> December 2025 - January 2026</p>
                    <p><strong>Awards Announced:</strong> February 2026</p>
                    <p><strong>Award Distribution:</strong> March 2026</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Application Process</h3>
                  <ol className="space-y-2 text-muted-foreground ml-6 list-decimal">
                    <li>Complete all sections of this application form</li>
                    <li>Upload required documents (transcripts, photo ID, reference letters)</li>
                    <li>Submit essay responses for selected scholarship(s)</li>
                    <li>Provide financial assistance information if applicable</li>
                    <li>Review and sign statement of accuracy</li>
                    <li>Submit application before deadline</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <form className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="User" size={20} className="text-primary" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="Enter first name" />
                  </div>
                  <div>
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Enter last name" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Mailing Address</Label>
                  <Input id="address" placeholder="Street address" />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="City" />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input id="state" placeholder="GA" />
                  </div>
                  <div>
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" placeholder="30301" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="GraduationCap" size={20} className="text-primary" />
                  Education Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Label htmlFor="college">College/University Name</Label>
                  <Input id="college" placeholder="Enter institution name" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="major">Major/Field of Study</Label>
                    <Input id="major" placeholder="e.g., Biology, Pre-Med" />
                  </div>
                  <div>
                    <Label htmlFor="year">Current Year</Label>
                    <Input id="year" placeholder="e.g., Sophomore, Junior" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="gpa">Current GPA</Label>
                    <Input id="gpa" type="number" step="0.01" placeholder="3.50" />
                  </div>
                  <div>
                    <Label htmlFor="grad-year">Expected Graduation Year</Label>
                    <Input id="grad-year" placeholder="2027" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Heart" size={20} className="text-primary" />
                  Volunteer Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Label htmlFor="volunteer">
                    Describe your volunteer experience in healthcare, community service, or related activities
                  </Label>
                  <Textarea
                    id="volunteer"
                    placeholder="Include organization names, dates, hours, and your role"
                    rows={5}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Briefcase" size={20} className="text-primary" />
                  Employment History
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Label htmlFor="employment">
                    List any employment or work experience (including healthcare-related positions)
                  </Label>
                  <Textarea
                    id="employment"
                    placeholder="Include employer, position, dates, and responsibilities"
                    rows={5}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="FileText" size={20} className="text-primary" />
                  Essay Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <Label htmlFor="essay1">
                    1. Why are you interested in pursuing a career in medicine or healthcare?
                  </Label>
                  <Textarea
                    id="essay1"
                    placeholder="Your response (max 500 words)"
                    rows={6}
                  />
                </div>

                <div>
                  <Label htmlFor="essay2">
                    2. How will this scholarship help you achieve your academic and career goals?
                  </Label>
                  <Textarea
                    id="essay2"
                    placeholder="Your response (max 500 words)"
                    rows={6}
                  />
                </div>

                <div>
                  <Label htmlFor="essay3">
                    3. Describe a challenge you have overcome and what you learned from the experience.
                  </Label>
                  <Textarea
                    id="essay3"
                    placeholder="Your response (max 500 words)"
                    rows={6}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="UserCheck" size={20} className="text-primary" />
                  References & Contacts
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <p className="text-sm text-muted-foreground">
                  Please provide contact information for two references (teachers, professors, mentors, or employers)
                </p>

                <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold">Reference 1</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="ref1-name">Full Name</Label>
                      <Input id="ref1-name" />
                    </div>
                    <div>
                      <Label htmlFor="ref1-relationship">Relationship</Label>
                      <Input id="ref1-relationship" placeholder="e.g., Professor, Supervisor" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="ref1-email">Email</Label>
                      <Input id="ref1-email" type="email" />
                    </div>
                    <div>
                      <Label htmlFor="ref1-phone">Phone</Label>
                      <Input id="ref1-phone" type="tel" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold">Reference 2</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="ref2-name">Full Name</Label>
                      <Input id="ref2-name" />
                    </div>
                    <div>
                      <Label htmlFor="ref2-relationship">Relationship</Label>
                      <Input id="ref2-relationship" placeholder="e.g., Professor, Supervisor" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="ref2-email">Email</Label>
                      <Input id="ref2-email" type="email" />
                    </div>
                    <div>
                      <Label htmlFor="ref2-phone">Phone</Label>
                      <Input id="ref2-phone" type="tel" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="DollarSign" size={20} className="text-primary" />
                  Financial Assistance
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Label htmlFor="financial-need">
                    Describe your financial need and how this scholarship will impact your education (optional)
                  </Label>
                  <Textarea
                    id="financial-need"
                    placeholder="Explain any financial circumstances that make this scholarship important to you"
                    rows={5}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={20} className="text-primary" />
                  Final Application Checklist
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Please confirm that you have completed all required sections:
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="check1" />
                    <label htmlFor="check1" className="text-sm cursor-pointer">
                      Personal information completed
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="check2" />
                    <label htmlFor="check2" className="text-sm cursor-pointer">
                      Education information provided
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="check3" />
                    <label htmlFor="check3" className="text-sm cursor-pointer">
                      Volunteer and employment history included
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="check4" />
                    <label htmlFor="check4" className="text-sm cursor-pointer">
                      Essay questions answered
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="check5" />
                    <label htmlFor="check5" className="text-sm cursor-pointer">
                      Two references provided
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="check6" />
                    <label htmlFor="check6" className="text-sm cursor-pointer">
                      Photo ID ready for upload
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="check7" />
                    <label htmlFor="check7" className="text-sm cursor-pointer">
                      Official transcripts ready for upload
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-primary/30">
              <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="FileSignature" size={20} className="text-primary" />
                  Statement of Accuracy
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg text-sm">
                  <p className="mb-4">
                    I certify that all information provided in this application is true, complete, and accurate to the best of my knowledge. I understand that any false or misleading information may result in disqualification from scholarship consideration or revocation of any awarded scholarship.
                  </p>
                  <p>
                    I authorize the DermElevate Scholarship Initiative to verify the information provided and to contact my references. I understand that receipt of this application does not guarantee a scholarship award.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="signature">Digital Signature (Type Full Name)</Label>
                    <Input id="signature" placeholder="Type your full legal name" />
                  </div>
                  <div>
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" />
                  </div>
                </div>

                <div className="flex items-start space-x-2 pt-4">
                  <Checkbox id="agreement" />
                  <label htmlFor="agreement" className="text-sm cursor-pointer">
                    I agree to the statement of accuracy above and certify that all information provided is truthful
                  </label>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-4">
              <Button variant="outline" size="lg" className="border-primary text-primary">
                Save as Draft
              </Button>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Send" size={18} className="mr-2" />
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Application;
