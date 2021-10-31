import Booking from "./Booking/Booking";
// import Expricence from "./Exprience/Exprience";
import Intro from "./Intro/Intro";
import Location from "./Location/Location";

const Home = () => {
  return (
    <>
      <Intro></Intro>
      <Booking></Booking>
      <Location></Location>
      {/* <Expricence></Expricence> */}
    </>
  );
};

export default Home;
