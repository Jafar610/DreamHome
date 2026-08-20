import React from "react";
import popularImg from "../../assets/img/popularHouse.png";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import popularImg2 from "../../assets/img/popularHouse2.png";
import popularImg3 from "../../assets/img/popularHouse3.png"
function Popular() {
  return (
    <>
      <div className="w-full mt-20 bg-[#ffffff]">
        <div className="px-20">
          <div className="flex justify-center align-center">
            <h1 className="text-4xl text-[#2B1B12] font-extrabold py-4">
              Our Popular Rasidense
            </h1>
          </div>


          <div className="flex justify-center align-center gap-16 py-8">
            <div className="border border-white rounded-lg bg-[#DDC7BB] text-[#2B1B12]">
              <div className="">
                <img src={popularImg} alt="" className="w-[340px] h-auto rounded-lg"/>
              </div>
              <div className="flex justify-center align-center gap-2 py-2">
                <LocationPinIcon />
                <h2 className="text-lg font-semibold">San Francisco, California</h2>
              </div>

              <div className="flex justify-center align-center gap-10">
                <div className="flex justify-center align-center gap-2">
                  <BedroomParentIcon fontSize="extrasmall" />
                  <p className="font-semibold">4 Rooms</p>
                </div>
                <div className="flex justify-center align-center gap-2">
                  <SquareFootIcon fontSize="extrasmall" />
                  <p className="font-semibold">3,500 sq ft</p>
                </div>
              </div>

              <div className="flex justify-center align-center gap-20 py-4">
                <button className="border rounded-lg px-4 py-1 bg-[#2B1B12] text-white">Sign up</button>
                <p className="font-bold">$2,500,000</p>
              </div>
            </div>


            <div className="border border-white rounded-lg bg-[#DDC7BB] text-[#2B1B12]">
              <div className="">
                <img src={popularImg2} alt="" className="w-[340px] h-auto rounded-lg"/>
              </div>
              <div className="flex justify-center align-center gap-2 py-2">
                <LocationPinIcon />
                <h2 className="text-lg font-semibold">Beverly Hills, California</h2>
              </div>

              <div className="flex justify-center align-center gap-10">
                <div className="flex justify-center align-center gap-2">
                  <BedroomParentIcon fontSize="extrasmall" />
                  <p className="font-semibold">3 Rooms</p>
                </div>
                <div className="flex justify-center align-center gap-2">
                  <SquareFootIcon fontSize="extrasmall" />
                  <p className="font-semibold">1,500 sq ft</p>
                </div>
              </div>

              <div className="flex justify-center align-center gap-20 py-4">
                <button className="border rounded-lg px-4 py-1 bg-[#2B1B12] text-white">Sign up</button>
                <p className="font-bold">$850,000</p>
              </div>
            </div>

            <div className="border border-white rounded-lg bg-[#DDC7BB] text-[#2B1B12]">
              <div className="">
                <img src={popularImg3} alt="" className="w-[340px] h-auto rounded-lg"/>
              </div>
              <div className="flex justify-center align-center gap-2 py-2">
                <LocationPinIcon />
                <h2 className="text-lg font-semibold">Palo Alto, California</h2>
              </div>

              <div className="flex justify-center align-center gap-10">
                <div className="flex justify-center align-center gap-2">
                  <BedroomParentIcon fontSize="extrasmall" />
                  <p className="font-semibold">6 Rooms</p>
                </div>
                <div className="flex justify-center align-center gap-2">
                  <SquareFootIcon fontSize="extrasmall" />
                  <p className="font-semibold">4,500 sq ft</p>
                </div>
              </div>

              <div className="flex justify-center align-center gap-20 py-4">
                <button className="border rounded-lg px-4 py-1 bg-[#2B1B12] text-white">Sign up</button>
                <p className="font-bold">$3,700,000</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}

export default Popular;
