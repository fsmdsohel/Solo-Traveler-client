import { useState } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [toggleBtn, setToggleBtn] = useState(false);
  const { allContext } = useAuth();
  const { user, logOut } = allContext;

  const handleLogOut = () => {
    swal({
      title: "Are you sure?",
      text: "Once logged out you will not be able to access all the services on this website",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((logout) => {
      if (logout) {
        logOut();
        swal("Successfully Log Out", {
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="navbar">
      <Container>
        <div className="navbar_container">
          <div className="nav_logo">
            <img src={logo} alt="LOGO" />
          </div>
          <ul className="nav_menu">
            <li className="nav_items">
              <NavLink activeClassName="active" className="nav_link" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav_items">
              <NavLink
                activeClassName="active"
                className="nav_link"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav_items">
              <NavLink
                activeClassName="active"
                className="nav_link"
                to="/listing"
              >
                Listing
              </NavLink>
            </li>
            <li className="nav_items">
              <NavLink
                activeClassName="active"
                className="nav_link"
                to="/contact-us"
              >
                Contact us
              </NavLink>
            </li>
          </ul>
          <div className="connect">
            <span className="email">contact@travelerwp.com</span>
            <span className="number">
              <i className="fas fa-phone"></i>+ 12 43223354
            </span>
            {!user?.email ? (
              <>
                <NavLink
                  activeClassName="link_active"
                  className="login"
                  to="/login"
                >
                  Login
                </NavLink>
                <NavLink
                  activeClassName="link_active"
                  to="/sign-up"
                  className="sign_up me-3"
                >
                  Sign Up
                </NavLink>
                <NavLink
                  className="btn-custom bashboard_btn"
                  to="/dashboard/profile"
                >
                  Dashboard
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  className="btn-custom bashboard_btn"
                  to="/dashboard/my-order"
                >
                  My Booking
                </NavLink>
                <NavLink
                  className="btn-custom bashboard_btn"
                  to="/dashboard/profile"
                >
                  Dashboard
                </NavLink>
                <div className={toggleBtn ? "drop_down active" : "drop_down"}>
                  <div className="drop_down_icon">
                    <img
                      onClick={() => setToggleBtn(!toggleBtn)}
                      src={user.photoURL}
                      alt=""
                    />
                  </div>
                  <div
                    className={
                      toggleBtn ? "drop_down_menu active" : "drop_down_menu"
                    }
                  >
                    <small>Welcome:~</small>
                    <p>{user.displayName}</p>
                    <button
                      onClick={() => handleLogOut()}
                      className="log_out btn-custom"
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
