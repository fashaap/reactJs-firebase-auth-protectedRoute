import "./App.css";

import { Routes, Route } from "react-router-dom";

import Account from "./components/Account";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./route/ProtectedRoute";

function App() {
  return (
    <>
      <h1>FIREBASE AUTH & CONTEXT</h1>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
