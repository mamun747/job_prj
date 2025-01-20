import Index from "./components/Dashboard/Index";
import {Route, BrowserRouter as Router, Routes} from "react-router"
import Index2 from "./components/Dashboard2/Index2";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Dashboard2" element={<Index2/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;