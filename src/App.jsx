
import MainPage from "./components/MainPage"
import { BrowserRouter , Routes , Route } from "react-router"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>,
    </>
  )
}

export default App
