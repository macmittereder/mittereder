const WorkSection = (props) => {
  let experience = props.experience;

  return (
    <div>
      <div className="flex flex-row">
        <p className="text-xl font-bold text-left">{experience.company}</p>
        <p className="text-xl">&nbsp;- {experience.location}</p>
      </div>
      <p className="text-xl">{experience.position}</p>
      <p className="text-md font-bold">{experience.time}</p>
      <ul className="ml-8">
        {experience.content.map((info) => (
          <li className="list-disc">{info}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkSection;
