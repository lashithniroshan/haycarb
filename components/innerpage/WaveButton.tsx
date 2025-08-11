import React from "react";
import styles from "./WaveButton.module.css";

interface WaveButtonProps {
  title: string;
  onBtnClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  isActive?: boolean;
  icon?: React.ReactNode;
}

const WaveButton = ({
  title,
  onBtnClick,
  style = {},
  className,
  isActive = false,
  icon,
}: WaveButtonProps) => {
  return (
    <button
      className={`rounded-full transition flex items-center justify-center ${
        styles.btnCustomInner
      } ${styles.waveBtnInner} ${
        isActive ? styles.active : ""
      } btn-custom-mobile ${className}`}
      onClick={onBtnClick}
      style={style}
    >
      {icon}
      {title}
    </button>
  );
};

export default WaveButton;
