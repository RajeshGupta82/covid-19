import React,{useState,useEffect} from 'react'
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

// const Input = ({label, id, handleChange, name, type, value}) => (
//   <>
//     <label htmlFor={id}>{label}</label>
//     <input
//       type={type || 'text'}
//       id={id}
//       name={name || id}
//       onChange={handleChange}
//       value={value}
//     />
//     <br />
//   </>
// );

function AuthComponent(props) {
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")
  console.log(props)

  const handleChange = (e) => {
    e.preventDefault();
    const {email,password} = e.target;
    console.log("email",email)
    console.log("password",password)
  }
  useEffect(()=>{

  },[props.login])
  

  return (
     <div>
      <Container>
          <h2>Sign In</h2>
          <Form className="form">
            <Col>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  id="exampleEmail"
                  name="email"
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  id="examplePassword"
                  name="password"
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Button>Submit</Button>
          </Form>
        </Container>
    </div>
  )
}

export default AuthComponent
