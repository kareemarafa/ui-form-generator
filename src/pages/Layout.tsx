import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Routes, Route} from "react-router-dom";
import GeneratedForm from "./GeneratedForm";
import FormOneData from '../data/FormOneData';
import FormTwoData from '../data/FormTwoData';
import FormThreeData from '../data/FormThreeData';
import {FormEvent, useState} from "react";

const Layout = () => {

  const [serverError, setServerError] = useState<Record<string, string[]>>();

  /**
   * Handle submit event
   * @param event
   * @param formValue
   */
  const handleSubmit = (event: FormEvent, formValue: any) => {
    event.preventDefault(); // Prevent page loading by html default
    if (formValue?.name && formValue?.email) {
      setServerError({
        name: ['Name should be unique (Backend Error)'],
        email: ['Email should be unique (Backend Error)']
      })
    } else if (formValue?.name && formValue?.guarantee) {
      setServerError({
        name: ['Name should be unique (Backend Error)'],
        guarantee: ['Guarantee shouldn\'t exceed 5 years (Backend Error)']
      })
    } else {
      alert(JSON.stringify(formValue, null, 2))
    }
  }

  return (
    <>
      <Navbar/>
      <div className="container pt-3 mb-5">
        <Routes>
          <Route path="/" key={1} element={
            <GeneratedForm data={FormOneData.data}
                           metadata={FormOneData.metadata}
                           serverError={serverError}
                           {...{handleSubmit}}/>
          }/>
          <Route path="/product" key={2} element={
            <GeneratedForm data={FormTwoData.data}
                           metadata={FormTwoData.metadata}
                           serverError={serverError}
                           {...{handleSubmit}}/>

          }/>
          <Route path="/listing" key={3} element={
            <GeneratedForm data={FormThreeData.data}
                           metadata={FormThreeData.metadata}
                           {...{handleSubmit}}/>
          }/>
          <Route
            path="*"
            element={
              <main style={{padding: "1rem"}}>
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
