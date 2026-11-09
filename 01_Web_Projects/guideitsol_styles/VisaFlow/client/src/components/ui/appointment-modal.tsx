import { useState } from "react";
import { Clock, Video, Mail, Phone, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface AppointmentModalProps {
  trigger?: React.ReactNode;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const AppointmentModal = ({ trigger, defaultOpen = false, onOpenChange }: AppointmentModalProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const [date, setDate] = useState<Date>();
  const [timeSlot, setTimeSlot] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    consultationType: "",
    message: "",
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const consultationTypes = [
    "Study Abroad Visa",
    "Work & Business Visa", 
    "Travel & Tourism Visa",
    "Visa Extension & Renewal",
    "Document Verification",
    "Immigration Consultation",
    "IT Consulting",
    "Software Development",
    "UI/UX Design",
    "Data Analytics",
    "Cybersecurity",
    "Digital Marketing"
  ];

  const appointmentMutation = useMutation({
    mutationFn: (data: any) => apiRequest("POST", "/api/appointments", data),
    onSuccess: () => {
      toast({
        title: "Appointment Booked!",
        description: "We've sent a Google Meet invite to info@guideitsol.com. You'll receive confirmation shortly.",
      });
      setOpen(false);
      resetForm();
      queryClient.invalidateQueries({ queryKey: ["/api/appointments"] });
    },
    onError: (error) => {
      toast({
        title: "Booking Failed",
        description: "Unable to book appointment. Please try again.",
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
      consultationType: "",
      message: "",
    });
    setDate(undefined);
    setTimeSlot("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !timeSlot || !formData.consultationType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const appointmentData = {
      ...formData,
      preferredDate: date,
      timeSlot,
      hrEmail: "info@guideitsol.com",
      googleMeet: true,
    };

    appointmentMutation.mutate(appointmentData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={(newOpen) => {
      setOpen(newOpen);
      onOpenChange?.(newOpen);
    }}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-gradient-to-r from-stellar-orange to-electric-blue hover:from-stellar-orange/90 hover:to-electric-blue/90">
            <Calendar className="mr-2 h-4 w-4" />
            Book Appointment
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Video className="h-6 w-6 text-electric-blue" />
              <span>Book Google Meet Consultation</span>
            </div>
            <p className="text-sm text-muted-foreground font-normal">
              Schedule a video consultation with our experts
            </p>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <User className="mr-2 h-5 w-5" />
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">First Name *</label>
                <Input
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Last Name *</label>
                <Input
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Email *</label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Phone *</label>
                                 <Input
                   type="tel"
                   placeholder="Enter your phone number"
                   value={formData.phone}
                   onChange={(e) => handleInputChange("phone", e.target.value)}
                   required
                 />
              </div>
            </div>
          </div>

          {/* Consultation Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <MessageSquare className="mr-2 h-5 w-5" />
              Consultation Details
            </h3>
            <div>
              <label className="text-sm font-medium mb-2 block">Consultation Type *</label>
              <Select
                value={formData.consultationType}
                onValueChange={(value) => handleInputChange("consultationType", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select consultation type" />
                </SelectTrigger>
                <SelectContent>
                  {consultationTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Additional Message</label>
              <Textarea
                placeholder="Tell us about your specific needs or questions..."
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                rows={3}
              />
            </div>
          </div>

          {/* Schedule */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Appointment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Date *</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date: Date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Time *</label>
                <Select value={timeSlot} onValueChange={setTimeSlot}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Google Meet Info */}
          <div className="bg-gradient-to-r from-electric-blue/10 to-neon-cyan/10 p-4 rounded-lg border border-electric-blue/20">
            <div className="flex items-start space-x-3">
              <Video className="h-5 w-5 text-electric-blue mt-0.5" />
              <div>
                <h4 className="font-semibold text-electric-blue">Google Meet Consultation</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  A Google Meet invite will be automatically sent to <strong>info@guideitsol.com</strong> 
                  and you'll receive a confirmation email with the meeting link.
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-stellar-orange to-electric-blue hover:from-stellar-orange/90 hover:to-electric-blue/90"
              disabled={appointmentMutation.isPending}
            >
              {appointmentMutation.isPending ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Booking...
                </>
              ) : (
                <>
                  <Mail className="mr-2 h-4 w-4" />
                  Book Appointment
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentModal;
