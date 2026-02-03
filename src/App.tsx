  import { Routes ,    Route  } from "react-router-dom"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import MyContact from "./Pages/MyContact"
 
 
 
 const App = () => {
   return (
     <div>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mycontact" element={<MyContact />} />
          
       </Routes>
     </div>
   )
 }
 
 export default App
 