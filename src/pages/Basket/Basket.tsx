import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import BasketItem from "./BasketItem";
import { ObjectItem } from "../../models";
import './basket.scss';

const Basket = () => {

  const basket = useSelector((state: RootState) => state.basket.basket);
  console.log(basket);


  return (
    <section className="basket">
      <div className="basket__container">
        <ul className="basket__list">
          {basket.map((item: ObjectItem) => {
            return (
              <BasketItem key={item.id} item={item} />
            )
          })}
        </ul>
      </div>
    </section>
  );
}
 
export default Basket;