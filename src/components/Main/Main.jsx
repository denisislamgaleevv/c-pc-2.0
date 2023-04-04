import './Main.css'
import {React, useState} from "react";
import { processors } from './computer_modules/processors';
import {motherboards} from './computer_modules/motherboards';
export const Main =()=> {
    const [cartArr, setCartArr] = useState([])
    const addToCart = (elem) =>{
     
      let copy = Object.assign([], cartArr);
      copy.push(elem);
      
      setCartArr(copy);
      console.log(cartArr)
      
    }
    const getSocket = () =>{
      if (cartArr[0] != undefined)
        return cartArr[0].socket
    }
    return (
    
       <>
        
         
        <section class="welcome">
      <div class="container">
        <h1>Добро пожаловать на наш сайт</h1>
        <p>Мы предлагаем широкий выбор комплектующих для сборки вашего компьютера. Наша команда экспертов всегда готова помочь вам с выбором и ответить на все ваши вопросы. Начните свою сборку уже сегодня!</p>
        <a href="#mat" class="start-config">Начать сборку</a>
      </div>
    </section>
    
    <div class="choosing-pc" id="mat">
      
      <div class="container">
        <div class="title">
          <h1>Вебирите материнскую плату</h1>
        </div>
        <div class="subtitle">
          <p>Вам предоставленные 6 видов материнских плат, выберите ту которая больше всего вам подходит</p>
        </div>
        <div class="all-cards" >
          
         { motherboards.map((elem) =>
            <div class="card" >
            <div class="name">{elem.name}</div>
            <div class="img"><img src={elem.photo}/></div>
            <div class="price">{elem.price} руб</div>
            <div class="specifications">
              <div class="socket">Сокет: {elem.socket}</div>
              <div class="form-factor">Форм-фактор:  {elem['form-factor']}</div>
              <div class="memory-slots">Кол-во слотов памяти: {elem['memory-slots']}</div>
              <div class="M2-connectors">Кол-во разъемов M.2: {elem['M2-connectors']}</div>
            </div>
            <div class="description">{elem.description}</div>
            <div class="choosing-div"  ><a href="#proc" class="choosing" onClick={()=>addToCart(elem)} >Выбрать</a></div>
         
          </div>
          ) 
         } 
        </div>
      </div>
    </div>

    <div class="choosing-pc" id="proc" data-slider="itc-slider">
      <div class="container">
        <div class="title">
          <h1>Выберите процессор</h1>
        </div>
        <div class="subtitle">
          <p>Вам предоставлено 6 видов процессоров, выберите тот, который больше всего вам подходит</p>
        </div>
        <div class="all-cards">
         
        {processors.map((elem) =>
        
         { if (getSocket() == elem.socket) {
          return( 
          <div class="card">
            <div class="name">{elem.name}</div>
            <div class="img"><img src={elem.photo}/></div>
            <div class="price">{elem.price} руб.</div>
            <div class="specifications">
              <div class="socket">Сокет: {elem.socket}</div>
              <div class="cores">Количество ядер: {elem.cores}</div>
              <div class="threads">Количество потоков: {elem.threads}</div>
              <div class="base-clock">Базовая частота: {elem['boost-clock']} ГГц</div>
              <div class="boost-clock">Макс. частота: {elem['boost-clock']} ГГц</div>
              <div class="TDP">TDP: {elem.tdp} Вт</div>
            </div>
            <div class="description">{elem.description}</div>
            <div class="choosing-div"><a href="#" class="choosing" onClick={()=>addToCart(elem)} >Выбрать</a></div>
          </div>)
         }  
         }
         )} 
        </div>
       
        </div>
      
        </div>
        { cartArr.map((elem) =>

          <h3> {elem.name} </h3> 
        )}

       </>
    )
    }