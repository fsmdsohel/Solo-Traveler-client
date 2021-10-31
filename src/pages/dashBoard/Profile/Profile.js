import "./Profile.css";
import useAuth from "../../../hooks/useAuth";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const { allContext, setLoading } = useAuth();
  const { user, logOut } = allContext;
  const history = useHistory();
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

  const handleBackToHome = () => {
    setLoading(true);
    history.push("/");
  };

  return (
    <>
      <div className="profile">
        <h4>Profile</h4>
        <div className="profile_img">
          <img src={user.photoURL} alt="" />
        </div>
        <h5>{user.displayName}</h5>
        <p>{user.email}</p>
        <button onClick={handleLogOut} className="btn-custom profile_log">
          Log Out
        </button>
      </div>
      <div className="sidebar_logo">
        <div onClick={handleBackToHome} className="btn-custom back_btn">
          <i className="fas fa-sign-out-alt"></i> Back to Home
        </div>
      </div>
    </>
  );
};

export default Profile;
