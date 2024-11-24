import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, Platform, FlatList, Image} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData{
    id: string;
    name: string;
}

export function Home(){
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [greeting, setGreeting] = useState('');

    function handleAddNewSkill(){

        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }

            setMySkills(oldState => [...oldState, data]);

            setNewSkill('');

    }
    

    function handleRemoveSkill(id: string) {
        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id
        ))
    }


    useEffect(() => {
        const currentHour = new Date().getHours();

        if(currentHour < 12){
            setGreeting('☀️ Good morning!');
        }else if(currentHour >= 12 && currentHour < 18){
            setGreeting('🌤️ Good Afternoon!');
        }else{
            setGreeting('🌙 Good night!')
        }
    }, [])
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>Welcome, Silas</Text>
                    <Text style={styles.greetings}>{greeting}</Text>
                </View>
                <Image source={require('../image/photo.jpeg')} style={styles.photo}/>
            </View>

            <TextInput 
                style={styles.input}
                placeholder='New skill'
                placeholderTextColor='#555'
                onChangeText={setNewSkill}
                value={newSkill}
            />

            <Button onPress={handleAddNewSkill} title="Add"/>

            <Text style={[styles.title, {marginVertical: 40}]}>My Skills</Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                    <SkillCard skill={item.name} onPress={() => handleRemoveSkill(item.id)}/>
                )}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingTop: 50
    },
    header:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    title: {
        color: '#FFFFFF',
        fontSize: 21
    },
    photo: {
        width: 45, 
        height: 45, 
        borderRadius: 8
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFFFFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 12 : 15,
        marginTop: 30,
        borderRadius: 7
    },
    greetings: {
        color: '#FFFFFF'
    }
})