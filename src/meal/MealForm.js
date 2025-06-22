import { useRef } from "react";
import { Copo } from "../design/Images";
import { CONFIRM_PRESENCE, isMobile } from "../constants";

import "./MealForm.css";

const MealForm = () => {
  const iframeRef = useRef(null);

  const handleIframeLoad = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      // Safely access and style the body inside the iframe
      iframe.style.fontFamily = "Tahoma";
      console.log("hehehehe", iframeRef);
    }
    console.log("Nooooo", iframeRef);
  };

  return (
    <div id="meal" className="card">
      <div
        style={{
          display: "flex",
        }}
      >
        <Copo />
        <h2>{CONFIRM_PRESENCE}</h2>
      </div>
      <iframe
        ref={iframeRef}
        src="https://docs.google.com/forms/d/e/1FAIpQLSccXzWU1LRq8fN-Pt0w1ErbTVVevllB0GbNwO08QoBP1DPnzQ/viewform?embedded=true"
        width={!isMobile ? "640" : "380"}
        height={!isMobile ? "800" : "600"}
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="iframe-meal"
        onLoad={handleIframeLoad}
      />
    </div>
  );
};

export default MealForm;
