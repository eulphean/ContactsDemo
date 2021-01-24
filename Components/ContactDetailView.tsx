/**
 *  File: ConactDetailView.tsx
    Author: Amay Kataria
    Date: 01/23/2021
    Description: Shows details for a specific contact. 
*/

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ContactDetailViewProps, ContactDetailViewState, ContactDetailsScreenProps } from './Types'

// Navigator screen. 
export function ContactDetailsScreen(navProps:  ContactDetailsScreenProps) {
  return ( <ContactDetailView navProps={navProps} /> );
}

// Component style. 
const styles = StyleSheet.create({
  body: { 

  }
});

// Component class. 
export class ContactDetailView extends React.Component<ContactDetailViewProps, ContactDetailViewState>  {
    constructor(props: ContactDetailViewProps) {
        super(props); 
        // Define the state. 
    }

    render() {
        return (
            <View style={styles.body}>
                <Text>I am Contact Detail View: {this.props.navProps.route.params.name}</Text>
            </View>
        ); 
    }
}
