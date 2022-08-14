import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Home from './pages/Home' 


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Home}/>
        <Route path= '/Projects' component={Projects}/>
        <Route path= '/Skills' component={Skills} />
        <Route path= '/contact' component={Contact}/>
        <h1> Hello </h1>
        <button className='btn btn-success'>OK</button>
      </BrowserRouter>
    </div>
  );
}

export default App;
