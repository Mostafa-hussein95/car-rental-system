import React from "react";

export default function RentSteps() {
  let steps = [
    {
      icon: "",
      title: "Choose location",
      description: "Choose your and find your best car",
    },
    {
      icon: "",
      title: "Pick-up date",
      description: "Select your pick up date and time to book your car",
    },
    {
      icon: "",
      title: "Book your car",
      description: "Book your car and we will deliver it directly to you",
    },
  ];
  return (
    <>
      <div className="mt-5 ">
        <h2 className=" text-center w-40 h-13 m-auto  font-medium text-lg px-4 py-3 border border-transparent rounded-lg bg-blue-100 text-blue-600">
          HOW IT WORK
        </h2>
        <h3 className="text-center text-5xl font-semibold my-9 px-5 text-gray-900">
          Rent with following 3 working steps
        </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-[80%] m-auto">
  {steps.map((step, index) => (
    <article
      key={index}
      className={`bg-white p-6 text-center text-4xl ${
        index === 2 ? "sm:col-span-2 sm:w-1/2 sm:mx-auto" : ""
      }`}
    >
      <span className="inline-block rounded-sm bg-blue-100 p-5 text-blue-700 mb-3">
        <i className="fa-solid fa-house"></i>
      </span>
      <h3 className="text-3xl font-medium text-gray-900">{step.title}</h3>
      <p className="mt-2 text-sm text-gray-500">{step.description}</p>
    </article>
  ))}
</div>

      </div>
    </>
  );
}
