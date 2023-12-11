import { ObjectItem } from "../../models";
import './basket-card.scss';

type BasketProps = {
  item: ObjectItem;
};


const BasketItem: React.FC<BasketProps> = ({item}) => {
  return (
    <li className="basket-card">
      <article className="basket-card__article">
        <div className="basket-card__photo">
          <img src={item.image} alt={item.title} className="basket-card__image" />
        </div>

      </article>
    </li>
  );
}
 
export default BasketItem;