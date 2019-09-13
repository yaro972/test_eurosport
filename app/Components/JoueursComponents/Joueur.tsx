import React from 'react';
import {ScrollView, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const Joueur = () => {
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.JoueurContainer}>
                <Image source={{uri: "https://via.placeholder.com/100"}}
                       style={styles.imageContainer}
                />
                <Text
                    style={styles.textContainer}
                > Nom du Joueur</Text>
            </TouchableOpacity>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex"
    },
    JoueurContainer: {
        flex: 1
    },
    imageContainer: {
        flex: 1,
        height: 100,
        width: 100
    },
    textContainer: {
        flex: 2,
        color: "#000"
    }
})

export default Joueur;
