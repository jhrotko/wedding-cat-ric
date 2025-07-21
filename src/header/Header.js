import { isMobile } from "../constants";
import { Data, Luzinhas, Noiva, Noivo } from "../design/Images";
import Countdown from "../time/Countdown";

const Header = () => {
  return (
    <header>
      <Luzinhas />
      {isMobile ? <TitleMobile /> : <Title />}
    </header>
  );
};

const TitleMobile = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Noiva height="10rem" />
        <Noivo height="12rem" />
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          alignItems: "center"
        }}
      >
        <h2
          style={{
            textAlign: "center",
          }}
        >
          A Catarina e o Ricardo <br />
          vão casar!
        </h2>
        <Data height="6rem" />
        <Countdown
          timeTillDate="10 05 2025, 14:00"
          timeFormat="MM DD YYYY, h:mm"
        />
      </div>
    </>
  );
};

const Title = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
      }}
    >
      <Noiva height="22rem" />
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          A Catarina e o Ricardo vão casar!
        </h2>
        {/* <p>4 de Outubro, 2025</p> */}
        <Data height="15rem" />
        <Countdown
          timeTillDate="10 05 2025, 14:00"
          timeFormat="MM DD YYYY, h:mm"
        />
        <div
          style={{
            display: "flex",
          }}
        >
          {/* <a href="#body" className="headerButton" aria-current="page">
            <p>Mostrar detalhes</p>
          </a> */}
        </div>
      </div>
      <Noivo height="25rem" />
    </div>
  );
};

export default Header;
