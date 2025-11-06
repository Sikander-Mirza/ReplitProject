import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isValid, setIsValid] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      setIsValid(false);
      return;
    }

    // ✅ Verify the token with backend (Laravel)
    fetch("https://your-api-domain.com/api/auth/verify", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          setIsValid(true);
        } else {
          localStorage.removeItem("token");
          setIsValid(false);
        }
      })
      .catch(() => {
        setIsValid(false);
      });
  }, [token]);

  // While checking, show loader
  if (isValid === null) {
    return <div>Loading...</div>;
  }

  // If invalid, redirect to login
  if (!isValid) {
    return <Navigate to="/" replace />;
  }

  // Otherwise, show the page
  return children;
};

export default ProtectedRoute;
