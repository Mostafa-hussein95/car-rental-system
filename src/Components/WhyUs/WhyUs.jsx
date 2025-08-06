import React from "react";
import sideCarImg from "../../assets/images/Audi-1.png";
import sectionBg from "../../assets/images/Vector.png";

export default function WhyUs() {
  const content =[
    {icon:'fa-solid fa-user',
      title:"Best price guaranteed",
      description:"Find a lower price? We’ll refund you 100% of the difference."
    },
    {icon:'fa-solid fa-clock',
      title:"24 hour car delivery",
      description:"Book your car anytime and we will deliver it directly to you."
    },
    {icon:"fa-solid fa-money-check-dollar",
      title:"Best price guaranteed",
      description:"Find a lower price? We’ll refund you 100% of the difference"
    },
    {icon:"fa-solid fa-comments",
      title:"24/7 technical support",
      description:"Have a question? Contact Rentcars support any time when you have problem."
    },
  ]
  return (
    <>
      <h2 className="text-center w-50 h-auto m-auto mt-7 mb-9 font-medium text-lg px-4 py-3 border border-transparent rounded-lg bg-blue-100 text-blue-600">
        Why Choose Us
      </h2>

      <div
        className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-no-repeat bg-cover px-0"
        style={{ backgroundImage: `url(${sectionBg})` }}
      >
        {/* image section */}
        <div className="w-full md:w-[40%] flex justify-start md:justify-start mb-6 md:mb-0">
          <img
            src={sideCarImg}
            alt="Side Car"
            className="w-[95%] md:w-full object-contain ms-0"
          />
        </div>

        {/* content section */}
        <div className="w-full md:w-1/2 flex flex-col items-start gap-10 px-4 md:px-0">
          <h3 className="font-bold text-3xl md:text-3xl">
            We Offer The best Experience With Our Rental Deals
          </h3>

          {content.map((element,index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="inline-block rounded-sm bg-blue-100 p-4 text-blue-700">
                <i className={element.icon}></i>
              </div>
              <div>
                <h4 className="text-xl font-bold">{element.title}</h4>
                <p>{element.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
 