import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';

import FormError from '../../../components/Form-Error';
import AppValidator from '../../../helpers/Validator';

import styles from './styles.module.scss';

const SignUp = () => {
  const [fakeCondition] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [formErrorText, setFormErrorText] = useState({
    firstName: 'error',
    lastName: 'error',
    email: 'error',
    password: 'error',
  });
  const [errorsVisibility, setErrorsVisibility] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const setFormErrors = (name, message) => setFormErrorText((state) => ({
    ...state,
    [name]: message,
  }));

  const checkErrors = (target) => {
    let errorMessage = '';
    switch (target.name) {
      case 'firstName': {
        errorMessage = AppValidator.checkRequired(target);
        if (!errorMessage.length) errorMessage = AppValidator.checkLength(target, 2, 30);
        break;
      }
      case 'lastName': {
        errorMessage = AppValidator.checkRequired(target);
        if (!errorMessage.length) errorMessage = AppValidator.checkLength(target, 2, 30);
        break;
      }
      case 'email': {
        errorMessage = AppValidator.checkRequired(target);
        if (!errorMessage.length) errorMessage = AppValidator.checkEmail(target);
        break;
      }
      case 'password': {
        errorMessage = AppValidator.checkRequired(target);
        if (!errorMessage.length) errorMessage = AppValidator.checkLength(target, 6, 30);
        break;
      }
      default:
        break;
    }
    setFormErrors(target.name, errorMessage);
  };

  const showErrors = (target) => {
    setErrorsVisibility((state) => ({
      ...state,
      [target.name]: !!formErrorText[target.name],
    }));
  };

  const hideErrors = (target) => {
    setErrorsVisibility((state) => ({
      ...state,
      [target.name]: false,
    }));
  };

  const handleFocus = ({ target }) => {
    checkErrors(target);
    hideErrors(target);
  };

  const handleChange = ({ target }) => {
    checkErrors(target);
    setFormData((state) => ({
      ...state,
      [target.name]: target.value,
    }));
  };

  const handleBlur = ({ target }) => showErrors(target);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={6}>
          <Form className={styles['sign-up-form']} onSubmit={handleSubmit} noValidate>
            {fakeCondition && <FormError message="test error message" />}
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className={`shadow-none ${styles.input}`}
                    value={formData.firstName}
                    invalid={errorsVisibility.firstName}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  <FormFeedback>{formErrorText.firstName}</FormFeedback>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className={`shadow-none ${styles.input}`}
                    value={formData.lastName}
                    invalid={errorsVisibility.lastName}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  <FormFeedback>{formErrorText.lastName}</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                className={`shadow-none ${styles.input}`}
                value={formData.email}
                invalid={errorsVisibility.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <FormFeedback>{formErrorText.email}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                className={`shadow-none ${styles.input}`}
                value={formData.password}
                invalid={errorsVisibility.password}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <FormFeedback>{formErrorText.password}</FormFeedback>
            </FormGroup>
            <Button
              outline
              className={`${styles['submit-button']} shadow-none mt-3`}
              size="lg"
              disabled={
                !!formErrorText.firstName
                || !!formErrorText.lastName
                || !!formErrorText.email
                || !!formErrorText.password
              }
            >
              Sign Up
            </Button>
            <div className={styles['help-link']}>
              <NavLink to="/auth/login" className={styles['help-link-text']}>
                Already have an account?
              </NavLink>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
