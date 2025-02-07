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
    className="inline-flex items-center gap-2 text-[#343E48]/70 hover:text-[#FF852A] transition-colors"
  >
    {icon}
    <span className="text-sm font-light">{label}</span>
  </a>
);

const TeamMember: React.FC<{
  member: TeamMember;
  onClick: (member: TeamMember) => void;
  index: number;
}> = ({ member, onClick, index }) => (
  <div className="relative group">
    <div className="absolute left-0 top-0 bottom-0 z-20 flex items-center">
      <h3 className="origin-bottom-left -rotate-90 transform whitespace-nowrap text-2xl font-normal tracking-wide text-[#343E48]/50 transition-colors duration-500 group-hover:text-[#FF852A] font-galano">
        {member.name}
      </h3>
    </div>

    <div
      className="relative h-[450px] overflow-hidden rounded-xl cursor-pointer bg-[#DCDCDC]"
      onClick={() => onClick(member)}
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      <img
        src={member.image}
        alt={member.name}
        className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 z-10 bg-[#343E48]/80 opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

      <div className="absolute inset-x-0 bottom-0 z-10 p-8 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
        <div className="space-y-4">
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            {member.role === "Photography Director" && (
              <Camera className="w-4 h-4 text-[#FF852A]" />
            )}
            {member.role === "Creative Director" && (
              <Palette className="w-4 h-4 text-[#FF852A]" />
            )}
            {member.role === "Technical Director" && (
              <Code className="w-4 h-4 text-[#FF852A]" />
            )}
            {member.role === "Film Director" && (
              <Film className="w-4 h-4 text-[#FF852A]" />
            )}
            <span className="text-sm font-medium text-[#FF852A] font-galano">
              {member.role}
            </span>
          </div>
          <p className="text-white/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 font-avenir">
            {member.shortBio}
          </p>
          <div className="flex items-center gap-2 text-[#FF852A] opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
            <span className="text-sm uppercase tracking-[2px] font-galano">
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
      name: "Person 1",
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
      name: "Person 2",
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
      name: "Person 3",
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
    <section className="relative bg-white min-h-screen py-32">
      <div className="absolute inset-0 bg-[#DCDCDC]/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center gap-6 text-[#FF852A] text-sm uppercase tracking-[8px] mb-8 font-galano">
            <span className="w-12 h-px bg-[#FF852A]" />
            Our Team
            <span className="w-12 h-px bg-[#FF852A]" />
          </div>
          <h2 className="text-5xl text-[#343E48] font-light tracking-wide mb-8 font-galano">
            Meet the Visionaries
          </h2>
          <p className="max-w-2xl mx-auto text-[#343E48]/70 leading-relaxed text-lg font-avenir">
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
          <DialogContent className="max-w-3xl bg-white border-[#DCDCDC]">
            {selectedMember && (
              <div className="relative p-6">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-2 right-2 text-[#343E48]/50 hover:text-[#343E48] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/3">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#343E48]/60 to-transparent" />
                    </div>
                  </div>

                  <div className="w-full md:w-2/3 space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        {selectedMember.role === "Photography Director" && (
                          <Camera className="w-4 h-4 text-[#FF852A]" />
                        )}
                        {selectedMember.role === "Creative Director" && (
                          <Palette className="w-4 h-4 text-[#FF852A]" />
                        )}
                        {selectedMember.role === "Technical Director" && (
                          <Code className="w-4 h-4 text-[#FF852A]" />
                        )}
                        {selectedMember.role === "Film Director" && (
                          <Film className="w-4 h-4 text-[#FF852A]" />
                        )}
                        <span className="text-sm text-[#FF852A] font-galano">
                          {selectedMember.role}
                        </span>
                      </div>
                      <h3 className="text-3xl text-[#343E48] font-normal mb-4 font-galano">
                        {selectedMember.name}
                      </h3>
                      <p className="text-[#343E48]/70 leading-relaxed font-avenir">
                        {selectedMember.fullBio}
                      </p>
                    </div>

                    <div className="bg-[#DCDCDC]/20 p-6 rounded-xl">
                      <h4 className="text-[#FF852A] mb-4 text-sm uppercase tracking-wider font-galano">
                        Areas of Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-4 py-2 bg-[#343E48]/5 text-[#343E48]/70 text-sm rounded-full transition-colors hover:bg-[#343E48]/10 font-avenir"
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
