import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router';

const List = () => <div>List</div>;
const Options = () => <div>Options</div>;

const Dictionary = ({ match }) => {
  console.log('<-- Render Dictionary -->');
  return (
    <>
      <Switch>
        <Redirect exact from={`${match.path}`} to={`${match.path}/list`} />
        <Route path={`${match.path}/list`} component={List} />
        <Route path={`${match.path}/options`} component={Options} />
      </Switch>
    </>
  );
};

Dictionary.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.objectOf(PropTypes.any),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default Dictionary;
