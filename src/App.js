import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Home from './pages/Home' 


function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <div className='container mt-5'>
        <Route exact path='/' component={Home}/>
        <Route path= '/Projects' component={Projects}/>
        <Route path= '/Skills' component={Skills} />
        <Route path= '/contact' component={Contact}/>
        </div>
        
      </BrowserRouter>
    
  );
}

export default App;
