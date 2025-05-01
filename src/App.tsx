  import { Routes ,    Route  } from "react-router-dom"
import Home from "./Pages/Home"
 
 
 const App = () => {
   return (
     <div>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/projects" element={<h1>Projects</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
       </Routes>
     </div>
   )
 }
 
 export default App
 