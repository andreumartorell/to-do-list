import './App.css';
import LlistaDeTasques from './components/LlistaDeTasques';

function App() {
  
  return (
    <div className="aplicacio-tasques">
      <div className='tasques-llista-principal'>
        <h1>My to do list</h1>
          <LlistaDeTasques />
      </div>
    </div>
  );
}

export default App;
