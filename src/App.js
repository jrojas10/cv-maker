import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import Personalinfo from './components/Personalinfo';
import Experience from './components/Experience';
import Education from './components/Education';
import Display from './components/Display';
import { Route, Switch } from 'react-router-dom';
import MyResume from './pages/MyResume';

import { useState } from 'react';

function App() {
  //initialize states
  const [showCV, setShowCV] = useState(false);
  const [showForm, setShowForm] = useState(true);


  function submitHandler(e) {
    e.preventDefault();
    console.log("submitted")
    setShowCV(true); //shows resume
    setShowForm(false); //hides form
  }




  return (

    <div className="container">

      <Header />
      <Switch>
        <Route path='/' exact>
          {/* <a href='http://localhost:3000/myresume'> LINK </a> */}
          {showForm && <Personalinfo />}
          {showForm && <Experience />}
          {showForm && <Education />}

          <button className="btn btn-primary" onClick={submitHandler}>Submit</button>
          {showCV && <Display />}
          <Footer />
        </Route>


        <Route path='/myresume'>
          <MyResume />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
