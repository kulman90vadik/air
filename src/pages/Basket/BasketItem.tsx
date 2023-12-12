import { ObjectItem } from "../../models";
import { useDispatch } from "react-redux";
import { delCartBasket } from "../../redux/slices/basketClise";
import { btnChange } from "../../redux/slices/catalogClise";
import './basket-card.scss';

type BasketProps = {
  item: ObjectItem;
};


const BasketItem: React.FC<BasketProps> = ({item}) => {
  const dispatch = useDispatch();
  const delCard = (obj: ObjectItem) => {
    dispatch(delCartBasket(obj));
    dispatch(btnChange(obj))
  }

  return (
    <li className="basket-card">
      <article className="basket-card__article">
        <div className="basket-card__photo">
          <img src={item.image} alt={item.title} className="basket-card__image" />
        </div>
        <span className="basket-card__title">{item.title}</span>
        <span className="basket-card__price">{item.price}</span>
        <div className="basket-card__counter"> -  +  </div>
        <button className="basket-card__close btn-reset" type="button" onClick={() => delCard(item)}>&#x2715;</button>
      </article>
    </li>
  );
}
 
export default BasketItem;