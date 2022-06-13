import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom' 
import {useEffect} from 'react'

import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import { Navbar } from './components/Navbar';
import Redeem from './components/Redeem';
import Home2 from './pages//home/Home2'
import Recipe from './pages/details/UserDetails';
import Create from './pages/create/Create';
function App() {
    const { dispatch } = useAuthContext();
  useEffect(() => {
   const d = JSON.parse(localStorage.getItem("token"))
    dispatch({type: 'LOGIN', payload: d})
  }, [])
  const {user} = useAuthContext();


  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            {!user ? <Signup/> : <Home/>}
            </Route>
          <Route path='/login'>
            {!user && <Login/>}
            {user && <Redirect to='/'/>}
            </Route>
          <Route path='/register'>
            <Signup/>
            </Route>
            <Route path='/marketplace'>
            <Home2/>
            </Route>
            <Route path='/create'>
            <Create/>
            </Route>
            <Route path='/market/:id'>
            <Recipe/>
            </Route>
          <Route path='/redeem'>
            {!user ? <Login/> : <Redeem/>}
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App
