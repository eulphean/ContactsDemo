/*
 *  File: ContactListView.tsx
    Author: Amay Kataria
    Date: 01/23/2021
    Description: Shows a list of contacts loaded by the app. 
*/

import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { ContactsScreenProps, ContactInfo, ContactListItem } from '../CommonTypes'
import { Colors, Padding, FontSize } from '../CommonStyles'
import Contact from './Contact'
import * as _ from 'lodash'

// Component styles. 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: Padding.medium
    },

    header: {
        padding: Padding.extraSmall,
        fontSize: FontSize.medium,
        color: Colors.dim,
        backgroundColor: Colors.light
    },


    separator: {
        borderBottomColor: Colors.smoke,
        borderBottomWidth: 0.5,
        marginHorizontal: Padding.medium
    }
});

// ContactListView types. 
type ContactListViewProps = { navProps: ContactsScreenProps }
type ContactListViewState = { contactList: Array<ContactListItem>}

const contactsUrl = 'https://s3.amazonaws.com/technical-challenge/v3/contacts.json'; 
const favString = "FAVOURITE CONTACTS";
const otherString = "OTHER CONTACTS"; 

// Section header components
type SectionHeaderProps = { header: string }
const SectionHeader = (props: SectionHeaderProps) => {
    return (
        <Text style={styles.header}>{props.header}</Text>
    )
}

// Component class
export class ContactListView extends React.Component<ContactListViewProps, ContactListViewState>  {
    constructor(props: ContactListViewProps) {
        super(props); 
        // Initial state. 
        this.state = {
            contactList: []
        }; 
    }

    componentDidMount() {
        this.fetchContacts(); 
    }

    render() {
        return (
            <SectionList
                sections={this.state.contactList}
                keyExtractor={(item, index) => 'key: ' + index}
                renderItem={({ item }) => <Contact info={item} />}
                renderSectionHeader={({ section: { title } }) => <SectionHeader header={title} />}
                ItemSeparatorComponent={() => <View style={styles.separator}/>}
                stickySectionHeadersEnabled={false}
            />
        ); 
    }

    // Send the information about the contact from here
    onPress = () => {
        this.props.navProps.navigation.navigate('Details', { name: 'Lal rai chand new props'});
        // When navigation, send the selected Contact properties to the next contact. 
    }

    fetchContacts() {
        fetch(contactsUrl)
        .then((response) => response.json())
        .then(json => {
            // Map JSON info ContactInfo and partition based on isFavorite flag. 
            let partition = 
                _.chain(json)
                .map((e) => {
                    let a : ContactInfo = {
                        name: e.name,
                        companyName: e.companyName,
                        address: e.address.street + '\n' + e.address.city + ', ' + e.address.state + ' ' + e.address.zipCode + ', ' + e.address.country,
                        birthday: e.birthdate,
                        email: e.emailAddress,
                        isFavorite: e.isFavorite,
                        phoneWork: e.phone.work,
                        phoneHome: e.phone.home,
                        phoneMobile: e.phone.mobile,
                        smallImage: e.smallImageURL,
                        largeImage: e.largeImageURL
                    }; 
                    return a; 
                })
                .partition((info) => {return info.isFavorite})
                .value();

            // Prepare data for contact list. 
            let data: Array<ContactListItem> = [
                {
                    title: favString,
                    data: partition[0]
                },
                {
                    title: otherString,
                    data: partition[1]
                }
            ]; 

            // Update list data, kick a render. 
            this.setState({
                contactList: data
            }); 
        })
        .catch((error) => {
            console.error(error);
        }); 
    }
}

// Navigator screen. 
export function ContactsScreen(navProps : ContactsScreenProps) {
    return (
        <ContactListView navProps={navProps} />
    );
}
