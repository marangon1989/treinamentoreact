import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from 'styled-components/native';

import { AuthProvider } from '@hooks/auth';

import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import { Routes } from './src/routes';

import theme from './src/theme';
import { View } from 'react-native';


export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          'NexaBold': require('./src/assets/fonts/NexaBold.otf'),
          'NexaLight': require('./src/assets/fonts/NexaLight.otf'),
          'Geometria': require('./src/assets/fonts/Geometria.otf'),
          'GeometriaLight': require('./src/assets/fonts/GeometriaLight.otf'),
          'GeometriaMedium': require('./src/assets/fonts/GeometriaMedium.otf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View
    onLayout={onLayoutRootView}
    style={{
      flex: 1
    }}
    >
    <ThemeProvider theme={theme}>
      <StatusBar 
        style='light' 
        translucent 
        backgroundColor='transparent' 
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
    </View>
  );
}
