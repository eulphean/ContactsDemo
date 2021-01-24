/**
 *  File: App.tsx
    Author: Amay Kataria
    Date: 01/23/2021
    Description: Root application component, which is the entry point for this application.
*/

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ContactListView from './ContactListView'; 

const myName: string = "Amay";

const App = () => {
  useEffect(() => {
    console.log("Hello I'm in the root of the components.");
  }); 

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <ContactListView 
        name={myName} />
      </SafeAreaView>
    </>
  );
};

export default App;
