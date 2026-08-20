import React from "react";
import cardImg1 from "../../assets/img/cardImg1.png";
import cardImg2 from "../../assets/img/cardImg2.png";
import cardImg3 from "../../assets/img/cardImg3.png";
import user1 from "../../assets/img/user1.png";
import user2 from "../../assets/img/user2.png";
import user3 from "../../assets/img/user3.png";
import StarIcon from '@mui/icons-material/Star';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function WhatPeopleSay() {
  return (
    <>
      <div className="w-full mt-20 bg-[#ffffff]">
        <div className="px-20">
          <div className="flex justify-center align-center">
            <h1 className="text-4xl text-[#2B1B12] font-extrabold py-4">
              What People Say <br /> About Dwello
            </h1>
          </div>

          <div className="flex justify-center align-center gap-16 py-8 px-4">
            <div className="border border-white rounded-lg bg-[#DDC7BB] text-[#2B1B12]">
              <div className="flex justify-center align-center">
                <img
                  src={cardImg1}
                  alt=""
                  className="w-[350px] h-auto rounded-lg"
                />
              </div>
              <div className="flex justify-between align-center gap-2 py-2 px-4">
                <div className="flex justify-start align-center gap-2">
                  <div>
                    <img src={user1} alt="" className="w-[40px] h-auto rounded-full"/>
                  </div>

                  <div>
                    <p className="font-bold">samin Nguyen</p>
                    <p className="text-xs">San Francisco</p>
                  </div>
                </div>

                <div className="flex justify-center aling-center gap-2 bg-white w-15 h-5 rounded-sm">
                    <StarIcon sx={{ fontSize: 20 }} />
                    <p className="font-bold">5.0</p>
                </div>
              </div>

              <div className="flex justify-center align-center px-4 pb-6">
                <p className="text-xs w-[320px]">Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.</p>
              </div>
            </div>

            <div className="border border-white rounded-lg bg-[#DDC7BB] text-[#2B1B12]">
              <div className="flex justify-center align-center">
                <img
                  src={cardImg2}
                  alt=""
                  className="w-[350px] h-auto rounded-lg"
                />
              </div>
              <div className="flex justify-between align-center gap-2 py-2 px-4">
                <div className="flex justify-start align-center gap-2">
                  <div>
                    <img src={user2} alt="" className="w-[40px] h-auto rounded-full"/>
                  </div>

                  <div>
                    <p className="font-bold">samin Nguyen</p>
                    <p className="text-xs">San Francisco</p>
                  </div>
                </div>

                <div className="flex justify-center aling-center gap-2 bg-white w-15 h-5 rounded-sm">
                    <StarIcon sx={{ fontSize: 20 }} />
                    <p className="font-bold">5.0</p>
                </div>
              </div>

              <div className="flex justify-center align-center px-4 pb-6">
                <p className="text-xs w-[320px]">Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.</p>
              </div>
            </div>


            <div className="border border-white rounded-lg bg-[#DDC7BB] text-[#2B1B12]">
              <div className="flex justify-center align-center">
                <img
                  src={cardImg3}
                  alt=""
                  className="w-[350px] h-auto rounded-lg"
                />
              </div>
              <div className="flex justify-between align-center gap-2 py-2 px-4">
                <div className="flex justify-start align-center gap-2">
                  <div>
                    <img src={user3} alt="" className="w-[40px] h-auto rounded-full"/>
                  </div>

                  <div>
                    <p className="font-bold">samin Nguyen</p>
                    <p className="text-xs">San Francisco</p>
                  </div>
                </div>

                <div className="flex justify-center aling-center gap-2 bg-white w-15 h-5 rounded-sm">
                    <StarIcon sx={{ fontSize: 20 }} />
                    <p className="font-bold">5.0</p>
                </div>
              </div>

              <div className="flex justify-center align-center px-4 pb-6">
                <p className="text-xs w-[320px]">Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center align-center gap-6 pb-4">
            <div className="border rounded-full p-2 text-white bg-[#2B1B12]">
                <KeyboardArrowLeftIcon/>
            </div>
            <div className="border rounded-full p-2 text-white bg-[#2B1B12]">
                <KeyboardArrowRightIcon/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatPeopleSay;
