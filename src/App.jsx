import { Routes, Route } from "react-router";
import Home from "@/pages/Home.jsx";
import Authentication from "@/pages/Authentication.jsx";
import Socials from "@/components/auth/socials/Socials.jsx";
import SignIn from "@/components/auth/signIn/SignIn.jsx";
import SignUp from "@/components/auth/signUp/SignUp.jsx";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Authentication />}>
        <Route index element={<Socials />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
