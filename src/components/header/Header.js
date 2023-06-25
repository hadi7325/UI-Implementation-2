import React, { useEffect } from 'react';
import phoneImg from "../../assets/phone-header-bg.png"
import { BsMouse } from "react-icons/bs"
import "./header.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
const Header = () => {


  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);
  return (
    <header id='header'>
      <div className='container header'>
        <div className='header-right' data-aos="fade-right">
          <h1>
            <span>پیشرو در سطح جهانی</span>
            <span>امنیت در همه پلتفرم ها</span>
            <span>سیستم پیام رسانی</span>
          </h1>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نا مفهوم از صنعت چاپ</p>
          <div className='btn'>
            <a className='btn-dark' href="">بیاین شروع کنبم</a>
            <a className='btn-orang' href="">چطوری کار میکنیم</a>
          </div>
        </div>
        <div className='header-left' data-aos="fade-left">
          <img src={phoneImg} alt="" />
        </div>
      </div>

      <div className='btn-floating'>
        <a href="">
          <BsMouse color='#fff' size={25} />
        </a>
      </div>
    </header>
  )
};

export default Header;
