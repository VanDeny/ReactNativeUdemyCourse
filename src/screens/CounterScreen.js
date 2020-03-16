import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return(
        <View>
            <Button
                title='Increase'
                onPress={() => {
                    //Nope
                    //counter++;
                    //Yup
                    setCounter(counter + 1);
                }}
            />
            <Button
                title='Decrease'
                onPress={() => {
                    //counter--;
                    setCounter(counter - 1);
                }}
            />
            <Text>Current count: {counter}</Text>
        </View>
    );
};

const style = StyleSheet.create({});

export default CounterScreen;
