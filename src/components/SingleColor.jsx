/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [copy, setCopy] = useState(false);
  rgb = rgb.join(",");
  hexColor = `#${hexColor}`;
  const copyHex = () => {
    navigator.clipboard.writeText(hexColor);
    setCopy(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
        setCopy(false)
    }, 2000);
    return () => clearTimeout(timeout);
  }, [copy]);
  return (
    <div
      onClick={copyHex}
      className={`w-36 h-36 p-2 cursor-pointer ${
        index > 10 ? "text-white" : ""
      }`}
      style={{ backgroundColor: `rgb(${rgb})` }}
    >
      <p>{weight}%</p>
      <p>{hexColor}</p>
      {copy && <p className="opacity-60">Copied to clipboard</p>}
    </div>
  );
};
