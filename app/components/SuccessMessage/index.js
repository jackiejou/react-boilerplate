import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

function SuccessMessage(props) {
  let content = (<div></div>);
  if (props.error) {
    content = 'Message save error';
  }
  if (props.success) {
    content = 'Message saved success!';
  }
  return (
    <Wrapper>
      {content}
    </Wrapper>
  );
}

SuccessMessage.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
};

export default SuccessMessage;
