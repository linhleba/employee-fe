import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import Employee from './pages/Employee';
import Team from './pages/Team';

const Paths = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Employee />} />
        <Route path="team" element={<Team />} />
      </Route>
    </Routes>
  );
};

export default Paths;
