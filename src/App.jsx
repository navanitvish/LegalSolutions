import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import RentAgreementForm from "./Pages/RentalAgreement/agremetForm/RentAgreementForm";
import FlatAgreementForm from "./Pages/RentalAgreement/flatAgreement/FlatAgreementForm";
import FurnishAgreementForm from "./Pages/RentalAgreement/Furnishedflatrentalagreement/FurnishAgreementForm";
import FurnishedHouseAgreementForm from "./Pages/RentalAgreement/Furnishedrentagreement/FurnishedHouseAgreementForm";
import LeaseAgreementForm from "./Pages/RentalAgreement/Leaseoffurnished/LeaseAgreementForm";
import QuickAgreementForm from "./Pages/RentalAgreement/Quickrentalagreement/QuckAgreementForm";
import ResidentAgreementForm from "./Pages/RentalAgreement/Residentialleaseagreement/ResidentAgreementForm";
import RoomAgreementForm from "./Pages/RentalAgreement/Roomrentalagreement/RoomAgreementForm";
import PaygusestAgreementForm from "./Pages/RentalAgreement/paying-guest-agreement/PayguestAgreementForm";
import LoginPages from "./Components/Login/LoginPage";

// Lazy load all route components
const Home = lazy(() => import("./Pages/Home/Home"));
const About = lazy(() => import("./Pages/About/About"));
const LoginPage = lazy(() => import("./Components/Login/Login"));
const NotFound = lazy(() => import("./Pages/NotFound"));

const HouseRentalPage = lazy(() => import("./Pages/RentalAgreement/HouseRentalPage"));
const FlatRentalPag = lazy(() => import("./Pages/RentalAgreement/flatAgreement/flatRentalPage"));
const Furnishedflatagree = lazy(() => import("./Pages/RentalAgreement/Furnishedflatrentalagreement/furnishedflatagree"));
const Furnishedhouse = lazy(() => import("./Pages/RentalAgreement/Furnishedrentagreement/furnished-house"));
const Leaseagreefurnished = lazy(() => import("./Pages/RentalAgreement/Leaseoffurnished/Leaseagreefurnished"));
const Quickrental = lazy(() => import("./Pages/RentalAgreement/Quickrentalagreement/quick-rental"));
const Residentalleag = lazy(() => import("./Pages/RentalAgreement/Residentialleaseagreement/Residentalleag"));
const Roomrental = lazy(() => import("./Pages/RentalAgreement/Roomrentalagreement/roomrental"));
const PayingGestagree = lazy(() => import("./Pages/RentalAgreement/paying-guest-agreement/PayingGestagree"));

const Products = lazy(() => import("./Pages/ProductPage/Products"));
const ProductDetail = lazy(() => import("./Pages/ProductPage/ProductDetail"));

const ServicesPage = lazy(() => import("./Pages/Servies/ServicesPage/ServicesPages"));
const SubcategoryPage = lazy(() => import("./Pages/Servies/ServicesPage/SubcategoryPage"));
const LawyerConnectPage = lazy(() => import("./Pages/LawyerConnect/LawyerConnectPage"));

const RentalPage = lazy(() => import("./Pages/Servies/LeaseAgreements/Residential-lease-agreement"));
const AffidavitsPage = lazy(() => import("./Pages/Servies/Affidavits/Affidavits"));
const BusinessAgre = lazy(() => import("./Pages/Servies/BusinessAgreements/BusinessAgre"));
const Willspage = lazy(() => import("./Pages/Servies/Wills/Wills"));
const SaleDocuments = lazy(() => import("./Pages/Servies/SaleDocuments/SaleDoc"));
const RealstateAgre = lazy(() => import("./Pages/Servies/Real-estate-agreements/RealstateAgre"));
const EmploymentAgreement = lazy(() => import("./Pages/Servies/EmploymentAgreements/EmploymentAgreement"));
const Commercialdoc = lazy(() => import("./Pages/Servies/CommercialDocuments/commersial"));
const Corporate = lazy(() => import("./Pages/Servies/CorporateAgreement/CorporetAgreement"));
const Commercialest = lazy(() => import("./Pages/Servies/Commercialestablishments/establishCommersical"));
const EcommerseContract = lazy(() => import("./Pages/Servies/E-commercecontracts/EcommerseContract"));
const Notice = lazy(() => import("./Pages/Servies/Notices/Notice"));
const Powerofattorney = lazy(() => import("./Pages/Servies/Power-of-attorney/Power-of-attorney"));
const PostContractual = lazy(() => import("./Pages/Servies/Post-contractualcontracts-matters/Post-contractual"));

