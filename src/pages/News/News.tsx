import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import './news.scss';
import { Link } from "react-router-dom";

const News = () => {

  const loginOpen: boolean = useSelector((state: RootState) => state.login.loginOpen);


  return (
    <section className="news">
      <div className="news__container">

          {loginOpen ?
            <div className="news__inner">
                <p className="news__text">To view news you need to enter your login</p>
                <Link to="../login">
                  <button className="news__btn btn-reset" type="button">Go to Login</button>
                </Link>
            </div>
            : 
            <div className="news__inner">
              еприекререкр ре ер рер   ер ер
            </div>
          }



      </div>
    </section>
  );
}
 
export default News;