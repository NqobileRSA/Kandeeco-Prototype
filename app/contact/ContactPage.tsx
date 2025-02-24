import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";
import WhyUs from "./WhyUs";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#1A1F24]/80 backdrop-blur-xl text-white pb-16 ">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#FF852A] text-white p-4 z-50"
      >
        Skip to main content
      </a>

      <ContactHero />

      <main
        id="main-content"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-20"
      >
        <ContactInfo />

        <div className="mt-32 grid lg:grid-cols-2 gap-16">
          <ContactForm />
          <WhyUs />
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
