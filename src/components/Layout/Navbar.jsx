import Link from "next/link";
import { PAGE_LINKS } from "@/utils/constants";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#F3F3F3] p-8">
      <div className="flex items-center flex-shrink-0 text-white">
        <Link href="/" key="label">
          <a className="tracking-wide text-black font-semibold text-3xl tracking-tight uppercase ">
            Nora Lubberich
          </a>
        </Link>
      </div>

      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border-2 rounded border-black hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div className="hidden lg:flex lg:items-center lg:justify-end lg:w-auto">
        {PAGE_LINKS.map(({ label, to }) => (
          <Link href={to} key={label}>
            <a className="animated-link mr-8">
              {label}
            </a>
          </Link>
        ))}

        <Link href="/get-in-touch">
          <a className="text-xl px-4 py-3 leading-none border-2 rounded text-black border-black hover:text-white hover:bg-black">
            Get in Touch
          </a>
        </Link>
      </div>
    </nav>
  );
};
