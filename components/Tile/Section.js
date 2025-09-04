import Image from "next/image";

const WorkSection = (props) => {
  let experience = props.experience;

  return (
    <div>
      <div className="flex items-center justify-center w-auto h-64">
        {experience.logo ? (
          <Image
            src={experience.logo}
            alt="Company Logo"
            width={200}
            height={200}
            className={`${
              experience.school ? "w-auto" : "w-full"
            } h-auto text-center`}
          />
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col md:flex-row">
        <p className="text-2xl font-bold text-left">
          {experience.company ?? experience.school}
        </p>
        <p className="text-2xl md:ml-2">
          <span className="hidden md:inline">{" - "}</span>
          {experience.location}
        </p>
      </div>
      <p className="text-2xl underline">{experience.position}</p>
      <div className="flex flex-col md:flex-row justify-start">
        <p className="text-lg font-bold mr-1">{experience.time}</p>
        <p className="text-lg font-bold">{experience.timeSummary ?? ""}</p>
      </div>
      <ul className="ml-8">
        {experience.content.map((info, idx) => (
          <li className="list-disc text-md" key={idx}>
            {info}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkSection;
