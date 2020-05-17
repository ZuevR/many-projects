import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Form,
  Container,
  Row,
  Col,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  Button,
} from 'reactstrap';

import { useHistory } from 'react-router';
import AppValidator from '../../../helpers/Validator';
import FormError from '../../../components/Form-Error';
import { AppContext } from '../../../context/App-Context';

import styles from './styles.module.scss';

const SignIn = () => {
  const [fakeCondition] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formErrorText, setFormErrorText] = useState({ email: 'error', password: 'error' });
  const [errorsVisibility, setErrorsVisibility] = useState({ email: false, password: false });

  const { push, location: { state: { from } } } = useHistory();
  const { login } = useContext(AppContext);

  const setFormErrors = (name, message) => setFormErrorText((state) => ({
    ...state,
    [name]: message,
  }));

  const checkErrors = (target) => {
    const message = AppValidator.checkRequired(target);
    setFormErrors(target.name, message);
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
    login();
    push(from);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={6}>
          <Form className={styles['sign-in-form']} onSubmit={handleSubmit} noValidate>
            {fakeCondition && <FormError message="test error message" />}
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
              disabled={!!formErrorText.email || !!formErrorText.password}
            >
              Sign In
            </Button>
            <div className={styles['help-link']}>
              <NavLink to="/auth/registration" className={styles['help-link-text']}>
                Don&apos;t have an account yet?
              </NavLink>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
