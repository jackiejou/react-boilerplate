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

import { getAllMessages } from './actions';
import { makeSelectAllMessages, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class Bottle extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.load();
  }
  render() {
    // const { error } = this.props;
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div>
          Save a message
          {this.props.messages}
          {this.props.error}
        </div>
      </article>
    );
  }
}

Bottle.propTypes = {
  messages: PropTypes.object,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  load: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    load: () => {
      dispatch(getAllMessages());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  messages: makeSelectAllMessages(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'bottle', reducer });
const withSaga = injectSaga({ key: 'bottle', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Bottle);
