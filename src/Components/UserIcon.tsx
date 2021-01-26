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
    userIconMedium: {
        height: ImageSize.medium,
        width: ImageSize.medium
    },

    userIconLarge: {
        height: ImageSize.extraLarge,
        width: ImageSize.extraLarge
    }
});

export enum UserIconSize {
    Medium,
    Large
}; 

// ContactDetailView types. 
export type UserIconProps = { size: UserIconSize, source: string | undefined, name: string | undefined} 
export type UserIconState = { failed: boolean }

// Component class. 
export class UserIcon extends React.Component<UserIconProps, UserIconState>  {
    constructor(props: UserIconProps) {
        super(props); 
        // Initial state. 
        this.state = {
            failed: false
        }
    }

    render() {
        let svgSize = this.props.size === UserIconSize.Medium ? ImageSize.medium : ImageSize.extraLarge; 
        let imgStyle = this.props.size === UserIconSize.Medium ? styles.userIconMedium : styles.userIconLarge; 
        let user = this.state.failed ? 
            <Unknown 
                width={ svgSize } 
                height={ svgSize } 
            /> : 
            <Image
                style={imgStyle}
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