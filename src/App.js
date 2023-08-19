import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Meme from './Component/Meme';
import Footer from './Component/Footer';

import './Style/App.css';
function App() {
  return (
    <div className="App">
      <Header/>
      <Meme/>
      <Footer/>
    </div>
  );
}

export default App;
