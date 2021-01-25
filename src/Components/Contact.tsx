/**
 *  File: Conact.tsx
    Author: Amay Kataria
    Date: 01/23/2021
    Description: Describes the component. 
*/

import React from 'react';
import { StyleSheet, View, Text, Image, NativeSyntheticEvent, ImageErrorEventData } from 'react-native';
import { Padding, FontSize, Colors, ImageSize } from '../Common/Styles'
import { ContactInfo } from '../Common/Types'
import Favorite from "../Assets/favorite.svg"
import Unknown from '../Assets/unknown.svg'

// Component style. 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: Padding.medium
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

// User image component. 
type ImageProps = { source : string | undefined, onErrorCbk: (error: NativeSyntheticEvent<ImageErrorEventData>) => void}
const UserIcon = ({ source, onErrorCbk } : ImageProps ) => {
    return (     
        <Image
            style={styles.userIcon}
            source={{ uri: source }}
            onError={onErrorCbk}
        >
        </Image>
    )
}

// Contact component. 
type ContactProps = { info: ContactInfo }; 
type ContactState = { failed: boolean }
class Contact extends React.Component<ContactProps, ContactState>{
    constructor(props: ContactProps) {
        super(props); 
        this.state = {
            failed: false
        }; 
    }

    render() {
        // Hide Favorite component if the user is not favorite.
        let favStyle = this.props.info.isFavorite ? styles.favIcon : [styles.favIcon, styles.favIconHide]; 
        let user = this.state.failed ? 
            <Unknown width={ ImageSize.medium } height={ ImageSize.medium } /> : 
            <UserIcon source={this.props.info.smallImage} onErrorCbk={this.handleOnError.bind(this)} />; 

        return (
            <View style={styles.container}>
                { user }
                <View style={styles.userData}>
                    <View style={styles.userInfo}>
                        <Favorite style={favStyle} width={FontSize.medium} height={FontSize.medium} />
                        <Text style={styles.userName}>{this.props.info.name}</Text>
                    </View>
                    <Text style={styles.userCompany}>{this.props.info.companyName}</Text>
                </View>
            </View>
        ); 
    }

    handleOnError = (e : NativeSyntheticEvent<ImageErrorEventData>) => {
        console.log("Error loading image for: " + this.props.info.name); 
        
        // Load backup image. 
        this.setState({
            failed: true
        });
    }
}

export default Contact;
