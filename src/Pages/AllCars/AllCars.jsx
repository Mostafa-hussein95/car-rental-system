
import axios from "axios";
import React, { useEffect, useState } from "react";
import carImg1 from "../../assets/images/car1.png";
import carImg2 from "../../assets/images/car2.png";
import carImg3 from "../../assets/images/car3.png";
import { Link } from "react-router-dom";

export default function AllCars() {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 1-based
  const carsPerPage = 16;
  const carImgs = [carImg1, carImg2, carImg3];

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await axios.get("https://myfakeapi.com/api/cars/");
        setCars(res.data.cars);
      } catch (err) {
        console.error("Error fetching cars:", err);
      }
    };

    fetchCars();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const totalPages = Math.ceil(cars.length / carsPerPage);
  const startIndex = (currentPage - 1) * carsPerPage;
  const currentCars = cars.slice(startIndex, startIndex + carsPerPage);

  return (
    
    <section>
      

<nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-5 ms-7 ">
    <li className="inline-flex items-center">
      <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 ">
        <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
        </svg>
        Home
      </Link>
    </li>
 
    <li aria-current="page">
      <div className="flex items-center">
        <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
        </svg>
        <span className="ms-1 text-sm font-medium text-blue-700 md:ms-2 ">All Cars</span>
      </div>
    </li>
  </ol>
</nav>


      <div className="mx-auto max-w-screen-xl mt-5 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-center w-60 h-13 m-auto font-medium text-lg px-4 py-3 border border-transparent rounded-lg bg-blue-100 text-blue-600">
            popular rental deals
          </h2>
          <h3 className="text-center text-5xl font-semibold my-9 text-gray-900">
            most popular cars rental deals
          </h3>
        </header>

        <div className="container mx-auto py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentCars.map((car, index) => {
              const globalIndex = startIndex + index;
              return (
                <div
                  key={car.id}
                  className="border border-gray-200 rounded-xl py-10 px-4 shadow-sm hover:shadow-lg transition"
                >
                  <img
                    src={carImgs[globalIndex % carImgs.length]}
                    alt={car.car}
                    className="mx-auto w-[220px] h-[180px] object-contain"
                    
                  />
                  <h3 className="text-2xl font-semibold mt-4 mb-3">
                    {car.car}
                  </h3>

                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-star text-yellow-400"></i>{" "}
                      (1345 reviews)
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
              );
            })}
          </div>

          {/* HyperUI style pagination with dots */}
          {totalPages > 1 && (
            <ol className="flex justify-center gap-1 mt-10 text-xs font-medium">
              {/* Prev */}
              <li>
                <button
                  onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                  className={`inline-flex items-center gap-1 rounded border px-3 py-2 cursor-pointer text-blue-700 ${
                    currentPage === 1
                      ? "opacity-50 cursor-not-allowed border-gray-200"
                      : "hover:bg-gray-200 border-gray-300"
                  }`}
                  disabled={currentPage === 1}
                >
                  <i className="fa-solid fa-chevron-left text-[10px]"></i> Prev
                </button>
              </li>

              {/* Dynamic page numbers with dots */}
              {(() => {
                const pages = [];
                const siblings = 1;

                pages.push(1);
                if (totalPages > 1) pages.push(2);

                const start = Math.max(3, currentPage - siblings);
                const end = Math.min(totalPages - 2, currentPage + siblings);

                if (start > 3) pages.push("dots-start");
                for (let i = start; i <= end; i++) pages.push(i);
                if (end < totalPages - 2) pages.push("dots-end");

                if (totalPages > 3) pages.push(totalPages - 1);
                if (totalPages > 2) pages.push(totalPages);

                const uniquePages = [...new Set(pages)];

                return uniquePages.map((page, idx) =>
                  typeof page === "string" ? (
                    <li key={page + idx}>
                      <span className="inline-flex h-8 w-8 items-center justify-center text-gray-400">
                        ...
                      </span>
                    </li>
                  ) : (
                    <li key={page}>
                      <button
                        onClick={() => setCurrentPage(page)}
                        className={`inline-flex h-8 w-8 items-center justify-center rounded cursor-pointer ${
                          currentPage === page
                            ? "bg-blue-700 text-white"
                            : "border border-gray-300 hover:bg-gray-200"
                        }`}
                      >
                        {page}
                      </button>
                    </li>
                  )
                );
              })()}

              {/* Next */}
              <li>
                <button
                  onClick={() =>
                    currentPage < totalPages && setCurrentPage(currentPage + 1)
                  }
                  className={`inline-flex items-center gap-1 rounded border px-3 py-2 cursor-pointer text-blue-700 ${
                    currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed border-gray-200"
                      : "hover:bg-gray-200 border-gray-300"
                  }`}
                  disabled={currentPage === totalPages}
                >
                  Next <i className="fa-solid fa-chevron-right text-[10px]"></i>
                </button>
              </li>
            </ol>
          )}
        </div>
      </div>
    </section>
  );
}
