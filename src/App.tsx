  import { Routes ,    Route  } from "react-router-dom"
import Home from "./Pages/Home"
import Second from "./component/Second"
import Project from "./component/Project"
import { Contact } from "lucide-react"
 
 
 const App = () => {
   return (
     <div>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skill" element={<Second />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
       </Routes>
     </div>
   )
 }
 
 export default App
 