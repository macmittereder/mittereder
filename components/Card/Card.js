import Link from "next/link";
import Image from "next/image";

const Card = (props) => {
  return (
    <Link href={props.href} className="block group">
      <div
        className={`card hover-lift h-full flex flex-col overflow-hidden ${
          props.featured
            ? "ring-2 ring-blue-500/50 bg-gradient-to-br from-slate-800 to-slate-900"
            : ""
        }`}
      >
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <Image
            src={props.image}
            alt={props.title}
            width={400}
            height={200}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Featured Badge */}
          {props.featured && (
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                Featured
              </span>
            </div>
          )}

          {/* Category Badge */}
          {props.category && (
            <div className="absolute top-3 right-3">
              <span className="px-3 py-1 bg-slate-700/80 backdrop-blur-sm text-slate-300 text-xs font-medium rounded-full border border-slate-600">
                {props.category}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3
            className={`font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300 ${
              props.featured ? "text-xl" : "text-lg"
            }`}
          >
            {props.title}
          </h3>

          {props.description && (
            <p className="text-slate-300 text-sm mb-4 flex-1 leading-relaxed">
              {props.description}
            </p>
          )}

          {/* Technologies */}
          {props.technologies && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {props.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full border border-slate-600 group-hover:border-blue-500 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
              {props.technologies.length > 4 && (
                <span className="px-2 py-1 bg-slate-600 text-slate-400 text-xs rounded-full">
                  +{props.technologies.length - 4} more
                </span>
              )}
            </div>
          )}

          {/* View Project Button */}
          <div className="mt-4 flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
            View Project
            <svg
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
