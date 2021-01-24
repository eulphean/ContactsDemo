/**
 *  File: Contact.tsx
    Author: Amay Kataria
    Date: 01/23/2021
    Description: This component describes how a contact looks like. 
*/

import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';

interface ContactProps {
}
interface ContactState {
}

// Contact styles. 
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },

    body: {
      backgroundColor: Colors.white,
    }
});
  

class Contact extends React.Component<ContactProps, ContactState>  {
    constructor(props: ContactProps) {
        super(props); 
        // Define the state. 
        this.state = {
        }; 
    }

    render() {
        return (
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                <View style={styles.body}>
                    <Text>Hello I am a simple contact</Text>
                </View>
            </ScrollView>
        ); 
    }

    onPress = () => {
        // Kick navigation here. 
    }
}

export default ContactListView; 
