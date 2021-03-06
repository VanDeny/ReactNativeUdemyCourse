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
            <Button
                title='Go to Counter Demo'
                onPress={() => navigation.navigate('Counter')}
            />
            <Button
                title='Go to Color Demo'
                onPress={() => navigation.navigate('Color')}
            />
            <Button
                title='Go to Square Demo'
                onPress={() => navigation.navigate('Square')}
            />
            <Button
                title='Go to Name Demo'
                onPress={() => navigation.navigate('Name')}
            />
            <Button
                title='Go to Box Screen Demo'
                onPress={() => navigation.navigate('Box')}
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
