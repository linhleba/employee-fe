import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import * as api from '../../api/index';
import { useLocation } from 'react-router-dom';

const Statistics = () => {
  const location = useLocation();
  let id = location.pathname.split('/')[2];
  const [workingDays, setworkingDays] = useState('');

  useEffect(() => {
    async function fetchWorkingDays() {
      const data = await api.getWorkingDays(id);
      console.log('data is', data);
      setworkingDays(data);
    }
    fetchWorkingDays();
  }, []);

  return (
    <>
      <h3>Statistics </h3>
      <p>Number working days: {workingDays}</p>
      <p>Total gets: </p>
      <p>Total advances: </p>
    </>
  );
};

export default Statistics;
