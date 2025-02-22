import './App.css';
import ErrorBoundary from './ErrorBoundary';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsFeed from "./pages/NewsFeed";

const App: React.FC = () => {
  return (
    
    <Router>
      <div className="app-container">
        <h1 className="app-heading">Newℹ📨🗞</h1>
        <ErrorBoundary>

        <Routes>
          <Route path="/" element={<NewsFeed />} />
        </Routes>
        </ErrorBoundary>

      </div>
    </Router>
  );
};

export default App;

