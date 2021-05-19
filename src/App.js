import {Route, Switch} from 'react-router-dom'
import './App.css';
import FresherJobs from './Component/FresherJobs';
import Internships from './Component/Internships';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import OnlineTrainings from './Component/OnlineTrainings';
import Register from './Component/Register';
import WorkFromHome from './Component/WorkFromHome';
import MainForm from './Component/MainForm'
import MainCard from './Component/MainCard'
import Programming from './Component/Programming'


function App() {


 
  return (
   <>
   <Navbar/>
    <Switch>
    <Route exact  path = "/" component ={Internships}/>
    <Route exact path="/OnlineTrainings" component ={OnlineTrainings} />
    <Route exact path="/FresherJobs" component ={FresherJobs} />
    <Route exact path = "/Login" component={Login} />
    <Route exact path="/Register" component ={Register} /> 
    <Route exact path="/workfromhome" component={WorkFromHome} />
    <Route exact path="/MainForm" component={MainForm} />
    <Route exact path="/MainCard" component={MainCard} />
    <Route exact path='/Programming' component={Programming} />

    

    </Switch>
    

    </>
  
  );
}

export default App;
