import React from "react";
import { Link , useNavigate} from "react-router-dom";
export default function Navbar() {

  const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem("authToken")
    navigate("/")
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            Hunger
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav me-auto mb-2">
              <Link className="nav-link active fs-5" aria-current="page" to="/">
                Home
              </Link>

              {localStorage.getItem("authToken") ? (
                <div className="navbar-nav">
                  <Link
                    className="nav-link active fs-5"
                    aria-current="page"
                    to="/"
                  >
                    My Order
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>

            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link className="btn bg-white text-success mx-1" to="/Login">
                  Login
                </Link>
                <Link
                  className="btn bg-white text-success mx-1"
                  to="/CreateUser"
                >
                  Signup
                </Link>
              </div>
            ) : (
              <div>
                <div className="btn bg-white text-success mx-1">
                  My Cart
                </div>
                {/* <Link className="btn bg-white text-success mx-1" to="/Login">
                  Logout
                </Link> */}
                  <div className="btn bg-white text-danger mx-1" onClick={handleLogout}>
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
