// src/routes/index.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import Client from '../pages/Client/Client';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/client" element={<Client />} />
      </Routes>
    </Router>
  );
}
