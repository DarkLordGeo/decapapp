
import MainPage from "./components/MainPage"
import Catalog from "./components/Catalog"
import { BrowserRouter, Routes, Route, Link } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
