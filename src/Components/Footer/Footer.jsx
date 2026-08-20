import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
function Footer() {
  return (
    <>
      <div className="bg-[#ddc7bb]">
        <div className="flex justify-between align-center px-20 py-10">
          <div className="">
            <h2 className="text-2xl font-bold py-4">Dwello</h2>
            <p className="w-1/2">Bringing you closer to your dream home, one click at a time.</p>
          </div>

          <div className="flex justify-center align-center gap-20 py-4">
            <div className="">
              <p className="font-bold pb-2">About</p>
              <p>Our Story</p>
              <p>Careers</p>
              <p>Our Team</p>
              <p>Resources</p>
            </div>
            <div>
              <p className="font-bold pb-2">Support</p>
              <p>FAQ</p>
              <p>Contact Us</p>
              <p>Help Center</p>
              <p>Terms of Service</p>
            </div>
            <div>
              <p className="font-bold pb-2">Find Us</p>
              <p>Events</p>
              <p>Locations</p>
              <p>Newsletter</p>
            </div>
            <div>
                <p className="font-bold pb-2">Our Social</p>
              <div className="flex justify-center align-center gap-2 pb-2">
                <InstagramIcon />
                <p>Instagram</p>
              </div>
              <div className="flex justify-center align-center gap-2 pb-2">
                <FacebookIcon />
                <p>Facebook</p>
              </div>
              <div className="flex justify-center align-center gap-2 pb-2">
                <XIcon />
                <p>TwitterX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
