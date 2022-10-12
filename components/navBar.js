import Link from "next/link";
import Image from "next/image";
import classnames from "classnames";
import styles from "../components/layout/header/header.module.css";

export default function Header() {
  return (
    <div className="relative bg-black">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6"> */}
      <div className="flex justify-between items-center border-b-2 border-[#F3C5B6] py-3  md:justify-start md:space-x-10">
        <div className="flex justify-start my-2.5 lg:w-0 lg:flex-1 ml-[60px]">
          <a href="#">
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              width={40}
              height={40}
            />
          </a>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>

            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav className="hidden md:flex space-x-10 " style={{margin:0}}>
          <div className="relative">
            <a
              className="group inline-flex items-center font-medium"
              style={{ color: "#F4CBBE" }}
            >
             Rarest Society
            </a>
          </div>

          <a
            href="#"
            style={{ color: "#F4CBBE" }}
            className="group inline-flex items-center  font-medium"
          >
             Rarest Whiskies 
          </a>
          <a
            href="#"
            className="group inline-flex items-center  font-medium"
            style={{ color: "#F4CBBE" }}
          >
            Rarified Experiences 
          </a>

          <div className="relative">
            <a
              className="group inline-flex items-center  font-medium"
              style={{ color: "#F4CBBE" }}
            >
              <span>Global Gatherings</span>
            </a>

            <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"></div>
          </div>
        </nav>
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <div className="absolute right-0 flex justify-center my-2.5 mr-[60px]">
            <div className={styles.navbaricon1} style={{ margin: "10px" }}>
              <svg
                width="21"
                height="14"
                viewBox="0 0 21 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.12305 1.74658H19.9187"
                  stroke="#F3AA93"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M1.12305 7.30859H19.9187"
                  stroke="#F3AA93"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M1.12305 12.8706H19.9187"
                  stroke="#F3AA93"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
}
