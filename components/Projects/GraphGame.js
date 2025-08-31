import ProjectHeader from "./ProjectHeader";
// icon image will be used directly in src;
// img1 image will be used directly in src;
// img2 image will be used directly in src;
// img3 image will be used directly in src;
// img4 image will be used directly in src;
// img5 image will be used directly in src;
// img6 image will be used directly in src;
import ProjectRow from "./ProjectRow";
import ProjectFooter from "./ProjectFooter";

const GraphGame = () => {
  return (
    <div className="flex bg-white items-start flex-1 justify-center flex-wrap p-2">
      <ProjectHeader
        title="Graph Game"
        icon={icon}
        summary={`This app was developed sophomore year in college for a Software Engineer 
        class forAndroid using Android Studio. I was the software lead on this project with 
        5 other classmates working on this project. The goal of this app was a game thought 
        up by a math department teacher to move "pebbles" around a map that was created using 
        graph theory to the end node to win the game. The game was developed to be a two player 
        game but an AI element was developed in my free time to create a single player mode.`}
      />
      <hr />
      <ProjectRow
        section1={{
          image: img1,
          text: `This is the menu users are greeted with when opening the app. From this menu users can start the game and pick which map they want to play.`,
        }}
        section2={{
          image: img2,
          text: `The about menu helps the user understand how the game is played.`,
        }}
      />
      <ProjectRow
        section1={{
          image: img3,
          text: `When starting the game the user is allowed to pick a different board set up that they prefer.`,
        }}
        section2={{
          image: img4,
          text: `This is an example of one of the board layouts. There is also a button in the bottom corner that allows single player mode to have the computer make the defender move.`,
        }}
      />
      <ProjectRow
        section1={{
          image: img5,
          text: `This is another example of a board layout.`,
        }}
        section2={{
          image: img6,
          text: `When the game is won by either user this display will appear to restart the game or choose a different map.`,
        }}
      />
      <ProjectFooter />
    </div>
  );
};

export default GraphGame
