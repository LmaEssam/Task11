import './HomePage.css'
import { NavLink, Outlet } from "react-router-dom";
import cart from '../../assets/images/icon-cart.svg'
import avatar from '../../assets/images/image-avatar.png'
import ImagesPage from '../../components/ImagesPage/ImagesPage';
import menuIcon from '../../assets/images/icon-menu.svg'
import closeIcon from '../../assets/images/icon-close.svg'
import { useState } from 'react';

function HomePage(){
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return(
  
      <div id='linepage'>
        <div id='mainpage'>
          <div id='obtions'>
          <div className="menu-icon" onClick={toggleMobileMenu}>
              <img src={menuIcon} />
            </div>
            <h1>Sneakers</h1>
          <nav>
       
          
        <ul className={isMobileMenuOpen ? 'nav-links mobile-menu' : 'nav-links'}>
        <div className="close-icon" onClick={toggleMobileMenu}>
                <img src={closeIcon} />
              </div>
          <li>
          <NavLink to="/Collectionpage" className={({ isActive }) => isActive ? 'active-link' : ''}>
                  Collections
                </NavLink>
          </li>
          <li>
          <NavLink to="/Menpage" className={({ isActive }) => isActive ? 'active-link' : ''}>
                  Men
                </NavLink>
                </li>
                <li>
                <NavLink to="/Womenpage" className={({ isActive }) => isActive ? 'active-link' : ''}>
                  Women
                </NavLink>
              </li>
              <li>
                <NavLink to="/Aboutpage" className={({ isActive }) => isActive ? 'active-link' : ''}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/Contactpage" className={({ isActive }) => isActive ? 'active-link' : ''}>
                  Contact
                </NavLink>
              </li>
        </ul>
      </nav>
      <Outlet></Outlet>
          </div>
          <div id='images'>
            <button><img src={cart} /> </button>
            <img src={avatar} id='person'/>
          </div>
         
      
        </div>
        <div className="line"></div>
        <ImagesPage></ImagesPage>
      
        </div>
    )

}
export default HomePage