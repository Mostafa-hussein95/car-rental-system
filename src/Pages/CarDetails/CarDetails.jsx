import React from "react";
import sideCarImg from "../../assets/images/Audi-1.png";
import sectionBg from "../../assets/images/Vector.png";
import { Link } from 'react-router-dom';
export default function CarDetails() {
  return (
    <>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1  md:space-x-5 ms-7 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 "
            >
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                to="/allcars"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 "
              >
                All Cars
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-blue-700">
                Car Details
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <h2 className=" text-center mt-9 w-40 h-13 m-auto  mb-3 font-medium text-lg px-4 py-3 border border-transparent rounded-lg bg-blue-100 text-blue-600">
        Why choose Us
      </h2>
      <div
        className="flex justify-between items-center h-screen bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${sectionBg})` }}
      >
        <div className="md:w-[40%]">
          <img src={sideCarImg} alt="" />
        </div>
        <div className="md:w-1/2 flex flex-col items-start gap-10 my-7">
          <h3 className="font-bold text-3xl">
            We offer the best experience with our rental deals
          </h3>
          <div className="flex  items-start gap-4 justify-between">
            <div className="inline-block rounded-sm  p-3 text-gray-500 ">
              <i className="fa-regular fa-user"></i>
            </div>
            <div className="m-auto">
              <p>2 Passanger.</p>
            </div>
          </div>
          <div className="flex  items-start gap-4 justify-between">
            <div className="inline-block rounded-sm  p-3 text-gray-500 ">
              <i className="fa-solid fa-snowflake"></i>
            </div>
            <div className="m-auto">
              <p>Air conditioning</p>
            </div>
          </div>
          <div className="flex  items-start gap-4 justify-between">
            <div className="inline-block rounded-sm  p-3 text-gray-500 ">
              <i className="fas fa-cogs"></i>
            </div>
            <div className="m-auto">
              <p>CVT</p>
            </div>
          </div>
          <div className="flex  items-start gap-4 justify-between">
            <div className="inline-block rounded-sm  p-3 text-gray-500 ">
              <i className="fa-solid fa-car"></i>
            </div>
            <div className="m-auto">
              <p>Doors</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
