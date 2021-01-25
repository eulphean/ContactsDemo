/*
    File: App.tsx
    Author: Amay Kataria
    Date: 01/23/2021
    Description: Root application component, which is the entry point for this application.
*/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as _ from 'lodash';

import  { RootStackParamList } from '../CommonTypes'
import { ContactsScreen, }  from './ContactListView'; 
import { ContactDetailsScreen } from './ContactDetailView';

// Initialize stack navigator. 
const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Contacts">
        <RootStack.Screen 
          name="Contacts" 
          component={ContactsScreen} 
        />
        <RootStack.Screen 
          name="Details" 
          component={ContactDetailsScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  ); 
}

export default App;