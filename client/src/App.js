import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
