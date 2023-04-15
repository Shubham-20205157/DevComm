import {React,Fragment,useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/layout/Alert';
import setAuthToken from './utilts/setAuthToken';
import { loadUser } from './actions/auth';
if(localStorage.token){
  // if localStorege token exits we will set it in global header
  setAuthToken(localStorage.token);
}
const App = () =>{
  // useEffect keep running untill we have some value.. so by giving [] we are running useEffect only once.
  // it means component didmount..
  // mounting ,unmounting,udating.
  useEffect(()=>{
    store.dispatch(loadUser());
  },[])
  return (
    <Provider store = {store }>
  <Router>
    <Fragment>
      <Navbar />
     

    {/*we have to wrap everything in the routes and react.fragment.*/}
    <Routes>
        <Route exact path = '/' element={<Landing/>} />
    </Routes>
    <section className='container'>
    <Alert />
      <Routes>

        <Route exact path='/login' element= {<Login/>} />
        <Route exact path='/register' element= {<Register/>} />
      </Routes>
    </section>
    </Fragment>
  </Router>
  </Provider>
  );
}

export default App;
