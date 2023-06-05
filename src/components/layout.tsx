import { FunctionComponent, ReactNode, useState } from "react";
import Link from "next/link";
import SocialFooter from "../components/SocialFooter";
import { useAuth } from "src/auth/useAuth"; //custom authProvider context hook

interface IProps {
  main: ReactNode;
}

const Layout: FunctionComponent<IProps> = ({ main }) => {
  const { logout, authenticated } = useAuth(); //destructure firebase context via useAuth custom hook
  const [navbarOpen, setNavbarOpen] = useState(false);

  const fade = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { ease: "easeOut", duration: 5.25 },
    },
  };

  return (
    <div>
      {/* HEADER */}

      <nav className="bg-white shadow dark:bg-gray-900 ">
        <div className="container  py-1 mx-auto ">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex items-center justify-between">
              <div className="flex items-center logo my-6">
                <Link href="/">
                  <a>
                    <img style={{ width: "90px" }} src="/logo.svg" alt="home" />
                  </a>
                </Link>
                <div className="l-text text-gray-700 dark:text-white pl-4">
                  <Link href="/">Let's Hear</Link>
                </div>
              </div>
              {/* 
                    <!-- Mobile menu button --> */}
              <div className="flex md:hidden">
                <button
                  onClick={() => {
                    setNavbarOpen(!navbarOpen);
                  }}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 mr-16"
                  aria-label="toggle menu"
                >
                  {navbarOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      ></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {/* 
                <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            <div
              className={
                navbarOpen
                  ? "items-center md:flex block"
                  : "items-center md:flex hidden"
              }
            >
              <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                <a
                  className="font-bold pl-4 my-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-teal-50 dark:hover:text-teal-50 md:mx-4 md:my-0"
                  href="/"
                >
                  Home
                </a>

                <a
                  className="font-bold pl-4 my-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-teal-50 dark:hover:text-teal-50  md:mx-4 md:my-0"
                  href="/contact"
                >
                  Contact Us
                </a>
              </div>

              <div className="flex items-center py-2 -mx-1 md:mx-0">
                {authenticated ? (
                  <>
                    <Link href="/reviews/add">
                      <a className="block w-1/2 px-3 py-2 mx-1 text-sm leading-5 text-center text-white transition-colors duration-200 transform rounded-md  md:mx-0 md:w-auto bg-teal-50 hover:bg-cyan-50 font-bold">
                        Add a review
                      </a>
                    </Link>
                    <a
                      className="block w-1/2 px-3 py-2 mx-1 text-sm font-bold leading-5 text-center text-white transition-colors duration-200 transform bg-gray-600 hover:bg-gray-800 rounded-md  md:mx-2 md:w-auto cursor-pointer"
                      onClick={() => {
                        logout();
                      }}
                    >
                      Logout
                    </a>
                  </>
                ) : (
                  <>
                    <Link href="/auth">
                      <a className="block w-1/2 px-3 py-2 mx-1 text-sm font-bold leading-5 text-center text-white transition-colors duration-200 transform bg-teal-50 rounded-md hover:bg-cyan-50 md:mx-0 md:w-auto cursor-pointer">
                        Login/Signup
                      </a>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main style={{ minHeight: "calc(100vh" }}>{main}</main>

      {/* FOOTER */}

      <footer className="flex justify-center px-4  text-gray-800 bg-white dark:text-white dark:bg-gray-900">
        <div className="container py-6">
          <hr className=" bg-gray-50 h-px mt-6 border-gray-300 border-none dark:bg-gray-700" />

          <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
            <>
              <Link href="/">
                <a>
                  <img style={{ width: "50px" }} src="/logo.svg" alt="home" />
                </a>
              </Link>
            </>

            <div className="flex mt-4 md:m-0 ">
              <div className="-mx-4 flex flex-col items-center justify-between mt-6 md:flex-row">
                <a
                  href="/"
                  className="px-4 text-sm font-bold text-gray-800 dark:text-gray-200 hover:text-teal-50 dark:hover:text-teal-50 "
                >
                  Home
                </a>
                <a
                  href="/privacy"
                  className="px-4 text-sm font-bold text-gray-800 dark:text-gray-200 hover:text-teal-50 dark:hover:text-teal-50 "
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="px-4 text-sm font-bold text-gray-800 dark:text-gray-200 hover:text-teal-50 dark:hover:text-teal-50"
                >
                  Terms & Conditions
                </a>
                <a
                  href="/contact"
                  className="px-4 text-sm font-bold text-gray-800 dark:text-gray-200 hover:text-teal-50 dark:hover:text-teal-50 "
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <SocialFooter />
    </div>
  );
};

export default Layout;
