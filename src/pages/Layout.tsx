import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Routes, Route } from "react-router-dom";
import Form from "./Form";
import {Metadata, FormOneType} from "../interfaces";

/**
 * Dummy data
 */
const metadata: Metadata = {
  fields: [
    {
      id: 'name',
      type: 'text',
      label: 'Name'
    },
    {
      id: 'age',
      type: 'number',
      label: 'Age'
    },
    {
      id: 'comment',
      type: 'textarea',
      label: 'Comment',
      disabled: true
    }
  ]
}

/**
 * Dummy data
 */
const data: FormOneType = {
  name: "Bob",
  age: 42,
  comment: "The best developer in the world"
}

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container pt-3">
        <Routes>
          <Route path="/" element={<Form {...{metadata, data}} />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}
export default Layout;
