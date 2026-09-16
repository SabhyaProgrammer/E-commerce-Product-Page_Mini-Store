import { motion } from 'framer-motion';

interface PageLoaderProps {
  onComplete?: () => void;
}

const PageLoader = ({ onComplete }: PageLoaderProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-bg flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      onAnimationComplete={onComplete}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Premium logo animation */}
        <motion.div
          className="relative w-20 h-20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Rotating square frame */}
          <motion.div
            className="absolute inset-0 border-2 border-accent/30"
            initial={{ rotate: -45, scale: 0.5 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          {/* Inner diamond */}
          <motion.div
            className="absolute inset-2 border-2 border-ink"
            initial={{ rotate: 45, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          />
          {/* Center dot */}
          <motion.div
            className="absolute inset-0 m-auto w-3 h-3 bg-accent rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.4, delay: 0.3 }}
          />
        </motion.div>

        {/* Loading text with staggered letters */}
        <motion.div className="flex gap-1 overflow-hidden">
          {['L', 'O', 'A', 'D', 'I', 'N', 'G'].map((letter, i) => (
            <motion.span
              key={i}
              className="text-sm tracking-[0.3em] text-ink/60 font-light"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: 0.4 + i * 0.05,
                ease: "easeOut"
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="w-48 h-0.5 bg-ink/10 overflow-hidden rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-accent to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ 
              duration: 1.2, 
              delay: 0.7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PageLoader;
