import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import HolidayBookingForm from "./components/HolidayBookingForm";
import AboutUs from "./components/AboutUs";
import IternaryData from "./components/IternaryData"
import LeisurePackage from "./components/LeisurePackage";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookingform" element={<HolidayBookingForm/>} />
      <Route path="/aboutus" element={<AboutUs/>} />
      <Route path="/iternary" element={<IternaryData/>}/>
      <Route path="/leisurePackage" element={<LeisurePackage /> } />
    </Routes>
  </Router>
);

export default App;
