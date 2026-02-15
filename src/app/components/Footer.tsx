"use client";

import styles from "./Footer.module.css";
import {
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* Chrome divider */}
      <div className={styles.chromeLine} />

      {/* Main grid */}
      <div className={styles.inner}>

        <div className={styles.grid}>

          {/* Product */}
          <div className={styles.column}>
            <span className={styles.heading}>Product</span>
            <a href="/how-it-works">How it works</a>
            <a href="/extension">Extension</a>
            <a href="/pricing">Pricing</a>
          </div>

          {/* Company */}
          <div className={styles.column}>
            <span className={styles.heading}>Company</span>
            <a href="/about">About</a>
            <a href="/careers">Careers</a>
            <a href="/contact">Contact</a>
            <a href="/blog">Blog</a>
          </div>

          {/* Resources */}
          <div className={styles.column}>
            <span className={styles.heading}>Resources</span>
            <a href="/help">Help Center</a>
            <a href="/sitemap">Sitemap</a>
            <a href="/changelog">Changelog</a>
            <a href="/status">Status</a>
          </div>

          {/* Legal */}
          <div className={styles.column}>
            <span className={styles.heading}>Legal</span>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
          </div>

        </div>

      </div>

      {/* Bottom row */}

      <div className={styles.bottom}>

        <span className={styles.copyright}>
          © {new Date().getFullYear()} Buddy. All rights reserved.
        </span>

        <div className={styles.icons}>

          <a
            href="https://x.com/buddy"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="X"
          >
            <Twitter size={20} strokeWidth={1.5} />
          </a>

          <a
            href="https://facebook.com/buddy"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="Facebook"
          >
            <Facebook size={20} strokeWidth={1.5} />
          </a>

          <a
            href="https://linkedin.com/company/nextcorner"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="LinkedIn"
          >
            <Linkedin size={20} strokeWidth={1.5} />
          </a>

          <a
            href="https://instagram.com/buddy"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="Instagram"
          >
            <Instagram size={20} strokeWidth={1.5} />
          </a>

        </div>

      </div>

    </footer>
  );
}
