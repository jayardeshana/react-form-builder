import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Login from "./component/Login";
import Signup from "./component/Signup";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
