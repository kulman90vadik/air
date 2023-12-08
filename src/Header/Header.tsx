import './header.scss';
import { Link } from "react-router-dom";
import Navigation from './Navigarion/Navigation';
import Search from './Search/Search';
import Basket from './Basket/Basket';
import Login from './Login/Login';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">

        <Link to="/" className="header__logo">
            <img className="header__image" src="/images/logo.svg" alt="logo" />
        </Link>

        <Navigation />
        <Search />
        <Login />
        <Basket />

      </div>
    </header>
  );
}
 
export default Header;