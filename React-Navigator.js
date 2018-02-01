import React from 'react';
import { View, Text, Button, TextInput,StyleSheet } from 'react-native';
import {StackNavigator} from 'react-navigation';
import Footer from './components/Footer'

const HomeScreen = ({navigation}) => (
  <View style={styles.body}>
    <Text>Home Screen</Text>
    <Button
      onPress={() => navigation.navigate('Details')}
      title="Go to details"
    />
  </View>
);


const DetailsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
  </View>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Eon',
      headerStyle:{
        backgroundColor:'rgb(32,190,84)'
      }
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
     headerTitle: 'Details',
   },
  },
});

const styles= StyleSheet.create({
  body:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  }
})


export default RootNavigator;
