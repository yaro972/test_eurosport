import {Image, ScrollView, StyleSheet, Text, TouchableOpacity} from "react-native";
import React from "react";

const ListeJoueur = () => {
    return (
        <TouchableOpacity style={styles.JoueurContainer}>
            <Image source={{uri: "https://via.placeholder.com/100"}}
                   style={styles.imageContainer}
            />
            <Text
                style={styles.textContainer}
            > Nom du Joueur</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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

export default ListeJoueur
