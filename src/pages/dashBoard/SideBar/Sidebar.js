import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import sidebarLogo from "../../../images/logo.png";
import "./Sidebar.css";

const Sidebar = ({ styles }) => {
  const { navToggle } = useAuth();

  return (
    <aside className={navToggle ? "" : "active"} style={styles}>
      <div>
        <div className="sidebar_logo">
          <img src={sidebarLogo} alt="" />
          <h4>Travelers</h4>
        </div>
        <ul className="sidebar_menu">
          <li className="sidebar_link">
            <NavLink activeClassName="active" to="/dashboard/profile">
              <i className="fas fa-user"></i> My Profile
            </NavLink>
          </li>
          <li className="sidebar_link">
            <NavLink activeClassName="active" to="/dashboard/my-order">
              <i className="fas fa-list-alt"></i> My Booking
            </NavLink>
          </li>
          <li className="sidebar_link">
            <NavLink activeClassName="active" to="/dashboard/check-out">
              <i className="fas fa-shopping-cart"></i> Check Out
            </NavLink>
          </li>
          <li className="sidebar_link">
            <NavLink activeClassName="active" to="/dashboard/booking-list">
              <i className="fas fa-indent"></i> Booking List
            </NavLink>
          </li>
          <li className="sidebar_link">
            <NavLink activeClassName="active" to="/dashboard/manage-booking">
              <i className="fas fa-tasks"></i> Manage Booking
            </NavLink>
          </li>
          <li className="sidebar_link">
            <NavLink activeClassName="active" to="/dashboard/add-booking">
              <i className="fas fa-plus-square"></i> Add Booking
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
