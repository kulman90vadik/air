import "./scss-setings/includes.scss";

import { fetchCatalog } from './redux/slices/catalogClise';
import { useAppDispatch } from "./redux/store";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./Header/Header";
import Catalog from './pages/Catalog/Catalog';
import News from './pages/News/News';
import Basket from "./pages/Basket/Basket";

function App() {
  const dispatch = useAppDispatch();

  let categoryId = 'hhh';
  let orderId = 'hhhh';
  let page = 'hhhhhhhh';

  dispatch(fetchCatalog({categoryId, page, orderId}));


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="news" element={<News />} />
        <Route path="basket" element={<Basket />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
