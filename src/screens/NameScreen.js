import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const NameScreen = () => {
    const [password, setPassword] = useState('');

    return (
        <View>
            <TextInput style={styles.input}
                       autoCapitalize='none'
                       autoCorrect={false}
                       value={password} secureTextEntry={true}
                       onChangeText={(text) => {
                           setPassword(text)
                       }}/>
            {password.length < 5 ? <Text> The pasword must have 5 or more letters </Text> :
                <Text>Password is kinda strong</Text>}
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        margin: 20,
        borderColor: 'black',
        borderWidth: 1,
        height: 40
    }
});

export default NameScreen;
