import {React, Suspense} from 'react';
import { useNavigate } from "react-router-dom";
import './Page2.scss';
import Button from '../../components/Button/Button';
import {Canvas} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';
import { motion } from "framer-motion";
import {Link} from 'react-router-dom';


export default function Page2 () {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/ourstory");
      };
    
return (
    <motion.div initial= {{opacity: 0}} animate={{opacity:1}}
    transition={{duration:0.75, ease:"easeOut"}}
    exit={{opacity:0}}> 
 
    <div className='sec-box'>

   
    
<div className='sec-box__cont'>



     <div className='sec-box__columns'>
            <div className='sec-box__left'>
         <p className='sec-box__text'>    life will win over death,
                and light will win over darkness</p>
           <p className='sec-box__desc'> 
Our dodecahedron symbolizes unity and strength, as its interconnected lines represent diverse hands joining together in a powerful figure. Each line represents a unique individual offering help, and when combined, they create a force capable of transforming the world. In the hands of a volunteering organization, this symbol serves as a reminder that collective efforts can bring about meaningful change and make a lasting impact on our global community.</p> 

<Link to='/ourstory'><Button  /></Link>

            </div></div>

           
            <div className='object'>
                <Canvas>
                    <Suspense fallback={null}>
                          <ambientLight intensity={0.5} /> 
      <directionalLight position={[1, 1, 1]} intensity={0.6} /> 
              <Model />
                  <OrbitControls enableZoom={false}  />
                    </Suspense>
                    </Canvas>
            </div> 
            
            
            </div>


            
    
    </div>

   
    </ motion.div>
)
}