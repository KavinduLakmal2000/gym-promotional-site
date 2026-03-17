import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxMotivation() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="relative h-[70vh] overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 scale-110"
      >
        <img
          src="https://images.unsplash.com/photo-1739430548323-d3a55a714052?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwbW90aXZhdGlvbiUyMGludGVuc2V8ZW58MXx8fHwxNzczNjg2MDEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Gym motivation"
          className="w-full h-full object-cover"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/70"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8 max-w-4xl"
        >
          Push Your <span className="text-[#F4C430]">Limits</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl"
        >
          Every workout is a step closer to your goals. Start your transformation today.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 30px rgba(244, 196, 48, 0.7)",
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#F4C430] text-black px-10 py-5 rounded-md text-xl font-semibold hover:bg-[#E5B520] transition-all shadow-lg"
        >
          Start Training Today
        </motion.button>
      </div>
    </section>
  );
}
