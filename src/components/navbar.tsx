import Link from "next/link";
import { ToggleTheme } from "./toggleTheme";
const Navbar = () => {
  return (
    <nav className="w-full py-7 pb-10 flex flex-col md:flex-row justify-between items-center">
      <div className="font-lg text-center py-5 md:text-start md:py-0">
        <p className="font-semibold">John Lira</p>
        <p className="text-gray-500">Software Developer</p>
      </div>
      <div className="flex items-center gap-5">
        <ToggleTheme />
        <Link className="slowdrop" href="/">
          /projects
        </Link>
        <Link className="slowdrop" href="/">
          /articles
        </Link>
        <Link className="slowdrop" href="/">
          /about
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
