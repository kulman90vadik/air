import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CatalogItem from "./CatalogItem";
import { ObjectItem } from "../../models";
import Loader from "../../Loader/Loader";
import ModalNewProduct from "./ModalNewProduct";
import "./catalog.scss";


const Catalog = () => {
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
      
      <ModalNewProduct />

    </section>
  );
};

export default Catalog;
