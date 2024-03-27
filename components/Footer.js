"use client";
import Link from "next/link";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={`${styles.footer} bg-gray-900`}>
      <div className={styles.container}>
        <div className={styles.join}>
          <h2 className={styles.logo}>City Tours & Desert Safari</h2>
          <p className={styles.description}>
            Experience the best of both worlds with our dynamic city tours and
            thrilling desert safaris, offering unforgettable adventures for
            every traveler.
          </p>
          <div className={styles.contactContainer}>
            <div className={styles.email}>
              <p className={styles.info}>Email us at</p>
              <p className={styles.address}>Tahirasif31@gmail.com</p>
            </div>
            <div className={styles.phone}>
              <p className={styles.info}>Call us at</p>
              <p className={styles.address}>+974 3323 4430</p>
            </div>
          </div>
        </div>
        <div className={styles.submit}>
          <h2 className={styles.submitTitle}>Let&apos;s Book Your Tour!</h2>
          <p className={styles.submitDescription}>
            Immerse yourself in unparalleled experiences with our exclusive
            tours. Secure your spot now and elevate your journey to
            extraordinary heights!
          </p>
          <div className={styles.icons}>
            <ion-icon name={"logo-facebook"}></ion-icon>
            <ion-icon name={"logo-twitter"}></ion-icon>
            <ion-icon name={"logo-instagram"}></ion-icon>
            <ion-icon name={"logo-linkedin"}></ion-icon>
          </div>
        </div>
      </div>
      <div className={styles.footerBottomContainer}>
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>&copy; Copyright 2024</p>
          <ul className={styles.footerLinks}>
            <li className={styles.link}>
              <Link href={"/"} className={styles.link}>
                Home
              </Link>
            </li>
            <li className={styles.link}>
              <Link href={"#about"} className={styles.link}>
                About
              </Link>
            </li>
            <li className={styles.link}>
              <Link href={"#services"} className={styles.link}>
                Services
              </Link>
            </li>
            <li className={styles.link}>
              <Link href={"#contact"} className={styles.link}>
                Contact
              </Link>
            </li>
            <li className={styles.link}>
              <Link href={"#solutions"} className={styles.link}>
                Discover
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
