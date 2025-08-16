// components/Footer.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
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
              <p>No: 400, Deans Road, Colombo 10,</p>
              <p>Sri Lanka</p>
              <p>Tel: +94 112 627 000</p>
              <p>Email: inquiries@haycarb.com</p>
            </div>

            {/* Column 2: Links 1 */}
            <div className={styles.column}>
              <ul>
                <li>
                  <Link
                    href="pdf/Performance Highlights.pdf"
                    target="_blank"
                    className=""
                  >
                    Performance Highlights
                  </Link>
                </li>
                <li>
                  <Link href="pdf/Financial Statements.pdf" target="_blank">
                    Financial Statements
                  </Link>
                </li>
                <li>
                  <Link href="/pdf/Board-of-Directors.pdf" target="_blank">
                    Leadership Message
                  </Link>
                </li>
                <li>
                  <Link
                    href="pdf/tbc/Strategy and Resource Allocation.pdf"
                    target="_blank"
                  >
                    Our Strategy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Links 2 */}
            <div className={styles.column}>
              <ul>
                <li>
                  <Link
                    href="pdf/Segment Review and Analysis.pdf"
                    target="_blank"
                  >
                    Segmental Review
                  </Link>
                </li>
                <li>
                  <Link href="pdf/ESG Highlights.pdf" target="_blank">
                    ESG Highlights
                  </Link>
                </li>
                <li>
                  <Link href="pdf/CorporateGovernance.pdf" target="_blank">
                    Corporate Governance
                  </Link>
                </li>
                <li>
                  <Link href="pdf/FAQs.pdf">FAQs</Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Social Media */}
            <div className={styles.column}>
              <div className={styles.socialRow}>
                <a
                  href="https://www.linkedin.com/company/haycarbplc/"
                  target="_blank"
                >
                  <Image
                    src="/icons/Likin.svg"
                    alt="Linkin"
                    width={30}
                    height={30}
                  />
                </a>
                <a
                  href="https://web.facebook.com/haycarbplcofficial"
                  target="_blank"
                >
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
              <p>No: 400, Deans Road, Colombo 10,</p>
              <p>Sri Lanka</p>
              <p>Tel: +94 112 627 000</p>
              <p>Email: inquiries@haycarb.com</p>
            </div>

            {/* Column 2: Links 1 */}
            <div className={styles.column}>
              <ul>
                <li>
                  <Link
                    href="pdf/Performance Highlights.pdf"
                    target="_blank"
                    className=""
                  >
                    Performance Highlights
                  </Link>
                </li>
                <li>
                  <Link href="pdf/Financial Statements.pdf" target="_blank">
                    Financial Statements
                  </Link>
                </li>
                <li>
                  <Link href="/pdf/Board-of-Directors.pdf" target="_blank">
                    Leadership Message
                  </Link>
                </li>
                <li>
                  <Link
                    href="pdf/tbc/Strategy and Resource Allocation.pdf"
                    target="_blank"
                  >
                    Our Strategy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Links 2 */}
            <div className={styles.column}>
              <ul>
                <li>
                  <Link
                    href="pdf/Segment Review and Analysis.pdf"
                    target="_blank"
                  >
                    Segmental Review
                  </Link>
                </li>
                <li>
                  <Link href="pdf/ESG Highlights.pdf" target="_blank">
                    ESG Highlights
                  </Link>
                </li>
                <li>
                  <Link href="pdf/CorporateGovernance.pdf" target="_blank">
                    Corporate Governance
                  </Link>
                </li>
                <li>
                  <Link href="pdf/FAQs.pdf">FAQs</Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Social Media */}
            <div className={styles.column}>
              <div className={styles.socialRow}>
                <a
                  href="https://www.linkedin.com/company/haycarbplc/"
                  target="_blank"
                >
                  <Image
                    src="/icons/Likin.svg"
                    alt="Facebook"
                    width={30}
                    height={30}
                  />
                </a>
                <a
                  href="https://web.facebook.com/haycarbplcofficial"
                  target="_blank"
                >
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
