import React from 'react'
import style from './Contact.module.css'
export default function Contact() {
  return (
    <section className='p-4'>
      <div className="container">
      <h1 className={`${style.textColor} text-uppercase fw-bold text-center`}>contact section</h1>
      <div className='d-flex justify-content-center align-items-center mb-5'>
        <div className={`${style.line}`}></div>
        <i className="fa-solid fa-star  mx-3" />
        <div className={`${style.line}`}></div>
      </div>
      <input type="text" placeholder='userName' className='form-control mb-3' />
      <input type="number" placeholder='userAge' className='form-control mb-3' />
      <input type="email" placeholder='userEmail' className='form-control mb-3' />
      <input type="password" placeholder='userPassword' className='form-control mb-3' />
      <button className='btn btn-success'>Send Message</button>
      </div>
    </section>
  )
}
