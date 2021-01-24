/**
 *  File: ContactListView.tsx
    Author: Amay Kataria
    Date: 01/23/2021
    Description: Shows a list of contacts loaded by the app. 
*/

import React from 'react';
import { Button, StyleSheet, View, Text} from 'react-native';
import { ContactsScreenProps, ContactListViewProps, ContactListViewState } from './Types'

// Navigator screen. 
export function ContactsScreen(navProps : ContactsScreenProps) {
    return (
        <ContactListView 
        name={"Bablu Name"} 
        navProps={navProps} 
        />
    );
}

// Component styles. 
const styles = StyleSheet.create({
    body: {
        flex: 1,
        paddingTop: 10
    }
});

// Component class. 
export class ContactListView extends React.Component<ContactListViewProps, ContactListViewState>  {
    constructor(props: ContactListViewProps) {
        super(props); 
        // Define the state. 
        this.state = {
            score: 10
        }; 
    }

    render() {
        return (
            <View style={styles.body}>
                <Text>Hello I am just a simple text to be rendered in here</Text>
                <Button
                    title="Press Me"
                    onPress={this.onPress.bind(this)}
                />
            </View>
        ); 
    }

    // Send the information about the contact from here
    onPress = () => {
        this.props.navProps.navigation.navigate('Details', { name: 'Lal rai chand new props'});
        // When navigation, send the selected Contact properties to the next contact. 
    }
}

