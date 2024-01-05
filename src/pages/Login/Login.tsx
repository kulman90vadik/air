import "./login.scss";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const refInputText = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [open, setOpen] = useState(true);
  const [inputText, setInputText] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  // refInputText.current?.focus();
  
  const login = (e: FormEvent) => {
    e.preventDefault();
    setErrorText('');
    setErrorPassword('')

    if(inputText === "" || inputText != "Admin") {
      setErrorText('Admin')
      setInputText('')
    } 
    if (inputPassword === "" || inputPassword != '12345') {
      setErrorPassword('12345')
      setInputPassword('')
    } 
    if(inputText === "Admin" && inputPassword === '12345') {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (location.pathname === "/login") {
      setTimeout(() => {
        setPassword(true);
      }, 1000);
  
      setTimeout(() => {
        setPassword(false);
      }, 5000);
    }
  }, [])



  return (
    <div className="login">
      <div className={`${open ? 'modal__info' : 'modal__info--hidden'}`}>
        <form className="modal__form" onSubmit={login}>
          <label className="modal__label">Login</label>
          <input className="modal__input" type="text" name="login" ref={refInputText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)} value={inputText} placeholder={errorText}/>
          <label className="modal__label">
            Password
            <input className="modal__input" type="text" name="password"  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputPassword(e.target.value)} value={inputPassword} placeholder={errorPassword}/>
          </label>
          <button className="modal__btn btn-reset" type="submit">
            Login
          </button>
        </form>
      </div>

      <div className={`${open ? 'modal__contact' : 'modal__contact--active'}`}>
        dgrgrggrgergrg  grg rggr
      </div>

      <div className={`modal__title ${password ? "modal__title--active" : ""}`}>
        Username: <strong>Admin</strong>
        Password: <strong>12345</strong>
      </div>
    </div>
  );
};

export default Login;
