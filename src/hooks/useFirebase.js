import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializationAuthentication from "../firebase/firebase.init";

initializationAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [userRegistration, setUserRegistration] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
  });
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const auth = getAuth();

  const signInWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider).finally(() =>
      setIsLoading(false)
    );
  };

  const signInWithGithub = () => {
    setIsLoading(true);
    return signInWithPopup(auth, githubProvider).finally(() =>
      setIsLoading(false)
    );
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
    return unSubscribe;
  }, []);

  return {
    error,
    setError,
    user,
    setUser,
    isLoading,
    userRegistration,
    handleInput,
    setIsLoading,
    signInWithGoogle,
    signInWithGithub,
    logOut,
  };
};

export default useFirebase;
