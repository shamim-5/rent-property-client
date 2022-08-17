import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Resources from "./components/Home/Resources";
import Buy from "./components/Services/Buy";
import ManageProperty from "./components/Services/ManageProperty";
import Rent from "./components/Services/Rent";
import Sell from "./components/Services/Sell";
import Navbar from "./components/Shared/Navbar";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import Footer from "./components/Shared/Footer";
import NotFound from "./components/NotFound";
import AddProperty from "./components/Dashboard/AddProperty";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/manage" element={<ManageProperty />} />
          <Route path="/add" element={<AddProperty />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Navbar>
    </div>
  );
}

export default App;
