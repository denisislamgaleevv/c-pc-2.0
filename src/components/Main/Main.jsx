import './Main.css'
import React from "react";
 
export const Main =()=> {
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
          <div class="card" >
            <div class="name">ASUS PRIME Z690-A</div>
            <div class="img"><img src="https://c.dns-shop.ru/thumb/st4/fit/300/300/a80fe5c43cf8e5b5fc3c753272adf67e/476da9d3a6022330530cb41436c5cc0df75ce5fae5f36596a6bc8cfe01a0aaeb.jpg" alt="ASUS PRIME Z690-A"/></div>
            <div class="price">25 180 руб</div>
            <div class="specifications">
              <div class="socket">Сокет: LGA 1700</div>
              <div class="form-factor">Форм-фактор: ATX</div>
              <div class="memory-slots">Кол-во слотов памяти: 4</div>
              <div class="M2-connectors">Кол-во разъемов M.2: 3</div>
            </div>
            <div class="description">Материнская плата с поддержкой последних технологий и высокой производительностью</div>
            <div class="choosing-div"><a href="#proc" class="choosing">Выбрать</a></div>
          </div>
          <div class="card" >
            <div class="name">GIGABYTE X570 AORUS PRO</div>
            <div class="img"><img src="https://www.manualspdf.ru/thumbs/products/l/1129147-gigabyte-x570-aorus-pro.jpg" alt="GIGABYTE X570 AORUS PRO WIFI"/></div>
            <div class="price">14 600 руб</div>
            <div class="specifications">
              <div class="socket">Сокет: AM4</div>
              <div class="form-factor">Форм-фактор: ATX</div>
              <div class="memory-slots">Кол-во слотов памяти: 4</div>
              <div class="M2-connectors">Кол-во разъемов M.2: 3</div>
            </div>
            <div class="description">Мощная материнская плата с поддержкой Wi-Fi, подходит для геймеров и пользователей, занимающихся тяжелыми задачами</div>
            <div class="choosing-div"><a href="#proc" class="choosing">Выбрать</a></div>
          </div>
          <div class="card" >
            <div class="name">ASUS ROG Maximus XIII Hero</div>
            <div class="img"><img src="https://c.dns-shop.ru/thumb/st4/fit/300/300/045ae2ed0510f8786a82b400fcc84a00/d8cc44e1a50ad24bccb335e6e11df6fd2dafe96dbf2a4c8db28019bf5ec70a33.jpg" alt="ASUS ROG Maximus XIII Hero"/></div>
            <div class="price">42 690 руб</div>
            <div class="specifications">
              <div class="socket">Сокет: LGA1200</div>
              <div class="form-factor">Форм-фактор: ATX</div>
              <div class="memory-slots">Кол-во слотов памяти: 4</div>
              <div class="M2-connectors">Кол-во разъемов M.2: 3</div>
            </div>
            <div class="description">Отличный выбор для геймеров и энтузиастов, обеспечивающий высокую производительность и возможности разгона.</div>
            <div class="choosing-div"><a href="#proc" class="choosing">Выбрать</a></div>
          </div>
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
          <div class="card">
            <div class="name">Intel Core i9-12900K</div>
            <div class="img"><img src="https://avatars.mds.yandex.net/get-mpic/5234495/img_id7540630484379456218.jpeg/orig" alt="Intel Core i9-12900K"/></div>
            <div class="price">54 690 руб.</div>
            <div class="specifications">
              <div class="socket">Сокет: LGA 1700</div>
              <div class="cores">Количество ядер: 16</div>
              <div class="threads">Количество потоков: 24</div>
              <div class="base-clock">Базовая частота: 3.2 ГГц</div>
              <div class="boost-clock">Макс. частота: 5.2 ГГц</div>
              <div class="TDP">TDP: 105 Вт</div>
            </div>
            <div class="description">Мощный процессор для компьютерных систем высокой производительности, подходит для игр, тяжелых задач и работы с мультимедиа.</div>
            <div class="choosing-div"><a href="#" class="choosing">Выбрать</a></div>
          </div>
          <div class="card" >
            <div class="name">AMD Ryzen 9 5950X</div>
            <div class="img"><img src="https://c.dns-shop.ru/thumb/st1/fit/300/300/e1210e65429ffe517e4096118c5151ce/0251c74ddad5057d923c264df1fb4ce718a58433d00c48d3917335572b403389.jpg" alt="AMD Ryzen 9 5950X"/></div>
            <div class="price">58 990 руб</div>
            <div class="specifications">
              <div class="socket">Сокет: AM4</div>
              <div class="number-of-cores">Количество ядер: 16</div>
              <div class="number-of-threads">Количество потоков: 32</div>
              <div class="base-clock-speed">Базовая частота: 3.4 ГГц</div>
              <div class="boost-clock-speed">Макс. частота: 4.9 ГГц</div>
              <div class="TDP">TDP: 105 Вт</div>
            </div>
            <div class="description">Этот процессор AMD Ryzen 9 5950X со 16 ядрами и 32 потоками обеспечивает высокую производительность для обработки данных и игр, что делает его идеальным выбором для геймеров, разработчиков и профессиональных пользователей.</div>
            <div class="choosing-div"><a href="#" class="choosing">Выбрать</a></div>
          </div>
          <div class="card" >
            <div class="name">Intel Core i9-12900K</div>
            <div class="img"><img src="https://avatars.mds.yandex.net/get-mpic/5234495/img_id7540630484379456218.jpeg/orig" alt="AMD Ryzen 9 5950X"/></div>
            <div class="price">57 990 руб</div>
            <div class="specifications">
              <div class="socket">Сокет: LGA1700</div>
              <div class="number-of-cores">Количество ядер: 16</div>
              <div class="number-of-threads">Количество потоков: 32</div>
              <div class="base-clock-speed">Базовая частота: 3.4 ГГц</div>
              <div class="boost-clock-speed">Макс. частота: 4.9 ГГц</div>
              <div class="TDP">TDP: 105 Вт</div>
            </div>
            <div class="description">Этот процессор AMD Ryzen 9 5950X со 16 ядрами и 32 потоками обеспечивает высокую производительность для обработки данных и игр, что делает его идеальным выбором для геймеров, разработчиков и профессиональных пользователей.</div>
            <div class="choosing-div"><a href="#" class="choosing">Выбрать</a></div>
          </div>
        </div>
        </div>
    </div>
       </>
    )
    }