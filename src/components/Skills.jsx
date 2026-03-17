import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function SkillBar({ name, percentage, delay }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      setWidth(percentage);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, percentage, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="mb-8"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-semibold text-white">{name}</span>
        <span className="text-[#F4C430] font-bold text-lg">{percentage}%</span>
      </div>

      <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${width}%` : 0 }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
          className="h-full bg-linear-to-r from-[#F4C430] to-[#E5B520] rounded-full relative"
        >
          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "Strength Training", percentage: 90 },
    { name: "Cardio Fitness", percentage: 85 },
    { name: "Nutrition Coaching", percentage: 75 },
    { name: "Yoga & Flexibility", percentage: 80 },
  ];

  const handleSmoothScroll = (targetId) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section ref={ref} className="py-20 bg-[#2A1810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#F4C430]">Expertise</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              We offer comprehensive training programs backed by years of experience
              and proven results. Our expert team specializes in various fitness
              disciplines to help you achieve your goals.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(244, 196, 48, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSmoothScroll('#services')}
              className="bg-[#F4C430] text-black px-8 py-4 rounded-md text-lg font-semibold hover:bg-[#E5B520] transition-all shadow-lg"
            >
              Explore Programs
            </motion.button>
          </motion.div>

          <div>
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                delay={0.2 + index * 0.15}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}