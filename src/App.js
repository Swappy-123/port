import {Component} from "react"
import {Route, Switch} from "react-router-dom"
import Home from "./components/Home"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"

class App extends Component{
  render() {
    return(
      <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        </Switch>   
      </>
      

    )
  }
}

export default App