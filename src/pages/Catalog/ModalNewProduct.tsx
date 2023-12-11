import "./form-product.scss";
import { useState } from "react";
import axios from 'axios';
import {ObjectItem} from '../../models';
import { useSelector, useDispatch } from "react-redux";
import { addNewProduct } from "../../redux/slices/catalogClise";

const ModalNewProduct = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [error, setError] = useState<string>('');

  const addToProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if(title.trim().length === 0) {
      setError('Please enter valid title');
      return
    }

    const product: ObjectItem = {
      // id: 3,
      price: Number(price),
      title: title,
      category: 'string',
      description: 'string',
      // image: 'string',
      // btn: false
    }


    const respons = await axios.post<ObjectItem>('https://fakestoreapi.com/products', product);
    dispatch(addNewProduct(respons.data));
    setOpen((prev) => !prev);
    setTitle('');
    setPrice('');
  }




  return (
    <>
      <div className="form-product" onClick={() => setOpen((prev) => !prev)}>
        <span className="form-product__title">Added new Product</span>
      </div>

      <div className={`form-product__modal ${open ? "form-product__modal--active" : ""}`}>
        <div className="form-product__info">
          <button
            className="form-product__close btn-reset"
            onClick={() => setOpen(false)}
          >
            &#x2715;
          </button>

          <form className="form-product__form" onSubmit={addToProduct}>
            <label htmlFor="title" className="form-product__label">Name Product</label>
            <input id="title" name="title" className="form-product__input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label htmlFor="price" className="form-product__label">Price</label>
            <input id="price" name="price" className="form-product__input" type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            <div className="error">{error}</div>
            <button className="form-product__btn btn-reset" type="submit">
              Add to Product
            </button>
          </form>


        </div>
      </div>
    </>
  );
};

export default ModalNewProduct;
