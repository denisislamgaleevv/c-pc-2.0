import './Header.css'
import React from "react";

export const Header =()=> {
    return (

        <nav class="navbar">
        <div class="container">
          <a class="navbar-brand" href="/">Config-PC</a>
            <div class="navbar-wrap">
              <ul class="navbar-menu">
                <li><a href="/about">О нас</a></li>
                <li><a href="/portfolio">Портфолио</a></li>
                <li><a href="/reviews">Отзывы</a></li>
                <li><a href="/contacts">Контакты</a></li>
              </ul>
              
              <a href="/#mat" class="start-config">Начать</a>
            </div>
        </div>
      </nav>
    )
    }