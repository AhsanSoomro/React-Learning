// import react from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import './App.css';
import About from './Pages/About';
import AddEdit from './Pages/AddEdit';
import Home from './Pages/Home';
import View from './Pages/View';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <ToastContainer position="top-center" />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/add" component={AddEdit}/>
          <Route path="/update/:id" component={AddEdit}/>
          <Route path="/view/:id" component={View}/>
          <Route path="/about" component={About}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
