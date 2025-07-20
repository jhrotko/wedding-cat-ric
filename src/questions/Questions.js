import { Tita } from "../design/Images";
import { QUESTIONS } from "../constants";
import Segment from "../layout/Segment";

const Questions = () => {
  return (
    <Segment id={QUESTIONS.id} title={QUESTIONS.title} Icon={<Tita/>}>
      <p>
        Se tiverem mais alguma questão, enviem-nos uma mensagem ou liguem-nos!
        Temos todo o gosto em ajudar com o que pudermos.
      </p>
      <ul>
        <li>Ricardo: (+351) 918181093</li>
        <li>Catarina: (+351) 966312351</li>
      </ul>
    </Segment>
  );
};

export default Questions;
