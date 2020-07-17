import React,{useState,useEffect,useRef} from 'react'
import './css/Contact.css'

function Login() {
    const inputRef = useRef();
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
  
    useEffect(() => {
      setTimeout(() => {
        inputRef.current.focus();
      }, 500);
    }, []);
  
    const emailFocusHandler = () => {
      setIsEmailFocused(true);
    };
  
    const emailBlurHandler = (event) => {
      if (event.target.value === "") {
        setIsEmailFocused(false);
      }
    };
  
    const passwordFocusHandler = () => {
      setIsPasswordFocused(true);
    };
  
    const passwordBlurHandler = (event) => {
      if (event.target.value === "") {
        setIsPasswordFocused(false);
      }
    };
    const emailHandler = (event) => {
      setEmail(event.target.value);
    };
    const passwordHandler = (event) => {
      setPassword(event.target.value);
    };
  
  
    return (
      <div className="login-main-container">
        <title>Login | Todo</title>
        <form className="form">
          <h1 className="title">Welcome</h1>
          <div className={`div margin ${isEmailFocused ? "focus" : ""}`}>
            <h5>Email</h5>
            <input
              ref={inputRef}
              onFocus={emailFocusHandler}
              onBlur={emailBlurHandler}
              type="email"
              value={email}
              onChange={emailHandler}
              required
              autoCorrect="false"
              spellCheck="false"
            />
          </div>
          <div className={`div margin1 ${isPasswordFocused ? "focus" : ""}`}>
            <h5>Password</h5>
            <input
              onFocus={passwordFocusHandler}
              onBlur={passwordBlurHandler}
              value={password}
              onChange={passwordHandler}
              required
              type="password"
            />
          </div>
          <input
            type="submit"
            className="btn"
            value="Login"
          />
        </form>
      </div>
    );
  }

export default Login
