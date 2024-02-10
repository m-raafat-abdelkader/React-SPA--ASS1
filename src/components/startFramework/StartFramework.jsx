import React from 'react'
import style from './StartFramework.module.css'
import imgSrc from '../../assets/images/avataaars.svg'
export default function StartFramework() {
  return (
   <section className={`${style.bgColor} p-1`}>
     <div className='text-center container'>
      <div>
        <img src={imgSrc} alt="avatar" className={`${style.imgWidth} pb-5 pt-5`} />
        <h2 className='text-white fs-1 fw-bolder'>START FRAMEWORK</h2>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <div className={`${style.line} bg-white`} />
        <i className="fa-solid fa-star text-white mx-3" />
        <div className={`${style.line} bg-white`} />
      </div>
      <p className='fs-6 text-white pt-3'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
   </section>
  )
}
