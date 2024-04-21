import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "../css/login.css";

function App() {
  return (
    <div className="Main">
      <div className="App">
        <div className="Main-SingIn">
          <h2>Sign in</h2>
          <input type="text" name="Id-Login" className="inputs" />
          <input type="text" name="Id-Password" className="inputs" />
          <button type="button" className="Login-Button">
            <Link
              className="links"
              to="/home"
              style={{ textDecoration: "none", color: "white" }}
            >
              LOGIN
            </Link>
          </button>
          <button type="button" className="Create-Account-Button">
            <Link className="Create-Account-Button" to="/cadastro" style={{ textDecoration: "none" }}>
              CREATE NEW ACCOUNT
            </Link>
          </button>
          <Link className="links" to="/forgotPass" style={{ textDecoration: "none" }}>
            Forgot your password?
          </Link>
        </div>
      </div>
      <div className="Terms-Privacy">
        <Link className="links" to="" style={{ textDecoration: "none" }}>
          Terms and Conditions
        </Link>
        <span>•</span>
        <Link className="links" to="" style={{ textDecoration: "none" }}>
          Privacy policy
        </Link>
      </div>
    </div>
  );
}

export default App;
