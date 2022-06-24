import React from 'react';
import moment from 'moment';
import { useForm } from '../useForm/useForm';
import { Form } from '../../components/useForm/useForm';
import { Grid, TextField } from '@material-ui/core';
import Controls from '../../components/controls/Controls';

const WorkingForm = ({ handleInfo }) => {
  let currentDate = moment().format('YYYY-MM-DD');
  let initialFValues;
  initialFValues = {
    date: currentDate,
    hour: '',
  };
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('hour' in fieldValues)
      if (!fieldValues.hour) {
        temp.hour = 'The field shoud not be blank.';
      } else {
        temp.hour = Number(fieldValues.hour > 0)
          ? ''
          : 'Hour must be a positive value';
      }

    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == '');
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    handleAutoCompleteChange,
    handleCreatableInput,
    handleInputChangeDate,
    resetForm,
  } = useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      //   console.log('vao trong nay');
      handleInfo(values, resetForm);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            type="number"
            name="hour"
            label="Hour"
            value={values.hour}
            onChange={handleInputChange}
            error={errors.hour}
          />
        </Grid>
        <Grid item xs={6}>
          <div>
            <Controls.DatePicker
              name="date"
              label="Date"
              value={values.date}
              onChange={handleInputChange}
              error={errors.date}
            />
            <Controls.Button type="submit" text={'Confirm'} />
            <Controls.Button text="Reset" color="default" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default WorkingForm;
