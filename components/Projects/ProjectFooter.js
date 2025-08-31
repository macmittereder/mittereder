import Link from "next/link";

const ProjectFooter = () => {
  return (
    <div className="flex w-full justify-center items-center flex-col mt-2">
      <hr className="border border-black w-3/4" />
      <Link href="/projects" className="font-bold text-xl m-4">
        Back
      </Link>
    </div>
  );
};

export default ProjectFooter;
