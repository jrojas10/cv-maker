import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import Personalinfo from './components/Personalinfo';

function App() {
  return (
    <div className="container">
      <Header />
      <Personalinfo />
      <Footer />
    </div>
  );
}

export default App;
