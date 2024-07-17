import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { DiRedis } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <motion.h2
       whileInView={{opacity:1, x:0}}
       initial={{opacity:0, x:-100}}
       transition={{duration:1.5}}
      className="my-20 text-center text-4xl">
        Technologies
      </motion.h2>
      <motion.div
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration:1.5}}
       className="flex items-center justify-center gap-4">

        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-hidden ">
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>

        <motion.div 
          variants={iconVariants(2.9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-hidden ">
          <TbBrandNextjs className='text-7xl' />
        </motion.div>

        <motion.div 
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          
          className="rounded-2xl border-4 border-hidden ">
          <SiMongodb className='text-7xl text-green-400 ' />
        </motion.div>

        <motion.div 
          variants={iconVariants(2.7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-hidden ">
          <DiRedis className='text-7xl text-red-600' />
        </motion.div>

        <motion.div 
          variants={iconVariants(2.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-hidden ">
          <FaNodeJs className='text-7xl text-green-600' />
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Technologies;