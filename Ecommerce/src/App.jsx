import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Collectionpage from "./Pages/Collectionpage/Collectionpage";
import Menpage from "./Pages/Menpage/Menpage";
import Womenpage from "./Pages/Womenpage/Womenpage";
import HomePage from "./Pages/HomePage/HomePage";
import Aboutpage from "./Pages/Aboutpage/Aboutpage";
import Contactpage from './Pages/Contactpage/Contactpage'
function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<HomePage/>}>
      <Route path="Collectionpage" element={<Collectionpage/>}></Route>
      <Route path="Menpage" element={<Menpage/>}></Route>
      <Route path="Womenpage" element={<Womenpage/>}></Route>
      <Route path="Aboutpage" element={<Aboutpage/>}></Route>
      <Route path="Contactpage" element={<Contactpage/>} ></Route>
      </Route>
     </Routes>
     </BrowserRouter>
     
    </>
  )
}
export default App