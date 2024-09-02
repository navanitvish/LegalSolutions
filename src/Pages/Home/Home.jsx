
import Herosection from "./HeroSection";
import AgrementComponents from "./AgrementComponents";
//import video from "/src/assets/Webflow_ Create a custom website _ Visual website builder - Google Chrome 2024-09-01 01-06-22.mp4";
import ProductsFeaturesSection from "./ProductsFeaturesSection";
import Video from "./Video";
import HeroSection from "./ConsultationBooking";
import SecuritySection from "./SecuritySection";
import Features from "./Features";
import Favoratetools from "./Favoratetools";
import CustomerStores from "./CustomerStores";

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

      <Features />
      <Favoratetools/>
      <HeroSection />
      <CustomerStores/>
    </div>
  );
};

export default Home;
