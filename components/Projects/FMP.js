// icon image will be used directly in src;
import ProjectFooter from "./ProjectFooter";
import ProjectHeader from "./ProjectHeader";

const FMP = () => {
  return (
    <div className="flex bg-white items-start flex-1 justify-center flex-wrap p-2">
      <ProjectHeader
        title="Fast Movie Photos"
        icon={icon}
        summary={`This app was a contractor project through Blast Off Apps developed for iOS using Xcode.  
        Fast Movie Photos is a website online that the client makes photo movies for their clients and posts  
        them on the website. The purpose of the app is for the client to be able to access the videos online 
        and adjust the playback speed as the video is playing. The videos were accessed using a link directly  
        to them with the media api provided by Apple.`}
      />
      <ProjectFooter />
    </div>
  );
};

export default FMP
