import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'

      >
        <div
        options={{
          max:45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[25px] py-5 px-12 min-h-[300px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title}
          className='w-20 h-20 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>
        
        </motion.div>
        </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction</p>
          <h2 className={styles.sectionHeadText}>
            Overview.
          </h2>
      </motion.div>

      <motion.p 
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-sky-300 text-[20px] max-w-3xl leading-[40px]'
      >
        <p>I am a Junior Fullstack Developer with experience in Java, Javascript, MySQL and HTML/CSS.</p>
        <p>I like to play video games, watching TV Shows,movies and reading books.</p>
        <p>I've been wanting to learn more about programming, so I made the decision to enter the bootcamp Academia De Código.</p>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index=
          {index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")