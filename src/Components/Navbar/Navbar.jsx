import React from "react";
import logoImg from "../../assets/images/logo.png";



export default function Navbar() {
  return (
    <>
      <header className="bg-white ">
        <div className="mx-auto max-w-screen-xl py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block " href="/">
                <img src={logoImg} alt="logo" />
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-lg">
                  <li>
                    <a
                      className="text-gray-600 transition hover:text-gray-950"
                      href="#"
                    >
                      Become a rintal
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-600 transition hover:text-gray-950"
                      href="#"
                    >
                      Rinatal deals
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-600 transition hover:text-gray-950"
                      href="#"
                    >
                      How it work
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-600 transition hover:text-gray-950"
                      href="#"
                    >
                      Why choose us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-transparent px-5 py-2.5 text-sm font-medium text-gray-950 shadow-sm"
                  href="#"
                >
                  Sign in
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white"
                    href="#"
                  >
                    Sign up
                  </a>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-950">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
