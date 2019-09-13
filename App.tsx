import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppContainer from "./app/Navigation/navigation";
import Joueur from "./app/Components/JoueursComponents/Joueur";

export default function App() {


    return (
        <View style={styles.container}>
            <Joueur/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        backgroundColor: '#fff',
        marginTop: 20,
        padding: 10
    },
});
