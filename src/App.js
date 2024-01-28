import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import PageContainer from "./containers/PageContainer"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Detail from "./pages/Detail"
import Cart from "./pages/Cart"

function App() {
  return (
    <>
      <PageContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
        <Footer />
      </PageContainer>
    </>
  )
}

export default App
