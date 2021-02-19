
import './App.css'
import Main from './component/Main/Main';

import Navbar from "./component/Navbar/Navbar";
import TopInfo from "./component/TopInfo/TopInfo";




function App() {
  return (
    <div className="App">
        <TopInfo />
        <Navbar />
        <Main />
    </div>
  );
}

export default App;
