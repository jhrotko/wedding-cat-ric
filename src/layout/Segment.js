import { isMobile } from "../constants";

const Segment = ({ title, id, Icon, children }) => {
  return (
    <div id={id} className="card">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.1rem",
        }}
      >
        {Icon}
        <p className="card-title">{title}</p>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

export const UrlLink = ({ href, children }) => {
  return (
    <a
      href={href}
      target={!isMobile ? "_blank" : null}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default Segment;
