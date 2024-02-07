import React, { useState, useEffect, use } from "react";
import Image from "next/image";
import styles from "./AccountPill.module.scss";
import { fetchAccountDetails } from "@/app/api/fetchAccountDetails";
import { deleteSession } from "@/app/api/deleteSession";
import { fetchRequestToken } from "@/app/api/fetchRequestToken";
import { useAuth } from "@/contexts/AuthContext";

export const AccountPill = () => {
  const { isLoggedIn, sessionId, userName, setUserName } = useAuth();
  const [userInitial, setUserInitial] = useState("");

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

  const handleLogin = async () => {
    try {
      const requestToken = await fetchRequestToken();
      localStorage.setItem("requestToken", requestToken);
      window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:3000/approved`;
    } catch (error) {
      console.error("Failed to log in:", error);
    }
  };

  return isLoggedIn ? (
    <div className={styles.accountPill}>
      <button className={styles.accountPill__pill}>{userInitial}</button>
      <div className={styles.accountPill__modal}>
        <a href="/account" className={styles.accountPill__modal__username}>
          {" "}
          {userName}{" "}
        </a>

        <button
          className={styles.accountPill__modal__logout}
          onClick={async () => {
            await deleteSession(sessionId);
            window.location.reload();
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  ) : (
    <button className={styles.login} onClick={handleLogin}>
      Log In
    </button>
  );
};
