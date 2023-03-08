import './App.css';
import './css/main.css';
import Layout from './components/Layout';
import TabPage from './components/TabPage';
import Header from './components/Header';
import Nav from './components/Nav';

//Import Route, as well as browserRouter in index.js to use Router
import {Route, Routes} from 'react-router-dom';

//Path = api Java
function App() {
  return (
    <div className='cont'>
    <Header />
    <Nav />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/:category" element={<TabPage />} />
      </Routes>
    </div>
  )
}

export default App;
