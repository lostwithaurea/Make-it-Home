import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/about";
import Models from "./components/Models";
import Model1 from "./components/models/model1";
import Models2 from "./components/models2";
import Models3 from "./components/models3";
import Models4 from "./components/models4";
import Models5 from "./components/models5";
import Model3 from "./components/models/model3"
import Model2 from "./components/models/model2";
import Analytics from "./components/analytics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/analytics" element={<Analytics/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/models" element={<Models/>}/>
        <Route path="/model1" element={<Model1/>}/>
        <Route path="/models2" element={<Models2/>}/>
        <Route path="models3" element={<Models3/>}/>
        <Route path="models4" element={<Models4/>}/>
        <Route path="models5" element={<Models5/>}/>
        <Route path="model3" element={<Model3/>}/>
        <Route path="model2" element={<Model2/>}/>
       
      </Routes>
    </Router>
  );
}
 
export default App;
