import React from "react";
import Image from "next/image";
import styles from "./AccountPill.module.scss";
import { fetchRequestToken, createSessionId } from "@/app/api/fetchRequestToken";
import { useAuth } from "@/contexts/AuthContext";

export const AccountPill = () => {
    const { setIsLoggedIn } = useAuth();

    const handleLogin = async () => {
      try {
        const requestToken = await fetchRequestToken();
        // Redirect the user for authentication...
        // Once the user has authenticated and been redirected back to your website:
        const sessionId = await createSessionId(requestToken);
        console.log('Session ID:', sessionId);
        // You now have a session ID and can make authenticated requests on behalf of the user.
        setIsLoggedIn(true);
      } catch (error) {
        console.error('Failed to log in:', error);
      }
    };

  return (
    <div className={styles.accountPill}>
      <button className={styles.accountPill__pill} onClick={handleLogin}>
        P
      </button>
    </div>
  );
};
