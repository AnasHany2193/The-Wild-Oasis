import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

import Login from "./pages/Login";
import Users from "./pages/Users";
import Cabins from "./pages/Cabins";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route index element={<Navigate replace to="dashboard" />} />

          <Route path="login" element={<Login />} />
          <Route path="users" element={<Users />} />
          <Route path="cabins" element={<Cabins />} />
          <Route path="account" element={<Account />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
