import { motion } from 'framer-motion';

interface PageLoaderProps {
  onComplete?: () => void;
}

const PageLoader = ({ onComplete }: PageLoaderProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-bg flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      onAnimationComplete={onComplete}
    >
      <div className="flex flex-col items-center gap-10">
        {/* Premium logo animation with concentric rings */}
        <div className="relative w-24 h-24">
          {/* Outer rotating ring */}
          <motion.div
            className="absolute inset-0 border-2 border-ink/20 rounded-full"
            initial={{ rotate: -90, scale: 0.6 }}
            animate={{ rotate: 270, scale: 1 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          />
          
          {/* Middle ring with dash offset */}
          <motion.div
            className="absolute inset-3 border-2 border-accent/40 rounded-full"
            initial={{ rotate: 90, scale: 0.8, strokeDashoffset: 200 }}
            animate={{ 
              rotate: 450, 
              scale: 1,
              strokeDashoffset: 0
            }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            style={{ strokeDasharray: 200 }}
          />
          
          {/* Inner diamond */}
          <motion.div
            className="absolute inset-6 border border-ink/60"
            initial={{ rotate: 45, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          />
          
          {/* Center pulsing dot */}
          <motion.div
            className="absolute inset-0 m-auto w-3 h-3 bg-accent rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.4, 1],
              opacity: [0, 1, 1]
            }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          />
          
          {/* Orbiting particle */}
          <motion.div
            className="absolute inset-0 w-2 h-2 bg-ink/60 rounded-full"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 2, 
              delay: 0.5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ 
              transformOrigin: 'center center',
              translateX: '40px'
            }}
          />
        </div>

        {/* Loading text with staggered letters */}
        <motion.div className="flex gap-1.5 overflow-hidden">
          {['L', 'O', 'A', 'D', 'I', 'N', 'G'].map((letter, i) => (
            <motion.span
              key={i}
              className="text-xs tracking-[0.4em] text-ink/50 font-light"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.5 + i * 0.06,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Progress bar with shimmer */}
        <motion.div
          className="w-56 h-px bg-ink/10 overflow-hidden rounded-full relative"
          initial={{ opacity: 0, scaleX: 0.8 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/60 to-transparent w-1/2"
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{ 
              duration: 1.5, 
              delay: 0.9,
              repeat: Infinity,
              ease: [0.4, 0, 0.2, 1]
            }}
          />
        </motion.div>
        
        {/* Subtle tagline */}
        <motion.p
          className="text-[0.6rem] uppercase tracking-[0.2em] text-ink/40 font-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
        >
          Curating excellence
        </motion.p>
      </div>
    </motion.div>
  );
};

export default PageLoader;
