import React from "react";
import homeImg from "../../assets/img/luxury_and_rich_home.png";
function AboutUs() {
  return (
    <>
      <div className="w-full bg-[#ffffff] mt-50">
        <div className="flex justify-center align-center gap-20 py-4 px-20 text-[#2A1B12]">
          <div className="">
            <img src={homeImg} alt="" className="w-[400px] h-auto rounded-lg" />
          </div>
          <div className="w-[600px] ">
            <h1 className="text-4xl font-extrabold pb-4">We Help You To Find <br /> Your Dream Home</h1>
            <p className="w-[450px] py-2  ">
              From cozy cottages to luxurious estates, our dedicated team guides
              you through every step of the journey, ensuring your dream home
              becomes a reality
            </p>

            <div className="flex justify-start align-center gap-4 py-2">
                <div>
                    <p className="text-3xl font-extrabold">8K+</p>
                    <p>House Available</p>
                </div>
                <div>
                    <p className="text-3xl font-extrabold">6K+</p>
                    <p>House Sold</p>
                </div>
                <div>
                    <p className="text-3xl font-extrabold">2K+</p>
                    <p>Trusted Agent</p>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
