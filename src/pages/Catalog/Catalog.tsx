import { useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../../redux/store";
import CatalogItem from "./CatalogItem";
import { ObjectItem } from "../../models";
import Loader from "../../Loader/Loader";
import ModalNewProduct from "./ModalNewProduct";
import "./catalog.scss";
// import './form-product.scss';


const Catalog = () => {
  const [open, setOpen] = useState<boolean>(false);
  const status = useSelector((state: RootState) => state.catalog.status);
  const catalog = useSelector((state: RootState) => state.catalog.catalog);

  // console.log(catalog);

  return (
    <section className="catalog">
      <div className="catalog__container">
        <ul className="catalog__list">
          <>
            {status === "error" ? (
              <div className="catalog__error">
                <span>There was an error receiving goods.</span>
                <p>Please try again later</p>
                <div>&#128554;</div>
              </div>
            ) : status === "loading" ? (
              [...Array(10)].map((item, i) => <Loader key={i} />)
            ) : (
              catalog.map((item: ObjectItem) => (
                <CatalogItem key={item.id} item={item} />
              ))
            )}
          </>
        </ul>
      </div>

      <div className="catalog__plus" onClick={() => setOpen(true)}>
        <span className="catalog__title">Added new Product</span>
      </div>

      <div className={`modal ${open ? "modal--active" : null}`}>
        <ModalNewProduct setOpen={setOpen} open={open}/>
      </div>

    </section>
  );
};

export default Catalog;
