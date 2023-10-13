import React, { useState } from 'react';
import { Fondo,Form,Label,Input,Button } from './styled';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones adicionales, como enviar los datos a un servidor.
    console.log('Form data:', formData);
  };

  return (
    <Fondo>
    <Form onSubmit={handleSubmit}>
      <div>
        <Label>Username:</Label>
        <Input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label>Email:</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label>Password:</Label>
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div><br />
      <Button type="submit">Register</Button>
    </Form>
    </Fondo>
  );
};

export default Register;
