import React from "react";
import Image from "next/image";
import styles from "./AccountPill.module.scss";

export const AccountPill = () => {
    return (
        <div className={styles.accountPill}>
            <button className={styles.accountPill__pill}>P</button>
        </div>
    );
    }