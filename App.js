import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as firebase from 'firebase';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { theme } from './src/infrastructure/theme';
import { Navigation } from './src/infrastructure/navigation';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

const firebaseConfig = {
  apiKey: 'AIzaSyC1Nva7W5tFNyt1GahLZLuy9iu3lcTv9Ro',
  authDomain: 'mealstogo-ba553.firebaseapp.com',
  projectId: 'mealstogo-ba553',
  storageBucket: 'mealstogo-ba553.appspot.com',
  messagingSenderId: '42394572602',
  appId: '1:42394572602:web:c27da5d3bce91d2a0be203',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
