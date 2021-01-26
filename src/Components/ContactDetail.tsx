/*
    File: ConactDetailView.tsx
    Author: Amay Kataria
    Date: 01/23/2021
    Description: Shows details for a specific contact. 
*/


import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ListItem } from '../Common/Types'
import { Padding, Colors, FontSize } from '../Common/Styles'
import { UserIcon, UserIconSize } from './UserIcon'


// Component style. 
const styles = StyleSheet.create({
    userInfo: {
        alignItems: 'center',
        paddingTop: Padding.large,
        paddingBottom: Padding.large
    },
  
    userName: {
      fontSize: FontSize.extraMassive,
      color: Colors.dim,
      paddingTop: Padding.medium
    },
  
    userCompany: {
      fontSize: FontSize.large,
      color: Colors.dark,
    },
  
    infoContainer: {
      paddingTop: Padding.extraLarge,
      paddingBottom: Padding.medium,
      paddingHorizontal: Padding.medium
    },
  
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: Padding.small
    },
  
    infoText: {
      fontSize: FontSize.large,
      color: Colors.dim
    },
  
    topLabel: {
      fontSize: FontSize.large,
      color: Colors.smoke,
    }
});

// Info component
type ContactDetailProps = { listData: ListItem }
const ContactDetail = (props: ContactDetailProps) => {
    let topLabel = props.listData.data.isPhoneNum ? 'PHONE:' : props.listData.data.label;
    let sideLabel = props.listData.data.isPhoneNum ? <Text style={styles.topLabel}>{props.listData.data.label}</Text> : <></> as JSX.Element; 
    let userCompany = props.listData.data.companyName ? <Text style={styles.userCompany}>{props.listData.data.companyName}</Text> : <></> as JSX.Element; 
    let infoComp = props.listData.data.name ? 
    (
        <View style={styles.userInfo}>
            <UserIcon size={UserIconSize.Large} source={props.listData.data.largeImgUrl} name={props.listData.data.name} />
            <Text style={styles.userName}>{props.listData.data.name}</Text>
            {userCompany}
        </View>
    ) : 
    (  
        <View style={styles.infoContainer}> 
            <Text style={styles.topLabel}>{topLabel}</Text>
            <View style={styles.info}>
                <Text style={styles.infoText}>{props.listData.data.info}</Text>
                {sideLabel}
            </View>
        </View>
    ); 
    
    return infoComp; 
};

export default ContactDetail;