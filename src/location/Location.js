import { LOCATION_TITLE } from "../constants";
import { Placa } from "../design/Images";
import Map from "./Map";

const Location = () => {
  return (
    <div id="location" className="card">
      <div
        style={{
          display: "flex",
        }}
      >
        <Placa />
        <h2>{LOCATION_TITLE}</h2>
      </div>
      <p>Quinta da Suratesta, Beja</p>
      <Map />
    </div>
  );
};

export default Location;
