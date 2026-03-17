import { motion, useInView } from "framer-motion";
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-20 bg-[#2A1810]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="order-2 md:order-1"
          >
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full h-125 object-cover rounded-lg shadow-2xl about-bg"
            />
          </motion.div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              About Our <span className="text-[#F4C430]">Gym</span>
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-20 h-1 bg-[#F4C430] mb-6"
            />
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg mb-6 leading-relaxed"
            >
              At Fitness Sports Center, we believe fitness is more than just physical transformation—it's 
              about building confidence, discipline, and a healthier lifestyle. Our 
              state-of-the-art facility is designed to support every step of your fitness journey.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg mb-6 leading-relaxed"
            >
              With expert trainers, cutting-edge equipment, and a community that motivates 
              and inspires, we're committed to helping you achieve your goals. Whether you're 
              a beginner or a seasoned athlete, we have the programs and support you need.
            </motion.p>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-3 gap-6 mt-8"
            >
              {[
                { value: '500+', label: 'Members' },
                { value: '20+', label: 'Trainers' },
                { value: '10+', label: 'Years' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statsVariants}
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-[#F4C430] mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
