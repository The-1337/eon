import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class Footer extends React.Component {
  render() {
    return (
      <View style={styles.footer}>

        <Button title="Click1"/>
        <Button title="Click2"/>
        <Button title="Click3"/>
        <Button title="Click4"/>

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
