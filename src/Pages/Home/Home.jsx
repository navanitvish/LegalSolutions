import Herosection from "./HeroSection";

//import video from "/src/assets/Webflow_ Create a custom website _ Visual website builder - Google Chrome 2024-09-01 01-06-22.mp4";
import ProductsFeaturesSection from "./ProductsFeaturesSection";
import Video from "./Video";
import HeroSection from "./ConsultationBooking";
import SecuritySection from "./SecuritySection";
import Features from "./Features";
//import Favoratetools from "./Favoratetools";
import CustomerStores from "./CustomerStores";
import HowItsworks from "./HowItsworks";
import ValueofProducts from "./ValueofProducts";
import Products10 from "./Products10";
import ProductCardSlider from "./ProductCardSlider";
import FAQComponent from "./FAQComponent";
import QuickReadsBlog from "./QuickReadsBlog";

const Home = () => {
  return (
    <div>
      <Herosection />
      <div className="bg-gradient-to-br from-indigo-200 to-purple-600">
        <Video />
      </div>
      <ProductCardSlider />
      <SecuritySection />
      <ProductsFeaturesSection />
      <HowItsworks />

      <Features />

      {/* <Favoratetools/> */}
      <Products10 />
      <HeroSection />
      <ValueofProducts />
      <CustomerStores />
      <QuickReadsBlog/>

      <FAQComponent/>
    </div>
  );
};

export default Home;
