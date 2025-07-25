import { BIO } from "../constants";
import { Tita } from "../design/Images";
import Gallery from "../layout/Gallery";
import Segment from "../layout/Segment";
import foto1 from "../assets/foto-1.jpeg";
import foto2 from "../assets/foto-2.jpeg";
import episodio from "../assets/episodio-1.png";
import episodio2 from "../assets/episodio-2.png";

const Bio = () => (
  <Segment id={BIO.id} title={BIO.title} Icon={<Tita />}>
    <p>
      Na madrugada de 25 de Abril de 2024, em pleno deserto marroquino de
      Merzouga, tendo as estrelas por testemunhas e os camelos por vizinhos, ele
      tentava explicar-lhe a origem da matéria no Universo. As mãos dele
      aventuravam-se nos bolsos das calças. Procurava algo.
      <ImageCenter src={episodio} alt="episodio1" />
      <p>Ela - confusa.</p>
      <p>Ele - nervoso.</p>
      Finalmente, perdido entre os grãos de areia das calças, ele encontrava o
      anel! Foi debaixo de uma lua cheia e julgadora, de joelho na areia e
      coração aos pulos, que ele lançou a pergunta.{" "}
    </p>
    <ImageCenter src={episodio2} alt="episodio2" />
    <p>
      Ela, entre vitupérios suaves de choque, respondeu com o "SIM!" mais
      estrondoso que alguma duna já ouvira. E assim, no meio do nada começou
      tudo.
    </p>
    <Gallery
      imgs={[
        {
          src: foto1,
          alt: "catarina-e-ricardo-felizes",
        },
        {
          src: foto2,
          alt: "catarina-e-ricardo-anel",
        },
        // { src: foto3, alt: "catarina-e-ricardo-felizes" },
        // {
        //   src: foto4,
        //   alt: "catarina-e-ricardo-bue-felizes",
        // },
      ]}
    />
  </Segment>
);

const ImageCenter = ({ src, alt }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center"}}>
      <img className="single-image" src={src} alt={alt} />
    </div>
  );
};

export default Bio;
