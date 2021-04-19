import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
         <div className="container">  
            <HeaderComponent />
            <div className="container">
          <Switch>
            <Route path = "/" exact component = {ListEmployeeComponent}></Route>  
            <Route path = "/employees" component = {ListEmployeeComponent}></Route>
            <Route path = "/add-employee" component = {CreateEmployeeComponent}></Route>
            <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>
          </Switch>
          </div>
          <FooterComponent />
          </div>
  </Router>
  </div>
  );
}

export default App;
