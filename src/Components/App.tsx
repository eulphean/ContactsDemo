/*
    File: App.tsx
    Author: Amay Kataria
    Date: 01/23/2021
    Description: Root component, which is the entry point for this application.
*/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import  { ContactInfo, RootStackParamList } from '../Common/Types'
import { ContactsScreen, ContactListView }  from './ContactListView'; 
import { ContactDetailsScreen } from './ContactDetailView';
import NavigationHeader from './NavigationHeader'
import { Colors } from '../Common/Styles'

// Initialize stack navigator. 
const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  let appRef = React.createRef<ContactListView>(); 
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Contacts">
        <RootStack.Screen 
          name="Contacts" 
          options={{
            headerStyle: {
              backgroundColor: Colors.sun
            }
          }}
        >
          {
            // Use render method so we can create a clean ref on the object. 
            props => <ContactListView ref={appRef} navProps={props} />
          }
        </RootStack.Screen>

        <RootStack.Screen 
          name="Details" 
          component={ContactDetailsScreen}
          options={ ({ route }) => ({ 
            title: '',
            headerStyle: {
              backgroundColor: Colors.sun
            },
            headerRight: () => <NavigationHeader info={route.params.contactInfo} handlePress={ handleOnPress.bind(this) }/>})}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  ); 

  function handleOnPress(newInfo: ContactInfo) {
    appRef.current.updateState(newInfo);
  }
}

export default App;