import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
}

const LoadingSpinner = ({ size = 'md' }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <motion.div
        className={`relative ${sizeClasses[size]}`}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        {/* Outer ring with gradient effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0%, rgba(217, 119, 68) 30%, transparent 100%)'
          }}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Inner pulsing core */}
        <motion.div
          className="absolute inset-1/4 bg-accent/20 rounded-full backdrop-blur-sm"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ 
            scale: [1, 0.7, 1], 
            opacity: [0.5, 0.8, 0.5],
            rotate: -360
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />
        
        {/* Orbiting dots */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-accent rounded-full"
            initial={{ rotate: i * 120 }}
            animate={{ rotate: i * 120 + 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2
            }}
            style={{
              transformOrigin: 'center center',
              translateX: `${size === 'sm' ? 12 : size === 'md' ? 18 : 24}px`
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
