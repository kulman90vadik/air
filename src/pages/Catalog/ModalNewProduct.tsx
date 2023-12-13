// import "./modal.scss";
import { useState } from "react";
import axios from "axios";
import { ObjectItem } from "../../models";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../../redux/slices/catalogClise";

type Props = {
  open: boolean;
  setOpen: (i: boolean) => void;
};

const ModalNewProduct: React.FC<Props> = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [errorTitle, setErrorTitle] = useState<string>("");
  const [errorText, setErrorText] = useState<string>("");
  const [errorPrice, setErrorPrice] = useState<string>("");

  const addToProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorTitle("");
    setErrorPrice("");
    setErrorText("");

    if (title.trim().length === 0) {
      setErrorTitle("Please enter valid Title");
      return;
    } else if (price.trim().length === 0) {
      setErrorPrice("Please enter valid Price");
      return;
    } else if (text.trim().length === 0) {
      setErrorText("Please enter valid Text");
      return;
    }

    const product: ObjectItem = {
      // id: 3,
      price: Number(price),
      title: title,
      category: "string",
      description: text,
      image: "images/tshirt.png",
      btn: false,
    };

    const respons = await axios.post<ObjectItem>(
      "https://fakestoreapi.com/products",
      product
    );
    console.log(respons.data);
    dispatch(addNewProduct(respons.data));
    setOpen(false);
    setTitle("");
    setPrice("");
    setText("");
  };

  return (
    <>
      <div className="modal__inner" onClick={() => setOpen(false)}></div>

      <div className="modal__info">
        <button
          className="modal__close btn-reset"
          onClick={() => setOpen(false)}
        >
          &#x2715;
        </button>

        <form className="modal__form" onSubmit={addToProduct}>
          <label htmlFor="title" className="modal__label">
            Name Product
          </label>
          <input
            id="title"
            name="title"
            className="modal__input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="modal__error">{errorTitle}</div>
          <label htmlFor="price" className="modal__label">
            Price
          </label>
          <input
            id="price"
            name="price"
            className="modal__input"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <div className="modal__error">{errorPrice}</div>

          <label htmlFor="text" className="modal__label">
            Text
          </label>
          <textarea
            className="modal__input modal__input--textarea"
            id="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="modal__error">{errorText}</div>

          <button className="modal__btn btn-reset" type="submit">
            Add to Product
          </button>
        </form>
      </div>
    </>
  );
};

export default ModalNewProduct;
