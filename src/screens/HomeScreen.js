import React from "react";
import {Text, StyleSheet, Button, View, TouchableOpacity} from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.text}>Show me titties</Text>
          <Button
              title="Go to components demo"
              onPress={() => navigation.navigate('Components')}
          />
            <Button
                title='Go to List Demo'
                onPress={() => navigation.navigate('List')}
            />
            <Button
                title='Go to Image Demo'
                onPress={() => navigation.navigate('Image')}
            />

            {/*          <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
            <Text style={styles.text}>Go to List Demo</Text>
          </TouchableOpacity>*/}

        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;