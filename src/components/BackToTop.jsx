// components/BackToTop.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render button only on client
  if (typeof window === 'undefined') return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-[#F4C430] hover:bg-yellow-400 text-black p-4 rounded-full shadow-lg z-50 flex items-center justify-center"
    >
      <ArrowUp size={24} />
    </motion.button>
  );
}