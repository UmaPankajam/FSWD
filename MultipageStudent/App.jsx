

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Students from "./Students";
import Profile from "./Profile";

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav style={{ padding: "10px", background: "#1f2937" }}>
        <Link to="/" style={{ color: "white", marginRight: "15px" }}>
          Dashboard
        </Link>
        <Link to="/students" style={{ color: "white", marginRight: "15px" }}>
          Students
        </Link>
        <Link to="/profile" style={{ color: "white" }}>
          Profile
        </Link>
      </nav>

      {/* Pages */}
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

