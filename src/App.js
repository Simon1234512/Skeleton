import './App.css';
import Secondvariant from './components/Secondvariant';
import { Signup } from './components/Signup';
import Variants from './components/Variants';

function App() {
  return (
        <div className="App">
          {/* <Signup /> */}
          <Variants/>
          <br/>
          <Secondvariant/>
        </div>
  );
}

export default App;
