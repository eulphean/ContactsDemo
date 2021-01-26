/**
 *  File: Conact.tsx
    Author: Amay Kataria
    Date: 01/23/2021
    Description: Shows each row in the contact list. 
*/

import React from 'react';
import { StyleSheet, TouchableHighlight, View, Text, Image, NativeSyntheticEvent, ImageErrorEventData, GestureResponderEvent } from 'react-native';
import { Padding, FontSize, Colors, ImageSize } from '../Common/Styles'
import { ContactsScreenProps, ContactInfo } from '../Common/Types'
import { UserIcon, UserIconSize }  from './UserIcon'
import Favorite from "../Assets/favorite.svg"

// Component style. 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: Padding.medium,
        paddingVertical: Padding.extraLarge
    },

    userIcon: {
        height: ImageSize.medium,
        width: ImageSize.medium
    },

    userData: {
        justifyContent: 'center',
        flexDirection: 'column',
        paddingHorizontal: Padding.medium
    },

    userInfo: {
        flexDirection: 'row',
        marginLeft: Padding.small,
        alignItems: 'center',
    },

    userName: {
        fontSize: FontSize.large,
        color: Colors.dim,
    },

    userCompany: {
        fontSize: FontSize.medium,
        color: Colors.dark,
        alignSelf: 'flex-start',
        paddingLeft: Padding.massive
    },

    favIcon: {
        marginRight: Padding.extraSmall,
        opacity: 1
    },

    favIconHide: {
        opacity: 0
    }
});

// Contact component. 
type ContactProps = { info: ContactInfo, navigator: ContactsScreenProps }; 

const Contact = (props: ContactProps) => {
    let favStyle = props.info.isFavorite ? styles.favIcon : [styles.favIcon, styles.favIconHide]; 
    let userCompany = props.info.companyName ? <Text style={styles.userCompany}>{props.info.companyName}</Text> : <></> as JSX.Element; 
    return (
        <TouchableHighlight  
            activeOpacity={1}
            underlayColor={Colors.light}
            onPress={handleOnPress.bind(this)} >
            <View style={styles.container}>
                <UserIcon size={ UserIconSize.Medium } source={props.info.smallImage} name={props.info.name} />
                <View style={styles.userData}>
                    <View style={styles.userInfo}>
                        <Favorite style={favStyle} width={FontSize.medium} height={FontSize.medium} />
                        <Text style={styles.userName}>{props.info.name}</Text>
                    </View>
                    {userCompany}
                </View>
            </View>
        </TouchableHighlight>
    ); 

    function handleOnPress (e: GestureResponderEvent) {
        props.navigator.navigation.navigate('Details', { contactInfo: props.info});
    }
}

export default Contact;
