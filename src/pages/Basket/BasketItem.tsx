import { ObjectItem } from "../../models";
import { useDispatch } from "react-redux";
import { delCartBasket, plusTotalPrice, minusTotalPrice, delPrice } from "../../redux/slices/basketClise";
import { btnChange } from "../../redux/slices/catalogClise";
import './basket-card.scss';
import Counter from "./Counter/Counter";
import { useState } from "react";
import React from "react";

type BasketProps = {
  item: ObjectItem;
};


const BasketItem: React.FC<BasketProps> = ({item}) => {
  const[count, setCount] = useState(1);
  const dispatch = useDispatch();
  
  const delCard = (obj: ObjectItem, priceItem: number) => {
    dispatch(delCartBasket(obj));
    dispatch(btnChange(obj));
    dispatch(delPrice(priceItem));
  }

  let limit = 1;
  const decrement = () => {
    if(count > limit) {
        setCount(prev => prev - 1);
        dispatch(minusTotalPrice(item))
      } 
  }
  const increment = (item: ObjectItem) => {
      setCount(prev => prev + 1);
      dispatch(plusTotalPrice(item))
  }

  let priceItem = Number((item.price * count).toFixed(1));

  return (
    <li className="basket-card">
      <article className="basket-card__article">
        <div className="basket-card__photo">
          <img src={item.image} alt={item.title} className="basket-card__image" />
        </div>
        <span className="basket-card__title">{item.title}</span>
        <span className="basket-card__price">{priceItem} $</span>

        <Counter decrement={decrement} increment={() => increment(item)} count={count}/>

        <button className="basket-card__close btn-reset" type="button" onClick={() => delCard(item, priceItem)}>&#x2715;</button>
      </article>
    </li>
  );
}
    
export default BasketItem;