import { useState } from "react";
import { ObjectItem } from "../../models";
import "./card.scss";
import { useSelector, useDispatch } from "react-redux";
import { addToBasket } from "../../redux/slices/basketClise";

type CatalogProps = {
  item: ObjectItem;
};

const CatalogItem: React.FC<CatalogProps> = ({ item }) => {
  const[open, setOpen] = useState(false);
  const dispatch = useDispatch();


  const addBasket = (obj: ObjectItem) => {
    // console.log(obj);
    dispatch(addToBasket(obj))
  }



  return (
    <li className="card">
      <article className="card__article">
        <div className="card__photo">
          <img src={item.image} alt={item.title} className="card__image" />
          <button onClick={() => setOpen(true)} className="btn-reset card__descr" type="button">
            Description
          </button>
          <div className={`card__text ${open ? 'card__text--active' : ''}`}>
            {item.description}
          <div className="card__close" onClick={() => setOpen(false)}>&#x2715;</div>  
          </div>
        </div>
        <span className="card__title">{item.title}</span>
        <span className="card__price">{item.price} $</span>
        <button className="btn-reset card__btn" type="button" onClick={() => addBasket(item)}>
          Add to Card
        </button>
      </article>
    </li>
  );
};

export default CatalogItem;
