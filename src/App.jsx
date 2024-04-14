import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import NotFund from './pages/404/NotFound';

function App() {  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/*' element={<NotFund/>}/>
      </Routes>
    </div>
  );
}

export default App;
