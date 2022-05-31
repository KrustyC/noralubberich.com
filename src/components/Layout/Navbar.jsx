export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#F3F3F3] p-8">
      <div className="flex items-center flex-shrink-0 text-white">
        <span className="text-black font-semibold text-3xl tracking-tight uppercase">
          Nora Lubberich
        </span>
      </div>
      {/* <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div> */}
      <div className="block lg:flex lg:items-center lg:justify-end lg:w-auto">
        <div className="text-black text-xl lg:flex-grow mr-8">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-8"
          >
            About Me
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-8"
          >
            Corporate Wellness
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-8"
          >
            Yoga
          </a>

          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white"
          >
            Nutrition
          </a>
        </div>
        <div>
          <a
            href="#"
            className="inline-block text-lg px-4 py-3 leading-none border-2 rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
};
