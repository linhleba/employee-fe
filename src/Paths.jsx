import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import Employee from './pages/Employee';
import EmployeeDetail from './pages/EmployeeDetail';
import Information from './components/EmployeeTab/Information';
import Working from './components/EmployeeTab/Working';
import Team from './pages/Team';
import Statistics from './components/EmployeeTab/Statistics';
import Advances from './components/EmployeeTab/Advances';

const Paths = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Employee />} />
        <Route path="employee/:id" element={<EmployeeDetail />}>
          <Route path="info" element={<Information />} />
          <Route path="working" element={<Working />} />
          <Route path="advances" element={<Advances />} />
          <Route path="stats" element={<Statistics />} />
        </Route>
        <Route path="team" element={<Team />} />
      </Route>
    </Routes>
  );
};

export default Paths;
