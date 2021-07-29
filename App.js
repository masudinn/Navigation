import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNav from './page/routes';


export default function App() {
  return (
    <NavigationContainer>
      <RootNav />
    </NavigationContainer>
  )
}
