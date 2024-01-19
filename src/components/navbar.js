import React, { useState, useEffect } from "react";


export default function NavBar() {
 

  return (
    <nav className="py-10 px-4 sm:px-6 md:mx-20 md:my-16 flex justify-between items-center">
    
      {/* Responsive menu */}
      <div className="text-right">
        <a
          href="mailto:admin@10and5creative.com"
          className="contact font-oswald text-lg md:text-xl"
        >
          CONTACT US
        </a>
      </div>
    </nav>
  );
}
