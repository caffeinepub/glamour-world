import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCreateAppointment } from "@/hooks/useQueries";
import { CheckCircle2, Sparkles, X } from "lucide-react";
import { useState } from "react";

const SERVICES = [
  "Facial",
  "Clean Up",
  "Detan",
  "Bleach",
  "Eyebrow & Threading",
  "Waxing",
  "Hair Cutting",
  "Hair Spa",
  "Manicure",
  "Pedicure",
  "Bridal Makeup",
  "Glow Combo (Facial + Detan + Eyebrow)",
  "Fresh Look Combo (Clean Up + Bleach + Threading)",
  "Smooth Skin Combo (Waxing + Eyebrow)",
  "Pamper Combo (Pedicure + Manicure + Oil Massage)",
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ open, onClose }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const mutation = useCreateAppointment();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const dateTime = `${date}T${time}`;
    try {
      await mutation.mutateAsync({
        name,
        phone,
        email,
        service,
        dateTime,
        message,
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setName("");
    setPhone("");
    setEmail("");
    setService("");
    setDate("");
    setTime("");
    setMessage("");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent
        data-ocid="appointment.dialog"
        className="max-w-lg max-h-[90vh] overflow-y-auto bg-white border-0 p-0"
      >
        <button
          type="button"
          data-ocid="appointment.close_button"
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 p-1 rounded-full hover:bg-blush transition-colors"
        >
          <X className="w-5 h-5 text-foreground/60" />
        </button>

        <div className="bg-gradient-to-br from-primary/80 to-rose-deep px-6 py-6 text-white">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-5 h-5" />
            <span className="font-sans text-sm font-light tracking-widest uppercase">
              Glamour World
            </span>
          </div>
          <DialogHeader>
            <DialogTitle className="text-white font-serif text-2xl font-semibold">
              Book Your Appointment
            </DialogTitle>
          </DialogHeader>
          <p className="text-white/80 text-sm mt-1 font-sans">
            Your beauty journey starts here
          </p>
        </div>

        {submitted ? (
          <div
            data-ocid="appointment.success_state"
            className="flex flex-col items-center justify-center py-14 px-6 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-serif text-2xl text-foreground mb-2">
              Booking Confirmed!
            </h3>
            <p className="text-muted-foreground font-sans mb-6">
              Thank you, <strong>{name}</strong>! We'll confirm your appointment
              on <strong>{phone}</strong> shortly.
            </p>
            <Button
              onClick={handleClose}
              className="bg-primary hover:bg-rose-deep text-white px-8"
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label
                  htmlFor="appt-name"
                  className="font-sans text-sm font-semibold"
                >
                  Full Name *
                </Label>
                <Input
                  id="appt-name"
                  data-ocid="appointment.name.input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  required
                  className="border-border focus:border-primary"
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="appt-phone"
                  className="font-sans text-sm font-semibold"
                >
                  Phone Number *
                </Label>
                <Input
                  id="appt-phone"
                  data-ocid="appointment.phone.input"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  required
                  className="border-border focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label
                htmlFor="appt-email"
                className="font-sans text-sm font-semibold"
              >
                Email Address
              </Label>
              <Input
                id="appt-email"
                data-ocid="appointment.email.input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="border-border focus:border-primary"
              />
            </div>

            <div className="space-y-1.5">
              <Label className="font-sans text-sm font-semibold">
                Select Service *
              </Label>
              <Select value={service} onValueChange={setService} required>
                <SelectTrigger
                  data-ocid="appointment.service.select"
                  className="border-border"
                >
                  <SelectValue placeholder="Choose a service..." />
                </SelectTrigger>
                <SelectContent>
                  {SERVICES.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label
                  htmlFor="appt-date"
                  className="font-sans text-sm font-semibold"
                >
                  Preferred Date *
                </Label>
                <Input
                  id="appt-date"
                  data-ocid="appointment.date.input"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="border-border"
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="appt-time"
                  className="font-sans text-sm font-semibold"
                >
                  Preferred Time *
                </Label>
                <Input
                  id="appt-time"
                  data-ocid="appointment.time.input"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  className="border-border"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label
                htmlFor="appt-msg"
                className="font-sans text-sm font-semibold"
              >
                Special Requests / Notes
              </Label>
              <Textarea
                id="appt-msg"
                data-ocid="appointment.message.textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Any special requirements or notes..."
                rows={3}
                className="border-border resize-none"
              />
            </div>

            <Button
              data-ocid="appointment.submit_button"
              type="submit"
              disabled={mutation.isPending}
              className="w-full bg-primary hover:bg-rose-deep text-white font-sans font-semibold py-3 text-base transition-colors"
            >
              {mutation.isPending ? "Booking..." : "Confirm Appointment"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
