
import './App.css';
import { Photo } from './Component/Profile/Photo';
import { FullName } from './Component/Profile/FullName';
import { Adress } from './Component/Profile/Adress';

function App() {
  return (
    <div className="App">
     <Photo/>
     <FullName/>
     <Adress/>
    </div>
  );
}

export default App;
