import { useEffect, useRef, useState } from "react";
import "./App.css";

import Countdown from "./time/Countdown";
import Location from "./location/Location";
import MealFormFacade from "./meal/MealFormFacade";
import NavigationMenu from "./navbar/NavigationMenu";
import Timeline from "./timeline/Timeline";

const Header = () => {
  return (
    <header>
      <h2>Catarina e Ricardo vão casar!</h2>
      <p>4 Outubro 2025</p>
      <Countdown
        timeTillDate="10 05 2025, 14:00"
        timeFormat="MM DD YYYY, h:mm"
      />
      <a href="#body" className="headerButton" aria-current="page">
        <p>Mostrar detalhes</p>
      </a>
    </header>
  );
};

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
        ): null}
        <div className="body-wrapper">
          <div className="element-wrapper">
            <Location />
          </div>
          <div className="element-wrapper">
            <MealFormFacade />
          </div>

          <div className="element-wrapper">
            <Timeline />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
