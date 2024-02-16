import React, { useState } from 'react'
import style from './Contact.module.css'
export default function Contact() {
  const [userName,setName] = useState('')
  const [userAge,setAge] = useState('')
  const [userMail,setMail] = useState('')
  const [userPass,setPass] = useState('')
  let setNameLabel = (e)=>{
    if(e.target.value.length > 0){
      setName('userName:')
    }
    else{
      setName('')
    }
  }
  let setAgeLabel = (e)=>{
    if(e.target.value.length > 0){
      setAge('userAge:')
    }
    else{
      setAge('')
    }
  }
  let setPassLabel = (e)=>{
    if(e.target.value.length > 0){
      setPass('userPassword:')
    }
    else{
      setPass('')
    }
  }
  let setMailLabel = (e)=>{
    if(e.target.value.length > 0){
      setMail('userEmail:')
    }
    else{
      setMail('')
    }
  }
  return (
    <section className='p-4'>
      <div className="container">
      <h1 className={`${style.textColor} text-uppercase fw-bold text-center`}>contact section</h1>
      <div className='d-flex justify-content-center align-items-center mb-5'>
        <div className={`${style.line}`}></div>
        <i className="fa-solid fa-star  mx-3" />
        <div className={`${style.line}`}></div>
      </div>
      <label htmlFor="userName" className={`${style.labelColor} mb-3`}>{userName}</label>
      <input onInput={setNameLabel} id='userName' type="text" placeholder='userName' className='form-control mb-3' />

      <label htmlFor="userAge" className={`${style.labelColor} mb-3`}>{userAge}</label>
      <input onInput={setAgeLabel} id='userAge' type="number" placeholder='userAge' className='form-control mb-3' />

      <label htmlFor="userMail"className={`${style.labelColor} mb-3`}>{userMail}</label>
      <input onInput={setMailLabel} id='userMail' type="email" placeholder='userEmail' className='form-control mb-3' />

      <label htmlFor="userPass" className={`${style.labelColor} mb-3`}>{userPass}</label>
      <input onInput={setPassLabel} id='userPass' type="password" placeholder='userPassword' className='form-control mb-3' />
      <button className='btn btn-success'>Send Message</button>
      </div>
    </section>
  )
}
