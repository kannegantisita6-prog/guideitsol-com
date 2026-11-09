import { useState } from "react";
import { X, Send, Phone, Mail, Calendar, MessageSquare, User, Building, Globe, GraduationCap, Briefcase, Plane, Clock, FileText, Home, Code, Smartphone, Palette, BarChart3, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface LightboxFormProps {
  isOpen: boolean;
  onClose: () => void;
  formType: "contact" | "consultation" | "appointment" | "quote" | "support" | "partnership";
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

const LightboxForm = ({ isOpen, onClose, formType, title, description, icon, gradient }: LightboxFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    budget: "",
    timeline: "",
    country: "",
    visaType: "",
    consultationType: "",
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const serviceOptions = {
    contact: [
      "General Inquiry",
      "Sales Question",
      "Support Request",
      "Partnership Opportunity",
      "Media Inquiry",
      "Other"
    ],
    consultation: [
      "Study Abroad Visa",
      "Work & Business Visa",
      "Travel & Tourism Visa",
      "Visa Extension & Renewal",
      "Document Verification",
      "Immigration Consultation"
    ],
    appointment: [
      "Free Consultation",
      "Visa Application Review",
      "Document Preparation",
      "Interview Preparation",
      "Appeal Process",
      "Emergency Service"
    ],
    quote: [
      "Software Development",
      "Mobile App Development",
      "UI/UX Design",
      "Data Analytics",
      "Cybersecurity",
      "Digital Marketing",
      "IT Consulting",
      "Custom Solution"
    ],
    support: [
      "Technical Support",
      "Application Status",
      "Document Issues",
      "Payment Problems",
      "Account Access",
      "General Support"
    ],
    partnership: [
      "Business Partnership",
      "Technology Partnership",
      "Educational Partnership",
      "Marketing Partnership",
      "Reseller Partnership",
      "Strategic Alliance"
    ]
  };

  const budgetOptions = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "Over $100,000"
  ];

  const timelineOptions = [
    "Immediate (1-2 weeks)",
    "Urgent (1 month)",
    "Standard (2-3 months)",
    "Flexible (3-6 months)",
    "Long-term (6+ months)"
  ];

  const countryOptions = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Netherlands",
    "Singapore",
    "Japan",
    "South Korea",
    "India",
    "Other"
  ];

  const visaTypeOptions = [
    "Student Visa",
    "Work Visa",
    "Business Visa",
    "Tourist Visa",
    "Family Visa",
    "Investor Visa",
    "Skilled Worker Visa",
    "Other"
  ];

  const formMutation = useMutation({
    mutationFn: (data: any) => apiRequest("POST", "/api/contact", { 
      ...data, 
      formType,
      submittedTo: "info@guideitsol.com"
    }),
    onSuccess: () => {
      toast({
        title: "Form Submitted Successfully!",
        description: "We've received your request and will contact you within 24 hours.",
      });
      onClose();
      resetForm();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: "Unable to submit form. Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
      budget: "",
      timeline: "",
      country: "",
      visaType: "",
      consultationType: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.email || !formData.service) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const submitData = {
      ...formData,
      submittedAt: new Date().toISOString(),
      formType,
      targetEmail: "info@guideitsol.com"
    };

    formMutation.mutate(submitData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getFormFields = () => {
    const baseFields = [
      { name: "firstName", label: "First Name *", type: "text", required: true },
      { name: "lastName", label: "Last Name *", type: "text", required: true },
      { name: "email", label: "Email *", type: "email", required: true },
      { name: "phone", label: "Phone *", type: "tel", required: true },
    ];

    switch (formType) {
      case "contact":
        return [
          ...baseFields,
          { name: "company", label: "Company", type: "text", required: false },
          { name: "service", label: "Inquiry Type *", type: "select", options: serviceOptions.contact, required: true },
          { name: "message", label: "Message *", type: "textarea", required: true },
        ];
      
      case "consultation":
        return [
          ...baseFields,
          { name: "country", label: "Target Country *", type: "select", options: countryOptions, required: true },
          { name: "visaType", label: "Visa Type *", type: "select", options: visaTypeOptions, required: true },
          { name: "consultationType", label: "Consultation Type *", type: "select", options: serviceOptions.consultation, required: true },
          { name: "message", label: "Additional Details", type: "textarea", required: false },
        ];
      
      case "appointment":
        return [
          ...baseFields,
          { name: "consultationType", label: "Appointment Type *", type: "select", options: serviceOptions.appointment, required: true },
          { name: "country", label: "Country", type: "select", options: countryOptions, required: false },
          { name: "message", label: "Specific Requirements", type: "textarea", required: false },
        ];
      
      case "quote":
        return [
          ...baseFields,
          { name: "company", label: "Company *", type: "text", required: true },
          { name: "service", label: "Service Required *", type: "select", options: serviceOptions.quote, required: true },
          { name: "budget", label: "Budget Range", type: "select", options: budgetOptions, required: false },
          { name: "timeline", label: "Timeline", type: "select", options: timelineOptions, required: false },
          { name: "message", label: "Project Details *", type: "textarea", required: true },
        ];
      
      case "support":
        return [
          ...baseFields,
          { name: "service", label: "Support Type *", type: "select", options: serviceOptions.support, required: true },
          { name: "message", label: "Issue Description *", type: "textarea", required: true },
        ];
      
      case "partnership":
        return [
          ...baseFields,
          { name: "company", label: "Company *", type: "text", required: true },
          { name: "service", label: "Partnership Type *", type: "select", options: serviceOptions.partnership, required: true },
          { name: "message", label: "Partnership Proposal *", type: "textarea", required: true },
        ];
      
      default:
        return baseFields;
    }
  };

  const renderField = (field: any) => {
    switch (field.type) {
      case "select":
        return (
          <Select
            value={formData[field.name as keyof typeof formData] as string}
            onValueChange={(value) => handleInputChange(field.name, value)}
          >
            <SelectTrigger>
              <SelectValue placeholder={`Select ${field.label.toLowerCase().replace(' *', '')}`} />
            </SelectTrigger>
            <SelectContent>
              {field.options.map((option: string) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      
      case "textarea":
        return (
          <Textarea
            placeholder={`Enter ${field.label.toLowerCase().replace(' *', '')}`}
            value={formData[field.name as keyof typeof formData] as string}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            rows={4}
          />
        );
      
      default:
        return (
          <Input
            type={field.type}
            placeholder={`Enter ${field.label.toLowerCase().replace(' *', '')}`}
            value={formData[field.name as keyof typeof formData] as string}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            required={field.required}
          />
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className={`p-3 rounded-xl ${gradient}`}>
                {icon}
              </div>
              <span>{title}</span>
            </div>
            <p className="text-sm text-muted-foreground font-normal">
              {description}
            </p>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {getFormFields().map((field, index) => (
              <div key={field.name} className={field.type === "textarea" ? "md:col-span-2" : ""}>
                <label className="text-sm font-medium mb-2 block">
                  {field.label}
                </label>
                {renderField(field)}
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className={`${gradient} hover:opacity-90 font-semibold text-lg`}
              disabled={formMutation.isPending}
            >
              {formMutation.isPending ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                                           Submit
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LightboxForm;
