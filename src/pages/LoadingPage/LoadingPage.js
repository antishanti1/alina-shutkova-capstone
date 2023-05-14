
import {React, Suspense} from 'react';
import './LoadingPage.scss';
import {Canvas} from '@react-three/fiber';
import {FaConnectdevelop} from "react-icons/fa";
import { Environment, OrbitControls } from '@react-three/drei';
import MainModel from './MainModel';



export default function LoadingPage () {
return (
    <>
 
    <div className='load-box'>
  
       <h1 className='load-box__heading'> <span className='load-box__icon'>< FaConnectdevelop /> </span> Dopomoha.</h1>

           <div className='load-box__mod'>
                <Canvas>
                    <Suspense fallback={null}>
                          <ambientLight intensity={0.5} /> {/* Add ambient light */}
      <directionalLight position={[1, 1, 1]} intensity={0.6} /> {/* Add directional light */}
             <MainModel />
                  <OrbitControls enableZoom={false} />
                    </Suspense>
                    </Canvas>
            </div>
    </div>


   
    </>
)
}