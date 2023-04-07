import './Reviews.css'
import {React, useEffect, useState} from "react";
import axios from 'axios'; 
import moment from 'moment';
//https://634969360b382d796c85cba6.mockapi.io/posts
export const Reviews =()=> {
    const [reviewsArr, setReviewsArr] = useState([])
    useEffect(()=>{
      axios.get("https://634969360b382d796c85cba6.mockapi.io/posts")
      .then((responce)=>{
        setReviewsArr(responce.data)
        
      })
      .catch((err)=>{
        console.log(err)
      })
    }, [])
    const addNewReview = () =>{
      const treview = {
        name: '', 
        email:'', 
        rating:0,
        message:'', 
        id: reviewsArr.length+1, 
        time:      String(moment().format('MMMM Do YYYY'))
      }

    }
    
    return (
         
        <div class="container">
     
          <form>
            <div>
              <label for="name">Имя:</label>
              <input type="text" id="name" name="name" required/>
            </div>
            <div>
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required/>
            </div>
            <div>
              <label for="rating">Оценка:</label>
              <select id="rating" name="rating" required>
                <option value="">Выберите оценку</option>
                <option value="5">5 звезд</option>
                <option value="4">4 звезды</option>
                <option value="3">3 звезды</option>
                <option value="2">2 звезды</option>
                <option value="1">1 звезда</option>
              </select>
            </div>
            <div>
              <label for="message">Отзыв:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <div>
              <button type="submit" onClick={addNewReview }>Отправить</button>
            </div>
          </form>
          {reviewsArr.length ==0 ?   <div class="reviews"><h2>Загрузка отзывов...</h2>  </div>: 
          <div class="reviews">
           
            {reviewsArr.map((elem) =>
                <div class="review">
                <h2>{elem.name}</h2>
                <p class="rating">Оценка: {elem.rating} звезд</p>
                <p class="message">{elem.message}</p>
              </div>
            )} 
          
         
        </div>}

        </div>
       
    )
    }