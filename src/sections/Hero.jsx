import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { Button, ShoeCard } from "../components";
import { shoes } from "../constants";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <>
      <div id="home" className="h-[80px]"></div>
      <section className="flex justify-between items-center max-lg:flex-col gap-2 w-full max-container py-10">
        <div className="flex flex-1 flex-col">
          <p className="text-lg font-montserrat text-coral-red">
            <span className="font-bold">VirtueWest Demo</span><br />
            Dashboarding the Future
          </p>
          <h2 className="mt-6 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            Smart & Stylish
            <br />
            <span className="text-coral-red inline-block mt-3">Dashboard</span> Solutions
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Build modern, insightful dashboards tailored to your business. Designed for performance,
            clarity, and results across multiple industries.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Our goal is to make data work for you — clean, clear, and impactful.
          </p>
          <div className="mt-11">
            <Button label="Explore More" iconURL={arrowRight} />
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center">
          {/* Laptop Frame */}
          <div className="relative w-[700px] h-[500px]">
            {/* Laptop Screen */}
            <div className="absolute w-full h-[80%] top-0 left-0 bg-gray-800 rounded-2xl p-3 shadow-2xl">
              {/* Screen Content */}
              <div className="w-full h-full bg-gray-900 rounded-lg overflow-hidden">
                <img
                  src={bigShoeImg}
                  alt="Dashboard Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
         
            
            {/* Laptop Notch (optional) */}
            <div className="absolute w-16 h-2 top-[80%] left-1/2 transform -translate-x-1/2 bg-gray-700 rounded-b-sm"></div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex sm:gap-6 gap-4 mt-2 justify-center">
            {shoes.map((shoe, index) => (
              <div key={index}>
                <ShoeCard
                  imgURL={shoe}
                  changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;