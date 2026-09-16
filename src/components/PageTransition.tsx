import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  
  useEffect(() => {
    // Simulate page load - in real app this would wait for data
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isPageLoading && (
          <motion.div
            className="fixed inset-0 z-[99] bg-bg flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex flex-col items-center gap-8">
              {/* Premium geometric loader */}
              <div className="relative w-16 h-16">
                <motion.div
                  className="absolute inset-0 border-2 border-ink/20"
                  initial={{ rotate: 0, scale: 0.8 }}
                  animate={{ rotate: 180, scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                />
                <motion.div
                  className="absolute inset-2 border-2 border-accent/40"
                  initial={{ rotate: 45, scale: 0 }}
                  animate={{ rotate: 225, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                />
                <motion.div
                  className="absolute inset-0 m-auto w-2 h-2 bg-accent rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.5, 1], opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                />
              </div>
              
              {/* Animated dots */}
              <motion.div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 bg-ink/40 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      y: [0, -4, 0]
                    }}
                    transition={{ 
                      duration: 1.2, 
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ 
          duration: 0.5, 
          ease: [0.4, 0, 0.2, 1]
        }}
        className="w-full"
      >
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.1,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="w-full"
        >
          {children}
        </motion.div>
      </motion.div>
    </>
  );
};

export default PageTransition;
