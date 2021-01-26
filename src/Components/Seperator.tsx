/**
 *  File: SectionHeader.tsx
    Author: Amay Kataria
    Date: 01/23/2021
    Description: A simple line divider. 
*/

import React from 'react';
import { StyleSheet, StyleSheetProperties, View } from 'react-native';
import { Padding, Colors } from '../Common/Styles'

// Component style. 
const styles = StyleSheet.create({
    container: {
        borderBottomColor: Colors.smoke,
        borderBottomWidth: 1
    },

    padHorizontal: {
        marginHorizontal: Padding.medium
    }
});

type SeperatorProps = {
    extraStyle?: any,
    applyHorizontalPadding?: boolean
}

// Contact component. 
const Seperator = (props: SeperatorProps) => {
    let style = props.extraStyle ? [styles.container, props.extraStyle] : [styles.container];
    style = props.applyHorizontalPadding ? [style, styles.padHorizontal] : style; 
    return (
        <View style={style}></View>
    ); 
}

export default Seperator;
