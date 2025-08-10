// components/Footer.tsx
import React from "react";
import Image from "next/image";
import Link from 'next/link';
import styles from "./Footer.module.css";

const HomeFooter = () => {
  return (
    <footer className={styles.homeFooter}>
      {/* Background Image */}
      <div className={styles.backgroundImage}>
        {/* Logo in the middle */}
        <div className={styles.logoContainer}>
          <Image
            src="/images/logofooter.png"
            alt="Logo"
            width={200}
            height={100}
            style={{ display: "none" }}
          />
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
                <li>
                    <Link href="/haycarb-in-focus" className="" >
                  Haycarb in Focus
                </Link>
                </li>
                <li>
                  <Link href="/financial">Financial Highlights</Link>
                </li>
                <li>
                  <Link href="/non-financial-highlights">Non-Financial Highlights</Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Links 2 */}
            <div className={styles.column}>
              <h3>Explore</h3>
              <ul>
                <li>
                  <Link href="/tailor-made-for-you">Chart Generator</Link>
                </li>
                <li>
                  <Link href="/tailor-made-for-you">Create Your Own Report</Link>
                </li>
                <li>
                  <Link href="/game">Finquest</Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Social Media */}
            <div className={styles.column}>
              <h3>Connect With Us</h3>
              <div className={styles.socialRow}>
                <a href="https://www.linkedin.com/company/haycarbplc/" target="_blank">
                  <Image
                    src="/icons/Likin.svg"
                    alt="Linkin"
                    width={30}
                    height={30}
                  />
                </a>
                <a href="https://web.facebook.com/haycarbplcofficial" target="_blank">
                  <Image
                    src="/icons/Facebook.svg"
                    alt="Facebook"
                    width={30}
                    height={30}
                  />
                </a>
                <a href="https://youtube.com/@haycarbplc" target="_blank">
                  <Image
                    src="/icons/youtube.svg"
                    alt="YouTube"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <ul>
          <li>
            <a href="#">GDPR Compliance</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>
      <div className="bubble bubble--1"></div>
      <div className="bubble bubble--2"></div>
      <div className="bubble bubble--3"></div>
      <div className="bubble bubble--4"></div>
      <div className="bubble bubble--5"></div>
      <div className="bubble bubble--6"></div>
      <div className="bubble bubble--7"></div>
      <div className="bubble bubble--8"></div>
      <div className="bubble bubble--9"></div>
      <div className="bubble bubble--10"></div>
      <div className="bubble bubble--11"></div>
      <div className="bubble bubble--12"></div>
    </footer>
  );
};

const InnerPageFooter = () => {
  return (
    <footer className={"bg-black pt-10"}>
      {/* Background Image */}
      <div>
        {/* Logo in the middle */}
        <div className="flex items-center justify-center mb-10">
          <Image
            src="/images/logofooter.png"
            alt="Logo"
            width={200}
            height={100}
          />
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
                 <Link href="/haycarb-in-focus" className="" >
                  Haycarb in Focus
                </Link>
                <li>
                  <Link href="/financial">Financial Highlights</Link>
                </li>
                <li>
                  <Link href="/non-financial-highlights">Non-Financial Highlights</Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Links 2 */}
            <div className={styles.column}>
              <h3>Explore</h3>
              <ul>
               <li>
                  <Link href="/tailor-made-for-you">Chart Generator</Link>
                </li>
                <li>
                  <Link href="/tailor-made-for-you">Create Your Own Report</Link>
                </li>
                <li>
                  <Link href="/game">Finquest</Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Social Media */}
            <div className={styles.column}>
              <h3>Connect With Us</h3>
              <div className={styles.socialRow}>
                <a href="https://www.linkedin.com/company/haycarbplc/" target="_blank">
                  <Image
                    src="/icons/Likin.svg"
                    alt="Facebook"
                    width={30}
                    height={30}
                  />
                </a>
                <a href="https://web.facebook.com/haycarbplcofficial" target="_blank">
                  <Image
                    src="/icons/Facebook.svg"
                    alt="Twitter"
                    width={30}
                    height={30}
                  />
                </a>
                 <a href="https://youtube.com/@haycarbplc" target="_blank">
                  <Image
                    src="/icons/youtube.svg"
                    alt="YouTube"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <ul>
          <li>
            <a href="#">GDPR Compliance</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>
      <div className="bubble bubble--1"></div>
      <div className="bubble bubble--2"></div>
      <div className="bubble bubble--3"></div>
      <div className="bubble bubble--4"></div>
      <div className="bubble bubble--5"></div>
      <div className="bubble bubble--6"></div>
      <div className="bubble bubble--7"></div>
      <div className="bubble bubble--8"></div>
      <div className="bubble bubble--9"></div>
      <div className="bubble bubble--10"></div>
      <div className="bubble bubble--11"></div>
      <div className="bubble bubble--12"></div>
    </footer>
  );
};

const DefaultFooter = () => {
  return (
    <footer className={styles.defaultFooter}>
      <p>© 2025 Ceylon Gem Seekers. All rights reserved.</p>
      <ul>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Terms of Service</a>
        </li>
      </ul>
    </footer>
  );
};

export { HomeFooter, DefaultFooter, InnerPageFooter };
