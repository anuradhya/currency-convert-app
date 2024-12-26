import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
    const [lkrAmount, setLkrAmount] = useState('');
    const [usdAmount, setUsdAmount] = useState(null);

    const convertCurrency = () => {
        const rate = 0.0031; // Example conversion rate
        const converted = parseFloat(lkrAmount) * rate;
        setUsdAmount(converted.toFixed(2));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Currency Converter</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter amount in LKR"
                keyboardType="numeric"
                value={lkrAmount}
                onChangeText={setLkrAmount}
            />

            <TouchableOpacity style={styles.button} onPress={convertCurrency}>
                <Text style={styles.buttonText}>Convert</Text>
            </TouchableOpacity>

            {usdAmount !== null && (
                <Text style={styles.result}>USD: ${usdAmount}</Text>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    result: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
});
