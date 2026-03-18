import { Check } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { getPlans } from "../services/service";

export function Membership() {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.2 });

  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlans() {
      const data = await getPlans();
      setPlans(data);
      setLoading(false);
    }
    fetchPlans();
  }, []);

  if (loading) return <div className="text-white text-center py-20">Loading plans...</div>;

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section className="py-20 bg-[#2A1810]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Membership <span className="text-[#F4C430]">Plans</span>
          </h2>
          <div className="w-20 h-1 bg-[#F4C430] mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the perfect plan that fits your fitness goals and lifestyle.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}          
              whileHover={{ y: -10 }}          
              className={`rounded-lg p-8 transition-all duration-300 ${plan.highlighted
                  ? "bg-[#2D2D2D] border-2 border-[#F4C430] shadow-2xl shadow-[#F4C430]/30 scale-105"
                  : "bg-[#1F1F1F] border border-[#404040] hover:border-[#F4C430]/50"
                }`}
            >
              {plan.highlighted && (
                <div className="bg-[#F4C430] text-black text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-[#F4C430]">{plan.price}</span>
                <span className="text-gray-400 text-lg">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <Check className="text-[#F4C430] mr-3 shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-md font-bold ${plan.highlighted
                    ? "bg-[#F4C430] text-black hover:bg-[#E5B520]"
                    : "bg-transparent border-2 border-[#F4C430] text-[#F4C430] hover:bg-[#F4C430] hover:text-black"
                  }`}
              >
                Join Now
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}