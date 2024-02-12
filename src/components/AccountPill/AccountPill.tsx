import React, { useState, useEffect } from "react";
import styles from "./AccountPill.module.scss";
import { fetchAccountDetails } from "@/app/api/fetchAccountDetails";
import { deleteSession } from "@/app/api/deleteSession";
import { fetchRequestToken } from "@/app/api/fetchRequestToken";
import { useAuth } from "@/contexts/AuthContext";

export const AccountPill = () => {
  const { isLoggedIn, sessionId, userName, setUserName, setIsLoggedIn } =
    useAuth();
  const [userInitial, setUserInitial] = useState("");
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      if (isLoggedIn) {
        const accountDetails = await fetchAccountDetails(sessionId);
        setUserName(accountDetails.username);
        const initial = accountDetails.username.charAt(0).toUpperCase();
        setUserInitial(initial);
      }
    };
    fetchDetails();
  }, [isLoggedIn, sessionId]);

  const openModal = () => {
    setModalActive(!modalActive);
  };

  const handleLogin = async () => {
    try {
      const requestToken = await fetchRequestToken();
      localStorage.setItem("requestToken", requestToken);
      window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:3000/approved`;
    } catch (error) {
      console.error("Failed to log in:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await deleteSession(sessionId);
      document.cookie = "sessionId=; max-age=0; path=/";
      setIsLoggedIn(false);
      window.location.href = "/";
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return isLoggedIn ? (
    <div className={styles.accountPill}>
      <button className={styles.accountPill__pill} onClick={openModal}>
        {userInitial}
      </button>
      {modalActive && (
        <div className={styles.accountPill__modal}>
          <div className={styles.accountPill__modal__pill}>
            <p>{userInitial}</p>
          </div>
          <div className={styles.accountPill__modal__sidemenu}>
            <a href="/account" className={styles.accountPill__modal__sidemenu__username}>
              {" "}
              {userName}{" "}
            </a>

            <button
              className={styles.accountPill__modal__sidemenu__logout}
              onClick={handleLogout}
            >
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  ) : (
    <button className={styles.login} onClick={handleLogin}>
      Log In
    </button>
  );
};
