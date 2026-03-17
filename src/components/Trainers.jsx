import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { trainers } from "../data/data"; // import from data.js

function TrainerCard({ image, name, specialty, socials, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="group relative bg-[#2D2D2D] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-80 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <motion.a
            whileHover={{ scale: 1.2, color: "#F4C430" }}
            href={socials.instagram}
            className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-[#F4C430] transition-colors"
          >
            <Instagram size={20} className="text-white" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, color: "#F4C430" }}
            href={socials.facebook}
            className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-[#F4C430] transition-colors"
          >
            <Facebook size={20} className="text-white" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, color: "#F4C430" }}
            href={socials.twitter}
            className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-[#F4C430] transition-colors"
          >
            <Twitter size={20} className="text-white" />
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        whileHover={{ borderColor: "#F4C430" }}
        className="p-6 border-2 border-transparent transition-colors duration-300"
      >
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-[#F4C430] text-lg font-semibold">{specialty}</p>
      </motion.div>

      <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-[#F4C430] group-hover:shadow-[0_0_20px_rgba(244,196,48,0.5)] transition-all duration-300 pointer-events-none"></div>
    </motion.div>
  );
}

export function Trainers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our <span className="text-[#F4C430]">Expert Trainers</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our certified trainers are dedicated to helping you achieve your fitness goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <TrainerCard
              key={trainer.name}
              {...trainer}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}