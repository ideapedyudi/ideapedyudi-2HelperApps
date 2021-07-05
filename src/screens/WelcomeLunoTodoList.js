import React from 'react';

// ----------------------- react native -----------------------
import { View, Text, StatusBar, TouchableOpacity, Image, StyleSheet } from "react-native";

const WelcomeLunoTodoList = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor='white' />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                {/* ------------------ banner image ------------------- */}
                <Image
                    source={require('../assets/images/Group2.png')}
                    style={{ width: '87%', height: '60%', marginTop: '15%', }}
                    resizeMode="cover"
                />
                {/* ---------------- button dan text ------------------- */}
                <Text style={{ marginTop: 40, fontSize: 18, color: '#39A2DB' }}>Write down everything to remember</Text>
                <TouchableOpacity style={styles.btnMulai} onPress={() => navigation.navigate('LunoTodoList')}>
                    <Text style={{ color: 'white' }}>My To-do List</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default WelcomeLunoTodoList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    btnMulai: {
        backgroundColor: '#00BFA6',
        padding: 12,
        borderRadius: 10,
        marginTop: '5%',
    }
});

