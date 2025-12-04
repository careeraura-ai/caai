import React from "react";
import Lottie from "lottie-react";

export default function LottieAvatar({ src, className = "", loop = true }) {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <Lottie
        animationData={src}
        loop={loop}
        autoplay={true}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
