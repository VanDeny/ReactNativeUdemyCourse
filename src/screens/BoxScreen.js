import React from 'react';
import {Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
    return (
        <View style={style.viewStyle}>
            <Text style={style.textOneStyle}>Box screen 0</Text>
            <Text style={style.textTwoStyle}>Box screen 1</Text>
            <Text style={style.textThreeStyle}>Box screen 2</Text>
        </View>
    );
};

const style = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'red',
        padding: 2,
        alignItems: 'center',
        height: 100,
        flexDirection: 'row'
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'black',
        flex: 1
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'black',
        flex: 2
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'black',
        flex: 3
    }
});

export default BoxScreen;

