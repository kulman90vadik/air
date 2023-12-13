import "./login.scss";
import { FormEvent, useState } from "react";
import { useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const [password, setPassword] = useState(false);
  const login = (e: FormEvent) => {
    e.preventDefault();
  };

  if (location.pathname === "/login") {
    setTimeout(() => {
      setPassword(true);
    }, 1000);
  }

  return (
    <div className="login">
      <div className="modal__info">
        <form className="modal__form" onSubmit={login}>
          <button className="modal__btn btn-reset" type="submit">
            Login
          </button>
        </form>
      </div>

      <div className={`modal__title ${password ? "modal__title--active" : ""}`}>
        Username: <strong>Admin</strong>
        Password: <strong>12345</strong> 
      </div>
    </div>
  );
};

export default Login;
