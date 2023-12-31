import './App.css';
import { Helmet } from "react-helmet";
import Home from "./home.jsx";
function App() {
  return (
    <div className="App">
      <Helmet>
      <script src="https://hv-camera-web-sg.s3-ap-southeast-1.amazonaws.com/hyperverge-web-sdk@7.3.4/src/sdk.min.js"></script>
      </Helmet>
      <Home/>
    </div>
  );
}

export default App;
