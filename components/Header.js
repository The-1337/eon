import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native';

export default class Header extends React.Component {
  render() {

    searchClick = () => {
      alert('clicked');
    }

    return (
      <View style={styles.header}>

        <Text style={styles.title}>Eon</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'rgb(32,190,84)',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection:'row'
  },
  title:{
    fontSize:40,
    margin:25,
  }
});
