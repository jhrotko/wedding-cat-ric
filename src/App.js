import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./Header";

import Location from "./location/Location";
import NavigationMenu from "./navbar/NavigationMenu";
import MealForm from "./meal/MealForm";
// import Timeline from "./timeline/Timeline";

const App = () => {
  const elementRef = useRef(null);
  const [shouldShowNav, setIsVisible] = useState(false);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={elementRef}>
        <Header />
      </div>

      <div id="body">
        {shouldShowNav && !isMobile ? (
          <div className="element-wrapper block md:hidden">
            <NavigationMenu />
          </div>
        ) : null}
        <div className="body-wrapper">
          <div className="element-wrapper">
            <Location />
          </div>
          <div className="element-wrapper">
            <MealForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
