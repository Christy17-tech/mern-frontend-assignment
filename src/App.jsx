import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import EmployeeForm from './pages/EmployeeForm';
import { EmployeeProvider } from './context/EmployeeContext';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employee-form" element={<EmployeeForm />} />
      </Routes>
    </AnimatePresence>
  );
}


function App() {
  return (
    <EmployeeProvider>
      <Router basename="/mern-frontend-assignment">
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-indigo-500/30">
          <Navbar />
          <AnimatedRoutes />
        </div>
      </Router>
    </EmployeeProvider>
  );
}

export default App;
