import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View,Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Card from './components/Card';
import Profile from './screens/Profile';
import Discover from './screens/Discover';

const Tab = createBottomTabNavigator();


export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Discover') {
              iconName = 'ios-compass';
            } else if (route.name === 'Profile') {
              iconName = 'ios-person';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name = "Discover" component = {Discover} />
        <Tab.Screen name = "Profile" component = {Profile} />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({



  title: {
    marginTop:60,
    fontWeight: 'bold',
    fontSize: 32,
    color: '#333'
  },

});
