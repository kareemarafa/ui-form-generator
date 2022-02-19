import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Routes, Route } from "react-router-dom";
import GeneratedForm from "./GeneratedForm";
import FormOneData from '../data/FormOneData';
import FormTwoData from '../data/FormTwoData';
import FormThreeData from '../data/FormThreeData';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container pt-3 mb-5">
        <Routes>
          <Route path="/" element={<GeneratedForm data={FormOneData.data} metadata={FormOneData.metadata} />} />
          <Route path="/product" element={<GeneratedForm data={FormTwoData.data} metadata={FormTwoData.metadata} />} />
          <Route path="/listing" element={<GeneratedForm data={FormThreeData.data} metadata={FormThreeData.metadata} />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}
export default Layout;
