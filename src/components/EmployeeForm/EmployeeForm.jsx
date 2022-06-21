import React, { useState, useEffect } from 'react';
import { Grid, TextField } from '@material-ui/core';
import Controls from '../../components/controls/Controls';
import { useForm, Form } from '../../components/useForm/useForm';
// import * as employeeService from '../../services/employeeService';
import { Autocomplete } from '@material-ui/lab';
import * as api from '../../api/index';
import moment from 'moment';

const EmployeeForm = ({ employeeData, handleInfo }) => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    async function getTeam() {
      const data = await api.getTeam();

      setTeam(data);
    }
    getTeam();
  }, []);

  //   useEffect(() => {
  //     console.log('team is', team);
  //   }, [team]);
  let initialFValues;

  const sexOptions = [
    {
      id: 0,
      name: 'Male',
    },
    {
      id: 1,
      name: 'Female',
    },
  ];

  let currentDate = moment().format('MM-DD-YYYY');

  if (employeeData) {
    initialFValues = {
      fullName: employeeData.fullName,
      sex: employeeData.sex,
      age: employeeData.age,
      phone: employeeData.phone,
      address: employeeData.address,
      money: employeeData.money,
      startDate: employeeData.startDate,
      urlImage: employeeData.urlImage,
      team_id: employeeData.team.id,
    };
  } else {
    initialFValues = {
      fullName: '',
      sex: 0,
      age: '',
      phone: '',
      address: '',
      money: '',
      startDate: currentDate,
      urlImage:
        'https://vnpi-hcm.vn/wp-content/uploads/2018/01/no-image-800x600.png',
      team_id: '1',
    };
  }
  // setIsAddingForm(true);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('fullName' in fieldValues)
      temp.fullName = fieldValues.fullName
        ? ''
        : 'The field shoud not be blank.';
    if ('address' in fieldValues)
      temp.address = fieldValues.address ? '' : 'The field shoud not be blank.';
    if ('age' in fieldValues)
      temp.age = fieldValues.age ? '' : 'The field shoud not be blank.';
    if ('money' in fieldValues)
      temp.money = fieldValues.money ? '' : 'The field shoud not be blank.';

    if ('phone' in fieldValues)
      temp.phone = fieldValues.phone ? '' : 'The field shoud not be blank.';
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == '');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      //   console.log('vao trong nay');
      handleInfo(values, resetForm, employeeData);
    }
  };
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    handleAutoCompleteChange,
    handleCreatableInput,
    resetForm,
  } = useForm(initialFValues, true, validate);
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="fullName"
            label="Name"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.Input
            name="address"
            label="Employee address"
            value={values.address}
            onChange={handleInputChange}
            error={errors.address}
          />
          <Controls.Input
            type="number"
            name="age"
            label="Age"
            value={values.age}
            onChange={handleInputChange}
            error={errors.age}
          />
          <Controls.Input
            type="number"
            name="money"
            label="Money/hour"
            value={values.money}
            onChange={handleInputChange}
            error={errors.money}
          />
        </Grid>
        <Grid item xs={6}>
          <div>
            <Controls.Select
              name="team_id"
              label="Team"
              value={values.team_id}
              onChange={handleInputChange}
              error={errors.team_id}
              options={team}
            />
            <Controls.Select
              name="sex"
              label="Sex"
              value={values.sex}
              onChange={handleInputChange}
              error={errors.sex}
              options={sexOptions}
            />
            <Controls.DatePicker
              name="startDate"
              label="Date"
              value={values.startDate}
              onChange={handleInputChange}
              error={errors.startDate}
            />
            <Controls.Input
              type="number"
              name="phone"
              label="Phone number"
              value={values.phone}
              onChange={handleInputChange}
              error={errors.phone}
            />
            <Controls.Button
              type="submit"
              text={employeeData ? 'Update' : 'Confirm'}
            />
            <Controls.Button text="Reset" color="default" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
