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
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isPageLoading && (
          <motion.div
            className="fixed inset-0 z-[99] bg-bg flex items-center justify-center pointer-events-none"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex flex-col items-center gap-4">
              {/* Minimal spinner */}
              <motion.div
                className="w-10 h-10 border-2 border-ink/20 border-t-accent rounded-full"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ 
          duration: 0.35, 
          ease: [0.25, 0.1, 0.25, 1]
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
