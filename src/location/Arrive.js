import { ARRIVE } from "../constants";
import Map from "./Map";
import Segment from "../layout/Segment";


const Arrive = () => {
  return (
    <Segment title={ARRIVE.title} id={ARRIVE.id}>
      <p>
        A Quinta está localizada a cerca de 10 minutos (de carro) do centro de
        Beja. Para os mais ousados, e com mais tempo de antecedência, uma viagem
        a pé pela via pedonal também é possível!{" "}
      </p>
      <Map />
    </Segment>

  );
};

export default Arrive;
