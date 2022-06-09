import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { UserProvider } from "./context/userContext";
import { ListUsersProvider } from "./context/listUsersContext";

import "./styles/variables.css"; //DISPONE DE FORMA GLOBAL LOS COLORES
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <ListUsersProvider>
        <App />
      </ListUsersProvider>
    </UserProvider>
  </React.StrictMode>
);
