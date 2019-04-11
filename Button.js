import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress, children }) => {
const { textStyle, buttonStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}> 
                 {children}
            </Text>
         </TouchableOpacity>
        
    );
};

const styles = {

    textStyle: {
        fontSize: 30,
        paddingTop: 10,
        paddingBottom: 10,
        alignSelf: 'center',
        color: '#007aff',
        fontWeight: '600'
    },

    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginfLeft: 5,
        marginRight: 3
    }

};

export default Button;
