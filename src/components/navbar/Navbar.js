import React, { useState } from 'react';
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import {SiAnaconda} from "react-icons/si"
import "./Navbar.css"
const Navbar = () => {

    const [showBars,setShowBars] = useState(true)

    const toggleBar = () =>{
        setShowBars(!showBars)
    }
  return(
    <nav className='nav-bar container ' >
       <div className='menu'>
         <ul className='nav-link' id={showBars ? "hide-bar" : "show-bar"}>
            <li>
                <a href="#header">آموزش بیشتر</a>
            </li>
            <li>
                <a href="#header">خانه</a>
            </li>
            <li>
                <a href="#features">امکانات</a>
            </li>
            <li>
                <a href="#download">دانلود</a>
            </li>
            <li>
                <a href="#subscribe">مشترک شوید</a>
            </li>
         </ul>
       </div> 
       <div className='logo'>
        <div className='logo-text'>
            Social
            <span>X</span>
        </div>
            <SiAnaconda size={35} color={"#fff"}/>
       </div>
       <div className='btn-bar' onClick={toggleBar}>
       {
       showBars ?  <AiOutlineBars color='#fff' fontSize={35} cursor={"pointer"}/>
        :  
        <RiCloseLine color='#fff' fontSize={35} cursor={"pointer"}/>
      }
       </div>
    </nav>
  )
};

export default Navbar;
