// components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

const HomeFooter = () => {
  return (
    <footer className={styles.homeFooter}>
      {/* Background Image */}
      <div className={styles.backgroundImage}>
        {/* Logo in the middle */}
        <div className={styles.logoContainer}>
          <Image src="/images/logofooter.png" alt="Logo" width={200} height={100} />
        </div>
        {/* Four Columns */}
        <div className={styles.footerContent}>
        <div className={styles.columns}>
          {/* Column 1: Address */}
          <div className={styles.column}>
            <h3>Address</h3>
            <p>No: 400, Deans Road, Colombo 10,</p>
            <p>Sri Lanka</p>
            <p>Tel: 011 2 627 000</p>
            <p>Email: info@cau.hayleys.com</p>
          </div>

          {/* Column 2: Links 1 */}
          <div className={styles.column}>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Links 2 */}
          <div className={styles.column}>
            <h3>Explore</h3>
            <ul>
              <li><a href="#">Products</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Sustainability</a></li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div className={styles.column}>
            <h3>Connect With Us</h3>
            <div className={styles.socialRow}>
              <a href="#"><Image src="/icons/Likin.svg" alt="Facebook" width={30} height={30} /></a>
              <a href="#"><Image src="/icons/Facebook.svg" alt="Twitter" width={30} height={30} /></a>
              <a href="#"><Image src="/icons/insta.svg" alt="Instagram" width={30} height={30} /></a>
            </div>
            <div className={styles.socialRow}>
              <a href="#"><Image src="/icons/grok.png" alt="LinkedIn" width={30} height={30} /></a>
              <a href="#"><Image src="/icons/youtube.svg" alt="YouTube" width={30} height={30} /></a>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <ul>
            <li><a href="#">GDPR Compliance</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Sitemap</a></li>
        </ul>
      </div>
    </footer>
  );
};

const DefaultFooter = () => {
  return (
    <footer className={styles.defaultFooter}>
      <p>© 2025 Ceylon Gem Seekers. All rights reserved.</p>
      <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
      </ul>
    </footer>
  );
};

export { HomeFooter, DefaultFooter };