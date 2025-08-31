import Image from "next/image";

const ProjectRow = (props) => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly w-full">
      <div className="flex flex-1">
        <Image
          className="flex flex-1 w-24 p-2"
          alt="Screenshot"
          src={props.section1.image}
          width={96}
          height={96}
        />
        <p className="flex flex-1 py-2 text-xl">{props.section1.text}</p>
      </div>
      <div className="flex flex-1">
        {props.section2.image ? (
          <>
            <p className="flex flex-1 py-2 md:items-end text-xl">
              {props.section2.text}
            </p>
            <Image
              className="flex flex-1 w-24 p-2"
              alt="Screenshot"
              src={props.section2.image}
              width={96}
              height={96}
            />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProjectRow;
