import React from 'react'
import hero from 'https://hyderabadresidentialprojects.com/projects-in-kondapur/auro-sapphire/assets/images/auro21.webp'
function Hero() {
  return (
    <>
    <div>
        <div>
            <h1>Find Your Dream Home</h1>
            <p>Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision</p>
            <button>Sign up</button>
        </div>

        <div>
           <img src={hero} alt="hero" />
        </div>
    </div>
    </>
  )
}

export default Hero