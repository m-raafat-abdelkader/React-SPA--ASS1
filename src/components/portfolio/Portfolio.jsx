import React, { useState } from 'react'
import style from './Portfolio.module.css'
import imgSrc1 from '../../assets/images/poert1.png'
import imgSrc2 from '../../assets/images/port2.png'
import imgSrc3 from '../../assets/images/port3.png'
import ImageBox from '../imgBox/ImageBox'
import Card from '../card/Card'
export default function Portfolio() {
 let onCardClick = (src)=>{
  setImgSource(src)
 }
 const [imgSrc, setImgSource] = useState('')  
 const imgArray = [imgSrc1, imgSrc2, imgSrc3,imgSrc1, imgSrc2, imgSrc3]
  return (
    <>
    <section className='p-5'>
      <div className="container">
        <h1 className={`${style.textColor} text-uppercase fw-bold text-center`}>portfolio component</h1>
        <div className='d-flex justify-content-center align-items-center mb-4'>
        <div className={`${style.line}`}></div>
        <i className="fa-solid fa-star  mx-3" />
        <div className={`${style.line}`}></div>
      </div>
        <div className="row gy-5">
          {
            imgArray.map((img)=>{return <Card imgSrc={img} onCardClick={onCardClick}/>})
          }
         
        </div>
      </div>
    </section>  
    {imgSrc && <ImageBox imgSrc = {imgSrc}/>}

   
    </>
    

  )
  
  
  
}
