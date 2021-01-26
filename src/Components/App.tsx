/*
    File: App.tsx
    Author: Amay Kataria
    Date: 01/23/2021
    Description: Root application component, which is the entry point for this application.
*/

import React from 'react';
import { BaseRouter, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native'
import * as _ from 'lodash';

import  { RootStackParamList } from '../Common/Types'
import { ContactsScreen, }  from './ContactListView'; 
import { ContactDetailsScreen } from './ContactDetailView';
import NavigationHeader from './NavigationHeader'
import { Colors } from '../Common/Styles'

// Initialize stack navigator. 
const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Contacts">
        <RootStack.Screen 
          name="Contacts" 
          component={ContactsScreen}
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.sun
            }
          }}
        />
        <RootStack.Screen 
          name="Details" 
          component={ContactDetailsScreen}
          options={ ({ route }) => ({ 
            title: '',
            headerRight: () => <NavigationHeader isFavorite={route.params.contactInfo.isFavorite} />})}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  ); 
}

export default App;