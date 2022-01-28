import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// import AppContext from '../../context/AppContext';

import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="Login">
      <Form onSubmit={ () => {} }>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            data-testid="email-input"
            autoFocus
            name="email"
            type="email"
            value={ email }
            onChange={ (event) => setEmail(event.target.value) }
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            data-testid="password-input"
            name="password"
            type="password"
            value={ password }
            onChange={ (event) => setPassword(event.target.value) }
          />
        </Form.Group>
        <Button
          data-testid="login-submit-btn"
          variant="dark"
          block
          size="lg"
          type="submit"
        >
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
