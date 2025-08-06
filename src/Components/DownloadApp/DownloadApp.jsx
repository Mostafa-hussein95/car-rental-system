import React from "react";
import bg from "../../assets/images/vector.png";
import androidIcon from "../../assets/images/andriod.png";
import iosIcon from "../../assets/images/ios.png";
import iphoneImg from "../../assets/images/iPHONE-14.png";

export default function DownloadApp() {
  return (
    <section className="p-16 ">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* LEFT FORM */}
        <div
          className="w-full lg:w-1/2 p-8 rounded-lg bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <h4 className="text-3xl font-bold text-gray-800 mb-2">
            Download Rentcars App for <span className="text-blue-700">FREE</span>
          </h4>
          <p className="text-gray-600 text-xl mb-6">
            For faster, easier booking and exclusive deals.
          </p>

          {/* Download buttons */}
          <div className="flex items-center gap-4 mb-8">
            <a href="#">
              <img src={androidIcon} alt="android" className="w-32" />
            </a>
            <a href="#">
              <img src={iosIcon} alt="ios" className="w-32" />
            </a>
          </div>

          {/* FORM */}
          <form className="space-y-4 text-center">
            <div>
              <label
                htmlFor="name"
                className="block mb-1 text-start font-medium text-gray-700"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block mb-1 text-start font-medium text-gray-700"
              >
                Your phone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full p-3 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your phone"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-start font-medium text-gray-700"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <button
              type="submit"
              className="w-[30%] m-auto py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-medium"
            >
              Submit
            </button>
          </form>
        </div>

        {/* RIGHT IMAGE HOLDER */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src={iphoneImg} alt="" />
        </div>
      </div>
    </section>
  );
}
