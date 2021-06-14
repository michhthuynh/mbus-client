import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core'

Tag.propTypes = {
  content: PropTypes.string.isRequired
};

function Tag(props) {
  const { content } = props
  return (
    <Box border="1px solid white" padding="3px" width='100%' textAlign='center' color='white'>
      <Typography variant="span" component="span">
        {content}
      </Typography>
    </Box>
  );
}

export default Tag;