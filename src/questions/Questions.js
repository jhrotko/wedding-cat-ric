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
          <li>Ricardo: (+351) 919181093</li>
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
        Não temos nenhuma lista de presentes! A presença dos nossos familiares e
        amigos é o melhor que podemos receber! 😊 No entanto, se nos quiserem
        ajudar a realizar a nossa viagem de sonho para o 🇯🇵 Japão 🇯🇵 podem
        fazer-nos chegar diretamente ou através do IBAN:
      </p>
      <ul>
        <li>Ricardo: PT50003503730069707163022</li>
        <li>Catarina: PT50003501470006086480007</li>
      </ul>
    </Segment>
  );
};

export default Questions;
