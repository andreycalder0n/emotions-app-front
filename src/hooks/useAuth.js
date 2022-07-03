import React, { useState, useContext, createContext } from 'react';
import endPoints from '@services/api';
import Cookie from 'js-cookie';
import axios from 'axios';

// container context
const AuthContext = createContext();

// use context
export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

// contexto de la aplicación
function userProviderAuth() {
  const [user, setUser] = useState(null);

  const options = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };

  const signIn = async (email, password) => {

    // iniciar sesión
    const { data } = await axios.post(endPoints.auth.login, { email, password }, options);

    const token = data.token;

    if (token) {
      Cookie.set('token', token, { expires: 5 });

      // configura axios con valores default se carga el token con Bearer
      axios.defaults.headers.Authorization = `Bearer ${token}`;

      //! no se ha creado el endpoint de profile, no se requiere data contiene token y user
      // solicito el usuario
      // const { data: user } = await axios.get(endPoints.auth.profile);

      // se agrega user al context
      const user = data.user
      setUser(user);
    }
  };

  return {
    user,
    signIn
  };
}

//propoga el contexto por la aplicación
export function ProviderAuth({ children }) {
  const auth = userProviderAuth(); //utilizo el contexto
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}


