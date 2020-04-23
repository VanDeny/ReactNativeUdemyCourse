import React, {useReducer} from 'react';
import {View, StyleSheet} from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 30;

const reducer = (state, action) => {
    switch (action.colorChangeTo) {
        case 'red':
            return {...state, red: state.red + action.amount > 255 || state.red + action.amount < 0 ? state.red : state.red + action.amount };
        case 'green':
            return {...state, green: state.green + action.amount > 255 || state.green + action.amount < 0 ? state.green : state.green + action.amount};
        case 'blue':
            return {...state, blue: state.blue + action.amount > 255 || state.blue + action.amount < 0 ? state.blue : state.blue + action.amount};
        default:
            return state;
    }
};

const SquareScreen = () => {


/*    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

      const setColor = (color, change) => {
        // color === 'red', 'green', 'blue'
        //change === +15, -15

        switch(color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            default:
                return;
        }
    };*/


    const [state, dispatch] = useReducer(reducer, {red : 0, green: 0, blue: 0});
    const {red, green, blue} = state;

    return <View>
        <ColorCounter onIncrease={() => dispatch({colorChangeTo: 'red' , amount: COLOR_INCREMENT})}
                      onDecrease={() => dispatch({colorChangeTo: 'red' , amount: -1 * COLOR_INCREMENT})}
                      color="Red"/>

        <ColorCounter onIncrease={() => dispatch({colorChangeTo: 'green' , amount: COLOR_INCREMENT})}
                      onDecrease={() => dispatch({colorChangeTo: 'green' , amount: -1 * COLOR_INCREMENT})}
                      color="Green"/>

        <ColorCounter onIncrease={() => dispatch({colorChangeTo: 'blue' , amount: COLOR_INCREMENT})}
                      onDecrease={() => dispatch({colorChangeTo: 'blue' , amount: -1 * COLOR_INCREMENT})}
                      color="Blue"/>

        <View style={{
            height: 150,
            width: 150,
            backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>

    </View>;
};

const styles = StyleSheet.create({});

export default SquareScreen;
