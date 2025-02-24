import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Energy from "./component/Energy";
import Chemicals from "./component/Chemicals";
import Petrochemicals from "./component/Petrochemicals";
import Agrocommodities from "./component/Agrocommodities";
import Recycleling from "./component/RecyclelingSolutions";
import Metal from "./component/Metal";
import Food from "./component/Food";
import Bio from "./component/Bio";
import Machineries from "./component/Machineries";
import Shipping from "./component/Shipping";
import Storage from "./component/Storage";
import Transport from "./component/Transport";
import Port from "./component/Port";
import Contactus from "./component/Contactus";

const App = () => {
  return (
   <>
   <Router>
        {/* <Header /> */}
        <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/Energy" element={<Energy/>} />
             <Route path="/Chemicals" element={<Chemicals/>}/>
             <Route path="/Petrochemicals" element={<Petrochemicals/>}/>
             <Route path="/Agrocommodities" element={<Agrocommodities/>}/>
             <Route path="/RecyclelingSolutions" element={<Recycleling/>}/>
             <Route path="/Metal" element={<Metal/>}/>
             <Route path="/Food" element={<Food/>}/>
             <Route path="/Bio" element={<Bio/>}/>
             <Route path="/Machineries" element={<Machineries/>}/>
             <Route path="/Shipping" element={<Shipping/>}/>
             <Route path="/Storage" element={<Storage/>}/>
             <Route path="/Transport" element={<Transport/>}/>
             <Route path="/Port" element={<Port/>}/>
             <Route path="/Contactus" element={<Contactus/>}/>
        </Routes>
        <Footer/>
    </Router>
    </>
  );
};

export default App;
