/*
    File: NavigationHeader.tsx
    Author: Amay Kataria
    Date: 01/23/2021
    Description: Custom header for the navigation bar.
*/

import React from 'react'
import {StyleSheet, GestureResponderEvent } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';
import Favorite from '../Assets/favorite.svg'
import NotFavorite from '../Assets/notfavorite.svg'

import { ImageSize, Padding, Colors } from '../Common/Styles';
import { ContactInfo } from '../Common/Types';

type NavigationHeaderProps = {
    info: ContactInfo,
    handlePress: (newInfo: ContactInfo) => void
}

type NavigationHeaderState = {
    isActive: boolean | undefined
}

const styles = StyleSheet.create({
    container: {
        marginRight: Padding.medium
    }
}); 

class NavigationHeader extends React.Component<NavigationHeaderProps, NavigationHeaderState>
{
    constructor(props: NavigationHeaderProps) {
        super(props);
        this.state = {
            isActive: this.props.info.isFavorite
        }; 
    }

    render() {
        let fav = this.state.isActive ? <Favorite width={ImageSize.verySmall} height={ImageSize.verySmall} /> :
            <NotFavorite width={ImageSize.verySmall} height={ImageSize.verySmall} />
        return (
            <TouchableHighlight 
                activeOpacity={1}
                underlayColor={Colors.light}
                style={styles.container} 
                onPress={this.handleOnPress.bind(this)}>
                {fav}
            </TouchableHighlight>
        );
    }

    handleOnPress(e: GestureResponderEvent) {
        this.setState({
            isActive: !this.state.isActive
        }); 
        let newInfo = this.props.info; 
        newInfo.isFavorite = !newInfo.isFavorite; 
        this.props.handlePress(newInfo); 
    }
}

export default NavigationHeader;