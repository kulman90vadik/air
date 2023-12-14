import { useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { RootState } from "../../redux/store";
import CatalogItem from "./CatalogItem";
import { ObjectItem } from "../../models";
import Loader from "../../Loader/Loader";
import ModalNewProduct from "./ModalNewProduct";
import "./catalog.scss";
import { getCartLS } from "../../utils/getCartLS";
// import './form-product.scss';


const Catalog = () => {
  const [open, setOpen] = useState<boolean>(false);
  const status: string = useSelector((state: RootState) => state.catalog.status);
  const catalog: ObjectItem[] = useSelector((state: RootState) => state.catalog.catalog);

  // console.log(catalog);
  // const isMountedCatalog = useRef(false);
  // useEffect(() => {
  //   if(isMountedCatalog.current) {
  //     const json = JSON.stringify(catalog);
  //     localStorage.setItem('catalog', json);
  //   }
  //   isMountedCatalog.current = true;
  // }, [catalog]);


      let catalogLG: ObjectItem[] = getCartLS();
      // console.log(catalogLG);
      
      let neWw = catalogLG.filter(item => {
        return item.btn;
      })

      console.log(catalog);
      console.log(neWw);
    
//  let rtrtr: ObjectItem[] = [];


      // neWw.forEach((item) => {
    
      //   catalog.map((item2) => {
      //     if(item.id === item2.id) {
      //       rtrtr.push(item)
      //     } 
      //     else {
      //       rtrtr.push(item2)
      //     }
      //   });
      // });
      
      // console.log(rtrtr);



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
