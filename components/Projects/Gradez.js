import Image from 'next/image'
import ProjectHeader from "./ProjectHeader"
// icon image will be used directly in src
// databaseIcon1 image will be used directly in src
// databaseIcon2 image will be used directly in src
import ProjectFooter from "./ProjectFooter"

const Gradez = () => {
  return (
    <div className="flex bg-white items-start flex-1 justify-center flex-wrap p-2">
      <ProjectHeader
        title="Gradez"
        icon={icon}
        summary={`This app was developed for my capstone project for Saint Vincent College 
        using Android Studio and Firebase. Gradez allows users to track their grades for classes 
        that are accumulative or weighted. Firebase is used to manage users and for a database. 
        Below is a representation of my capstone project poster.`}
      />
      <div className="flex w-full content-center flex-col lg:flex-row">
        <div className="flex flex-col flex-1">
          <h2 className="text-center font-bold text-2xl">Abstract</h2>
          <p className="text-lg">
            Students often have trouble keeping track of grades and some
            teachers don't use the tools provided to post grades online for the
            students to view. Gradez is a mobile application developed for the
            Android platform to solve this dilemma. This application calculates
            class grades that are either accumulative points or in weighted
            categories. All data and user accounts are stored in a cloud
            database called Firebase allowing users to be logged into as many
            devices as they want with uniform data across them. When grades are
            added to the user's account the data will refresh on any other
            devices so that the data can be kept synchronous. This Android
            application is available for free on the Google Play store and gives
            students an easy solution to keep track of their grades.
          </p>
          <h2 className="text-center font-bold text-2xl">Background</h2>
          <ul>
            <li className="text-lg list-disc">
              Previous experience: Never used a database with an Android
              application.
            </li>
            <li className="text-lg list-disc">
              Current experience: Developed multiple Android applications as a
              contractor.
            </li>
            <li className="text-lg list-disc">
              Gained experience by creating Android applications in my free time
              over the years and through being a contractor.
            </li>
            <li className="text-lg list-disc">
              Firebase, a cloud-based database, is used so users will never lose
              their information and can login from any Android device to view
              their grades.
            </li>
            <li className="text-lg list-disc">
              This Android application specializes in calculating students
              grades for classes that are accumulative or weighted where other
              apps focus on only one type of grading scale.
            </li>
          </ul>
        </div>
        <div className="flex flex-col flex-1">
          <h2 className="text-center font-bold text-2xl">Security</h2>
          <div className="flex items-center flex-col">
            <Image
              src={databaseIcon1}
              alt="Database Icon"
              style={{
                maxWidth: "350px",
                height: "175px",
              }}
            / width={400} height={400} />
            <Image
              src={databaseIcon2}
              alt="Database Icon"
              style={{ width: "200px", height: "350px" }}
            / width={400} height={400} />
          </div>
          <p className="text-lg">
            Firebase includes the ability to program a set rules list to dictate
            how users interact with the database. The rules above use the same
            logic for users reading information from the database and writing
            information to the database. For users to interact with the database
            their unique identifier must match the unique identifier of the
            information the user is trying to read from or write to.
          </p>
        </div>
        <div className="flex flex-col flex-1">
          <h2 className="text-center font-bold text-2xl">Database Structure</h2>
          <p className="text-lg">
            This structure type is known as a NoSQL database. The different
            fields have no relation to each other, other than the fields having
            a parent/child relationship. This kind of database utilizes real
            time updates, and is cloud-hosted, so data redundancy is retained.
            Real time updates assist this app when users have multiple devices
            concurrently running it. When any data is added, edited, or deleted
            on one device, the other devices will refresh showing the changes as
            to keep all devices synced. Redundancy of data is vital in today's
            society when users could lose, damage, or replace their device. When
            any of these circumstances occur the user will retain their data.
          </p>
          <h2 className="text-center font-bold text-2xl">Conclusion</h2>
          <p className="text-lg">
            The process of learning, planning, and development of this Android
            project has made it work in its entirety. Firebase will keep
            supporting this application while being used without any changes to
            it. Gradez is also available on the Google Play store where anyone
            across the Earth can download it and use it.
          </p>
        </div>
      </div>
      <ProjectFooter />
    </div>
  )
}

export default Gradez
