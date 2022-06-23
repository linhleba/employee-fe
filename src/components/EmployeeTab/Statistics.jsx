import React, { useEffect, useContext } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import * as api from '../../api/index';
import { useLocation } from 'react-router-dom';
import { EmployeeDetailContext } from '../../pages/EmployeeDetail';
import Chart from 'react-apexcharts';

const Statistics = () => {
  const [totalSalary, setTotalSalary] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    title: {
      text: 'Total Salary By Month',
      align: 'left',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
  });

  const [series, setSeries] = useState([
    {
      name: 'Salary',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  ]);

  const location = useLocation();
  let id = location.pathname.split('/')[2];
  const employeeDetail = useContext(EmployeeDetailContext);
  const [workingDays, setworkingDays] = useState('');
  const [totalAdvances, settotalAdvances] = useState('');
  const [totalMoney, settotalMoney] = useState('');
  const [workingData, setworkingData] = useState(null);
  const [advanceData, setadvanceData] = useState(null);

  const [salary, setSalary] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const [totalAdvance, setTotalAdvance] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  useEffect(() => {
    const handleSalary = () => {
      let tempSalary = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      let tempAdvance = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      if (workingData && advanceData) {
        workingData.map((element) => {
          const month = new Date(element.date).getMonth();
          tempSalary[month] =
            element.hour * employeeDetail.money + tempSalary[month];
        });
        advanceData.map((element) => {
          const month = new Date(element.date).getMonth();
          tempAdvance[month] += element.money;
        });

        setSalary(tempSalary);

        setTotalAdvance(tempAdvance);
        // setadvanceData(tempAdvance);
        // return salary;
      }
    };
    handleSalary();
    let temp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < salary.length; i++) {
      temp[i] = salary[i] - totalAdvance[i];
    }
    setTotalSalary(temp);
    setSeries([
      {
        name: 'Salary',
        data: temp,
      },
    ]);
  }, [workingData, advanceData]);

  useEffect(() => {
    async function fetchWorkingDays() {
      const data = await api.getWorkingDays(id);
      const totalAdvancesData = await api.getTotalAdvances(id);
      const totalMoneyData = await api.getTotalMoney(id);
      setworkingDays(data);
      settotalAdvances(totalAdvancesData);
      settotalMoney(totalMoneyData);

      const workData = await api.getWorking(id);
      setworkingData(workData);
      const advanceData = await api.getAdvance(id);
      setadvanceData(advanceData);
    }
    fetchWorkingDays();
  }, []);

  return (
    <>
      <h3>Statistics </h3>
      <Chart options={options} series={series} type="line" width="500" />
      <p>'</p>
      <p>Number working days: {workingDays ? workingDays : 0}</p>
      <p>Total gets: {totalMoney ? totalMoney : 0} </p>
      <p>Total advances: {totalAdvances ? totalAdvances : 0} </p>
    </>
  );
};

export default Statistics;
