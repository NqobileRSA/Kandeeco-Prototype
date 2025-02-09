"use client";

import { FC } from "react";
import * as LucideIcons from "lucide-react";
import Link from "next/link";

interface SocialCardProps {
  iconName: string;
  title: string;
  description: string;
  link: string;
}

const socialLinks: SocialCardProps[] = [
  {
    iconName: "Instagram",
    title: "INSTAGRAM",
    description:
      "Captivating visuals that showcase our fashion brand's unique style and story.",
    link: "https://instagram.com",
  },
  {
    iconName: "Facebook",
    title: "Facebook",
    description:
      "Engaging conversations and updates that keep you connected with our fashion brand.",
    link: "https://Facebook.com",
  },
  {
    iconName: "Linkedin",
    title: "Linkedin",
    description:
      "Discover our creative process and stunning design work on Dribbble.",
    link: "https://Linkedin.com",
  },
  {
    iconName: "MessageCircleMore",
    title: "Whatsapp",
    description:
      "Explore our portfolio of fashion brand projects and creative collaborations on Behance.",
    link: "https://behance.net",
  },
];

const SocialCard: FC<SocialCardProps> = ({
  iconName,
  title,
  description,
  link,
}) => {
  const IconComponent =
    (LucideIcons[
      iconName as keyof typeof LucideIcons
    ] as FC<LucideIcons.LucideProps>) || LucideIcons.Circle;

  return (
    <div className="bg-neutral-900 rounded-lg p-8 flex flex-col justify-between min-h-[280px] hover:bg-white-800 transition-all duration-300 border-b-2 border-orange-400">
      <div className="flex items-center justify-between">
        {IconComponent && <IconComponent size={24} className="text-white" />}
      </div>
      <div>
        <h3 className="text-white text-xl font-medium mb-4">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-white text-sm mt-6 group"
      >
        <div className="w-8 h-8 rounded-full bg-neutral-800  group-hover:bg-neutral-700 flex items-center justify-center mr-2 transition-colors">
          <span className="">
            <LucideIcons.MoveUpRight size={10} />
          </span>
        </div>
        VISIT {title}
      </Link>
    </div>
  );
};

const SocialCards: FC = () => {
  return (
    <div className="w-full bg-black py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {socialLinks.map((card, index) => (
          <SocialCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default SocialCards;
