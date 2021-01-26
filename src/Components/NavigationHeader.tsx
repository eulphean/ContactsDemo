import React from 'react'
import {StyleSheet, GestureResponderEvent } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';
import Favorite from '../Assets/favorite.svg'
import NotFavorite from '../Assets/notfavorite.svg'

import { ImageSize, Padding, Colors } from '../Common/Styles';

type NavigationHeaderProps = {
    isFavorite: boolean | undefined
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
            isActive : this.props.isFavorite
        }
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
        console.log('It was pressed');
    }
}

export default NavigationHeader;