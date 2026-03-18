import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { statistics } from "../data/data"; 

function StatCard({ endValue, label, suffix = "", delay }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const duration = 2000;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * endValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, endValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-[#2D2D2D] p-8 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-[#F4C430]/20"
    >
      <div className="text-5xl md:text-6xl font-bold text-[#F4C430] mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-lg md:text-xl text-gray-300">{label}</div>
    </motion.div>
  );
}

export function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-[#2A1810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#F4C430]">Achievement</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join a community of dedicated fitness enthusiasts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard endValue={statistics[0].endValue} label="Members" suffix="+" delay={statistics[0].delay} />
          <StatCard endValue={statistics[1].endValue} label="Professional Trainers" delay={statistics[1].delay} />
          <StatCard endValue={statistics[2].endValue} label="Training Programs" delay={statistics[2].delay} />
        </div>
      </div>
    </section>
  );
}