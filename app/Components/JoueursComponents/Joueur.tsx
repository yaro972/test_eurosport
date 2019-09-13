import React from 'react';
import {ScrollView, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import ListeJoueur from './ListeJoueurs';

const Joueur = () => {
    return (
        <ScrollView style={styles.container}>
            <ListeJoueur/>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex"
    }
});

export default Joueur;
