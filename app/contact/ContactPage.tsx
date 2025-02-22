"use client";
import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Camera,
  Film,
  Play,
  ArrowUpRight,
  CheckCircle,
  AlertCircle,
  Info,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [formTouched, setFormTouched] = useState(false);

  // Form validation rules
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.service) newErrors.service = "Please select a service";

    if (formData.phone && !/^[\d\s()+.-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    return newErrors;
  };

  // Handle form changes with validation
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormTouched(true);

    if (focusedField === name) {
      const validationErrors = validateForm();
      setErrors((prev) => ({ ...prev, [name]: validationErrors[name] }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSubmitted(true);
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
          setSubmitted(false);
          setFormTouched(false);
        }, 3000);
      } catch (error) {
        setErrors({ submit: "Failed to send message. Please try again." });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const services = [
    {
      value: "commercial",
      label: "Commercial Photography & Videography",
      icon: Camera,
      description: "Professional photos and videos for your business",
    },
    {
      value: "events",
      label: "Event Cinematography",
      icon: Film,
      description: "Capture your special events in cinematic quality",
    },
    {
      value: "production",
      label: "Video Production",
      icon: Play,
      description: "Full-service video production and editing",
    },
    {
      value: "wedding",
      label: "Wedding Photography",
      icon: Camera,
      description: "Beautiful memories of your special day",
    },
    {
      value: "corporate",
      label: "Corporate Events",
      icon: Film,
      description: "Professional coverage for corporate functions",
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "123 Creative Street, Johannesburg",
      href: "https://maps.google.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+27 (0) 11 234 5678",
      href: "tel:+27112345678",
    },
    {
      icon: Mail,
      title: "Email",
      content: "hello@kandee.co",
      href: "mailto:hello@kandee.co",
    },
    { icon: Clock, title: "Hours", content: "Mon - Fri: 9AM - 6PM" },
  ];

  const features = [
    {
      icon: Camera,
      title: "Pro Equipment",
      description: "State-of-the-art gear for exceptional results",
      details: "Using latest Canon R5, Sony A7S III, and RED cameras",
    },
    {
      icon: Film,
      title: "Expert Team",
      description: "15+ years of combined expertise",
      details: "Award-winning photographers and cinematographers",
    },
    {
      icon: Play,
      title: "Fast Delivery",
      description: "Quick turnaround without quality compromise",
      details: "Standard 5-day delivery with rush options available",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F24] to-[#2A333B] text-white ">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#FF852A] text-white p-4 z-50"
      >
        Skip to main content
      </a>

      <div className="relative h-[80vh] overflow-hidden pt-16" role="banner">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1F24]/90 to-[#1A1F24] z-10" />
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105 transform hover:scale-100 transition-transform duration-700"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/assets/ciroc.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 z-20">
          <div
            className="flex items-center space-x-4 text-[#FF852A] text-sm tracking-[0.4em] mb-8 opacity-90"
            role="text"
            aria-label="Create with us"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#FF852A] to-transparent" />
            <span className="animate-pulse">CREATE WITH US</span>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#FF852A] to-transparent" />
          </div>
          <h1 className="text-7xl md:text-9xl font-extralight text-white text-center leading-tight tracking-tight">
            Let's Capture
            <br />
            <span className="bg-gradient-to-r from-white via-[#FF852A] to-white bg-clip-text text-transparent">
              Your Story
            </span>
          </h1>
        </div>
      </div>

      <main
        id="main-content"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-20"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((item, index) => (
            <Card
              key={index}
              className="group bg-[#1A1F24]/80 backdrop-blur-xl border-[#DCDCDC]/5 hover:border-[#FF852A]/20 transition-all duration-500 hover:transform hover:translate-y-[-4px]"
            >
              <CardContent className="p-6">
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex items-center space-x-4 text-white hover:text-[#FF852A] transition-colors duration-300"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF852A]/20 to-[#FF852A]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <item.icon className="w-5 h-5 text-[#FF852A]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-[#FF852A] tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#DCDCDC]/90 mt-1">
                        {item.content}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF852A]/20 to-[#FF852A]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <item.icon className="w-5 h-5 text-[#FF852A]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-[#FF852A] tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#DCDCDC]/90 mt-1">
                        {item.content}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-32 grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <h2 className="text-5xl font-light text-white tracking-tight">
                Start Your
                <span className="text-[#FF852A]"> Project</span>
              </h2>
              <p className="mt-4 text-[#DCDCDC]/90 text-lg">
                Tell us about your vision and we'll bring it to life.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              {errors.submit && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{errors.submit}</AlertDescription>
                </Alert>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { label: "Name", name: "name", type: "text", required: true },
                  {
                    label: "Email",
                    name: "email",
                    type: "email",
                    required: true,
                  },
                ].map((field) => (
                  <div key={field.name} className="space-y-2">
                    <Label
                      htmlFor={field.name}
                      className="text-sm text-[#DCDCDC]/90 tracking-wide flex items-center gap-2"
                    >
                      {field.label}
                      {field.required && (
                        <span className="text-[#FF852A]">*</span>
                      )}
                    </Label>
                    <Input
                      id={field.name}
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => {
                        setFocusedField(null);
                        const validationErrors = validateForm();
                        setErrors((prev) => ({
                          ...prev,
                          [field.name]: validationErrors[field.name],
                        }));
                      }}
                      aria-invalid={errors[field.name] ? "true" : "false"}
                      aria-describedby={
                        errors[field.name] ? `${field.name}-error` : undefined
                      }
                      className={`bg-[#1A1F24]/50 border-[#DCDCDC]/10 focus:border-[#FF852A]/50 text-white transition-all duration-300 ${
                        errors[field.name] ? "border-red-500" : ""
                      }`}
                    />
                    {errors[field.name] && (
                      <p
                        id={`${field.name}-error`}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors[field.name]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-sm text-[#DCDCDC]/90 tracking-wide flex items-center gap-2"
                  >
                    Phone
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="w-4 h-4 text-[#DCDCDC]/60" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            Optional - Include country code for international
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => {
                      setFocusedField(null);
                      const validationErrors = validateForm();
                      setErrors((prev) => ({
                        ...prev,
                        phone: validationErrors.phone,
                      }));
                    }}
                    aria-invalid={errors.phone ? "true" : "false"}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={`bg-[#1A1F24]/50 border-[#DCDCDC]/10 focus:border-[#FF852A]/50 text-white transition-all duration-300 ${
                      errors.phone ? "border-red-500" : ""
                    }`}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-red-500 text-sm mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="service"
                    className="text-sm text-[#DCDCDC]/90 tracking-wide flex items-center gap-2"
                  >
                    Service
                    <span className="text-[#FF852A]">*</span>
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      handleChange({ target: { name: "service", value } })
                    }
                  >
                    <SelectTrigger
                      id="service"
                      className={`bg-[#1A1F24]/50 border-[#DCDCDC]/10 focus:border-[#FF852A]/50 text-white ${
                        errors.service ? "border-red-500" : ""
                      }`}
                      aria-invalid={errors.service ? "true" : "false"}
                      aria-describedby={
                        errors.service ? "service-error" : undefined
                      }
                    >
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1F24] border-[#DCDCDC]/10">
                      {services.map((service) => (
                        <SelectItem
                          key={service.value}
                          value={service.value}
                          className="text-white hover:bg-[#FF852A]/10 focus:bg-[#FF852A]/10 transition-colors duration-200"
                        >
                          <div className="flex items-center space-x-2">
                            <service.icon className="w-4 h-4" />
                            <div className="flex flex-col">
                              <span>{service.label}</span>
                              <span className="text-sm text-[#DCDCDC]/60">
                                {service.description}
                              </span>
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p id="service-error" className="text-red-500 text-sm mt-1">
                      {errors.service}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-sm text-[#DCDCDC]/90 tracking-wide flex items-center gap-2"
                >
                  Message
                  <span className="text-[#FF852A]">*</span>
                  <span className="text-[#DCDCDC]/60 text-xs ml-auto">
                    {formData.message.length}/500
                  </span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => {
                    setFocusedField(null);
                    const validationErrors = validateForm();
                    setErrors((prev) => ({
                      ...prev,
                      message: validationErrors.message,
                    }));
                  }}
                  maxLength={500}
                  rows={6}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className={`bg-[#1A1F24]/50 border-[#DCDCDC]/10 focus:border-[#FF852A]/50 text-white resize-none transition-all duration-300 ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  placeholder="Tell us about your vision..."
                />
                {errors.message && (
                  <p id="message-error" className="text-red-500 text-sm mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <Button
                  type="submit"
                  disabled={isSubmitting || submitted || !formTouched}
                  className={`relative overflow-hidden bg-gradient-to-r from-[#FF852A] to-[#FF6B2A] hover:from-[#FF6B2A] hover:to-[#FF852A] text-white px-8 py-3 group transition-all duration-300 ${
                    submitted ? "bg-green-500" : ""
                  } ${!formTouched || isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  <span
                    className={`flex items-center justify-center transition-all duration-300 ${
                      isSubmitting ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {submitted ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Sent Successfully
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                  {isSubmitting && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                </Button>
                {!formTouched && (
                  <span className="text-sm text-[#DCDCDC]/60">
                    Fill in the form to enable submission
                  </span>
                )}
              </div>
            </form>
          </div>

          <div className="lg:sticky lg:top-24 space-y-8">
            <div className="bg-gradient-to-br from-[#1A1F24]/80 to-[#2A333B]/80 backdrop-blur-xl border border-[#DCDCDC]/5 rounded-lg p-10">
              <h3 className="text-3xl font-light text-white mb-10 tracking-tight">
                Why Choose <span className="text-[#FF852A]">Us</span>
              </h3>
              <div className="space-y-10">
                {features.map((feature, index) => (
                  <TooltipProvider key={index}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-start space-x-6 group cursor-help">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF852A]/20 to-[#FF852A]/5 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110">
                            <feature.icon className="w-6 h-6 text-[#FF852A]" />
                          </div>
                          <div>
                            <h4 className="text-xl text-white mb-2 tracking-tight">
                              {feature.title}
                            </h4>
                            <p className="text-[#DCDCDC]/80 text-sm leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{feature.details}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>

            <Card className="bg-[#FF852A] group hover:border-[#FF852A]/60 transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-2xl text-white tracking-tight">
                      Ready to start?
                    </h4>
                    <p className="text-[#DCDCDC]/80 mt-2">
                      View our previous work
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    className="bg-white text-[#FF852A] hover:text-white hover:bg-[#FF852A]/20 group transition-all duration-300"
                    asChild
                  >
                    <a
                      href="#portfolio"
                      className="inline-flex items-center space-x-2"
                    >
                      <span>Portfolio</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
