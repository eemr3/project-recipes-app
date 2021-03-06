import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {
  setCocktailsTokenInStorage,
  setEmailInStorage,
  setMealsTokenInStorage,
} from '../../services/localStoreageData';
import LogoImg from '../../images/Logo.svg';

import './Login.css';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    const passwordLength = 6;
    /* Regex de validação de e-mail retirado do
      https://qastack.com.br/programming/46155/how-to-validate-an-email-address-in-javascript
      Autor: — C. Lee
    */
    const validateEmail = /\S+@\S+\.\S+/;
    return validateEmail.test(email) && password.length > passwordLength;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMealsTokenInStorage(1);
    setCocktailsTokenInStorage(1);
    setEmailInStorage(email);
    history.push('/foods');
  };

  return (
    <Container
      className="Login"
    >
      <img src={ LogoImg } alt="Logo do App" />
      <Form onSubmit={ handleSubmit }>
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
          className="login-btn"
          data-testid="login-submit-btn"
          // variant="danger"
          block
          size="lg"
          type="submit"
          disabled={ !validateForm() }
        >
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
