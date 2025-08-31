// icon image will be used directly in src;
// img1 image will be used directly in src;
// img2 image will be used directly in src;
// img3 image will be used directly in src;
// img4 image will be used directly in src;
// img5 image will be used directly in src;
// img6 image will be used directly in src;
import ProjectHeader from "./ProjectHeader";
import ProjectRow from "./ProjectRow";
import ProjectFooter from "./ProjectFooter";

const RPS = () => {
  return (
    <div className="flex bg-white items-start flex-1 justify-center flex-wrap p-2">
      <ProjectHeader
        title="Rock Paper Scissors"
        icon={icon}
        summary={`This app was developed junior year of high school for Android using eclipse. 
        The idea of this app was a proof of concept to develop my first app and publish it on 
        the play store. During a java class we developed a rock, paper, scissors game with command 
        line style input so I ported it to be more interactive in an app setting.`}
      />
      <hr />
      <ProjectRow
        section1={{
          image: img1,
          text: `This view is the main menu that you are greeted with when opening the app.`,
        }}
        section2={{
          image: img2,
          text: `This is the single player view where you can make your selection off the bottom 3 choices.`,
        }}
      />
      <ProjectRow
        section1={{
          image: img3,
          text: `The player has made the choice of the scissors and the computer has chosen rock, so the person would lose in this case.`,
        }}
        section2={{
          image: img4,
          text: `This time the player chose rock and the computer had chosen scissors so the person would win.`,
        }}
      />
      <ProjectRow
        section1={{
          image: img5,
          text: `This is the stats screen where all the stats are stored.`,
        }}
        section2={{
          image: img6,
          text: `This view is the preferences menu where you can change the font in game. You have the option to keep track of your stats and you can also clear stats data.`,
        }}
      />
      <ProjectFooter />
    </div>
  );
};

export default RPS
