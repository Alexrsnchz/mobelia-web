import { Routes, Route } from "react-router";
import Home from "@/pages/Home.jsx";
import SignUp from "@/pages/SignUp.jsx";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
