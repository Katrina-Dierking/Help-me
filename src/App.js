
import './App.css';
import TopNav from './components/nav/TopNav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './view/home/Home';
import Dashboard from './view/dashboard/Dashboard';

function App() {
  return (
    <div>
    <BrowserRouter>
    <TopNav />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
      </div>
    );
  }
  
  export default App;
  
  
  // <section className = 'App'>
  //   <TopNav />
  //   <section className='App-header '>
  //     <img src={'https://blog.hertimetocode.com/wp-content/uploads/2022/08/HELP.png'} 
  //     alt = "Help App logo. Help with heart in background."
  //     height="150px"
  //     />
  //   </section>
  //   <Home />
  // </section>
  