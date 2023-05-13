// import { Route, Routes } from "react-router-dom";
import './App.scss';
import LoadingPage from './pages/LoadingPage/LoadingPage';
import MainMap from "./pages/Map/MainMap";
import Page2 from './pages/Page2/Page2';



export default function App () {
  return (
    <>
    <LoadingPage />
    <Page2 />
    {/* <div className="main">  
       <MainMap /></div> */}
    </>
  )
}

