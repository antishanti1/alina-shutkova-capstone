import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

import './App.scss';
import LoadingPage from './pages/LoadingPage/LoadingPage';
import MainMap from "./pages/Map/MainMap";
import OurStory from './pages/OurStory/OurStory';
import Page2 from './pages/Page2/Page2';
import {useState, useEffect} from 'react';
import OurProjects from "./pages/OurProjects/OurProjects";
// import {motion, AnimatePresence} from 'framer-motion';





export default function App() {
  return (
   
    // <OurProjects />
    // <MainMap />
    <div className="main">
     <Routes>
        <Route path="/" element={<LoadingAndPage2 />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/map" element={<MainMap />} />
        <Route path="/projects" element={<OurProjects />} />
      </Routes>
</div>
  );
}

function LoadingAndPage2() {
  return (
    <>
      <LoadingPage />
      <Page2 />
    </>
  );
}