import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import BasketItem from "./BasketItem";
import { ObjectItem } from "../../models";
import "./basket.scss";
// import { useEffect } from "react";

const Basket = () => {

  const basket: ObjectItem[] = useSelector((state: RootState) => state.basket.basket);
  // const count = useSelector((state: RootState) => state.basket.count);
  console.log(basket);

  return (
    <section className="basket">
      <div className="basket__container">
        {basket.length > 0 ? (
          <ul className="basket__list">
            {basket.map((item: ObjectItem) => {
              return <BasketItem key={item.id} item={item} />;
            })}
          </ul>
        ) : (
          <img
            className="basket__empty"
            src={"images/empty-cart.svg"}
            alt="Empty Cart"
          />
        )}
      </div>
    </section>
  );
};

export default Basket;
