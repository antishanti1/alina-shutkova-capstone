import React from 'react';
import './OurProjects.scss';
import Nav from '../../components/Nav/Nav';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


export default function OurProjects() {

  const imgVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } }
  };
  const imgBottVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } }
  };

  return (
    <>
      <Nav />
      <section className="projects">
        <div className='projects__img'>
          <div className='projects__img-top' >
            <motion.div
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 5 }}
              className='projects__img-1'
              initial="hidden"
              animate="visible"
              variants={imgVariants}>

            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imgVariants}
              whileHover={{ scale: 1.5 }} whileTap={{ scale: 5 }} className='projects__img-2'>

            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imgVariants}
              whileHover={{ scale: 1.5 }} whileTap={{ scale: 5 }} className='projects__img-3'>

            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imgVariants}
              whileHover={{ scale: 1.5 }} whileTap={{ scale: 5 }} className='projects__img-4'>

            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imgVariants}
              whileHover={{ scale: 1.5 }} whileTap={{ scale: 5 }} className='projects__img-9'>

            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imgVariants}
              whileHover={{ scale: 1.5 }} whileTap={{ scale: 5 }} className='projects__img-11'>

            </motion.div>
          </div>
          <div className='projects__mid'>
            <div className='projects__mid-name'> <span>aidmapper</span></div>
            <div className='projects__mid-desc'> <p>its a compassionate platform designed to assist refugees in locating donations without fear of judgment or harassment. With aidMapper,
              individuals can easily post their donations with just two simple clicks, and if needed, remove them without the requirement of logging in. Our aim is to provide a secure and inclusive space for refugees
              to access the support they need, ensuring a seamless and respectful donation experience.</p>
              <Link to='/map'>
                <p className='projects__mid--bold'>explore <HiOutlineArrowRight /></p></Link>
            </div>
          </div>
          <div className='projects__img-bot'>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imgBottVariants}
              whileHover={{ scale: 1.5 }} whileTap={{ scale: 5 }} className='projects__img-5'>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={imgBottVariants}
              whileHover={{ scale: 1.5 }} whileTap={{ scale: 5 }} className='projects__img-6'>

            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imgBottVariants}
              whileHover={{ scale: 1.5 }} whileTap={{ scale: 5 }} className='projects__img-7'>

            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imgBottVariants}
              whileHover={{ scale: 1.5 }} whileTap={{ scale: 5 }} className='projects__img-8'>

            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imgBottVariants}
              whileHover={{ scale: 1.5 }} whileTap={{ scale: 5 }} className='projects__img-10'>

            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imgBottVariants}
              whileHover={{ scale: 1.5 }} whileTap={{ scale: 5 }} className='projects__img-12'>

            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}