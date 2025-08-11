import React from "react";
import styles from "./FloatingButtons.module.css";
import Image from "next/image";

const FloatingButtons: React.FC = () => {
  return (
    <>
      {/* Left: User Button */}
      <button className={`${styles.floatingbtn} ${styles.leftbtn}`} aria-label="User">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
        </svg> */}
         <Image
                      src="/icons/assumability.png"
                      alt="assumability"
                      width={38}
                      height={38}
                      className="object-contain h-full"
                    />
      </button>

      {/* Right: Chat Button */}
      <button className={`${styles.floatingbtn} ${styles.rightbtn}`} aria-label="Chat">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg> */}
         <Image
                      src="/icons/ChatBot.png"
                      alt="assumability"
                      width={38}
                      height={38}
                      className="object-contain h-full"
                    />
      </button>
    </>
  );
};

export default FloatingButtons;