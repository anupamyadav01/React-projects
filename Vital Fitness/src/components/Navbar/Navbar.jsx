const Navbar = () => {
  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <span className="font-bold text-2xl">VitalFittness</span>
          <div className="lg:flex">
            <ul className="ml-12 flex gap-12">
              <li>
                <a
                  href="#"
                  className="text-lg font-semibold text-gray-800 hover:text-gray-900"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg font-semibold text-gray-800 hover:text-gray-900"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg font-semibold text-gray-800 hover:text-gray-900"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 cursor-pointer"
          >
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
