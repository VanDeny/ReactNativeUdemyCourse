import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const name = 'Denis';

    const greeting2 = <Text style={style.textStyle}>Hello there {name}!!!</Text>;

    return (
        <View>
            <Text style={style.viewStyle}>Getting started with react native!</Text>
            {greeting2}
        </View>
    );
};

const style = StyleSheet.create({
    viewStyle: {
        fontSize: 45
    },
    textStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;
