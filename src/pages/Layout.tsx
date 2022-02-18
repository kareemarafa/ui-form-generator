import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Routes, Route } from "react-router-dom";
import Form from "./Form";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container pt-3">
        <Routes>
          <Route path="/" element={<Form />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}
export default Layout;