function App() {
  return (
    
    <Router>
      <NavBar />

      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<LoginPage />} />
          <Route path="/login" element={<LoginPages />} />

          {/* Rental agreement routes */}
          <Route path="/rental-agreements/house-rent-agreement" element={<HouseRentalPage />} />
          {/* create-agreement form */}
          <Route path="/create-agreement" element={<RentAgreementForm/>}/>
          <Route path="/rental-agreements/flat-rent-agreement" element={<FlatRentalPag />} />
          <Route path="/create-agreement-flat" element={<FlatAgreementForm />} />
          <Route path="/rental-agreements/Furnished-rental-agreement" element={<Furnishedflatagree />} />
          <Route path="/create-agreement-furnished-flat" element={<FurnishAgreementForm />} />
          <Route path="/rental-agreements/furnished-house-rent-agreement" element={<Furnishedhouse />} />
          <Route path="/create-agreement-furnished-house" element={<FurnishedHouseAgreementForm />} />
          <Route path="/rental-agreements/Lease-furnished-agreement" element={<Leaseagreefurnished />} />
          <Route path="/create-agreement-lease" element={<LeaseAgreementForm />} />
          <Route path="/rental-agreements/quick-rental-agreement" element={<Quickrental />} />
          <Route path="/create-agreement-quick" element={<QuickAgreementForm />} />
          <Route path="/rental-agreements/Residential-lease-agreement" element={<Residentalleag />} />
          <Route path="/create-agreement-residential" element={<ResidentAgreementForm />} />
          <Route path="/rental-agreements/room-rental-agreement" element={<Roomrental />} />
          <Route path="/create-agreement-room" element={<RoomAgreementForm />} />
          <Route path="/rental-agreements/paying-guest-agreement" element={<PayingGestagree />} />
          <Route path="/create-agreement-paying" element={<PaygusestAgreementForm />} />

          {/* Product routes */}
          <Route path="/products" element={<Products />} />
          <Route path="/product-detail/:productId" element={<ProductDetail />} />

          {/* Services routes */}
          <Route path="/Services" element={<ServicesPage />} />
          <Route path="/services/:categorySlug" element={<SubcategoryPage />} />
          <Route path="/lawyer-contact" element={<LawyerConnectPage />} />

          {/* Legal documents and agreements */}
          <Route path="/lease-agreements/:id" element={<RentalPage />} />
          <Route path="/affidavits/:id" element={<AffidavitsPage />} />
          <Route path="/business-agreements/:id" element={<BusinessAgre />} />
          <Route path="/wills/:id" element={<Willspage />} />
          <Route path="/sale-documents/:id" element={<SaleDocuments />} />
          <Route path="/real-estate-agreements/:id" element={<RealstateAgre />} />
          <Route path="/employment-agreements/:id" element={<EmploymentAgreement />} />
          <Route path="/commercial-documents/:id" element={<Commercialdoc />} />
          <Route path="/Corporate-Agreement/:id" element={<Corporate />} />
          <Route path="/commercial-establishments/:id" element={<Commercialest />} />
          {/* <Route path="/ip-agreements/:id" element={<Inte />} /> */}
          <Route path="/e-commerce/:id" element={<EcommerseContract />} />
          <Route path="/notices/:id" element={<Notice />} />
          <Route path="/power-of-attorney/:id" element={<Powerofattorney />} />
          <Route path="/post-contractual/:id" element={<PostContractual />} />

          {/* Redundant or fallback routes */}
          <Route path="/services/:categorySlug/:id" element={<Commercialest />} />
          <Route path="/services/:categorySlug/:id" element={<EcommerseContract />} />
          <Route path="/services/:categorySlug/:id" element={<AffidavitsPage />} />
          <Route path="/services/:categorySlug/:id" element={<EmploymentAgreement />} />
          <Route path="/services/:categorySlug/:id" element={<RealstateAgre />} />
          <Route path="/services/:categorySlug/:id" element={<Corporate />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
