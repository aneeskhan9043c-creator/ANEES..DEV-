import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DemoBackgroundPaths } from './components/ui/background-paths';
import { CardStackDemo } from './components/ui/card-stack-demo';
import { LiquidButton } from './components/ui/liquid-glass-button';
import { PremiumCardButton } from './components/ui/premium-card-button';
import LightFooter from './components/ui/light-footer';
import { Mail } from 'lucide-react';
import { motion } from 'motion/react';
import './index.css';

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-11 h-11 select-none filter drop-shadow-[0_2.5px_5.5px_rgba(0,0,0,0.35)]"
  >
    {/* Real WhatsApp outer green circle */}
    <circle cx="12" cy="12" r="11" fill="#25D366" />
    
    {/* Inner speech bubble white shape */}
    <path
      d="M12.004 3.5c-4.686 0-8.5 3.814-8.5 8.5 0 1.5.39 2.91 1.07 4.14l-1.07 3.93 4.03-1.05c1.19.65 2.56.98 3.97.98 4.686 0 8.5-3.814 8.5-8.5s-3.814-8.5-8.5-8.5z"
      fill="#ffffff"
    />
    
    {/* Inner green handset icon */}
    <path
      d="M15.42 13.91c-.24-.12-1.42-.7-1.63-.78-.22-.08-.38-.12-.54.12-.17.24-.64.78-.78.95-.14.17-.28.19-.52.07a6.61 6.61 0 0 1-1.97-1.22 7.28 7.28 0 0 1-1.37-1.7c-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.75-1.78-.2-.47-.42-.41-.54-.42-.12-.01-.27-.01-.42-.01-.15 0-.37.05-.57.27a2.58 2.58 0 0 0-.81 1.92c0 1.13.82 2.22.94 2.38.12.16 1.62 2.48 3.92 3.47.55.24.98.38 1.31.49.55.18 1.05.15 1.45.09.44-.06 1.42-.58 1.62-1.14.2-.55.2-1.03.14-1.14-.06-.09-.2-.14-.45-.26z"
      fill="#25D366"
    />
  </svg>
);

const ContactCardsSection = () => {
  const whatsappUrl = "https://wa.me/923706980818?text=" + encodeURIComponent("Hi Anees, I saw your portfolio and would love to start a web development project with you!");
  const emailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=aneeskhan9043c@gmail.com&su=" + encodeURIComponent("Web Development Inquiry - Project Consultation") + "&body=" + encodeURIComponent("Hi Anees,\n\nI am interested in building a high-performance website. Let's discuss details and setup a short call.\n\nBest regards,\n[Your Name]");

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-row flex-wrap items-center justify-center gap-6 w-full max-w-xl mx-auto px-4 mt-6 mb-4"
    >
      {/* WhatsApp Button */}
      <motion.a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <PremiumCardButton
          icon={<WhatsAppIcon />}
          title="WhatsApp"
          subtitle="Instant response"
          size="md"
          className="text-white border-green-300/40 hover:border-green-350/70 shadow-[0_12px_32px_rgba(37,211,102,0.45)] hover:shadow-[0_18px_48px_rgba(37,211,102,0.65)] transition-all duration-350"
          gradientLight={{
            from: "from-[#2bf376]",
            via: "via-[#12c05d]",
            to: "to-[#075f2c]",
          }}
          gradientDark={{
            from: "from-[#2bf376]",
            via: "via-[#12c05d]",
            to: "to-[#054c22]",
          }}
        />
      </motion.a>

      {/* Email Button */}
      <motion.a 
        href={emailUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <PremiumCardButton
          icon={<Mail className="w-6 h-6 text-white" />}
          title="Email Direct"
          subtitle="Click to send mail"
          size="md"
          className="text-white border-sky-300/40 hover:border-sky-350/70 shadow-[0_12px_32px_rgba(37,99,235,0.45)] hover:shadow-[0_18px_48px_rgba(37,99,235,0.65)] transition-all duration-350"
          gradientLight={{
            from: "from-[#38bdf8]",
            via: "via-[#1e40af]",
            to: "to-[#1e1b4b]",
          }}
          gradientDark={{
            from: "from-[#38bdf8]",
            via: "via-[#1d4ed8]",
            to: "to-[#111827]",
          }}
        />
      </motion.a>
    </motion.div>
  );
};

const reactContactCardsEl = document.getElementById('react-contact-cards');
if (reactContactCardsEl) {
  createRoot(reactContactCardsEl).render(
    <StrictMode>
      <ContactCardsSection />
    </StrictMode>
  );
}

const reactHeroBtnEl = document.getElementById('react-hero-button');
if (reactHeroBtnEl) {
  const whatsappUrl = "https://wa.me/923706980818?text=" + encodeURIComponent("Hi Anees, I saw your portfolio and would love to start a web development project with you!");
  createRoot(reactHeroBtnEl).render(
    <StrictMode>
      <div className="flex flex-wrap items-center gap-4">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
          <LiquidButton
            size="xxl"
            className="group rounded-full bg-white/10 text-white border border-white/25 hover:bg-white/15 hover:scale-105 hover:border-white/40 transition-all duration-300 font-extrabold uppercase tracking-widest text-base flex items-center justify-center px-12 h-16 min-w-[240px] shadow-[0_4px_20px_rgba(255,255,255,0.08)]"
          >
            <span className="text-center w-full">Start a Project</span>
          </LiquidButton>
        </a>
      </div>
    </StrictMode>
  );
}

const reactCtaBtnEl = document.getElementById('react-cta-button');
if (reactCtaBtnEl) {
  const whatsappUrl = "https://wa.me/923706980818?text=" + encodeURIComponent("Hi Anees, I saw your portfolio and would like to start my web project with you!");
  createRoot(reactCtaBtnEl).render(
    <StrictMode>
      <div className="flex items-center justify-center">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
          <LiquidButton
            variant="black"
            size="xxl"
            className="group rounded-full text-white font-black uppercase tracking-widest text-lg flex items-center justify-center px-16 h-18 min-w-[300px]"
          >
            <span className="text-center w-full">Start Your Project</span>
          </LiquidButton>
        </a>
      </div>
    </StrictMode>
  );
}

const reactAboutEl = document.getElementById('react-about');
if (reactAboutEl) {
  createRoot(reactAboutEl).render(
    <StrictMode>
      <DemoBackgroundPaths />
    </StrictMode>,
  );
}

const reactServicesEl = document.getElementById('react-services');
if (reactServicesEl) {
  createRoot(reactServicesEl).render(
    <StrictMode>
      <CardStackDemo />
    </StrictMode>,
  );
}

const reactFooterEl = document.getElementById('react-footer');
if (reactFooterEl) {
  createRoot(reactFooterEl).render(
    <StrictMode>
      <LightFooter />
    </StrictMode>
  );
}
