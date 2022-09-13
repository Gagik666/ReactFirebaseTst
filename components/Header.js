import React from "react";

import { Image, StyleSheet, View } from "react-native";

export const Header = () => {
    return (
        <View style = {styles.header}>
            <Image
                source={require('../assets/icon.png')}
                style = {styles.logo }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#00FFF0'
    },
    logo: {
        maxWidth: 250,
        width: '100%',
        height: 40
    }
})