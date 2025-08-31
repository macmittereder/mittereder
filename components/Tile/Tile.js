const Tile = (props) => {
  return (
    <div
      style={{ boxShadow: "0 4px 20px 3px rgb(0 0 0 / 20%)" }}
      className="lg:p-4 rounded-xl py-4 bg-white m-2 flex-1"
    >
      <p className="text-5xl text-center font-bold">{props.title}</p>
      {props.type === "wrk" ? (
        <div className="grid grid-cols-1 lg:grid-cols-2">{props.children}</div>
      ) : (
        <div className="p-4">{props.children}</div>
      )}
    </div>
  );
};

export default Tile;
