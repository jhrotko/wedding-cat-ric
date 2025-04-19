import { LOCATION_TITLE } from "../constants";
import Map from "./Map";

const Location = () => {
  return (
    <div id="location" className="card">
      <h2>{LOCATION_TITLE}</h2>
      <p>Quinta da Suratesta, Beja</p>
      <Map />
    </div>
  );
};

export default Location;
