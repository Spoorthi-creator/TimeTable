import React from 'react';
import { StyleSheet, View } from 'react-native';
import SwiperComponent from './screens/SwiperComponent';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import RegisterScreen from './screens/RegisterScreen';

const AppSwitchNavigator = createSwitchNavigator({
 SwiperComponent:SwiperComponent,
 RegisterScreen:RegisterScreen 
}); 

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}


