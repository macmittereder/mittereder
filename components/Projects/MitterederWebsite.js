import Image from 'next/image'
import ProjectHeader from "./ProjectHeader"
import ProjectFooter from "./ProjectFooter"
// icon image will be used directly in src
// r1 image will be used directly in src
// r2 image will be used directly in src

const MitterederWebsite = () => {
  return (
    <div className="flex bg-white items-start flex-1 justify-center flex-wrap lg:flex-col p-2">
      <ProjectHeader
        title="Mittereder.com"
        icon={icon}
        summary={`A portfolio website to show some projects that I have started and finished.`}
        github="https://github.com/macmittereder/mittereder-website"
      />
      <hr />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <Image src={r1} alt="Release 1.0 Screenshot" / width={400} height={400} />
        </div>
        <div className="w-full lg:w-1/2 p-4 text-lg">
          <a
            className="underline italic"
            href="https://github.com/macmittereder/mittereder-website/tree/release-1.0"
          >
            release-1.0
          </a>
          <p>
            First written in Pug and Nodes.js with Sass middleware. Originally
            the CSS was being built on every page load with the middleware so
            that was fixed by creating a static CSS file with Grunt. The website
            is hosted on vercel where I have CI/CD set up directly to my
            repository.
          </p>
        </div>
      </div>
      <div className="flex mt-2 flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/2 p-4 text-lg">
          <a
            className="underline italic"
            href="https://github.com/macmittereder/mittereder-website/tree/release-2.0"
          >
            release-2.0
          </a>
          <p>
            Rewritten in React with Tailwindcss. The website is now hosted on
            Github using their pages functionality to easily deploy any updates.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image src={r2} alt="Release 2.0 Screenshot" / width={400} height={400} />
        </div>
      </div>
      <ProjectFooter />
    </div>
  )
}

export default MitterederWebsite
