import { Anel } from "../design/Images";
import { QUESTIONS, GIFT } from "../constants";
import Segment from "../layout/Segment";

const Questions = () => {
  return (
    <div style={{ paddingBottom: "5rem" }}>
      <Segment
        id={QUESTIONS.id}
        title={QUESTIONS.title}
        Icon={<Anel height="5rem" />}
      >
        <p>
          Se tiverem mais alguma questão, enviem-nos uma mensagem ou liguem-nos!
          Temos todo o gosto em ajudar com o que pudermos.
        </p>
        <ul>
          <li>Ricardo: (+351) 918181093</li>
          <li>Catarina: (+351) 966312351</li>
        </ul>
      </Segment>
    </div>
  );
};

export const Gift = () => {
  return (
    <Segment title={GIFT.title} id={GIFT.id}>
      <p>
        Não temos nenhuma lista de presentes, mas se quiserem ajudar com uma
        contribuição para a viagem de Lua de Mel ao nosso destino de sonho – o
        Japão – podem fazer-nos chegar diretamente ou através do IBAN:
      </p>
      <ul>
        <li>Ricardo: (+351) 918181093</li>
        <li>Catarina: (+351) 966312351</li>
      </ul>
    </Segment>
  );
};

export default Questions;
