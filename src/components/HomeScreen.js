import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import SettingsScreen from './Settings'
import RewardsScreen from './Rewards'
import HistoryScreen from './History'

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>HOME SCREEN!</Text>
      </View>
    );
  }
}


const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Rewards: RewardsScreen,
    History: HistoryScreen,
    Settings: SettingsScreen
  });
  
  TabNavigator.navigationOptions = ({ navigation }) => {
    let { routeName } = navigation.state.routes[navigation.state.index];
  
    // You can do whatever you like here to pick the title based on the route name
    let headerTitle = routeName;
  
    return {
      headerTitle
    };
  };



export default TabNavigator
