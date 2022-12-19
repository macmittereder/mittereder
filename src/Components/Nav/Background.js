import headerBackground from "../../images/codeBackground.png";

const Background = () => {
  return (
    <img
      className="fixed w-full h-full -z-10"
      src={headerBackground}
      alt="Background"
    />
  );
};

export default Background;
