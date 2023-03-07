import './App.css';
import './css/main.css';
import Header from './components/Header';
import Nav from './components/Nav';
import TabContent from './components/TabContent';

function App() {
  return (
    <div className='container'>
      <Header />
      <Nav />
      <TabContent />
    </div>
  );
}

export default App;
