import './Reviews.css'
import {React, useEffect, useState} from "react";
import axios from 'axios'; 
import moment from 'moment';
//https://634969360b382d796c85cba6.mockapi.io/posts
export const Reviews =()=> {
    const [reviewsArr, setReviewsArr] = useState([])
    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [rating, setRating]= useState(0)
    const [message, setMessage]= useState('')
    const handleNameChange=(e)=>{
      setName(e.target.value)
     }
    const handleEmailChange=(e)=>{
      setEmail(e.target.value)
     }
    const handleRatingChange=(e)=>{
      setRating(e.target.value)
     }
    const handleMessageChange=(e)=>{
      setMessage(e.target.value)
     }
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
        name: name, 
        email: email, 
        rating: rating,
        message: message, 
        id: reviewsArr.length+1, 
        data: String(moment().format('MMMM Do YYYY'))
      }
      
      axios.post("https://634969360b382d796c85cba6.mockapi.io/posts", treview)
      .then((responce)=>{
        alert('Отзыв создан', responce.data)
      })
      .catch((err) =>{
        console.log(err)
      })
    }
    
    return (
         
        <div class="container">
     
          <form>
            <div>
              <label for="name">Имя:</label>
              <input type="text" value={name} onChange={handleNameChange} id="name" name="name" required/>
            </div>
            <div>
              <label for="email">Email:</label>
              <input type="email" value={email} onChange={handleEmailChange} id="email" name="email" required/>
            </div>
            <div>
              <label for="rating">Оценка:</label>
              <select id="rating"  value={rating} onChange={handleRatingChange} name="rating" required>
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
              <textarea id="message"  value={message} onChange={handleMessageChange} name="message" rows="4" required></textarea>
            </div>
            <div>
              <button type="submit" onClick={()=>addNewReview }>Отправить</button>
            </div>
          </form>
          {reviewsArr.length ==0 ?   <div class="reviews"><h2>Загрузка отзывов...</h2>  </div>: 
          <div class="reviews">
           
            {reviewsArr.map((elem) =>
                <div class="review">
                <h2>{elem.name}</h2>
                <p class="message">{elem.data}</p>
                <p class="rating">Оценка: {elem.rating} звезд</p>
                <p class="message">{elem.message}</p>
              </div>
            )} 
          
         
        </div>}

        </div>
       
    )
    }