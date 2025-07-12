import { Tita } from "../design/Images";
import { QUESTIONS } from "../constants";

const Questions = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "auto",
        }}
      >
        <Tita />
        <h2>{QUESTIONS}</h2>
      </div>
      <p>
        Se tiverem mais alguma questão, enviem-nos uma mensagem ou liguem-nos!
        Temos todo o gosto em ajudar com o que pudermos.
      </p>
      <ul>
        <li>Ricardo: (+351) 918181093</li>
        <li>Catarina: (+351) 966312351</li>
      </ul>
    </div>
  );
};

export default Questions;
