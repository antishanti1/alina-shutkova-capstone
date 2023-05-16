import { FaConnectdevelop } from "react-icons/fa";
import './Nav.scss';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <>
            <div className='nav'>
                <Link to='/'>
                    <div className='nav__logo'> <FaConnectdevelop /> <span className='sec-font'>Dopomoha.</span></div></Link>
                <div className='nav__list'>
                    <Link to='/'>
                        <li className='nav__font'>About us</li>
                    </Link>
                    <li>|</li>
                    <Link to='/ourstory'>
                        <li className='nav__font'>Our Story</li>
                    </Link>
                    <li>|</li>
                    <Link to='/projects'>
                        <li className='nav__font'>Our Projects</li>
                    </Link>
                </div>
                <Link to='/map'> <div className='nav__link'> aidMapper</div></Link>
            </div>
            <hr className='hr'></hr>
        </>
    )
}