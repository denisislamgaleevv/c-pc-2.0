import './Header.css'
import React from "react";

export const Header =()=> {
    return (

        <nav class="navbar">
        <div class="container">
          <a class="navbar-brand" href="#">Config-PC</a>
            <div class="navbar-wrap">
              <ul class="navbar-menu">
                <li><a href="https://vk.com/audios470917401?q=%D1%81%D0%B0%D0%BF%D0%BE%D0%B3%D0%B8%20%D0%BC%D0%B5%D1%80%D1%82%D0%B2%D0%B5%D1%86%D0%B0">О нас</a></li>
                <li><a href="#">Портфолио</a></li>
                <li><a href="#">Отзывы</a></li>
                <li><a href="#">Контакты</a></li>
              </ul>
              
              <a href="#mat" class="start-config">Начать</a>
            </div>
        </div>
      </nav>
    )
    }