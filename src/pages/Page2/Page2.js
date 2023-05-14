import {React, Suspense} from 'react';
import './Page2.scss';
import Button from '../../components/Button/Button';
import {Canvas} from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { ambientLight, directionalLight } from "@react-three/drei";
import Nav from '../../components/Nav/Nav';
import Model from './Model';


export default function Page2 () {
return (
    <>
 
    <div className='sec-box'>
        <Nav />
        {/* <div className='sec-box__nav'>
            <div className='sec-box__logo'> <FaConnectdevelop /> <span className='sec-font'>Dopomoha.</span></div>
            <div className='sec-box__list'>
                <ul className='sec-font'>About us</ul>    
                <ul>|</ul>
                 <ul className='sec-font'>Our story</ul>
                <ul>|</ul>
                <ul className='sec-font'>Projects</ul>
            </div>
            <div className='sec-box__link'> aidMapper</div>
        </div> */}
     <hr className='hr'></hr>



<div className='sec-box__cont'>



     <div className='sec-box__columns'>
        {/* <div className='sec-box__p'> */}
            <div className='sec-box__left'>
         <p className='sec-box__text'>    life will win over death,
                and light will win over darkness</p>
           <p className='sec-box__desc'> 
Our dodecahedron symbolizes unity and strength, as its interconnected lines represent diverse hands joining together in a powerful figure. Each line represents a unique individual offering help, and when combined, they create a force capable of transforming the world. In the hands of a volunteering organization, this symbol serves as a reminder that collective efforts can bring about meaningful change and make a lasting impact on our global community.</p> 


          <Button  />
            </div></div>
            
            {/* </div> */}


            
           
            <div className='object'>
                <Canvas>
                    <Suspense fallback={null}>
                          <ambientLight intensity={0.5} /> {/* Add ambient light */}
      <directionalLight position={[1, 1, 1]} intensity={0.6} /> {/* Add directional light */}
              <Model />
                  <OrbitControls enableZoom={false}  />
                    </Suspense>
                    </Canvas>
            </div> 
            
            
            </div>


            
    
    </div>

   
    </>
)
}