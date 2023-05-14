import {FaConnectdevelop} from "react-icons/fa";
import './Nav.scss';



export default function Nav () {
    return (
        <div className='nav'>
        <div className='nav__logo'> <FaConnectdevelop /> <span className='sec-font'>Dopomoha.</span></div>
        <div className='nav__list'>
            <ul className='nav__font'>About us</ul>    
            <ul>|</ul>
             <ul className='nav__font'>Our story</ul>
            <ul>|</ul>
            <ul className='nav__font'>Projects</ul>
        </div>
        <div className='nav__link'> aidMapper</div>
    </div>
    )
}