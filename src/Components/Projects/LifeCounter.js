import "./Projects.css";
import icon from "../../images/lc/lcicon.png";
import img1 from "../../images/lc/lc1.png";
import img2 from "../../images/lc/lc2.png";
import img3 from "../../images/lc/lc3.png";
import img4 from "../../images/lc/lc4.png";
import img5 from "../../images/lc/lc5.png";
import img6 from "../../images/lc/lc6.png";
import img7 from "../../images/lc/lc7.png";
import img8 from "../../images/lc/lc8.png";
import ProjectHeader from "./ProjectHeader";
import ProjectRow from "./ProjectRow";

const LifeCounter = () => {
  return (
    <div className="content">
      <ProjectHeader
        title="Life Counter"
        icon={icon}
        summary={`Created freshman year of college for Android using Android Studio. 
        The idea of this app came from playing the card gameMagic the Gathering with 
        friends and either moving our life counter dice or not having the correct token 
        cards when playing. This app is a solution to these problems by keeping track of 
        life points and token cards for each player. Another feature of the app is the 
        customability of screen orientation. The screen can either be portrait facing one 
        player or the one side can be flipped so both players can adjust their own life points 
        and tokens. The feature that makes this app unique is the ability to save game and view 
        how each player lost life points. THis was achieved by creating a text file and writing 
        output to it when the points were changed. When the game is reviewed the points are 
        clumped together based on player, if points were lost or gained and when it happened.`}
      />
      <hr />
      <ProjectRow
        section1={{
          image: img1,
          text: `This is the main display for the app. The life counter is located in the middle of the screen with a display and an 'Add Token' button for each player.`,
        }}
        section2={{
          image: img2,
          text: `Names can easily be customized for each player by tapping on the name.`,
        }}
      />
      <ProjectRow
        section1={{
          image: img3,
          text: `Using the up and down arrows above and below the life counter will change the counter.`,
        }}
        section2={{
          image: img4,
          text: `Tapping on the 'Add Token' button will bring up an alert to allow the user to enter the power and toughness for the token.`,
        }}
      />
      <ProjectRow
        section1={{
          image: img5,
          text: `When clicking the save button the token will appear on the players side that it was created on.`,
        }}
        section2={{
          image: img6,
          text: `The top right menu presents the user with options that will help during the game such as rolling dice and flipping a coin.`,
        }}
      />
      <ProjectRow
        section1={{
          image: img7,
          text: `The screen can be flipped by pressing on rotate in the menu. This allows each player to adjust their own life counter.`,
        }}
        section2={{
          image: img8,
          text: `When 'Review Game' is pressed this screen will appear showing the players how many lives have been gained or lost throughout the game.`,
        }}
      />
    </div>
  );
};

export default LifeCounter;
