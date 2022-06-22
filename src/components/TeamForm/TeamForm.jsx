import React from 'react';
import moment from 'moment';
import { useForm } from '../useForm/useForm';
import { Form } from '../../components/useForm/useForm';
import { Grid, TextField } from '@material-ui/core';
import Controls from '../../components/controls/Controls';

const TeamForm = ({ handleInfo }) => {
  let currentDate = moment().format('MM-DD-YYYY');
  let initialFValues;
  initialFValues = {
    name: '',
  };
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('name' in fieldValues)
      temp.name = fieldValues.name ? '' : 'The field shoud not be blank.';

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
        <Controls.Input
          name="name"
          label="Name"
          value={values.name}
          onChange={handleInputChange}
          error={errors.name}
        />
        <Controls.Button type="submit" text={'Confirm'} />
        <Controls.Button text="Reset" color="default" onClick={resetForm} />
      </Grid>
    </Form>
  );
};

export default TeamForm;
