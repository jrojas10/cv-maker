import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import Personalinfo from './components/Personalinfo';
import Experience from './components/Experience';
import Education from './components/Education';
import Display from './components/Display';

import { useState } from 'react';

function App() {
  const [showCV, setShowCV] = useState(false);
  const [showForm, setShowForm] = useState(true);


  function submitHandler(e) {
    e.preventDefault();
    console.log("submitted")
    setShowCV(true);
    setShowForm(false);
  }

  return (
    <div className="container">
      <Header />
      {showForm && <Personalinfo />}
      {showForm && <Experience />}
      {showForm && <Education />}

      <button className="btn btn-primary" onClick={submitHandler}>Submit</button>
      {showCV && <Display />}
      <Footer />
    </div>
  );
}

export default App;
