import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./pages/explore";
import Messages from "./pages/messages";
import Notification from "./pages/notification";
import Profile from "./pages/profile";
import Home from "./pages/home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="explore" element={<Explore />} />
          <Route path="messages" element={<Messages />} />
          <Route path="notification" element={<Notification />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;