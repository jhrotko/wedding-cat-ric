import { LOCATION_TITLE } from "../constants";
import { Placa, Quinta } from "../design/Images";
import Segment from "../layout/Segment";
import Map from "./Map";

const Location = () => {
  return (
    <Segment bio="location" title={LOCATION_TITLE} >
      <a href="https://www.instagram.com/quintadasuratesta/" target="_blank" rel="noopener noreferrer">Quinta da Suratesta, Beja, Portugal</a>
      <br/>
      data
      local
      hora de inicio 15:30
      tempo (weather)
      estacionamento
      <Map />
    </Segment>
  );
};

export default Location;
