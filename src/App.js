
import './App.css';
import Home from './view/home/Home';


function App() {
  return (
    <section className = 'App'>
      <section className='App-header '>
        <img src={'https://blog.hertimetocode.com/wp-content/uploads/2022/08/HELP.png'} 
          alt = "Help App logo. Help with heart in background."
          height="250px"
        />
        <h2>Who needs help? </h2>
        </section>
      <Home />
    </section>
      );
    }
    
    export default App;
