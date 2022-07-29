import { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';

import endPoints from '@services/api';

// container context
const AuthContext = createContext();

// use context
export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

//propoga el contexto por la aplicación
export const ProviderAuth = ({ children }) => {

  // options requests
  const options = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };

  // user
  const [user, setUser] = useState(null);

  // login
  const signIn = async (email, password) => {

    // request login
    const { data } = await axios.post(endPoints.auth.login, { email, password }, options);

    const token = data.token;

    if (token) {
      Cookie.set('token', token, { expires: 15 });

      // configure axios with default values load the token with Bearer
      axios.defaults.headers.Authorization = `Bearer ${token}`;

      //! profile endpoint not created, data not required contains token and user
      // request the user
      // const { data: user } = await axios.get(endPoints.auth.profile);

      // add user to context
      const user = data.user
      setUser(user);
      return
    }
  };

  // component con el context
  return <AuthContext.Provider value={{
    user,
    signIn
  }}>{children}</AuthContext.Provider>;
}

