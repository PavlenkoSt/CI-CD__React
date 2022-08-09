import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import FirstScreen from "./pages/FirstScreen";
import SecondScreen from "./pages/SecondScreen";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstScreen />} />
        <Route path="/some-route" element={<SecondScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
