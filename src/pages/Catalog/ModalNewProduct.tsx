import "./form-product.scss";
import { useState } from "react";
import axios from 'axios';
import {ObjectItem} from '../../models';
import { useDispatch } from "react-redux";
import { addNewProduct } from "../../redux/slices/catalogClise";

type Props = {
  open: boolean;
  setOpen: (i: boolean) => void;
}

const ModalNewProduct: React.FC<Props> = ({open, setOpen}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [errorTitle, setErrorTitle] = useState<string>('');
  const [errorText, setErrorText] = useState<string>('');
  const [errorPrice, setErrorPrice] = useState<string>('');


  const addToProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorTitle('');
    setErrorPrice('');
    setErrorText('');

    if(title.trim().length === 0) {
      setErrorTitle('Please enter valid Title');
      return
    } else if (price.trim().length === 0) {
      setErrorPrice('Please enter valid Price');
      return
    } else if (text.trim().length === 0) {
      setErrorText('Please enter valid Text');
      return
    }


    const product: ObjectItem = {
      // id: 3,
      price: Number(price),
      title: title,
      category: 'string',
      description: text,
      image: 'images/tshirt.png',
      btn: false
    }

    const respons = await axios.post<ObjectItem>('https://fakestoreapi.com/products', product);
    console.log(respons.data);
    dispatch(addNewProduct(respons.data));
    setOpen(false);
    setTitle('');
    setPrice('');
    setText('');
  }

  return (
    <>

      <div className="form-product__inner" onClick={() => setOpen(false)}>
      </div>
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
            <div className="form-product__error">{errorTitle}</div>
            <label htmlFor="price" className="form-product__label">Price</label>
            <input id="price" name="price" className="form-product__input" type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            <div className="form-product__error">{errorPrice}</div>

            <label htmlFor="text" className="form-product__label">Text</label>
            <textarea className="form-product__input form-product__input--textarea" id="text" name="text" value={text} onChange={(e) => setText(e.target.value)} />
            <div className="form-product__error">{errorText}</div>

            <button className="form-product__btn btn-reset" type="submit">
              Add to Product
            </button>
          </form>

        </div>

    </>
  );
};

export default ModalNewProduct;
