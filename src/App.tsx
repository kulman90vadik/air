import "./scss-setings/includes.scss";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState, useAppDispatch } from "./redux/store";
import { Route, Routes } from "react-router-dom";
import { fetchCatalog } from './redux/slices/catalogClise';

import Home from "./pages/Home/Home";
import Header from "./Header/Header";
import Catalog from './pages/Catalog/Catalog';
import News from './pages/News/News';
import Basket from "./pages/Basket/Basket";
import Login from './pages/Login/Login';
import CartPage from "./pages/CartPage/CartPage";

function App() {
  const dispatch = useAppDispatch();
  const id = useSelector((state: RootState) => state.catalog.sortPriceId);
  console.log(id);


  useEffect(() => {
    
      let sortPriceId = id ? `sort=price=${id}` : '';
      console.log(sortPriceId)
      dispatch(fetchCatalog({sortPriceId}));

  }, [id])



  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="news" element={<News />} />
        <Route path="basket" element={<Basket />} />
        <Route path="login" element={<Login />} />
        <Route path="/item/:id" element={<CartPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
