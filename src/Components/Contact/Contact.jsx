import React from 'react'
import "./Contact.css"
import { MdOutlineMarkEmailUnread } from "react-icons/md";


const Contact = () => {
  return (
   <section id='Contact'>  
   
   <h5> Get in Touch </h5>
   <h2> Contact Me </h2>


   <div className="container contact__container">
   <div className="contact__options">

 <article className="contact__options">
 <MdOutlineMarkEmailUnread/>
 <h4> Email  </h4> 
 <h5> akashvicky2012@gmail.com</h5>
 <a href="mailto: akashvicky2012@gmail.com"> Send a  Mail</a>
 
 </article>
 <article className="contact__options">
 <MdOutlineMarkEmailUnread/>
 <h4> Whatsapp  </h4> 
 <h5> +91 9150253488 </h5>
 <a href="https://api.whatsapp.com/send?phone=+919150253488">  Whatsapp Me </a>
 
 </article>
 <article className="contact__options">
 <MdOutlineMarkEmailUnread/>
 <h4> Email  </h4> 
 <h5> akashvicky2012@gmail.com</h5>
 <a href="mailto: akashvicky2012@gmail.com"> Send a  Mail</a>
 
 </article>
   
   
   </div>

   <form action=''> </form>
   
   </div>
   </section>
  )
}

export default Contact