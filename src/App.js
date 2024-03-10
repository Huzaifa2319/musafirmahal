import { Routes, Route } from "react-router-dom";
import Home from "./Customer/Home";
import Header from "./Customer/Header";
import Main from "./Customer/Main";
import Footer from "./Customer/Footer";
import Feedback from "./Customer/Feedback";
import Profile from "./Customer/Profile";
import Services from "./Customer/Services";
import Form from "./Customer/Login";
import Signup from "./Customer/Signup";
import ItemDetails from "./Customer/ItemDetails";
import AddTrip from "./Admin/AddTrip";
import ManageTrips from "./Admin/ManageTrips";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/trips" element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<Services />} />
        <Route path="/login" element={<Form />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/details/:id" element={<ItemDetails />} />
        <Route path="/addTrip" element={<AddTrip />} />
        <Route path="/manageTrips" element={<ManageTrips />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
