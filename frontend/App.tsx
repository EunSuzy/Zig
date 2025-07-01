import React from 'react';
import { StatusBar } from 'expo-status-bar';
import LandingScreen from './src/screens/LandingScreen';

export default function App() {
  return (
    <>
      <LandingScreen />
      <StatusBar style="auto" />
    </>
  );
}
