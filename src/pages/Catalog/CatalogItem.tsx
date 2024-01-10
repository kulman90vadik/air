import { useState } from "react";
import { ObjectItem } from "../../models";
import "./card.scss";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/slices/basketClise";
import { btnChange } from "../../redux/slices/catalogClise";
import { Link } from "react-router-dom";

type CatalogProps = {
  item: ObjectItem;
};

const CatalogItem: React.FC<CatalogProps> = ({ item }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const addBasket = (obj: ObjectItem) => {
    dispatch(addToBasket(obj));
    dispatch(btnChange(obj));
  };


  return (
    <li className="card">
      <article className="card__article">
        <Link className="card__link" to={`/item/${item.id}`}>
          <div className="card__photo">
            <img src={item.image} alt={item.title} className="card__image" />
          </div>
        </Link>
        <span className="card__title">{item.title}</span>
        <span className="card__price">{item.price} $</span>
        <button
          onClick={() => setOpen(true)}
          className="btn-reset card__descr"
          type="button"
        >
          Description
        </button>
        <button
          className={`btn-reset card__btn ${
            item.btn ? "card__btn--active" : ""
          }`}
          type="button"
          onClick={() => addBasket(item)}
        >
          Add to Card
        </button>
        <div className={`card__text ${open ? "card__text--active" : ""}`}>
          {item.description}
          <div className="card__close" onClick={() => setOpen(false)}>
            &#x2715;
          </div>
        </div>
      </article>
    </li>
  );
};

export default CatalogItem;
