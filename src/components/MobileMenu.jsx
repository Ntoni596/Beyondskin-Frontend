import {NavLink} from 'react-router-dom';
import {X} from 'react-bootstrap-icons';
import useCustomizer from '../hooks/useCustomizer';
import { useEffect } from 'react';

const MobileMenu = ({closeMethod}) => {
    const {mobileNavColor, mobileNavTextColor} = useCustomizer();
    useEffect(() => {
        document.getElementById('mobile-menu').style.backgroundColor = `${mobileNavColor}`;
        document.getElementById('mobile-menu').style.color = `${mobileNavTextColor}`;
    })

    return(
        <>
        <div id="close-nav-menu" onClick={closeMethod}>
            <X/>
        </div>
        <ul id="mobile-menu">
            <li>
                <NavLink to="/about" onClick={closeMethod}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/ayurveda" onClick={closeMethod}>
                    Ayurveda
                </NavLink>
            </li>
            <li>
                <NavLink to="/treatments" onClick={closeMethod}>
                    Treatments
                </NavLink>
            </li>
            <li>
                <NavLink to="/vouchers" onClick={closeMethod}>
                    Vouchers
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" onClick={closeMethod}>
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink to="/book" onClick={closeMethod}>
                    Book Now
                </NavLink>
            </li>
        </ul>
        </>
    )
}

export default MobileMenu;