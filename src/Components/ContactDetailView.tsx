/**
    File: ConactDetailView.tsx
    Author: Amay Kataria
    Date: 01/23/2021
    Description: Shows details for a specific contact. 
*/

import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { ContactDetailsScreenProps, ContactInfo, ListItem, ListData } from '../Common/Types'
import Seperator from './Seperator'
import ContactDetail from './ContactDetail'

// Component style. 
const styles = StyleSheet.create({
    container: { 
      flex: 1
    }
  });

// ContactDetailView types. 
type ContactDetailViewProps = { navProps: ContactDetailsScreenProps }
type ContactDetailViewState = { info : ContactInfo }

// Component class. 
export class ContactDetailView extends React.Component<ContactDetailViewProps, ContactDetailViewState>  {
    // Stores the items that can be rendered for this contact. 
    listData: Array<ListItem>;

    constructor(props: ContactDetailViewProps) {
        super(props); 
        let contactInfo = this.props.navProps.route.params.contactInfo;    
        this.listData = this.prepareListData(contactInfo); 
        this.state = {
            info: contactInfo
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList   
                    data={this.listData}
                    renderItem={({ item }) => <ContactDetail listData={item} /> }
                    keyExtractor={item => 'key: ' + item.id}
                    ItemSeparatorComponent={() => <Seperator applyHorizontalPadding={true}/>}
                >
                </FlatList>
            </View>
        ); 
    }

    // Check before adding any new property in the list to be rendered. 
    prepareListData(info: ContactInfo): Array<ListItem> {
        let data: Array<ListItem> = []; 
        let idx: number = 0; 

        // Image and user info. 
        if (info.name) {
            data.push({
                id: idx.toString(),
                data: {
                    name: info.name,
                    companyName: info.companyName,
                    largeImgUrl: info.largeImage
                }
            });
            idx++; 
        }

        // Phone Home
        if (info.phoneHome) {
            data.push({
                id: idx.toString(),
                data: {
                    label: 'Home',
                    info: info.phoneHome,
                    isPhoneNum: true
                }
            });
            idx++;
        }

        // Phone Mobile
        if (info.phoneMobile) {
            data.push({
                id: idx.toString(),
                data: {
                    label: 'Mobile',
                    info: info.phoneMobile,
                    isPhoneNum: true
                }
            });
            idx++;
        }

        // Phone Work
        if (info.phoneWork) {
            data.push({
                id: idx.toString(),
                data: {
                    label: 'Work',
                    info: info.phoneWork,
                    isPhoneNum: true
                }
            });
            idx++;
        }

        // Address
        if (info.address) {
            data.push({
                id: idx.toString(),
                data: {
                    label: 'ADDRESS:',
                    info: info.address
                }
            });
            idx++; 
        }

        // Birthday
        if (info.birthday) {
            let b = new Date(info.birthday); 
            data.push({
                id: idx.toString(),
                data: {
                    label: 'BIRTHDATE:',
                    info: b.toLocaleString('EN-US', { year: 'numeric', month: 'long', day: 'numeric'})
                }
            });
            idx++; 
        }

        // Email
        if (info.email) {
            data.push({
                id: idx.toString(),
                data: {
                    label: 'EMAIL:',
                    info: info.email
                }
            }); 
            idx++; 
        }

        return data; 
    }
}

// Navigator screen. 
export function ContactDetailsScreen(navProps:  ContactDetailsScreenProps) {
    return ( <ContactDetailView navProps={navProps} /> );
}