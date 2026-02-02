 
import Github from '../component/Github'
import Hero from '../component/Hero'
import Project from '../component/Project'
import Second from '../component/Second'
import Experience from './Experience'
 

const Home = () => {
  return (
    <div>
        <Hero />
        <Experience />
        <Second />
        <Project />
        <Github />
      </div>
  )
}

export default Home
