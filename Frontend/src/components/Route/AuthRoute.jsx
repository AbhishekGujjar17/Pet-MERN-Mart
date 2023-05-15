import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner/Spinner";

const AuthRoute = ({ role }) => {
  const [validate, setValidate] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/auth/${role}-auth`
      );
      if (response.data.success) {
        setValidate(true);
      } else {
        setValidate(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return validate ? <Outlet /> : <Spinner />;
};

export default AuthRoute;
