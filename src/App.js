import "normalize.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import Shop from "./pages/shop";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/shop" element={<Shop />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
