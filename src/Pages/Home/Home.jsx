import React from "react";
import Herosection from "./HeroSection";
import AgrementComponents from "./AgrementComponents";
//import video from "/src/assets/Webflow_ Create a custom website _ Visual website builder - Google Chrome 2024-09-01 01-06-22.mp4";
import ProductsFeaturesSection from "./ProductsFeaturesSection";
import Video from "./Video";
import HeroSection from "./ConsultationBooking";
import SecuritySection from "./SecuritySection";
import Testimonials from "./Testimonials";
import Favoratetools from "./Favoratetools";
const Home = () => {
  return (
    <div>
      <Herosection />
      <div className=" bg-red-50">
        <Video />
      </div>
      <AgrementComponents />
      <SecuritySection />
      <ProductsFeaturesSection />

      <Testimonials />
      <Favoratetools/>
      <HeroSection />
    </div>
  );
};

export default Home;
