import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const socialIcons = [
    { Icon: Facebook, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Twitter, href: '#' },
    { Icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-[#0D0D0D] border-t border-[#2D2D2D]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-4 gap-8 mb-8"
        >
          {/* Logo and Description */}
          <motion.div variants={itemVariants} className="md:col-span-2 ">
            <div className="flex items-center space-x-2">
            <img
              src="/logo.png"     
              alt="Logo"
              className="h-20 w-20 object-contain"
            />
            <div className="text-2xl font-bold text-[#F4C430] mb-4">
              FITNESS <span className="text-white">SPORT</span>
            </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transform your body and mind with our world-class fitness programs, 
              expert trainers, and state-of-the-art facilities.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    backgroundColor: '#F4C430',
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#2D2D2D] p-3 rounded-lg transition-all group"
                >
                  <Icon className="text-gray-400 group-hover:text-black transition-colors" size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Contact'].map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="text-gray-400 hover:text-[#F4C430] transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {['Personal Training', 'Strength Training', 'Cardio Programs', 'Nutrition Coaching'].map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-gray-400"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="border-t border-[#2D2D2D] pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 Fitness Sports Center. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((policy, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ color: '#F4C430', y: -2 }}
                  className="text-gray-400 transition-colors"
                >
                  {policy}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
