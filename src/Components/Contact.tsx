/**
 *  File: Conact.tsx
    Author: Amay Kataria
    Date: 01/23/2021
    Description: Describes the component. 
*/

import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Padding, FontSize, Colors } from '../CommonStyles'
import { ContactInfo } from '../CommonTypes'

// Component style. 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: Padding.medium
    },

    userIcon: {
        height: 70,
        width: 70
    },

    userData: {
        justifyContent: 'center',
        flexDirection: 'column',
        paddingHorizontal: Padding.medium
    },

    userName: {
        fontSize: FontSize.large,
        color: Colors.dim
    },

    userCompany: {
        fontSize: FontSize.medium,
        color: Colors.dark
    }
});

type ContactProps = { info: ContactInfo }

const Contact = (props: ContactProps) => (
    <View style={styles.container}>
        <Image
            style={styles.userIcon}
            source={{ uri: props.info.smallImage }}
        >
        </Image>
        <View style={styles.userData}>
            <Text style={styles.userName}>{props.info.name}</Text>
            <Text style={styles.userCompany}>{props.info.companyName}</Text>
        </View>
    </View>
);

export default Contact;
