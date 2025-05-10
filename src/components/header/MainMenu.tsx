/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

interface DataType {
    navbarPlacement?: string;
}

const MainMenu = ({ navbarPlacement }: DataType) => {
    return (
        <>
            <ul
                className={`nav navbar-nav ${
                    navbarPlacement ? navbarPlacement : ""
                }`}
                data-in="fadeInDown"
                data-out="fadeOutUp"
            >
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/about-us">About Us</Link>
                </li>
                <li>
                    <Link to="/work">Work</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/contact-us">Contact Us</Link>
                </li>
            </ul>
        </>
    );
};

export default MainMenu;
