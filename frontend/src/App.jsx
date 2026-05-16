import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import TrainerDashboard from "./pages/TrainerDashboard";
import ClientLogin from "./pages/ClientLogin";
import ClientDashboard from "./pages/ClientDashboard";

import PARQForm from "./pages/PARQForm";
import ConsentForm from "./pages/ConsentForm";
import ContractForm from "./pages/ContractForm";

import Community from "./pages/Community";

import SessionBooking from "./pages/SessionBooking";
import TrainerBookings from "./pages/TrainerBookings";
import Payments from "./pages/Payments";
import Services from "./pages/Services";
import Transformations from "./pages/Transformations";
import Contact from "./pages/Contact";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/parq-form"
          element={<PARQForm />}
        />

        <Route
          path="/consent-form"
          element={<ConsentForm />}
        />

        <Route
          path="/contract-form"
          element={<ContractForm />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/trainer-dashboard"
          element={<TrainerDashboard />}
        />

        <Route
          path="/client-login"
          element={<ClientLogin />}
        />

        <Route
          path="/client-dashboard"
          element={<ClientDashboard />}
        />

        <Route
          path="/community"
          element={<Community />}
        />

        <Route
          path="/session-booking"
          element={<SessionBooking />}
        />
        <Route
        path="/trainer-bookings"
        element={<TrainerBookings />}
        />
        <Route
        path="/payments"
        element={<Payments />}
        />
        <Route
  path="/services"
  element={<Services />}
/>

<Route
  path="/transformations"
  element={<Transformations />}
/>

<Route
  path="/contact"
  element={<Contact />}
/>

      </Routes>

    </BrowserRouter>

  );

}

export default App;