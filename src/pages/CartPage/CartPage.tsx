import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ObjectItem } from "../../models";
import "./card-page.scss";

const CartItem = () => {
  const [cardItem, setCardItem] = useState<ObjectItem>();
  const [loading, setLoading] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(id)
  // console.log(`https://fakestoreapi.com/products/${id}`)
  const fetchCart = useCallback(async () => {
    setLoading("loading");
    try {
      const { data } = await axios<ObjectItem>(
        "https://fakestoreapi.com/products/" + id
      );
      setCardItem(data);
      setLoading("play");
    } catch (error) {
      // alert("Error");
      setLoading("error");
      // navigate('/')
    }
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  return (
    <section className="card-page">
      { loading === "loading" ? (
        <p className="loading">Loading...</p>
        
      ) : cardItem ? (

        <div className="card-page__container">
          <article className="card-page__article">
            <div className="card-page__photo">
              <img
                className="card-page__image"
                src={cardItem.image}
                alt={cardItem.title}
              />
            </div>
            <div className="card-page__info">
              <span className="card-page__title">{cardItem.title}</span>
              <span className="card-page__price">{cardItem.price}$</span>
            </div>
          </article>
        </div>
      ) : (
        <p className="loading">Try later .🤔</p>
      )}
    </section>
  );
};

export default CartItem;
