 
import Github from '../component/Github'
import Hero from '../component/Hero'
import Project from '../component/Project'
import Second from '../component/Second'
import Experience from './Experience'
import EmailerShowcase from '../component/EmailerShowcase'
 

const Home = () => {
  return (
     <div>
      <section id="home">
        <Hero />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="skill">
        <Second />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="emailers">
        <EmailerShowcase />
      </section>

      <section id="contact">
        <Github />
      </section>
    </div>
  )
}

export default Home
