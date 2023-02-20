import logo from './imatges/fcc-logo.png';
import './App.css';
import LlistaDeTasques from './components/LlistaDeTasques';

function App() {
  
  return (
    <div className="aplicacio-tasques">
      <div className='logo-contenidor'>
        <img 
          src={logo}
          className='logo' />
      </div>
      <div className='tasques-llista-principal'>
        <h1>Mis tareas</h1>
          <LlistaDeTasques />
      </div>
    </div>
  );
}

export default App;
