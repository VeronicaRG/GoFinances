import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Poppins_400Regular, 
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import theme from './src/global/styles/theme'

import Home from './src/screens/Home';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded]= useFonts({ 
    Poppins_400Regular, 
    Poppins_500Medium,
    Poppins_700Bold});
  
  !fontsLoaded && <AppLoading/>

  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}


