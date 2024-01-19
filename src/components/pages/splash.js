import React, { useState, useEffect } from "react";
import SOGlog from "../images/SOGType.png"
import TAF from "../images/10_5logo_white.png"

export default function Splash() {
  const [theme, setTheme] = React.useState("mydefault");
  const toggleTheme = () => {
    setTheme(theme === "mydefault" ? "mylight" : "mydefault");
  };

  React.useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  });

  return (
    <>
      <div className="flex flex-col justify-center items-center h-scree">
      <img src={SOGlog} alt="Logo" className="h-14 sm:h-36 w-auto" />
      <h2 className="text-5xl sm:text-7xl font-oswald">Is Now</h2>
      <img src={TAF} alt="Logo" className="h-16 sm:h-36 w-auto  m-5 sm:m-10" />
      <a href="https://10and5creative.com/" className="sm:text-3xl text-2xl font-oswald underline">See Our New site</a>
      </div>
     

    </>
  );
}
