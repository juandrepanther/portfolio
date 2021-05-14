import Navbar from './cmp/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from '../src/cmp/pages/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
