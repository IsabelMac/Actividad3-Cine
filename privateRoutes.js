// privateRoutes.js
import React from 'react';
import Login from './.expo/pages/Login'; // Tu pantalla de Login

// Simula un estado de autenticación, cámbialo a tu lógica reala
const isAuthenticated = false;

export default function PrivateRoutes(Component) {
  return function WrappedComponent(props) {
    if (!isAuthenticated) {
      return <Login />;
    }
    return <Component {...props} />;
  };
}
