import { useState } from "react";
import './Navbar.css'
const NavBar = ({menuItems}) => {
    const [show, setShow] = useState(false)
    const toggleMenu = () => {
        setShow((prev) => ! prev)
    }

    return (
        <>
        <nav className="navbar">
            <div>
                <button className="navbar-toggle" onMouseEnter={toggleMenu}>Bienvenidos</button>
            </div>
            <ul className={`navbar-menu ${show ? 'show': ''}`}>{menuItems.map((item, index)=>(
                <li className="navbar-item">
                    {item.text}
                </li>
            ))}
                <div><img src="./cart.svg" alt="Cart" /></div>
                <div>0</div>


            </ul>
        </nav>
        </>
    );
}
export default NavBar;