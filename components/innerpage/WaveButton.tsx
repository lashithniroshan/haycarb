import React from "react";
import styles from "./WaveButton.module.css";

interface WaveButtonProps {
  title: string;
  onBtnClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
}

const WaveButton = ({
  title,
  onBtnClick,
  style = {},
  className,
}: WaveButtonProps) => {
  return (
    <button
      className={`rounded-full transition ${styles.btnCustomInner} ${styles.waveBtnInner} btn-custom-mobile ${className}`}
      onClick={onBtnClick}
      style={style}
    >
      {title}
    </button>
  );
};

export default WaveButton;
