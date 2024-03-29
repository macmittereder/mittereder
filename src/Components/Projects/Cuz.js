import ProjectFooter from "./ProjectFooter";
import ProjectHeader from "./ProjectHeader";
import ProjectRow from "./ProjectRow";
import icon from "../../images/d/dicon.png";
import img1 from "../../images/cz/cz1.png";
import img2 from "../../images/cz/cz2.png";

const Cuz = () => {
  return (
    <div className="flex bg-white items-start flex-1 justify-center flex-wrap p-2">
      <ProjectHeader
        title="Cuz"
        icon={icon}
        summary={`This is a React Native app developed to demonstrate a socket chat app. The app 
        connects users to a chatroom where they can only comminate by using the word 'cuz'. The idea
        came from the bro app from Silicon Valley and a couple friends that would call each other cuz.`}
        github="https://github.com/macmittereder/cuz"
      />
      <ProjectRow
        section1={{
          image: img1,
          text: `Adam sends a message to the group.`,
        }}
        section2={{
          image: img2,
          text: `Mac replies 'Thanks'`,
        }}
      />
      <ProjectFooter />
    </div>
  );
};

export default Cuz;
