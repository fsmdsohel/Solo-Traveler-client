import { Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AddBooking from "./AddBooking/AddBooking";
import BookingList from "./BookingList/BookingList";
import CheckOut from "./CheckOut/CheckOut";
import "./DashBoard.css";
import DashBoardNav from "./DashBoardNav/DashBoardNav";
import ManageBooking from "./ManageBooking/ManageBooking";
import MyOrder from "./MyOrder/MyOrder";
import Profile from "./Profile/Profile";
import Sidebar from "./SideBar/Sidebar";

const DashBoard = () => {
  const { navToggle } = useAuth();
  let { path, url } = useRouteMatch();

  const asideStyle = {
    maxWidth: "250px",
    width: "100%",
    color: "#fff",
  };

  const activeClass = `dashboard_item ${navToggle || "active"}`;

  return (
    <div className="dashboard_container">
      <Sidebar styles={asideStyle}></Sidebar>
      <div className="dashboard_content">
        <DashBoardNav></DashBoardNav>
        <Switch>
          <Route path="/dashboard/profile">
            <div className={activeClass}>
              <Profile></Profile>
            </div>
          </Route>
          <Route path={`${path}/my-order`}>
            <div className={activeClass}>
              <MyOrder></MyOrder>
            </div>
          </Route>
          <Route path={`${path}/check-out`}>
            <div className={activeClass}>
              <CheckOut></CheckOut>
            </div>
          </Route>
          <Route path={`${path}/booking-list`}>
            <div className={activeClass}>
              <BookingList></BookingList>
            </div>
          </Route>
          <Route path={`${path}/manage-booking`}>
            <div className={activeClass}>
              <ManageBooking></ManageBooking>
            </div>
          </Route>
          <Route path={`${path}/add-booking`}>
            <div className={activeClass}>
              <AddBooking></AddBooking>
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default DashBoard;
