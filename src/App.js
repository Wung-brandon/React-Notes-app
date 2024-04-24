import './App.css';
import { 
  MainPage,
  HeaderPage,
  Footer
} from './components';

import { useState } from 'react';


function App() {
    const [isdark, setIsDark] = useState(false)

    function toggleColor(){
      setIsDark(prevDark => !prevDark)
    }



  return (
    <div className={`App ${isdark ? "dark" : "" }`}>
      <HeaderPage darkMode={isdark} toggle={toggleColor}/>
      <MainPage darkMode={isdark}/>
      <Footer darkMode={isdark}/>
    
    </div>
  );
}

export default App;
