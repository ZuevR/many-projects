import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const FormError = ({ message }) => (
  <div className={styles['error-container']}>{message}</div>
);

FormError.propTypes = { message: PropTypes.string };

FormError.defaultProps = { message: 'Some field contains an error' };

export default FormError;
