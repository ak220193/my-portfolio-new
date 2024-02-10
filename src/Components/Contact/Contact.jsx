import React from 'react'
import "./Contact.css"
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";


const Contact = () => {
  return (
   <section id='Contact'>  
   
   <h5> Get in Touch </h5>
   <h2> Contact Me </h2>


   <div className="container contact__container">
   <div className="contact__options">

 <article className="contact__option">
 <MdOutlineMarkEmailUnread className='contact__option-icon'/>
 <h4> Email  </h4> 
 <h5> akashvicky2012@gmail.com</h5>
 <a href="https://gmail.com" target='blank'> Send a  Mail</a>
 
 </article>
 <article className="contact__option">
 <ImWhatsapp className='contact__option-icon'/>
 <h4> Whatsapp  </h4> 
 <h5> +91 9150253488 </h5>
 <a href="https://wa.me/+919150253488" target='blank'>  Whatsapp Me </a>
 
 </article>
 <article className="contact__option">
 <FaLinkedin className='contact__option-icon'/>
 <h4> Linkedin  </h4> 
 <h5> Akash S M </h5>
 <a href="https://www.linkedin.com/in/akash-s-m/" target='blank'> Connect With Linkedin</a>
 </article>
   
   </div>

   <form action="">
   
    <input type='text' name='name' placeholder='Your Full Name' required />
    <input type='email' name='email' placeholder='Your E-mail Address'  required/>
    <textarea name="message"  rows="7" placeholder='your Message' />
    <button type='submit'  className='btn btn-primary'> Send a Message </button>
   </form>
   
   </div>
   </section>
  )
}

export default Contact