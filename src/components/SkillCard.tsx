import React from "react";
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps, View } from "react-native";
import {AntDesign, Feather} from '@expo/vector-icons'

interface SkillCardProps extends TouchableOpacityProps{
    skill: string;
}
export function SkillCard({skill, ...rest}: SkillCardProps){
    return(
        <View style={styles.buttonSkill} {...rest}>
            
            <Text style={styles.textSkill}>{skill}</Text>
            <TouchableOpacity {...rest} style={styles.btn}>
                <Feather name="trash-2" size={24} color="#ec5353" />   
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10,
    },
    textSkill: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }, 
    btn: {
        position: 'absolute',
        right: 20,
        top: 15
    }
})