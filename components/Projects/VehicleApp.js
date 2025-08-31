// icon image will be used directly in src;
import ProjectFooter from "./ProjectFooter";
import ProjectHeader from "./ProjectHeader";

const VehicleApp = () => {
  return (
    <div className="flex bg-white items-start flex-1 justify-center flex-wrap p-2">
      <ProjectHeader
        title="Vehicle App"
        icon={icon}
        summary={`This was a contractor project through Blast off apps developed for Android using 
        Android Studio and iOS using Xcode. The app developed to provide the client with a way to 
        store information about vehicles to a single database so it was accessible to anyone that 
        is using the app. This was achieved using the Parse api to retrieve data from the Parse database.`}
      />
      <ProjectFooter />
    </div>
  );
};

export default VehicleApp
