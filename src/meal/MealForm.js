import { useRef } from "react";
import { Copo } from "../design/Images";
import { CONFIRM_PRESENCE, isMobile } from "../constants";

import "./MealForm.css";
import Segment from "../layout/Segment";

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
    <Segment id={CONFIRM_PRESENCE.id} title={CONFIRM_PRESENCE.title} Icon={<Copo/>}>
      <iframe
        ref={iframeRef}
        src="https://docs.google.com/forms/d/e/1FAIpQLSccXzWU1LRq8fN-Pt0w1ErbTVVevllB0GbNwO08QoBP1DPnzQ/viewform?embedded=true"
        width="100%"
        height={!isMobile ? "800" : "1000"}
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="iframe-meal"
        onLoad={handleIframeLoad}
      />
    </Segment>
  );
};

export default MealForm;
