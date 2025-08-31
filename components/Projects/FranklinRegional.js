import ProjectHeader from "./ProjectHeader";
// icon image will be used directly in src
// img1 image will be used directly in src
// img2 image will be used directly in src
// img3 image will be used directly in src
// img4 image will be used directly in src
// img5 image will be used directly in src
// img6 image will be used directly in src
import ProjectRow from "./ProjectRow";
import ProjectFooter from "./ProjectFooter";

const FranklinRegional = () => {
  return (
    <div className="flex bg-white items-start flex-1 justify-center flex-wrap p-2">
      <ProjectHeader
        title="Franklin Regional"
        icon={icon}
        summary={`Created senior year of high school for Android using Eclipse. I developed this 
        app to make it easier to view the Franklin Regional school district website and bypass 
        their mobile version. Push notifications were also implemented using the Parse api to alert 
        users of delays and cancellations. This app uses a master detail view for a slide out menu 
        and a webview to display the different webpages.`}
      />
      <hr />
      <ProjectRow
        section1={{
          image: img1,
          text: `This is the home page of the Franklin Regional website and the first page you are greeted with.`,
        }}
        section2={{
          image: img2,
          text: `The main menu slides out from the side by either a swipe gesture or by tapping the icon in the top left corner.`,
        }}
      />
      <ProjectRow
        section1={{
          image: img3,
          text: `These are other links that people might be interested in visiting.`,
        }}
        section2={{
          image: img4,
          text: `This is an example of the user navigating to the high school's webpage.`,
        }}
      />
      <ProjectRow
        section1={{
          image: img5,
          text: `This is an example of the user navigating to one of the elementary school's webpage.`,
        }}
        section2={{
          image: img6,
          text: `This is the settings page where the user has the option to view the webpage as a desktop or as a mobile view.`,
        }}
      />
      <ProjectFooter />
    </div>
  );
};

export default FranklinRegional;
