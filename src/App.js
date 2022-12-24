import Main from "./pages/Main/Main";
import PageUnknown from "./pages/PageUnknown/PageUnknown";
import { Routes, Route, Link } from "react-router-dom";
import Parser from "./pages/Parser/Parser";
import FAQ from "./pages/FAQ/FAQ";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/parser" element={<Parser />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<PageUnknown />} />
    </Routes>
  );
}

export default App;
