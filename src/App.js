import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import Home from './components/pages/home/Home';

function App() {
  return(
    <div>
      <Navbar/>
      <Home/>

    </div>
  )
} 

export default App;