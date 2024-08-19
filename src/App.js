import "antd/dist/antd.css";
import "./App.css";
import MainPageComponent from "./main/index.js";
//import { Switch, Route } from "react-router-dom"; //  Ver 6이상에서는 Switch -> Routes로 변경됨, component -> element로
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom"; // useHistory는 V6에서 useNavigate로 대체
import UploadPage from "./upload/index.js";
import ProductPage from "./product/index.js";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

function App() {
  const navigate = useNavigate(); // const history = useHistory() 대체

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              navigate("/upload"); //history.push() 대체
              //alert("업로드 클릭");
              //console.log("업로드클릭");
            }}
            icon={<DownloadOutlined />}
          >
            상품업로드
          </Button>
        </div>
      </div>

      <div id="body">
        <Routes>
          <Route exact={true} path="/" element={<MainPageComponent />} />> /
          <Route exact={true} path="/products/:id" element={<ProductPage />} />
          <Route exact={true} path="/upload" element={<UploadPage />} />
        </Routes>
      </div>
      <div id="footer"></div>
    </div>
  );
}
export default App;
