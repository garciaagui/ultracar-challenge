import { useMemo } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import usePersistState from '../utils/hooks/usePersistState';
import { USER_INITIAL_STATE } from '../utils/constants';

export default function AppProvider({ children }) {
  const [user, setUser] = usePersistState('user', USER_INITIAL_STATE);

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user, setUser]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
