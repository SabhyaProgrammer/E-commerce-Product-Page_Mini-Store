import { motion } from 'framer-motion';

const TrustStrip = () => {
  const features = [
    { icon: '🚚', text: 'Free shipping over $75' },
    { icon: '✋', text: 'Handmade in small batches' },
    { icon: '↩️', text: '30-day returns' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap justify-around items-center gap-4 py-8 border-y border-ink/10 mt-16 font-mono text-xs uppercase tracking-widest opacity-80"
    >
      {features.map((feature, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="flex items-center gap-2"
        >
          <span className="text-lg">{feature.icon}</span>
          <span>{feature.text}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TrustStrip;
