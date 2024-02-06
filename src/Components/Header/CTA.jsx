import React from 'react'
import CV from "../../Assets/Resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
    <a href={CV}  download className='btn'> Download CV</a>
    <a href="#Contact" className='btn btn-primary'> Let's Connect </a>
    </div>
  )
}

export default CTA