/*
 *  File: ContactListView.tsx
    Author: Amay Kataria
    Date: 01/23/2021
    Description: Shows a list of contacts loaded by the app. 
*/

import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { ContactsScreenProps, ContactInfo, ContactListItem } from '../Common/Types'
import { Colors, Padding, FontSize } from '../Common/Styles'
import Contact from './Contact'
import Seperator from './Seperator'
import * as _ from 'lodash'

// Component styles. 
const styles = StyleSheet.create({
    header: {
        padding: Padding.extraSmall,
        fontSize: FontSize.medium,
        color: Colors.dim,
        backgroundColor: Colors.light
    }
});

// ContactListView types. 
type ContactListViewProps = { navProps: ContactsScreenProps }
type ContactListViewState = { contactList: Array<ContactInfo>, partitionList: Array<ContactListItem>}

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
            partitionList: [],
            contactList: []
        }; 
    }

    componentDidMount() {
        this.fetchContacts(); 
    }

    render() {
        return (
                <SectionList
                sections={this.state.partitionList}
                keyExtractor={(item, index) => 'key: ' + item.id}
                renderItem={({ item }) => <Contact info={item} navigator={this.props.navProps} />}
                renderSectionHeader={({ section: { title } }) => <SectionHeader header={title} />}
                ItemSeparatorComponent={() => <Seperator applyHorizontalPadding={true} />}
                stickySectionHeadersEnabled={false} />
        ); 
    }

    updateState(newInfo: ContactInfo) {
        let contacts = this.state.contactList;
        // Merge newInfo's favorite property with oldInfo. 
        let oldInfo = _.find(contacts, (info) => { return newInfo.id === info.id } ); 
        oldInfo.isFavorite = newInfo.isFavorite; 
        // Partition contacts again. 
        let data = this.partitionContacts(contacts); 
        this.setState({
            contactList: contacts,
            partitionList: data
        });
    }

    fetchContacts() {
        fetch(contactsUrl)
        .then((response) => response.json())
        .then(json => {
            // Map JSON info ContactInfo and partition based on isFavorite flag. 
            let contacts = 
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
                        largeImage: e.largeImageURL,
                        id: e.id
                    }; 
                    return a; 
                })
                .orderBy('name', 'asc') // Sort alphabetically
                .value();
            
            let partitionData = this.partitionContacts(contacts); 
        
            // Update list data, kick a render. 
            this.setState({
                partitionList: partitionData,
                contactList: contacts
            }); 
        })
        .catch((error) => {
            console.error(error);
        }); 
    }

    partitionContacts(contactList: Array<ContactInfo>) : Array<ContactListItem> {
        let partition = _.partition(contactList, (info) => {return info.isFavorite});
        
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

        return data; 

    }
}

// Navigator screen. 
export function ContactsScreen(navProps : ContactsScreenProps) {
    let appRef = navProps.route.params.contactsRef; 
    return (
        <ContactListView ref={appRef} navProps={navProps}/>
    );
}
