import { useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../../redux/store";
import CatalogItem from "./CatalogItem";
import { ObjectItem } from "../../models";
import Loader from "../../Loader/Loader";
import ModalNewProduct from "./ModalNewProduct";
import "./catalog.scss";


const Catalog = () => {
  const [open, setOpen] = useState<boolean>(false);
  const status: string = useSelector((state: RootState) => state.catalog.status);
  const catalog: ObjectItem[] = useSelector((state: RootState) => state.catalog.catalog);
  const search: string = useSelector((state: RootState) => state.search.search);
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
              catalog
              .filter((obj: ObjectItem) => {
                return obj.title.toLowerCase().includes(search.toLowerCase());
              })
              .map((item: ObjectItem) => (
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
