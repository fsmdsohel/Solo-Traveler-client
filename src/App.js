import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./pages/shared/Navbar/Navbar";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import NotFound from "./pages/NotFound/NotFound";
import ContactUs from "./pages/contactUs/ContactUs";
import Listing from "./pages/Listing/Listing";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import Footer from "./pages/shared/Footer/Footer";
import PrivateRoute from "./pages/shared/PrivateRoute/PrivateRoute";
import DashBoard from "./pages/dashBoard/DashBoard";
import { useEffect } from "react";
import useAuth from "./hooks/useAuth";
import SignMeUp from "./pages/shared/SignMeUp/SignMeUp";
import BookingDetails from "./pages/home/BookingDetails/BookingDetails";

function App() {
  const { dashboard, setDashboard } = useAuth();
  useEffect(() => {
    const url = window.location.pathname;
    if (
      url === "/dashboard/profile" ||
      url === "/dashboard/my-order" ||
      url === "/dashboard/check-out" ||
      url === "/dashboard/booking-list" ||
      url === "/dashboard/manage-booking" ||
      url === "/dashboard/add-booking"
    ) {
      setDashboard(true);
    } else {
      setDashboard(false);
    }
  }, []);

  let oldHref = document.location.pathname;
  const bodyList = document.querySelector("body"),
    observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (oldHref !== document.location.pathname) {
          oldHref = document.location.pathname;
          const url = window.location.pathname;
          if (
            url === "/dashboard/profile" ||
            url === "/dashboard/my-order" ||
            url === "/dashboard/check-out" ||
            url === "/dashboard/booking-list" ||
            url === "/dashboard/manage-booking" ||
            url === "/dashboard/add-booking"
          ) {
            setDashboard(true);
          } else {
            setDashboard(false);
          }
        }
      });
    });

  const config = {
    childList: true,
    subtree: true,
  };

  observer.observe(bodyList, config);
  return (
    <Router>
      {!dashboard ? <Navbar></Navbar> : ""}
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute path="/booking-details/:page/:id">
          <BookingDetails></BookingDetails>
        </PrivateRoute>
        <Route path="/about">
          <AboutUs></AboutUs>
        </Route>
        <PrivateRoute path="/listing">
          <Listing></Listing>
        </PrivateRoute>
        <Route path="/contact-us">
          <ContactUs></ContactUs>
        </Route>
        <PrivateRoute path="/dashboard">
          <DashBoard></DashBoard>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/sign-up">
          <SignUp></SignUp>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      {!dashboard ? (
        <>
          <SignMeUp></SignMeUp>
          <Footer></Footer>
        </>
      ) : (
        ""
      )}
    </Router>
  );
}

export default App;
