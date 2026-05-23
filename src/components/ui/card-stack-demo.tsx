import { motion } from "motion/react";
import { CardStack, CardStackItem } from "./card-stack";

const servicesItems: CardStackItem[] = [
  {
    id: 1,
    title: "Clinic & Healthcare Sites",
    tag: "🏥 DENTAL & MEDICAL",
    description: "Patient-friendly, high-trust websites custom built for dental practitioners and aesthetic clinics. Features seamless appointment scheduling systems.",
    imageSrc: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Business Landing Pages",
    tag: "🏢 HIGH CONVERSION",
    description: "Aesthetic single-page landing layouts engineered for maximum conversion. Designed to convert visitors into phone calls and solid inquiries.",
    imageSrc: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Travel & Umrah agency",
    tag: "✈️ TRAVEL & PILGRIMAGE",
    description: "Professional itinerary planners, stunning galleries, and smooth lead capture screens crafted to secure higher booking rates.",
    imageSrc: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Institutes & Academies",
    tag: "🎓 EDUCATION STACKS",
    description: "Sleek course displays, student lookup modules, and high-conversion reservation systems specifically crafted for coaching and educational hubs.",
    imageSrc: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Freelancer Portfolios",
    tag: "💼 PREMIUM BRANDS",
    description: "Distinguished, minimal portfolio cards showcasing your story, works, and achievements with high-contrast layouts and elegant style.",
    imageSrc: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "Website Maintenance",
    tag: "🔧 ONGOING CARE",
    description: "Continuous speed optimizations, backup monitoring, regular content updates, and direct support to keep your site pristine.",
    imageSrc: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  },
];

export function CardStackDemo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full flex justify-center items-center py-4"
    >
      <div className="w-full max-w-lg md:max-w-2xl px-4">
        <CardStack
          items={servicesItems}
          initialIndex={0}
          autoAdvance={true}
          intervalMs={3200}
          pauseOnHover={true}
          showDots={true}
          cardWidth={560}
          cardHeight={360}
          overlap={0.5}
        />
      </div>
    </motion.div>
  );
}
