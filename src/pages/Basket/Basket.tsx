import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import BasketItem from "./BasketItem";
import { ObjectItem } from "../../models";
import "./basket.scss";

const Basket = () => {

  const basket: ObjectItem[] = useSelector((state: RootState) => state.basket.basket);
  const totalPrice: number = useSelector((state: RootState) => state.basket.totalPrice);

  

  console.log('render basket');

  return (
    <section className="basket">
      <div className="basket__container">
        {basket.length > 0 ? (
          <div className="basket__inner">
            <ul className="basket__list">
              {basket.map((item: ObjectItem) => {
                return <BasketItem key={item.id} item={item} />;
              })}
            </ul>
            <div className="basket__total">
              <div className="basket__subtotal">
                Subtotal: {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(totalPrice)}
              </div>  
              <div className="basket__shiping">
                Shiping: 15 €
              </div>  
              <div className="basket__summa">
                Total: {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(totalPrice + 15)} 
              </div>  
            </div>
          </div>
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


