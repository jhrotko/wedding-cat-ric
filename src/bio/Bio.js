import { BIO } from "../constants";
import { Anel } from "../design/Images";
import Segment from "../layout/Segment";

const Bio = () => (
  <Segment id={BIO.id} title={BIO.title} Icon={<Anel height="7rem" />}>
    <p>
      Na madrugada de 25 de Abril de 2024, em pleno deserto marroquino de
      Merzouga, tendo as estrelas por testemunhas e os camelos por vizinhos, ele
      tentava explicar-lhe a origem da matéria no Universo. As mãos dele
      aventuravam-se nos bolsos das calças. Procurava algo.
      <p>Ela - confusa.</p>
      <p>Ele - nervoso.</p>
      Finalmente, perdido entre os grãos de areia das calças, ele encontrava o
      anel! Foi debaixo de uma lua cheia e julgadora, de joelho na areia e
      coração aos pulos, que ele lançou a pergunta. Ela, entre vitupérios suaves
      de choque, respondeu com o "SIM!" mais estrondoso que alguma duna já
      ouvira. E assim, no meio do nada começou tudo.
    </p>
  </Segment>
);

export default Bio;
