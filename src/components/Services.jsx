import { Dumbbell, Heart, Apple, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Users,
      title: 'Personal Training',
      description: 'One-on-one coaching tailored to your specific goals and fitness level with expert guidance.',
    },
    {
      icon: Dumbbell,
      title: 'Strength Training',
      description: 'Build muscle, increase power, and improve your overall strength with our specialized programs.',
    },
    {
      icon: Heart,
      title: 'Cardio Programs',
      description: 'Boost your endurance and cardiovascular health with high-energy workouts and routines.',
    },
    {
      icon: Apple,
      title: 'Nutrition Coaching',
      description: 'Expert nutritional guidance to complement your training and accelerate your results.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="py-20 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#F4C430]">Services</span>
          </h2>
          <div className="w-20 h-1 bg-[#F4C430] mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive fitness solutions designed to help you reach your goals faster and more effectively.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="bg-[#2D2D2D] p-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#F4C430]/20 border border-[#404040] hover:border-[#F4C430]/50"
              >
                <motion.div
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 },
                  }}
                  className="bg-[#F4C430] w-16 h-16 rounded-lg flex items-center justify-center mb-6"
                >
                  <Icon className="text-black" size={32} />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
