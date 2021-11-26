import { createContext, useState } from "react";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [loding, setLoading] = useState(false);
  const [navToggle, setNavToggle] = useState(true);

  console.log(navToggle);

  const allContext = useFirebase();
  return (
    <AuthContext.Provider
      value={{
        allContext,
        show,
        setShow,
        loding,
        setLoading,
        navToggle,
        setNavToggle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
