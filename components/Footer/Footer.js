import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-white font-semibold text-lg">
                Mackenzie
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Full-stack software engineer with 11+ years of experience building
              scalable applications and innovative digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-slate-400 hover:text-blue-400 transition-colors text-sm"
              >
                Home
              </Link>
            </div>
          </div>

          {/* Professional Links */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Professional</h3>
            <div className="space-y-2">
              <a
                href="https://github.com/macmittereder"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-400 hover:text-blue-400 transition-colors text-sm"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mackenzie-mittereder/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-400 hover:text-blue-400 transition-colors text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Mackenzie Mittereder. All rights
            reserved.
          </p>
          <p className="text-slate-500 text-xs mt-2">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
