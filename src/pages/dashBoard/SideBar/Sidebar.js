import { NavLink, useHistory, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import sidebarLogo from "../../../images/logo.png";
import "./Sidebar.css";

const Sidebar = ({ styles }) => {
  const { navToggle, setLoading } = useAuth();
  const history = useHistory();

  let { path, url } = useRouteMatch();
  const handleBackToHome = () => {
    setLoading(true);
    history.push("/");
  };

  return (
    <aside className={navToggle ? "" : "active"} style={styles}>
      <div>
        <div className="sidebar_logo">
          <img src={sidebarLogo} alt="" />
          <h4>Travelers</h4>
        </div>
        <ul className="sidebar_menu">
          <li className="sidebar_link">
            <NavLink activeClassName="active" to={`${url}/profile`}>
              <i className="fas fa-user"></i> My Profile
            </NavLink>
          </li>
          <li className="sidebar_link">
            <NavLink activeClassName="active" to={`${url}/my-order`}>
              <i className="fas fa-list-alt"></i> My Booking
            </NavLink>
          </li>
          <li className="sidebar_link">
            <NavLink activeClassName="active" to={`${url}/check-out`}>
              <i className="fas fa-shopping-cart"></i> Check Out
            </NavLink>
          </li>
          <li className="sidebar_link">
            <NavLink activeClassName="active" to={`${url}/booking-list`}>
              <i className="fas fa-indent"></i> Booking List
            </NavLink>
          </li>
          <li className="sidebar_link">
            <NavLink activeClassName="active" to={`${url}/manage-booking`}>
              <i className="fas fa-tasks"></i> Manage Booking
            </NavLink>
          </li>
          <li className="sidebar_link">
            <NavLink activeClassName="active" to={`${url}/add-booking`}>
              <i className="fas fa-plus-square"></i> Add Booking
            </NavLink>
          </li>
          <div className="sidebar_logo">
            <div onClick={handleBackToHome} className="btn-custom back_btn">
              <i className="fas fa-sign-out-alt"></i> Back to Home
            </div>
          </div>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
