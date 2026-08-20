import AboutUs from "./Components/AboutUs/AboutUs"
import AnyQuestion from "./Components/AnyQuestion/AnyQuestion"
import Header from "./Components/Header/Header"
import Hero from "./Components/Hero/Hero"
import Popular from "./Components/Popular/Popular"
import WhatPeopleSay from "./Components/WhatPeopleSay/WhatPeopleSay"
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs"
import Footer from "./Components/Footer/Footer"


function App() {

  return (
    <>
      <Header />
      <Hero/>
      <AboutUs/>
      <WhyChooseUs/>
      <Popular/>
      <WhatPeopleSay/>
      <AnyQuestion/>
      <Footer/>
    </>
  )
}

export default App
