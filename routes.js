// routes/index.js (antes llamado AppRoutes.js)
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './.expo/pages/Home';
import InfoPelicula from './.expo/pages/InfoPelicula';
import PeliculaSeleccionada from './.expo/pages/PeliculaSeleccionada';
import Boletos from './.expo/pages/Boletos';
import Butacas from './.expo/pages/Butacas';
import Login from './.expo/pages/Login';
import Confirmacion from './.expo/pages/Confirmacion';
import PrivateRoutes from './privateRoutes'; // Custom logic, explained below

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="InfoPelicula" component={InfoPelicula} />
      <Stack.Screen name="PeliculaSeleccionada" component={PeliculaSeleccionada} />
      <Stack.Screen name="Boletos" component={Boletos} />
      <Stack.Screen name="Butacas" component={Butacas} />
      <Stack.Screen name="Login" component={Login} />

      {/* Ruta privada, usa un wrapper que verifique autenticación */}
      <Stack.Screen
        name="Confirmacion"
        component={PrivateRoutes(Confirmacion)}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
