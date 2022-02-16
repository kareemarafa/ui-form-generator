import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import Form from "./Form";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Form />} />
        </Routes>
      </div>
    </>
  )
}
export default Layout;
