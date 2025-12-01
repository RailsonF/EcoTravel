import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import topo from '../assets/img/logo.png'

const Home = () => {
    return (
        <View style={styles.container}>
            <Image source={topo} style={{ height: 100, width:500 }} />
            <Text style={styles.title}>Bem vindo a EcoTravel</Text>
            <Text style={styles.welcomeText}>
                Somos sua página sobre pontos turísticos no cariri
            </Text>
            <Text style={styles.instructionText}>
                Clique no botão "Acessar pontos turísticos" abaixo para acessar todos os nossos pontos turísticos.
            </Text>
            <StatusBar style="light" />
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#faf6ec',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#5ab334",
        marginBottom: 30,
    },
    welcomeText: {
        fontSize: 18,
        color: "#5ab334",
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 15,
    },
    instructionText: {
        fontSize: 16,
        color: "#5ab334",
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
    },
});

export default Home