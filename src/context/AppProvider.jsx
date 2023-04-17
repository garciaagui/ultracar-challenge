// import { useMemo } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  // const contextValue = useMemo();
  const contextValue = '';

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
