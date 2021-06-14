import React from 'react';
import PropTypes from 'prop-types';
import NavbarHome from '../components/NavbarHome';
import { Box } from '@material-ui/core';
import About from './About';

const Home = props => {
  const { hasLogin } = props
  return (
    <div>
      <NavbarHome hasLogin={hasLogin} />
      <Box marginTop='120px'>
        <About />
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