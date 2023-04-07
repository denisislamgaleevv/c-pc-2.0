import './Basket.css'
import React from "react";

export const Basket =(cartArr)=> {
    return (
      <div class="Basket">
        <h2>Корзина</h2>
        <table>
          <thead>
            <tr>
              <th>Товар</th>
              <th>Цена</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {
                cartArr.map((elem)=>
                <> 
                <td class="product-name">{elem.name}</td>
                <td>${elem.price}</td>
                <td class="remove-item"><a href="#">Удалить</a></td>
                </>
                )
                
            }
            </tr>
              
          </tbody>
        </table>
        <div class="total">
          <p>Итого:</p>
          <h2>$789.99</h2>
        </div>
        <button class="checkout-button">Оформить заказ</button>
      </div>
    )
    }