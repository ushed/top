"use client";

import { useEffect } from "react";
import ModeToggle from "@/app/components/mode/mode";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import styles from "@/app/components/mode/burger.module.css";

export default function Burger() {
  useEffect(() => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav_links");

    const handleClick = () => {
      if (nav && burger) {
        nav.classList.toggle("nav_active");
        burger.classList.toggle("toggle");
      }
    };

    if (burger) {
      burger.addEventListener("click", handleClick);

      // クリーンアップ関数でイベントリスナーを削除
      return () => {
        if (burger) {
          burger.removeEventListener("click", handleClick);
        }
      };
    }
  }, []);

  return (
    <nav>
      <ul className={styles.nav_links}>
        <li>
          <Link href="/creation">Creations</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={styles.btn}>
          <Link
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </Link>
        </li>
        <li>
          <ModeToggle />
        </li>
      </ul>
      <div className="burger" role="button" tabIndex="0">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
