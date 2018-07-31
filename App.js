import React from 'react';
import {StackNavigator, NavigationActions} from 'react-navigation'

import LoginView from './src/components/LoginScreen';
import Amplify from 'aws-amplify'
import aws_exports from '.'

Amplify.configure(aws_exports);

const App = StackNavigator({
  LoginView: {screen: LoginView}
}, 
{
  initialRouteName: 'LoginView',
  headerMode: 'none'
});

const navigateOnce = (getStateForAction) => (action, state) => {
  const {type, routeName} = action;
  return (
    state &&
    type === NavigationActions.NAVIGATE &&
    routeName === state.routes[state.routes.length - 1].routeName
  ) ? null : getStateForAction(action, state);
}

App.router.getStateForAction = navigateOnce(App.router.getStateForAction);

export default App;


