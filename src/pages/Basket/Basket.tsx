import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";


const Basket = () => {

  const basket = useSelector((state: RootState) => state.basket.basket);
  console.log(basket);


  return (
    <section className="basket">
      <div className="basket__container">

      </div>
    </section>
  );
}
 
export default Basket;