"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import Burger from "@/app/components/mode/burger";

export default function Header() {
  return (
    <header id="header" className={styles.header}>
      <h1 className={styles.I}>
        <Link className={styles.main_ttl} href="/">
          悠々<span>記</span>
        </Link>
      </h1>
      <Burger />
    </header>
  );
}
