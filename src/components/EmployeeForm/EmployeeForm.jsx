import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import Controls from '../../components/controls/Controls';
import { useForm, Form } from '../../components/useForm/useForm';
// import * as employeeService from '../../services/employeeService';
import { Autocomplete } from '@material-ui/lab';

const EmployeeForm = ({ employeeData }) => {
  let initialFValues;

  const sexOptions = {
    0: 'male',
    1: 'female',
  };

  if (employeeData) {
    initialFValues = {
      //   fullName: 'Lê Thị Hoa 119',
      //   sex: 1,
      //   age: 22,
      //   phone: '0374345648',
      //   address: 'TMA',
      //   money: 20,
      //   startDate: '02/02/2020',
      //   urlImage: null,
      //   team: {
      //     id: 1,
      //     name: null,
      //   },
    };
    // setIsAddingForm(false);
  } else {
    initialFValues = {
      fullName: '',
      sex: 0,
      age: '',
      phone: '',
      address: '',
      money: '',
      startDate: '02/02/2020',
      urlImage:
        'https://vnpi-hcm.vn/wp-content/uploads/2018/01/no-image-800x600.png',
      team: {
        id: '',
        name: null,
      },
    };
    // setIsAddingForm(true);
  }
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('fullName' in fieldValues)
      temp.fullName = fieldValues.fullName
        ? ''
        : 'Trường này không được để trống.';
    if ('sex' in fieldValues)
      temp.sex = fieldValues.sex = fieldValues.sex
        ? ''
        : 'Trường này không được để trống.';

    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == '');
  };
  const handleSubmit = () => {};
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
            name="name"
            label="Employee name"
            value={values.name}
            onChange={handleInputChange}
            error={errors.name}
          />
        </Grid>
        <Grid item xs={6}>
          <div></div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
