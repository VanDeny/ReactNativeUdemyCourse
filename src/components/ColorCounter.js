import React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {

    return <View>
        <Text>{color}</Text>
        <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
        <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
        <Text>Madafaka</Text>
    </View>
};

const styles = StyleSheet.create({});

export default ColorCounter;
