import React from "react";
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native";


interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({onPress, title}: ButtonProps){
    return(
        <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.7} 
            onPress={onPress}
            >
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles =StyleSheet.create({
    button: {
        backgroundColor: '#A370F7',
        padding: 12,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 30
    },
    btnText: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: 'bold'
    },
})