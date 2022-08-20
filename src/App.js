import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Home from './pages/Home'
import SkillDetails from './pages/SkillDetails'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container mt-5'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Projects' component={Projects} />
          <Route path='/skills/:id' component={SkillDetails} />
          <Route path='/Skills' component={Skills} />
          <Route path='/contact' component={Contact} />
          <Route component={ NotFound}/>
        </Switch>
      </div>

    </BrowserRouter>

  );
}

export default App;
