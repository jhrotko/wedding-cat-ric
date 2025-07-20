const Segment = ({title, id, Icon, children}) => {
  return (
    <div id={id} className="card">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem"
        }}
        >
          {Icon}
        <p className="card-title">{title}</p >
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Segment;
