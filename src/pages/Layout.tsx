import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Routes, Route } from "react-router-dom";
import Form from "./Form";
import FormOneData from '../data/FormOneData';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container pt-3">
        <Routes>
          <Route path="/" element={<Form data={FormOneData.data} metadata={FormOneData.metadata} />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}
export default Layout;
