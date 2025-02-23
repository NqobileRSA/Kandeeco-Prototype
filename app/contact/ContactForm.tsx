import { ArrowRight } from "lucide-react";

const ContactForm: React.FC = () => {
  return (
    <div className="bg-[#1A1F24]/80 backdrop-blur-xl p-12 border border-white/10 group hover:border-[#FF852A]/30 transition-all">
      <div className="space-y-8">
        {/* Name Field */}
        <div>
          <label className="block text-[#FF852A] text-sm uppercase tracking-[4px] mb-4">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full bg-[#1A1F24]/60 border border-white/20 text-white p-4 focus:border-[#FF852A] outline-none transition-colors placeholder:text-white/30"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-[#FF852A] text-sm uppercase tracking-[4px] mb-4">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-[#1A1F24]/60  border border-white/20 text-white p-4 focus:border-[#FF852A] outline-none transition-colors placeholder:text-white/30"
          />
        </div>

        {/* Phone Field */}
        {/* <div>
        <label className="block text-[#FF852A] text-sm uppercase tracking-[4px] mb-4">
          Phone Number
        </label>
        <input 
          type="tel"
          placeholder="Enter your phone number"
          className="w-full bg-black border border-white/20 text-white p-4 focus:border-[#FF852A] outline-none transition-colors placeholder:text-white/30"
        />
      </div> */}

        {/* Service Selection */}
        <div>
          <label className="block text-[#FF852A] text-sm uppercase tracking-[4px] mb-4">
            I&apos;m Interested In
          </label>
          <select className="w-full bg-[#1A1F24]/60  border border-white/20 text-white p-4 focus:border-[#FF852A] outline-none transition-colors">
            <option>Video Production</option>
            <option>Photography</option>
            <option>Graphic Design</option>
            <option>Virtual Tours</option>
          </select>
        </div>

        {/* Start Project Button */}
        <button className="w-full group relative overflow-hidden">
          <div className="relative z-10 flex items-center justify-center gap-4 bg-[#FF852A]/5 border border-[#FF852A]/30 px-12 py-4">
            <span className="text-white text-sm uppercase tracking-[4px] group-hover:text-black transition-colors">
              Start Your Project
            </span>
            <ArrowRight className="w-5 h-5 text-white group-hover:text-black transition-colors" />
          </div>
          <div className="absolute inset-0 bg-[#FF852A]/80 transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
