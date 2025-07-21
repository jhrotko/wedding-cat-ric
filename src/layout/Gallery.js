import { isMobile } from "../constants";

const Gallery = ({imgs}) => {
    return (
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: !isMobile? "flex-start" : "center",
            flexWrap: "wrap",
            flexDirection: !isMobile? "row":"column",
          }}
        >
            {imgs.map(i => <img src={i.src} alt={i.alt}/> )}
        </div>
    );
}

export default Gallery;