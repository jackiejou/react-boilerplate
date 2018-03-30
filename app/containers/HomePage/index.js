/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import H2 from 'components/H2';
import Form from './Form';
import Input from './Input';
import { changeMessage, saveMessage } from './actions';
import { makeSelectMessage, makeSelectError, makeSelectSuccess } from './selectors';
import reducer from './reducer';
import saga from './saga';
import SuccessMessage from '../../components/SuccessMessage/index';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { success, error } = this.props;
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div>
          <H2>
            Save a message
          </H2>
          <Form onSubmit={this.props.onSubmitForm}>
            <label htmlFor="message">
              <Input
                id="message"
                type="text"
                placeholder="Enter a message"
                value={this.props.message}
                onChange={this.props.onChangeMessage}
              />
            </label>
          </Form>
          <SuccessMessage success={success} error={error} />
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  message: PropTypes.string,
  success: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  onChangeMessage: PropTypes.func,
  onSubmitForm: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeMessage: (evt) => dispatch(changeMessage(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(saveMessage());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  message: makeSelectMessage(),
  success: makeSelectSuccess(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
