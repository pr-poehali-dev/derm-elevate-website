import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Donate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Support DermElevate Scholarships</h1>
            <div className="h-1 w-24 bg-accent rounded mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your donation funds scholarships for high school and college students interested in medicine, STEM, and dermatology. Every contribution helps a student achieve their dreams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Icon name="GraduationCap" size={32} className="text-primary" />
                  </div>
                </div>
                <CardTitle>Fund Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Help cover tuition, textbooks, and educational materials for deserving students pursuing healthcare careers.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Icon name="Stethoscope" size={32} className="text-primary" />
                  </div>
                </div>
                <CardTitle>Support Medical Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Enable students to participate in medical programs, research opportunities, and professional development experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Icon name="Plane" size={32} className="text-primary" />
                  </div>
                </div>
                <CardTitle>Enable Travel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Support students participating in medical mission trips, conferences, and international healthcare experiences.
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
                <CardTitle>Build Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Fund mentorship programs, peer support groups, and networking events that connect students with healthcare professionals.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Make Your Donation</CardTitle>
              <div className="h-1 w-16 bg-accent rounded mx-auto mt-2"></div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="max-w-xl mx-auto space-y-6">
                <div>
                  <Label className="text-base mb-3 block">Select Amount</Label>
                  <RadioGroup defaultValue="100" className="grid grid-cols-2 gap-4">
                    <Label
                      htmlFor="50"
                      className="flex items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:border-accent cursor-pointer [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/5"
                    >
                      <RadioGroupItem value="50" id="50" className="sr-only" />
                      <span className="text-lg font-semibold">$50</span>
                    </Label>
                    <Label
                      htmlFor="100"
                      className="flex items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:border-accent cursor-pointer [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/5"
                    >
                      <RadioGroupItem value="100" id="100" className="sr-only" />
                      <span className="text-lg font-semibold">$100</span>
                    </Label>
                    <Label
                      htmlFor="250"
                      className="flex items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:border-accent cursor-pointer [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/5"
                    >
                      <RadioGroupItem value="250" id="250" className="sr-only" />
                      <span className="text-lg font-semibold">$250</span>
                    </Label>
                    <Label
                      htmlFor="500"
                      className="flex items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:border-accent cursor-pointer [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/5"
                    >
                      <RadioGroupItem value="500" id="500" className="sr-only" />
                      <span className="text-lg font-semibold">$500</span>
                    </Label>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="custom-amount" className="text-base mb-2 block">
                    Or Enter Custom Amount
                  </Label>
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder="Enter amount"
                    className="text-lg h-12"
                  />
                </div>

                <div>
                  <Label className="text-base mb-3 block">Donation Frequency</Label>
                  <RadioGroup defaultValue="one-time" className="grid grid-cols-2 gap-4">
                    <Label
                      htmlFor="one-time"
                      className="flex items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:border-accent cursor-pointer [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/5"
                    >
                      <RadioGroupItem value="one-time" id="one-time" className="sr-only" />
                      <span className="font-semibold">One-Time</span>
                    </Label>
                    <Label
                      htmlFor="monthly"
                      className="flex items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:border-accent cursor-pointer [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/5"
                    >
                      <RadioGroupItem value="monthly" id="monthly" className="sr-only" />
                      <span className="font-semibold">Monthly</span>
                    </Label>
                  </RadioGroup>
                </div>

                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg h-14">
                  <Icon name="Heart" size={20} className="mr-2" />
                  Complete Donation
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Your donation is tax-deductible. You will receive a receipt via email.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg mt-8 bg-muted/30">
            <CardHeader>
              <CardTitle className="text-2xl">Other Ways to Give</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Mail" size={18} className="text-primary" />
                    Mail a Check
                  </h4>
                  <p className="text-muted-foreground text-sm ml-6">
                    Make checks payable to "DermElevate Scholarship Initiative" and mail to:<br />
                    <span className="block mt-1">
                      DermElevate Scholarship Initiative<br />
                      Atlanta, GA
                    </span>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Building" size={18} className="text-primary" />
                    Bank Transfer
                  </h4>
                  <p className="text-muted-foreground text-sm ml-6">
                    Contact us at info@dermelevate.org for wire transfer information.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
