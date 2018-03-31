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
import { getMessages } from './actions';
import { makeSelectAllMessages, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';
import List from './List';
import ListItem from './ListItem';

export class Bottle extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.load();
  }
  render() {
    const { error } = this.props;
    return (
      <article>
        <Helmet>
          <title>Bottle</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div>
          <H2>
            Saved messages
          </H2>
          <List>
            {(this.props.messages.messages) ?
              this.props.messages.messages.map((msg) => <ListItem key={msg.createdAt}> {msg.message} </ListItem>) :
              <ListItem>{error}</ListItem>
            }
          </List>
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
      dispatch(getMessages());
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
