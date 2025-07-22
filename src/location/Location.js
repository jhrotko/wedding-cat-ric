import { LOCATION } from "../constants";
import { Placa } from "../design/Images";
import Gallery from "../layout/Gallery";
import Segment, { UrlLink } from "../layout/Segment";

const Location = () => {
  return (
    <Segment
      id={LOCATION.id}
      title={LOCATION.title}
      Icon={<Placa height="6rem" />}
    >
      <p>
        Na{" "}
        <UrlLink href="https://www.instagram.com/quintadasuratesta/">
          {" "}
          Quinta da Suratesta
        </UrlLink>
        , em Beja (Alentejo) no dia 4 de outubro de 2025 (sábado). <br />
        As celebrações terão início às 15h30! 😊
      </p>

      <br />
      <UrlLink href="https://www.instagram.com/quintadasuratesta/">
        <Gallery
          imgs={[
            {
              src: "https://cdn0.casamentos.pt/vendor/3317/3_2/1280/jpg/dscn0181_6_113317_v1.jpeg",
              alt: "quinta-da-suratesta-1",
            },
            {
              src: "https://cdn0.casamentos.pt/vendor/3317/3_2/960/jpg/dscn0197_6_113317_v1.jpeg",
              alt: "quinta-da-suratesta-2",
            },
            {
              src: "https://cdn0.casamentos.pt/vendor/3317/original/960/jpeg/whatsapp-image-2024-06-10-at-11-49-59-4_6_113317-171883227813564.jpeg",
              alt: "quinta-da-suratesta-4",
            },
            {
              src: "https://cdn0.casamentos.pt/vendor/3317/3_2/960/jpg/p7133366_6_113317_v1.jpeg",
              alt: "quinta-da-suratesta-3",
            },
          ]}
        />
      </UrlLink>
    </Segment>
  );
};

export default Location;
