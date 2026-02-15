"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

const EXTENSION_ID = "YOUR_EXTENSION_ID";

const EXTENSION_URL =
  `chrome-extension://${EXTENSION_ID}/index.html`;

const WEBSTORE_URL =
  `https://chrome.google.com/webstore/detail/${EXTENSION_ID}`;

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [extensionInstalled, setExtensionInstalled] =
    useState(false);

  const [checkedExtension, setCheckedExtension] =
    useState(false);


  useEffect(() => {

    const img = document.createElement("img");

    img.src =
      `chrome-extension://${EXTENSION_ID}/icon-128.png`;

    img.onload = () => {

      setExtensionInstalled(true);
      setCheckedExtension(true);

    };

    img.onerror = () => {

      setExtensionInstalled(false);
      setCheckedExtension(true);

    };

  }, []);


  useEffect(() => {

    function handleScroll() {

      const y = window.scrollY;

      const blur = Math.min(y / 10, 12);

      const opacity =
        Math.min(0.85 + y / 300, 0.95);

      document.documentElement.style.setProperty(
        "--nav-blur",
        `${blur}px`
      );

      document.documentElement.style.setProperty(
        "--nav-bg-opacity",
        opacity.toString()
      );

      setScrolled(y > 4);

    }

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);


  function getButtonText() {

    if (!checkedExtension)
      return "Checking...";

    return extensionInstalled
      ? "Open Buddy"
      : "Add Buddy";

  }

  function getButtonUrl() {

    return extensionInstalled
      ? EXTENSION_URL
      : WEBSTORE_URL;

  }


  return (

    <>
      <header
        className={`${styles.navbar}
        ${scrolled ? styles.scrolled : ""}`}
      >

        <div className={styles.inner}>

          <Link href="/" className={styles.logo}>
            <Image
              src="/buddy.jpg"
              alt="Buddy"
              width={160}
              height={56}
              className={styles.logoImage}
              priority
            />
          </Link>


          <nav className={styles.center}>

            <Link href="/product" className={styles.link}>
              Product
            </Link>

            <Link href="/how-it-works" className={styles.link}>
              How it works
            </Link>

            <Link href="/pricing" className={styles.link}>
              Pricing
            </Link>

            <Link href="/faq" className={styles.link}>
              FAQ
            </Link>

          </nav>


          <div className={styles.right}>

            <Link
              href="/login"
              className={`${styles.button}
              ${styles.secondary}`}
            >
              Log in
            </Link>


            <a
              href={getButtonUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.button}
              ${styles.primary}`}
            >
              {getButtonText()}
            </a>


            <button
              className={styles.hamburger}
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
              aria-label="Menu"
            >

              <div className={styles.hamburgerInner}>
                <span />
                <span />
                <span />
              </div>

            </button>

          </div>

        </div>

      </header>


      <div
        className={`${styles.mobileMenu}
        ${menuOpen ? styles.mobileMenuOpen : ""}`}
      >

        <div className={styles.mobileInner}>

          <div className={styles.mobileHeader}>

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={styles.logo}
            >

              <Image
                src="/buddy.jpg"
                alt="Buddy"
                width={160}
                height={56}
                className={styles.logoImage}
              />

            </Link>


            <button
              onClick={() => setMenuOpen(false)}
              className={styles.mobileClose}
            >
              ×
            </button>

          </div>


          <div className={styles.mobileNav}>

            <Link href="/product" className={styles.mobileLink}>
              Product
            </Link>

            <Link href="/how-it-works" className={styles.mobileLink}>
              How it works
            </Link>

            <Link href="/pricing" className={styles.mobileLink}>
              Pricing
            </Link>

            <Link href="/faq" className={styles.mobileLink}>
              FAQ
            </Link>

          </div>


          <div className={styles.mobileSpacer} />


          <a
            href={getButtonUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileCard}
          >

            <div className={styles.mobileCardLeft}>

              <div className={styles.mobileCardIcon}>

                <Image
                  src="/chrome.png"
                  alt="Chrome"
                  width={24}
                  height={24}
                  className={styles.extensionIcon}
                />

              </div>

              <div>

                <div className={styles.mobileCardTitle}>
                  {extensionInstalled
                    ? "Open Buddy"
                    : "Browser Extension"}
                </div>

                <div className={styles.mobileCardSubtitle}>
                  {extensionInstalled
                    ? "Launch extension"
                    : "Install for Chrome"}
                </div>

              </div>

            </div>

          </a>

        </div>

      </div>

    </>
  );

}
