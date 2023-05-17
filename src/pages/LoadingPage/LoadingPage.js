import './LoadingPage.scss';
import { React, Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { FaConnectdevelop } from "react-icons/fa";
import { OrbitControls } from '@react-three/drei';
import MainModel from './MainModel';
import { motion } from 'framer-motion';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Link } from "react-router-dom";
import Page2 from '../Page2/Page2';
import Button from '../../components/Button/Button';
import ArrowButton from '../../components/ArrowButton/ArrowButton';

import {HashLink} from 'react-router-hash-link';

export default function LoadingPage({ scrollToPage2 }) {


  return (
    <>
      <div className='load-box'>

        <motion.div className='load-box__front' initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          exit={{ opacity: 0 }} >

          <h1 className='load-box__heading'> <span className='load-box__icon'>< FaConnectdevelop /> </span> Dopomoha.</h1>
        </motion.div>

        <div className='load-box__mod'>
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[0, 2, 2]} intensity={0.6} />
              <MainModel />
              <OrbitControls enableZoom={false} />
            </Suspense>
          </Canvas>
        </div>


           <Link to='/about'></Link>

           <HashLink smooth to='#about' >
  <div className='load-box__arrow'  >
     <ArrowButton />
  </div>
          
           
</HashLink>
      </div>
      <section id='about'>
  <Page2 />
</section>
    </>
  )
}