import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Explore from './pages/Explore'
import Offers from './pages/Offers';
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Explore />} />
          <Route exact path="/offers" element={<Offers />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/sign-in" element={<SignIn />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
