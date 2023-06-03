import React, { useRef } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import downloadIcon from '../assets/download.png';

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
  const downloadRef = useRef(null);

  const handleDownload = () => {
    const link = downloadRef.current;
    link.click();
  };

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
      <button
        className="btn bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium py-3 px-6 rounded-md shadow-lg mt-8 inline-block relative overflow-hidden"
        onClick={handleDownload}
      >
        <img
          src={downloadIcon}
          alt="Download CV"
          className="inline-block mr-2 w-5 h-5 align-middle"
        />
        Download CV
      </button>
      <a
        ref={downloadRef}
        href="src/CV/Rafael_Teles_CV.pdf"
        style={{ display: 'none' }}
        download
      >
        Download CV
      </a>

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