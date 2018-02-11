import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native';
import RootNavigator from '../React-Navigator';
import {StackNavigator} from 'react-navigation';


export default class Footer extends React.Component {
  render() {

    searchClick = () => {
      alert('clicked');
    }

    return (
      <View style={styles.footer}>

       <TouchableHighlight onPress={()=>searchClick()} activeOpacity={.5}>
         <Image source={require('../Resources/search.png')} style={{height:50,width:50,margin:15}}/>
       </TouchableHighlight>

       <TouchableHighlight onPress={()=>navigation.navigate('Details')} activeOpacity={.5}>
         <Image source={require('../Resources/home.png')} style={{height:50,width:50,margin:15}}/>
       </TouchableHighlight>

       <TouchableHighlight onPress={()=>searchClick()} activeOpacity={.5}>
         <Image source={require('../Resources/plus.png')} style={{height:50,width:50,margin:15}}/>
       </TouchableHighlight>

       <TouchableHighlight onPress={()=>searchClick()} activeOpacity={.5}>
         <Image source={require('../Resources/remote.png')} style={{height:50,width:50,margin:15}}/>
       </TouchableHighlight>

       <TouchableHighlight onPress={()=>searchClick()} activeOpacity={.5}>
         <Image source={require('../Resources/profile.png')} style={{height:50,width:50,margin:15}}/>
       </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    flexShrink:1,
    backgroundColor: 'rgb(32,190,84)',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexDirection:'row'
  },
  
});
