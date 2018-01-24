import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Footer from './components/Footer'
import Header from './components/Header'
export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://pre00.deviantart.net/9aaf/th/pre/f/2007/174/4/f/katana_by_eon_art.jpg'
    };
    return (

      <View style={{flex: 1}}>
        <Header/>
        <View style={styles.mainContent}>
          <View style={{flex: 1, backgroundColor: 'black'}} />
          <View style={{flex: 1, backgroundColor: 'rgb(32,190,84)'}} />
          <View style={{flex: 1, backgroundColor: 'black'}} />
        </View>
        <Footer style={styles.footer}/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 9,
    backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  footer:{
    flex:2
  }
});
