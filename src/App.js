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
import RequireAuth from "./components/Authentication/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Rent />} />
          <Route
            path="/add"
            element={
              <RequireAuth>
                <AddProperty />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Navbar>
      <ToastContainer />
    </div>
  );
}

export default App;
