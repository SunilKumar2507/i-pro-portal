import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingScreen from "../src/pages/Landingscreen/landingscreen";
import Bannerscreen from "./pages/bannerscreen/bannerscreen";
import Footer from "./components/footer/footer";
import AboutIPro from "./pages/About/About";
import Carinformation from "./pages/Aboutcar-information/car-information";
import OurServices from "./pages/our-service/our-service";
import Career from "./pages/Career/Career";
import ContactUs from "./pages/Support/support";
import TwoWheelerInsurance from "./pages/twowheelerinsurance/twowheelerinsurance";
import Commercialvehicle from "./pages/commercialvehicle/commercialvehicle";
import HealthInsurance from "./pages/healthinsurance/healthinsurance";
import Underprocess from "./pages/underprocess/underprocess";
import BeliefsSection from "./pages/ourbeliefs/beliefs";
import DifferenceSection from "./pages/whyiproinfinity/whyiproinfinity";
import TravelInsurance from "./pages/Travel/travel";
import Corporate from "./pages/Corporate/Corporate";
import Lifeinsurance from "./pages/LifeInsurance/lifeinsurance";
import Homeinsurance from "./pages/Homeinsurance/homeinsurance";
import OurBusiness from "./pages/ourbusiness/ourbusiness";
import Ourphilosophy from "./pages/ourphy/ourphy";
import Whyinsuranceintermediary from "./pages/whyinsuranceinterediary/whyinsuranceintermediary";
import Personal from "./pages/personalinsurance/personal";
import Corporateinsurancecontant from "./pages/corporateinsurance/corporateinsurance";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing-screen" element={<LandingScreen />} />
        
        <Route path="/" element={<Bannerscreen />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/Aboutus" element={<AboutIPro />} />
        <Route path="/4-wheeler" element={<Carinformation />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/2-wheeler" element={<TwoWheelerInsurance />} />
        <Route path="/two-insurance" element={<TwoWheelerInsurance />} />
        <Route path="/commercial-insurance" element={<Commercialvehicle />} />
        <Route path="/healthinsurance" element={<HealthInsurance />} />
        <Route path="/under-process" element={<Underprocess />} />
        <Route path="/beliefs-section" element={<BeliefsSection />} />
        <Route path="/why-ipro-infinty" element={<DifferenceSection />} />
        <Route path="/travelinsurance" element={<TravelInsurance />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/lifeinsurance" element={<Lifeinsurance />} />
        <Route path="/homeinsurance" element={<Homeinsurance />} />
        <Route path="/our-business" element={<OurBusiness/>} />
        <Route path="/our-phy" element={<Ourphilosophy />} />
        <Route path="/why-insurance-intermediary" element={<Whyinsuranceintermediary />} />
        <Route path="/personal-insurance" element={<Personal />} />
        <Route path="/corporate-insurance" element={<Corporateinsurancecontant />} />
      </Routes>
    </Router>
  );
}

export default App;
