import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Beaker, Brain, Database as DatabaseIcon, Home as HomeIcon } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Analysis from './pages/Analysis';
import DatabaseView from './pages/DatabaseView';
import Training from './pages/Training';

const App: React.FC = () => {
  const navItems = [
    { path: '/', name: 'Home', icon: HomeIcon },
    { path: '/analysis', name: 'Analysis', icon: Beaker },
    { path: '/database', name: 'Database', icon: DatabaseIcon },
    { path: '/training', name: 'AI Training', icon: Brain }
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <Navbar items={navItems} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/database" element={<DatabaseView />} />
            <Route path="/training" element={<Training />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;