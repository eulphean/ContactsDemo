/**
 *  File: ContactListView.tsx
    Author: Amay Kataria
    Date: 01/23/2021
    Description: Shows the list of contacts loaded by the app. 
*/

import React from 'react';
import {
    Button,
    StyleSheet,
    View,
    Text,
    ScrollView
} from 'react-native';

import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';

interface ContactListViewProps {
    name: string
}

interface ContactListViewState {
    score: number
}

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });
  

class ContactListView extends React.Component<ContactListViewProps, ContactListViewState>  {
    constructor(props: ContactListViewProps) {
        super(props); 
        // Define the state. 
        this.state = {
            score: 10
        }; 
    }

    render() {
        return (
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                <View style={styles.body}>
                    <Text>Hello I am just a simple text to be rendered in here: {this.props.name}</Text>
                </View>
                <Button
                    title="Press Me"
                    onPress={this.onPress.bind(this)}
                />
            </ScrollView>
        ); 
    }

    onPress = () => {
        // Kick navigation here. 
    }
}

export default ContactListView; 
