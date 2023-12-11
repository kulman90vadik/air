
import './navigation.scss';
import { NavLink } from "react-router-dom";


const Navigation = () => {

  const activeLink = 'navigation__link navigation__link--active';
  const normalLink = 'navigation__link';

  return (
    <nav className="navigation">
      <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink} >Home</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="catalog" className={({isActive}) => isActive ? activeLink : normalLink}>Catalog</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="news" className={({isActive}) => isActive ? activeLink : normalLink}>News</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="basket" className={({isActive}) => isActive ? activeLink : normalLink}>Basket</NavLink>
          </li>
        </ul>
    </nav>
  );
}
 
export default Navigation;