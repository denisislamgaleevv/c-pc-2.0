import './Contacts.css'
import {React, useState}  from "react";

export const Contacts =()=> {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [number, setNumber] = useState('')
    const onNameChange = (e)=>{ 
      setName(e.target.value)
    }
    const onSurnameChange = (e)=>{ 
      setSurname(e.target.value)
    }
    const onNumberChange = (e)=>{ 
      setNumber(e.target.value)
    }
    const SendInfo = ()=>{
      let str = "Мы свяжемся с Вами, "+name +' '+surname
      alert(str)
    }
    return (
         
        <div className="container">
              <div className="contacts"> 
            <h2>Связаться с нами</h2>
            <div className="inputs"> 
           <input 
           className='inputContacts'
           type = "text" 
           placeholder='Имя'
           value = {name} 
           onChange={onNameChange}
           required
           />

           
            <input 
              className='inputContacts'
           type = "text" 
           placeholder='Фамилия'
           value = {surname} 
           onChange={onSurnameChange}
           required
           />
             <input 
               className='inputContacts'
           type = "text" 
           placeholder='Номер телефона'
           value = {number} 
           onChange={onNumberChange}
           required
           />
            </div>
           <div class="choosing-div"  onClick = {SendInfo}   ><a   class="choosing" >Отправить данные</a></div>
         
            </div>
        </div>
       
    )
    }