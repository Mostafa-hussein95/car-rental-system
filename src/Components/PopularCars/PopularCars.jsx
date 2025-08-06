import axios from "axios";
import React, { useEffect, useState } from "react";
import carImg1 from "../../assets/images/car1.png";
import carImg2 from "../../assets/images/car2.png";
import carImg3 from "../../assets/images/car3.png";
import { Link } from "react-router-dom";

export default function PopularCars() {
  const [cars, setCars] = useState([]);
  const carsImgs = [carImg1, carImg2, carImg3];
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await axios.get("https://myfakeapi.com/api/cars/");
        setCars(res.data.cars.slice(0, 4));
      } catch (err) {
        console.error("Error fetching cars:", err);
      }
    };

    fetchCars();
  }, []);

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl mt-5 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          {/* search box */}
          <form className="max-w-3xl mx-auto mb-15">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
              >
                Search
              </button>
            </div>
          </form>
          {/* headers */}
          <header className="text-center">
            <h2 className=" text-center w-60 h-13 m-auto  font-medium text-lg px-4 py-3 border border-transparent rounded-lg bg-blue-100 text-blue-600">
              Popular Rental Deals
            </h2>
            <h3 className="text-center text-5xl font-semibold my-9 text-gray-900">
              Most Popular Cars Rental Deals
            </h3>
          </header>
          {/* cars grid */}
          <div className="container mx-auto py-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {cars.map((car, index) => (
                <div
                  key={car.id}
                  className="border border-gray-200 rounded-xl py-10 px-4 shadow-sm hover:shadow-lg transition"
                >
                  <img
                    src={carsImgs[index % carsImgs.length]}
                    alt=""
                    className="mx-auto w-[220px]"
                  />
                  <h3 className="text-2xl font-semibold mt-4 mb-3">
                    {car.car}
                  </h3>

                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-star text-yellow-400"></i> (1345
                      reviews)
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fa-regular fa-user"></i> 2 Passanger ❄ Air
                      conditioning
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fa-regular fa-calendar"></i> 2021 &nbsp;
                      <i className="fa-solid fa-gear"></i> Automatic
                    </div>
                  </div>

                  <hr className="my-4" />
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">Price :</p>
                    <p>
                      <span className="font-bold text-lg">${car.price}</span>
                      /day
                    </p>
                  </div>
                  <Link to="/cardetails">
                    <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white py-2 rounded-lg">
                      View details{" "}
                      <i className="fa-solid fa-arrow-right-long ml-1"></i>
                    </button>
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Link to="/allcars">
                <button className="border border-gray-400 px-8 py-3 rounded-lg text-lg cursor-pointer hover:bg-gray-700 hover:text-amber-50">
                  Show all vehicles
                  <i className="fa-solid fa-arrow-right-long ml-2"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
