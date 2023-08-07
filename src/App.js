import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import About from "./pages/About"
import StockData from "./pages/StockData"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/stock" element={<StockData />} />
          {/* <Route path="/services" element={<Services />} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
