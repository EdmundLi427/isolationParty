import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';


export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style = {styles.name}>Edmund Li</Text>
      <Text style = {styles.age}>Age: 20</Text>
      <Text style = {styles.bio}>I like music XD</Text>
      <Image
        style = {styles.image}
        source = {require("../assets/profilepic.jpg")}
      /> 
      <View style = {styles.logoutButton}>
        <Text style = {styles.logout}>Logout</Text>
      </View>
      <StatusBar style="auto" /> 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 36 /* keeps thing to the right 36 pixels.*/
  },

  name: {
    marginTop:60,
    fontWeight: 'bold',
    fontSize: 32,
    color: '#333'
  },

  age: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop:20,
    color: '#FF6767'
  },

  bio: {
    paddingTop:10,
    paddingBottom:20
  },

  image:{
    marginTop: 10,
    marginBottom: 10,
    width:300,
    height:200,
    resizeMode: 'contain',
  },
  logoutButton:{
    backgroundColor:'#FF6767',
    height:38,
    width: '100%',
    borderRadius:8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  logout: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold'
  }
 
});

