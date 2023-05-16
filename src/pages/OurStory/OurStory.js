import Nav from "../../components/Nav/Nav"
import './OurStory.scss';
import { React, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import RainModel from './RainModel';
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Link } from "react-router-dom";

const visible = { opacity: 1, y: 0, transition: { duration: 1.2 } };


export default function OurStory() {
    return (

        <>
            <Nav />
            <motion.section className="story"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 1 } }}
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            >

                <motion.div className="intro"
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible
                    }}

                >
                    <div className='intro__mod'>
                        <Canvas>
                            <Suspense fallback={null}>
                                <ambientLight intensity={1} />
                                <directionalLight position={[0, 4, 4]} intensity={2} />
                                <RainModel />
                                <OrbitControls enableZoom={false} />
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className="intro__divider">
                        <div className="intro__alina">

                            <div className="intro__alina-contacts">
                                <span className="intro__alina-contacts--l intro--bold"> Alina </span>
                                <span className="intro__alina-contacts--l intro--bold"> Software Engineer  </span>
                                <span className="intro__alina-contacts--l intro--bold"> https://github.com/antishanti1</span>
                                <span className="intro__alina-contacts--l intro--bold"> shutkova2603@gmail.com</span>
                            </div>
                            <div className="intro__alina-img">
                            </div>
                        </div>
                        <div className="intro__katya">
                            <div className="intro__katya-img">
                            </div>
                            <div className="intro__katya-contacts">
                                <span className="intro--bold"> Katya </span>
                                <span className="intro--bold"> Photographer </span>
                                <span className="intro--bold"> https://kateph.com/</span>
                                <span className="intro--bold"> katerinanakati@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="intro__link">
                        <Link to='/projects'>
                            <span>Our Projects <HiOutlineArrowRight /></span></Link>
                    </div>
                </motion.div>
                <div className="solution">
                    <motion.p className="solution__p"
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible
                        }}
                    > Since the outbreak of a <span className="intro--bold intro--extralarge" >full-scale war in Ukraine</span> , we have continuously been asking ourselves what can we do to help.
                        The reality is that, despite our sincere intentions, our actions alone will never be sufficient due us being so far away.
                        However, we firmly believe that by uniting with numerous individuals, we can accomplish <span className="intro--bold intro--large" >remarkable</span>  things together. Thus, our mission today
                        is to establish a small organization of young and creative individuals who can employ their skills and talents to make a <span className="intro--bold intro--large" >meaningful impact</span> .
                        Our approach encompasses various avenues, including art, digital solutions, fundraisers,
                        and more, rather than solely relying on financial contributions.</motion.p>
                    <motion.p className="solution__p"
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible
                        }}
                    >
                        <span className="intro--bold intro--large" >Katya</span>, a gifted photographer, has been providing valuable assistance to volunteering organizations,
                        while <span className="intro--bold intro--large" >Alina</span> , an aspiring software engineer,
                        believes that the ability to solve problems extends beyond mere bug fixing
                        and can be applied to addressing global challenges through  <span className="intro--bold intro--large" >innovative software solutions</span>.
                    </motion.p>
                    <motion.p className="solution__p"
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible
                        }}
                    >
                        We are actively seeking like-minded individuals who share our vision.
                        If you are interested, please provide us with your contact information,
                        so that we may <span className="intro--bold intro--extralarge" >collaborate in making a positive difference in the world together</span>.
                    </motion.p>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible
                        }}
                    >
                        <input className="solution__email" type="text" placeholder="Your Email" />
                    </motion.div>
                </div>
            </motion.section>
        </>
    )
}