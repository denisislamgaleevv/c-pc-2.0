import './Footer.css'
import React from "react";

export const Footer =()=> {
    return (
        <footer>
        <div class="container">
          <div class="info">
            <div class="info-team">
              <h3>О нас</h3>
              <p>Текст о нашей компании и ее деятельности.</p>
            </div>
            <div class="info-contacts">
              <h3>Контакты</h3>
              <ul>
                <li>Адрес: ул. Примерная, д. 123</li>
                <li>Телефон: +7 (123) 456-78-90</li>
                <li>Email: example@mail.com</li>
              </ul>
            </div>
            <div class="info-social">
              <h3>Социальные сети</h3>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
    }