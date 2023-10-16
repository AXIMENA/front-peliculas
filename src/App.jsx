import { Navbar } from './component/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ListData } from './pages/ListData';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/list-data" element={<ListData />}></Route>
      </Routes>
    </>
  );
}

export default App;
