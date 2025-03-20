import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useToast } from "../components/ui/use-toast";
import { SuccessDialog } from "../components/ui/success-dialog";
import { Button } from "../components/ui/button";

export default function WaitlistPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    businessType: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Submitting form data:", formData);

    try {
      const response = await emailjs.send(
        "service_t5ho4wp",
        "template_nsyodsa",
        {
          name: formData.name,
          email: formData.email,
          role: "business",
          message: "Waitlist signup request. Name: " + formData.name + ", Business Name: " + formData.businessName + ", Business Type: " + formData.businessType,
        },
        "gJP59D7Z4OMcoBDdm"
      );

      console.log("Email response:", response);

      if (response.status === 200) {
        setFormData({
          name: "",
          email: "",
          businessName: "",
          businessType: "",
        });
        setShowSuccessDialog(true);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Email send error:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your information. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-emerald-50">
      <section className="container py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tighter text-emerald-900 sm:text-5xl md:text-6xl">
            Coming Soon
          </h1>
          <p className="mt-4 text-xl text-emerald-700">
            Join our waitlist to be the first to know when we launch. Transform your business with Clario.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto mt-12 max-w-[600px]"
        >
          <Card className="border-emerald-200 bg-white shadow-xl">
            <CardHeader className="border-b border-emerald-100 bg-emerald-50">
              <CardTitle className="text-emerald-900">Join the Waitlist</CardTitle>
              <CardDescription className="text-emerald-700">
                Be the first to experience the future of product awareness across Africa.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-emerald-900">Full Name</label>
                  <Input
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="mt-2 border-emerald-200 bg-white text-black focus:border-emerald-500 focus:ring-emerald-500 placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-emerald-900">Email</label>
                  <Input
                    required
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="mt-2 border-emerald-200 bg-white text-black focus:border-emerald-500 focus:ring-emerald-500 placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-emerald-900">Business Name</label>
                  <Input
                    required
                    placeholder="Your business name"
                    value={formData.businessName}
                    onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                    className="mt-2 border-emerald-200 bg-white text-black focus:border-emerald-500 focus:ring-emerald-500 placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-emerald-900">Business Type</label>
                  <Select 
                    value={formData.businessType}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, businessType: value }))}
                  >
                    <SelectTrigger className="mt-2 border-emerald-200 bg-white text-black focus:border-emerald-500 focus:ring-emerald-500">
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manufacturer">Manufacturer/Brand</SelectItem>
                      <SelectItem value="retailer">Retailer</SelectItem>
                      <SelectItem value="distributor">Distributor</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Join Waitlist"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </section>
      
      <SuccessDialog 
        open={showSuccessDialog} 
        onOpenChange={setShowSuccessDialog}
      />
    </div>
  );
}