import { LOCATION } from "../constants";
import Segment from "../layout/Segment";

const Location = () => {
  return (
    <Segment id={LOCATION.id} title={LOCATION.title} >
      <a href="https://www.instagram.com/quintadasuratesta/" target="_blank" rel="noopener noreferrer">Quinta da Suratesta, Beja, Portugal</a>
      <br/>
      data
      local
      hora de inicio 15:30
      tempo (weather)
      estacionamento
    </Segment>
  );
};

export default Location;
