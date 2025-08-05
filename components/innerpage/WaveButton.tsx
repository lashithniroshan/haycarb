import React from "react";
import styles from "./WaveButton.module.css";

interface WaveButtonProps {
  title: string;
  onBtnClick?: () => void;
}

const WaveButton = ({ title, onBtnClick }: WaveButtonProps) => {
  return (
    <button
      className={`rounded-full transition ${styles.btnCustomInner} ${styles.waveBtnInner} btn-custom-mobile`}
      onClick={onBtnClick}
    >
      {title}
    </button>
  );
};

export default WaveButton;
