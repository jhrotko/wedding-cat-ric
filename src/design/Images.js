import luzinhas from "../assets/luzinhas.png";
import noiva from "../assets/noiva.png";
import noivo from "../assets/noivo.png";
import anel from "../assets/anel.png";

export const Luzinhas = () => (
  <img
    src={luzinhas}
    alt="luzinahs"
    style={{
      width: "100%",
      height: "auto",
      display: "block",
      maxWidth: "100%",
    }}
  />
);

export const Noiva = () => (
  <img
    src={noiva}
    alt="noiva"
    style={{
      // backgroundColor: "#f0f0f0",
      height: "22rem",
    }}
  />
);
export const Noivo = () => (
  <img
    src={noivo}
    alt="noivo"
    style={{
      height: "22rem",
    }}
  />
);

export const Anel = () => (
  <img
    src={anel}
    alt="anel"
    style={{
      height: "5rem",
    }}
  />
);
