import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SwiperComponent from '../screens/SwiperComponent'
import RegisterScreen from '../screens/RegisterScreen'

const navigate = () => {
    return (
        <Stack.Navigator initialRouteName="flashScreen"  screenOptions={{
            headerShown: false,
            gestureEnabled: false
          }}>
            
             <Stack.Screen name="SwiperComponent" component={SwiperComponent} />
             <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
      )
}

export default navigate

const styles = StyleSheet.create({})