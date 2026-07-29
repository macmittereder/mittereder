import Link from "next/link";
import { NAV_ITEMS, SOCIAL_LINKS } from "../../data/portfolio";
import { SocialLinks } from "../icons/SocialIcons";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Mac Mittereder
              </span>
            </div>
            <p className="text-slate-400 text-base leading-relaxed max-w-md mb-8">
              Full-stack software engineer with 11+ years of experience building
              scalable applications and innovative digital solutions.
            </p>
            <div className="flex gap-4">
              <SocialLinks links={SOCIAL_LINKS} variant="footer" />
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Navigation</h3>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {year} Mac Mittereder. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Built with Next.js, Tailwind CSS & Vercel
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
