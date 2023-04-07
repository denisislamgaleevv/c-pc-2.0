import './Main.css'
import {React, useState} from "react";
import { processors } from './computer_modules/processors';
import {motherboards} from './computer_modules/motherboards';
 
//import {Basket} from './Basket/Basket';
export const Main =()=> {
    const [cartArr, setCartArr] = useState([])
    const [stage, setStage] = useState(1) //стадии выбора 
    const addToCart = (elem) =>{
     
      let copy = Object.assign([], cartArr);
      copy.push(elem);
      
      setCartArr(copy);
      setStage(stage+1)

      
    }
    const getSocket = () =>{
      if (cartArr[0] != undefined)
        return cartArr[0].socket
    }
    function getSum() {
      let sum = 0;
      cartArr.forEach(function(item){
          sum += item.price
      })
      return sum;
    }
    const cleanBasket = ()=>{
      
      setCartArr([]);
      setStage(1)

    }
    const startAssembly = ()=>{
      setCartArr([]);
      setStage(1)

    }
    return (
    
       <>
        
         
        <section class="welcome">
      <div class="container">
        <h1>Добро пожаловать на наш сайт</h1>
        <p>Мы предлагаем широкий выбор комплектующих для сборки вашего компьютера. Наша команда экспертов всегда готова помочь вам с выбором и ответить на все ваши вопросы. Начните свою сборку уже сегодня!</p>
        <a href="#mat" class="start-config" onClick = {startAssembly}>Начать сборку</a>
      </div>
    </section>
     {stage === 1? 
    <div class="choosing-pc" id="mat">
      
      <div class="container">
        <div class="title">
          <h1>Вебирите материнскую плату</h1>
        </div>
        <div class="subtitle">
          <p>Вам предоставлены {motherboards.length} видов материнских плат, выберите ту которая больше всего вам подходит</p>
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
            <div class="choosing-div"  ><a href="/#proc" class="choosing" onClick={()=>addToCart(elem)} >Выбрать</a></div>
         
          </div>
          ) 
         } 
        </div>
      </div>
    </div>  
    : <></> }
    {stage === 2?
    <div class="choosing-pc" id="proc" data-slider="itc-slider">
      <div class="container">
        <div class="title">
          <h1>Выберите процессор</h1>
        </div>
        <div class="subtitle">
          <p>Вам предоставлены {processors.length} видов процессоров, выберите тот, который больше всего вам подходит (показаны совместимые)  </p>
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
            <div class="choosing-div"><a href="/#proc" class="choosing" onClick={()=>addToCart(elem)} >Выбрать</a></div>
          </div>)
         }  
         }
         )} 
        </div>
       
        </div>
      
        </div>    
          : <></> }
       <div class="Basket">
        <h2>Корзина</h2>
        <table>
          <thead>
            <tr>
              <th>Товар</th>
              <th>Цена</th>
              <th class="remove-item"><a onClick={cleanBasket}href="/#proc">Очистить корзину</a></th>
              <th></th>
            </tr>
          </thead>
       
          <tbody>
          
              {
                cartArr.map((elem)=>
                <tr>
                <td class="product-name">{elem.name}</td>
                <td>${elem.price}</td>
               
                </tr>
                )
                
            }
             
              
          </tbody>
        </table>
        <div class="total">
          <p>Итого:</p>
          <h2>${ getSum()}</h2>
        </div>
        <button class="checkout-button">Оформить заказ</button>
      </div>

       </>
    )
    }