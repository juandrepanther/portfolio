import Navbar from './cmp/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from '../src/cmp/pages/Home'
import Products from './cmp/pages/Products'
import Services from './cmp/pages/Services'
import NoPage from './cmp/pages/NoPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/*' component={NoPage} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
