
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardPage from './Pages/Dashboard';
import HomePage from './Pages/home';
import CoinPage from './Pages/Coin';
import ComparePage from './Pages/Compare';
import WatchlistPage from './Pages/watchlist';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
