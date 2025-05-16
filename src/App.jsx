import "./App.css";
import NavBar from "./Components/NavBar/NavBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Footer from "./Components/Footer/Footer";
import HouseRentalPage from "./Pages/RentalAgreement/HouseRentalPage";
import FlatRentalPag from "./Pages/RentalAgreement/flatAgreement/flatRentalPage";
import Furnishedflatagree from "./Pages/RentalAgreement/Furnishedflatrentalagreement/furnishedflatagree";
import Furnishedhouse from "./Pages/RentalAgreement/Furnishedrentagreement/furnished-house";
import Leaseagreefurnished from "./Pages/RentalAgreement/Leaseoffurnished/Leaseagreefurnished";
import Quickrental from "./Pages/RentalAgreement/Quickrentalagreement/quick-rental";
import Residentalleag from "./Pages/RentalAgreement/Residentialleaseagreement/Residentalleag";
import Roomrental from "./Pages/RentalAgreement/Roomrentalagreement/roomrental";
import PayingGestagree from "./Pages/RentalAgreement/paying-guest-agreement/PayingGestagree";
import Products from "./Pages/ProductPage/Products";
import ServicesPage from "./Pages/Servies/ServicesPage/ServicesPages";
import SubcategoryPage from "./Pages/Servies/ServicesPage/SubcategoryPage";
import LawyerConnectPage from "./Pages/LawyerConnect/LawyerConnectPage";

import ProductDetail from "./Pages/ProductPage/ProductDetail";
import LoginPage from "./Components/Login/Login";
import RentalPage from "./Pages/Servies/LeaseAgreements/Residential-lease-agreement";
import AffidavitsPage from "./Pages/Servies/Affidavits/Affidavits";
import BusinessAgre from "./Pages/Servies/BusinessAgreements/BusinessAgre";
import Willspage from "./Pages/Servies/Wills/Wills";
import SaleDocuments from "./Pages/Servies/SaleDocuments/SaleDoc";
import RealstateAgre from "./Pages/Servies/Real-estate-agreements/RealstateAgre";
import EmploymentAgreement from "./Pages/Servies/EmploymentAgreements/EmploymentAgreement";
import Commercialdoc from "./Pages/Servies/CommercialDocuments/commersial";
import Corporate from "./Pages/Servies/CorporateAgreement/CorporetAgreement";
import NotFound from "./Pages/NotFound";
import Intellectual from "./Pages/Servies/Intellectualproperty/Intellectualproperty";
import Commercialest from "./Pages/Servies/Commercialestablishments/establishCommersical";
import EcommerseContract from "./Pages/Servies/E-commercecontracts/EcommerseContract";
import Notice from "./Pages/Servies/Notices/Notice";
import Powerofattorney from "./Pages/Servies/Power-of-attorney/Power-of-attorney";
import PostContractual from "./Pages/Servies/Post-contractualcontracts-matters/Post-contractual";


// Import other components...

function App() {
  return (
    <Router>
      <NavBar />
     
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Rental agreement routes */}
        <Route
          path="/rental-agreements/house-rent-agreement"
          element={<HouseRentalPage />}
        />
        <Route
          path="/rental-agreements/flat-rent-agreement"
          element={<FlatRentalPag />}
        />

        <Route
          path="/rental-agreements/Furnished-rental-agreement"
          element={<Furnishedflatagree />}
        />
        <Route
          path="rental-agreements/furnished-house-rent-agreement"
          element={<Furnishedhouse />}
        />
        <Route
          path="/rental-agreements/Lease-furnished-agreement"
          element={<Leaseagreefurnished />}
        />
        <Route
          path="/rental-agreements/quick-rental-agreement"
          element={<Quickrental />}
        />
        <Route
          path="/rental-agreements/Residential-lease-agreement"
          element={<Residentalleag />}
        />
        <Route
          path="/rental-agreements/room-rental-agreement"
          element={<Roomrental />}
        />
        <Route
          path="/rental-agreements/paying-guest-agreement"
          element={<PayingGestagree />}
        />

        <Route path="/products" element={<Products />} />
        <Route path="/product-detail/:productId" element={<ProductDetail />} />

        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/services/:categorySlug" element={<SubcategoryPage />} />

        <Route path="/lawyer-contact" element={<LawyerConnectPage />} />

        {/* Lease agreement routes */}
        <Route path="/lease-agreements/:id" element={<RentalPage />} />

        <Route path="/affidavits/:id" element={<AffidavitsPage />} />
        <Route path="/business-agreements/:id" element={<BusinessAgre />} />

        <Route path="/wills/:id" element={<Willspage />} />
        <Route path="/sale-documents/:id" element={<SaleDocuments />} />
        <Route path="/real-estate-agreements/:id" element={<RealstateAgre />}/>
        <Route path="/employment-agreements/:id" element={<EmploymentAgreement />}/>
        <Route path="/commercial-documents/:id" element={<Commercialdoc />}/>
        <Route path="/Corporate-Agreement/:id" element={<Corporate />}/>
        <Route path="/commercial-establishments/:id" element={<Commercialest />}/>
        <Route path="/ip-agreements/:id" element={<Intellectual />}/>
        <Route path="/e-commerce/:id" element={<EcommerseContract />}/>
        <Route path="/notices/:id" element={<Notice />}/>
        <Route path="/power-of-attorney/:id" element={<Powerofattorney />}/>
        <Route path="/post-contractual/:id" element={<PostContractual />}/>
        <Route path="/services/:categorySlug/:id" element={<Commercialest />} />
        <Route path="/services/:categorySlug/:id" element={<EcommerseContract />} />
        <Route path="/services/:categorySlug/:id" element={<AffidavitsPage />} />
        <Route path="/services/:categorySlug/:id" element={<EmploymentAgreement />} />
        <Route path="/services/:categorySlug/:id" element={<RealstateAgre />} />
        <Route path="/services/:categorySlug/:id" element={<Corporate />} />
        



        {/* Other routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
