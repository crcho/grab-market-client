import "./App.css";
import MainPageComponent from "./main/index.js";
//import { Switch, Route } from "react-router-dom"; //  Ver 6이상에서는 Switch -> Routes로 변경됨, component -> element로
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadPage from "./upload/index.js";
import ProductPage from "./product/index.js";

function App() {
  return (
    <div>
      <Routes>
        <Route exact={true} path="/" element={<MainPageComponent />} />> /
        <Route exact={true} path="/products/:id" element={<ProductPage />} />
        <Route exact={true} path="/upload" element={<UploadPage />} />
      </Routes>
    </div>
  );
}
export default App;
