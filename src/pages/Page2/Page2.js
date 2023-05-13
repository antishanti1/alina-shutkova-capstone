import {React, Suspense} from 'react';
import './Page2.scss';
import {FaConnectdevelop} from "react-icons/fa";
import Button from '../../components/Button/Button';
import {Canvas} from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { ambientLight, directionalLight } from "@react-three/drei";

import Model from './Model';


export default function Page2 () {
return (
    <>
 
    <div className='sec-box'>

        <div className='sec-box__nav'>
            <div className='sec-box__logo'> <FaConnectdevelop /> <span className='sec-font'>Dopomoha.</span></div>
            <div className='sec-box__list'>
                <ul className='sec-font'>About us</ul>
                <ul>|</ul>
                <ul className='sec-font'>Projects</ul>
                <ul>|</ul>
                <ul className='sec-font'>Our story</ul>
            </div>
            <div className='sec-box__link'> aidMapper</div>
        </div>
     <hr className='hr'></hr>
<div className='cont'>



     <div className='left'>
        <div className='sec-box__p'>
            <div>
         <p className='sec-box__text'>    life will win over death,
                and light will win over darkness</p>
           <p className='sec-box__desc'> We are a volunteering organization that is dedicated to supporting Ukrainian refugees seeking asylum in the United States by providing them with the necessary support and advocacy they require. We firmly believe in the importance of making a positive impact in the lives of those who are most vulnerable and in need, which is why our team of volunteers is committed to helping these individuals in any way we can.</p> 


          <Button  />
            </div></div></div>





            
            </div>
            <div className='object'>
                <Canvas>
                    <Suspense fallback={null}>
                          <ambientLight intensity={0.5} /> {/* Add ambient light */}
      <directionalLight position={[1, 1, 1]} intensity={0.6} /> {/* Add directional light */}
              <Model />
                  <OrbitControls />
                    </Suspense>
                    </Canvas>
            </div>


            
    
    </div>

   
    </>
)
}