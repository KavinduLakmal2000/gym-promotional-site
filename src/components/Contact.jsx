import { Mail, Phone, MapPin } from 'lucide-react';
import { motion, useInView } from "framer-motion";
import { useRef, useState } from 'react';
import Swal from 'sweetalert2';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [focusedInput, setFocusedInput] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="contact" className="py-20 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-[#F4C430]">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-[#F4C430] mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your fitness journey? Contact us today and let's transform together.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-12"
        >

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-[#2D2D2D] p-8 rounded-lg border border-[#404040]"
          >
            <form className="space-y-6">

              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  onFocus={() => setFocusedInput('name')}
                  onBlur={() => setFocusedInput(null)}
                  animate={{
                    borderColor: focusedInput === 'name' ? '#F4C430' : '#404040',
                    boxShadow: focusedInput === 'name'
                      ? '0 0 15px rgba(244, 196, 48, 0.3)'
                      : '0 0 0 rgba(244, 196, 48, 0)',
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-full px-4 py-3 bg-[#1F1F1F] border rounded-md text-white focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  onFocus={() => setFocusedInput('email')}
                  onBlur={() => setFocusedInput(null)}
                  animate={{
                    borderColor: focusedInput === 'email' ? '#F4C430' : '#404040',
                    boxShadow: focusedInput === 'email'
                      ? '0 0 15px rgba(244, 196, 48, 0.3)'
                      : '0 0 0 rgba(244, 196, 48, 0)',
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-full px-4 py-3 bg-[#1F1F1F] border rounded-md text-white focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  rows={5}
                  onFocus={() => setFocusedInput('message')}
                  onBlur={() => setFocusedInput(null)}
                  animate={{
                    borderColor: focusedInput === 'message' ? '#F4C430' : '#404040',
                    boxShadow: focusedInput === 'message'
                      ? '0 0 15px rgba(244, 196, 48, 0.3)'
                      : '0 0 0 rgba(244, 196, 48, 0)',
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-full px-4 py-3 bg-[#1F1F1F] border rounded-md text-white focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your fitness goals..."
                />
              </div>

              <motion.button
                type="button"
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 0 25px rgba(244, 196, 48, 0.5)',
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  Swal.fire({
                    title: 'Message Sent!',
                    text: 'Your message has been successfully sent.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    background: '#1F1F1F', // dark background
                    color: '#FFFFFF',       // text color
                    iconColor: '#F4C430',   // icon color
                    confirmButtonColor: '#F4C430',
                  });
                }}
                className="w-full bg-[#F4C430] text-black py-3 rounded-md hover:bg-[#E5B520] transition-all font-bold"
              >
                Send Message
              </motion.button>

            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-400 mb-8">
                We're here to help you achieve your fitness goals. Reach out to us through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Phone, title: 'Phone', info: '+1 (555) 123-4567' },
                { icon: Mail, title: 'Email', info: 'info@FitnessSportsCenter.com' },
                { icon: MapPin, title: 'Address', info: '123 Fitness Street\nNew York, NY 10001' },
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.15 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="bg-[#F4C430] p-3 rounded-lg mr-4"
                    >
                      <Icon className="text-black" size={24} />
                    </motion.div>

                    <div>
                      <h4 className="text-white font-bold mb-1">
                        {contact.title}
                      </h4>
                      <p className="text-gray-400 whitespace-pre-line">
                        {contact.info}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="bg-[#2D2D2D] p-6 rounded-lg border border-[#404040] mt-8"
            >
              <h4 className="text-white font-bold mb-3">Opening Hours</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-[#F4C430]">5:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span className="text-[#F4C430]">7:00 AM - 9:00 PM</span>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}