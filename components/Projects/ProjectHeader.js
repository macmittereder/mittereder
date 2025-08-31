import Image from "next/image";

const ProjectHeader = (props) => {
  return (
    <div className="flex flex-col w-full">
      <p className="text-5xl text-center font-bold">{props.title}</p>
      {props.github ? (
        <a className="text-xl underline text-center" href={props.github}>
          See on Github
        </a>
      ) : (
        ""
      )}
      <div className="flex flex-col md:flex-row w-full items-center">
        <Image
          src={props.icon}
          width={320}
          height={320}
          className="flex md:float-left h-56 md:h-80 my-4"
          alt="icon"
        />
        <div className="flex flex-1 p-4 text-xl">
          <p>{props.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
