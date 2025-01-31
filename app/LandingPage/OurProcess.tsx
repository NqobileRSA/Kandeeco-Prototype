"use client";
import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Camera,
  Film,
  Code,
  Palette,
  Linkedin,
  Mail,
  ArrowUpRight,
  X,
  Instagram,
  Twitter,
  Globe,
  Phone,
} from "lucide-react";

type Expertise =
  | "Brand Strategy"
  | "Art Direction"
  | "Visual Storytelling"
  | "Commercial Direction"
  | "Cinematography"
  | "Visual Effects"
  | "Commercial Photography"
  | "Editorial"
  | "Portrait"
  | "Virtual Production"
  | "Technical Planning"
  | "Innovation";

type Role =
  | "Photography Director"
  | "Creative Director"
  | "Technical Director"
  | "Film Director";

interface TeamMember {
  name: string;
  role: Role;
  image: string;
  shortBio: string;
  fullBio: string;
  expertise: Expertise[];
  social: {
    linkedin?: string;
    email?: string;
    instagram?: string;
    twitter?: string;
    website?: string;
    phone?: string;
  };
}

const SocialLink: React.FC<{
  href: string;
  icon: React.ReactNode;
  label: string;
}> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-white/70 hover:text-[#D4AF37] transition-colors"
  >
    {icon}
    <span className="text-sm">{label}</span>
  </a>
);

