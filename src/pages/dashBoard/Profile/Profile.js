import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";
import "./Profile.css";

const Profile = () => {
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
    </>
  );
};

export default Profile;
