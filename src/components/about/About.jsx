import React from 'react'
import style from './About.module.css'
export default function About() {
  return (
    <section className={`${style.about} p-5`}>
      <div className='.container p-3 my-5'>
      <h2 className=' fs-1 fw-bold text-white  text-center text-uppercase'>about component</h2>
      <div className='d-flex justify-content-center align-items-center'>
        <div className={`${style.line} bg-white`}></div>
        <i className="fa-solid fa-star text-white mx-3" />
        <div className={`${style.line} bg-white`}></div>
      </div>
      <div className="row">
        <div className="col-md-6 ">
          <div className='ps-5 pt-3'>
          <p className='text-white '>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          
        </div>
        <div className="col-md-6">
         <div className='ps-5 pt-3'>
         <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
         </div>
        </div>
      </div>
    </div>
    
    </section>
    
  )
}
