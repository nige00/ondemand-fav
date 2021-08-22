import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  title: string;
};

const Layout: NextPage<Props> = ({ children, title = "Dafault Title" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-pink-200">
          <div className="container px-6 py-3 mx-auto md:flex">
            <div className="flex items-center justify-between">
              <div>
                <Link href="/" passHref>
                  <a className="font-mono text-2xl text-gray-800 lg:text-2xl hover:opacity-90">
                    FanzaのAVが見放題
                  </a>
                </Link>
              </div>

              {/* <!-- Mobile menu button --> */}
              {/* <div className="flex md:hidden">
                <button
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    ></path>
                  </svg>
                </button>
              </div> */}
            </div>

            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            {/* <div className="w-full md:flex md:items-center md:justify-between">
              <div className="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">
                <a
                  href="#"
                  className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2"
                >
                  About
                </a>
                <a
                  href="#"
                  className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2"
                >
                  Contact
                </a>
              </div>
            </div> */}
          </div>
        </nav>
      </header>
      <main className="min-h-screen">{children}</main>
      <footer className="flex flex-col items-center justify-center px-6 py-4 bg-white border-t dark:bg-gray-800 sm:flex-row">
        <Link href="/" passHref>
          <a className="font-mono text-2xl text-gray-600 lg:text-2xl hover:opacity-90">
            FanzaのAVが見放題
          </a>
        </Link>
      </footer>
    </>
  );
};

export default Layout;
