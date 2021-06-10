import React from 'react';
import PropTypes from 'prop-types';
import NavbarHome from '../components/NavbarHome';
import { Box } from '@material-ui/core';

const Home = props => {
  const { hasLogin } = props
  return (
    <div>
      <NavbarHome hasLogin={hasLogin} />
      <Box marginTop='100px'>
        <h1>this is about home</h1>
      </Box>
    </div>
  );
};

Home.propTypes = {
  hasLogin: PropTypes.bool.isRequired
};

Home.defaultProps = {
  hasLogin: false
}

export default Home;