import { motion } from 'framer-motion';
import { Truck, HandHeart, RotateCcw } from 'lucide-react';

const TrustStrip = () => {
  const features = [
    { icon: Truck, text: 'Free shipping over $75' },
    { icon: HandHeart, text: 'Handmade in small batches' },
    { icon: RotateCcw, text: '30-day returns' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-wrap justify-around items-center gap-6 py-10 border-y border-ink/10 mt-20 bg-gradient-to-r from-transparent via-ink/3 to-from-transparent"
    >
      {features.map((feature, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.15, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="flex items-center gap-3 group cursor-default"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-accent/80 group-hover:text-accent transition-colors"
          >
            <feature.icon size={20} strokeWidth={1.5} />
          </motion.div>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] opacity-70 group-hover:opacity-100 transition-opacity">
            {feature.text}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TrustStrip;
