import React from 'react';

// -------------------- react nativ ----------------------
import { View, Text, StatusBar, TouchableOpacity, Image, StyleSheet } from "react-native";

// ------------------- react navigation -------------------
import { createStackNavigator } from '@react-navigation/stack';

const WelcomeZeroCalculator = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={{ alignItems: 'center' }}>

                {/* --------------- banner image ----------------------  */}
                <Image
                    source={require('../assets/images/BANNER.png')}
                    style={{ width: '80%', height: '66%', marginTop: '22%', marginLeft: 10 }}
                    resizeMode="cover"
                />

                {/* ---------------- button dan text ------------------ */}
                <Text style={{ marginTop: 10, fontSize: 18, color: '#FC7373' }}>From Zero To Infinity</Text>
                <TouchableOpacity style={styles.btnMulai} onPress={() => navigation.navigate('ZeroCalculator')}>
                    <Text style={{ color: 'white' }}>Start Calculator</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default WelcomeZeroCalculator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    btnMulai: {
        backgroundColor: '#FFC980',
        padding: 12,
        borderRadius: 10,
        marginTop: '5%',
    }
});

