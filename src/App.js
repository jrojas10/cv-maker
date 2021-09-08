import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import Personalinfo from './components/Personalinfo';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  function onSubmitInfo() {
    console.log("submitted")
  };
  return (
    <div className="container">
      <Header />
      <Personalinfo />
      <Experience />
      <Education />
      <button className="btn btn-primary" onClick={onSubmitInfo}>Submit</button>
      <Footer />
    </div>
  );
}

export default App;
