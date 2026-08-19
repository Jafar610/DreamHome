import React from "react";
import hero from "../../assets/img/hero-image.png";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import HomeIcon from "@mui/icons-material/Home";
import PaidIcon from "@mui/icons-material/Paid";
function Hero() {
  return (
    <>
      <div className="w-full h-screen relative">
        <div className="flex justify-center gap-4 align-center bg-[#fef7f2] px-20 ">
          <div className="flex flex-col justify-center align-center w-1/2 h-auto text-[#2A1B12]">
            <h1 className="text-5xl font-extrabold py-2">
              Find Your <br /> Dream Home
            </h1>
            <p className="text-xl w-[400px]">
              Explore our curated selection of exquisite properties meticulously
              tailored to your unique dream home vision
            </p>
            <div className="py-2">
              <button className="border px-4 py-2 text-white bg-[#2A1B12] rounded-lg font-semibold">
                Sign up
              </button>
            </div>
          </div>

          <div>
            <img src={hero} alt="hero" className="w-[800px] h-auto" />
          </div>
        </div>

        <div className="absolute top-135 w-full">
          <div className="bg-[#DDC7BB] flex justify-center align-center gap-4 py-10 mx-40 rounded-sm">
            <div className="flex justify-center aling-center border border-white text-[#2A1B12] bg-white py-2 rounded-sm">
              <input type="text" placeholder="Location" className="outline-none px-4" />
              <AddLocationIcon />
            </div>
            <div  className="flex justify-center aling-center border border-white  text-[#2A1B12] bg-white py-2 rounded-sm">
              <input type="text" placeholder="Type" className="outline-none px-4"/>
              <HomeIcon />
            </div>
            <div  className="flex justify-center aling-center border border-white text-[#2A1B12] bg-white py-2 rounded-sm">
              <input type="text" placeholder="price Range" className="outline-none px-4"/>
              <PaidIcon className="" />
            </div>
            <div className="flex justify-center align-center border border-[#2A1B12] rounded-lg text-white py-2 px-4 bg-[#2A1B12]">
              <button className="font-semibold">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
