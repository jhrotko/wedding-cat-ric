import { ARRIVE } from "../constants";

const Arrive = () => {
  return (
    <div id="arrive" className="card">
      <div
        style={{
          display: "flex",
        }}
      >
        <h2>{ARRIVE}</h2>
      </div>
      <p>
        A Quinta está localizada a cerca de 10 minutos (de carro) do centro de
        Beja. Para os mais ousados, e com mais tempo de antecedência, uma viagem
        a pé pela via pedonal também é possível!{" "}
      </p>
    </div>
  );
};

export default Arrive;
