import { LOCATION, isMobile } from "../constants";
import { Placa } from "../design/Images";
import Segment from "../layout/Segment";

const Location = () => {
  return (
    <Segment id={LOCATION.id} title={LOCATION.title} Icon={<Placa height="6rem"/>}>
      <p>
        Na{" "}
        <a
          href="https://www.instagram.com/quintadasuratesta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Quinta da Suratesta
        </a>
        , em Beja (Alentejo) no dia 4 de outubro de 2025 (sábado). <br />
        As celebrações terão início às 15h30! 😊
      </p>

      <br />
      <a
        href="https://www.instagram.com/quintadasuratesta/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: !isMobile? "flex-start" : "center",
            flexWrap: "wrap",
            flexDirection: !isMobile? "row":"column",
          }}
        >
          <img
            src="https://cdn0.casamentos.pt/vendor/3317/3_2/1280/jpg/dscn0181_6_113317_v1.jpeg"
            alt="quinta-da-suratesta-1"
          />
          <img
            src="https://cdn0.casamentos.pt/vendor/3317/3_2/960/jpg/dscn0197_6_113317_v1.jpeg"
            alt="quinta-da-suratesta-2"
          />
          <img
            src="https://cdn0.casamentos.pt/vendor/3317/original/960/jpeg/whatsapp-image-2024-06-10-at-11-49-59-4_6_113317-171883227813564.jpeg"
            alt="quinta-da-suratesta-4"
          />
          <img
            src="https://cdn0.casamentos.pt/vendor/3317/3_2/960/jpg/p7133366_6_113317_v1.jpeg"
            alt="quinta-da-suratesta-3"
          />
        </div>
      </a>
    </Segment>
  );
};

export default Location;
