/**
 *  File: UserIcon.tsx
    Author: Amay Kataria
    Date: 01/25/2021
    Description: Responsible for loading the user icon image.
*/

import React from 'react';
import { StyleSheet, View, Image, NativeSyntheticEvent, ImageErrorEventData } from 'react-native';
import { ImageSize } from '../Common/Styles'
import Unknown from '../Assets/unknown.svg'

// Component style. 
const styles = StyleSheet.create({
    userIcon: {
        height: ImageSize.medium,
        width: ImageSize.medium
    },
});

// ContactDetailView types. 
export type UserIconProps = { source: string | undefined, name: string | undefined} 
export type UserIconState = { failed: boolean }

// Component class. 
class UserIcon extends React.Component<UserIconProps, UserIconState>  {
    constructor(props: UserIconProps) {
        super(props); 
        // Initial state. 
        this.state = {
            failed: false
        }
    }

    render() {
        let user = this.state.failed ? 
            <Unknown 
                width={ ImageSize.medium } 
                height={ ImageSize.medium } 
            /> : 
            <Image
                style={styles.userIcon}
                source={{ uri: this.props.source }}
                onError={this.handleOnError.bind(this)}
            />
        ;

        return user; 
    }

    handleOnError = (error: NativeSyntheticEvent<ImageErrorEventData>) => {
        console.log("Error loading image for: " + this.props.name); 
        
        // Load backup image. 
        this.setState({
            failed: true
        });
    }
}

export default UserIcon;