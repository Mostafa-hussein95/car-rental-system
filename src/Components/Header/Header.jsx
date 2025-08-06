import React from "react";
import carImg from "../../assets/images/car.png";
import bgframe from "../../assets/images/Frame.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="relative flex flex-col-reverse md:flex-row items-center justify-between h-dvh overflow-hidden px-0">
      
      {/* text */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="z-10 w-120 md:w-200 text-center text-black space-y-4 md:ps-15"
      >
        <h1 className="text-5xl font-bold">
          Find, book <br /> and rent a car <span className="text-blue-700">Easily</span>
        </h1>
        <p className="text-lg">
          Get a car wherever and whenever you need it with your IOS and Android device.
        </p>
      </motion.div>

      {/* image */}
      <div
        className="h-[300px] md:h-dvh w-full flex items-center justify-end bg-cover bg-right"
        style={{ backgroundImage: `url(${bgframe})` }}
      >
        <motion.img
          src={carImg}
          alt="Car"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="w-[90%] md:w-160 bg-cover mt-4 md:mt-0"
        />
      </div>
    </div>
  );
}
