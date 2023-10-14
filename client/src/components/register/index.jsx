import React, { useState } from 'react';
import { Fondo,Form,Label,Input,Button } from './styled';
import Axios from "axios"


const Register = () => {
  const [formData, setFormData] = useState({
    name_user: '',
    edad: '',
    password: '',
    email_user:''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    Axios.post(`http://localhost:3005/user`,
      formData)
    
    console.log('Form data:', formData);
  };

  return (
    <Fondo>
    <Form >
      <div>
        <Label>Username:</Label>
        <Input
          type="text"
          name="name_user"
          required
          value={formData.name_user}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label>age:</Label>
        <Input
          type="number"
          name="edad"
          required
          value={formData.edad}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label>Email:</Label>
        <Input
          type="email"
          required
          name = "email_user"
          value={formData.email_user}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label>Password:</Label>
        <Input
          type="password"
          name="password"
          required
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <br />
      <Button type="submit" onClick={handleSubmit}>Register</Button>
    </Form>
    </Fondo>
  );
};

export default Register;
