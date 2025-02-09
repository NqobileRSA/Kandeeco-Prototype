"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Adora Montminy",
    role: "Interior Designer",
    image: "/assets/img1.jpg",
  },
  {
    name: "Adeline Palmerston",
    role: "Project Manager",
    image: "/assets/img2.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-900">MEET OUR TEAM</h2>
          <p className="mt-4 text-gray-600">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <Button className="mt-6 bg-black text-white hover:bg-gray-800">
            VIEW ALL
          </Button>
        </div>
        {teamMembers.map((member, index) => (
          <div key={index} className="relative">
            <Image
              src={member.image}
              alt={member.name}
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white shadow-lg px-6 py-3 rounded-lg">
              <h3 className="font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
