import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "../header/Header";

import Location from "../location/Location";
import NavigationMenu from "../navbar/NavigationMenu";
import MealForm from "../meal/MealForm";
import Arrive from "../location/Arrive";
import Places from "../location/Places";
import Questions from "../questions/Questions";
import Bio from "../bio/Bio";

const App = () => {
  const elementRef = useRef(null);
  const [shouldShowNav, setIsVisible] = useState(false);
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      setIsVisible(window.innerWidth > 1261);
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting && window.innerWidth > 1261);
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
      resizeObserver.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
        resizeObserver.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={elementRef}>
        <Header />
      </div>

      <div id="body">
        {shouldShowNav ? (
          <div className="element-wrapper block md:hidden">
            <NavigationMenu />
          </div>
        ) : null}
        <div className="body-wrapper">
          <div className="element-wrapper">
            <Bio />
          </div>
          <div className="element-wrapper">
            <Location />
          </div>
          <div className="element-wrapper">
            <Arrive />
          </div>
          <div className="element-wrapper">
            <Places />
          </div>
          <div className="element-wrapper">
            <MealForm />
          </div>
          <div className="element-wrapper">
            <Questions />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
