"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Mail, Linkedin } from "lucide-react";
import Image from "next/image";
import FeaturedMember from "./FeaturedMember";

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "David Khumalo",
      role: "Creative Director & Lead Photographer",
      category: "leadership",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      bio: "With over 15 years of experience, David leads our creative vision with an eye for compelling visual narratives.",
      instagram: "https://instagram.com/davidkhumalo",
      email: "david@kandee.co",
      linkedin: "https://linkedin.com/in/davidkhumalo",
    },
    {
      id: 2,
      name: "Sophia Ndlovu",
      role: "Senior Photographer & Production Manager",
      category: "photography",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      bio: "Sophia specializes in commercial and editorial photography with a distinct artistic style.",
      instagram: "https://instagram.com/sophiandlovu",
      email: "sophia@kandee.co",
      linkedin: "https://linkedin.com/in/sophiandlovu",
    },
    {
      id: 3,
      name: "Marcus Chen",
      role: "Lead Cinematographer",
      category: "videography",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      bio: "Marcus brings cinematic storytelling to life through his innovative approach to videography.",
      instagram: "https://instagram.com/marcuschen",
      email: "marcus@kandee.co",
      linkedin: "https://linkedin.com/in/marcuschen",
    },
    {
      id: 4,
      name: "Thandi Moyo",
      role: "Senior Editor & Post-Production Lead",
      category: "production",
      image:
        "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg",
      bio: "Thandi transforms raw footage into polished visual stories through expert editing techniques.",
      instagram: "https://instagram.com/thandimoyo",
      email: "thandi@kandee.co",
      linkedin: "https://linkedin.com/in/thandimoyo",
    },
    {
      id: 5,
      name: "James Peterson",
      role: "Drone & Aerial Specialist",
      category: "photography",
      image:
        "https://images.pexels.com/photos/3771836/pexels-photo-3771836.jpeg",
      bio: "James captures breathtaking aerial perspectives that add dimension to our visual storytelling.",
      instagram: "https://instagram.com/jamespeterson",
      email: "james@kandee.co",
      linkedin: "https://linkedin.com/in/jamespeterson",
    },
    {
      id: 6,
      name: "Lerato Sibanda",
      role: "Client Relations Manager",
      category: "leadership",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      bio: "Lerato ensures our creative vision aligns perfectly with client expectations throughout every project.",
      instagram: "https://instagram.com/leratosibanda",
      email: "lerato@kandee.co",
      linkedin: "https://linkedin.com/in/leratosibanda",
    },
    {
      id: 7,
      name: "Michael Okafor",
      role: "Lighting Director",
      category: "production",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      bio: "Michael&apos;s expertise in lighting design helps create the perfect atmosphere for every shoot.",
      instagram: "https://instagram.com/michaelokafor",
      email: "michael@kandee.co",
      linkedin: "https://linkedin.com/in/michaelokafor",
    },
    {
      id: 8,
      name: "Anita Patel",
      role: "Wedding & Events Specialist",
      category: "photography",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
      bio: "Anita captures authentic moments that tell the unique story of each couple and celebration.",
      instagram: "https://instagram.com/anitapatel",
      email: "anita@kandee.co",
      linkedin: "https://linkedin.com/in/anitapatel",
    },
    {
      id: 9,
      name: "Jacob Molefe",
      role: "Documentary Filmmaker",
      category: "videography",
      image:
        "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg",
      bio: "Jacob&apos;s documentary approach brings authentic storytelling to both commercial and personal projects.",
      instagram: "https://instagram.com/jacobmolefe",
      email: "jacob@kandee.co",
      linkedin: "https://linkedin.com/in/jacobmolefe",
    },
    {
      id: 10,
      name: "Natasha Williams",
      role: "Digital Content Specialist",
      category: "production",
      image:
        "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
      bio: "Natasha helps our clients maximize engagement through strategic digital content creation.",
      instagram: "https://instagram.com/natashawilliams",
      email: "natasha@kandee.co",
      linkedin: "https://linkedin.com/in/natashawilliams",
    },
  ];

  // Filtered team members based on active tab
  const filteredMembers =
    activeTab === "all"
      ? teamMembers
      : teamMembers.filter((member) => member.category === activeTab);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="team" className="bg-black relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/70 to-transparent"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#FF852A]/5 blur-3xl"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-sm bg-[#FF852A]/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Featured Team Member Section */}
        <FeaturedMember />
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center gap-6 text-[#FF852A] text-sm uppercase tracking-[8px] mb-8 font-galano"
          >
            <span className="w-12 h-px bg-[#FF852A]" />
            The Talent Behind Our Vision
            <span className="w-12 h-px bg-[#FF852A]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight font-galano"
          >
            Meet Our Exceptional Team
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/70 max-w-2xl mx-auto mb-12 text-lg font-avenir"
          >
            Each member of our diverse team brings unique talents and
            perspectives, united by a shared passion for visual storytelling and
            creative excellence.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {[
            "all",
            "leadership",
            "photography",
            "videography",
            "production",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#FF852A] text-white"
                  : "bg-neutral-900 text-white/70 hover:text-white hover:bg-neutral-800"
              } font-galano`}
            >
              {tab === "all" ? "All Team" : tab}
            </button>
          ))}
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="relative group"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="relative overflow-hidden rounded-sm bg-neutral-900 h-full">
                {/* Member Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <Image
                    layout="fill"
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                {/* Member Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 z-10">
                  <div className="relative overflow-hidden">
                    <h3 className="text-white text-xl font-galano mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#FF852A] text-sm mb-3 font-avenir">
                      {member.role}
                    </p>

                    {/* Bio - Animated */}
                    <div
                      className="overflow-hidden transition-all duration-500"
                      style={{
                        maxHeight:
                          hoveredMember === member.id ? "100px" : "0px",
                        opacity: hoveredMember === member.id ? 1 : 0,
                        marginBottom:
                          hoveredMember === member.id ? "16px" : "0px",
                      }}
                    >
                      <p className="text-white/70 text-sm font-avenir">
                        {member.bio}
                      </p>
                    </div>

                    {/* Social Links - Animated */}
                    <div
                      className="flex gap-4 transition-all duration-500"
                      style={{
                        opacity: hoveredMember === member.id ? 1 : 0,
                        transform: `translateY(${hoveredMember === member.id ? "0" : "20px"})`,
                      }}
                    >
                      <a
                        href={member.instagram}
                        className="text-white/70 hover:text-[#FF852A] transition-colors duration-300"
                        aria-label={`${member.name}&apos;s Instagram`}
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-white/70 hover:text-[#FF852A] transition-colors duration-300"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                      <a
                        href={member.linkedin}
                        className="text-white/70 hover:text-[#FF852A] transition-colors duration-300"
                        aria-label={`${member.name}&apos;s LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-sm text-xs text-white/90 uppercase tracking-wider font-galano">
                  {member.category}
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

                {/* Decorative Element */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF852A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Collaborative Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 text-center"
        >
          <h3 className="text-4xl font-light text-white mb-6 font-galano">
            Want to Join Our Team?
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto mb-10 font-avenir">
            We&apos;re always looking for talented individuals who are
            passionate about visual storytelling and creative excellence. If you
            think you&apos;d be a great fit for our team, we&apos;d love to hear
            from you.
          </p>
          <a
            href="#careers"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#FF852A] text-[#FF852A] hover:bg-[#FF852A] hover:text-white transition-all duration-300 group overflow-hidden relative"
          >
            <span className="relative z-10 text-sm uppercase tracking-[2px] font-galano">
              View Open Positions
            </span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10" />
            <div className="absolute inset-0 w-full h-full bg-[#FF852A] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
          </a>
        </motion.div>
      </div>

      {/* Team Values Section */}
      <div className="max-w-7xl mx-auto px-6 mt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-6 text-[#FF852A] text-sm uppercase tracking-[8px] mb-8 font-galano">
            <span className="w-12 h-px bg-[#FF852A]" />
            Our Values
            <span className="w-12 h-px bg-[#FF852A]" />
          </div>

          <h2 className="text-4xl font-light text-white mb-8 font-galano">
            The Principles That Guide Our Team
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Creative Excellence",
              description:
                "We pursue the highest standards of creativity and technical execution in every project we undertake.",
              icon: "✨",
            },
            {
              title: "Authentic Storytelling",
              description:
                "We believe in capturing genuine moments and crafting narratives that resonate with truth and emotion.",
              icon: "🎭",
            },
            {
              title: "Collaborative Spirit",
              description:
                "We thrive on collaboration, bringing diverse perspectives together to create exceptional visual content.",
              icon: "🤝",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-neutral-900 border border-neutral-800 p-8 text-center group hover:bg-neutral-800 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#FF852A]/5 overflow-hidden relative rounded-sm"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF852A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="inline-flex items-center justify-center w-16 h-16 rounded-sm bg-[#FF852A]/10 text-[#FF852A] mb-6 text-2xl">
                {value.icon}
              </div>

              <h3 className="text-xl text-white mb-4 font-galano">
                {value.title}
              </h3>
              <p className="text-white/70 font-avenir">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
