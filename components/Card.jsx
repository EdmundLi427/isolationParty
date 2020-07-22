import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';


export default function Card(props) {

  const sendEmail = (email) => {
    Linking.openURL(`mailto:${email}`);
  }

  return (
    <TouchableOpacity onPress = {() => sendEmail(props.email)}>
      <View style = {styles.userCard}>
        <View style = {{flex:1}}>
        <Image
          style = {styles.profilepic}
          source= {{uri : props.image}}
        />
        </View> 
        <View style = {styles.textContainer}>
          <Text style = {styles.nameText}>{props.name}  {props.age}</Text>
          <Text style = {styles.userText}>{props.bio}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  userCard:{
    marginVertical: 8,
    flexDirection: 'row',
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#F9F9F9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height:1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  profilepic: {
    width: 88,
    height: 88,
    borderRadius: 44
  },

  textContainer: {
    flex:1,
    textAlign: 'right',
  },
  
  nameText:{
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 15,
    textAlign: 'right'

  },

  ageText:{

  },
  userText:{
    textAlign: 'right'
  }
});

