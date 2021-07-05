import React from 'react'

// ------------------ react native -----------------
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'

const Home = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '-10%' }}>
            <StatusBar barStyle='dark-content' backgroundColor='white' />

            {/* ------------ welcome app --------------- */}
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 25, color: '#00BFA6' }}>Hi Semeone</Text>
                <Text style={{ fontSize: 15 }}>Welcome To 2Helper Apps</Text>
            </View>

            {/* ------------- banner image -------------- */}
            <Image
                source={require('../assets/images/Welcome.png')}
                style={{ width: '80%', height: '52%', marginTop: '10%' }}
                resizeMode="cover"
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
