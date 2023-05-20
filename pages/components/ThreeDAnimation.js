import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ThreeDAnimation = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const rotationY = scrollPosition * 0.02;
      const rotationX = scrollPosition * 0.01;

      controls.start({ rotateY: rotationY, rotateX: rotationX });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full z-[-1]"
      style={{
        perspective: '1000px',
        rotateY: 0,
        rotateX: 0,
      }}
      animate={controls}
    >
      <motion.div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: '#00ff00',
          borderRadius: '50%',
          margin: 'auto',
        }}
      />
    </motion.div>
  );
};

export default ThreeDAnimation;
