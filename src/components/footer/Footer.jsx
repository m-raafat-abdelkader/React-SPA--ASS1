import React from 'react'
import style from './Footer.module.css'
export default function Footer() {
  return (
    <>
    <section className={`p-5 ${style.details}`}>
       <div className='container p-4'>
      <div className="row gy-5">
        <div className="col-md-4 text-center ">
          <h3 className='text-uppercase text-white '>location</h3>
          <p className='text-white'>2215 John Daniel Drive</p>
          <span className='text-white'>Clark, MO 65243</span>
        </div>
        <div className="col-md-4 text-center ">
          <h3 className='text-uppercase text-white '>Around THE WEB</h3>
          <div className='icons'>
          <i className="fa-brands fa-facebook fs-6 text-white mx-2 border rounded-circle p-2" />
          <i className="fa-brands fa-twitter fs-6 text-white mx-2 border rounded-circle p-2" />
          <i className="fa-brands fa-linkedin-in fs-6 text-white  mx-2  border rounded-circle p-2" />
          <i className="fa-solid fa-globe fs-6 text-white mx-2  border rounded-circle p-2" />
        </div>
          </div>
        <div className="col-md-4 text-center ">
          <h3 className='text-uppercase text-white '>About FREELANCER</h3>
          <p className='text-white'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          <div>
           
</div>

        </div>
        
      </div>
    </div>
    </section>
    <section className={`text-center text-white p-2 pt-4 ${style.copyRight}`}>
    <p>Copyright © Your Website 2021</p>
    </section>
    </>
 
   
  )
}
