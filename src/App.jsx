import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Bids from "./pages/Bids";
import Saved from "./pages/Saved";
import Collections from "./pages/Collections";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/explore" element={<Explore />} />

        <Route path="/bids" element={<Bids />} />

        <Route path="/saved" element={<Saved />} />

        <Route path="/collections" element={<Collections />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/settings" element={<Settings />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;