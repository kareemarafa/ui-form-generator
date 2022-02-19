import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Routes, Route} from "react-router-dom";
import GeneratedForm from "./GeneratedForm";
import FormOneData from '../data/FormOneData';
import FormTwoData from '../data/FormTwoData';
import FormThreeData from '../data/FormThreeData';

const Layout = () => {
  return (
    <>
      <Navbar/>
      <div className="container pt-3 mb-5">
        <Routes>
          <Route path="/" key={1} element={
            <GeneratedForm data={FormOneData.data}
                           metadata={FormOneData.metadata}/>
          }/>
          <Route path="/product" key={2} element={
            <GeneratedForm data={FormTwoData.data}
                           metadata={FormTwoData.metadata}/>
          }/>
          <Route path="/listing" key={3} element={
            <GeneratedForm data={FormThreeData.data}
                           metadata={FormThreeData.metadata}
            />}/>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}
export default Layout;
