import React, { useEffect, useState } from "react";

const LogoutTimer = ({ onLogout }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    let timeoutId;

    const resetTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsLoggedIn(false);
        onLogout();
      }, 4* 1 * 1 * 1000);
    };

    const clearTimer = () => {
      clearTimeout(timeoutId);
    };
    resetTimer();

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keyup", resetTimer);

    return () => {
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keyup", resetTimer);
      clearTimer();
    };
  }, [onLogout]);
};

export default LogoutTimer;


