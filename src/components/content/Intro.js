import React from "react";
import "./styles/intro.css";
function Intro( {handleLinkClick} ) {
  return (
    <div className="intro">
      <img
        width={424}
        height={624}
        src="https://nahirna-cake.com.ua/_next/image?url=%2Fassets%2Fhero-main.webp&w=1920&q=75"
      />
      <div className="text">
        <h1>Try the most delicious</h1>
        <p>
          Desserts from natural products without preservatives and flavorings.
          Here everyone will find a cheesecake for themselves
        </p>
        <div className="button"> 
        <button onClick={() => handleLinkClick('#catalog')}>Go to catolog</button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
