import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactInfo = () => {
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
  return (
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
  );
};

export default ContactInfo;
