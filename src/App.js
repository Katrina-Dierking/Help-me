
import './App.css';
import TopNav from './components/nav/TopNav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './view/home/Home';
import Dashboard from './view/dashboard/Dashboard';
import Register from './view/register/Register';
import Login from './view/login/Login';

function App() {
  return (
    <>
    <div className='App-header '>
    <img src={'https://blog.hertimetocode.com/wp-content/uploads/2022/08/HELP.png'} 
    alt = "Help App logo. Help with heart in background."
    height="150px"
    />
    </div>
    <Register />
    </>
    );
  }
  
  export default App;


  // <main>
  //  <BrowserRouter>

  //  <Routes>
  //  <Route exact path='/' element={<Home />}/>
  //  <Route path='/dashboard' element={<Dashboard />}/>
  //  </Routes>
  //  </BrowserRouter>
  //  </main>
  
  
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
  