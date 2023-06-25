import React, { useState,useEffect } from 'react';
import {MdOutlineLibraryBooks} from "react-icons/md"

import {questions} from "./data"
import "./Faq.css"
import Questions from './Questions';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Faq() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);
 
   return(
    <section id='faq'>
    <div className='container faq'data-aos="fade-up">
        <div className="faq-title">
          <MdOutlineLibraryBooks color='orangered' size={30}/>
          <h2>سوالات متداول</h2>
          <p>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
          ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
          </p>
        </div>
        <div className='questions'>
          {
            questions.map((item) =>
            <Questions
            key={item.id}
            title={item.title}
            answer={item.answer}
            />

            )
          }
        </div>
    </div>
   </section>
   )
}


export default Faq;