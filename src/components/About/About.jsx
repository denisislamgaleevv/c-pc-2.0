import './About.css'
import React from "react";
import  tim from  './images/tim.jpg' 
import den from './images/den.jpg'
export const About =()=> {
    return (
         
        <div class="container_1">
          <div class="contacts_1">
            <div class="all-item_1">

              
              <div class="item_1">
                <div class="photo_1">
                  <img src={den} alt="tim"/>
                </div>
                <div class="title_1">
                  Денис
                </div>
                <div class="sub-title_1">
                  Фронтенд-разработчик
                </div>
              </div>
              <div class="item_1">
                <div class="photo_1">
                  <img src={tim} alt="tim"/>
                </div>
                <div class="title_1">
                  Тимофей
                </div>
                <div class="sub-title_1">
                  Дизайнер
                </div>
              </div>

              
            </div>
          </div>
        </div>
       
    )
    }