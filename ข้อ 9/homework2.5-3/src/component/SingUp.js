import React, { useState } from 'react'

export default function SingUp() {
  let [inputEmail, setInputEmail] = useState('')
  let [inputValue, setInputValue] = useState('')
  let [inputConfirm, setInputConfirm] = useState('')
  let [message, setMessage] = useState('')
  let [messagePassword, setMessagePassword] = useState('')

    let onChangeEmail = (e) =>  {
      let feildValue = e.target.value;
      let trim = feildValue.trim()

      setInputEmail(feildValue)

      if(trim.length === 0 ){
        setMessage('คุณต้องกรอกช่องนี้')
      }else {
        setMessage('')
      }
    }

    let onChangePasswrod = (e) =>  {
      let feildValue = e.target.value;
      
      setInputValue(feildValue)

      if(feildValue.length < 8 ){
        setMessagePassword('คุณต้องกรอกอย่างน้อย 8 ตัวอักษร') 
      }else {
        setMessagePassword('') 
      }
    }

    let onChangeConfrim = (e) =>  {
      let feildValue = e.target.value;

      setInputConfirm(feildValue)

      if(inputConfirm != inputValue){
        setMessagePassword('คุณกรอกรหัสไม่ตรงกัน') 
      }else if(inputConfirm === inputValue && inputConfirm.length === inputValue.length ) {
        setMessagePassword('') 
      }
    }

  return (
    <div>
        <input onChange={onChangeEmail} name="email" placeholder="อีเมล์" value={inputEmail}/>
        <p>{message}</p>
        <input onChange={onChangePasswrod} name="password" type="" value={inputValue} placeholder="รหัสผ่าน"/>
        <p>{messagePassword}</p>
        <input onChange={onChangeConfrim} name="confirmPassword" type="" value={inputConfirm} placeholder="ยืนยันรหัสผ่าน"/>
        <p>{messagePassword}</p>
        <button> Sign Up </button>
    </div>
  )
}
