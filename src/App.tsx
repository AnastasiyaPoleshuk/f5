import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { MainView } from './views/MainView/MainView';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <div className='app'>
        <Routes>
          <Route path='/' element={<MainView />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