const TeamMember: React.FC<{
  member: TeamMember;
  onClick: (member: TeamMember) => void;
  index: number;
}> = ({ member, onClick, index }) => (
  <div className="relative group">
    {/* Adjusted vertical name positioning */}
    <div className="absolute left-0 top-0 bottom-0 z-20 flex items-center">
      <h3 className="origin-bottom-left -rotate-90 transform whitespace-nowrap text-2xl font-light tracking-wider text-white/50 transition-colors duration-500 group-hover:text-[#D4AF37]">
        {member.name}
      </h3>
    </div>

    <div
      className="relative h-[450px] overflow-hidden rounded-lg cursor-pointer"
      onClick={() => onClick(member)}
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      {/* Background image */}
      <img
        src={member.image}
        alt={member.name}
        className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60 opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-8 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
        <div className="space-y-4">
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            {member.role === "Photography Director" && (
              <Camera className="w-4 h-4 text-[#D4AF37]" />
            )}
            {member.role === "Creative Director" && (
              <Palette className="w-4 h-4 text-[#D4AF37]" />
            )}
            {member.role === "Technical Director" && (
              <Code className="w-4 h-4 text-[#D4AF37]" />
            )}
            {member.role === "Film Director" && (
              <Film className="w-4 h-4 text-[#D4AF37]" />
            )}
            <span className="text-sm font-light text-[#D4AF37]">
              {member.role}
            </span>
          </div>
          <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
            {member.shortBio}
          </p>
          <div className="flex items-center gap-2 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
            <span className="text-sm uppercase tracking-[2px]">
              View Profile
            </span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const team: TeamMember[] = [
    {
      name: "Guy in black",
      role: "Creative Director",
      image: "/assets/team3.jpg",
      shortBio: "Award-winning creative director with 15+ years of experience",
      fullBio:
        "Sarah leads our creative vision with over 15 years of experience in brand storytelling and visual design. Her work has been recognized by multiple international awards.",
      expertise: ["Brand Strategy", "Art Direction", "Visual Storytelling"],
      social: {
        linkedin: "https://linkedin.com/in/sarah-chen",
        email: "sarah@studio.com",
        instagram: "https://instagram.com/sarahchen",
        twitter: "https://twitter.com/sarahchen",
        website: "https://sarahchen.com",
        phone: "+1234567890",
      },
    },
    {
      name: "Some black guy",
      role: "Creative Director",
      image: "/assets/team2.jpg",
      shortBio: "Award-winning creative director with 15+ years of experience",
      fullBio:
        "Sarah leads our creative vision with over 15 years of experience in brand storytelling and visual design. Her work has been recognized by multiple international awards.",
      expertise: ["Brand Strategy", "Art Direction", "Visual Storytelling"],
      social: {
        linkedin: "https://linkedin.com/in/sarah-chen",
        email: "sarah@studio.com",
        instagram: "https://instagram.com/sarahchen",
        twitter: "https://twitter.com/sarahchen",
        website: "https://sarahchen.com",
        phone: "+1234567890",
      },
    },
    {
      name: "Sarah Chen",
      role: "Creative Director",
      image: "/assets/team1.jpg",
      shortBio: "Award-winning creative director with 15+ years of experience",
      fullBio:
        "Sarah leads our creative vision with over 15 years of experience in brand storytelling and visual design. Her work has been recognized by multiple international awards.",
      expertise: ["Brand Strategy", "Art Direction", "Visual Storytelling"],
      social: {
        linkedin: "https://linkedin.com/in/sarah-chen",
        email: "sarah@studio.com",
        instagram: "https://instagram.com/sarahchen",
        twitter: "https://twitter.com/sarahchen",
        website: "https://sarahchen.com",
        phone: "+1234567890",
      },
    },
  ];

  return (
    <section className="relative bg-black min-h-screen py-32">
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-5 bg-cover bg-center bg-fixed" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-16">
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center gap-6 text-[#D4AF37] text-sm uppercase tracking-[8px] mb-8">
            <span className="w-12 h-px bg-[#D4AF37]" />
            Our Team
            <span className="w-12 h-px bg-[#D4AF37]" />
          </div>
          <h2 className="text-5xl text-white font-light tracking-wide mb-8">
            Meet the Visionaries
          </h2>
          <p className="max-w-2xl mx-auto text-white/70 leading-relaxed text-lg">
            Our team of award-winning creators brings together diverse expertise
            and perspectives to deliver exceptional visual experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamMember
              key={member.name}
              member={member}
              onClick={setSelectedMember}
              index={index}
            />
          ))}
        </div>

        <Dialog
          open={!!selectedMember}
          onOpenChange={() => setSelectedMember(null)}
        >
          <DialogContent className="max-w-3xl bg-black/95 border-[#D4AF37]/30">
            {selectedMember && (
              <div className="relative p-6">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-2 right-2 text-white/50 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/3">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  </div>

                  <div className="w-full md:w-2/3 space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        {selectedMember.role === "Photography Director" && (
                          <Camera className="w-4 h-4 text-[#D4AF37]" />
                        )}
                        {selectedMember.role === "Creative Director" && (
                          <Palette className="w-4 h-4 text-[#D4AF37]" />
                        )}
                        {selectedMember.role === "Technical Director" && (
                          <Code className="w-4 h-4 text-[#D4AF37]" />
                        )}
                        {selectedMember.role === "Film Director" && (
                          <Film className="w-4 h-4 text-[#D4AF37]" />
                        )}
                        <span className="text-sm text-[#D4AF37]">
                          {selectedMember.role}
                        </span>
                      </div>
                      <h3 className="text-3xl text-white font-light mb-4">
                        {selectedMember.name}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {selectedMember.fullBio}
                      </p>
                    </div>

                    <div className="bg-white/5 p-6 rounded-lg">
                      <h4 className="text-[#D4AF37] mb-4 text-sm uppercase tracking-wider">
                        Areas of Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-4 py-2 bg-white/10 text-white/70 text-sm rounded-full transition-colors hover:bg-white/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                      {selectedMember.social.linkedin && (
                        <SocialLink
                          href={selectedMember.social.linkedin}
                          icon={<Linkedin className="w-5 h-5" />}
                          label="LinkedIn"
                        />
                      )}
                      {selectedMember.social.email && (
                        <SocialLink
                          href={`mailto:${selectedMember.social.email}`}
                          icon={<Mail className="w-5 h-5" />}
                          label="Email"
                        />
                      )}
                      {selectedMember.social.instagram && (
                        <SocialLink
                          href={selectedMember.social.instagram}
                          icon={<Instagram className="w-5 h-5" />}
                          label="Instagram"
                        />
                      )}
                      {selectedMember.social.twitter && (
                        <SocialLink
                          href={selectedMember.social.twitter}
                          icon={<Twitter className="w-5 h-5" />}
                          label="Twitter"
                        />
                      )}
                      {selectedMember.social.website && (
                        <SocialLink
                          href={selectedMember.social.website}
                          icon={<Globe className="w-5 h-5" />}
                          label="Website"
                        />
                      )}
                      {selectedMember.social.phone && (
                        <SocialLink
                          href={`tel:${selectedMember.social.phone}`}
                          icon={<Phone className="w-5 h-5" />}
                          label="Phone"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Team;
