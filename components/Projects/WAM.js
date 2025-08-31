// icon image will be used directly in src;
import ProjectFooter from "./ProjectFooter";
import ProjectHeader from "./ProjectHeader";

const WAM = () => {
  return (
    <div className="flex bg-white items-start flex-1 justify-center flex-wrap p-2">
      <ProjectHeader
        title="Words and Music"
        icon={icon}
        summary={`This app was a contractor project through Blast Off Apps developed for iOS with Xcode. 
        Words and Music is a book store in Wheeling,West Virginia. I was responsible for porting the 
        Android version to iOS. The final product of this app uses the Parse api to access the Parse 
        database where I stored their book collection. A Paypal api was also implemented so people have 
        more options to pay when buying a book from here.`}
      />
      <ProjectFooter />
    </div>
  );
};

export default WAM
