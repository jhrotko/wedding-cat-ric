import { Anel, Luzinhas, Noiva, Noivo } from "./design/Images";
import Countdown from "./time/Countdown";

const Header = () => {
  return (
    <header>
      <Luzinhas />
      <div
        style={{
          display: "flex",
          gap: "2rem",
        }}
      >
        <Noiva />
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
          }}
        >
          <h2>A Catarina e o Ricardo vão casar!</h2>
          <p>4 Outubro 2025</p>
          <Countdown
            timeTillDate="10 05 2025, 14:00"
            timeFormat="MM DD YYYY, h:mm"
          />
          <div
            style={{
              display: "flex",
            }}
          >
            <a href="#body" className="headerButton" aria-current="page">
              <p>Mostrar detalhes</p>
            </a>
            <Anel />
          </div>
        </div>
        <Noivo />
      </div>
    </header>
  );
};

export default Header;
