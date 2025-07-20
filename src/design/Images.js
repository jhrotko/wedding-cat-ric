import luzinhas from "../assets/luzinhas.png";
import noiva from "../assets/noiva.png";
import noivo from "../assets/noivo.png";
import anel from "../assets/anel.png";
import placa from "../assets/placa.png";
import copo from "../assets/copo.png";
import caozinho from "../assets/caozinho.png";
import data from "../assets/data.png";

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

export const Noiva = ({ height }) => (
  <img
    src={noiva}
    alt="noiva"
    style={{
      marginTop:"2rem",
      height,
    }}
  />
);
export const Noivo = ({ height }) => (
  <img
    src={noivo}
    alt="noivo"
    style={{
      height,
    }}
  />
);

export const Anel = ({ height }) => (
  <img
    src={anel}
    alt="anel"
    style={{
      height,
    }}
  />
);

export const Placa = ({height}) => (
  <img
    src={placa}
    alt="placa"
    style={{
      height,
      paddingLeft: "1.5rem",
    }}
  />
);

export const Copo = () => (
  <img
    src={copo}
    alt="copo"
    style={{
      height: "5rem",
    }}
  />
);

export const Tita = () => (
  <img
    src={caozinho}
    alt="caozinho"
    style={{
      height: "5rem",
    }}
  />
);

export const Data = ({height}) => (
  <img
    src={data}
    alt="data"
    style={{
      height,
    }}
  />
);
