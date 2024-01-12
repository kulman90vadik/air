import { useState } from "react";
import "./filter-catalog.scss";
import { changePrice } from "../../redux/slices/catalogClise";
import { useDispatch } from "react-redux";

const FilterCatalog = () => {
  const[count, setCount] = useState(0);
  const[open, setOpen] = useState(false);
  const dispatch = useDispatch();
  type Price = {
    title: string;
    id: string;
  };

  let filterPrice: Price[] = [
    { title: "Price", id: "" },
    { title: "Ascending", id: "asc" },
    { title: "Descending", id: "desc" },
  ];


  const clickItemPrice = (id: string, i: number) => {
    dispatch(changePrice(id));
    setCount(i);
    setOpen(!open);
  }
  const clickFilterBtn = () => {
    // setCount(i);
    setOpen(!open);
  }

  return (
    <div className="filter-catalog">
      <ul className="filter-catalog__list">
        <li className="filter-catalog__item">
          <div className="filter">
            <button className="btn-reset filter__btn" type="button" onClick={clickFilterBtn}>
              {filterPrice[count].title}
              <svg
                className={`filter__icon 
                ${open ? "filter__icon--active" : "" }`}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"></path>
              </svg>
            </button>
            <ul className='filter__list'
            style={{ maxHeight: open ? "500px" : "0px" }}
            >
              {filterPrice.map((item, index) => (
                <li 
                key={item.title}
                className="filter__item" 
                onClick={() => clickItemPrice(item.id, index)}>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FilterCatalog;
function dispatch(arg0: { payload: string; type: "catalog/changePrice"; }) {
  throw new Error("Function not implemented.");
}

