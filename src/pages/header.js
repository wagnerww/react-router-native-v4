import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default props =>
    <View style={style.header}>
        <Text style={style.texto}>JSHunt</Text>
    </View>

const style = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: "#DA552F",
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto: {
        color: "#FFF",
    }
})