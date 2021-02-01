import React,{useState} from 'react'
import map from 'lodash/map';
import startCase from 'lodash/startCase';
import {Form, Button, Container} from "reactstrap"
const Input = ({label, id, handleChange, name, type, value}) => (
  <>
    <label htmlFor={id}>{label}</label>
    <input
      type={type || 'text'}
      id={id}
      name={name || id}
      onChange={handleChange}
      value={value}
    />
    <br />
  </>
);

const Radio = ({label, id, handleChange, name, form}) => (
  <>
    <input
      type="radio"
      id={id}
      name={name}
      onChange={handleChange}
      value={id}
      checked={form[name] === id}
    />
    <label htmlFor={id}>{label}</label>
    <br />
  </>
);

const Checkbox = ({label, id, handleChange, form}) => (
  <>
    <input
      type="checkbox"
      id={id}
      name={id}
      value={id}
      onChange={handleChange}
      checked={form[id]}
    />
    <label htmlFor={id}>{label}</label>
    <br />
  </>
);

function FormComponent() {
  const [form, setFormValue] = useState({
    name: '',
    age: '',
    occupation: '',
    CovidPositive: false,
    PreExistingDiebeticCondition: false,
    PreExistingRespiratoryCondition:false,
    AlreadyRecoveredFromCovid19:false,
    HealthInsurance:false
  });

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    //console.log({...e.target});
    setFormValue((prevFormValues) => ({
      ...prevFormValues,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("VALUES")
    console.log("new val",form.name)
  }
  return (
    <>
    <Container>
      <Form onSubmit={handleSubmit}>
      <Input 
        label="Name: " 
        id="name" 
        handleChange={handleChange} 
        value={form.name} 
      />
      <Input
        label="Age: "
        id="age"
        handleChange={handleChange}
        value={form.Age}
      />
      <p>Occupation</p>
      <Radio
        form={form}
        name="occupation"
        label="Healthcare Workers"
        id="HealthcareWorkers"
        handleChange={handleChange}
      />
      <Radio
        form={form}
        name="occupation"
        label="Public Services Staff"
        id="PublicServicesStaff"
        handleChange={handleChange}
      />
      <Radio
        form={form}
        name="occupation"
        label="Manufacturing"
        id="Manufacturing"
        handleChange={handleChange}
      />
      <Radio
        form={form}
        name="occupation"
        label="IT Professional"
        id="ITProfessional"
        handleChange={handleChange}
      />
      <Radio
        form={form}
        name="occupation"
        label="Student"
        id="Student"
        handleChange={handleChange}
      />
      
      <p>I like the following: </p>
      {/* <Checkbox form={form} label="covid" id="resp_problem" handleChange={handleChange} />
      <Checkbox form={form} label="resp_problem" id="resp_problem" handleChange={handleChange} /> */}
      <Checkbox form={form} label="Covid Positive" id="CovidPositive" handleChange={handleChange} />
      <Checkbox form={form} label="Pre-Existing Diebetic Condition" id="PreExistingDiebeticCondition" handleChange={handleChange} />
      <Checkbox form={form} label="Pre-Existing Respiratory Condition" id="PreExistingRespiratoryCondition" handleChange={handleChange} />
      <Checkbox form={form} label="Already Recovered from Covid-19" id="AlreadyRecoveredFromCovid19" handleChange={handleChange} />
      <Checkbox form={form} label="Health Insurance" id="HealthInsurance" handleChange={handleChange} />
      <Button type="submit">Submit</Button>
      </Form>
      </Container>
    </>
  )
}

export default FormComponent



/**
 * {map(form, (val, key) => (
        <div key={key}>
          {`${startCase(key)}: `}
          {`${val}`}
        </div>
      ))}
 */