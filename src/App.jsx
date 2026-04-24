import { HashRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Buyer from "./pages/Buyer";
import Rent from "./pages/Rent";
import Seller from "./pages/Seller";
import Services from "./pages/Services";
import Tools from "./pages/Tools";
import Support from "./pages/Support";

// Service Pages
import HousingEdge from "./pages/services/HousingEdge";
import HomeLoan from "./pages/services/HomeLoan";
import HousingProtect from "./pages/services/HousingProtect";
import HousingPremium from "./pages/services/HousingPremium";

// Tool Pages
import EMICalculator from "./pages/tools/EMICalculator";
import PropertyValueCalculator from "./pages/tools/PropertyValueCalculator";
import RentReceiptGenerator from "./pages/tools/RentReceiptGenerator";

// service inside compo
// import HappyHomeStay from "./pages/HappyHomeStay";

import PropertyDetails from "./pages/PropertyDetails";

// propertites inside compo
import PropertyListings from "./pages/PropertyListings";

import PropertyListingsHome from "./pages/PropertyListingsHome.jsx";




// support inside compo

// Admin page
import AdminLogin from "./adminpage/AdminLogin.jsx";
import PropertyForm from "./adminpage/PropertyForm";
import AdminPage from "./adminpage/AdminPage";
import AdminPropertyList from "./adminpage/PropertyList";

import { PropertyProvider } from "./usecontext/PropertyContext.jsx"; // Import provider

function App() {
  return (
    <HashRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      {" "}
      {/* ✅ add this */}
      <div>
        <PropertyProvider>
          <Navbar />
          {/* <Navbarnew /> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/buyer" element={<Buyer />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/seller" element={<Seller />} />
            <Route path="/services" element={<Services />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/support" element={<Contact />} />

            {/* Service Routes */}
            <Route path="/housing-edge" element={<HousingEdge />} />
            <Route path="/home-loan" element={<HomeLoan />} />
            <Route path="/housing-protect" element={<HousingProtect />} />
            <Route path="/housing-premium" element={<HousingPremium />} />

            {/* Tool Routes */}
            <Route path="/emi" element={<EMICalculator />} />
            <Route path="/property-value" element={<PropertyValueCalculator />} />
            <Route path="/rent-receipt" element={<RentReceiptGenerator />} />
            {/*  service inside compo */}
            
            {/* <Route path="/happyhomestay" element={<HappyHomeStay />} /> */}
            {/*  propertites inside compo */}
            <Route path="/PropertyListings" element={<PropertyListings />} />
            {/*  support inside compo */}
            {/* <Route path="/Faqpage" element={<Faqpage />} /> */}
            {/* Admin page */}
            <Route path="/AdminLogin" element={<AdminLogin />} />
            <Route path="/PropertyForm" element={<PropertyForm />} />
            <Route path="/AdminPage" element={<AdminPage />} />
            <Route path="/PropertyList" element={<AdminPropertyList />} />

            <Route path="/PropertyListingsHome" element={<PropertyListingsHome />} />

            {/* <Route path="/PropertyDetails/:id" element={<PropertyDetails />} /> */}
            <Route path="/PropertyDetails/:id" element={<PropertyDetails />} />
          </Routes>

          <Footer />
        </PropertyProvider>
      </div>
    </HashRouter>
  );
}

export default App;
