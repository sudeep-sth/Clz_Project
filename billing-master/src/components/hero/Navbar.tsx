import React from "react";
// import { Link, useHistory, useLocation } from 'react-router-dom';
// import swal from 'sweetalert';
// import axios from 'axios';

import { useRouter } from "next/router";
import Link from "next/link";

function Navbar() {
  const logoutSubmit = () => {};

  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="fixed-top">
      <div className="mycss">
        <div className="mx-auto max-w-2xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

                  <Link
                    href="/"
                    className={`${
                      pathname === "/"
                        ? "bg-gray-900 text-white"
                        : "text-gray-300"
                    }   rounded-md px-3 py-2 text-sm hover:text-white hover:bg-gray-900 duration-300  font-medium no-underline`}
                    aria-current="page"
                  >
                    {" "}
                    Home
                  </Link>

                  <Link
                    href="/about"
                    className={`${
                      pathname === "/about"
                        ? "bg-gray-900 text-white"
                        : "text-gray-300"
                    }   rounded-md px-3 py-2 text-sm font-medium no-underline hover:text-white hover:bg-gray-900 duration-300`}
                  >
                    About
                  </Link>

                  <Link
                    href="/contact"
                    className={`${
                      pathname === "/contact"
                        ? "bg-gray-900 text-white"
                        : "text-gray-300"
                    }   rounded-md px-3 py-2 text-sm font-medium no-underline hover:text-white hover:bg-gray-900 duration-300`}
                  >
                    Contact
                  </Link>

                  <Link
                    href="/menu"
                    className={`${
                      pathname === "/menu"
                        ? "bg-gray-900 text-white"
                        : "text-gray-300"
                    }   rounded-md px-3 py-2 text-sm font-medium no-underline hover:text-white hover:bg-gray-900 duration-300`}
                  >
                    Menu
                  </Link>
                  <Link
                    href="/admin"
                    className={`${
                      pathname === "/cart"
                        ? "bg-gray-900 text-white"
                        : "text-gray-300"
                    }   hover:text-white hover:bg-gray-900 duration-300 rounded-md px-3 py-2 text-sm font-medium no-underline`}
                  >
                    User
                  </Link>
                  {/* {AuthButtons} */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/"
              className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
              aria-current="page"
            >
              {" "}
              Home
            </Link>

            <Link
              href="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              Contact
            </Link>

            <Link
              href="/menu"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              Menu
            </Link>
            {/* <Link
              href="/cart"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              Cart
            </Link> */}
            {/* {AuthButtons} */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
