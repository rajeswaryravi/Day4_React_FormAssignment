import logo from './logo.svg';
import './App.css';

import LoginClassComponent from './components/LoginClassComponent';
import LoginComponent from './components/LoginComponent'
import RefWithLoginComponent from './components/RefWithLoginComponent';
import RefWithClassLoginComponent from './components/RefWithClassLoginComponent';



function App() {
 
  return (
    <div className="App">
      
      <LoginClassComponent/>
     <LoginComponent/>
      {/* <RefWithLoginComponent/>
      <RefWithClassLoginComponent/> */}
    
    </div>
  );
}

export default App;
