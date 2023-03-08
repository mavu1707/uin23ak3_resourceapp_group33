import './App.css';
import './css/main.css';
import Layout from './components/Layout';

//Import Route, as well as browserRouter in index.js to use Router
import {Route, Routes} from 'react-router-dom';

//Path = api Java
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}/>
    </Routes>
  )
}

export default App;
