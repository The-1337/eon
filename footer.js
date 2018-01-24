import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native';

export default class Footer extends React.Component {
  render() {

    test = () => {
      alert('clicked');
    }

    return (
      <View style={styles.footer}>

        <TouchableHighlight
        onPress={()=>test()}
        activeOpacity={.5}
       >
         <Image source={require('./Resources/search.png')} style={{height:50,width:50,margin:15}}/>
       </TouchableHighlight>
        <Button onPress={console.log('hi')} title="Click2"/>
        <Button onPress={console.log('hi')} title="Click3"/>
        <Button onPress={console.log('hi')} title="Click4"/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: 'rgb(32,190,84)',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection:'row'
  },
});
