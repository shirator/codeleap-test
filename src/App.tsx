import "./App.css";
import GlobalStyle from "./styles/globalStyles";
import SignupModal from "./components/SignupModal/index";
import MainScreen from "./pages/MainScreen";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/dashboard" element={<MainScreen />} />
      </Routes>
    </div>
  );
}

export default App;
