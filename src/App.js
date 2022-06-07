import {Switch, Route, useHistory} from 'react-router-dom';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import UserLogin from './pages/UserLogin/UserLogin';
import HomeTemplate  from './templates/HomeTemplate';
import UserLoginTemplate from './templates/UserLoginTemplate';


function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({type: 'ADD_HISTORY', payload: history})
  },[])
  return (
    <Switch >
      <HomeTemplate exact path="/home" Comp={Home}/>
      <HomeTemplate exact path='/about' Comp={About}/>
      <HomeTemplate exact path='/contact' Comp={Contact}/>
      <UserLoginTemplate exact path='/login' Comp={UserLogin}/>
      <HomeTemplate exact path='/' Comp={Home}/>
      <HomeTemplate exact path='*' Comp={PageNotFound}/>
    </Switch>
  );
}

export default App;
